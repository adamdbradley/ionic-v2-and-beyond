System.register("ionic/components/list/list", ["angular2/angular2", "../ion", "../../config/config", "./virtual", "ionic/util"], function (_export) {
    /**
     * The List is a widely used interface element in almost any mobile app, and can include
     * content ranging from basic text all the way to buttons, toggles, icons, and thumbnails.
     *
     * Both the list, which contains items, and the list items themselves can be any HTML
     * element.
     *
     * Using the List and Item components make it easy to support various
     * interaction modes such as swipe to edit, drag to reorder, and removing items.
     *
     */
    "use strict";

    var Directive, ElementRef, Renderer, Ion, Config, ListVirtualScroll, util, __decorate, __metadata, List, ListHeader, _a, _b, _c;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_angular2Angular2) {
            Directive = _angular2Angular2.Directive;
            ElementRef = _angular2Angular2.ElementRef;
            Renderer = _angular2Angular2.Renderer;
        }, function (_ion) {
            Ion = _ion.Ion;
        }, function (_configConfig) {
            Config = _configConfig.Config;
        }, function (_virtual) {
            ListVirtualScroll = _virtual.ListVirtualScroll;
        }, function (_ionicUtil) {
            util = _ionicUtil;
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
                            return d && d(target, key), void 0;
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

            List = (function (_Ion) {
                _inherits(List, _Ion);

                /**
                 * TODO
                 * @param {ElementRef} elementRef  TODO
                 * @param {Config} config  TODO
                 */

                function List(elementRef, config, renderer) {
                    _classCallCheck(this, List);

                    _get(Object.getPrototypeOf(List.prototype), "constructor", this).call(this, elementRef, config);
                    renderer.setElementClass(elementRef, 'list', true);
                    this.ele = elementRef.nativeElement;
                }

                /**
                 * TODO
                 */

                _createClass(List, [{
                    key: "onInit",
                    value: function onInit() {
                        _get(Object.getPrototypeOf(List.prototype), "onInit", this).call(this);
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
                }, {
                    key: "_initVirtualScrolling",
                    value: function _initVirtualScrolling() {
                        if (!this.content) {
                            return;
                        }
                        this._virtualScrollingManager = new ListVirtualScroll(this);
                    }

                    /**
                     * TODO
                     * @param {TODO} item  TODO
                     */
                }, {
                    key: "setItemTemplate",
                    value: function setItemTemplate(item) {
                        this.itemTemplate = item;
                    }

                    /**
                     * Keeps track of any open item (a sliding item, for example), to close it later
                     */
                }, {
                    key: "setOpenItem",
                    value: function setOpenItem(item) {
                        this.openItem = item;
                    }
                }, {
                    key: "closeOpenItem",
                    value: function closeOpenItem() {
                        if (this.openItem) {
                            this.openItem.close(true);
                            this.openItem = null;
                        }
                    }
                }, {
                    key: "getOpenItem",
                    value: function getOpenItem() {
                        return this.openItem;
                    }
                }]);

                return List;
            })(Ion);

            _export("List", List);

            _export("List", List = __decorate([Directive({
                selector: 'ion-list',
                inputs: ['items', 'virtual', 'content']
            }), __metadata('design:paramtypes', [typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a || Object, typeof (_b = typeof Config !== 'undefined' && Config) === 'function' && _b || Object, typeof (_c = typeof Renderer !== 'undefined' && Renderer) === 'function' && _c || Object])], List));
            /**
             * TODO
             */

            ListHeader = function ListHeader() {
                _classCallCheck(this, ListHeader);
            };

            _export("ListHeader", ListHeader);

            _export("ListHeader", ListHeader = __decorate([Directive({
                selector: 'ion-header',
                inputs: ['id'],
                host: {
                    '[attr.id]': 'id'
                }
            }), __metadata('design:paramtypes', [])], ListHeader));
        }
    };
});