var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, View, Directive, Host, ElementRef, forwardRef, Inject } from 'angular2/angular2';
import { ViewContainerRef } from 'angular2/src/core/compiler/view_container_ref';
import { Pane } from './pane';
import { NavController } from './nav-controller';
export let PaneAnchor = class {
    constructor(pane, elementRef) {
        pane.sectionAnchorElementRef = elementRef;
    }
};
PaneAnchor = __decorate([
    Directive({ selector: 'template[pane-anchor]' }),
    __param(0, Host()),
    __param(0, Inject(forwardRef(() => Pane))), 
    __metadata('design:paramtypes', [(typeof (_a = typeof Pane !== 'undefined' && Pane) === 'function' && _a) || Object, (typeof (_b = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _b) || Object])
], PaneAnchor);
export let PaneContentAnchor = class {
    constructor(pane, viewContainerRef) {
        pane.contentContainerRef = viewContainerRef;
    }
};
PaneContentAnchor = __decorate([
    Directive({ selector: 'template[content-anchor]' }),
    __param(0, Host()),
    __param(0, Inject(forwardRef(() => Pane))), 
    __metadata('design:paramtypes', [(typeof (_c = typeof Pane !== 'undefined' && Pane) === 'function' && _c) || Object, (typeof (_d = typeof ViewContainerRef !== 'undefined' && ViewContainerRef) === 'function' && _d) || Object])
], PaneContentAnchor);
let NavBarAnchor = class {
    constructor(navCtrl, viewContainerRef) {
        navCtrl.navbarViewContainer(viewContainerRef);
    }
};
NavBarAnchor = __decorate([
    Directive({
        selector: 'template[navbar-anchor]'
    }),
    __param(0, Inject(forwardRef(() => NavController))), 
    __metadata('design:paramtypes', [(typeof (_e = typeof NavController !== 'undefined' && NavController) === 'function' && _e) || Object, (typeof (_f = typeof ViewContainerRef !== 'undefined' && ViewContainerRef) === 'function' && _f) || Object])
], NavBarAnchor);
export let NavBarContainer = class {
};
NavBarContainer = __decorate([
    Component({
        selector: 'section',
        host: {
            'class': 'navbar-container'
        }
    }),
    View({
        template: '<template navbar-anchor></template>',
        directives: [NavBarAnchor]
    }), 
    __metadata('design:paramtypes', [])
], NavBarContainer);
var _a, _b, _c, _d, _e, _f;