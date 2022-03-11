import cors from "cors";
import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import style from "./Login.module.css";
export default function Login() {
    // validation error
    let [errorList, setErrorList] = useState([]);
    // userDataObject
    let [user, setUser] = useState({
        email: "",
        password: ""
    });

    // submitForm
    async function submitFormData(e) {
        e.preventDefault();
        let validationResult = validateForm();
        if (validationResult.error) {
            setErrorList(validationResult.error.details);
            alert("validation error");
        }
        else {
            // send api
            let { data } = await axios.post("api/v1/users/login", user);
            console.log(data);
            if (user.email == data.user.email) {
                alert("login success");
                goToHome();
            }
            else {
                alert("wrong")
            }
        }

    }

    // getInputData
    function getFormValues(e) {
        // deep copy
        let myUser = { ...user };
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
        console.log(myUser);
    }
    // validation
    function validateForm() {
        const schema = Joi.object({
            email: Joi.string().required(),
            password: Joi.string().required()
        })
        return schema.validate(user, { abortEarly: false });
    }
    // navigate to home page
    const navigate = useNavigate();
    function goToHome() {
        let path = "/Home";
        navigate(path);
    }
    return (
        <>

            <div className='py-5 '>
                <div >
                    <div className={`${style.infoDiv} text-center w-75`}>
                        <h1 className='fs-5 fw-bold'>Rescounts</h1>
                        <p className={`${style.p1Size} ms-4`}>Your every meal app</p>
                        <h2 className='fs-5 fw-bold'>Login</h2>
                        <p className={`${style.p2Size}`}>Add your details to login</p>
                    </div>
                    {errorList.map((error, index) => <div key={index} className={`${style.error}alert alert-danger p-2 mb-2`}>{error.message}</div>)}
                    <form onSubmit={submitFormData} className="text-center">

                        <div className="row mb-3 py-2">

                            <div className="col-sm-10">
                                <input onChange={getFormValues} type="email" className="form-control" name='email' placeholder='Your Email'></input>
                            </div>
                        </div>
                        <div className="row mb-3 py-2">

                            <div className="col-sm-10">
                                <input onChange={getFormValues} type="password" className="form-control" name='password' placeholder='Password'></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-secondary w-100">
                                    login
                                </button>
                            </div>
                        </div>
                        <div className={`${style.loginMethods} text-center w-75`}>
                            <p className={`fs-6 py-2`}>Forgot your password?</p>
                            <p className="fs-6">or login with</p>
                        </div>

                        <div className="row">
                            <div className="col-sm-10">
                                <button type="submit" className={`${style.fcBtn} btn w-100`}>
                                    <i class="fa fa-facebook pe-3"></i>
                                    login with facebook
                                </button>
                            </div>
                        </div>
                        <div className="row py-3">
                            <div className="col-sm-10">
                                <button type="submit" className={`${style.googleBtn} btn w-100`}>
                                    <i class="fa fa-google pe-3"></i>
                                    login with google
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-10">
                                <button type="submit" className={`${style.appleBtn} btn w-100`}>
                                    <i className="fa fa-apple pe-3"></i>
                                    login with apple
                                </button>
                            </div>
                        </div>
                        <div className={`${style.cookiesDiv} text-center py-5 w-75`}>
                            <p className="text-secondary" >Do not have an Account ?<span className='fw-bold text-black'>Sign Up</span></p>
                            <p className="text-secondary" >By proceeding ,you agree to our <a className="text-secondary" href="">Terms of Use</a> and confirm <br /> you have read our <a className="text-secondary" href="">Privacy and Cookies statement</a></p>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
