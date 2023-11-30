"use strict";(self.webpackChunkcangubike=self.webpackChunkcangubike||[]).push([[559],{1559:(k,g,e)=>{e.r(g),e.d(g,{AddToWishListComponent:()=>h,AddToWishListModule:()=>I});var n=e(4650),_=e(272),d=e(8924),l=e(2198),p=e(2994),x=e(4850),L=e(700),r=e(6895),u=e(5391);function T(o,i){if(1&o){const t=n.EpF();n.TgZ(0,"div")(1,"button",4),n.NdJ("click",function(){const c=n.CHM(t).ngIf,y=n.oxw(5);return n.KtG(y.remove(c))}),n.ALo(2,"async"),n.ALo(3,"cxTranslate"),n._UZ(4,"cx-icon",5),n.TgZ(5,"span",6),n._uU(6),n.ALo(7,"cxTranslate"),n.qZA()()()}if(2&o){const t=n.oxw(5);n.xp6(1),n.Q6J("disabled",n.lcZ(2,4,t.loading$))("cxAtMessage",n.lcZ(3,6,"addToWishList.removedFromWishList")),n.xp6(3),n.Q6J("type",t.iconTypes.HEART),n.xp6(2),n.Oqu(n.lcZ(7,8,"addToWishList.remove"))}}function f(o,i){if(1&o){const t=n.EpF();n.TgZ(0,"button",7),n.NdJ("click",function(){n.CHM(t);const a=n.oxw(4).ngIf,c=n.oxw();return n.KtG(c.add(a))}),n.ALo(1,"async"),n.ALo(2,"cxTranslate"),n._UZ(3,"cx-icon",5),n.TgZ(4,"span",6),n._uU(5),n.ALo(6,"cxTranslate"),n.qZA()()}if(2&o){const t=n.oxw(5);n.Q6J("disabled",n.lcZ(1,4,t.loading$))("cxAtMessage",n.lcZ(2,6,"addToWishList.addedToWishList")),n.xp6(3),n.Q6J("type",t.iconTypes.EMPTY_HEART),n.xp6(2),n.Oqu(n.lcZ(6,8,"addToWishList.add"))}}function m(o,i){if(1&o&&(n.ynx(0),n.YNc(1,T,8,10,"div",2),n.YNc(2,f,7,10,"ng-template",null,3,n.W1O),n.BQk()),2&o){const t=n.MAs(3),s=n.oxw().ngIf,a=n.oxw(2).ngIf,c=n.oxw();n.xp6(1),n.Q6J("ngIf",c.getProductInWishList(a,s))("ngIfElse",t)}}function A(o,i){if(1&o&&(n.ynx(0),n.YNc(1,m,4,2,"ng-container",0),n.BQk()),2&o){const t=n.oxw(3);n.xp6(1),n.Q6J("ngIf",t.hasStock)}}function W(o,i){if(1&o&&(n.ynx(0),n.YNc(1,A,2,1,"ng-container",0),n.ALo(2,"async"),n.BQk()),2&o){const t=n.oxw(2);n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,t.wishListEntries$))}}function E(o,i){if(1&o&&(n.ynx(0),n.YNc(1,W,3,3,"ng-container",2),n.ALo(2,"async"),n.BQk()),2&o){const t=n.oxw(),s=n.MAs(3);n.xp6(1),n.Q6J("ngIf",n.lcZ(2,2,t.userLoggedIn$))("ngIfElse",s)}}const M=function(){return{cxRoute:"login"}};function v(o,i){if(1&o&&(n.ynx(0),n.TgZ(1,"a",8),n.ALo(2,"cxUrl"),n._UZ(3,"cx-icon",5),n.TgZ(4,"span",6),n._uU(5),n.ALo(6,"cxTranslate"),n.qZA()(),n.BQk()),2&o){const t=n.oxw(2);n.xp6(1),n.Q6J("routerLink",n.lcZ(2,3,n.DdM(7,M))),n.xp6(2),n.Q6J("type",t.iconTypes.EMPTY_HEART),n.xp6(2),n.Oqu(n.lcZ(6,5,"addToWishList.anonymous"))}}function C(o,i){if(1&o&&n.YNc(0,v,7,8,"ng-container",0),2&o){const t=n.oxw();n.Q6J("ngIf",t.hasStock)}}let h=(()=>{class o{constructor(t,s,a){this.wishListFacade=t,this.currentProductService=s,this.authService=a,this.product$=this.currentProductService.getProduct().pipe((0,l.h)(_.jWE),(0,p.b)(c=>this.setStockInfo(c))),this.userLoggedIn$=this.authService.isUserLoggedIn().pipe((0,p.b)(c=>{c&&(this.wishListEntries$=this.getWishListEntries(),this.loading$=this.wishListFacade.getWishListLoading())})),this.hasStock=!1,this.iconTypes=d.e1G}add(t){t.code&&this.wishListFacade.addEntry(t.code)}remove(t){this.wishListFacade.removeEntry(t)}getProductInWishList(t,s){return s.find(c=>c.product?.code===t.code)}setStockInfo(t){this.hasStock=Boolean(t.stock&&"outOfStock"!==t.stock.stockLevelStatus)}getWishListEntries(){return this.wishListFacade.getWishList().pipe((0,l.h)(t=>Boolean(t)),(0,x.U)(t=>t.entries??[]))}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(L.qs),n.Y36(d.pHG),n.Y36(_.e80))},o.\u0275cmp=n.Xpm({type:o,selectors:[["cx-add-to-wishlist"]],decls:4,vars:3,consts:[[4,"ngIf"],["loginPrompt",""],[4,"ngIf","ngIfElse"],["addItem",""],[1,"btn","btn-link","button-remove","cx-action-link",3,"disabled","cxAtMessage","click"],[3,"type"],[1,"button-text"],[1,"btn","btn-link","button-add","cx-action-link",3,"disabled","cxAtMessage","click"],[1,"btn","btn-link","button-add-link","cx-action-link",3,"routerLink"]],template:function(t,s){1&t&&(n.YNc(0,E,3,4,"ng-container",0),n.ALo(1,"async"),n.YNc(2,C,1,1,"ng-template",null,1,n.W1O)),2&t&&n.Q6J("ngIf",n.lcZ(1,1,s.product$))},dependencies:[r.O5,d.oJW,u.rH,d.cgP,r.Ov,_.X$D,_.l2T],encapsulation:2,changeDetection:0}),o})(),I=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({providers:[(0,_.i51)({cmsComponents:{AddToWishListComponent:{component:h}}})],imports:[r.ez,_.LUR,d.QX1,u.Bz,_.bhT,d.p$5]}),o})()}}]);