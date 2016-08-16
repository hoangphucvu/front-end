(function(document){
    'use strict';

    var TableFilter = (function(arr) {

        var input;

        function onInputEvent(e) {
            input = e.target;
            var tables = document.getElementsByClassName(input.getAttribute('data-table'));
            arr.forEach.call(tables, function(table) {
                arr.forEach.call(table.tBodies, function(tbody) {
                    arr.forEach.call(tbody.rows,filter);
                });
            });
        }

        function filter(row) {
            var text = row.textContent.toLowerCase(),
            val = input.value.toLowerCase();
            row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';     
        }

        return {
            init: function(){
                var inputs = document.getElementsByClassName('searchFilter');
                arr.forEach.call(inputs, function(input) {
                    input.oninput = onInputEvent;
                });
            }
        };
    })(Array.prototype);
    
    document.addEventListener('readystatechange', function() {
        if (document.readyState === 'complete') {
            TableFilter.init();
        }
    });
})(document);