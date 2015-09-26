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
import { AppViewManager, ElementRef, Directive } from 'angular2/angular2';
import { IonicApp } from './app';
/**
 * IdRef is an easy way to identify unique components in an app and access them
 * no matter where in the UI heirarchy you are. For example, this makes toggling
 * a global side menu feasible from any place in the application.
 */
export let IdRef = class {
    constructor(app, elementRef, appViewManager) {
        this.app = app;
        this.elementRef = elementRef;
        this.appViewManager = appViewManager;
        // Grab the component this directive is attached to
        this.component = appViewManager.getComponent(elementRef);
    }
    onInit() {
        this.app.register(this.id, this.component);
    }
    onDestroy() {
        this.app.unregister(this.id);
    }
};
IdRef = __decorate([
    Directive({
        selector: '[id]',
        properties: ['id']
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof IonicApp !== 'undefined' && IonicApp) === 'function' && _a) || Object, (typeof (_b = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _b) || Object, (typeof (_c = typeof AppViewManager !== 'undefined' && AppViewManager) === 'function' && _c) || Object])
], IdRef);
var _a, _b, _c;