import { useSelector } from "react-redux";

function TableEmployee () {

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
    ]

    const { users } = useSelector((state) => state.user);

    console.log("test useSelector pour users", users)

    return (
        <table id="employee-table" className="display">
            <thead>
                <tr>
                    {columns.map((column) => (
                            <th key={column.data}>
                                {column.title}
                            </th>
                        
                    ))}
                </tr>
            </thead>
            <tbody>
                {users.length > 0 ? (
                    users.map((user, index) => (
                        <tr key={index}>
                            {columns.map((column) => (
                                <td key={column.data}>{user[column.data]}</td>
                            )
                            )}
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={columns.length}>No data available</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
};

export default TableEmployee;