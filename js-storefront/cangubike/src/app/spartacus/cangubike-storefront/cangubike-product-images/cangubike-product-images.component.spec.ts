import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CangubikeProductImagesComponent } from './cangubike-product-images.component';

describe('CangubikeProductImagesComponent', () => {
  let component: CangubikeProductImagesComponent;
  let fixture: ComponentFixture<CangubikeProductImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CangubikeProductImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CangubikeProductImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
