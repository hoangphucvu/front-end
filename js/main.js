(function($) {
    var data = [{
        id: 1,
        name: "Jole Osteen",
        sex: "F",
        maritalStatus: "M",
        dob: "01-01-1987",
        title: "Senior Software Engineer",
        address: "1355 Market Street, Suite 900 San Francisco, CA 94103",
        phoneNumber: "(123) 456-7890",
        email: "jole.osteen@example.com"
    },
    {
        id: 2,
        name: "Jake",
        sex: "M",
        maritalStatus: "M",
        dob: "01-01-1987",
        title: "Senior Software Engineer",
        address: "1355 Market Street, Suite 900 San Francisco, CA 94103",
        phoneNumber: "(123) 456-7890",
        email: "jole.osteen@example.com"
    },
    {
        id: 3,
        name: "David",
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
        {name: 'sex', classNames: "xs-hidden"}, 
        {name: 'maritalStatus', classNames: "sm-hidden xs-hidden"}, 
        {name: 'dob', classNames: "xs-hidden"}, 
        {name: 'title'}, 
        {name: 'address', classNames: "sm-hidden xs-hidden"}, 
        {name: 'phoneNumber'},
        {name: 'email', classNames: "sm-hidden xs-hidden"}
    ],
    searchable: true,
    pageSize: 2,
    columnRenderedCallback: function(className, columName, tr, td, columData) {
        if(columName === 'sex') {
            if (columData === 'M') {
                td.innerHTML = 'Male';
            }
            if (columData === 'F') {
                td.innerHTML = 'FeMale';
            }
        } 

        if(columName === 'maritalStatus') {
            if (columData === 'M') {
                td.innerHTML = 'Married';
            }
            if (columData === 'N') {
                td.innerHTML = 'Not Married';
            }
        }

        if(className){
            td.className = className;
        }
    }
    });
})(Selector);


