/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
/* jshint browser:true jquery:true*/
define([
    'jquery',
    'jquery/ui',
    'validation',
], function($) {
    'use strict';

    $.widget('mage.addressValidation', {
        options: {
            selectors: {
                button: '[data-action=save-address]',
            },
        },

        /**
         * Validation creation
         * @protected
         */
        _create: function() {
            let button = $(this.options.selectors.button, this.element);

            this.element.validation({

                /**
                 * Submit Handler
                 * @param {Element} form - address form
                 */
                submitHandler: function(form) {
                    button.attr('disabled', true);
                    form.submit();
                },
            });
        },
    });

    return $.mage.addressValidation;
});
