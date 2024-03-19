import React, { useState } from 'react';
import Register from '../../Components/Register/register';


const RegisterPage = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <Register handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} />
    );
};

export default RegisterPage;
