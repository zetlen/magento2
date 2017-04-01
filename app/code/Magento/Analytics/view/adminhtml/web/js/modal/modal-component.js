/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'jquery',
    'Magento_Ui/js/modal/modal-component',
    'Magento_Ui/js/modal/alert',
    'mage/translate',
], function($, Modal, alert, $t) {
    'use strict';

    return Modal.extend({
        defaults: {
            postponeOptions: {},
            imports: {
                postponeUrl: '${ $.provider }:postpone_url',
            },
            modules: {
                form: '${ $.parentName }',
            },
        },

        /**
         * Send request to postpone modal appearance for a certain time.
         *
         * @param {Object} options - additional request options.
         */
        sendPostponeRequest: function(options) {
            let self = this,
                data = $.extend(this.form().source.data, options);

            $.ajax({
                type: 'POST',
                url: this.postponeUrl,
                data: data,
                showLoader: true,
            }).done(function(xhr) {
                if (xhr.error) {
                    self.onError(xhr);
                }
            }).fail(this.onError);
        },

        /**
         * Error handler.
         *
         * @param {Object} xhr - request result.
         */
        onError: function(xhr) {
            if (xhr.statusText === 'abort') {
                return;
            }

            alert({
                content: xhr.message || $t('An error occurred while subscription process.'),
            });
        },

        /** @inheritdoc */
        actionCancel: function() {
            this.sendPostponeRequest(this.postponeOptions);
            this.closeModal();
        },
    });
});
