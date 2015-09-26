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
import { View, ElementRef, Inject, forwardRef, Injector, bind } from 'angular2/angular2';
import { Ion } from '../ion';
import { IonicConfig } from '../../config/config';
import { NavController } from './nav-controller';
import { IonicComponent } from '../../config/decorators';
import { PaneAnchor, PaneContentAnchor, NavBarContainer } from './anchors';
/**
 * TODO
 */
export class PaneController {
    /**
     * TODO
     * @param {NavController} navCtrl  TODO
     */
    constructor(navCtrl) {
        this.panes = [];
        this.navCtrl = navCtrl;
        this.bindings = Injector.resolve([
            bind(NavController).toValue(navCtrl)
        ]);
    }
    /**
     * TODO
     * @param {TODO} nav  TODO
     * @param {Function} nav  TODO
     */
    get(itemStructure, callback) {
        // this gets or creates the Pane which similar nav items live in
        // Nav items with just a navbar/content would all use the same Pane
        // Tabs and view's without a navbar would get a different Panes
        let key = itemStructure.key;
        let navCtrl = this.navCtrl;
        let pane = this.panes[this.panes.length - 1];
        if (pane && pane.key === key) {
            // the last pane's structure is the same as the one the item needs to go in
            callback(pane);
        }
        else {
            // create a new nav pane
            navCtrl.loader.loadNextToLocation(Pane, navCtrl.anchorElementRef(), this.bindings).then((componentRef) => {
                // get the pane reference
                pane = this.newPane;
                this.newPane = null;
                let sectionAnchorElementRef = pane && pane.sectionAnchorElementRef;
                if (!sectionAnchorElementRef) {
                    return callback();
                }
                pane.key = key;
                pane.dispose = () => {
                    componentRef.dispose();
                    this.panes.splice(this.panes.indexOf(pane), 1);
                };
                this.panes.push(pane);
                let promises = [];
                let sectionsToAdd = [];
                // decide which sections should be added to this Pane, ie: nav bars, footers, etc.
                // add only the sections it needs
                if (itemStructure.navbar) {
                    sectionsToAdd.push(NavBarContainer);
                }
                // add the sections which this type of Pane requires
                sectionsToAdd.forEach(SectionClass => {
                    // as each section is compiled and added to the Pane
                    // the section will add a reference to itself in the Pane's sections object
                    promises.push(navCtrl.loader.loadNextToLocation(SectionClass, sectionAnchorElementRef));
                });
                // wait for all of the sections to resolve
                Promise.all(promises).then(() => {
                    callback(pane);
                }, err => {
                    console.error(err);
                });
            }, loaderErr => {
                console.error(loaderErr);
            }).catch(err => {
                console.error(err);
            });
        }
    }
    add(pane) {
        this.newPane = pane;
    }
}
export let Pane = class extends Ion {
    constructor(navCtrl, elementRef, ionicConfig) {
        super(elementRef, ionicConfig);
        navCtrl.panes.add(this);
        this.totalItems = 0;
        this.zIndex = ++navCtrl.zIndexes;
    }
};
Pane = __decorate([
    IonicComponent({
        selector: 'ion-pane',
        classId: 'nav',
        host: {
            '[style.z-index]': 'zIndex',
        }
    }),
    View({
        template: `
    <template pane-anchor></template>
    <section class="content-container">
      <template content-anchor></template>
    </section>
  `,
        directives: [PaneAnchor, PaneContentAnchor]
    }),
    __param(0, Inject(forwardRef(() => NavController))), 
    __metadata('design:paramtypes', [(typeof (_a = typeof NavController !== 'undefined' && NavController) === 'function' && _a) || Object, (typeof (_b = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _b) || Object, (typeof (_c = typeof IonicConfig !== 'undefined' && IonicConfig) === 'function' && _c) || Object])
], Pane);
var _a, _b, _c;