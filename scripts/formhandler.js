(function (window) {
    'use strict';
    let App = window.App || {};
    let $ = window.jQuery;

    class FormHandler {
        constructor(selector) {
            if (!selector) {
                throw new Error('No selector provided!');
            }

            // find the "selector" in the DOM using jQuery and assign it to this.formElement
            this.$formElement = $(selector);
            if (this.$formElement.length == 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        }
        // add an event handler for the submit button and pass in createOrder as a parameter (func)
        addSubmitHandler(func) {
            console.log('Setting the submit handler for the form...');
            this.$formElement.on('submit', function (event) {
                event.preventDefault();
                let data = {};
                $(this).serializeArray().forEach(function (item) {
                    data[item.name] = item.value;
                    console.log(item.name + ' is ' + item.value);
                });
                console.log(data);
                func(data); // call the function that was passed in on the data from the form

                this.reset(); // reset the form
                this.elements[0].focus(); // focuse on the first field
            });
        }
        addInputHandler(func) {
            console.log('Setting input handler for form');
            this.$formElement.on('input', '[name="emailAddress"]', function (event) {
                let emailAddress = event.target.value;
                if (func(emailAddress) == true) {
                    event.target.setCustomValidity('');
                } else {
                    event.target.setCustomValidity(emailAddress + ' is not an authorized email address!');
                }
            });
        };
    }
    App.FormHandler = FormHandler;
    window.App = App;

})(window);