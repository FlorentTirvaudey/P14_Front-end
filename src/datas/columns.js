const columns = [
    { title: 'First Name', data: 'userFirstname' },
    { title: 'Last Name', data: 'userLastname' },
    { title: 'Start Date', data: 'startDate' },
    { title: 'Department', data: 'userDepartment' },
    { title: 'Date of Birth', data: 'dateOfBirth' },
    { title: 'Street', data: 'userStreet' },
    { title: 'City', data: 'userCity' },
    { title: 'State', data: 'userState' },
    { title: 'Zip Code', data: 'userZipCode' },
];

// const columns = [
//     { label: 'First Name', renderCell: (item) => item.userFirstname },
//     { label: 'Last Name', renderCell: (item) => item.userLastname },
//     {
//         label: 'Start Date',
//         renderCell: (item) =>
//             new Date(item.startDate).toLocaleDateString('en-US', {
//                 year: 'numeric',
//                 month: '2-digit',
//                 day: '2-digit',
//             }),
//     },
//     { label: 'Department', renderCell: (item) => item.userDepartment },
//     {
//         label: 'Date of Birth',
//         renderCell: (item) =>
//             new Date(item.dateOfBirth).toLocaleDateString('en-US', {
//                 year: 'numeric',
//                 month: '2-digit',
//                 day: '2-digit',
//             }),
//     },
//     { label: 'Street', renderCell: (item) => item.userStreet },
//     { label: 'City', renderCell: (item) => item.userCity },
//     { label: 'State', renderCell: (item) => item.userState },
//     { label: 'Zip Code', renderCell: (item) => item.userZipCode },
// ];


export default columns;