(function (window) {
    'use strict';
    const FORM_SELECTOR = '[data-coffee-order="form"]';
    const CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    let App = window.App;
    let Truck = App.Truck;
    let DataStore = App.DataStore;
    let FormHandler = App.FormHandler;
    let Checklist = App.Checklist;

    let myTruck = new Truck('12345', new DataStore());
    let checkList = new Checklist(CHECKLIST_SELECTOR);
    let formHandler = new FormHandler(FORM_SELECTOR);

    window.myTruck = myTruck;

    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });

})(window);