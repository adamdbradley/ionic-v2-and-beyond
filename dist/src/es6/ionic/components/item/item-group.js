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
import { Directive, ElementRef } from 'angular2/angular2';
/**
 * TODO
 */
export let ItemGroup = class {
    /**
     * TODO
     * @param {ElementRef} elementRef  TODO
     */
    constructor(elementRef) {
        this.ele = elementRef.nativeElement;
    }
};
ItemGroup = __decorate([
    Directive({
        selector: 'ion-item-group',
        host: {
            'class': 'item-group'
        }
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a) || Object])
], ItemGroup);
/**
 * TODO
 */
export let ItemGroupTitle = class {
    /**
     * TODO
     * @param {ElementRef} elementRef  TODO
     */
    constructor(elementRef) {
        this.isSticky = true;
        this.ele = elementRef.nativeElement;
    }
};
ItemGroupTitle = __decorate([
    Directive({
        selector: 'ion-item-group-title',
        host: {
            'class': 'item-group-title',
            '[class.sticky]': 'isSticky'
        }
    }), 
    __metadata('design:paramtypes', [(typeof (_b = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _b) || Object])
], ItemGroupTitle);
var _a, _b;