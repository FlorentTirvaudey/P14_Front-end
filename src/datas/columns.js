const columns = [
    {
      name: 'First Name',
      selector: row => row.userFirstname,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: row => row.userLastname,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: row => row.userStartDate,
      sortable: true,
    },
    {
      name: 'Department',
      selector: row => row.userDepartment,
      sortable: true,
    },
    {
      name: 'Date of Birth',
      selector: row => row.userDateOfBirth,
      sortable: true,
    },
    {
      name: 'Street',
      selector: row => row.userStreet,
    },
    {
      name: 'City',
      selector: row => row.userCity,
    },
    {
      name: 'State',
      selector: row => row.userState,
    },
    {
      name: 'Zip Code',
      selector: row => row.userZipCode,
    },
  ];

export default columns;