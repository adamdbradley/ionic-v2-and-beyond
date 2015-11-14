"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var _helpers = require('../../helpers');

var _angular2Angular2 = require('angular2/angular2');

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
var BasicPage = (function () {
    function BasicPage(popup) {
        _classCallCheck(this, BasicPage);

        this.popup = popup;
    }

    _createClass(BasicPage, [{
        key: "doAlert",
        value: function doAlert() {
            this.popup.alert({
                title: "New Friend!",
                template: "Your friend, Obi wan Kenobi, just accepted your friend request!",
                cssClass: 'my-alert'
            });
        }
    }, {
        key: "doPrompt",
        value: function doPrompt() {
            this.popup.prompt({
                title: "New Album",
                template: "Enter a name for this new album you're so keen on adding",
                inputPlaceholder: "Title",
                okText: "Save"
            });
        }
    }, {
        key: "doConfirm",
        value: function doConfirm() {
            this.popup.confirm({
                title: "Use this lightsaber?",
                template: "Do you agree to use this lightsaber to do good across the intergalactic galaxy?",
                cancelText: "Disagree",
                okText: "Agree"
            });
        }
    }, {
        key: "onPageWillLeave",
        value: function onPageWillLeave() {
            var popup = this.popup.get();
            // only try to close if there is an active popup
            if (popup) {
                popup.close();
            }
        }
    }]);

    return BasicPage;
})();
exports.BasicPage = BasicPage;
exports.BasicPage = BasicPage = __decorate([(0, _ionicIonic.Page)({
    templateUrl: 'popups/basic/template.html',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return _helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.Popup !== 'undefined' && _ionicIonic.Popup) === 'function' && _a || Object])], BasicPage);
var _a;