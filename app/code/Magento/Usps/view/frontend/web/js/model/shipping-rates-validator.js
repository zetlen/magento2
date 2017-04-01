/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'mageUtils',
    './shipping-rates-validation-rules',
    'mage/translate',
], function($, utils, validationRules, $t) {
    'use strict';

    let checkoutConfig = window.checkoutConfig;

    return {
        validationErrors: [],

        /**
         * @param {Object} address
         * @return {Boolean}
         */
        validate: function(address) {
            let rules = validationRules.getRules(),
                self = this;

            $.each(rules, function(field, rule) {
                let message;

                if (rule.required && utils.isEmpty(address[field])) {
                    message = $t('Field ') + field + $t(' is required.');
                    self.validationErrors.push(message);
                }
            });

            if (!this.validationErrors.length) {
                if (address['country_id'] == checkoutConfig.originCountryCode) { // eslint-disable-line eqeqeq
                    return !utils.isEmpty(address.postcode);
                }

                return true;
            }

            return false;
        },
    };
});
