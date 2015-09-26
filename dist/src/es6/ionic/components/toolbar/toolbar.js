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
import { Component, Directive, View, ElementRef, Optional, forwardRef, Inject } from 'angular2/angular2';
import { Ion } from '../ion';
import { IonicConfig } from '../../config/config';
import { IonicView } from '../../config/decorators';
import { Navbar } from '../nav-bar/nav-bar';
/**
 * TODO
 */
export class ToolbarBase extends Ion {
    constructor(elementRef, config) {
        super(elementRef, config);
        this.itemRefs = [];
        this.titleRef = null;
    }
    setTitleCmp(titleCmp) {
        this.titleCmp = titleCmp;
    }
    getTitleText() {
        return (this.titleCmp && this.titleCmp.getTitleText()) || '';
    }
    /**
     * TODO
     * @returns {TODO} TODO
     */
    getTitleRef() {
        return this.titleCmp && this.titleCmp.elementRef;
    }
    /**
     * A toolbar items include the left and right side `ion-nav-items`,
     * and every `menu-toggle`. It does not include the `ion-title`.
     * @returns {TODO} Array of this toolbar's item ElementRefs.
     */
    getItemRefs() {
        return this.itemRefs;
    }
    addItemRef(itemElementRef) {
        this.itemRefs.push(itemElementRef);
    }
}
/**
 * TODO
 */
export let Toolbar = class extends ToolbarBase {
    constructor(elementRef, config) {
        super(elementRef, config);
    }
};
Toolbar = __decorate([
    Component({
        selector: 'ion-toolbar',
        host: {
            'class': 'toolbar'
        }
    }),
    IonicView({
        template: '<div class="toolbar-inner">' +
            '<ng-content select="[menu-toggle]"></ng-content>' +
            '<ng-content select="ion-title"></ng-content>' +
            '<ng-content select="ion-nav-items[primary]"></ng-content>' +
            '<ng-content select="ion-nav-items[secondary]"></ng-content>' +
            '</div>' +
            '<div class="toolbar-background"></div>'
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof IonicConfig !== 'undefined' && IonicConfig) === 'function' && _b) || Object])
], Toolbar);
export let ToolbarTitle = class extends Ion {
    constructor(elementRef, toolbar, navbar) {
        super(elementRef, null);
        toolbar && toolbar.setTitleCmp(this);
        navbar && navbar.setTitleCmp(this);
    }
    getTitleText() {
        return this.getNativeElement().textContent;
    }
};
ToolbarTitle = __decorate([
    Component({
        selector: 'ion-title'
    }),
    View({
        template: '<div class="toolbar-title">' +
            '<ng-content></ng-content>' +
            '</div>'
    }),
    __param(1, Optional()),
    __param(2, Optional()),
    __param(2, Inject(forwardRef(() => Navbar))), 
    __metadata('design:paramtypes', [(typeof (_c = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _c) || Object, Toolbar, (typeof (_d = typeof Navbar !== 'undefined' && Navbar) === 'function' && _d) || Object])
], ToolbarTitle);
export let ToolbarItem = class extends Ion {
    constructor(elementRef, toolbar, navbar) {
        super(elementRef, null);
        toolbar && toolbar.addItemRef(elementRef);
        navbar && navbar.addItemRef(elementRef);
    }
};
ToolbarItem = __decorate([
    Directive({
        selector: 'ion-nav-items,[menu-toggle]'
    }),
    __param(1, Optional()),
    __param(2, Optional()),
    __param(2, Inject(forwardRef(() => Navbar))), 
    __metadata('design:paramtypes', [(typeof (_e = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _e) || Object, Toolbar, (typeof (_f = typeof Navbar !== 'undefined' && Navbar) === 'function' && _f) || Object])
], ToolbarItem);
var _a, _b, _c, _d, _e, _f;