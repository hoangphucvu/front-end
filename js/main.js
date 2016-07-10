(function ($) {
   var data = [
        ["1000", "Jole Osteen", "M", "M", "1988", "Software Engineer", "joleosteen@kms-technology", "(+84) 096-1863i459"],
        ["1000", "Jole Osteen", "M", "M", "1988", "Software Engineer", "joleosteen@kms-technology", "(+84) 096-1863i459"],
        ["1000", "Jole Osteen", "M", "M", "1988", "Software Engineer", "joleosteen@kms-technology", "(+84) 096-1863i459"],
        ["1000", "Jole Osteen", "M", "M", "1988", "Software Engineer", "joleosteen@kms-technology", "(+84) 096-1863i459"],
        ["1000", "Jole Osteen", "M", "M", "1988", "Software Engineer", "joleosteen@kms-technology", "(+84) 096-1863i459"],
        ["1000", "Jole Osteen", "M", "M", "1988", "Software Engineer", "joleosteen@kms-technology", "(+84) 096-1863i459"],
        ["1000", "Jole Osteen", "M", "M", "1988", "Software Engineer", "joleosteen@kms-technology", "(+84) 096-1863i459"]
    ];
    $('.datatable').dataTable({
        data: data,
        columnDefs:[
        { name: 'id' },
        { name: 'name' },
        { name: 'sex' },
        { name: 'maritalStatus' },
        { name: 'dob' },
        { name: 'title' },
        { name: 'address' },
        { name: 'phoneNumber' },
        { name: 'email' }
        ],
        rowRenderedCallback: function(tr, data){
            var td = document.createElement('td'),
            delBtn = document.createElement('i');

            delBtn.className = 'fa fa-trash red';
            delBtn.addEventListener("click", function(){
                confirm("Are you sure you want to delete #" + data[0]);
            });
            td.appendChild(delBtn);
            tr.appendChild(td);
        }
    });
})(Selector);

function dropDown(){
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}
