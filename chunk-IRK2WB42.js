import{V as e}from"./chunk-ZTTOMF3J.js";var r={phone:{maxWidthPx:650}},m={version:"0.0.4"},o={devices:r,buildInfos:m};var d=(()=>{let n=class n{constructor(){this.windowWidthOnInitPx=window.innerWidth,console.log(this.windowWidthOnInitPx)}isPhone(){return this.windowWidthOnInitPx<=o.devices.phone.maxWidthPx}};n.\u0275fac=function(i){return new(i||n)},n.\u0275prov=e({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})();var l={landing:{title:"Willkommen",path:"welcome",loadComponent:()=>import("./chunk-VECKU5HQ.js").then(t=>t.LandingPageViewComponent)},leistungen:{path:"leistungen",loadChildren:()=>import("./chunk-6YQMITW6.js").then(t=>Object.values(t.ROUTES_LEISTUNG))},impressum:{title:"Impressum",path:"impressum",loadComponent:()=>import("./chunk-XJLKBFGU.js").then(t=>t.ImpressumViewComponent)},datenschutz:{title:"Datenschutz",path:"datenschutz",loadComponent:()=>import("./chunk-JN4Q4FIK.js").then(t=>t.DatenschutzViewComponent)},error404:{title:"Seite nicht gefunden",path:"404",loadComponent:()=>import("./chunk-KQNJ4HN5.js").then(t=>t.Error404PageComponent)},empty:{path:"",redirectTo:"welcome",pathMatch:"full"},unknown:{path:"**",redirectTo:"/404"}};export{o as a,d as b,l as c};
