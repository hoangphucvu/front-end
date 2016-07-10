(function($) {
    'use strict';

    var DEFAULT_CONFIG = {
        data: [],
        rowRenderedCallback: _.noop,
        columnRenderedCallback: _.noop
    };


    function API(datatable) {
        this.datatable = datatable;
    }

    API.prototype.draw = function() {
        var datatable = this.datatable,
        data = datatable._dt_setting.data || [],
        thead = datatable._dt_thead,
        tbody = datatable._dt_tbody,
        columnDefs = datatable._dt_setting.columnDefs;
        thead.empty();
        tbody.empty();

        columnDefs.forEach(function(values){
            //console.log(values.name);
            var tr = document.createElement('tr'),
            th;
            var arr = Object.keys(values).map(function (key) {return values[key]});
            arr.forEach(function(value){
                th = document.createElement('th');
                th.innerHTML = value;
                tr.appendChild(th);
                datatable._dt_setting.columnRenderedCallback.call(datatable, tr, th, value);
            });
            thead.append(tr);
            datatable._dt_setting.rowRenderedCallback.call(datatable, tr, values);
        });

        //check if data is an array or an object
        //if object then map to array
        if(!Array.isArray(data[0])){
            data = data.map(function(obj) { 
                return [obj.id, obj.name, 
                obj.sex, obj.maritalStatus,
                obj.dob, obj.title, 
                obj.address, obj.phoneNumber, obj.email] });
        }

        data.forEach(function(values) {
            console.log(values);
            var tr = document.createElement('tr'),
            td;
            values.forEach(function(value) {
                td = document.createElement('td');
                td.innerHTML = value;
                tr.appendChild(td);
                datatable._dt_setting.columnRenderedCallback.call(datatable, tr, td, value);
            });
            tbody.append(tr);
            datatable._dt_setting.rowRenderedCallback.call(datatable, tr, values);
        });
    };

    function DataTable(cfgs) {
        this._dt_setting = _.extend(DEFAULT_CONFIG, cfgs);
        this._dt_tbody = this.find('tbody');
        this._dt_thead = this.find('thead');
        var api = new API(this);
        api.draw();
        return api;
    }

    $.plugins.dataTable = DataTable;
})(Selector);