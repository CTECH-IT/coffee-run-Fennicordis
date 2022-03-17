(function (window) {
    'use strict';
    let App = window.App || {};
    let $ = window.jQuery;

    class Checklist {
        constructor(selector) {
            if (!selector) {
                throw new Error('No selector provided');
            }
            this.$element = $(selector);
            if (this.$element.length === 0) {
                throw new Error('Could not find the element with selector: ' + selector);
            }
        }
    }
    function Row(coffeeOrder) {
        let $div = $('<div></div>', {
            'data-coffee-order': 'checkbox',
            'class': 'checkbox'
        });
        let $label = $('<label></label>');
        let $checkbox = $('input></input>', {
            type: 'checkbox',
            value: coffeeOrder.emailAddress
        });

        let description = coffeeOrder.size + ' ';
        if (coffeeOrder.flavor) {
            description += coffeeOrder.flavor + ', ';
        }
        description += coffeeOrder.coffee + ', ';
        description += ' (' + coffeeOrder.emailAddress + ')';
        description += ' [' + coffeeOrder.strength + 'x]';
    }

    // Add the checklist to the App namespace
    App.Checklist = Checklist;
    window.App = App;
})(window);