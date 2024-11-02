import { useSelector } from "react-redux";
import { useState } from "react";

import DataTable from 'react-data-table-component';

import columns from "../datas/columns";
import { Link } from "react-router-dom";

function TableEmployee () {

    const { users } = useSelector((state) => state.user);

    const [searchText, setSearchText] = useState('');

    // Filtrer les données en fonction de la recherche
    const filteredData = users.filter(item => {
        return (
        item.userFirstname.toLowerCase().includes(searchText.toLowerCase()) ||
        item.userLastname.toLowerCase().includes(searchText.toLowerCase()) ||
        item.userDepartment.toLowerCase().includes(searchText.toLowerCase()) ||
        item.userCity.toLowerCase().includes(searchText.toLowerCase()) ||
        item.userState.toLowerCase().includes(searchText.toLowerCase())
        );
    });

    console.log("test useSelector pour users", users)

    console.log("affichage des columns", columns)

    console.log("test datas filtrer", filteredData)

    return (
        <>
            {filteredData.length > 0 ? (
                <div className="employee_display_content">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)} // Met à jour le texte de recherche
                        style={{ marginBottom: '10px', padding: '5px' }}
                    />
                    <DataTable
                    columns={columns}
                    data={filteredData}
                    pagination
                    highlightOnHover
                    />
                </div>
            ) : (
                <div className="no_data_message">
                    <span>There is no data to display yet, start to create an employee here :</span>
                    <div>
                        <Link to="/" className="redirect_error_message">Homepage</Link>
                    </div>
                </div>
            )}
        </>
    )
};

export default TableEmployee;