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
import { ElementRef } from 'angular2/angular2';
import { Ion } from '../ion';
import { IonicConfig } from '../../config/config';
import { IonicDirective } from '../../config/decorators';
/**
 * TODO
 */
export let Card = class extends Ion {
    /**
     * TODO
     * @param {ElementeRef} elementRef  TODO
     * @param {IonicConfig} ionicConfig  TODO
     */
    constructor(elementRef, ionicConfig) {
        super(elementRef, ionicConfig);
    }
};
Card = __decorate([
    IonicDirective({
        selector: 'ion-card'
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof IonicConfig !== 'undefined' && IonicConfig) === 'function' && _b) || Object])
], Card);
var _a, _b;