/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define(['ko'], function(ko) {
    'use strict';

    let isInAction = ko.observable(false);

    return {
        isInAction: isInAction,

        /**
         * @param {jQuery.Event} event
         */
        stopEventPropagation: function(event) {
            event.stopImmediatePropagation();
            event.preventDefault();
        },
    };
});
