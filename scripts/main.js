(function (window) {
    'use strict';
    const SERVER_URL = 'http://saturn.rochesterschools.org:8080/json';
    const FORM_SELECTOR = '[data-coffee-order="form"]';
    const CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    let App = window.App;
    let Truck = App.Truck;
    let DataStore = App.DataStore;
    let RemoteDataStore = App.RemoteDataStore;
    let FormHandler = App.FormHandler;
    let Checklist = App.Checklist;
    let Validation = App.Validation;

    let remoteDS = new RemoteDataStore(SERVER_URL);

    let myTruck = new Truck('12345', remoteDS);
    window.myTruck = myTruck;

    // find the form that is being submitted and creat a FormHandler object
    let formHandler = new FormHandler(FORM_SELECTOR);
    // find the checklist that is being updated and creat a Checklist object
    let checkList = new Checklist(CHECKLIST_SELECTOR);

    // when a checkbox is clicked, call "deliverOrder" on myTruck
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });

    formHandler.addInputHandler(Validation.isCompanyEmail);

})(window);