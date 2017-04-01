/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'mage/validation',
], function($) {
    'use strict';

    let checkoutConfig = window.checkoutConfig,
        agreementsConfig = checkoutConfig ? checkoutConfig.checkoutAgreements : {},
        agreementsInputPath = '.payment-method._active div.checkout-agreements input';

    return {
        /**
         * Validate checkout agreements
         *
         * @returns {Boolean}
         */
        validate: function() {
            if (!agreementsConfig.isEnabled || $(agreementsInputPath).length === 0) {
                return true;
            }

            return $.validator.validateSingleElement(agreementsInputPath, {
                errorElement: 'div',
            });
        },
    };
});
