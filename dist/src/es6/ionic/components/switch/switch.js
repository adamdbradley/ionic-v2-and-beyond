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
import { Directive, ElementRef, Host, Optional, NgControl, Inject, forwardRef } from 'angular2/angular2';
import { Ion } from '../ion';
import { IonInput } from '../form/input';
import { IonicConfig } from '../../config/config';
import { IonicComponent, IonicView } from '../../config/decorators';
import { pointerCoord } from '../../util/dom';
/**
 * @name mediaSwitch
 * @private
 */
let MediaSwitch = class {
    /**
     * TODO
     * @param {Switch} swtch  TODO
     * @param {} elementRef  TODO
     * @param {IonicConfig} config  TODO
     */
    constructor(swtch, elementRef) {
        swtch.switchEle = elementRef.nativeElement;
        this.swtch = swtch;
    }
};
MediaSwitch = __decorate([
    Directive({
        selector: '.media-switch',
        host: {
            'tappable': 'true',
            '(touchstart)': 'swtch.pointerDown($event)',
            '(mousedown)': 'swtch.pointerDown($event)',
            '[class.switch-activated]': 'swtch.isActivated'
        }
    }),
    __param(0, Host()),
    __param(0, Inject(forwardRef(() => Switch))), 
    __metadata('design:paramtypes', [Switch, (typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a) || Object])
], MediaSwitch);
/**
 * @name ionSwitch
 * @description
 * A switch technically is the same thing as an HTML checkbox input, except it looks different and is easier to use on a touch device. Ionic prefers to wrap the checkbox input with the <label> in order to make the entire toggle easy to tap or drag.
 *
 * Toggles can also have colors assigned to them, by adding the `toggle-assertive` attribute to assign the assertive color.
 *
 * See the [Angular 2 Docs](https://angular.io/docs/js/latest/api/forms/) for more info on forms and input.
 *
 * @usage
 * ```html
 * // Create a single switch
 *  <ion-switch checked="true">
 *    Pineapple
 *  </ion-switch>
 *
 * // Create a list of switches:
 *  <ion-list>
 *
 *    <ion-switch checked="true">
 *      Apple
 *    </ion-switch>
 *
 *     <ion-switch checked="false">
 *       Banana
 *     </ion-switch>
 *
 *     <ion-switch disabled="true">
 *       Cherry
 *     </ion-switch>
 *
 *  </ion-list>
 * ```
 *
 */
export let Switch = class extends Ion {
    /**
     * TODO
     * @param {ElementRef} elementRef  TODO
     * @param {IonicConfig} config  TODO
     * @param {NgControl=} ngControl  TODO
     */
    constructor(elementRef, config, ngControl) {
        super(elementRef, config);
        this.ngControl = ngControl;
        let self = this;
        self.id = IonInput.nextId();
        self.tabIndex = 0;
        self.lastTouch = 0;
        self.onChange = (_) => { };
        self.onTouched = (_) => { };
        if (ngControl)
            ngControl.valueAccessor = this;
        function pointerMove(ev) {
            let currentX = pointerCoord(ev).x;
            if (self.checked) {
                if (currentX + 15 < self.startX) {
                    self.toggle();
                    self.startX = currentX;
                }
            }
            else if (currentX - 15 > self.startX) {
                self.toggle();
                self.startX = currentX;
            }
        }
        function pointerOut(ev) {
            if (ev.currentTarget === ev.target) {
                self.pointerUp(ev);
            }
        }
        this.addMoveListener = function () {
            this.switchEle.addEventListener('touchmove', pointerMove);
            this.switchEle.addEventListener('mousemove', pointerMove);
            elementRef.nativeElement.addEventListener('mouseout', pointerOut);
        };
        this.removeMoveListener = function () {
            this.switchEle.removeEventListener('touchmove', pointerMove);
            this.switchEle.removeEventListener('mousemove', pointerMove);
            elementRef.nativeElement.removeEventListener('mouseout', pointerOut);
        };
    }
    onInit() {
        super.onInit();
        this.labelId = 'label-' + this.id;
    }
    /**
     * Set checked state of this switch.
     * @param {boolean} value  Boolean to set this switch's checked state to.
     */
    check(value) {
        this.checked = !!value;
        this.onChange(this.checked);
    }
    /**
     * Toggle the checked state of this switch.
     */
    toggle() {
        this.check(!this.checked);
    }
    click(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.toggle();
    }
    writeValue(value) {
        this.checked = value;
    }
    pointerDown(ev) {
        if (/touch/.test(ev.type)) {
            this.lastTouch = Date.now();
        }
        if (this.lastTouch + 999 > Date.now() && /mouse/.test(ev.type)) {
            return;
        }
        this.startX = pointerCoord(ev).x;
        this.removeMoveListener();
        this.addMoveListener();
        this.isActivated = true;
    }
    pointerUp(ev) {
        if (this.lastTouch + 999 > Date.now() && /mouse/.test(ev.type)) {
            return;
        }
        let endX = pointerCoord(ev).x;
        if (this.checked) {
            if (this.startX + 4 > endX) {
                this.toggle();
            }
        }
        else if (this.startX - 4 < endX) {
            this.toggle();
        }
        this.removeMoveListener();
        this.isActivated = false;
    }
    // Used by the view to update the model (Control)
    // Up to us to call it in update()
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    onDestroy() {
        this.removeMoveListener();
        this.switchEle = this.addMoveListener = this.removeMoveListener = null;
    }
};
Switch = __decorate([
    IonicComponent({
        selector: 'ion-switch',
        properties: [
            'value',
            'checked',
            'disabled',
            'id'
        ],
        host: {
            'class': 'item',
            'role': 'checkbox',
            '[attr.tab-index]': 'tabIndex',
            '[attr.aria-checked]': 'checked',
            '[attr.aria-disabled]': 'disabled',
            '[attr.aria-labelledby]': 'labelId',
            '(touchend)': 'pointerUp($event)',
            '(mouseup)': 'pointerUp($event)',
        }
    }),
    IonicView({
        template: '<ng-content select="[item-left]"></ng-content>' +
            '<ion-item-content id="{{labelId}}">' +
            '<ng-content></ng-content>' +
            '</ion-item-content>' +
            '<div item-right class="media-switch">' +
            '<div class="switch-icon"></div>' +
            '</div>',
        directives: [MediaSwitch]
    }),
    __param(2, Optional()), 
    __metadata('design:paramtypes', [(typeof (_b = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _b) || Object, (typeof (_c = typeof IonicConfig !== 'undefined' && IonicConfig) === 'function' && _c) || Object, (typeof (_d = typeof NgControl !== 'undefined' && NgControl) === 'function' && _d) || Object])
], Switch);
var _a, _b, _c, _d;