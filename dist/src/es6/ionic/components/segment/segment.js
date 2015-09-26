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
import { View, Renderer, ElementRef, EventEmitter, Host, forwardRef } from 'angular2/angular2';
import { NgControl } from 'angular2/forms';
import { Ion } from '../ion';
import { IonicConfig } from '../../config/config';
import { IonicDirective, IonicComponent } from '../../config/decorators';
/**
 * TODO
 */
export let Segment = class extends Ion {
    /**
     * TODO
     * @param {NgControl} ngControl  TODO
     * @param {ElementRef} elementRef  TODO
     * @param {IonicConfig} config  TODO
     * @param {Renderer} renderer  TODO
     */
    constructor(ngControl, elementRef, ionicConfig, renderer) {
        super(elementRef, ionicConfig);
        this.ele = elementRef.nativeElement;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.change = new EventEmitter('change');
        this.input = new EventEmitter('input');
        this.ngControl = ngControl;
        this.buttons = [];
    }
    /**
     * Called by child SegmentButtons to bind themselves to
     * the Segment.
     * @param {SegmentButton} segmentButton  The child SegmentButton to register.
     */
    register(segmentButton) {
        this.buttons.push(segmentButton);
        // If this button is registered and matches our value,
        // make sure to select it
        if (this.value == segmentButton.value) {
            this.selected(segmentButton);
        }
    }
    /**
     * Select the button with the given value.
     * @param {string} value  Value of the button to select.
     */
    selectFromValue(value) {
        for (let button of this.buttons) {
            if (button.value === value) {
                button.isActive = true;
            }
        }
    }
    /**
     * Indicate a button should be selected.
     * @param {SegmentButton} segmentButton  The button to select.
     */
    selected(segmentButton) {
        for (let button of this.buttons) {
            button.isActive = false;
        }
        segmentButton.isActive = true;
        //this.onChange();
        setTimeout(() => {
            this.value = segmentButton.value;
            this.ngControl.valueAccessor.writeValue(segmentButton.value);
            this.selectFromValue(segmentButton.value);
            this.ngControl.control.updateValue(segmentButton.value);
            // Trigger on change
            this.change.next();
        });
        //this.ngControl.control().updateValue(this.value);
        // TODO: Better way to do this?
        //this.controlDirective._control().updateValue(this.value);
    }
};
Segment = __decorate([
    IonicComponent({
        selector: 'ion-segment',
        appInjector: [NgControl],
        properties: [
            'value'
        ],
        host: {
            '(click)': 'buttonClicked($event)',
            '(change)': 'onChange($event)',
        }
    }),
    View({
        template: '<div class="ion-segment"><ng-content></ng-content></div>',
        directives: [forwardRef(() => SegmentButton)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof NgControl !== 'undefined' && NgControl) === 'function' && _a) || Object, (typeof (_b = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _b) || Object, (typeof (_c = typeof IonicConfig !== 'undefined' && IonicConfig) === 'function' && _c) || Object, (typeof (_d = typeof Renderer !== 'undefined' && Renderer) === 'function' && _d) || Object])
], Segment);
/**
 * TODO
 */
export let SegmentControlValueAccessor = class {
    /**
     * TODO
     * @param {NgControl} ngControl  TODO
     * @param {Renderer} renderer  TODO
     * @param {ElementRef} elementRef  TODO
     * @param {Segment} segment  TODO
     */
    constructor(ngControl, renderer, elementRef, segment) {
        this.onChange = (_) => { };
        this.onTouched = (_) => { };
        this.ngControl = ngControl;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.segment = segment;
        ngControl.valueAccessor = this;
    }
    writeValue(value) {
        // both this.value and setProperty are required at the moment
        // remove when a proper imperative API is provided
        this.value = !value ? '' : value;
        this.renderer.setElementProperty(this.elementRef, 'value', this.value);
        this.segment.value = this.value;
        this.segment.selectFromValue(value);
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
};
SegmentControlValueAccessor = __decorate([
    IonicDirective({
        selector: 'ion-segment',
        //properties: ['value'],
        host: {
            '(change)': 'onChange($event.target.value)',
            '(input)': 'onChange($event.target.value)',
            '(blur)': 'onTouched()',
        }
    }), 
    __metadata('design:paramtypes', [(typeof (_e = typeof NgControl !== 'undefined' && NgControl) === 'function' && _e) || Object, (typeof (_f = typeof Renderer !== 'undefined' && Renderer) === 'function' && _f) || Object, (typeof (_g = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _g) || Object, Segment])
], SegmentControlValueAccessor);
/**
 * TODO
 */
export let SegmentButton = class {
    /**
     * TODO
     * @param {Segment} segment  TODO
     * @param {ElementRef} elementRef  TODO
     */
    constructor(segment, elementRef) {
        this.ele = elementRef.ele;
        this.segment = segment;
    }
    onInit() {
        this.segment.register(this);
    }
    buttonClicked(event) {
        this.segment.selected(this, event);
        event.preventDefault();
    }
};
SegmentButton = __decorate([
    IonicDirective({
        selector: 'ion-segment-button',
        properties: [
            'value'
        ],
        host: {
            '(click)': 'buttonClicked($event)',
            '[class.active]': 'isActive'
        }
    }),
    __param(0, Host()), 
    __metadata('design:paramtypes', [Segment, (typeof (_h = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _h) || Object])
], SegmentButton);
var _a, _b, _c, _d, _e, _f, _g, _h;