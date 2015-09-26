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
import { Directive, View, ElementRef, Host, Optional, forwardRef, Injector, NgZone } from 'angular2/angular2';
import { IonicComponent } from '../../config/decorators';
import { NavController } from './nav-controller';
/**
 * TODO
 */
export let Nav = class extends NavController {
    /**
     * TODO
     * @param {NavController} hostnavCtrl  TODO
     * @param {Injector} injector  TODO
     * @param {ElementRef} elementRef  TODO
     * @param {NgZone} zone  TODO
     */
    constructor(hostnavCtrl, injector, elementRef, zone) {
        super(hostnavCtrl, injector, elementRef, zone);
    }
    /**
     * TODO
     */
    onInit() {
        super.onInit();
        if (this.root) {
            if (typeof this.root !== 'function') {
                throw 'The [root] property in <ion-nav> must be given a reference to a component class from within the constructor.';
            }
            this.push(this.root);
        }
        // default the swipe back to be enabled
        let isSwipeBackEnabled = (this.swipeBackEnabled || '').toString() !== 'false';
        this.isSwipeBackEnabled(isSwipeBackEnabled);
    }
};
Nav = __decorate([
    IonicComponent({
        selector: 'ion-nav',
        properties: [
            'root'
        ],
        defaultProperties: {
            'swipeBackEnabled': true
        }
    }),
    View({
        template: '<template pane-anchor></template>',
        directives: [forwardRef(() => NavPaneAnchor)]
    }),
    __param(0, Optional()), 
    __metadata('design:paramtypes', [(typeof (_a = typeof NavController !== 'undefined' && NavController) === 'function' && _a) || Object, (typeof (_b = typeof Injector !== 'undefined' && Injector) === 'function' && _b) || Object, (typeof (_c = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _c) || Object, (typeof (_d = typeof NgZone !== 'undefined' && NgZone) === 'function' && _d) || Object])
], Nav);
let NavPaneAnchor = class {
    constructor(nav, elementRef) {
        nav.anchorElementRef(elementRef);
    }
};
NavPaneAnchor = __decorate([
    Directive({ selector: 'template[pane-anchor]' }),
    __param(0, Host()), 
    __metadata('design:paramtypes', [Nav, (typeof (_e = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _e) || Object])
], NavPaneAnchor);
var _a, _b, _c, _d, _e;