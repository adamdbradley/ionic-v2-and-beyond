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
import { Injectable } from 'angular2/angular2';
import { Overlay } from '../overlay/overlay';
import { Animation } from '../../animations/animation';
import * as util from 'ionic/util';
/**
 * @name ionModal
 * @description
 * The Modal is a content pane that can go over the user's main view temporarily. Usually used for making a choice or editing an item.
 *
 * @usage
 * ```ts
 * class MyApp {
 *
 *  constructor(modal: Modal, app: IonicApp, ionicConfig: IonicConfig) {
 *    this.modal = modal;
 *  }
 *
 *  openModal() {
 *    this.modal.open(ContactModal, {
 *      enterAnimation: 'my-fade-in',
 *      leaveAnimation: 'my-fade-out',
 *      handle: 'my-modal'
 *    });
 *  }
 * }
 * ```
 */
export let Modal = class extends Overlay {
    /**
     * TODO
     * @param {Type} ComponentType  TODO
     * @param {Object} [opts={}]  TODO
     * @returns {TODO} TODO
     */
    open(ComponentType, opts = {}) {
        let defaults = {
            enterAnimation: 'modal-slide-in',
            leaveAnimation: 'modal-slide-out',
        };
        return this.create(OVERLAY_TYPE, ComponentType, util.extend(defaults, opts));
    }
    /**
     * TODO
     * @param {TODO} handle  TODO
     * @returns {TODO} TODO
     */
    get(handle) {
        if (handle) {
            return this.getByHandle(handle, OVERLAY_TYPE);
        }
        return this.getByType(OVERLAY_TYPE);
    }
};
Modal = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [])
], Modal);
const OVERLAY_TYPE = 'modal';
/**
 * Animations for modals
 */
class ModalSlideIn extends Animation {
    constructor(element) {
        super(element);
        this
            .easing('cubic-bezier(.36,.66,.04,1)')
            .duration(400)
            .fromTo('translateY', '100%', '0%');
    }
}
Animation.register('modal-slide-in', ModalSlideIn);
class ModalSlideOut extends Animation {
    constructor(element) {
        super(element);
        this
            .easing('ease-out')
            .duration(250)
            .fromTo('translateY', '0%', '100%');
    }
}
Animation.register('modal-slide-out', ModalSlideOut);