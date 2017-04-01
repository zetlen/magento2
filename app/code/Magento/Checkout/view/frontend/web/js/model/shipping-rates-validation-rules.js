/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define(['jquery'], function($) {
    'use strict';

    let ratesRules = {},
        checkoutConfig = window.checkoutConfig;

    return {
        /**
         * @param {String} carrier
         * @param {Object} rules
         */
        registerRules: function(carrier, rules) {
            if (checkoutConfig.activeCarriers.indexOf(carrier) !== -1) {
                ratesRules[carrier] = rules.getRules();
            }
        },

        /**
         * @return {Object}
         */
        getRules: function() {
            return ratesRules;
        },

        /**
         * @return {Array}
         */
        getObservableFields: function() {
            let self = this,
                observableFields = [];

            $.each(self.getRules(), function(carrier, fields) {
                $.each(fields, function(field) {
                    if (observableFields.indexOf(field) === -1) {
                        observableFields.push(field);
                    }
                });
            });

            return observableFields;
        },
    };
});
