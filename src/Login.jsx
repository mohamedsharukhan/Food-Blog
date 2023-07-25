


import { useForm } from 'react-hook-form'

import './Login.css'

import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function Login() {
    let responseData
    const { register, handleSubmit } = useForm();

    function getFormData(data) {

        axios.post('http://testing.rexcoders.in/api/auth/login', data).then((response) => {

            // console.log(response);

            // responseData = response.data.responseCode
            toast.success("Login success!")  
           
        }).catch((error)=>{toast.error("Login error !")})
    }
 
   
    return (
        <>

            <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">


                        <div className="modal-body">
                            <div className="contoainer loginPage">
                                <div className="row">
                                    <div className="col-12">
                                        <h1>Login</h1>
                                    </div>

                                    <form onSubmit={handleSubmit(getFormData)}>

                                        <div className="col-12 ">
                                            <input type="text" placeholder="username" {...register('username', { required: true, })} />

                                            {/* <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 9, minLength: 3,  pattern: /^\S+@\S+$/i})} /> */}
                                        </div>

                                        <div className="col-12 password">
                                            <input type="password" placeholder="password" {...register('password', { required: true })} />
                                        </div>

                                        <div className="col-12  ">
                                            <button type='submit' className='btnSubmit'>Submit</button>
                                        </div>

                                        <div className="col-12">
                                            <input type="checkbox" />
                                            <label htmlFor="">Remember</label>
                                        </div>

                                        <div className="col-12">
                                            <a href=""> Forget</a>
                                        </div>

                                        <div className="col-12">
                                            <a href=""> Join Us !</a>
                                        </div>

                                    </form>


                                </div>
                            </div>
                        </div>
                        <div className="modal-footer closeBtnDiv">
                            <button type="button" className="btn btn-secondary closeBtn" data-bs-dismiss="modal">Close</button>


                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}


export default Login