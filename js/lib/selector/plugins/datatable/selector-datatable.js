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
        tbody = datatable._dt_tbody;

        tbody.empty();
        if(Array.isArray(data[0])){
            console.log("true");
        }
        

        data.forEach(function(values) {
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
        var api = new API(this);
        api.draw();
        return api;
    }

    $.plugins.dataTable = DataTable;
})(Selector);