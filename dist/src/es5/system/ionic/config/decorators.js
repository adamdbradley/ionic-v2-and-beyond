System.register('ionic/config/decorators', ['angular2/angular2', 'ionic/util', '../components/app/app', '../ionic'], function (_export) {
    /**
     * The core Ionic directives.  Automatically available in every IonicView
     * template.
     */
    'use strict';

    var CORE_DIRECTIVES, FORM_DIRECTIVES, NgStyle, Component, Directive, View, forwardRef, util, ionicBootstrap, Menu, MenuToggle, Button, Content, Scroll, Refresher, Slides, Slide, SlideLazy, Tabs, Tab, Card, List, ListHeader, Item, ItemGroup, ItemGroupTitle, Toolbar, ToolbarTitle, ToolbarItem, Icon, Checkbox, Switch, TextInput, TextInputElement, Label, Segment, SegmentButton, SegmentControlValueAccessor, RadioGroup, RadioButton, Nav, NavbarTemplate, Navbar, NavPush, NavPop, NavRouter, IdRef, ShowWhen, HideWhen, IONIC_DIRECTIVES, IonicViewImpl;

    var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    /**
     * TODO
     */

    _export('IonicView', IonicView);

    /**
     * TODO
     */

    _export('IonicDirective', IonicDirective);

    _export('IonicComponent', IonicComponent);

    _export('App', App);

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    /**
     * TODO
     */

    function IonicView(args) {
        return function (cls) {
            var annotations = Reflect.getMetadata('annotations', cls) || [];
            annotations.push(new IonicViewImpl(args));
            Reflect.defineMetadata('annotations', annotations, cls);
            return cls;
        };
    }

    function IonicDirective(config) {
        return function (cls) {
            var annotations = Reflect.getMetadata('annotations', cls) || [];
            annotations.push(new Directive(appendConfig(cls, config)));
            Reflect.defineMetadata('annotations', annotations, cls);
            return cls;
        };
    }

    function IonicComponent(config) {
        return function (cls) {
            var annotations = Reflect.getMetadata('annotations', cls) || [];
            annotations.push(new Component(appendConfig(cls, config)));
            Reflect.defineMetadata('annotations', annotations, cls);
            return cls;
        };
    }

    function appendConfig(cls, config) {
        config.host = config.host || {};
        cls.defaultProperties = config.defaultProperties || {};
        config.properties = config.properties || [];
        for (var prop in cls.defaultProperties) {
            // add the property to the component "properties"
            config.properties.push(prop);
            // set the component "hostProperties", so the instance's
            // property value will be used to set the element's attribute
            config.host['[attr.' + util.pascalCaseToDashCase(prop) + ']'] = prop;
        }
        cls.delegates = config.delegates;
        var componentId = config.classId || config.selector && config.selector.replace('ion-', '');
        config.host['class'] = ((config.host['class'] || '') + ' ' + componentId).trim();
        return config;
    }
    /**
     * TODO
     */

    function App() {
        var args = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return function (cls) {
            // get current annotations
            var annotations = Reflect.getMetadata('annotations', cls) || [];
            // create @Component
            args.selector = args.selector || 'ion-app';
            annotations.push(new Component(args));
            // create @View
            // if no template was provided, default so it has a root ion-nav
            if (!args.templateUrl && !args.template) {
                args.template = '<ion-nav></ion-nav>';
            }
            annotations.push(new IonicViewImpl(args));
            // redefine with added annotations
            Reflect.defineMetadata('annotations', annotations, cls);
            ionicBootstrap(cls, args.views, args.config);
            return cls;
        };
    }

    return {
        setters: [function (_angular2Angular2) {
            CORE_DIRECTIVES = _angular2Angular2.CORE_DIRECTIVES;
            FORM_DIRECTIVES = _angular2Angular2.FORM_DIRECTIVES;
            NgStyle = _angular2Angular2.NgStyle;
            Component = _angular2Angular2.Component;
            Directive = _angular2Angular2.Directive;
            View = _angular2Angular2.View;
            forwardRef = _angular2Angular2.forwardRef;
        }, function (_ionicUtil) {
            util = _ionicUtil;
        }, function (_componentsAppApp) {
            ionicBootstrap = _componentsAppApp.ionicBootstrap;
        }, function (_ionic) {
            Menu = _ionic.Menu;
            MenuToggle = _ionic.MenuToggle;
            Button = _ionic.Button;
            Content = _ionic.Content;
            Scroll = _ionic.Scroll;
            Refresher = _ionic.Refresher;
            Slides = _ionic.Slides;
            Slide = _ionic.Slide;
            SlideLazy = _ionic.SlideLazy;
            Tabs = _ionic.Tabs;
            Tab = _ionic.Tab;
            Card = _ionic.Card;
            List = _ionic.List;
            ListHeader = _ionic.ListHeader;
            Item = _ionic.Item;
            ItemGroup = _ionic.ItemGroup;
            ItemGroupTitle = _ionic.ItemGroupTitle;
            Toolbar = _ionic.Toolbar;
            ToolbarTitle = _ionic.ToolbarTitle;
            ToolbarItem = _ionic.ToolbarItem;
            Icon = _ionic.Icon;
            Checkbox = _ionic.Checkbox;
            Switch = _ionic.Switch;
            TextInput = _ionic.TextInput;
            TextInputElement = _ionic.TextInputElement;
            Label = _ionic.Label;
            Segment = _ionic.Segment;
            SegmentButton = _ionic.SegmentButton;
            SegmentControlValueAccessor = _ionic.SegmentControlValueAccessor;
            RadioGroup = _ionic.RadioGroup;
            RadioButton = _ionic.RadioButton;
            Nav = _ionic.Nav;
            NavbarTemplate = _ionic.NavbarTemplate;
            Navbar = _ionic.Navbar;
            NavPush = _ionic.NavPush;
            NavPop = _ionic.NavPop;
            NavRouter = _ionic.NavRouter;
            IdRef = _ionic.IdRef;
            ShowWhen = _ionic.ShowWhen;
            HideWhen = _ionic.HideWhen;
        }],
        execute: function () {
            IONIC_DIRECTIVES = [
            // TODO: Why is forwardRef() required when they're already imported above????
            // Angular
            CORE_DIRECTIVES, FORM_DIRECTIVES, NgStyle,
            // Content
            forwardRef(function () {
                return Menu;
            }), forwardRef(function () {
                return MenuToggle;
            }), forwardRef(function () {
                return Button;
            }), forwardRef(function () {
                return Content;
            }), forwardRef(function () {
                return Scroll;
            }), forwardRef(function () {
                return Refresher;
            }),
            // Lists
            forwardRef(function () {
                return Card;
            }), forwardRef(function () {
                return List;
            }), forwardRef(function () {
                return ListHeader;
            }), forwardRef(function () {
                return Item;
            }), forwardRef(function () {
                return ItemGroup;
            }), forwardRef(function () {
                return ItemGroupTitle;
            }),
            // Slides
            forwardRef(function () {
                return Slides;
            }), forwardRef(function () {
                return Slide;
            }), forwardRef(function () {
                return SlideLazy;
            }),
            // Tabs
            forwardRef(function () {
                return Tabs;
            }), forwardRef(function () {
                return Tab;
            }),
            // Toolbar
            forwardRef(function () {
                return Toolbar;
            }), forwardRef(function () {
                return ToolbarTitle;
            }), forwardRef(function () {
                return ToolbarItem;
            }),
            // Media
            forwardRef(function () {
                return Icon;
            }),
            // Forms
            forwardRef(function () {
                return Segment;
            }), forwardRef(function () {
                return SegmentButton;
            }), forwardRef(function () {
                return SegmentControlValueAccessor;
            }), forwardRef(function () {
                return Checkbox;
            }), forwardRef(function () {
                return RadioGroup;
            }), forwardRef(function () {
                return RadioButton;
            }), forwardRef(function () {
                return Switch;
            }), forwardRef(function () {
                return TextInput;
            }), forwardRef(function () {
                return TextInputElement;
            }), forwardRef(function () {
                return Label;
            }),
            // Nav
            forwardRef(function () {
                return Nav;
            }), forwardRef(function () {
                return NavbarTemplate;
            }), forwardRef(function () {
                return Navbar;
            }), forwardRef(function () {
                return NavPush;
            }), forwardRef(function () {
                return NavPop;
            }), forwardRef(function () {
                return NavRouter;
            }), forwardRef(function () {
                return IdRef;
            }), forwardRef(function () {
                return ShowWhen;
            }), forwardRef(function () {
                return HideWhen;
            })];

            _export('IONIC_DIRECTIVES', IONIC_DIRECTIVES);

            IonicViewImpl = (function (_View) {
                _inherits(IonicViewImpl, _View);

                function IonicViewImpl() {
                    var args = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                    _classCallCheck(this, IonicViewImpl);

                    args.directives = (args.directives || []).concat(IONIC_DIRECTIVES);
                    _get(Object.getPrototypeOf(IonicViewImpl.prototype), 'constructor', this).call(this, args);
                }

                return IonicViewImpl;
            })(View);
        }
    };
});