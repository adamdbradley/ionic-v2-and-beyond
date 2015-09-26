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
import { Directive } from 'angular2/angular2';
import { NavController } from './nav-controller';
import { NavRegistry } from './nav-registry';
/**
 * TODO
 */
export let NavPush = class {
    /**
     * TODO
     * @param {NavController} nav  TODO
     */
    constructor(nav, registry) {
        this.nav = nav;
        this.registry = registry;
    }
    onClick(event) {
        let destination, params;
        if (this.instruction instanceof Array) {
            if (this.instruction.length > 2) {
                throw 'Too many [nav-push] arguments, expects [View, { params }]';
            }
            destination = this.instruction[0];
            params = this.instruction[1] || this.params;
        }
        else {
            destination = this.instruction;
            params = this.params;
        }
        if (typeof destination === "string") {
            destination = this.registry.get(destination);
        }
        this.nav.push(destination, params);
    }
};
NavPush = __decorate([
    Directive({
        selector: '[nav-push]',
        properties: [
            'instruction: navPush',
            'params: navParams'
        ],
        host: {
            '(click)': 'onClick($event)',
            'role': 'link'
        }
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof NavController !== 'undefined' && NavController) === 'function' && _a) || Object, (typeof (_b = typeof NavRegistry !== 'undefined' && NavRegistry) === 'function' && _b) || Object])
], NavPush);
/**
 * TODO
 */
export let NavPop = class {
    /**
     * TODO
     * @param {NavController} nav  TODO
     */
    constructor(nav) {
        this.nav = nav;
    }
    onClick(event) {
        this.nav.pop();
    }
};
NavPop = __decorate([
    Directive({
        selector: '[nav-pop]',
        host: {
            '(click)': 'onClick($event)',
            'role': 'link'
        }
    }), 
    __metadata('design:paramtypes', [(typeof (_c = typeof NavController !== 'undefined' && NavController) === 'function' && _c) || Object])
], NavPop);
var _a, _b, _c;