System.register("ionic/components/toolbar/toolbar", ["angular2/angular2", "../ion", "../../config/config", "../../config/decorators", "../nav-bar/nav-bar"], function (_export) {
    /**
     * TODO
     */
    "use strict";

    var Component, Directive, View, ElementRef, Optional, forwardRef, Inject, Ion, IonicConfig, IonicView, Navbar, __decorate, __metadata, __param, ToolbarBase, Toolbar, ToolbarTitle, ToolbarItem, _a, _b, _c, _d, _e, _f;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_angular2Angular2) {
            Component = _angular2Angular2.Component;
            Directive = _angular2Angular2.Directive;
            View = _angular2Angular2.View;
            ElementRef = _angular2Angular2.ElementRef;
            Optional = _angular2Angular2.Optional;
            forwardRef = _angular2Angular2.forwardRef;
            Inject = _angular2Angular2.Inject;
        }, function (_ion) {
            Ion = _ion.Ion;
        }, function (_configConfig) {
            IonicConfig = _configConfig.IonicConfig;
        }, function (_configDecorators) {
            IonicView = _configDecorators.IonicView;
        }, function (_navBarNavBar) {
            Navbar = _navBarNavBar.Navbar;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return (d && d(target, key), void 0);
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            __param = undefined && undefined.__param || function (paramIndex, decorator) {
                return function (target, key) {
                    decorator(target, key, paramIndex);
                };
            };

            ToolbarBase = (function (_Ion) {
                _inherits(ToolbarBase, _Ion);

                function ToolbarBase(elementRef, config) {
                    _classCallCheck(this, ToolbarBase);

                    _get(Object.getPrototypeOf(ToolbarBase.prototype), "constructor", this).call(this, elementRef, config);
                    this.itemRefs = [];
                    this.titleRef = null;
                }

                /**
                 * TODO
                 */

                _createClass(ToolbarBase, [{
                    key: "setTitleCmp",
                    value: function setTitleCmp(titleCmp) {
                        this.titleCmp = titleCmp;
                    }
                }, {
                    key: "getTitleText",
                    value: function getTitleText() {
                        return this.titleCmp && this.titleCmp.getTitleText() || '';
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: "getTitleRef",
                    value: function getTitleRef() {
                        return this.titleCmp && this.titleCmp.elementRef;
                    }

                    /**
                     * A toolbar items include the left and right side `ion-nav-items`,
                     * and every `menu-toggle`. It does not include the `ion-title`.
                     * @returns {TODO} Array of this toolbar's item ElementRefs.
                     */
                }, {
                    key: "getItemRefs",
                    value: function getItemRefs() {
                        return this.itemRefs;
                    }
                }, {
                    key: "addItemRef",
                    value: function addItemRef(itemElementRef) {
                        this.itemRefs.push(itemElementRef);
                    }
                }]);

                return ToolbarBase;
            })(Ion);

            _export("ToolbarBase", ToolbarBase);

            Toolbar = (function (_ToolbarBase) {
                _inherits(Toolbar, _ToolbarBase);

                function Toolbar(elementRef, config) {
                    _classCallCheck(this, Toolbar);

                    _get(Object.getPrototypeOf(Toolbar.prototype), "constructor", this).call(this, elementRef, config);
                }

                return Toolbar;
            })(ToolbarBase);

            _export("Toolbar", Toolbar);

            _export("Toolbar", Toolbar = __decorate([Component({
                selector: 'ion-toolbar',
                host: {
                    'class': 'toolbar'
                }
            }), IonicView({
                template: '<div class="toolbar-inner">' + '<ng-content select="[menu-toggle]"></ng-content>' + '<ng-content select="ion-title"></ng-content>' + '<ng-content select="ion-nav-items[primary]"></ng-content>' + '<ng-content select="ion-nav-items[secondary]"></ng-content>' + '</div>' + '<div class="toolbar-background"></div>'
            }), __metadata('design:paramtypes', [typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a || Object, typeof (_b = typeof IonicConfig !== 'undefined' && IonicConfig) === 'function' && _b || Object])], Toolbar));

            ToolbarTitle = (function (_Ion2) {
                _inherits(ToolbarTitle, _Ion2);

                function ToolbarTitle(elementRef, toolbar, navbar) {
                    _classCallCheck(this, ToolbarTitle);

                    _get(Object.getPrototypeOf(ToolbarTitle.prototype), "constructor", this).call(this, elementRef, null);
                    toolbar && toolbar.setTitleCmp(this);
                    navbar && navbar.setTitleCmp(this);
                }

                _createClass(ToolbarTitle, [{
                    key: "getTitleText",
                    value: function getTitleText() {
                        return this.getNativeElement().textContent;
                    }
                }]);

                return ToolbarTitle;
            })(Ion);

            _export("ToolbarTitle", ToolbarTitle);

            _export("ToolbarTitle", ToolbarTitle = __decorate([Component({
                selector: 'ion-title'
            }), View({
                template: '<div class="toolbar-title">' + '<ng-content></ng-content>' + '</div>'
            }), __param(1, Optional()), __param(2, Optional()), __param(2, Inject(forwardRef(function () {
                return Navbar;
            }))), __metadata('design:paramtypes', [typeof (_c = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _c || Object, Toolbar, typeof (_d = typeof Navbar !== 'undefined' && Navbar) === 'function' && _d || Object])], ToolbarTitle));

            ToolbarItem = (function (_Ion3) {
                _inherits(ToolbarItem, _Ion3);

                function ToolbarItem(elementRef, toolbar, navbar) {
                    _classCallCheck(this, ToolbarItem);

                    _get(Object.getPrototypeOf(ToolbarItem.prototype), "constructor", this).call(this, elementRef, null);
                    toolbar && toolbar.addItemRef(elementRef);
                    navbar && navbar.addItemRef(elementRef);
                }

                return ToolbarItem;
            })(Ion);

            _export("ToolbarItem", ToolbarItem);

            _export("ToolbarItem", ToolbarItem = __decorate([Directive({
                selector: 'ion-nav-items,[menu-toggle]'
            }), __param(1, Optional()), __param(2, Optional()), __param(2, Inject(forwardRef(function () {
                return Navbar;
            }))), __metadata('design:paramtypes', [typeof (_e = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _e || Object, Toolbar, typeof (_f = typeof Navbar !== 'undefined' && Navbar) === 'function' && _f || Object])], ToolbarItem));
        }
    };
});