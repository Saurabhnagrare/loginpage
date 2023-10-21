import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Singin from './Singin';
import { useNavigate } from 'react-router-dom';

const Loginsinging = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    });
    console.log(inpval);

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {

        // console.log(e.target.value);
        const { value, name } = e.target;
        // console.log(value,name);

        setInpval(() => {
            return {

                ...inpval,
                [name]: value

            }
        });
    };

    const addData = (e) => {
        e.preventDefault();
        //   console.log(inpval);

        const getuserArr = localStorage.getItem("user");
        console.log(getuserArr);

        const { email, password } = inpval;


        if (email === "") {
            alert("email field is required");
        }
        else if (!email.includes("@")) {
            alert("plese eneter valid email addraess");
        }
        else if (password === "") {
            alert("passwoed field is required");
        }
        else if (password.length < 5) {
            alert("passwoed should greater than 5");
        } else {
            // console.log("data added succesfully");
            // localStorage.setItem("user", JSON.stringify([...data, inpval]));
            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password;
                });

                if (userlogin.length === 0) {
                    alert("invalid details");
                } else {
                    console.log("user login success");
                    localStorage.setItem("user_login", JSON.stringify(getuserArr));
                    history("/details");
                }
            }
        };
    };


    return (
        <>
            <div className='container mt-5'>
                <section className='d-flex align-items-center'>
                    <Singin />
                    <div className='left_data col-lg-7 ' >
                        <h3 className='text-center col-lg-7 mx-auto'>Sign In</h3>

                        <div >
                            <Form className=''>

                                <Form.Group className="mb-3 col-lg-7 mx-auto" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name='email' type="email" placeholder="Enter Email" onChange={getdata} />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3 col-lg-7 mx-auto" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name='password' type="password" placeholder="Password" onChange={getdata} />
                                </Form.Group>
                                <Form.Group className="mb-3 col-lg-7 mx-auto" controlId="formBasicPassword">
                                    <Button style={{ background: "#385a64" }} onClick={addData} variant="primary" type="submit" className='w-100'>
                                        Submit
                                    </Button>
                                    <p className='text-center py-2'>Already have an acount <span style={{ color: "rgb(255, 24, 46)", cursor: "pointer" }}>Sign In</span>.</p>
                                </Form.Group>

                            </Form>

                        </div>

                    </div>
                </section>
            </div>
        </>
    );
};

export default Loginsinging
