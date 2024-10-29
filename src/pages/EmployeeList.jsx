import { Link } from "react-router-dom";
import TableEmployee from "../components/TableEmployee";
import Tab from "../components/Tab";

    // foreach columns, on créé une table à afficher dans mon DOM avec le return
    // puis faire un map dedans pour ajouter les users récupérer avec useSelector depuis le store

function EmployeeList() {
    return (
        <>
            <div id="employee-div" className="list_employee_container">
                <h1>Current Employees</h1>
                <div className="encaps_tab_content">
                    <div className="show_number_employees_block">
                        <span>Show</span>
                        <select name="" id="">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        <span>entries</span>
                    </div>
                    <div className="searchbar_block">
                        <span>Search:</span>
                        <input type="text" />
                    </div>
                </div>
                <TableEmployee />
                {/* <Tab /> */}
                <div className="encaps_tab_content">
                    <span>Showing 0 to 0 of 0 entries</span>
                    <div className="previous_next_choice">
                        <span>Previous</span>
                        <span>Next</span>
                    </div>
                </div>
                <Link to="/">Home</Link>
            </div>
        </>
    )
};

export default EmployeeList;