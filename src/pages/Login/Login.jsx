import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import { Row, Col } from "react-bootstrap";
import '../css/loginForm.css'

const Login = () => {

    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")
    const [ showPassword, setShowPassword] = useState("Show")
    const [ type, setType] = useState("password")

    return (
        <Container>
        <Row className='login my-auto'>
            <Col lg={{ span: 5}}>
                <div className="logo mx-auto my-5">
                    <img src="../asset/logo.png" alt="logo" className=""/>
                </div>
                <h2 className="mb-4 text-center" id="title">Login to  your account</h2>
                <form action="/" method="get" className="form mx-auto">
                    <div className="inputGroup">
                        <label className='mb-3'>
                            <span>Email Address</span>
                            <input type="email" 
                                className="form-control" 
                                id="email" required name="email" 
                                placeholder="adebayouk@obdmanagement.com" 
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                value={email}
                            />
                        </label>
                    </div>
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
                            <p className="hide" id="showPassword" onClick={() => {
                                showPassword === "Show" ? setShowPassword("Hide") : setShowPassword("Show")
                                showPassword === "Show" ? setType("text") : setType("password")
                            }}>
                                {showPassword}
                            </p>
                            </div>
                        </label>
                    </div>
                    <div className="mt-3" id="remPass">
                        <div>
                            <input type="checkbox" className="me-1"/>
                            <label htmlFor="remPass">Remember password</label>
                        </div>
                        <div><Link to="recover-password">Forgot Password</Link></div>
                    </div>
                    <button type="submit" className="btn mt-4 py-3" id="btn">Login</button>
                </form> 
            </Col>
        </Row>
        </Container>
    )
}

export default Login
