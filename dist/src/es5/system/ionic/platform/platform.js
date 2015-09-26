System.register('ionic/platform/platform', ['../util/util', '../util/dom'], function (_export) {
    /**
     * TODO
     */
    'use strict';

    var util, dom, IonicPlatform, PlatformNode, platformRegistry, platformDefault;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function insertSuperset(platformNode) {
        var supersetPlaformName = platformNode.superset();
        if (supersetPlaformName) {
            // add a platform in between two exist platforms
            // so we can build the correct hierarchy of active platforms
            var supersetPlatform = new PlatformNode(supersetPlaformName);
            supersetPlatform.parent(platformNode.parent());
            supersetPlatform.child(platformNode);
            if (supersetPlatform.parent()) {
                supersetPlatform.parent().child(supersetPlatform);
            }
            platformNode.parent(supersetPlatform);
        }
    }
    return {
        setters: [function (_utilUtil) {
            util = _utilUtil;
        }, function (_utilDom) {
            dom = _utilDom;
        }],
        execute: function () {
            IonicPlatform = (function () {
                function IonicPlatform() {
                    var _this = this;

                    _classCallCheck(this, IonicPlatform);

                    this._settings = {};
                    this._platforms = [];
                    this._versions = {};
                    this._onResizes = [];
                    this._readyPromise = new Promise(function (res) {
                        _this._readyResolve = res;
                    });
                }

                // Methods
                // **********************************************
                /**
                 * TODO
                 * @param {TODO} platformName  TODO
                 * @returns {TODO} TODO
                 */

                _createClass(IonicPlatform, [{
                    key: 'is',
                    value: function is(platformName) {
                        return this._platforms.indexOf(platformName) > -1;
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'platforms',
                    value: function platforms() {
                        // get the array of active platforms, which also knows the hierarchy,
                        // with the last one the most important
                        return this._platforms;
                    }

                    /**
                     * TODO
                     * @param {TODO} platformName  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'versions',
                    value: function versions(platformName) {
                        if (arguments.length) {
                            // get a specific platform's version
                            return this._versions[platformName];
                        }
                        // get all the platforms that have a valid parsed version
                        return this._versions;
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'ready',
                    value: function ready() {
                        return this._readyPromise;
                    }

                    /**
                     * @private
                     * TODO
                     * @param {TODO} config  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'prepareReady',
                    value: function prepareReady(config) {
                        var self = this;
                        function resolve() {
                            self._readyResolve(config);
                        }
                        if (this._engineReady) {
                            // the engine provide a ready promise, use this instead
                            this._engineReady(resolve);
                        } else {
                            // there is no custom ready method from the engine
                            // use the default dom ready
                            dom.ready(resolve);
                        }
                    }

                    // Methods meant to be overridden by the engine
                    // **********************************************
                    // Provided NOOP methods so they do not error when
                    // called by engines (the browser) doesn't provide them
                }, {
                    key: 'on',
                    value: function on() {}
                }, {
                    key: 'onHardwareBackButton',
                    value: function onHardwareBackButton() {}
                }, {
                    key: 'registerBackButtonAction',
                    value: function registerBackButtonAction() {}
                }, {
                    key: 'exitApp',
                    value: function exitApp() {}
                }, {
                    key: 'fullScreen',
                    value: function fullScreen() {}
                }, {
                    key: 'showStatusBar',
                    value: function showStatusBar() {}

                    // Getter/Setter Methods
                    // **********************************************
                }, {
                    key: 'url',
                    value: function url(val) {
                        if (arguments.length) {
                            this._url = val;
                            this._qs = util.getQuerystring(val);
                        }
                        return this._url;
                    }
                }, {
                    key: 'query',
                    value: function query(key) {
                        return (this._qs || {})[key];
                    }
                }, {
                    key: 'userAgent',
                    value: function userAgent(val) {
                        if (arguments.length) {
                            this._ua = val;
                        }
                        return this._ua;
                    }
                }, {
                    key: 'navigatorPlatform',
                    value: function navigatorPlatform(val) {
                        if (arguments.length) {
                            this._bPlt = val;
                        }
                        return this._bPlt || '';
                    }
                }, {
                    key: 'width',
                    value: function width() {
                        return dom.windowDimensions().width;
                    }
                }, {
                    key: 'height',
                    value: function height() {
                        return dom.windowDimensions().height;
                    }
                }, {
                    key: 'isPortrait',
                    value: function isPortrait() {
                        return this.width() < this.height();
                    }
                }, {
                    key: 'isLandscape',
                    value: function isLandscape() {
                        return !this.isPortrait();
                    }
                }, {
                    key: 'isKeyboardOpen',
                    value: function isKeyboardOpen() {
                        return dom.hasFocusedTextInput();
                    }
                }, {
                    key: 'onKeyboardClose',
                    value: function onKeyboardClose(callback) {
                        var self = this;
                        var promise = null;
                        if (!callback) {
                            // a callback wasn't provided, so let's return a promise instead
                            promise = new Promise(function (resolve) {
                                callback = resolve;
                            });
                        }
                        function checkKeyboard() {
                            if (!self.isKeyboardOpen()) {
                                callback();
                            } else {
                                setTimeout(checkKeyboard, 500);
                            }
                        }
                        setTimeout(checkKeyboard, 100);
                        return promise;
                    }
                }, {
                    key: 'windowResize',
                    value: function windowResize() {
                        var self = this;
                        clearTimeout(self._resizeTimer);
                        self._resizeTimer = setTimeout(function () {
                            dom.flushDimensionCache();
                            for (var i = 0; i < self._onResizes.length; i++) {
                                try {
                                    self._onResizes[i]();
                                } catch (e) {
                                    console.error(e);
                                }
                            }
                        }, 500);
                    }
                }, {
                    key: 'onResize',
                    value: function onResize(cb) {
                        // TODO: Make more good
                        this._onResizes.push(cb);
                    }

                    // Platform Registry
                    // **********************************************
                    /**
                     * TODO
                     * @param {TODO} platformConfig  TODO
                     */
                }, {
                    key: 'testQuery',

                    /**
                     * TODO
                     * @param {TODO} queryValue  TODO
                     * @returns {boolean} TODO
                     */
                    value: function testQuery(queryValue) {
                        var val = this.query('ionicplatform');
                        if (val) {
                            var valueSplit = val.toLowerCase().split(';');
                            for (var i = 0; i < valueSplit.length; i++) {
                                if (valueSplit[i] == queryValue) {
                                    return true;
                                }
                            }
                        }
                        return false;
                    }

                    /**
                     * TODO
                     * @param {TODO} userAgentExpression  TODO
                     * @returns {boolean} TODO
                     */
                }, {
                    key: 'testUserAgent',
                    value: function testUserAgent(userAgentExpression) {
                        var rgx = new RegExp(userAgentExpression, 'i');
                        return rgx.test(this._ua);
                    }

                    /**
                     * TODO
                     * @param {TODO} userAgentExpression  TODO
                     * @returns {Object} TODO
                     */
                }, {
                    key: 'matchUserAgentVersion',
                    value: function matchUserAgentVersion(userAgentExpression) {
                        var val = this._ua.match(userAgentExpression);
                        if (val) {
                            return {
                                major: val[1],
                                minor: val[2]
                            };
                        }
                    }

                    /**
                     * TODO
                     * @param {TODO} queryValue  TODO
                     * @param {TODO} userAgentExpression  TODO
                     * @returns {boolean} TODO
                     */
                }, {
                    key: 'isPlatform',
                    value: function isPlatform(queryValue, userAgentExpression) {
                        if (!userAgentExpression) {
                            userAgentExpression = queryValue;
                        }
                        return this.testQuery(queryValue) || this.testUserAgent(userAgentExpression);
                    }

                    /**
                     * TODO
                     * @param {TODO} config  TODO
                     */
                }, {
                    key: 'load',
                    value: function load(config) {
                        var rootPlatformNode = null;
                        var engineNode = null;
                        var self = this;
                        this.platformOverride = config.setting('platform');
                        // figure out the most specific platform and active engine
                        var tmpPlatform = null;
                        for (var platformName in platformRegistry) {
                            tmpPlatform = this.matchPlatform(platformName);
                            if (tmpPlatform) {
                                // we found a platform match!
                                // check if its more specific than the one we already have
                                if (tmpPlatform.isEngine) {
                                    // because it matched then this should be the active engine
                                    // you cannot have more than one active engine
                                    engineNode = tmpPlatform;
                                } else if (!rootPlatformNode || tmpPlatform.depth > rootPlatformNode.depth) {
                                    // only find the root node for platforms that are not engines
                                    // set this node as the root since we either don't already
                                    // have one, or this one is more specific that the current one
                                    rootPlatformNode = tmpPlatform;
                                }
                            }
                        }
                        if (!rootPlatformNode) {
                            rootPlatformNode = new PlatformNode(platformDefault);
                        }
                        // build a Platform instance filled with the
                        // hierarchy of active platforms and settings
                        if (rootPlatformNode) {
                            // check if we found an engine node (cordova/node-webkit/etc)
                            if (engineNode) {
                                // add the engine to the first in the platform hierarchy
                                // the original rootPlatformNode now becomes a child
                                // of the engineNode, which is not the new root
                                engineNode.child(rootPlatformNode);
                                rootPlatformNode.parent(engineNode);
                                rootPlatformNode = engineNode;
                                // add any events which the engine would provide
                                // for example, Cordova provides its own ready event
                                var engineMethods = engineNode.methods();
                                engineMethods._engineReady = engineMethods.ready;
                                delete engineMethods.ready;
                                util.extend(this, engineMethods);
                            }
                            var platformNode = rootPlatformNode;
                            while (platformNode) {
                                insertSuperset(platformNode);
                                platformNode = platformNode.child();
                            }
                            // make sure the root noot is actually the root
                            // incase a node was inserted before the root
                            platformNode = rootPlatformNode.parent();
                            while (platformNode) {
                                rootPlatformNode = platformNode;
                                platformNode = platformNode.parent();
                            }
                            platformNode = rootPlatformNode;
                            while (platformNode) {
                                // set the array of active platforms with
                                // the last one in the array the most important
                                this._platforms.push(platformNode.name());
                                // copy default platform settings into this platform settings obj
                                this._settings[platformNode.name()] = util.extend({}, platformNode.settings());
                                // get the platforms version if a version parser was provided
                                this._versions[platformNode.name()] = platformNode.version(this);
                                // go to the next platform child
                                platformNode = platformNode.child();
                            }
                        }
                    }

                    /**
                     * TODO
                     * @param {TODO} platformName  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'matchPlatform',
                    value: function matchPlatform(platformName) {
                        // build a PlatformNode and assign config data to it
                        // use it's getRoot method to build up its hierarchy
                        // depending on which platforms match
                        var platformNode = new PlatformNode(platformName);
                        var rootNode = platformNode.getRoot(this, 0);
                        if (rootNode) {
                            rootNode.depth = 0;
                            var childPlatform = rootNode.child();
                            while (childPlatform) {
                                rootNode.depth++;
                                childPlatform = childPlatform.child();
                            }
                        }
                        return rootNode;
                    }
                }, {
                    key: 'settings',
                    value: function settings(val) {
                        if (arguments.length) {
                            this._settings = val;
                        }
                        return this._settings;
                    }
                }], [{
                    key: 'register',
                    value: function register(platformConfig) {
                        platformRegistry[platformConfig.name] = platformConfig;
                    }
                }, {
                    key: 'registry',
                    value: function registry() {
                        return platformRegistry;
                    }

                    /**
                     * TODO
                     * @param {TODO} platformName  TODO
                     * @returns {string} TODO
                     */
                }, {
                    key: 'get',
                    value: function get(platformName) {
                        return platformRegistry[platformName] || {};
                    }
                }, {
                    key: 'setDefault',
                    value: function setDefault(platformName) {
                        platformDefault = platformName;
                    }
                }]);

                return IonicPlatform;
            })();

            _export('IonicPlatform', IonicPlatform);

            PlatformNode = (function () {
                function PlatformNode(platformName) {
                    _classCallCheck(this, PlatformNode);

                    this.c = IonicPlatform.get(platformName);
                    this.isEngine = this.c.isEngine;
                }

                _createClass(PlatformNode, [{
                    key: 'name',
                    value: function name() {
                        return this.c.name;
                    }
                }, {
                    key: 'settings',
                    value: function settings() {
                        return this.c.settings || {};
                    }
                }, {
                    key: 'superset',
                    value: function superset() {
                        return this.c.superset;
                    }
                }, {
                    key: 'methods',
                    value: function methods() {
                        return this.c.methods || {};
                    }
                }, {
                    key: 'parent',
                    value: function parent(val) {
                        if (arguments.length) {
                            this._parent = val;
                        }
                        return this._parent;
                    }
                }, {
                    key: 'child',
                    value: function child(val) {
                        if (arguments.length) {
                            this._child = val;
                        }
                        return this._child;
                    }
                }, {
                    key: 'isMatch',
                    value: function isMatch(p) {
                        if (typeof this.c.isMatched !== 'boolean') {
                            if (p.platformOverride && !this.isEngine) {
                                this.c.isMatched = p.platformOverride === this.c.name;
                            } else if (!this.c.isMatch) {
                                this.c.isMatched = false;
                            } else {
                                this.c.isMatched = this.c.isMatch(p);
                            }
                        }
                        return this.c.isMatched;
                    }
                }, {
                    key: 'version',
                    value: function version(p) {
                        if (this.c.versionParser) {
                            var v = this.c.versionParser(p);
                            if (v) {
                                var str = v.major + '.' + v.minor;
                                return {
                                    str: str,
                                    num: parseFloat(str),
                                    major: parseInt(v.major, 10),
                                    minor: parseInt(v.minor, 10)
                                };
                            }
                        }
                    }
                }, {
                    key: 'getRoot',
                    value: function getRoot(p) {
                        if (this.isMatch(p)) {
                            var parents = this.getSubsetParents(this.name());
                            if (!parents.length) {
                                return this;
                            }
                            var platform = null;
                            var rootPlatform = null;
                            for (var i = 0; i < parents.length; i++) {
                                platform = new PlatformNode(parents[i]);
                                platform.child(this);
                                rootPlatform = platform.getRoot(p);
                                if (rootPlatform) {
                                    this.parent(platform);
                                    return rootPlatform;
                                }
                            }
                        }
                        return null;
                    }
                }, {
                    key: 'getSubsetParents',
                    value: function getSubsetParents(subsetPlatformName) {
                        var platformRegistry = IonicPlatform.registry();
                        var parentPlatformNames = [];
                        var platform = null;
                        for (var platformName in platformRegistry) {
                            platform = platformRegistry[platformName];
                            if (platform.subsets && platform.subsets.indexOf(subsetPlatformName) > -1) {
                                parentPlatformNames.push(platformName);
                            }
                        }
                        return parentPlatformNames;
                    }
                }]);

                return PlatformNode;
            })();

            platformRegistry = {};
            platformDefault = null;
        }
    };
});