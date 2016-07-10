## Design web page with HTML, CSS and JavaScript

Based on the idea of wrapping around HTML elements to provide rich set features like 'Method Chaining' and 'Plugin'.
Trainees are asked to take control the initial code, improve it and create DataTable plugin that allows to display DataTable
based on user-settings.

### DataTable Plugin
```
var data = [
  {
    id: 10000
    name: 'Jole Osteen',
    sex: 'M',
    maritalStatus: 'M',
    dob:'01-01-1987',
    title:'Senior Software Engineer',
    address:'1355 Market Street, Suite 900 San Francisco, CA 94103',
    phoneNumber:'(123) 456-7890'
    email: 'jole.osteen@example.com'
  }
]


 $('.datatable').dataTable({
    data: data,
    columnDefs:[
      { name: 'id' }
      { name: 'name' }
      { name: 'sex' }
      { name: 'maritalStatus' }
      { name: 'dob' }
      { name: 'title' }
      { name: 'address' }
      { name: 'phoneNumber' }
      { name: 'email' }
    ],


    searchable: true,
    order: [['id', 'asc']]
    pageSize: 5
 });

<table class="datatable">
    <thead>
        <tr>
            <th>ID></th>
            <th>Name</th>
            <th>Sex</th>
            <th>Marital Status</th>
            <th>DOB</th>
            <th>Title</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
```
**Grading:**

  - Top Fixed Navigation Bar components : +20
  - Top Navigation Bar Responsive: +15
  - DataTable Plugin: Display DataTable based on the given settings(data & columnDefs)  +30
  - Make DataTable pageable base on pageSize setting: +15
  - Make DataTable searchable base on searchable setting: +10
  - Allow user to delete a row with confirmation dialog +10
  - Follow Coding Convention and high code quality +15
  - Extra points:
    + Make DataTable responsive based on classNames columnDefs setting (classNames:"md-hidden sm-hidden xs-hidden)" +10
    + Allow user to reformat displayed data via render function on columnDefs setting +5
    + Make DataTable sortable base on order setting: +10
    + HTML-CSS-JavaScript Interview +10