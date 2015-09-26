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
import { Component, Directive, View, Host, Attribute, ElementRef, forwardRef } from 'angular2/angular2';
import { IonInput } from './input';
/**
 * TODO
 */
export let FocusHolder = class {
    /**
     * TODO
     */
    constructor() {
        this.i = [];
    }
    /**
     * TODO
     * @param {TODO} inputType  TODO
     */
    setFocusHolder(inputType) {
        this.i[2].type = inputType;
        this.i[2].setFocus();
    }
    /**
     * TODO
     * @param {TODO} tabIndex  TODO
     */
    receivedFocus(tabIndex) {
        if (tabIndex === '999') {
            // focus on the previous input
            IonInput.focusPrevious();
        }
        else if (tabIndex === '1001') {
            // focus on the next input
            IonInput.focusNext();
        }
    }
    /**
     * TODO
     * @param {TODO} input  TODO
     */
    register(input) {
        this.i.push(input);
    }
};
FocusHolder = __decorate([
    Component({
        selector: 'focus-holder'
    }),
    View({
        template: '<input tabindex="999"><input tabindex="1001"><input tabindex="1002">',
        directives: [forwardRef(() => FocusInput)]
    }), 
    __metadata('design:paramtypes', [])
], FocusHolder);
let FocusInput = class {
    constructor(elementRef, holder, tabindex) {
        this.elementRef = elementRef;
        this.holder = holder;
        this.tabindex = tabindex;
        this.holder.register(this);
    }
    setFocus() {
        this.elementRef.nativeElement.focus();
    }
    keydown(ev) {
        // prevent any keyboard typing when a holder has focus
        ev.preventDefault();
        ev.stopPropagation();
    }
    get type() {
        // default to text type if unknown
        return this._t || 'text';
    }
    set type(val) {
        this._t = val;
    }
};
FocusInput = __decorate([
    Directive({
        selector: 'input',
        host: {
            '[type]': 'type',
            '(focus)': 'holder.receivedFocus(tabindex)',
            '(keydown)': 'keydown($event)'
        }
    }),
    __param(1, Host()),
    __param(2, Attribute('tabindex')), 
    __metadata('design:paramtypes', [(typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a) || Object, FocusHolder, String])
], FocusInput);
var _a;