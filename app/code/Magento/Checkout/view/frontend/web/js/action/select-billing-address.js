/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    '../model/quote',
], function($, quote) {
    'use strict';

    return function(billingAddress) {
        let address = null;

        if (quote.shippingAddress() && billingAddress.getCacheKey() == // eslint-disable-line eqeqeq
            quote.shippingAddress().getCacheKey()
        ) {
            address = $.extend({}, billingAddress);
            address.saveInAddressBook = null;
        } else {
            address = billingAddress;
        }
        quote.billingAddress(address);
    };
});
