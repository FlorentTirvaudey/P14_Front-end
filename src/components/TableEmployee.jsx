import { useSelector } from "react-redux";
import { useState } from "react";

import DataTable from 'react-data-table-component';

import columns from "../datas/columns";

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

    const NoDataComponent = () => {
        const noDataRow = [
          {
            userFirstname: 'Aucune donnée',
            userLastname: '',
            userDepartment: '',
            userCity: '',
            userState: '',
            userStartDate: '',
            userDateOfBirth: '',
            userStreet: '',
            userZipCode: '',
          },
        ];
        
        return (
          <DataTable
            title="Employee Data"
            columns={columns}
            data={noDataRow} // Utilise une seule ligne avec le message
            pagination={false} // Pas besoin de pagination pour une seule ligne
            noHeader // Enlève l'en-tête pour le message
            style={{ textAlign: 'center', padding: '20px' }} // Ajustement de style
          />
        );
      };

    return (
        <div style={{ width: '100%' }}>
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
            noDataComponent={<NoDataComponent />}
            />
        </div>
    )
};

export default TableEmployee;