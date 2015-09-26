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
import { forwardRef, Directive, Host, View, EventEmitter, ElementRef } from 'angular2/angular2';
import { Ion } from '../ion';
import { IonicApp } from '../app/app';
import { IonicConfig } from '../../config/config';
import { IonicComponent } from '../../config/decorators';
import { IonicPlatform } from '../../platform/platform';
import * as gestures from './menu-gestures';
/**
 * Menu is a side-menu navigation that can be dragged out or toggled to show.
 * Menu supports two display styles currently: overlay, and reveal. Overlay
 * is the tradtional Android drawer style, and Reveal is the traditional iOS
 * style. By default, Menu will adjust to the correct style for the platform.
 */
export let Menu = class extends Ion {
    constructor(app, elementRef, config, platform) {
        super(elementRef, config);
        this.app = app;
        this.platform = platform;
        this.opening = new EventEmitter('opening');
        this.isOpen = false;
        this._disableTime = 0;
    }
    onInit() {
        super.onInit();
        this._cntEle = (this.content instanceof Node) ? this.content : this.content.getNativeElement();
        if (!this._cntEle) {
            return console.error('Menu: must have a [content] element to listen for drag events on. Example:\n\n<ion-menu [content]="content"></ion-menu>\n\n<ion-content #content></ion-content>');
        }
        if (!this.id) {
            // Auto register
            this.id = 'menu';
            this.app.register(this.id, this);
        }
        this._initGesture();
        this._initType(this.type);
        this._cntEle.classList.add('menu-content');
        this._cntEle.classList.add('menu-content-' + this.type);
        let self = this;
        this.onContentClick = function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            self.close();
        };
    }
    _initGesture() {
        switch (this.side) {
            case 'right':
                this._gesture = new gestures.RightMenuGesture(this);
                break;
            case 'left':
                this._gesture = new gestures.LeftMenuGesture(this);
                break;
        }
    }
    _initType(type) {
        type = type && type.trim().toLowerCase() || FALLBACK_MENU_TYPE;
        let menuTypeCls = menuTypes[type];
        if (!menuTypeCls) {
            type = FALLBACK_MENU_TYPE;
            menuTypeCls = menuTypes[type];
        }
        this._type = new menuTypeCls(this);
        this.type = type;
    }
    /**
     * Sets the state of the Menu to open or not.
     * @param {boolean} isOpen  If the Menu is open or not.
     * @return {Promise} TODO
     */
    setOpen(shouldOpen) {
        // _isDisabled is used to prevent unwanted opening/closing after swiping open/close
        // or swiping open the menu while pressing down on the menu-toggle button
        if (shouldOpen === this.isOpen || this._isDisabled()) {
            return Promise.resolve();
        }
        this._before();
        return this._type.setOpen(shouldOpen).then(() => {
            this._after(shouldOpen);
        });
    }
    setProgressStart() {
        // user started swiping the menu open/close
        if (this._isDisabled())
            return;
        this._before();
        this._type.setProgressStart(this.isOpen);
    }
    setProgess(value) {
        // user actively dragging the menu
        this._disable();
        this.app.setTransitioning(true);
        this._type.setProgess(value);
    }
    setProgressEnd(shouldComplete) {
        // user has finished dragging the menu
        this._disable();
        this.app.setTransitioning(true);
        this._type.setProgressEnd(shouldComplete).then(isOpen => {
            this._after(isOpen);
        });
    }
    _before() {
        // this places the menu into the correct location before it animates in
        // this css class doesn't actually kick off any animations
        this.getNativeElement().classList.add('show-menu');
        this.getBackdropElement().classList.add('show-backdrop');
        this._disable();
        this.app.setTransitioning(true);
    }
    _after(isOpen) {
        // keep opening/closing the menu disabled for a touch more yet
        this._disable();
        this.app.setTransitioning(false);
        this.isOpen = isOpen;
        this._cntEle.classList[isOpen ? 'add' : 'remove']('menu-content-open');
        this._cntEle.removeEventListener('click', this.onContentClick);
        if (isOpen) {
            this._cntEle.addEventListener('click', this.onContentClick);
        }
        else {
            this.getNativeElement().classList.remove('show-menu');
            this.getBackdropElement().classList.remove('show-backdrop');
        }
    }
    _disable() {
        // used to prevent unwanted opening/closing after swiping open/close
        // or swiping open the menu while pressing down on the menu-toggle
        this._disableTime = Date.now() + 20;
    }
    _isDisabled() {
        return this._disableTime > Date.now();
    }
    /**
     * TODO
     * @return {TODO} TODO
     */
    open() {
        return this.setOpen(true);
    }
    /**
     * TODO
     * @return {TODO} TODO
     */
    close() {
        return this.setOpen(false);
    }
    /**
     * TODO
     * @return {TODO} TODO
     */
    toggle() {
        return this.setOpen(!this.isOpen);
    }
    /**
     * TODO
     * @return {Element} The Menu element.
     */
    getMenuElement() {
        return this.getNativeElement();
    }
    /**
     * TODO
     * @return {Element} The Menu's associated content element.
     */
    getContentElement() {
        return this._cntEle;
    }
    /**
     * TODO
     * @return {Element} The Menu's backdrop element.
     */
    getBackdropElement() {
        return this.backdrop.elementRef.nativeElement;
    }
    static register(name, cls) {
        menuTypes[name] = cls;
    }
    onDestroy() {
        this.app.unregister(this.id);
        this._gesture && this._gesture.destroy();
        this._type && this._type.onDestroy();
        this._cntEle = null;
    }
};
Menu = __decorate([
    IonicComponent({
        selector: 'ion-menu',
        properties: [
            'content',
            'dragThreshold',
            'id'
        ],
        defaultProperties: {
            'side': 'left',
            'type': 'reveal'
        },
        host: {
            'role': 'navigation'
        },
        events: ['opening']
    }),
    View({
        template: '<ng-content></ng-content><backdrop tappable></backdrop>',
        directives: [forwardRef(() => MenuBackdrop)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof IonicApp !== 'undefined' && IonicApp) === 'function' && _a) || Object, (typeof (_b = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _b) || Object, (typeof (_c = typeof IonicConfig !== 'undefined' && IonicConfig) === 'function' && _c) || Object, (typeof (_d = typeof IonicPlatform !== 'undefined' && IonicPlatform) === 'function' && _d) || Object])
], Menu);
let menuTypes = {};
const FALLBACK_MENU_TYPE = 'reveal';
/**
 * TODO
 */
let MenuBackdrop = class {
    /**
     * TODO
     * @param {Menu} menu  TODO
     */
    constructor(menu, elementRef) {
        this.menu = menu;
        this.elementRef = elementRef;
        menu.backdrop = this;
    }
    /**
     * TODO
     * @param {TODO} event  TODO
     */
    clicked(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.menu.close();
    }
};
MenuBackdrop = __decorate([
    Directive({
        selector: 'backdrop',
        host: {
            '(click)': 'clicked($event)'
        }
    }),
    __param(0, Host()), 
    __metadata('design:paramtypes', [Menu, (typeof (_e = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _e) || Object])
], MenuBackdrop);
var _a, _b, _c, _d, _e;