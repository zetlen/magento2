/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'Magento_Checkout/js/model/shipping-save-processor/default',
], function(defaultProcessor) {
    'use strict';

    let processors = [];

    processors['default'] = defaultProcessor;

    return {
        /**
         * @param {String} type
         * @param {*} processor
         */
        registerProcessor: function(type, processor) {
            processors[type] = processor;
        },

        /**
         * @param {String} type
         * @return {Array}
         */
        saveShippingInformation: function(type) {
            let rates = [];

            if (processors[type]) {
                rates = processors[type].saveShippingInformation();
            } else {
                rates = processors['default'].saveShippingInformation();
            }

            return rates;
        },
    };
});
