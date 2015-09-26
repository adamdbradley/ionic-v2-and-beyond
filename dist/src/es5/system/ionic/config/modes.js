System.register('ionic/config/modes', ['./config'], function (_export) {
    // iOS Mode Settings
    'use strict';

    var IonicConfig;
    return {
        setters: [function (_config) {
            IonicConfig = _config.IonicConfig;
        }],
        execute: function () {
            IonicConfig.modeConfig('ios', {
                actionSheetEnter: 'action-sheet-slide-in',
                actionSheetLeave: 'action-sheet-slide-out',
                actionSheetCancelIcon: '',
                actionSheetDestructiveIcon: '',
                backButtonText: 'Back',
                backButtonIcon: 'ion-ios-arrow-back',
                iconMode: 'ios',
                tabBarPlacement: 'bottom',
                viewTransition: 'ios'
            });
            // Material Design Mode Settings
            IonicConfig.modeConfig('md', {
                actionSheetEnter: 'action-sheet-md-slide-in',
                actionSheetLeave: 'action-sheet-md-slide-out',
                actionSheetCancelIcon: 'ion-md-close',
                actionSheetDestructiveIcon: 'ion-md-trash',
                backButtonText: '',
                backButtonIcon: 'ion-md-arrow-back',
                iconMode: 'md',
                tabBarPlacement: 'top',
                viewTransition: 'md',
                type: 'overlay',
                mdRipple: true
            });
        }
    };
});