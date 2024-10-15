import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/slices/user";

function Form() {

    // utiliser des states pour stocker localement les datas des input et setState après les onChange
    // dans une fonction HandleSubmit, créer un objet user avec les datas nom, prénom, ... des inputs puis dispatch l'objet user avec addUser dans le store
    // rajouter HandleSubmit dans le onSubmit du form

    const [userFirstname, setUserFirstname] = useState('');
    const [userLastname, setUserLastname] = useState('');
    const [userStreet, setUserStreet] = useState('');
    const [userCity, setUserCity] = useState('');
    const [userState, setUserState] = useState('');
    const [userZipCode, setUserZipCode] = useState(0);
    const [userDepartment, setUserDepartment] = useState('');
    const [userDateOfBirth, setUserDateOfBirth] = useState('');
    const [userStartDate, setUserStartDate] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        const newUser = {
            userFirstname,
            userLastname,
            userStreet,
            userCity,
            userState,
            userZipCode,
            userDepartment,
            userDateOfBirth,
            userStartDate
        }

        console.log("newUser", newUser)

        dispatch(addUser(newUser));

        navigate('/employee');
    }

    const { users } = useSelector((state) => state.user);
    
    console.log("user dans le store", users)

    return (
        <form action="#" id="create-employee" onSubmit={handleSubmit}>
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" onChange={() => setUserFirstname(event.target.value)} />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" onChange={() => setUserLastname(event.target.value)} />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <input id="date-of-birth" type="text" onChange={() => setUserDateOfBirth(event.target.value)} />

            <label htmlFor="start-date">Start Date</label>
            <input id="start-date" type="text" onChange={() => setUserStartDate(event.target.value)} />

            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input id="street" type="text" onChange={() => setUserStreet(event.target.value)} />

                <label htmlFor="city">City</label>
                <input id="city" type="text" onChange={() => setUserCity(event.target.value)} />

                <label htmlFor="state">State</label>
                <select name="state" id="state" onChange={() => setUserState(event.target.value)}></select>

                <label htmlFor="zip-code">Zip Code</label>
                <input id="zip-code" type="number" onChange={() => setUserZipCode(event.target.value)} />
            </fieldset>

            <label htmlFor="department">Department</label>
            <select name="department" id="department" onChange={() => setUserDepartment(event.target.value)}>
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
            </select>
            <button>Save</button>
        </form>
    )
};

export default Form;