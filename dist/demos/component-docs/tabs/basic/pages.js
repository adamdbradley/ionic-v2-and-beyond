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

var TabTextCtrl = function TabTextCtrl() {
    _classCallCheck(this, TabTextCtrl);
};
TabTextCtrl = __decorate([(0, _ionicIonic.Page)({
    template: '' + '<ion-navbar *navbar hide-back-button class="android-attr">' + '<ion-title>Tabs</ion-title>' + '</ion-navbar>' + '<ion-content>' + '</ion-content>',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [])], TabTextCtrl);
var BasicPage = function BasicPage() {
    _classCallCheck(this, BasicPage);

    this.tabOne = TabTextCtrl;
    this.tabTwo = TabTextCtrl;
    this.tabThree = TabTextCtrl;
};
exports.BasicPage = BasicPage;
exports.BasicPage = BasicPage = __decorate([(0, _ionicIonic.Page)({
    template: '<ion-tabs>' + '<ion-tab tab-title="Music" [root]="tabOne"></ion-tab>' + '<ion-tab tab-title="Movies" [root]="tabTwo"></ion-tab>' + '<ion-tab tab-title="Games" [root]="tabThree"></ion-tab>' + '</ion-tabs>'
}), __metadata('design:paramtypes', [])], BasicPage);