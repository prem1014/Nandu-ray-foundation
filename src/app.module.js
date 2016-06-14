(function() {
    'use strict';

    angular.module('nrf.app', [
        // Common (everybody has access to these)
        'app.core',

        // Features (listed alphabetically)
        'nrf.app.login',
        'nrf.app.signUp',
        'nrf.app.donate',
        'nrf.app.home'
    ]);
})();
