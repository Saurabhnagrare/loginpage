import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Details = () => {

    const [logindata, setLogindata] = useState([]);
    console.log(logindata);

    const history = useNavigate();

    const [show, setShow] = useState(false);

    let todayDate = new Date().toISOString().slice(0, 10);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Birthday = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
            setLogindata(user);

            const userbirth = logindata.map((el, k) => {
                return el.date === todayDate;
            });
            if (userbirth) {
                setTimeout(() => {
                    console.log("ok");
                    handleShow();
                }, 3000)
            }
        }
    }

    const userlogout = () => {
        localStorage.removeItem("user_login");
        history("/");
    }

    useEffect(() => {
        Birthday();
    }, [])

    return (
        <>
            {
                logindata.length === 0 ? <h1 style={{ textAlign: "center" }}>"errorr page not found"</h1> :
                    <>
                        <h1>details page</h1>
                        <h1>{logindata[0].name}</h1>
                        <Button onClick={userlogout}>Log-out</Button>

                        {
                            logindata[0].date === todayDate ?
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{logindata[0].name}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Date is match Happy Birthday </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal> : ""

                        }


                    </>
            }
        </>
    )
}

export default Details
