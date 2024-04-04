interface RobotModule {
  value: string;
  viewValue: string;
}
export interface FuildModule {
  value: string;
  viewValue: string;
}
export interface Connection {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  description: string;
  selected: boolean;
}
interface Module {
  id: number;
  name:string;
  rs_ts?: string;
  r2o_code?: string;
  description?: string;
  price?: number;
  imageUrl?: string;
  selected?: boolean;
}
export interface ConfiguredProduct {
  id: string;
  name: string;
  modules: Map<string, string>;
  base_price: number;
  total_price: number;
  module_type: string;
  power_system: string;
}

export interface Position {
  id: string;
  name: string;
  set:string;
  possibleModules: Array<Module>;
  selectedModuleId: string;
  modulePrice:number;
}

export interface Configuration {
  attributeId: string;
  attributeValue: string;
}
export var positions: Position[] = [
  {
    id: '209276',
    name: 'Slot 1-2',
    set: '2x2',
    possibleModules: [{id: 513864, name: 'K81560780'}, {id: 513865, name: 'K81560784'}, {id: 513866, name: ''}],
    selectedModuleId: null,
    modulePrice:0
  },
  {
    id: '209278',
    name: 'Slot 3-4',
    set: '2x2',
    possibleModules: [{id: 513871, name: 'K81560780'}, {id: 513872, name: 'K81560784'}, {id: 513873, name: ''}],
    selectedModuleId: null,
    modulePrice:0
  },
  {
    id: '209279',
    name: 'Slot 5-6',
    set: '2x2',
    possibleModules: [{id: 513874, name: 'K81560780'}, {id: 513875, name: 'K81560784'}, {id: 513876, name: ''}],
    selectedModuleId: null,
    modulePrice:0
  },
  {
    id: '209281',
    name: 'Slot 7-8',
    set: '2x2',
    possibleModules: [{id: 513881, name: 'K81560780'}, {id: 513882, name: 'K81560784'}, {id: 513883, name: ''}],
    selectedModuleId: null,
    modulePrice:0
  },
  {
    id: '209282',
    name: 'Slot 9-10',
    set: '2x2',
    possibleModules: [{id: 513884, name: 'K81560780'}, {id: 513885, name: 'K81560784'}, {id: 513886, name: ''}],
    selectedModuleId: null,
    modulePrice:0
  },
  {
    id: '209284',
    name: 'Slot 11-12',
    set: '2x2',
    possibleModules: [{id: 513881, name: 'K81560780'}, {id: 513882, name: 'K81560784'}, {id: 513883, name: ''}],
    selectedModuleId: null,
    modulePrice:0
  },
  {
    id: '209285',
    name: 'Slot 13-14',
    set: '2x2',
    possibleModules: [{id: 513894, name: 'K81560780'}, {id: 513895, name: 'K81560784'}, {id: 513896, name: ''}],
    selectedModuleId: null,
    modulePrice:0
  },
  {
    id: '209287',
    name: 'Slot 15-16',
    set: '2x2',
    possibleModules: [{id: 513901, name: 'K81560780'}, {id: 513902, name: 'K81560784'}, {id: 513903, name: ''}],
    selectedModuleId: null,
    modulePrice:0
  },
  {
    id: '209288',
    name: 'Slot 17-18',
    set: '2x2',
    possibleModules: [{id: 513904, name: 'K81560780'}, {id: 513905, name: 'K81560784'}, {id: 513906, name: ''}],
    selectedModuleId: null,
    modulePrice:0
  },
  {
    id: '209290',
    name: 'Slot 19-20',
    set: '2x2',
    possibleModules: [{id: 513911, name: 'K81560780'}, {id: 513912, name: 'K81560784'}, {id: 513913, name: ''}],
    selectedModuleId: null,
    modulePrice:0
  },
  {
    id: '209291',
    name: 'Slot 21-22',
    set: '2x2',
    possibleModules: [{id: 513914, name: 'K81560780'}, {id: 513915, name: 'K81560784'}, {id: 513916, name: ''}],
    selectedModuleId: null,
    modulePrice:0
  },
  {
    id: '209293',
    name: 'Slot 23-24',
    set: '2x2',
    possibleModules: [{id: 513921, name: 'K81560780'}, {id: 513922, name: 'K81560784'}, {id: 513923, name: ''}],
    selectedModuleId: null,
    modulePrice:0
  },
  {
    id: '209277',
    name: 'Slot 1-4',
    set: '4x4',
    possibleModules: [{id: 513867, name: 'K81451142'}, {id: 513868, name: 'K81451144'}, {
      id: 513869,
      name: 'K81560853'
    }, {id: 513870, name: ''}],
    selectedModuleId: null,
    modulePrice:0
  },
  {
    id: '209280',
    name: 'Slot 5-8',
    set: '4x4',
    possibleModules: [{id: 513877, name: 'K81451142'}, {id: 513878, name: 'K81451144'}, {
      id: 513879,
      name: 'K81560853'
    }, {id: 513880, name: ''}],
    selectedModuleId: null,
    modulePrice:0
  },
  {
    id: '209283',
    name: 'Slot 9-12',
    set: '4x4',
    possibleModules: [{id: 513887, name: 'K81451142'}, {id: 513888, name: 'K81451144'}, {
      id: 513889,
      name: 'K81560853'
    }, {id: 513890, name: ''}],
    selectedModuleId: null,
    modulePrice:0
  },
  {
    id: '209286',
    name: 'Slot 13-16',
    set: '4x4',
    possibleModules: [{id: 513897, name: 'K81451142'}, {id: 513898, name: 'K81451144'}, {
      id: 513899,
      name: 'K81560853'
    }, {id: 513900, name: ''}],
    selectedModuleId: null,
    modulePrice:0
  },
  {
    id: '209289',
    name: 'Slot 17-20',
    set: '4x4',
    possibleModules: [{id: 513907, name: 'K81451142'}, {id: 513908, name: 'K81451144'}, {
      id: 513909,
      name: 'K81560853'
    }, {id: 513910, name: ''}],
    selectedModuleId: null,
    modulePrice:0
  },
  {
    id: '209292',
    name: 'Slot 21-24',
    set: '4x4',
    possibleModules: [{id: 513917, name: 'K81451142'}, {id: 513918, name: 'K81451144'}, {
      id: 513919,
      name: 'K81560853'
    }, {id: 513920, name: ''}],
    selectedModuleId: null,
    modulePrice:0
  }
  ];

  export var   moduleTypes: RobotModule[] = [
    {value: 'fluid', viewValue: 'Fluid/Air Module'},
    {value: 'electric', viewValue: 'Electric Module'},
  ];

export var fluidMoules: FuildModule[] = [
  {value: 'pneumatic', viewValue: 'Pneumatic'},
  {value: 'pneumatic-vaccum', viewValue: 'Pneumatic & Vaccum'},
  {value: 'pneumatic-fluid', viewValue: 'Pneumatic & Fluid'},
  {value: 'hydraulics', viewValue: 'Hydraulics'},
];

export var connections: Connection[] = [
  {id: '4515512', name: 'G 1/2', price: '100€', imageUrl: 'https://www.staubli.com/adobe/dynamicmedia/deliver/dm-aid--42252e8a-1ca0-4e2c-afeb-8437122cdf7a/abs-standard-breakaway-tim.png?quality=82&preferwebp=true', description: 'G 1/2 Female Thrad', selected: false},
  {id: '4515513', name: 'NTP 1/2', price: '100€', imageUrl: 'https://www.staubli.com/adobe/dynamicmedia/deliver/dm-aid--5da9019c-b377-4ad2-afb7-0f72969f8fa1/kbh-beakaway-cable-tim.jpg?quality=82&preferwebp=true', description: 'NTP 1/2 Female Thrad', selected: false},
  {id: '4515514', name: 'RC 1/2', price: '150€', imageUrl: 'https://www.staubli.com/adobe/dynamicmedia/deliver/dm-aid--7455fd14-4bce-4d58-a9b1-7cd0993ddfcf/quick-coupling-rbe-tm-nuclear-industry-tim.png?quality=82&preferwebp=true', description: 'RC 1/2 Female Thrad', selected: false},

];

export var modules: Module[] = [
  {id:513864, name:'K81560780', rs_ts: 'R', r2o_code:'WT', price: 180, imageUrl: 'assets/K81560780.png', description: 'Transfer module SPM for fluids and pneumatics\n Nominal width: 12 mm', selected: false},
  {id:513865, name:'K81560784', rs_ts: 'T', r2o_code:'WM', price: 200, imageUrl: 'assets/K81560781.png', description: 'Transfer module SPM for fluids and pneumatics\n Nominal width: 12 mm', selected: false},
  {id:513907, name:'K81451142', rs_ts: 'T', r2o_code:'WS', price: 137, imageUrl: 'assets/K81451142.png', description: 'Transfer module SPM for fluids and pneumatics\n Nominal width: 12 mm', selected: false},
  {id:513908, name:'K81451144', rs_ts: 'R', r2o_code:'XA', price: 228, imageUrl: 'assets/K81451144.png', description: 'Transfer module SPM for fluids and pneumatics\n Nominal width: 12 mm', selected: false},
  {id:513909, name:'K81560853', rs_ts: 'T', r2o_code:'XB', price: 241, imageUrl: 'assets/K81560853.png', description: 'Transfer module SPM for fluids and pneumatics\n Nominal width: 12 mm', selected: false}
];

export var configured_product: ConfiguredProduct[] = [{id: '93909940', name: 'MPS631', modules:new Map<string,string>,module_type:null, power_system:null,base_price:350,total_price:350}]
