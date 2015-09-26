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
import { Directive, Injector, ElementRef, Optional, Host, forwardRef, NgZone } from 'angular2/angular2';
import { IonicApp } from '../app/app';
import { NavController } from '../nav/nav-controller';
import { ViewController } from '../nav/view-controller';
import { IonicComponent, IonicView } from '../../config/decorators';
import { IonicConfig } from '../../config/config';
/**
 * @name ionTabs
 * @description
 * Powers a multi-tabbed interface with a Tab Bar and a set of "pages"
 * that can be tabbed through.
 *
 * Assign any tabs attribute to the element to define its look and feel.
 *
 * For iOS, tabs will appear at the bottom of the screen. For Android, tabs
 * will be at the top of the screen, below the nav-bar. This follows each platform's
 * design specification, but can be configured with IonicConfig.
 *
 * See the ionTab component's documentation for more details on individual tabs.
 *
 * @usage
 * ```html
 * <ion-tabs>
 *   <ion-tab tab-title="Heart" tab-icon="ion-ios-heart-outline" [root]="root1"></ion-tab>
 *   <ion-tab tab-title="Star" tab-icon="ion-ios-star-outline" [root]="root2"></ion-tab>
 *   <ion-tab tab-title="Stopwatch" tab-icon="ion-ios-stopwatch-outline" [root]="root3"></ion-tab>
 * </ion-tabs>
 * ```
 *
 */
export let Tabs = class extends NavController {
    /**
     * TODO
     */
    constructor(hostNavCtrl, viewCtrl, app, injector, elementRef, zone) {
        super(hostNavCtrl, injector, elementRef, zone);
        this.app = app;
        // Tabs may also be an actual ViewController which was navigated to
        // if Tabs is static and not navigated to within a NavController
        // then skip this and don't treat it as it's own ViewController
        if (viewCtrl) {
            this.viewCtrl = viewCtrl;
            // special overrides for the Tabs ViewController
            // the Tabs ViewController does not have it's own navbar
            // so find the navbar it should use within it's active Tab
            viewCtrl.navbarView = () => {
                let activeTab = this.getActive();
                if (activeTab && activeTab.instance) {
                    return activeTab.instance.navbarView();
                }
            };
            // a Tabs ViewController should not have a back button
            // enableBack back button will later be determined
            // by the active ViewController that has a navbar
            viewCtrl.enableBack = () => {
                return false;
            };
        }
    }
    /**
     * TODO
     * @param {Tab} tab  TODO
     */
    addTab(tab) {
        // tab.viewCtrl refers to the ViewController of the individual Tab being added to Tabs (NavController)
        // this.viewCtrl refers to the ViewController instsance on Tabs
        this.add(tab.viewCtrl);
        if (this.length() === 1) {
            // this was the first tab added, queue this one to be loaded and selected
            let promise = tab.queueInitial();
            this.viewCtrl && this.viewCtrl.addPromise(promise);
        }
    }
    /**
     * TODO
     * @param {Tab} tab  TODO
     * @returns {TODO} TODO
     */
    select(tab) {
        let enteringView = null;
        if (typeof tab === 'number') {
            enteringView = this.getByIndex(tab);
        }
        else {
            enteringView = this.getByInstance(tab);
        }
        if (!enteringView || !enteringView.instance || !this.app.isEnabled()) {
            return Promise.reject();
        }
        return new Promise(resolve => {
            enteringView.instance.load(() => {
                let opts = {
                    animate: false
                };
                let leavingView = this.getActive() || new ViewController();
                leavingView.shouldDestroy = false;
                leavingView.shouldCache = true;
                this.transition(enteringView, leavingView, opts, () => {
                    resolve();
                });
            });
        });
    }
    get tabs() {
        return this.instances();
    }
};
Tabs = __decorate([
    IonicComponent({
        selector: 'ion-tabs',
        defaultProperties: {
            'tabBarPlacement': 'bottom',
            'tabBarIcons': 'top'
        }
    }),
    IonicView({
        template: '' +
            '<nav class="tab-bar-container">' +
            '<div class="tab-bar" role="tablist">' +
            '<a *ng-for="#t of tabs" [tab]="t" class="tab-button" role="tab">' +
            '<icon [name]="t.tabIcon" [is-active]="t.isSelected" class="tab-button-icon"></icon>' +
            '<span class="tab-button-text">{{t.tabTitle}}</span>' +
            '</a>' +
            '</div>' +
            '</nav>' +
            '<section class="content-container">' +
            '<ng-content></ng-content>' +
            '</section>',
        directives: [forwardRef(() => TabButton)]
    }),
    __param(0, Optional()),
    __param(1, Optional()), 
    __metadata('design:paramtypes', [(typeof (_a = typeof NavController !== 'undefined' && NavController) === 'function' && _a) || Object, (typeof (_b = typeof ViewController !== 'undefined' && ViewController) === 'function' && _b) || Object, (typeof (_c = typeof IonicApp !== 'undefined' && IonicApp) === 'function' && _c) || Object, (typeof (_d = typeof Injector !== 'undefined' && Injector) === 'function' && _d) || Object, (typeof (_e = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _e) || Object, (typeof (_f = typeof NgZone !== 'undefined' && NgZone) === 'function' && _f) || Object])
], Tabs);
/**
 * TODO
 */
let TabButton = class {
    constructor(tabs, config, elementRef) {
        this.tabs = tabs;
        if (config.setting('hoverCSS') === false) {
            elementRef.nativeElement.classList.add('disable-hover');
        }
    }
    onInit() {
        let id = this.tab.viewCtrl.id;
        this.btnId = 'tab-button-' + id;
        this.panelId = 'tab-panel-' + id;
        this.hasTitle = !!this.tab.tabTitle;
        this.hasIcon = !!this.tab.tabIcon;
        this.hasTitleOnly = (this.hasTitle && !this.hasIcon);
        this.hasIconOnly = (this.hasIcon && !this.hasTitle);
    }
    onClick(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.tabs.select(this.tab);
    }
};
TabButton = __decorate([
    Directive({
        selector: '.tab-button',
        properties: ['tab'],
        host: {
            '[attr.id]': 'btnId',
            '[attr.aria-controls]': 'panelId',
            '[attr.aria-selected]': 'tab.isSelected',
            '[class.has-title]': 'hasTitle',
            '[class.has-icon]': 'hasIcon',
            '[class.has-title-only]': 'hasTitleOnly',
            '[class.icon-only]': 'hasIconOnly',
            '(click)': 'onClick($event)',
        }
    }),
    __param(0, Host()), 
    __metadata('design:paramtypes', [Tabs, (typeof (_g = typeof IonicConfig !== 'undefined' && IonicConfig) === 'function' && _g) || Object, (typeof (_h = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _h) || Object])
], TabButton);
var _a, _b, _c, _d, _e, _f, _g, _h;