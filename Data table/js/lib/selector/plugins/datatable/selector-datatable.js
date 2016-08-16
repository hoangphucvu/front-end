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

    API.prototype.drawTable = function(){
        var datatable = this.datatable;
        var data = datatable._dt_setting.data || [];
        const pageSize = datatable._dt_setting.pageSize;
        var api = this;

        api.drawHeader();
        api.drawBody(1);
        api.generatePagination(pageSize,data);
    }


    API.prototype.drawHeader = function() {
        var datatable = this.datatable;
        var thead = datatable._dt_thead;
        var columnDefs = datatable._dt_setting.columnDefs;
        thead.empty();
        
        columnDefs.forEach(function(values){
            var th = document.createElement('th');
            th.innerHTML = values.name;

            if (values.classNames) {
                th.className = values.classNames;
            }

            thead.append(th);
            thead.append(th);
        });
    }

    API.prototype.drawBody = function(indexPage) {
        var api = this;
        var datatable = this.datatable;
        var data = datatable._dt_setting.data || [];
        var tbody = datatable._dt_tbody;
        const pageSize = datatable._dt_setting.pageSize;
        var columnDefs = datatable._dt_setting.columnDefs;
        var thLast = datatable._dt_th;
        tbody.empty();
        
        var pageStart = pageSize * (indexPage -1);
        var lastPage = pageStart + pageSize;
        if (lastPage > data.length) {
            lastPage = data.length;
        }

        var pageData = data.slice(pageStart, lastPage);
        pageData.forEach(function(values) {
            var tr = document.createElement('tr');
            var td;
            //data is an array
            if(columnDefs.length == 0) {
                values.forEach(function(value) {
                    td = document.createElement('td');
                    td.innerHTML = value;
                    tr.appendChild(td);
                    datatable._dt_setting.columnRenderedCallback.call
                    (datatable, columnDefs, tr, td, values);
                });
            }
            //data is an object
            else {
                columnDefs.forEach(function(value) {
                    td = document.createElement('td');
                    var columName = value.name;
                    var columData = values[columName];
                    td.innerHTML = columData;
                    var className = value.classNames;
                    datatable._dt_setting.columnRenderedCallback.call
                    (datatable, className, columName, tr, td, columData);
                    tr.appendChild(td);
                });
            }

            api.drawDeleteButton(tr, values);
            tbody.append(tr);
        });
    };

    API.prototype.generatePagination = function(pageSize, data) {
        var numberOfPage = Math.ceil(data.length / pageSize);
        var li;
        var a;
        var api = this;
        var datatable = this.datatable;
        datatable._dt_ul.empty();

        li = document.createElement('li');
        a = document.createElement('a');
        a.href = '#';
        a.innerHTML = '&laquo;';
        li.appendChild(a);
        $('.pagination').append(li);

        for (var i = 1; i <= numberOfPage; i++) {
            li = document.createElement('li');
            li.setAttribute('value',i);
            a = document.createElement('a');
            a.href = '#';
            a.innerHTML = i;
            li.addEventListener('click', function() {
                api.drawBody(this.getAttribute('value'));
            });
            li.appendChild(a);
            $('.pagination').append(li);
        }

        li = document.createElement('li');
        a = document.createElement('a');
        a.href = '#';
        a.innerHTML = '&raquo;';
        li.appendChild(a);
        $('.pagination').append(li);
    }


    API.prototype.drawDeleteButton = function (tr, key){
        var api = this;
        var datatable = this.datatable;
        var delBtn = document.createElement('i');
        var td = document.createElement('td');
        var data = datatable._dt_setting.data || [];
        const pageSize = datatable._dt_setting.pageSize;

        delBtn.className = 'btn fa fa-trash red';
        delBtn.addEventListener("click", function() {
            var confirmMessage = confirm("Are you sure you want to delete " + key['name']);
            if (confirmMessage) {
                var row = this.parentNode.parentNode;
                row.parentNode.removeChild(row);
                data.splice(data.indexOf(key), 1);
                api.drawBody(1);
                api.generatePagination(pageSize, data);
            }
        });
        
        td.appendChild(delBtn);
        tr.appendChild(td);
    }
    
    function DataTable(cfgs) {
        this._dt_setting = _.extend(DEFAULT_CONFIG, cfgs);
        this._dt_tbody = this.find('tbody');
        this._dt_thead = this.find('thead');
        this._dt_ul = $('.pagination');
        var api = new API(this);
        api.drawTable();
        return api;
    }

    $.plugins.dataTable = DataTable;
})(Selector);