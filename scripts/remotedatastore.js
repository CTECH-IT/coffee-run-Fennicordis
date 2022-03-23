(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    class RemoteDataStore {
        constructor(url) {
            if (!url) {
                throw new Error('No remote URL supplied.');
            }
            this.serverUrl = url;
        }
        add(key, val) {
            // Call jQuery's $.post method to send the value to the serverUrl
            // When the server responds, call and anonymous function with serverResponse
            $.post(this.serverUrl, val, function (serverResponse) {
                console.log(serverResponse);
            });
        }
        getAll(cb) {
            // make a "get" call to the server URL
            // pass in an anonymous function that calls the "cb" callback function
            $.get(this.serverUrl, function (serverResponse) {
                console.log(serverResponse);
                cb(serverResponse);
            });
        }
        get(key, cb) {
            // make a get call to the server, but pass an email address
            // so that it returns just one order
            // then call the function "cb" on the response 
            $.get(this.serverUrl + '?emailAddress=' + key, function (serverResponse) {
                console.log(serverResponse);
                cb(serverResponse);
            });
        }
        remove(key) {
            // call the server url using the ajax 'DELETE' comamand
            $.ajax(this.serverUrl + '?emailAddress=' + key, { type: 'DELETE' });
        };
    }

    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
})(window);