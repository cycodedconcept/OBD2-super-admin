import Container from 'react-bootstrap/Container'
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../loginForm.css'

const PassSuccess = () => {
    return ( 
        <Container>
        <Row className='login my-auto'>
            <Col lg={{ span: 5}}>
                <div className="logo mx-auto my-5">
                    <img src="../../asset/logo.png" alt="logo"/>
                </div>
                <div className="check mx-auto my-5">
                    <img src="../../asset/check-circle.png" alt="logo"/>
                </div>
                <h2 className="my-4 text-center" id="title">Successfully changed</h2>
                <p className="text-center mb-5">Your password has been sucessfully changed you can now proceed to login.</p>
                <button type="submit" className="btn mt-4 py-2" id="btn">
                    <Link to="/">Back to log-in</Link>
                </button>
            </Col>
        </Row>
        </Container> 
    );
}
 
export default PassSuccess;