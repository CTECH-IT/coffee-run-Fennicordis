(function (window) {
    'use strict';
    let App = window.App || {};

    function DataStore() {
        console.log('Running the DataStore function...');
        this.data = {};
    }

    DataStore.prototype.add = function (key, val) {
        this.data[key] = val;
    };
    
    App.DataStore = DataStore;
    window.App = App;
})(window);