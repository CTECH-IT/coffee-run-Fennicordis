(function (window) {
    'use strict';
    let App = window.App || {};

    class DataStore {
        constructor() {
            console.log('Running DataStore function... ');
            this.data = {};
        }
        add(key, val) {
            this.data[key] = val;
        }
        get(key) {
            return this.data[key];
        }
        getAll() {
            return this.data;
        }
        remove(key) {
            delete this.data[key];
        }
    }

    App.DataStore = DataStore;
    window.App = App;
})(window);