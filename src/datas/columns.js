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
      selector: row => new Date(row.userStartDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
      sortable: true,
    },
    {
      name: 'Department',
      selector: row => row.userDepartment,
      sortable: true,
    },
    {
      name: 'Date of Birth',
      selector: row => new Date(row.userDateOfBirth).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
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