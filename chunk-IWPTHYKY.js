import{b as st,c as bt}from"./chunk-UKDOWVX6.js";import{a as ot,b as at,c as nt}from"./chunk-IZAF6JEH.js";import{a as it,h as dt,j as F,n as rt,o as ct,q as mt,r as lt}from"./chunk-QOVXAOAL.js";import{d as tt,h as et}from"./chunk-JJABBGYO.js";import{h as J,k as X,m as k}from"./chunk-33SHXRFI.js";import{$ as y,$a as N,Aa as T,Ab as Q,Cb as r,Db as q,Eb as W,Kb as b,Lb as h,Ma as w,Mb as $,Qa as c,Ra as u,Sa as R,W as O,Y as P,Ya as B,Yb as x,ab as L,bb as D,da as g,ea as l,fa as E,ga as A,gb as U,hb as m,ib as j,jb as H,lb as V,mb as Z,nb as Y,ob as i,pb as d,qb as s,ta as S,vb as v,wb as p,xb as K,zb as G}from"./chunk-B3A2DNAJ.js";function kt(a,t){if(a&1&&(i(0,"li",6),r(1),d()),a&2){let xt=t.$implicit;c(),W(" ",xt," ")}}var ut=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=l({type:t,selectors:[["app-employee-tile"]],inputs:{name:"name",imageUrl:"imageUrl",bulletPoints:"bulletPoints"},standalone:!0,features:[b],decls:14,vars:2,consts:[[1,"card-side-outer"],[1,"card-side-inner"],["id","img-container"],[3,"src"],["id","name"],["id","bullet-points-container"],[1,"bullet-point"]],template:function(o,n){o&1&&(i(0,"app-flip-card")(1,"app-flip-card-front-side")(2,"div",0)(3,"div",1)(4,"div",2),s(5,"img",3),d(),i(6,"div",4),r(7),d()()()(),i(8,"app-flip-card-back-side")(9,"div",0)(10,"div",1)(11,"ul",5),Z(12,kt,2,1,"li",6,V),d()()()()()),o&2&&(c(5),m("src",n.imageUrl,w),c(2),q(n.name),c(5),Y(n.bulletPoints))},dependencies:[nt,ot,at],styles:["[_nghost-%COMP%]{display:flex;width:22em;height:25em}.card-side-outer[_ngcontent-%COMP%]{height:100%;width:100%;box-sizing:border-box;padding:1em}.card-side-outer[_ngcontent-%COMP%]   .card-side-inner[_ngcontent-%COMP%]{box-sizing:border-box;height:100%;width:100%;background-color:var(--primary-color1);box-shadow:0 4px 8px #0003,0 6px 20px #00000030;border-radius:6px;display:flex;flex-direction:column;align-items:center}app-flip-card-front-side[_ngcontent-%COMP%]   #img-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;flex-grow:1;overflow:hidden;border-top-right-radius:6px;border-top-left-radius:6px}app-flip-card-front-side[_ngcontent-%COMP%]   #img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:auto}app-flip-card-front-side[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{margin-top:.2em;margin-bottom:.2em;font-size:1.2rem;height:fit-content}app-flip-card-back-side[_ngcontent-%COMP%]   .card-side-inner[_ngcontent-%COMP%]{padding:1em 1em 1em 0}app-flip-card-back-side[_ngcontent-%COMP%]   .card-side-inner[_ngcontent-%COMP%]   #bullet-points-container[_ngcontent-%COMP%]{font-size:.9rem;display:flex;flex-direction:column;list-style-position:outside}app-flip-card-back-side[_ngcontent-%COMP%]   .card-side-inner[_ngcontent-%COMP%]   #bullet-points-container[_ngcontent-%COMP%]   .bullet-point[_ngcontent-%COMP%]{list-style-type:circle;margin-bottom:.2em}"]});let a=t;return a})();var Mt=["*"],zt=a=>({enabled:a}),M=(()=>{let t=class t{constructor(){this.isEnabled=N(!1)}setEnabled(e){this.isEnabled.set(e)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=l({type:t,selectors:[["app-carousel-page"]],standalone:!0,features:[b],ngContentSelectors:Mt,decls:2,vars:3,consts:[["id","container",3,"ngClass"]],template:function(o,n){o&1&&(v(),i(0,"div",0),p(1),d()),o&2&&m("ngClass",$(1,zt,n.isEnabled()))},dependencies:[k,J],styles:["[_nghost-%COMP%], #container[_ngcontent-%COMP%]{width:100%;height:100%}#container[_ngcontent-%COMP%]{display:none}#container.enabled[_ngcontent-%COMP%]{display:block}"],changeDetection:0});let a=t;return a})();var It=["*"],pt=(()=>{let t=class t{constructor(){this._delayMilli=3e3,this._isStopped=!1,this.currentActivePage=0,this.activeInterval=null}set delayMilli(e){this._delayMilli=e,this._isStopped||(this.stopCarousel(),this.startCarousel())}set stopped(e){this._isStopped=e,e?this.stopCarousel():this.startCarousel()}ngAfterViewInit(){if(!this.carouselPageComponents||this.carouselPageComponents.length===0)throw new Error("At least on CarouselPageComponent content element is needed");this.carouselPageComponents.get(this.currentActivePage)?.setEnabled(!0),this._isStopped||this.startCarousel()}ngOnDestroy(){this.stopCarousel()}startCarousel(){this.activeInterval=setInterval(()=>this.nextPage(),this._delayMilli)}stopCarousel(){this.activeInterval!=null&&(clearInterval(this.activeInterval),this.activeInterval==null)}nextPage(){this.carouselPageComponents.get(this.currentActivePage)?.setEnabled(!1);let e=(this.currentActivePage+1)%this.carouselPageComponents.length;this.carouselPageComponents.get(e)?.setEnabled(!0),this.currentActivePage=e}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=l({type:t,selectors:[["app-carousel"]],contentQueries:function(o,n,_){if(o&1&&K(_,M,4),o&2){let f;G(f=Q())&&(n.carouselPageComponents=f)}},inputs:{delayMilli:"delayMilli",stopped:"stopped"},standalone:!0,features:[b],ngContentSelectors:It,decls:1,vars:0,template:function(o,n){o&1&&(v(),p(0))},styles:["[_nghost-%COMP%], ng-content[_ngcontent-%COMP%]{width:100%;height:100%}"],changeDetection:0});let a=t;return a})();var Pt=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Dt=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var jt=["mat-fab",""];var Ft=new P("MAT_BUTTON_CONFIG");var Ot=[{attribute:"mat-button",mdcClasses:["mdc-button","mat-mdc-button"]},{attribute:"mat-flat-button",mdcClasses:["mdc-button","mdc-button--unelevated","mat-mdc-unelevated-button"]},{attribute:"mat-raised-button",mdcClasses:["mdc-button","mdc-button--raised","mat-mdc-raised-button"]},{attribute:"mat-stroked-button",mdcClasses:["mdc-button","mdc-button--outlined","mat-mdc-outlined-button"]},{attribute:"mat-fab",mdcClasses:["mdc-fab","mat-mdc-fab"]},{attribute:"mat-mini-fab",mdcClasses:["mdc-fab","mdc-fab--mini","mat-mdc-mini-fab"]},{attribute:"mat-icon-button",mdcClasses:["mdc-icon-button","mat-mdc-icon-button"]}],Et=(()=>{let t=class t{get ripple(){return this._rippleLoader?.getRipple(this._elementRef.nativeElement)}set ripple(e){this._rippleLoader?.attachRipple(this._elementRef.nativeElement,e)}get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}constructor(e,o,n,_){this._elementRef=e,this._platform=o,this._ngZone=n,this._animationMode=_,this._focusMonitor=y(dt),this._rippleLoader=y(ct),this._isFab=!1,this._disableRipple=!1,this._disabled=!1;let f=y(Ft,{optional:!0}),I=e.nativeElement,_t=I.classList;this.disabledInteractive=f?.disabledInteractive??!1,this._rippleLoader?.configureRipple(I,{className:"mat-mdc-button-ripple"});for(let{attribute:yt,mdcClasses:wt}of Ot)I.hasAttribute(yt)&&_t.add(...wt)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",o){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,o):this._elementRef.nativeElement.focus(o)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}};t.\u0275fac=function(o){R()},t.\u0275dir=A({type:t,inputs:{color:"color",disableRipple:[g.HasDecoratorInputTransform,"disableRipple","disableRipple",x],disabled:[g.HasDecoratorInputTransform,"disabled","disabled",x],ariaDisabled:[g.HasDecoratorInputTransform,"aria-disabled","ariaDisabled",x],disabledInteractive:[g.HasDecoratorInputTransform,"disabledInteractive","disabledInteractive",x]},features:[D]});let a=t;return a})();var At=new P("mat-mdc-fab-default-options",{providedIn:"root",factory:gt});function gt(){return{color:"accent"}}var ft=gt(),vt=(()=>{let t=class t extends Et{constructor(e,o,n,_,f){super(e,o,n,_),this._options=f,this._isFab=!0,this._options=this._options||ft,this.color=this._options.color||ft.color}};t.\u0275fac=function(o){return new(o||t)(u(S),u(it),u(B),u(T,8),u(At,8))},t.\u0275cmp=l({type:t,selectors:[["button","mat-fab",""]],hostVars:18,hostBindings:function(o,n){o&2&&(U("disabled",n._getDisabledAttribute())("aria-disabled",n._getAriaDisabled()),H(n.color?"mat-"+n.color:""),j("mat-mdc-button-disabled",n.disabled)("mat-mdc-button-disabled-interactive",n.disabledInteractive)("_mat-animation-noopable",n._animationMode==="NoopAnimations")("mat-unthemed",!n.color)("mat-mdc-button-base",!0)("mdc-fab--extended",n.extended)("mat-mdc-extended-fab",n.extended))},inputs:{extended:[g.HasDecoratorInputTransform,"extended","extended",x]},exportAs:["matButton"],standalone:!0,features:[D,L,b],attrs:jt,ngContentSelectors:Dt,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(o,n){o&1&&(v(Pt),s(0,"span",0),p(1),i(2,"span",1),p(3,1),d(),p(4,2),s(5,"span",2)(6,"span",3)),o&2&&j("mdc-button__ripple",!n._isFab)("mdc-fab__ripple",n._isFab)},styles:['.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-fab{position:relative;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-fab[hidden]{display:none}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab .mdc-fab__focus-ring{position:absolute}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{border-color:CanvasText}}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring::after,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring::after,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring::after{border-color:CanvasText}}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}.mdc-fab--mini{width:40px;height:40px}.mdc-fab--extended{border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}.mdc-fab--extended .mdc-fab__ripple{border-radius:24px}.mdc-fab--extended .mdc-fab__icon{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] .mdc-fab--extended .mdc-fab__icon,.mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}.mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-fab::before{border-color:CanvasText}}.mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}.mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}.mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mat-mdc-fab{background-color:var(--mdc-fab-container-color)}.mat-mdc-fab .mdc-fab__icon{width:var(--mdc-fab-icon-size);height:var(--mdc-fab-icon-size);font-size:var(--mdc-fab-icon-size)}.mat-mdc-fab:not(.mdc-fab--extended){border-radius:var(--mdc-fab-container-shape)}.mat-mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:var(--mdc-fab-container-shape)}.mat-mdc-mini-fab{background-color:var(--mdc-fab-small-container-color)}.mat-mdc-mini-fab .mdc-fab__icon{width:var(--mdc-fab-small-icon-size);height:var(--mdc-fab-small-icon-size);font-size:var(--mdc-fab-small-icon-size)}.mat-mdc-mini-fab:not(.mdc-fab--extended){border-radius:var(--mdc-fab-small-container-shape)}.mat-mdc-mini-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:var(--mdc-fab-small-container-shape)}.mat-mdc-extended-fab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mdc-extended-fab-container-height);border-radius:var(--mdc-extended-fab-container-shape);font-family:var(--mdc-extended-fab-label-text-font);font-size:var(--mdc-extended-fab-label-text-size);font-weight:var(--mdc-extended-fab-label-text-weight);letter-spacing:var(--mdc-extended-fab-label-text-tracking)}.mat-mdc-extended-fab .mdc-fab__ripple{border-radius:var(--mdc-extended-fab-container-shape)}.mat-mdc-fab,.mat-mdc-mini-fab{-webkit-tap-highlight-color:rgba(0,0,0,0);flex-shrink:0}.mat-mdc-fab .mat-mdc-button-ripple,.mat-mdc-fab .mat-mdc-button-persistent-ripple,.mat-mdc-fab .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab .mat-mdc-button-ripple,.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple,.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-fab .mat-mdc-button-ripple,.mat-mdc-mini-fab .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-fab .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-fab .mdc-button__label,.mat-mdc-mini-fab .mdc-button__label{z-index:1}.mat-mdc-fab .mat-mdc-focus-indicator,.mat-mdc-mini-fab .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-fab:focus .mat-mdc-focus-indicator::before,.mat-mdc-mini-fab:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-fab._mat-animation-noopable,.mat-mdc-mini-fab._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-fab:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-mini-fab:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}.mat-mdc-fab .mat-icon,.mat-mdc-fab .material-icons,.mat-mdc-mini-fab .mat-icon,.mat-mdc-mini-fab .material-icons{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mat-mdc-fab .mat-mdc-focus-indicator::before,.mat-mdc-mini-fab .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-fab[disabled],.mat-mdc-fab.mat-mdc-button-disabled,.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-fab[disabled],.mat-mdc-fab[disabled]:focus,.mat-mdc-fab.mat-mdc-button-disabled,.mat-mdc-fab.mat-mdc-button-disabled:focus,.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab[disabled]:focus,.mat-mdc-mini-fab.mat-mdc-button-disabled,.mat-mdc-mini-fab.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-fab.mat-mdc-button-disabled-interactive,.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-fab{color:var(--mat-fab-foreground-color, inherit);box-shadow:var(--mdc-fab-container-elevation-shadow)}.mat-mdc-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-fab-touch-target-display)}.mat-mdc-fab .mat-ripple-element{background-color:var(--mat-fab-ripple-color)}.mat-mdc-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-state-layer-color)}.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-disabled-state-layer-color)}.mat-mdc-fab:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-hover-state-layer-opacity)}.mat-mdc-fab.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-focus-state-layer-opacity)}.mat-mdc-fab:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-pressed-state-layer-opacity)}.mat-mdc-fab:hover{box-shadow:var(--mdc-fab-hover-container-elevation-shadow)}.mat-mdc-fab:focus{box-shadow:var(--mdc-fab-focus-container-elevation-shadow)}.mat-mdc-fab:active,.mat-mdc-fab:focus:active{box-shadow:var(--mdc-fab-pressed-container-elevation-shadow)}.mat-mdc-fab[disabled],.mat-mdc-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-disabled-state-foreground-color);background-color:var(--mat-fab-disabled-state-container-color)}.mat-mdc-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-mini-fab{color:var(--mat-fab-small-foreground-color, inherit);box-shadow:var(--mdc-fab-small-container-elevation-shadow)}.mat-mdc-mini-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-fab-small-touch-target-display)}.mat-mdc-mini-fab .mat-ripple-element{background-color:var(--mat-fab-small-ripple-color)}.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-state-layer-color)}.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-disabled-state-layer-color)}.mat-mdc-mini-fab:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-hover-state-layer-opacity)}.mat-mdc-mini-fab.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-focus-state-layer-opacity)}.mat-mdc-mini-fab:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-pressed-state-layer-opacity)}.mat-mdc-mini-fab:hover{box-shadow:var(--mdc-fab-small-hover-container-elevation-shadow)}.mat-mdc-mini-fab:focus{box-shadow:var(--mdc-fab-small-focus-container-elevation-shadow)}.mat-mdc-mini-fab:active,.mat-mdc-mini-fab:focus:active{box-shadow:var(--mdc-fab-small-pressed-container-elevation-shadow)}.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-small-disabled-state-foreground-color);background-color:var(--mat-fab-small-disabled-state-container-color)}.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-extended-fab{box-shadow:var(--mdc-extended-fab-container-elevation-shadow)}.mat-mdc-extended-fab:hover{box-shadow:var(--mdc-extended-fab-hover-container-elevation-shadow)}.mat-mdc-extended-fab:focus{box-shadow:var(--mdc-extended-fab-focus-container-elevation-shadow)}.mat-mdc-extended-fab:active,.mat-mdc-extended-fab:focus:active{box-shadow:var(--mdc-extended-fab-pressed-container-elevation-shadow)}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab[disabled]:focus,.mat-mdc-extended-fab.mat-mdc-button-disabled,.mat-mdc-extended-fab.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-extended-fab>.mat-icon,.mat-mdc-extended-fab>.material-icons{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] .mat-mdc-extended-fab>.mat-icon,[dir=rtl] .mat-mdc-extended-fab>.material-icons,.mat-mdc-extended-fab>.mat-icon[dir=rtl],.mat-mdc-extended-fab>.material-icons[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}.mat-mdc-extended-fab .mat-mdc-button-touch-target{width:100%}.mat-mdc-extended-fab .mdc-button__label+.mat-icon,.mat-mdc-extended-fab .mdc-button__label+.material-icons{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.material-icons,.mat-mdc-extended-fab .mdc-button__label+.mat-icon[dir=rtl],.mat-mdc-extended-fab .mdc-button__label+.material-icons[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}'],encapsulation:2,changeDetection:0});let a=t;return a})();var ht=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=E({type:t}),t.\u0275inj=O({imports:[F,rt,F]});let a=t;return a})();var z=()=>["Erster Bullet Point","Zweiter Bullet Point mit noch mehr infos \xFCber mehrere Zeilen","Dritter Bulletpoint usw..."],Tt=()=>({"background-image":"url('assets/images/kanzleikultur-gray-wall.jpg')"}),he=(()=>{let t=class t{constructor(e){this.leistungenUrl="/"+bt.leistungen.path,this.landingPageImageName=e.isPhone()?"frankfurt-wallpaper-smartphone.jpg":"frankfurt-wallpaper-widescreen.jpg"}};t.\u0275fac=function(o){return new(o||t)(u(st))},t.\u0275cmp=l({type:t,selectors:[["app-landing-page-view"]],standalone:!0,features:[b],decls:39,vars:21,consts:[["id","relative-img-placeholder-container"],["id","welcome-image",3,"src"],["id","welcome-message-container"],[1,"global-centered-column-container"],["id","team-tiles-container"],[3,"name","imageUrl","bulletPoints"],[3,"delayMilli","ngStyle"],[1,"slogan-container"],[1,"slogan"],["id","unsere-leistungen-container",1,"global-centered-column-container"],["mat-fab","","extended","","color","primary",3,"routerLink"],[1,"global-centered-row-container"],["inline",""]],template:function(o,n){o&1&&(i(0,"div",0),s(1,"img",1),i(2,"div",2)(3,"h1"),r(4,"Herzlich Willkommen "),s(5,"br"),r(6,"bei der "),s(7,"br"),r(8,"Kanzlei Ihres Vertrauens "),d()()(),i(9,"div",3)(10,"h2"),r(11,"Unser Team ber\xE4t Sie in jeder Lebenslage"),d(),i(12,"div",4),s(13,"app-employee-tile",5)(14,"app-employee-tile",5)(15,"app-employee-tile",5)(16,"app-employee-tile",5),d()(),i(17,"div",3)(18,"h2"),r(19,"Unsere Philosophie"),d(),i(20,"app-carousel",6)(21,"app-carousel-page")(22,"div",7)(23,"div",8),r(24,"Ganze Beratung aus einem Guss"),d()()(),i(25,"app-carousel-page")(26,"div",7)(27,"div",8),r(28,"100% Cheffbetreuung"),d()()(),i(29,"app-carousel-page")(30,"div",7)(31,"div",8),r(32,"Anpacken & Mehrwert schaffen"),d()()()()(),i(33,"div",9)(34,"button",10)(35,"div",11),r(36,"Zu unseren Leistungen "),i(37,"mat-icon",12),r(38,"navigate_next"),d()()()()),o&2&&(c(),m("src","assets/images/"+n.landingPageImageName,w),c(12),m("name","Michael Kr\xE4mer")("imageUrl","assets/images/employees/Michael-Kraemer.jpg")("bulletPoints",h(16,z)),c(),m("name","Michael Kr\xE4mer")("imageUrl","assets/images/employees/Michael-Kraemer.jpg")("bulletPoints",h(17,z)),c(),m("name","Michael Kr\xE4mer")("imageUrl","assets/images/employees/Michael-Kraemer.jpg")("bulletPoints",h(18,z)),c(),m("name","Michael Kr\xE4mer")("imageUrl","assets/images/employees/Michael-Kraemer.jpg")("bulletPoints",h(19,z)),c(4),m("delayMilli",5e3)("ngStyle",h(20,Tt)),c(14),m("routerLink",n.leistungenUrl))},dependencies:[k,X,ut,pt,M,ht,vt,lt,mt,et,tt],styles:["#relative-img-placeholder-container[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:space-evenly;height:calc(100vh - 4rem)}#relative-img-placeholder-container[_ngcontent-%COMP%]   img#welcome-image[_ngcontent-%COMP%]{position:absolute;object-fit:cover;min-width:100vw;max-width:100vw;height:calc(100vh - 4rem)}#relative-img-placeholder-container[_ngcontent-%COMP%]   #welcome-message-container[_ngcontent-%COMP%]{position:absolute;bottom:2em;background-color:#000000b3;color:#fff;z-index:2;height:fit-content;padding:.5em}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-align:center}#team-tiles-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}#team-tiles-container[_ngcontent-%COMP%]   app-employee-tile[_ngcontent-%COMP%]{margin:1em;color:var(--primary-color1-contrast)}app-carousel[_ngcontent-%COMP%]{margin-top:1em;margin-bottom:2em;width:50%;min-width:30em;max-width:50em;min-height:fit-content;height:20em;background-color:gray;background-size:cover;background-position:right}@media (max-width: 30em){app-carousel[_ngcontent-%COMP%]{max-width:100%;min-width:100%}}app-carousel[_ngcontent-%COMP%]   .slogan-container[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;align-items:center}@media (max-width: 30em){app-carousel[_ngcontent-%COMP%]   .slogan-container[_ngcontent-%COMP%]{align-items:end}}app-carousel[_ngcontent-%COMP%]   .slogan-container[_ngcontent-%COMP%]   .slogan[_ngcontent-%COMP%]{max-width:40%;font-size:130%;font-weight:500;margin-left:2em;color:var(--secondary-color500)}@media (max-width: 30em){app-carousel[_ngcontent-%COMP%]   .slogan-container[_ngcontent-%COMP%]   .slogan[_ngcontent-%COMP%]{background-color:#000000b3;padding:.5em;margin:.5em .5em 1em;max-width:100%;width:100%;text-align:center}}#unsere-leistungen-container[_ngcontent-%COMP%]{margin-top:2rem;margin-bottom:2rem}#unsere-leistungen-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:3rem}#unsere-leistungen-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:1.5rem}#unsere-leistungen-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:2rem}"],changeDetection:0});let a=t;return a})();export{he as LandingPageViewComponent};
