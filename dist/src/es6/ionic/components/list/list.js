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
import { Ion } from '../ion';
import { IonicConfig } from '../../config/config';
import { IonicDirective } from '../../config/decorators';
import { ListVirtualScroll } from './virtual';
import * as util from 'ionic/util';
/**
 * @name ionList
 * @description
 * The List is a widely used interface element in almost any mobile app, and can include
 * content ranging from basic text all the way to buttons, toggles, icons, and thumbnails.
 *
 * Both the list, which contains items, and the list items themselves can be any HTML
 * element.
 *
 * Using the ionList and ionItem components make it easy to support various
 * interaction modes such as swipe to edit, drag to reorder, and removing items.
 *
 */
export let List = class extends Ion {
    /**
     * TODO
     * @param {ElementRef} elementRef  TODO
     * @param {IonicConfig} config  TODO
     */
    constructor(elementRef, config) {
        super(elementRef, config);
        this.ele = elementRef.nativeElement;
    }
    /**
     * TODO
     */
    onInit() {
        super.onInit();
        if (util.isDefined(this.virtual)) {
            console.log('Content', this.content);
            console.log('Virtual?', this.virtual);
            console.log('Items?', this.items.length, 'of \'em');
            this._initVirtualScrolling();
        }
    }
    /**
     * @private
     * TODO
     */
    _initVirtualScrolling() {
        if (!this.content) {
            return;
        }
        this._virtualScrollingManager = new ListVirtualScroll(this);
    }
    /**
     * TODO
     * @param {TODO} item  TODO
     */
    setItemTemplate(item) {
        this.itemTemplate = item;
    }
};
List = __decorate([
    IonicDirective({
        selector: 'ion-list',
        properties: [
            'items',
            'virtual',
            'content'
        ]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof IonicConfig !== 'undefined' && IonicConfig) === 'function' && _b) || Object])
], List);
/**
 * TODO
 */
export let ListHeader = class {
};
ListHeader = __decorate([
    Directive({
        selector: 'ion-header',
        properties: [
            'id'
        ],
        host: {
            '[attr.id]': 'id'
        }
    }), 
    __metadata('design:paramtypes', [])
], ListHeader);
var _a, _b;