"use strict";(self.webpackChunkcangubike=self.webpackChunkcangubike||[]).push([[39],{9839:(b,E,l)=>{l.d(E,{FV:()=>A,mb:()=>y});var s=l(4537),v=l(2375),o=l(6940),p=l(5732),a=l(7949),h=l(205),m=l(5304),g=l(8692),f=l(9182);let y=(()=>{class t{constructor(e){this.converter=e}convert(e,r){return void 0===r&&(r={...e}),e.entries&&(r.entries=e.entries.map(n=>this.convertOrderEntry(n,e.code,e.appliedProductPromotions))),e.consignments&&(r.consignments=e.consignments.map(n=>({...n,entries:n.entries?.map(i=>({...i,orderEntry:this.convertOrderEntry(i.orderEntry,e.code,e.appliedProductPromotions)}))}))),e.unconsignedEntries&&(r.unconsignedEntries=e.unconsignedEntries.map(n=>this.convertOrderEntry(n,e.code,e.appliedProductPromotions))),r}convertOrderEntry(e,r,n){return{...e,product:this.converter.convert(e?.product,o.jrf),orderCode:r,promotions:this.converter.convert({item:e,promotions:n},v.Cx)}}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(o.IXI))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),_=(()=>{class t{constructor(e){this.converter=e}convert(e,r){return void 0===r&&(r={...e}),e.entries&&(r.entries=e.entries.map(n=>({...n,product:this.converter.convert(n.product,o.jrf),promotions:this.converter.convert({item:n,promotions:e.appliedProductPromotions},v.Cx)}))),r}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(o.IXI))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),R=(()=>{class t{constructor(e){this.converter=e}convert(e,r){return void 0===r&&(r={...e}),e.returnEntries&&(r.returnEntries=e.returnEntries.map(n=>({...n,orderEntry:this.convertOrderEntry(n.orderEntry)}))),r}convertOrderEntry(e){return{...e,product:this.converter.convert(e?.product,o.jrf)}}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(o.IXI))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),D=(()=>{class t{convert(e,r){return void 0===r&&(r={...e}),e.replenishmentStartDate&&(r.replenishmentStartDate=this.convertDate(e.replenishmentStartDate)),r}convertDate(e){return`${e}T${(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hourCycle:"h23"})}:00${o.IMh.getLocalTimezoneOffset()}`}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const O={"Content-Type":"application/json"};let P=(()=>{class t{constructor(e,r,n){this.http=e,this.occEndpoints=r,this.converter=n}load(e,r){const n=this.occEndpoints.buildUrl("orderDetail",{urlParams:{userId:e,orderId:r}});let i=new p.WM;return e===o.Fds&&(i=o.Fox.createHeader(o._Re,!0,i)),this.http.get(n,{headers:i}).pipe(this.converter.pipeable(a.YA))}loadHistory(e,r,n,i){const d={};r&&(d.pageSize=r.toString()),n&&(d.currentPage=n.toString()),i&&(d.sort=i.toString());const u=this.occEndpoints.buildUrl("orderHistory",{urlParams:{userId:e},queryParams:d});return this.http.get(u).pipe(this.converter.pipeable(a.Rc))}getConsignmentTracking(e,r,n=o.zyp){const i=this.occEndpoints.buildUrl("consignmentTracking",{urlParams:{userId:n,orderCode:e,consignmentCode:r}});return this.http.get(i).pipe(this.converter.pipeable(a.m1))}cancel(e,r,n){const i=this.occEndpoints.buildUrl("cancelOrder",{urlParams:{userId:e,orderId:r}}),d=new p.WM({...O});return this.http.post(i,n,{headers:d}).pipe((0,m.K)(u=>(0,h._)(u)))}createReturnRequest(e,r){const n=this.occEndpoints.buildUrl("returnOrder",{urlParams:{userId:e}}),i=new p.WM({...O});return r=this.converter.convert(r,a.Nz),this.http.post(n,r,{headers:i}).pipe((0,m.K)(d=>(0,h._)(d)),this.converter.pipeable(a.Ge))}loadReturnRequestList(e,r,n,i){const d={};r&&(d.pageSize=r.toString()),n&&(d.currentPage=n.toString()),i&&(d.sort=i.toString());const u=this.occEndpoints.buildUrl("orderReturns",{urlParams:{userId:e},queryParams:d});return this.http.get(u).pipe(this.converter.pipeable(a.SL))}loadReturnRequestDetail(e,r){const n=this.occEndpoints.buildUrl("orderReturnDetail",{urlParams:{userId:e,returnRequestCode:r}});return this.http.get(n).pipe(this.converter.pipeable(a.Ge))}cancelReturnRequest(e,r,n){const i=this.occEndpoints.buildUrl("cancelReturn",{urlParams:{userId:e,returnRequestCode:r}}),d=new p.WM({...O});return this.http.patch(i,n,{headers:d}).pipe((0,m.K)(u=>(0,h._)(u)))}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(p.eN),s.LFG(o.Lz0),s.LFG(o.IXI))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})(),M=(()=>{class t{constructor(e,r,n){this.http=e,this.occEndpoints=r,this.converter=n,this.logger=(0,s.f3M)(o.mQy)}placeOrder(e,r,n){let i=new p.WM({"Content-Type":"application/x-www-form-urlencoded"});return e===o.Fds&&(i=o.Fox.createHeader(o._Re,!0,i)),this.http.post(this.getPlaceOrderEndpoint(e,r,n.toString()),{},{headers:i}).pipe((0,m.K)(d=>(0,h._)((0,o.cxH)(d,this.logger))),(0,o.twT)({shouldRetry:o.Pzz}),this.converter.pipeable(a.YA))}getPlaceOrderEndpoint(e,r,n){return this.occEndpoints.buildUrl("placeOrder",{urlParams:{userId:e},queryParams:{cartId:r,termsChecked:n}})}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(p.eN),s.LFG(o.Lz0),s.LFG(o.IXI))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})(),L=(()=>{class t{constructor(e,r,n){this.http=e,this.occEndpoints=r,this.converter=n}load(e,r){return this.http.get(this.occEndpoints.buildUrl("replenishmentOrderDetails",{urlParams:{userId:e,replenishmentOrderCode:r}})).pipe(this.converter.pipeable(a.JD))}loadReplenishmentDetailsHistory(e,r,n,i,d){const u={};return n&&(u.pageSize=n.toString()),i&&(u.currentPage=i.toString()),d&&(u.sort=d.toString()),this.http.get(this.occEndpoints.buildUrl("replenishmentOrderDetailsHistory",{urlParams:{userId:e,replenishmentOrderCode:r},queryParams:u})).pipe(this.converter.pipeable(a.Rc))}cancelReplenishmentOrder(e,r){const n=(new p.WM).set("Content-Type","application/json");return this.http.patch(this.occEndpoints.buildUrl("cancelReplenishmentOrder",{urlParams:{userId:e,replenishmentOrderCode:r}}),{},{headers:n}).pipe(this.converter.pipeable(a.JD))}loadHistory(e,r,n,i){const d={};r&&(d.pageSize=r.toString()),n&&(d.currentPage=n.toString()),i&&(d.sort=i.toString());const u=this.occEndpoints.buildUrl("replenishmentOrderHistory",{urlParams:{userId:e},queryParams:d});return this.http.get(u).pipe(this.converter.pipeable(a.HN))}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(p.eN),s.LFG(o.Lz0),s.LFG(o.IXI))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})(),I=(()=>{class t{constructor(e,r,n){this.http=e,this.occEndpoints=r,this.converter=n,this.logger=(0,s.f3M)(o.mQy)}scheduleReplenishmentOrder(e,r,n,i){r=this.converter.convert(r,a.dC);const d=(new p.WM).set("Content-Type","application/json");return this.http.post(this.getScheduleReplenishmentOrderEndpoint(i,e,n.toString()),r,{headers:d}).pipe((0,m.K)(u=>(0,h._)((0,o.cxH)(u,this.logger))),(0,o.twT)({shouldRetry:o.Pzz}),this.converter.pipeable(a.JD))}getScheduleReplenishmentOrderEndpoint(e,r,n){return this.occEndpoints.buildUrl("scheduleReplenishmentOrder",{urlParams:{userId:e},queryParams:{cartId:r,termsChecked:n}})}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(p.eN),s.LFG(o.Lz0),s.LFG(o.IXI))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})(),C=(()=>{class t{convert(e,r){return void 0===r&&(r={...e}),r}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),F=(()=>{class t{constructor(e,r,n){this.http=e,this.occEndpoints=r,this.converter=n,this.logger=(0,s.f3M)(o.mQy)}reorder(e,r){const n=(new p.WM).set("Content-Type","application/json");return this.http.post(this.getReorderOrderEndpoint(e,r),{},{headers:n}).pipe((0,m.K)(i=>(0,h._)((0,o.cxH)(i,this.logger))),this.converter.pipeable(a.W4))}getReorderOrderEndpoint(e,r){return this.occEndpoints.buildUrl("reorder",{urlParams:{userId:r},queryParams:{orderCode:e}})}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(p.eN),s.LFG(o.Lz0),s.LFG(o.IXI))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})();const z={backend:{occ:{endpoints:{orderHistory:"users/${userId}/orders",orderDetail:"users/${userId}/orders/${orderId}?fields=FULL",consignmentTracking:"users/${userId}/orders/${orderCode}/consignments/${consignmentCode}/tracking",cancelOrder:"users/${userId}/orders/${orderId}/cancellation",returnOrder:"users/${userId}/orderReturns?fields=BASIC,returnEntries(BASIC,refundAmount(formattedValue),orderEntry(basePrice(formattedValue),product(name,code,baseOptions,images(DEFAULT,galleryIndex)))),deliveryCost(formattedValue),totalPrice(formattedValue),subTotal(formattedValue)",orderReturns:"users/${userId}/orderReturns?fields=BASIC",orderReturnDetail:"users/${userId}/orderReturns/${returnRequestCode}?fields=BASIC,returnEntries(BASIC,refundAmount(formattedValue),orderEntry(basePrice(formattedValue),product(name,code,baseOptions,images(DEFAULT,galleryIndex)))),deliveryCost(formattedValue),totalPrice(formattedValue),subTotal(formattedValue)",cancelReturn:"users/${userId}/orderReturns/${returnRequestCode}",replenishmentOrderDetails:"users/${userId}/replenishmentOrders/${replenishmentOrderCode}?fields=FULL,costCenter(FULL),purchaseOrderNumber,paymentType,user",replenishmentOrderDetailsHistory:"users/${userId}/replenishmentOrders/${replenishmentOrderCode}/orders",cancelReplenishmentOrder:"users/${userId}/replenishmentOrders/${replenishmentOrderCode}?fields=FULL,costCenter(FULL),purchaseOrderNumber,paymentType,user",replenishmentOrderHistory:"users/${userId}/replenishmentOrders?fields=FULL,replenishmentOrders(FULL, purchaseOrderNumber)",placeOrder:"users/${userId}/orders?fields=FULL"}}}};let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({providers:[(0,o.i51)(z),{provide:f.gV,useClass:P},{provide:f.ir,useClass:L},{provide:f.Ru,useClass:M},{provide:f.yN,useClass:I},{provide:f.u4,useClass:F},{provide:a.Ge,useExisting:R,multi:!0},{provide:a.YA,useExisting:y,multi:!0},{provide:a.JD,useExisting:_,multi:!0},{provide:a.dC,useExisting:D,multi:!0},{provide:a.W4,useExisting:C,multi:!0}],imports:[g.ez]}),t})()}}]);