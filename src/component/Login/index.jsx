import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Joi from 'joi';

export default function Login(props){


    let navigate = useNavigate();

    let user = {
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


    async function submitLogin(e){

        e.preventDefault();
        setIsLoading(true);

        let {data} = await axios.post(`https://routeegypt.herokuapp.com/signin` , userInfo);


        let validation = validateionForm();


        if(validation.error) {

            setErrorList(validation.error.details);
            setIsLoading(false);

        }else {

            if(data.message === "success") {

                localStorage.setItem('userToken' , data.token)
                navigate('/home');
                props.saveData();
                setIsLoading(false);
    
            } else {
    
                setError(data.message);
                setIsLoading(false);
    
            }
            
        }


    }

    function validateionForm(){

        let schema = Joi.object({

            email : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net' , 'ru' , 'org'] } }),
            password : Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))

        });

        return schema.validate(userInfo , {abortEarly: false});

    }


    return(<>

        <div className="w-75 mx-auto text-light my-5">
            <h2 className="mb-3">Login Now</h2>
            {error ? <div className="alert alert-danger my-3">{error}</div> : ''}
            {errorList ? errorList.map((err,i)=> <div key={i} className="alert alert-danger my-3">{err.message}</div>)  : ''}
            <form onSubmit={submitLogin}>

                <label htmlFor="email">Email</label>
                <input onChange={getUserInfo} type="email" name="email" id="email" className="form-control mb-3 bg-transparent text-light" />

                <label htmlFor="password">Password</label>
                <input onChange={getUserInfo} type="password" name="password" id="password" className="form-control mb-3 bg-transparent text-light" />

                <button className="btn btn-info text-light">{isLoading ? <div><i className="fas fa-spinner fa-spin"></i></div> : 'Login'}</button>
            
            </form>
        </div>

    </>)

}