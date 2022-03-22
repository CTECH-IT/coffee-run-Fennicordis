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
                throw new Error('Could not find element with selector: ' + selector);
            }
        }
        addRow(coffeeOrder) {
            // Remove any existing rows that match the email address
            this.removeRow(coffeeOrder.emailAddress);
            // Create a new instance of a row, using the coffe order info
            var rowElement = new Row(coffeeOrder);
            // Add the new row instance's $element property to the checklist
            this.$element.append(rowElement.$element);
        }
        removeRow(email) {
            this.$element
                .find('[value="' + email + '"]')
                .closest('[data-coffee-order="checkbox"]')
                .remove();
        }
        addClickHandler(func) {
            this.$element.on('click', 'input', function (event) {
                var email = event.target.value;
                this.removeRow(email);
                func(email);
            }.bind(this));
        };
    }

    class Row {
        constructor(coffeeOrder) {
            let $div = $('<div></div>', {
                'data-coffee-order': 'checkbox',
                'class': 'checkbox'
            });
            let $label = $('<label></label>');

            let $checkbox = $('<input></input>', {
                type: 'checkbox',
                value: coffeeOrder.emailAddress
            });

            let description = coffeeOrder.size + ' ';
            if (coffeeOrder.flavor) {
                description += coffeeOrder.flavor + ' ';
            }
            description += coffeeOrder.coffee + ', ';
            description += ' (' + coffeeOrder.emailAddress + ')';
            description += ' [' + coffeeOrder.strength + 'x]';

            $label.append($checkbox);
            $label.append(description);
            $div.append($label);

            this.$element = $div;
        }
    }

    // Add the checklist to the App namespace
    App.Checklist = Checklist;
    window.App = App;
})(window);