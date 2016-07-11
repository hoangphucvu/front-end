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
            var th = document.createElement('th');
            if (values.name == 'sex' || values.name == 'maritalStatus' 
                ||  values.name == 'dob' || values.name == 'address' 
                || values.name == 'email')
            {
                th.className = "md-hidden sm-hidden xs-hidden";
            }
            
            th.innerHTML = values.name;
            thead.append(th);
        });

        //check if data is an array or an object
        //if object then map to array
        if (!Array.isArray(data[0])) {
            data = data.map(function(obj) { 
                return [obj.id, obj.name, 
                obj.sex, obj.maritalStatus,
                obj.dob, obj.title, 
                obj.address, obj.phoneNumber, obj.email] });
        }

        data.forEach(function(values) {
            var tr = document.createElement('tr'),
            td,
            dataReturn = values;
            values.forEach(function(value) {
                td = document.createElement('td');
                td.className = "md-hidden sm-hidden xs-hidden";
                td.innerHTML = value;
                tr.appendChild(td);
                datatable._dt_setting.columnRenderedCallback.call(datatable, tr, td, dataReturn);
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