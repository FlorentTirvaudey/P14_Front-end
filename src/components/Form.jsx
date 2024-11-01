import * as React from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/slices/user";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import states from "../datas/states";
import Modal from "./Modal";
import dayjs from 'dayjs';

// import DatePicker from 'react-date-picker';

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

    const [isFirstnameValid, setIsFirstnameValid] = useState(false);
    const [isLastnameValid, setIsLastnameValid] = useState(false);
    const [isStreetValid, setIsStreetValid] = useState(false);
    const [isCityValid, setIsCityValid] = useState(false);
    const [isDateOfBirthValid, setIsDateOfBirthValid] = useState(false);
    const [isZipCodeValid, setIsZipCodeValid] = useState(false);

    const [isModalOpened, setIsModalOpened] = useState(false);
    const [isFormError, setIsFormError] = useState(true);

    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/[0-9]{4}$/;
    const numberRegex = /^\d+$/;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const closeModal = () => {
        setIsModalOpened(false);
    }

    const validateInput = (name, value) => {
        switch (name) {
            case 'firstname':
                setIsFirstnameValid(!!value);
                break;
            case 'lastname':
                setIsLastnameValid(!!value);
                break;
            case 'dateofbirth':
                setIsDateOfBirthValid(dateRegex.test(value));
                break;
            // case 'startdate':
            //     setUserStartDate(value);
            //     break;
            case 'street':
                setIsStreetValid(!!value);
                break;
            case 'city':
                setIsCityValid(!!value);
                break;
            case 'zipcode':
                setIsZipCodeValid(numberRegex.test(value));
                break;
        }
    }

    const handleChangeInput = (name, value) => {
        switch (name) {
            case 'firstname':
                setUserFirstname(value);
                break;
            case 'lastname':
                setUserLastname(value);
                break;
            case 'dateofbirth':
                setUserDateOfBirth(value);
                break;
            case 'startdate':
                setUserStartDate(value);
                break;
            case 'street':
                setUserStreet(value);
                break;
            case 'city':
                setUserCity(value);
                break;
            case 'state':
                setUserState(value);
                break;
            case 'zipcode':
                setUserZipCode(value);
                break;
            case 'department':
                setUserDepartment(value);
                break;
        }

        validateInput(name, value);
    }

    const validateForm = e => {

        e.preventDefault();

        // const isFormValid = isFirstnameValid && isLastnameValid && isCityValid && isDateOfBirthValid && isStreetValid && isZipCodeValid;

        // if(!isFormValid) {
        //     setIsFormError(true);
        //     console.log("erreur dans la validation du formulaire");
        //     return false;
        // } else {
        //     setIsFormError(false);
        //     console.log("validation du formulaire");
        //     return true;
        // }

        console.log(userFirstname)
        console.log(userLastname)
        console.log(userStreet)
        console.log(userCity)
        console.log("test date", userDateOfBirth)


        if ((!userFirstname || !userLastname || !userStreet || !userCity)) {
            e.preventDefault()
            setIsFormError(true);
            console.log("test error avec nom prénom", isFormError)
            return false;

        } else if (!userDateOfBirth || !dateRegex.test(userDateOfBirth)) {
            e.preventDefault()
            setIsFormError(true);
            console.log("test error avec datepicker", isFormError)
            return false;
        } else if (!userZipCode || !numberRegex.test(userZipCode)) {
            e.preventDefault()
            setIsFormError(true);
            console.log("test error avec zip code", isFormError)
            return false;
        } else {
            setIsFormError(false);
            console.log("si je passe là c'est cool", isFormError)
            return true;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        let isValid = validateForm(e);

        console.log("test error form", isValid)

        if(isValid) {
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
        }

        setIsModalOpened(true);

        // navigate('/employee');  // Remplacer par l'ouverture de la modale
    }

    const { users } = useSelector((state) => state.user);
    
    // console.log("user dans le store", users)

    return (
        <>
            <form action="#" id="create-employee" className="form_create_employee" onSubmit={handleSubmit}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="firstname" onChange={() => setUserFirstname(event.target.value)} />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="lastname" onChange={() => setUserLastname(event.target.value)} />

                <label htmlFor="date-of-birth">Date of Birth</label>
                {/* <input id="date-of-birth" type="text" name="dateofbirth" onChange={() => setUserDateOfBirth(event.target.value)} /> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Basic date picker" onChange={(newDate) => {
                            // console.log("nawdate direct", newDate)
                            // console.log("newdate avec dayjs", dayjs(newDate).format('MM/DD/YYYY'))
                            setUserDateOfBirth(dayjs(newDate).format('MM/DD/YYYY'))
                            // console.log("nouvelle date", userDateOfBirth)
                        }} />
                    </DemoContainer>
                </LocalizationProvider>

                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="text" name="startdate" onChange={() => setUserStartDate(event.target.value)} />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" name="street" onChange={() => setUserStreet(event.target.value)} />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" name="city" onChange={() => setUserCity(event.target.value)} />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state" onChange={() => setUserState(event.target.value)}>
                        {states.map((state) => (
                            <option key={state.abbreviation}>{state.name}</option>
                        ))}
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" name="zipcode" onChange={() => setUserZipCode(event.target.value)} />
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
            {isModalOpened && <Modal content={!isFormError ? "Employee Created !" : "There is an error with datas in form"} closeModal={closeModal} buttonStyle={"button_modal"} modaleStyle={"modal"} />}
        </>
    )
};

export default Form;