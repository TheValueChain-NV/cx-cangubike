import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatAccordion} from "@angular/material/expansion";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Position,FuildModule,Connection, ConfiguredProduct,configured_product, positions,modules,fluidMoules,connections,moduleTypes} from "./model"
import {MatStepper} from "@angular/material/stepper";



declare global {
  interface Window {
    ExpiviComponent: any; // You can replace 'any' with a more specific type if available
    expivi: {
      saveConfiguration: any;
      setProductAttribute: any;
      _destroy: any;
      _create:any;
    }

  }
}

@Component({
  selector: 'app-cangubike-product-images',
  templateUrl: './cangubike-product-images.component.html',
  styleUrls: ['./cangubike-product-images.component.scss']
})
export class CangubikeProductImagesComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<ConfiguredProduct>(configured_product);
  dataSource2 = new MatTableDataSource<Position>(positions);

  @ViewChild(MatAccordion) accordion: MatAccordion;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource2.paginator = this.paginator;
  }
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  selectedModule: string;
  selectedFluid: string;
  selectedPos1:string;
  selectedPos2:string;
  chunkSize = 6;
  positionChunks: Position[][];
  lastInitializedModel: string;



  defaultOptions: { [key: string]: string }  = {}


  inputData = positions;

  displayColumns: string[];
  displayData: any[];
  showTable: boolean;
  displayedColumns: string[] = ['name','base_price', 'total_price', 'module_type', 'power_system'];
  displayedColumns2: string[] = ['name', 'selectedModuleId', 'modulePrice']
  constructor(private _formBuilder: FormBuilder,private elementRef: ElementRef) {
    this.positionChunks = this.chunkPositions(positions,this.chunkSize);
  }
  ngOnInit(): void {
    this.initialize3DModel('22561', undefined)
    this.lastInitializedModel = 'basic';
  }
  viewerReady(): void {
    // Trigger custom event
    const event = new CustomEvent('expivi-viewer-ready', {
      detail: { productId: '22561' }
    });
    document.dispatchEvent(event);

    // Trigger resize event
    const resizeEvent = new Event('resize');
    window.dispatchEvent(resizeEvent);
  }
  someFunction(attributeId: number, attributeValue: number) {
    window.expivi.saveConfiguration(attributeId, attributeValue).then((aSaveResults: any) => {
    });
  }

  selectCard(connection: any) {
    connections.forEach((conn) => {
      if (conn !== connection) {
        conn.selected = false; // Deselect all other cards
      }
    });
    connection.selected = !connection.selected; // Toggle selected state of clicked card
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  // Method to convert modules map into an array of objects
  getModulesArray(modulesMap: Map<string, string>): { name: string, value: string }[] {
    return Array.from(modulesMap, ([name, value]) => ({ name, value }));
  }

  chunkPositions(array: any[], size: number): Position[][] {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }

  fillRobotModule() {
    configured_product[0].module_type = this.selectedModule;
  }

  fillFluid() {
    configured_product[0].power_system = this.selectedFluid;
    console.log(configured_product);
  }

  fillPositions(position_name: string,position_id:string, event: any) {
    const moduleId = this.getModuleID(event, position_id);
    console.log(moduleId);
    window.expivi.setProductAttribute(position_id,moduleId);
    this.setModulePriceForPosition(position_id, event);
    console.log(this.getModulePrice(position_id));
    configured_product[0].modules.set(position_name, this.getModuleName(event));
    configured_product[0].total_price += this.getModulePrice(position_id);

    this.dataSource.data = configured_product;
    this.dataSource2.data = positions;
    console.log(position_id.toString())
    const position_id_string= position_id.toString();
   this.defaultOptions[position_id] = event;

    console.log(this.defaultOptions);
  }

  getModuleID(moduleName: string, positionId: string) {
    const  pos = positions.find(p => p.id == positionId);
    return  pos.possibleModules.filter(mod => mod.name == moduleName)
      .map(mod => mod.id).at(0);

  }
  setModulePriceForPosition(position_id:string, moduleName:string) {
    const position = positions.find(pos => pos.id === position_id);
    console.log(position);
    const module = modules.find(mod => mod.name === moduleName);

    position.modulePrice = module.price;
  }
  getModuleName(id:string):string {
    const position = positions.find(pos => pos.id == id);
    return position ? position.name : undefined;
  }
  getModulePrice(id:string) {
    const position = positions.find(pos => pos.id == id);

    return position.modulePrice;
  }
  setToolSide() {
    if (this.lastInitializedModel !== 'side') {
      this.initialize3DModel('22593', undefined);
      this.lastInitializedModel = 'side';
    }

  }

  setBasicModel(){
    if (this.lastInitializedModel !== 'basic') {
      this.initialize3DModel('22561', this.defaultOptions);
      this.lastInitializedModel = 'basic';
    }

  }

  setStandModel() {
    if (this.lastInitializedModel !== 'stand') {
      this.initialize3DModel('22592', undefined)
      this.lastInitializedModel = 'stand';
    }

  }
  initialize3DModel(productId:string, defaultOptions: any ) {
    const node = document.getElementById("viewer-container");
    //window.expivi._destroy();
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
    // const configuration = undefined;
    // const currency = 'EUR';
    // const locale = 'en-US';
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYjljMjE2NmUzNmU4NzYwNGY2ZGRiODA2MDk3ZDUzYTEwZWEyODMxMzg1Njg4NzQyZmMzYmExNjQ0OWVkYmVjZGI3MDY4ZjUyMDVhZDliNTUiLCJpYXQiOjE3MTEzODIyMjYuNTc5NzE0LCJuYmYiOjE3MTEzODIyMjYuNTc5NzE2LCJleHAiOjIwMjY5MTUwMjYuMzkxNTg5LCJzdWIiOiI2MTc1Iiwic2NvcGVzIjpbXX0.Hy-PydTzs11JPX-T6shrEI15VnBXWhDRjBMqkGHqFwkuq5g0oa9di5vs4mNnfSiA7BQ86A3cdYI5lWCi0JA0sUrKkFLoIC77ICx7qW2pECtOKYvlvI8r1fWdhtJe7PunlwDiJZTM8by9OI_v2NoZM4XzPOLYvvzwlIoHnH1ocAcXdTVRyj5nuOJ0sc-L9rx4jVV9asMT-htsss2-qSZsE8XFG8svrj7uPN5DYCZoL5YynIMr4TxAOFMVkrcEc0Q0zK7H94_YCMeU4zsmOdPA0BRab5D4Eo9SIYnW07qJMrMxnEP_TXcIGykGsW9o7kDdVSKiAagxBtcntEKQ4rSh1SztvToSdjLTiw9StUeFiemcKUQyaneauX_v_E7jIFQyy8VNsNAn0B48haM-LQJUV91bSHBiCuKaB4J9uIofq_43YgS2bUhIBaT1soTof1Gl2jlWFAzgcg9S6KRWW8w1CKZE9j6oOVdN2ZSYFArOUktkgiffUKq7clJe6bb-Xqw5NSCqKXkhHXDy44E1VhUtYQK8LLO7nv1LGvtacoVBHm8bEWnUGNi8hSeBVdbwJtI6IPzKevcrODM2YF-RCCYyjjrU2MjGKddzXwrWXUTC_iFoViLFqvFJExaRgMubU-uc0IwFQrXm5XjYe8luv13yHz6HmD1G4WglfADGHEYZ8ic';

     // let expiviComponent = new window.ExpiviComponent({
     //  catalogueId: productId,
     //  viewerContainer: this.elementRef.nativeElement.querySelector('#viewer-container'),
     //  token: token,
     //   defaultOptions: {209276 :"513864",209277 :"513868"}

    //});
    window.expivi._create(
      token,
      productId,
      '#viewer-container',
      {
        defaultOptions: this.defaultOptions,
        show360Indicator: false,
        showProgress: true
      }
    )
  }
  // window.expivi._create(
  //   aToken : string,
  //   aCatalogueId : number,
  //   aViewContainer : any,
  //   aOptions? : {
  //     cameraDropdownVisible : boolean,
  //     defaultOptions? : {[key : string] : string},
  //     defaultMaterials? : {[key : string] : string},
  //     defaultApplied? : {[key : string] : string},
  //     configuredProduct?: ConfiguredProductOptions[],
  //     temporaryProductId? : string,
  //     show360Indicator? : boolean,
  //     showProgress? : boolean,
  //     preset: string
  //   }

  protected readonly modules = modules;
  protected readonly connections = connections;
  protected readonly fluidMoules = fluidMoules;
  protected readonly moduleTypes = moduleTypes;

  protected readonly configured_product = configured_product;

  onNextStep(stepper: MatStepper, step: string) {
    if (step === 'stand') {
      this.setToolSide();
    }
    if (step === 'tool') {
      this.setStandModel();
    }
    stepper.next();
  }

  onPreviousStep(stepper: MatStepper, step: string) {
    if (step === 'tool') {
      this.setBasicModel();
    }
    if (step === 'stand') {
      this.setToolSide();
    }

    stepper.previous();
  }
}

