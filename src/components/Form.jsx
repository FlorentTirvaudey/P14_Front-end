import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/user";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Select, MenuItem } from '@mui/material';

import states from "../datas/states";
import department from '../datas/department';

import dayjs from 'dayjs';

import { Modal } from 'my-custom-modal-p14';

function Form() {

    const [userFirstname, setUserFirstname] = useState('');
    const [userLastname, setUserLastname] = useState('');
    const [userStreet, setUserStreet] = useState('');
    const [userCity, setUserCity] = useState('');
    const [userState, setUserState] = useState('');
    const [userZipCode, setUserZipCode] = useState(0);
    const [userDepartment, setUserDepartment] = useState('');
    const [userDateOfBirth, setUserDateOfBirth] = useState('');
    const [userStartDate, setUserStartDate] = useState('');

    const [isModalOpened, setIsModalOpened] = useState(false);
    const [isFormError, setIsFormError] = useState(true);

    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/[0-9]{4}$/;
    const numberRegex = /^\d+$/;

    const dispatch = useDispatch();

    const closeModal = () => {
        setIsModalOpened(false);
    }

    const validateForm = e => {

        e.preventDefault();

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
        
            dispatch(addUser(newUser));
        }

        setIsModalOpened(true);
    }

    return (
        <>
            <form action="#" id="create-employee" className="form_create_employee" onSubmit={handleSubmit}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" className='form_input' id="first-name" name="firstname" placeholder='Ex: Jean' onChange={() => setUserFirstname(event.target.value)} />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" className='form_input' id="last-name" name="lastname" placeholder='Ex: John' onChange={() => setUserLastname(event.target.value)} />

                <div className='datepicker_container'>
                    <div className='datepicker'>
                        <div className='datepicker_content'>
                            <label htmlFor="date-of-birth">Date of Birth</label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker onChange={(newDate) => setUserDateOfBirth(dayjs(newDate).format('MM/DD/YYYY'))} />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div className='datepicker'>
                        <div className='datepicker_content'>
                            <label htmlFor="start-date">Start Date</label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker onChange={(newDate) => setUserStartDate(dayjs(newDate).format('MM/DD/YYYY'))} />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                    </div>
                </div>

                <fieldset className="address">
                    <legend>Address</legend>

                    <div className='address_content'>
                        <label htmlFor="street">Street</label>
                        <input id="street" className='form_input' type="text" name="street" placeholder='Ex: 6 rue de la paix' onChange={() => setUserStreet(event.target.value)} />
                    </div>
                    <div className='address_content'>
                        <label htmlFor="city">City</label>
                        <input id="city" className='form_input' type="text" name="city" placeholder='Ex: Lyon' onChange={() => setUserCity(event.target.value)} />
                    </div>
                    <div className='address_content'>
                        <label htmlFor="state">State</label>
                        <Select
                            value={userState}
                            onChange={() => setUserState(event.target.textContent)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="" disabled>Select a state</MenuItem>
                            {states.map((state) => (
                                <MenuItem key={state.abbreviation} value={state.name}>
                                    {state.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>
                    <div className='address_content'>
                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" className='form_input' type="number" name="zipcode" placeholder='Ex: 38' onChange={() => setUserZipCode(event.target.value)} />
                    </div>
                </fieldset>

                <label htmlFor="department">Department</label>
                <Select
                            value={userDepartment}
                            onChange={() => setUserDepartment(event.target.textContent)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="" disabled>Select a department</MenuItem>
                            {department.map((department) => (
                                <MenuItem key={department.id} value={department.name}>
                                    {department.name}
                                </MenuItem>
                            ))}
                        </Select>
                <button className='form_button'>Save</button>
            </form>
            {isModalOpened && <Modal content={!isFormError ? "Employee Created !" : "There is an error with datas in form"} closeModal={closeModal} textStyle={"modal_content"} buttonStyle={"button_modal"} modaleStyle={"modal"} overlayStyle={"overlay"} />}
        </>
    )
};

export default Form;