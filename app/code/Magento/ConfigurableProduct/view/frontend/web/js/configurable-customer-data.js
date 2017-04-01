require([
    'jquery',
    'Magento_ConfigurableProduct/js/options-updater',
], function($, Updater) {
    'use strict';

    let selectors = {
            formSelector: '#product_addtocart_form',
        },
        configurableWidgetName = 'mageConfigurable',
        widgetInitEvent = 'configurable.initialized',

    /**
    * Sets all configurable attribute's selected values
    */
    updateConfigurableOptions = function() {
        let configurableWidget = $(selectors.formSelector).data(configurableWidgetName);

        if (!configurableWidget) {
            return;
        }
        configurableWidget.options.values = this.productOptions || {};
        configurableWidget._configureForValues();
    },
    updater = new Updater(widgetInitEvent, updateConfigurableOptions);

    updater.listen();
});
