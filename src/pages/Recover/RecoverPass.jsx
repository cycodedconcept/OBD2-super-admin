import { useState } from 'react';
import Container from 'react-bootstrap/Container'
import { Row, Col } from "react-bootstrap";
import '../css/loginForm.css'


const RecoverPass = () => {
    const [ email, setEmail] = useState("")

    return (
        <Container>
        <Row className='login my-auto'>
            <Col lg={{ span: 5}}>
            <div className="logo mx-auto my-5">
                    <img src="../../asset/logo.png" alt="logo"/>
                </div>
                <h2 className="my-4 text-center" id="title">Forgot password?</h2>
                <p className="text-center mb-5" >Enter your email address associated with your account <br className='d-none d-xl-block'/>to receive confirmation code</p>
                <form action="/" method="get" className="form mx-auto">
                    <div className="inputGroup">
                        <label>
                            <span>Enter company email address</span>
                            <input type="email" 
                                className="form-control" 
                                id="email" required 
                                name="email" 
                                placeholder="adebayouk@obdmanagement.com"
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                value={email}
                            />
                        </label>
                    </div>
                    <button type="submit" className="btn mt-4 py-2" id="btn">Continue</button>
                </form> 
            </Col>
        </Row>
        </Container>  
    );
}

export default RecoverPass;