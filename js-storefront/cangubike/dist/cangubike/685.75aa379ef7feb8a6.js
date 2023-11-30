"use strict";(self.webpackChunkcangubike=self.webpackChunkcangubike||[]).push([[685],{3685:(cn,M,s)=>{s.r(M),s.d(M,{AccountSummaryModule:()=>en});var t=s(4650),T=s(2654),O=s(8514),Z=s(6053),C=s(5154),p=s(4850),L=s(5778),U=s(7545),i=s(272),D=s(8773),m=s(8871);class F{}let E=(()=>{class e{constructor(n){this.accountSummaryAdapter=n}getAccountSummary(n,o){return this.accountSummaryAdapter.getAccountSummary(n,o)}getDocumentList(n,o,a){return this.accountSummaryAdapter.getDocumentList(n,o,a)}getDocumentAttachment(n,o,a,r){return this.accountSummaryAdapter.getDocumentAttachment(n,o,a,r)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(F))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})(),I=(()=>{class e{constructor(n,o,a){this.routingService=n,this.userIdService=o,this.accountSummaryConnector=a,this.subscriptions=new T.w,this.subscriptions.add(this.userIdService.takeUserId().subscribe(r=>this.userId=r)),this.subscriptions.add(this.getOrgUnitId().subscribe(r=>this.orgUnitId=r))}ngOnDestroy(){this.subscriptions.unsubscribe()}getAccountSummary(n){return this.accountSummaryConnector.getAccountSummary(this.userId,n??this.orgUnitId).pipe((0,C.d)(1))}getDocumentList(n,o){return this.accountSummaryConnector.getDocumentList(this.userId,o||this.orgUnitId,n).pipe((0,C.d)(1))}getDocumentAttachment(n,o,a){return this.accountSummaryConnector.getDocumentAttachment(this.userId,a||this.orgUnitId,n,o).pipe((0,C.d)(1))}getOrgUnitId(){return this.routingService.getRouterState().pipe((0,p.U)(n=>n.state.params),(0,L.x)(),(0,p.U)(n=>n.orgUnit))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(i.Znh),t.LFG(i.XBV),t.LFG(E))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const P=new t.OlP("AccountSummaryNormalizer"),j=new t.OlP("AccountSummaryDocumentNormalizer"),R="orgAccountSummaryList.breadcrumbs.list";let $=(()=>{class e extends D.hD{constructor(n,o,a,r){super(n,o,a,r),this.contentPageMetaResolver=n,this.translation=o,this.semanticPath=a,this.routingService=r,this.ACCOUNT_SUMMARY_SEMANTIC_ROUTE="orgAccountSummary",this.ACCOUNT_SUMMARY_LIST_LABEL="Account Summaries",this.ACCOUNT_SUMMARY_LIST_PATH="/organization/account-summary",this.orgAccountSummaryBreadcrumb$=(0,O.P)(()=>this.routingService.getRouterState()).pipe((0,p.U)(u=>u?.state?.semanticRoute),(0,L.x)(),(0,U.w)(u=>u===this.ACCOUNT_SUMMARY_SEMANTIC_ROUTE?this.translation.translate(this.ORGANIZATION_TRANSLATION_KEY).pipe((0,p.U)(l=>[{label:l,link:this.semanticPath.get(this.ORGANIZATION_SEMANTIC_ROUTE)}])):(0,Z.aj)([this.translation.translate(this.ORGANIZATION_TRANSLATION_KEY),this.translation.translate(R)]).pipe((0,p.U)(([l,A])=>[{label:l,link:this.semanticPath.get(this.ORGANIZATION_SEMANTIC_ROUTE)},{label:this.ACCOUNT_SUMMARY_LIST_LABEL,link:this.semanticPath.get(this.ACCOUNT_SUMMARY_SEMANTIC_ROUTE)}])))),this.breadcrumbs$=(0,Z.aj)([this.orgAccountSummaryBreadcrumb$,(0,O.P)(()=>this.contentPageMetaResolver.resolveBreadcrumbs())]).pipe((0,p.U)(([u,l=[]])=>{const[A,...h]=l;return[A,...u,...h]}),(0,C.d)({bufferSize:1,refCount:!0}))}getScore(n){return super.getScore(n)+(n.label?.startsWith(this.ACCOUNT_SUMMARY_LIST_PATH)?1:-1)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(i.vc1),t.LFG(i.D7D),t.LFG(i.hCH),t.LFG(i.Znh))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const H=[I,{provide:m.H6,useExisting:I}];let k=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[...H,E,{provide:i.FRf,useExisting:$,multi:!0}]}),e})();var b=s(1737),N=s(7221),W=s(529);let z=(()=>{class e{constructor(n,o,a){this.http=n,this.occEndpoints=o,this.converter=a,this.logger=(0,t.f3M)(i.mQy)}getAccountSummary(n,o){return this.http.get(this.buildAccountSummaryUrl(n,o)).pipe((0,N.K)(a=>(0,b._)((0,i.cxH)(a,this.logger))),this.converter.pipeable(P))}getDocumentList(n,o,a){return this.http.get(this.buildDocumentListUrl(n,o,a)).pipe((0,N.K)(r=>(0,b._)((0,i.cxH)(r,this.logger))),this.converter.pipeable(j))}getDocumentAttachment(n,o,a,r){return this.http.get(this.buildDocumentAttachmentUrl(n,o,a,r),{responseType:"blob"}).pipe((0,N.K)(l=>(0,b._)((0,i.cxH)(l,this.logger))))}buildAccountSummaryUrl(n,o){return this.occEndpoints.buildUrl("accountSummary",{urlParams:{userId:n,orgUnitId:o}})}buildDocumentListUrl(n,o,a){return this.occEndpoints.buildUrl("accountSummaryDocument",{urlParams:{userId:n,orgUnitId:o},queryParams:a})}buildDocumentAttachmentUrl(n,o,a,r){return this.occEndpoints.buildUrl("accountSummaryDocumentAttachment",{urlParams:{userId:n,orgUnitId:o,orgDocumentId:a,orgDocumentAttachmentId:r}})}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(W.eN),t.LFG(i.Lz0),t.LFG(i.IXI))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();const V={backend:{occ:{endpoints:{accountSummary:"users/${userId}/orgUnits/${orgUnitId}/accountSummary",accountSummaryDocument:"users/${userId}/orgUnits/${orgUnitId}/orgDocuments",accountSummaryDocumentAttachment:"users/${userId}/orgUnits/${orgUnitId}/orgDocuments/${orgDocumentId}/attachments/${orgDocumentAttachmentId}"}}}};let K=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[(0,i.i51)(V),{provide:F,useClass:z}]}),e})();var _=s(6895),d=s(8924),B=s(1746),X=s(591),tt=s(2994),nt=s(1307),Y=s(2986),x=s(4006),J=s(7039),f=s(3412),et=s(5883);function ot(e,c){if(1&e&&(t.ynx(0),t._UZ(1,"cx-date-picker",9),t.BQk()),2&e){const n=t.oxw().formGroup;t.xp6(1),t.Q6J("control",n.controls.from)}}function ct(e,c){if(1&e&&t._UZ(0,"input",10)(1,"cx-form-errors",9),2&e){const n=t.oxw(),a=n.formGroup;t.Q6J("type",n.type),t.xp6(1),t.Q6J("control",a.controls.from)}}function at(e,c){if(1&e&&(t.ynx(0),t._UZ(1,"cx-date-picker",9),t.BQk()),2&e){const n=t.oxw().formGroup;t.xp6(1),t.Q6J("control",n.controls.to)}}function rt(e,c){if(1&e&&t._UZ(0,"input",11)(1,"cx-form-errors",9),2&e){const n=t.oxw(),a=n.formGroup;t.Q6J("type",n.type),t.xp6(1),t.Q6J("control",a.controls.to)}}function ut(e,c){if(1&e&&(t.ynx(0,3),t.TgZ(1,"label",4)(2,"span"),t._uU(3),t.ALo(4,"cxTranslate"),t.qZA(),t.YNc(5,ot,2,1,"ng-container",5),t.YNc(6,ct,2,2,"ng-template",null,6,t.W1O),t.qZA(),t.TgZ(8,"label",4)(9,"span"),t._uU(10),t.ALo(11,"cxTranslate"),t.qZA(),t.YNc(12,at,2,1,"ng-container",5),t.YNc(13,rt,2,2,"ng-template",null,7,t.W1O),t._UZ(15,"cx-form-errors",8),t.qZA(),t.BQk()),2&e){const n=c.formGroup,o=c.type,a=t.MAs(7),r=t.MAs(14);t.Q6J("formGroup",n),t.xp6(3),t.Oqu(t.lcZ(4,9,"orgAccountSummary.filter.startRange")),t.xp6(2),t.Q6J("ngIf","date"===o)("ngIfElse",a),t.xp6(5),t.Oqu(t.lcZ(11,11,"orgAccountSummary.filter.endRange")),t.xp6(2),t.Q6J("ngIf","date"===o)("ngIfElse",r),t.xp6(3),t.Q6J("control",n)("prefix","orgAccountSummary.filter.errors")}}function it(e,c){if(1&e&&(t.TgZ(0,"label",4)(1,"span"),t._uU(2),t.ALo(3,"cxTranslate"),t.qZA(),t._UZ(4,"ng-select",20)(5,"cx-form-errors",9),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,5,"orgAccountSummary.filter.documentType")),t.xp6(2),t.Q6J("searchable",!1)("clearable",!1)("items",n.documentTypeOptions),t.xp6(1),t.Q6J("control",n.filterForm.controls.documentType)}}function mt(e,c){if(1&e&&(t.TgZ(0,"label",4)(1,"span"),t._uU(2),t.ALo(3,"cxTranslate"),t.qZA(),t._UZ(4,"input",21)(5,"cx-form-errors",9),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,2,"orgAccountSummary.filter.documentNumber")),t.xp6(3),t.Q6J("control",n.filterForm.controls.documentNumber)}}function st(e,c){1&e&&t.GkF(0)}const lt=function(e){return{formGroup:e,type:"text"}};function dt(e,c){if(1&e&&t.YNc(0,st,1,0,"ng-container",22),2&e){const n=t.oxw(2),o=t.MAs(1);t.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",t.VKq(2,lt,n.filterForm.get("documentNumberRange")))}}function pt(e,c){1&e&&t.GkF(0)}const Q=function(e){return{formGroup:e,type:"date"}};function gt(e,c){if(1&e&&t.YNc(0,pt,1,0,"ng-container",22),2&e){const n=t.oxw(2),o=t.MAs(1);t.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",t.VKq(2,Q,n.filterForm.get("documentDateRange")))}}function _t(e,c){1&e&&t.GkF(0)}function At(e,c){if(1&e&&t.YNc(0,_t,1,0,"ng-container",22),2&e){const n=t.oxw(2),o=t.MAs(1);t.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",t.VKq(2,Q,n.filterForm.get("dueDateRange")))}}function yt(e,c){1&e&&t.GkF(0)}const q=function(e){return{formGroup:e,type:"number"}};function ft(e,c){if(1&e&&t.YNc(0,yt,1,0,"ng-container",22),2&e){const n=t.oxw(2),o=t.MAs(1);t.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",t.VKq(2,q,n.filterForm.get("originalAmountRange")))}}function xt(e,c){1&e&&t.GkF(0)}function ht(e,c){if(1&e&&t.YNc(0,xt,1,0,"ng-container",22),2&e){const n=t.oxw(2),o=t.MAs(1);t.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",t.VKq(2,q,n.filterForm.get("openAmountRange")))}}const G=function(e){return{ariaLabel:e,ariaControls:"cx-account-summary-document-table"}};function St(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"div",12)(1,"label",4)(2,"span"),t._uU(3),t.ALo(4,"cxTranslate"),t.qZA(),t._UZ(5,"ng-select",13),t.ALo(6,"cxTranslate"),t._UZ(7,"cx-form-errors",9),t.qZA(),t.TgZ(8,"label",4)(9,"span"),t._uU(10),t.ALo(11,"cxTranslate"),t.qZA(),t._UZ(12,"ng-select",14),t.ALo(13,"cxTranslate"),t._UZ(14,"cx-form-errors",9),t.qZA(),t.YNc(15,it,6,7,"label",15),t.YNc(16,mt,6,4,"label",15),t.YNc(17,dt,1,4,"ng-template",16),t.YNc(18,gt,1,4,"ng-template",16),t.YNc(19,At,1,4,"ng-template",16),t.YNc(20,ft,1,4,"ng-template",16),t.YNc(21,ht,1,4,"ng-template",16),t.TgZ(22,"div",17)(23,"button",18),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.resetForm(!0))}),t._uU(24),t.ALo(25,"cxTranslate"),t.qZA(),t.TgZ(26,"button",19),t._uU(27),t.ALo(28,"cxTranslate"),t.qZA()()()}if(2&e){const n=c.ngIf,o=t.oxw();t.xp6(3),t.Oqu(t.lcZ(4,21,"orgAccountSummary.filter.status")),t.xp6(2),t.Q6J("searchable",!1)("clearable",!1)("items",o.statusOptions)("cxNgSelectA11y",t.VKq(33,G,t.lcZ(6,23,"orgAccountSummary.filter.status"))),t.xp6(2),t.Q6J("control",o.filterForm.controls.status),t.xp6(3),t.Oqu(t.lcZ(11,25,"orgAccountSummary.filter.filterBy")),t.xp6(2),t.Q6J("searchable",!1)("clearable",!1)("items",o.filterByOptions)("cxNgSelectA11y",t.VKq(35,G,t.lcZ(13,27,"orgAccountSummary.filter.filterBy"))),t.xp6(2),t.Q6J("control",o.filterForm.controls.filterBy),t.xp6(1),t.Q6J("ngIf",n===o.FilterByOptions.DOCUMENT_TYPE),t.xp6(1),t.Q6J("ngIf",n===o.FilterByOptions.DOCUMENT_NUMBER),t.xp6(1),t.Q6J("ngIf",n===o.FilterByOptions.DOCUMENT_NUMBER_RANGE),t.xp6(1),t.Q6J("ngIf",n===o.FilterByOptions.DATE_RANGE),t.xp6(1),t.Q6J("ngIf",n===o.FilterByOptions.DUE_DATE_RANGE),t.xp6(1),t.Q6J("ngIf",n===o.FilterByOptions.AMOUNT_RANGE),t.xp6(1),t.Q6J("ngIf",n===o.FilterByOptions.OPEN_AMOUNT_RANGE),t.xp6(3),t.hij(" ",t.lcZ(25,29,"orgAccountSummary.filter.clear")," "),t.xp6(3),t.hij(" ",t.lcZ(28,31,"orgAccountSummary.filter.search")," ")}}function vt(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"div",16)(1,"cx-pagination",17),t.NdJ("viewPageEvent",function(a){t.CHM(n);const r=t.oxw(3);return t.KtG(r.pageChange(a))}),t.qZA()()}if(2&e){const n=t.oxw(2).ngIf;t.xp6(1),t.Q6J("pagination",n.pagination)}}const Tt=function(e,c){return{id:e,type:c}};function Ct(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){const r=t.CHM(n).ngIf,u=t.oxw().$implicit,l=t.oxw(3);return t.KtG(l.downloadAttachment(u.id,r))}),t.ALo(1,"cxTranslate"),t._UZ(2,"cx-icon",13),t.ALo(3,"cxTranslate"),t._UZ(4,"span",30),t.ALo(5,"cxTranslate"),t.qZA()}if(2&e){const n=t.oxw().$implicit,o=t.oxw(3);t.uIk("aria-label",t.xi3(1,4,"orgAccountSummary.document.attachmentDescription",t.WLB(11,Tt,n.id,null==n.orgDocumentType?null:n.orgDocumentType.name))),t.xp6(2),t.s9C("title",t.lcZ(3,7,"orgAccountSummary.document.download")),t.Q6J("type",o.ICON_TYPE.FILE),t.xp6(2),t.Q6J("innerText",t.lcZ(5,9,"orgAccountSummary.document.download"))}}const Dt=function(e,c){return{"status-open":e,"status-closed":c}};function Zt(e,c){if(1&e&&(t.TgZ(0,"tr",18)(1,"td",19)(2,"div",20),t._uU(3),t.ALo(4,"cxTranslate"),t.qZA(),t.TgZ(5,"div",21),t._uU(6),t.qZA()(),t.TgZ(7,"td",22)(8,"div",20),t._uU(9),t.ALo(10,"cxTranslate"),t.qZA(),t.TgZ(11,"div",21),t._uU(12),t.qZA()(),t.TgZ(13,"td",23)(14,"div",20),t._uU(15),t.ALo(16,"cxTranslate"),t.qZA(),t.TgZ(17,"div",21),t._uU(18),t.ALo(19,"cxDate"),t.qZA()(),t.TgZ(20,"td",23)(21,"div",20),t._uU(22),t.ALo(23,"cxTranslate"),t.qZA(),t.TgZ(24,"div",21),t._uU(25),t.ALo(26,"cxDate"),t.qZA()(),t.TgZ(27,"td",24)(28,"div",20),t._uU(29),t.ALo(30,"cxTranslate"),t.qZA(),t.TgZ(31,"div",21),t._uU(32),t.qZA()(),t.TgZ(33,"td",24)(34,"div",20),t._uU(35),t.ALo(36,"cxTranslate"),t.qZA(),t.TgZ(37,"div",21),t._uU(38),t.qZA()(),t.TgZ(39,"td",25)(40,"div",20),t._uU(41),t.ALo(42,"cxTranslate"),t.qZA(),t.TgZ(43,"div",21)(44,"span",26),t._uU(45),t.ALo(46,"cxTranslate"),t.qZA()()(),t.TgZ(47,"td",27)(48,"div",20),t._uU(49),t.ALo(50,"cxTranslate"),t.qZA(),t.TgZ(51,"div",21),t.YNc(52,Ct,6,14,"button",28),t.qZA()()()),2&e){const n=c.$implicit;t.xp6(3),t.hij(" ",t.lcZ(4,17,"orgAccountSummary.document.id")," "),t.xp6(3),t.hij(" ",n.id," "),t.xp6(3),t.hij(" ",t.lcZ(10,19,"orgAccountSummary.document.type")," "),t.xp6(3),t.hij(" ",null==n.orgDocumentType?null:n.orgDocumentType.name," "),t.xp6(3),t.hij(" ",t.lcZ(16,21,"orgAccountSummary.document.date")," "),t.xp6(3),t.hij(" ",t.xi3(19,23,n.createdAtDate,"longDate")," "),t.xp6(4),t.hij(" ",t.lcZ(23,26,"orgAccountSummary.document.dueDate")," "),t.xp6(3),t.hij(" ",t.xi3(26,28,n.dueAtDate,"longDate")," "),t.xp6(4),t.hij(" ",t.lcZ(30,31,"orgAccountSummary.document.originalAmount")," "),t.xp6(3),t.hij(" ",n.formattedAmount," "),t.xp6(3),t.hij(" ",t.lcZ(36,33,"orgAccountSummary.document.openAmount")," "),t.xp6(3),t.hij(" ",n.formattedOpenAmount," "),t.xp6(3),t.hij(" ",t.lcZ(42,35,"orgAccountSummary.document.status")," "),t.xp6(3),t.Q6J("ngClass",t.WLB(41,Dt,"open"===n.status,"closed"===n.status)),t.xp6(1),t.hij(" ",t.lcZ(46,37,"orgAccountSummary.statuses."+(null==n?null:n.status))," "),t.xp6(4),t.hij(" ",t.lcZ(50,39,"orgAccountSummary.document.attachment")," "),t.xp6(3),t.Q6J("ngIf",null==n.attachments||null==n.attachments[0]?null:n.attachments[0].id)}}function Ut(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"div",16)(1,"cx-pagination",17),t.NdJ("viewPageEvent",function(a){t.CHM(n);const r=t.oxw(3);return t.KtG(r.pageChange(a))}),t.qZA()()}if(2&e){const n=t.oxw(2).ngIf;t.xp6(1),t.Q6J("pagination",n.pagination)}}function bt(e,c){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",6)(2,"label",7)(3,"span"),t._uU(4),t.ALo(5,"cxTranslate"),t.qZA(),t.TgZ(6,"cx-sorting",8),t.NdJ("sortListEvent",function(a){t.CHM(n);const r=t.oxw(2);return t.KtG(r.changeSortCode(a))}),t.ALo(7,"cxTranslate"),t.ALo(8,"cxTranslate"),t.qZA()(),t.YNc(9,vt,2,1,"div",9),t.qZA(),t.TgZ(10,"table",10)(11,"thead",11)(12,"th",12),t._uU(13),t.ALo(14,"cxTranslate"),t.qZA(),t.TgZ(15,"th",12),t._uU(16),t.ALo(17,"cxTranslate"),t.qZA(),t.TgZ(18,"th",12),t._uU(19),t.ALo(20,"cxTranslate"),t.qZA(),t.TgZ(21,"th",12),t._uU(22),t.ALo(23,"cxTranslate"),t.qZA(),t.TgZ(24,"th",12),t._uU(25),t.ALo(26,"cxTranslate"),t.qZA(),t.TgZ(27,"th",12),t._uU(28),t.ALo(29,"cxTranslate"),t.qZA(),t.TgZ(30,"th",12),t._uU(31),t.ALo(32,"cxTranslate"),t.qZA(),t.TgZ(33,"th",12),t._UZ(34,"cx-icon",13),t.ALo(35,"cxTranslate"),t.qZA()(),t.TgZ(36,"tbody"),t.YNc(37,Zt,53,44,"tr",14),t.qZA()(),t.TgZ(38,"div",15),t.YNc(39,Ut,2,1,"div",9),t.qZA(),t.BQk()}if(2&e){const n=t.oxw().ngIf,o=t.oxw();t.xp6(4),t.hij(" ",t.lcZ(5,17,"orgAccountSummary.sortBy")," "),t.xp6(2),t.s9C("placeholder",t.lcZ(7,19,"orgAccountSummary.sortBy")),t.Q6J("sortOptions",o.sortOptions)("selectedOption",n.pagination.sort)("ariaLabel",t.lcZ(8,21,"orgAccountSummary.sortDocuments")),t.xp6(3),t.Q6J("ngIf",n.pagination&&n.pagination.totalPages&&n.pagination.totalPages>1),t.xp6(4),t.hij(" ",t.lcZ(14,23,"orgAccountSummary.document.id")," "),t.xp6(3),t.hij(" ",t.lcZ(17,25,"orgAccountSummary.document.type")," "),t.xp6(3),t.hij(" ",t.lcZ(20,27,"orgAccountSummary.document.date")," "),t.xp6(3),t.hij(" ",t.lcZ(23,29,"orgAccountSummary.document.dueDate")," "),t.xp6(3),t.hij(" ",t.lcZ(26,31,"orgAccountSummary.document.originalAmount")," "),t.xp6(3),t.hij(" ",t.lcZ(29,33,"orgAccountSummary.document.openAmount")," "),t.xp6(3),t.hij(" ",t.lcZ(32,35,"orgAccountSummary.document.status")," "),t.xp6(3),t.s9C("title",t.lcZ(35,37,"orgAccountSummary.document.attachment")),t.Q6J("type",o.ICON_TYPE.DOWNLOAD),t.xp6(3),t.Q6J("ngForOf",n.orgDocuments),t.xp6(2),t.Q6J("ngIf",n.pagination&&n.pagination.totalPages&&n.pagination.totalPages>1)}}function Nt(e,c){1&e&&(t.TgZ(0,"div",31),t._uU(1),t.ALo(2,"cxTranslate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"orgAccountSummary.document.noneFound")," "))}function Mt(e,c){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div")(2,"div",1)(3,"h2"),t._uU(4),t.ALo(5,"cxTranslate"),t.qZA()(),t.TgZ(6,"div",2)(7,"cx-account-summary-document-filter",3),t.NdJ("filterListEvent",function(a){t.CHM(n);const r=t.oxw();return t.KtG(r.filterChange(a))}),t.qZA(),t.YNc(8,bt,40,39,"ng-container",4),t.YNc(9,Nt,3,3,"ng-template",null,5,t.W1O),t.qZA()(),t.BQk()}if(2&e){const n=c.ngIf,o=t.MAs(10),a=t.oxw();t.xp6(4),t.hij(" ",t.lcZ(5,5,"orgAccountSummary.document.header")," "),t.xp6(3),t.Q6J("documentTypeOptions",a.documentTypeOptions)("initialFilters",a._queryParams),t.xp6(1),t.Q6J("ngIf",n.pagination&&n.pagination.totalResults)("ngIfElse",o)}}const Ot=function(e,c){return{minBoundary:e,maxBoundary:c}};function Lt(e,c){if(1&e&&(t._uU(0),t.ALo(1,"cxTranslate")),2&e){const n=t.oxw().ngIf;t.hij(" ",t.xi3(1,1,"orgAccountSummary.details.dayRange",t.WLB(4,Ot,n.minBoundary,n.maxBoundary))," ")}}const Ft=function(e){return{minBoundary:e}};function Et(e,c){if(1&e&&(t._uU(0),t.ALo(1,"cxTranslate")),2&e){const n=t.oxw().ngIf;t.hij(" ",t.xi3(1,1,"orgAccountSummary.details.dayPlus",t.VKq(4,Ft,n.minBoundary))," ")}}function It(e,c){if(1&e&&(t.TgZ(0,"div",18),t.YNc(1,Lt,2,7,"ng-template",19),t.YNc(2,Et,2,6,"ng-template",null,20,t.W1O),t.qZA()),2&e){const n=c.ngIf,o=t.MAs(3);t.xp6(1),t.Q6J("ngIf",null==n?null:n.maxBoundary)("ngIfElse",o)}}function Rt(e,c){if(1&e&&(t.TgZ(0,"div",16),t.YNc(1,It,4,2,"div",17),t.TgZ(2,"div"),t._uU(3),t.qZA()()),2&e){const n=c.$implicit;t.Q6J("tabindex",-1),t.xp6(1),t.Q6J("ngIf",n.dayRange),t.xp6(2),t.hij(" ",n.amount," ")}}function Bt(e,c){if(1&e&&(t.TgZ(0,"div",14),t.YNc(1,Rt,4,3,"div",15),t.qZA()),2&e){const n=t.oxw().ngIf;t.xp6(1),t.Q6J("ngForOf",n)}}function Yt(e,c){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,Bt,2,1,"div",11),t.TgZ(2,"div",12)(3,"div",13),t._uU(4),t.ALo(5,"cxTranslate"),t.qZA(),t.TgZ(6,"div"),t._uU(7),t.qZA()()()),2&e){const n=c.ngIf,o=t.oxw().ngIf;t.ekj("cx-account-summary-header-past-due-section",n.length>0),t.xp6(1),t.Q6J("ngIf",n.length>0),t.xp6(1),t.Q6J("tabindex",-1),t.xp6(2),t.hij(" ",t.lcZ(5,6,"orgAccountSummary.details.pastDueBalance")," "),t.xp6(3),t.Oqu(null==o||null==o.amountBalance?null:o.amountBalance.pastDueBalance)}}function Jt(e,c){if(1&e&&(t._UZ(0,"cx-card",5),t.ALo(1,"async")),2&e){const n=t.oxw().ngIf,o=t.oxw();t.Q6J("content",t.lcZ(1,1,o.getPastDueBalanceCardContent(null==n||null==n.amountBalance?null:n.amountBalance.pastDueBalance)))}}function Qt(e,c){if(1&e&&(t.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4),t._UZ(4,"cx-card",5),t.ALo(5,"async"),t._UZ(6,"cx-card",5),t.ALo(7,"async"),t.qZA(),t.TgZ(8,"div",4),t._UZ(9,"cx-card",5),t.ALo(10,"async"),t.qZA()(),t.TgZ(11,"div",6)(12,"div",4),t._UZ(13,"cx-card",5),t.ALo(14,"async"),t._UZ(15,"cx-card",5),t.ALo(16,"async"),t.qZA(),t.TgZ(17,"div",7),t._UZ(18,"cx-card",5),t.ALo(19,"async"),t._UZ(20,"cx-card",5),t.ALo(21,"async"),t.qZA()(),t.TgZ(22,"div",8),t.YNc(23,Yt,8,8,"div",9),t.YNc(24,Jt,2,3,"ng-template",null,10,t.W1O),t.qZA()()()),2&e){const n=c.ngIf,o=t.MAs(25),a=t.oxw();t.xp6(4),t.Q6J("content",t.lcZ(5,9,a.getIdCardContent(null==n||null==n.orgUnit?null:n.orgUnit.uid))),t.xp6(2),t.Q6J("content",t.lcZ(7,11,a.getNameCardContent(null==n||null==n.orgUnit?null:n.orgUnit.name))),t.xp6(3),t.Q6J("content",t.lcZ(10,13,a.getAddressCardContent(null==n?null:n.billingAddress))),t.xp6(4),t.Q6J("content",t.lcZ(14,15,a.getCreditRepCardContent(null==n?null:n.accountManagerName))),t.xp6(2),t.Q6J("content",t.lcZ(16,17,a.getCreditLineCardContent(null==n?null:n.creditLimit))),t.xp6(3),t.Q6J("content",t.lcZ(19,19,a.getCurrentBalanceCardContent(null==n||null==n.amountBalance?null:n.amountBalance.currentBalance))),t.xp6(2),t.Q6J("content",t.lcZ(21,21,a.getOpenBalanceCardContent(null==n||null==n.amountBalance?null:n.amountBalance.openBalance))),t.xp6(3),t.Q6J("ngIf",n.amountBalance&&n.amountBalance.dueBalances)("ngIfElse",o)}}let qt=(()=>{class e{set initialFilters(n){this.initializeForm(n)}constructor(n,o){this.translation=n,this.fb=o,this.filterListEvent=new t.vpe,this.FilterByOptions=m.WY,this.subscription=new T.w}ngOnInit(){this.subscription.add(this.getStatusOptions().subscribe(n=>this.statusOptions=[...n])),this.subscription.add(this.getFilterByOptions().subscribe(n=>this.filterByOptions=[...n]))}ngOnDestroy(){this.subscription.unsubscribe()}formSearch(){const n=this.filterForm.get("status")?.value,o=this.filterForm.get("filterBy")?.value;let a,r,u;switch(o){case m.WY.DOCUMENT_TYPE:a=this.filterForm.get("documentType")?.value;break;case m.WY.DOCUMENT_NUMBER:a=this.filterForm.get("documentNumber")?.value;break;case m.WY.DOCUMENT_NUMBER_RANGE:r=this.filterForm.get("documentNumberRange.from")?.value,u=this.filterForm.get("documentNumberRange.to")?.value;break;case m.WY.DATE_RANGE:{const l=this.filterForm.get("documentDateRange.from")?.value,A=this.filterForm.get("documentDateRange.to")?.value;r=l?this.encodeDate(l):"",u=A?this.encodeDate(A):"";break}case m.WY.DUE_DATE_RANGE:{const l=this.filterForm.get("dueDateRange.from")?.value,A=this.filterForm.get("dueDateRange.to")?.value;r=l?this.encodeDate(l):"",u=A?this.encodeDate(A):"";break}case m.WY.AMOUNT_RANGE:r=this.filterForm.get("originalAmountRange.from")?.value,u=this.filterForm.get("originalAmountRange.to")?.value;break;case m.WY.OPEN_AMOUNT_RANGE:r=this.filterForm.get("openAmountRange.from")?.value,u=this.filterForm.get("openAmountRange.to")?.value}this.filterListEvent.emit({status:n,filterByKey:o,filterByValue:a,startRange:r,endRange:u})}resetForm(n=!1){const o={documentType:"",documentNumber:"",documentNumberRange:{from:"",to:""},documentDateRange:{from:"",to:""},dueDateRange:{from:"",to:""},originalAmountRange:{from:"",to:""},openAmountRange:{from:"",to:""}};n?(this.filterForm.patchValue({...o,status:m._m.OPEN,filterBy:m.WY.DOCUMENT_NUMBER}),this.formSearch()):this.filterForm.patchValue(o)}getStatusOptions(){const n=Object.values(m._m).map(a=>({code:a})),o=n.map(a=>this.translation.translate(`orgAccountSummary.statuses.${a.code}`));return(0,B.$R)(...o).pipe((0,p.U)(a=>(a.forEach((r,u)=>n[u].name=r),n)))}getFilterByOptions(){const n=Object.values(m.WY).map(a=>({code:a})),o=n.map(a=>this.translation.translate(`orgAccountSummary.filterByOptions.${a.code}`));return(0,B.$R)(...o).pipe((0,p.U)(a=>(a.forEach((r,u)=>n[u].name=r),n)))}initializeForm({status:n,filterByKey:o,filterByValue:a,startRange:r,endRange:u}){const l=(y,g)=>this.fb.group({from:[o===y&&(r??""),g?.startRange],to:[o===y&&(u??""),g?.endRange]},{validators:g?.groupValidator}),A=(y,g)=>this.fb.group({from:[o===y&&r?this.decodeDate(r):"",g?.startRange],to:[o===y&&u?this.decodeDate(u):"",g?.endRange]},{validators:g?.groupValidator}),h=y=>g=>{const S=g.get("from"),v=g.get("to");return S.pristine||S.invalid||v.pristine||v.invalid?null:"date"===y&&S.value>v.value?{toDateMustComeAfterFrom:!0}:"number"===y&&function on(y,g){const S=parseFloat(y.value)||0,v=parseFloat(g.value)||0;return!isNaN(y.value)&&!isNaN(g.value)&&S>v}(S,v)?{toAmountMustBeLargeThanFrom:!0}:null};this.filterForm=this.fb.group({status:n||m._m.OPEN,filterBy:o||m.WY.DOCUMENT_NUMBER,documentType:o===m.WY.DOCUMENT_TYPE&&(a??""),documentNumber:o===m.WY.DOCUMENT_NUMBER&&(a??""),documentNumberRange:l(m.WY.DOCUMENT_NUMBER_RANGE),documentDateRange:A(m.WY.DATE_RANGE,{groupValidator:h("date")}),dueDateRange:A(m.WY.DUE_DATE_RANGE,{groupValidator:h("date")}),originalAmountRange:l(m.WY.AMOUNT_RANGE,{groupValidator:h("number")}),openAmountRange:l(m.WY.OPEN_AMOUNT_RANGE,{groupValidator:h("number")})}),this.subscription.add(this.filterForm.get("filterBy")?.valueChanges.subscribe(()=>this.filterByChanged()))}filterByChanged(){this.resetForm(!1)}encodeDate(n){const[o,a,r]=n.split("-");return`${a}/${r}/${o}`}decodeDate(n){const[o,a,r]=n.split("/");return`${r}-${o}-${a}`}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(i.D7D),t.Y36(x.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["cx-account-summary-document-filter"]],inputs:{documentTypeOptions:"documentTypeOptions",initialFilters:"initialFilters"},outputs:{filterListEvent:"filterListEvent"},decls:4,vars:2,consts:[["rangeInput",""],[3,"formGroup","ngSubmit"],["class","cx-account-summary-document-filter-form",4,"ngIf"],[3,"formGroup"],[1,"cx-account-summary-document-filter-form-item"],[4,"ngIf","ngIfElse"],["inputFrom",""],["inputTo",""],[3,"control","prefix"],[3,"control"],["formControlName","from",1,"cx-account-summary-document-filter-form-input",3,"type"],["formControlName","to",1,"cx-account-summary-document-filter-form-input",3,"type"],[1,"cx-account-summary-document-filter-form"],["formControlName","status","bindLabel","name","bindValue","code",3,"searchable","clearable","items","cxNgSelectA11y"],["formControlName","filterBy","bindLabel","name","bindValue","code",3,"searchable","clearable","items","cxNgSelectA11y"],["class","cx-account-summary-document-filter-form-item",4,"ngIf"],[3,"ngIf"],[1,"cx-account-summary-document-filter-form-button-block"],["type","button",1,"cx-action-link","clear-btn",3,"click"],["type","submit",1,"btn","btn-primary"],["bindLabel","name","bindValue","code","formControlName","documentType",3,"searchable","clearable","items"],["formControlName","documentNumber",1,"cx-account-summary-document-filter-form-input"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){1&n&&(t.YNc(0,ut,16,13,"ng-template",null,0,t.W1O),t.TgZ(2,"form",1),t.NdJ("ngSubmit",function(){return o.formSearch()}),t.YNc(3,St,29,37,"div",2),t.qZA()),2&n&&(t.xp6(2),t.Q6J("formGroup",o.filterForm),t.xp6(1),t.Q6J("ngIf",o.filterForm.controls.filterBy.value))},dependencies:[_.O5,_.tP,J.w9,d.VnX,x._Y,x.Fj,x.JJ,x.JL,x.sg,x.u,d.Lr3,d.Ahv,i.X$D],encapsulation:2,changeDetection:0}),e})(),w=(()=>{class e{constructor(n,o,a,r){this.accountSummaryFacade=n,this.translation=o,this.downloadService=a,this.languageService=r,this.ICON_TYPE=d.e1G,this._queryParams={status:m._m.OPEN,filterByKey:m.WY.DOCUMENT_NUMBER,page:0,pageSize:10,fields:m.NK.FULL},this.queryParams$=new X.X(this._queryParams),this.accountSummary$=this.queryParams$.pipe((0,U.w)(u=>this.accountSummaryFacade.getDocumentList(u)),(0,tt.b)(u=>{u.orgDocumentTypes&&(this.documentTypeOptions=u.orgDocumentTypes),u.sorts&&this.addNamesToSortModel(u.sorts)})),this.subscription=new T.w}ngOnInit(){this.subscription.add(this.languageService.getActive().pipe((0,nt.T)(1)).subscribe(()=>this.updateQueryParams({fields:m.NK.FULL})))}ngOnDestroy(){this.subscription.unsubscribe()}pageChange(n){this.updateQueryParams({page:n})}changeSortCode(n){this.updateQueryParams({sort:n,page:0})}filterChange(n){this.updateQueryParams({...n,page:0})}downloadAttachment(n,o){this.accountSummaryFacade.getDocumentAttachment(n,o).pipe((0,Y.q)(1)).subscribe(a=>{const r=new Blob([a],{type:a.type}),u=URL.createObjectURL(r);this.downloadService.download(u,o)})}updateQueryParams(n){Object.entries(n).forEach(o=>this._queryParams[o[0]]=o[1]),n.fields||(this._queryParams.fields=m.NK.DEFAULT),this.queryParams$.next(this._queryParams)}addNamesToSortModel(n){this.sortOptions=n;const o=n.map(a=>this.translation.translate(`orgAccountSummary.sorts.${a.code}`));(0,Z.aj)(o).pipe((0,Y.q)(1)).subscribe(a=>this.sortOptions.forEach((r,u)=>r.name=a[u]))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(m.H6),t.Y36(i.D7D),t.Y36(d._b8),t.Y36(i.TSl))},e.\u0275cmp=t.Xpm({type:e,selectors:[["cx-account-summary-document"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"cx-account-summary-document-header"],[1,"cx-account-summary-document-body"],[3,"documentTypeOptions","initialFilters","filterListEvent"],[4,"ngIf","ngIfElse"],["noDocument",""],[1,"cx-account-summary-document-sort","top"],[1,"cx-account-summary-document-form-group","form-group"],["ariaControls","cx-account-summary-document-table",3,"sortOptions","selectedOption","placeholder","ariaLabel","sortListEvent"],["class","cx-account-summary-document-pagination",4,"ngIf"],["id","cx-account-summary-document-table",1,"table","cx-account-summary-document-table"],[1,"cx-account-summary-document-thead-mobile"],["scope","col"],[1,"cx-account-summary-document-attachment-icon",3,"type","title"],["class","cx-account-summary-document-row",4,"ngFor","ngForOf"],[1,"cx-account-summary-document-sort","bottom"],[1,"cx-account-summary-document-pagination"],[3,"pagination","viewPageEvent"],[1,"cx-account-summary-document-row"],[1,"cx-account-summary-document-code"],[1,"cx-account-summary-document-label"],[1,"cx-account-summary-document-value"],[1,"cx-account-summary-document-type"],[1,"cx-account-summary-document-date"],[1,"cx-account-summary-document-monetary"],[1,"cx-account-summary-document-status"],[3,"ngClass"],[1,"cx-account-summary-document-attachment"],["class","cx-account-summary-document-attachment-btn",3,"click",4,"ngIf"],[1,"cx-account-summary-document-attachment-btn",3,"click"],[1,"cx-account-summary-document-attachment-text",3,"innerText"],[1,"cx-account-summary-document-no-document"]],template:function(n,o){1&n&&(t.YNc(0,Mt,11,7,"ng-container",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,o.accountSummary$))},dependencies:[qt,_.mk,_.sg,_.O5,d.iNG,d.QtL,d.oJW,_.Ov,i.X$D,i.dgE],encapsulation:2,changeDetection:0}),e})(),Gt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[_.ez,i.LUR,J.A0,d.LcC,x.UX,d.I$v,d.Fym]}),e})();const wt={cmsComponents:{AccountSummaryDocumentComponent:{component:w,guards:[i.a1M,D.uy]}}};let Pt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[(0,i.i51)(wt)],imports:[Gt,_.ez,i.LUR,d.U67,d.u3b,d.QX1]}),e})();const jt={cmsComponents:{AccountSummaryHeaderComponent:{component:(()=>{class e{constructor(n,o,a){this.accountSummaryFacade=n,this.languageService=o,this.translation=a,this.headerDetails$=this.languageService.getActive().pipe((0,U.w)(()=>this.accountSummaryFacade.getAccountSummary())),this.subscriptions=new T.w}ngOnInit(){this.subscriptions.add(this.translation.translate("orgAccountSummary.details.notApplicable").subscribe(n=>this.notApplicable=n))}ngOnDestroy(){this.subscriptions.unsubscribe()}getIdCardContent(n){return this.translation.translate("orgAccountSummary.details.uid").pipe((0,p.U)(o=>({title:o,text:[n||this.notApplicable]})))}getNameCardContent(n){return this.translation.translate("orgAccountSummary.details.name").pipe((0,p.U)(o=>({title:o,text:[n||this.notApplicable]})))}getAddressCardContent(n){return this.translation.translate("orgAccountSummary.details.address").pipe((0,p.U)(o=>{const a=`${n?.title}, ${n?.firstName} ${n?.lastName}`,r=n?.formattedAddress,u=n?.country?.name;return{title:o,text:Boolean(n)?[a,r,u]:[this.notApplicable]}}))}getCreditRepCardContent(n){return this.translation.translate("orgAccountSummary.details.creditRep").pipe((0,p.U)(o=>({title:o,text:[n||this.notApplicable]})))}getCreditLineCardContent(n){return this.translation.translate("orgAccountSummary.details.creditLine").pipe((0,p.U)(o=>({title:o,text:[n||this.notApplicable]})))}getCurrentBalanceCardContent(n){return this.translation.translate("orgAccountSummary.details.currentBalance").pipe((0,p.U)(o=>({title:o,text:[n||this.notApplicable]})))}getOpenBalanceCardContent(n){return this.translation.translate("orgAccountSummary.details.openBalance").pipe((0,p.U)(o=>({title:o,text:[n||this.notApplicable]})))}getPastDueBalanceCardContent(n){return this.translation.translate("orgAccountSummary.details.pastDueBalance").pipe((0,p.U)(o=>({title:o,text:[n??this.notApplicable]})))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(m.H6),t.Y36(i.TSl),t.Y36(i.D7D))},e.\u0275cmp=t.Xpm({type:e,selectors:[["cx-account-summary-header"]],decls:2,vars:3,consts:[["class","cx-account-summary",4,"ngIf"],[1,"cx-account-summary"],[1,"cx-account-summary-header-cards"],[1,"cx-summary-card-responsive-group","cx-summary-card-group-unit-address"],[1,"cx-summary-card"],[3,"content"],[1,"cx-summary-card-responsive-group","cx-summary-card-group-credit-balance"],[1,"cx-summary-card","cx-summary-card-balance"],[1,"cx-summary-card","cx-summary-card-group-due"],[3,"cx-account-summary-header-past-due-section",4,"ngIf","ngIfElse"],["noDueRange",""],["class","cx-account-summary-header-past-due-range-dates",4,"ngIf"],[1,"cx-account-summary-header-past-due-balance-total",3,"tabindex"],[1,"cx-past-due-balance-label","cx-card-title"],[1,"cx-account-summary-header-past-due-range-dates"],["class","cx-account-summary-header-past-due-range-collection",3,"tabindex",4,"ngFor","ngForOf"],[1,"cx-account-summary-header-past-due-range-collection",3,"tabindex"],["class","cx-past-due-range-date",4,"ngIf"],[1,"cx-past-due-range-date"],[3,"ngIf","ngIfElse"],["dayPlus",""]],template:function(n,o){1&n&&(t.YNc(0,Qt,26,23,"div",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,o.headerDetails$))},dependencies:[d.AkF,_.sg,_.O5,_.Ov,i.X$D],encapsulation:2,changeDetection:0}),e})(),guards:[i.a1M,D.uy]}}};let $t=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[(0,i.i51)(jt)],imports:[d.dTQ,_.ez,i.LUR]}),e})(),Ht=(()=>{class e extends f.zMr{}return e.\u0275fac=function(){let c;return function(o){return(c||(c=t.n5z(e)))(o||e)}}(),e.\u0275cmp=t.Xpm({type:e,selectors:[["cx-account-summary-list"]],features:[t.qOj],decls:8,vars:7,consts:[[3,"hideAddButton"],["actions",""],[1,"link",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"cx-org-list",0),t.ynx(1,1),t.TgZ(2,"button",2),t.NdJ("click",function(){return o.expandAll()}),t._uU(3),t.ALo(4,"cxTranslate"),t.qZA(),t.TgZ(5,"button",2),t.NdJ("click",function(){return o.collapseAll()}),t._uU(6),t.ALo(7,"cxTranslate"),t.qZA(),t.BQk(),t.qZA()),2&n&&(t.Q6J("hideAddButton",!0),t.xp6(3),t.hij(" ",t.lcZ(4,3,"orgUnit.tree.expandAll")," "),t.xp6(3),t.hij(" ",t.lcZ(7,5,"orgUnit.tree.collapseAll")," "))},dependencies:[f.nsn,i.X$D],encapsulation:2}),e})(),kt=(()=>{class e{constructor(n){this.routingService=n}launchDetails(n){n&&Object.keys(n).length>0&&this.routingService.go({cxRoute:"orgAccountSummaryDetails",params:n})}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(i.Znh))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function Vt(){return{table:{[f.a8M.ACCOUNT_SUMMARY_UNIT]:{cells:["name"],options:{layout:d.dfC.VERTICAL,cells:{name:{dataComponent:f.B$c}}},[d.Bst.lg]:{cells:["name"]}}}}}const Kt={cmsComponents:{ManageAccountSummaryListComponent:{component:Ht,providers:[{provide:f.XNV,useExisting:(()=>{class e extends f.F04{constructor(){super(...arguments),this.tableType=f.a8M.ACCOUNT_SUMMARY_UNIT}}return e.\u0275fac=function(){let c;return function(o){return(c||(c=t.n5z(e)))(o||e)}}(),e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},{provide:f.enT,useExisting:kt}],childRoutes:{parent:{data:{cxPageMeta:{breadcrumb:R}}},children:[{path:`:${et.UY.unitCode}`,component:w,data:{cxPageMeta:{breadcrumb:"orgAccountSummaryList.breadcrumbs.details"}}}]},guards:[i.a1M,D.uy]}}};let Xt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[(0,i.i51)(Kt),(0,i.x2j)(Vt)],imports:[i.LUR,f.pVY]}),e})(),tn=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[Xt,$t,Pt]}),e})();f.a8M.ACCOUNT_SUMMARY_UNIT="orgAccountSummary";var nn=s(1567);let en=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[k,K,tn,nn.AdministrationModule]}),e})()}}]);