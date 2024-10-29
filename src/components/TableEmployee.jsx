import { useSelector } from "react-redux";
import columns from "../datas/columns";

function TableEmployee () {

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