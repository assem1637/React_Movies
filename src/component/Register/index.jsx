import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Joi from 'joi';

export default function Register(){


    let navigate = useNavigate();

    let user = {
        first_name : '',
        last_name : '',
        age : 0,
        email : '',
        password : ''
    };

    let [userInfo , setUserInfo] = useState(user);

    let [error , setError] = useState(null);

    let [errorList , setErrorList] = useState(null);

    let [isLoading , setIsLoading] = useState(false);

    function getUserInfo(e){

        let copyUserInfo = {...userInfo}; // deep copy
        copyUserInfo[e.target.name] = e.target.value;
        setUserInfo(copyUserInfo);

    };


    async function submitRegister(e){

        e.preventDefault();
        setIsLoading(true);

        let {data} = await axios.post(`https://routeegypt.herokuapp.com/signup` , userInfo);


        let validation = validateionForm();

        if(validation.error) {

            setErrorList(validation.error.details);
            setIsLoading(false);

        } else {


            if(data.message === "success") {

                navigate('/login');
                setIsLoading(false);
    
            } else {
    
                setError(data.errors.email.message);
                setIsLoading(false);
    
            }


    }

        



    function validateionForm(){

        let schema = Joi.object({

            first_name : Joi.string().min(3).max(30).alphanum().required(),
            last_name : Joi.string().min(3).max(30).alphanum().required(),
            age : Joi.number().min(16).max(100).required(),
            email : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net' , 'ru' , 'org'] } }),
            password : Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))

        });

        return schema.validate(userInfo , {abortEarly: false});

    }


    }

    return(<>

        <div className="w-75 mx-auto text-light my-5">
            <h2 className="mb-3">Register Now</h2>
            {error ? <div className="alert alert-danger my-3">{error}</div> : ''}
            {errorList ? errorList.map((err,i)=> <div key={i} className="alert alert-danger my-3">{err.message}</div>)  : ''}
            <form onSubmit={submitRegister}>

                <label htmlFor="first_name">First_name</label>
                <input onChange={getUserInfo} type="text" name="first_name" id="first_name" className="form-control mb-3 bg-transparent text-light" />

                <label htmlFor="last_name">Last_name</label>
                <input onChange={getUserInfo} type="text" name="last_name" id="last_name" className="form-control mb-3 bg-transparent text-light" />

                <label htmlFor="age">Age</label>
                <input onChange={getUserInfo} type="number" name="age" id="age" className="form-control mb-3 bg-transparent text-light" />

                <label htmlFor="email">Email</label>
                <input onChange={getUserInfo} type="email" name="email" id="email" className="form-control mb-3 bg-transparent text-light" />

                <label htmlFor="password">Password</label>
                <input onChange={getUserInfo} type="password" name="password" id="password" className="form-control mb-3 bg-transparent text-light" />

                <button className="btn btn-info text-light">{isLoading ? <div><i className="fas fa-spinner fa-spin"></i></div> : 'Register'}</button>
            
            </form>
        </div>

    </>)

}