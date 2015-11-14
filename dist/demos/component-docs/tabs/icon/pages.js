"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var _angular2Angular2 = require('angular2/angular2');

var _helpers = require('../../helpers');

var helpers = _interopRequireWildcard(_helpers);

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2:
            return decorators.reduceRight(function (o, d) {
                return d && d(o) || o;
            }, target);
        case 3:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key), void 0;
            }, void 0);
        case 4:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key, o) || o;
            }, desc);
    }
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabIconCtrl = function TabIconCtrl() {
    _classCallCheck(this, TabIconCtrl);
};
TabIconCtrl = __decorate([(0, _ionicIonic.Page)({
    template: '' + '<ion-navbar *navbar hide-back-button class="android-attr">' + '<ion-title>Tabs</ion-title>' + '</ion-navbar>' + '<ion-content>' + '</ion-content>',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [])], TabIconCtrl);
var IconPage = function IconPage() {
    _classCallCheck(this, IconPage);

    this.tabOne = TabIconCtrl;
    this.tabTwo = TabIconCtrl;
    this.tabThree = TabIconCtrl;
    this.tabFour = TabIconCtrl;
};
exports.IconPage = IconPage;
exports.IconPage = IconPage = __decorate([(0, _ionicIonic.Page)({
    template: '<ion-tabs>' + '<ion-tab tab-icon="contact" [root]="tabOne"></ion-tab>' + '<ion-tab tab-icon="compass" [root]="tabTwo"></ion-tab>' + '<ion-tab tab-icon="analytics" [root]="tabThree"></ion-tab>' + '<ion-tab tab-icon="settings" [root]="tabFour"></ion-tab>' + '</ion-tabs>'
}), __metadata('design:paramtypes', [])], IconPage);