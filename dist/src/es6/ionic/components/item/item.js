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
import { Component, View, ElementRef, NgIf } from 'angular2/angular2';
import { dom } from 'ionic/util';
/**
 * @name ionItem
 * @description
 * Creates a list-item that can easily be swiped,
 * deleted, reordered, edited, and more.
 *
 * @usage
 * ```html
 * <ion-list>
 *   <ion-item *ng-for="#item of items" (click)="itemTapped($event, item)">
 *     {{item.title}}
 *     <div class="item-note" item-right>
 *       {{item.note}}
 *     </div>
 *   </ion-item>
 * </ion-list>
 *  ```
 */
export let Item = class {
    /**
     * TODO
     * @param {ElementRef} elementRef  A reference to the component's DOM element.
     */
    constructor(elementRef) {
        this._isOpen = false;
        this._isSlideActive = false;
        this._isTransitioning = false;
        this._transform = '';
        this.ele = elementRef.nativeElement;
        this.swipeButtons = {};
        this.optionButtons = {};
    }
};
Item = __decorate([
    Component({
        selector: 'ion-item,[ion-item]',
        host: {
            'class': 'item'
        }
    }),
    View({
        template: '<ng-content select="[item-left]"></ng-content>' +
            '<ion-item-content>' +
            '<ng-content></ng-content>' +
            '</ion-item-content>' +
            '<ng-content select="[item-right]"></ng-content>',
        directives: [NgIf]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a) || Object])
], Item);
class Slideable {
    constructor(slideElement) {
    }
    // override
    onTransform(str) { }
    // override
    onTransitionActive(active) { }
    //override
    onSlideActive(active) { }
    transform(str) {
        if (arguments.length && str !== this._transform) {
            this.onTransform();
        }
    }
    isTransitionActive(active) {
        if (arguments.length && active !== this._isTransitionActive) {
            this._isTransitionActive = active;
            this.onSetTransitionActive(active);
        }
        return this._isTransitioning;
    }
    isSlideActive(active) {
        if (arguments.length && active !== this._isSlideActive) {
            this._isSlideActive = active;
            this.onSetDragActive(active);
        }
        return this._isSlideActive;
    }
    isOpen(open) {
        if (arguments.length && open !== this._isOpen) {
            this.isTransitionActive(true);
            dom.raf(() => {
                this.isOpen = isOpen;
                this.onSetIsOpen(open);
            });
        }
    }
}
class ItemSlideGesture {
}
var _a;