import { useState } from 'react';
import Container from 'react-bootstrap/Container'
import { Row, Col } from "react-bootstrap";
import '../css/loginForm.css'

const ResetPass = () => {
    const [ password, setPassword] = useState("")
    const [ confirmPassword, setConfirmPassword] = useState("")
    const [ showConfirmPassword, setShowConfirmPassword] = useState("Show")
    const [ showPassword, setShowPassword] = useState("Show")
    const [ type, setType] = useState("password")
    const [ confirmType, setConfirmType] = useState("password")

    return (
        <Container>
        <Row className='login my-auto'>
            <Col lg={{ span: 5}}>
            <div className="logo mx-auto my-5">
                    <img src="../../asset/logo.png" alt="logo"/>
                </div>
                <h2 className="my-4 text-center" id="title">Reset password</h2>
                <p className="text-center mb-5">Create new password</p>
                <form action="/" method="get" className="form mx-auto">
                <div className="inputGroup mt-4">
                    <label> 
                        <span>Password</span>
                        <div className="password-container">
                            <input 
                                type={type} 
                                name="password" 
                                className="form-control" 
                                id="password" required 
                                placeholder="Enter password"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                value={password}
                            />
                            <p className="hide" id="showPassword"
                            onClick={() => {
                                showPassword === "Show" ? setShowPassword("Hide") : setShowPassword("Show")
                                showPassword === "Show" ? setType("text") : setType("password")
                            }}>{showPassword}</p>
                        </div>
                    </label>
                </div>
                <div className="inputGroup mt-4">
                    <label> 
                        <span>Re-enter Password</span>
                        <div className="password-container">
                            <input 
                                type={confirmType} 
                                name="confirm-password" 
                                className="form-control" 
                                id="confirm-password" required 
                                placeholder="Enter password"
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value)
                                }}
                                value={confirmPassword}
                            />
                            <p className="hide" id="showPassword" 
                            onClick={() => {
                                showConfirmPassword === "Show" ? setShowConfirmPassword("Hide") : setShowConfirmPassword("Show")
                                showConfirmPassword === "Show" ? setConfirmType("text") : setConfirmType("password")
                            }}>{showConfirmPassword}</p>
                        </div>
                    </label>
                </div>
                    <button type="submit" className="btn mt-4 py-3" id="btn">Update</button>
                </form> 
            </Col>
        </Row>
        </Container>  
    );
}

export default ResetPass;