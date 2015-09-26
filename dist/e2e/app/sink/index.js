System.register("e2e/app/sink/index", ["ionic/ionic", "./pages/button", "./pages/nav", "./pages/pull-to-refresh", "./pages/list", "./pages/list-group", "./pages/card", "./pages/form", "./pages/segment", "./pages/search-bar", "./pages/table-search", "./pages/ionicons", "./pages/tabs", "./pages/aside", "./pages/animation", "./pages/slides", "./pages/action-menu", "./pages/modal"], function (_export) {
    "use strict";

    var App, IonicApp, ButtonPage, NavPage, PullToRefreshPage, ListPage, ListGroupPage, CardPage, FormPage, SegmentPage, SearchBarPage, TableSearchPage, IconsPage, TabsPage, AsidePage, AnimationPage, SlidePage, ActionMenuPage, ModalPage, __decorate, __metadata, MyApp;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            App = _ionicIonic.App;
            IonicApp = _ionicIonic.IonicApp;
        }, function (_pagesButton) {
            ButtonPage = _pagesButton.ButtonPage;
        }, function (_pagesNav) {
            NavPage = _pagesNav.NavPage;
        }, function (_pagesPullToRefresh) {
            PullToRefreshPage = _pagesPullToRefresh.PullToRefreshPage;
        }, function (_pagesList) {
            ListPage = _pagesList.ListPage;
        }, function (_pagesListGroup) {
            ListGroupPage = _pagesListGroup.ListGroupPage;
        }, function (_pagesCard) {
            CardPage = _pagesCard.CardPage;
        }, function (_pagesForm) {
            FormPage = _pagesForm.FormPage;
        }, function (_pagesSegment) {
            SegmentPage = _pagesSegment.SegmentPage;
        }, function (_pagesSearchBar) {
            SearchBarPage = _pagesSearchBar.SearchBarPage;
        }, function (_pagesTableSearch) {
            TableSearchPage = _pagesTableSearch.TableSearchPage;
        }, function (_pagesIonicons) {
            IconsPage = _pagesIonicons.IconsPage;
        }, function (_pagesTabs) {
            TabsPage = _pagesTabs.TabsPage;
        }, function (_pagesAside) {
            AsidePage = _pagesAside.AsidePage;
        }, function (_pagesAnimation) {
            AnimationPage = _pagesAnimation.AnimationPage;
        }, function (_pagesSlides) {
            SlidePage = _pagesSlides.SlidePage;
        }, function (_pagesActionMenu) {
            ActionMenuPage = _pagesActionMenu.ActionMenuPage;
        }, function (_pagesModal) {
            ModalPage = _pagesModal.ModalPage;
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

            MyApp = (function () {
                function MyApp(app) {
                    _classCallCheck(this, MyApp);

                    this.app = app;
                    this.components = [{ title: 'Navigation', component: NavPage }, { title: 'Tabs', component: TabsPage }, { title: 'Buttons', component: ButtonPage }, { title: 'Lists', component: ListPage }, { title: 'List Groups', component: ListGroupPage }, { title: 'Modal', component: ModalPage }, { title: 'Pull to Refresh', component: PullToRefreshPage }, { title: 'Cards', component: CardPage }, { title: 'Forms', component: FormPage }, { title: 'Segments', component: SegmentPage }, { title: 'Search Bar', component: SearchBarPage }, { title: 'Table Search', component: TableSearchPage }, { title: 'Icons', component: IconsPage }, { title: 'Aside', component: AsidePage }, { title: 'Animation', component: AnimationPage }, { title: 'Slides', component: SlidePage }, { title: 'Action Menu', component: ActionMenuPage }];
                }

                _createClass(MyApp, [{
                    key: "openPage",
                    value: function openPage(aside, component) {
                        aside.close();
                        var nav = this.app.getComponent('myNav');
                        nav.setItems([component.component]);
                    }
                }]);

                return MyApp;
            })();

            MyApp = __decorate([App({
                templateUrl: 'main.html',
                routes: [{
                    path: '/nav',
                    component: NavPage,
                    root: true
                }, {
                    path: '/buttons',
                    component: ButtonPage
                }, {
                    path: '/lists',
                    component: ListPage
                }, {
                    path: '/list-groups',
                    component: ListGroupPage
                }, {
                    path: '/modal',
                    component: ModalPage
                }, {
                    path: '/ptr',
                    component: PullToRefreshPage
                }, {
                    path: '/cards',
                    component: CardPage
                }, {
                    path: '/forms',
                    component: FormPage
                }, {
                    path: '/segments',
                    component: SegmentPage
                }, {
                    path: '/table-search',
                    component: TableSearchPage
                }, {
                    path: '/icons',
                    component: IconsPage
                }, {
                    path: '/aside',
                    component: AsidePage
                }, {
                    path: '/animation',
                    component: AnimationPage
                }, {
                    path: '/slides',
                    component: SlidePage
                }, {
                    path: '/action-menu',
                    component: ActionMenuPage
                }]
            }), __metadata('design:paramtypes', [typeof IonicApp !== 'undefined' && IonicApp || Object])], MyApp);
        }
    };
});