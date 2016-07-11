(function($) {
    var data = [{
        id: 10000,
        name: "Jole Osteen",
        sex: "M",
        maritalStatus: "M",
        dob: "01-01-1987",
        title: "Senior Software Engineer",
        address: "1355 Market Street, Suite 900 San Francisco, CA 94103",
        phoneNumber: "(123) 456-7890",
        email: "jole.osteen@example.com"
    },
    {
        id: 10000,
        name: "Jole Osteen",
        sex: "M",
        maritalStatus: "M",
        dob: "01-01-1987",
        title: "Senior Software Engineer",
        address: "1355 Market Street, Suite 900 San Francisco, CA 94103",
        phoneNumber: "(123) 456-7890",
        email: "jole.osteen@example.com"
    },
    {
        id: 10000,
        name: "Phuc",
        sex: "M",
        maritalStatus: "M",
        dob: "01-01-1987",
        title: "Senior Software Engineer",
        address: "1355 Market Street, Suite 900 San Francisco, CA 94103",
        phoneNumber: "(123) 456-7890",
        email: "jole.osteen@example.com"
    }];

$('.datatable').dataTable({
    data: data,
    columnDefs: [
        {name: 'id'}, 
        {name: 'name'},
        {name: 'sex'}, 
        {name: 'maritalStatus'}, 
        {name: 'dob'}, 
        {name: 'title'}, 
        {name: 'address'}, 
        {name: 'phoneNumber'},
        {name: 'email'}, 
        {name: ''}
    ],
    searchable: true,
    pageSize: 2,
    columnRenderedCallback: function(tr, td, data) {
        if(data[2] == 'M'){
            data[2] = 'Male';
        }
        if(data[3] == 'M'){
            data[3] = 'Married';
        }
        td.className = "md-hidden sm-hidden xs-hidden"; 
    },
    rowRenderedCallback: function(tr, data) {
        var td = document.createElement('td'),
        delBtn = document.createElement('i');

        delBtn.className = 'fa fa-trash red';
        delBtn.addEventListener("click", function() {
            confirm("Are you sure you want to delete #" + data[0]);
            var row = this.parentNode.parentNode;
            row.parentNode.removeChild(row);
        });
        td.appendChild(delBtn);
        tr.appendChild(td);
    }
    });
})(Selector);

function dropDown() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}