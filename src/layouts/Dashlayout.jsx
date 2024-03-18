import { NavLink, Outlet } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import './dashlayout.css'

const Dashlayout = () => {
    return ( 
        <div className="dashlay d-lg-flex px-2 px-lg-0">
            <aside className="sidebar">
                <Navbar expand="lg">
                    <div className="link d-lg-none">
                        <img src="../asset/Frame 20614.png" alt="logo" />
                        <h3><span>obd</span> manger</h3>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <nav>
                            <div className="link d-none d-lg-block">
                                <img src="../asset/Frame 20614.png" alt="logo" />
                                <h3><span>obd</span> manger</h3>
                            </div>
                            <div className="d-flex flex-column justify-content-between links">
                                <div>
                                    <div className="link">
                                            <img src="../asset/icons/pie-chart.png" alt="icon" />
                                            <h4>dashboard</h4>
                                    </div>
                                    <NavLink to="/">
                                        <div className="link">
                                            <img src="../asset/icons/person_outline.png" alt="icon" />
                                            <h4>users</h4>
                                        </div>
                                    </NavLink>
                                    <NavLink to="/">
                                        <div className="link">
                                            <img src="../asset/icons/people_alt.png" alt="icon" />
                                            <h4>meco & towler</h4>
                                        </div>
                                    </NavLink>
                                    <NavLink to="/">
                                        <div className="link">
                                            <img src="../asset/icons/people_alt.png" alt="icon"/>
                                            <h4>flit managers</h4>
                                        </div>
                                    </NavLink>
                                    <NavLink to="/">
                                        <div className="link">
                                            <img src="../asset/icons/memory.png" alt="icon" />
                                            <h4><span>obd</span> device</h4>
                                        </div>
                                    </NavLink>
                                    <NavLink to="/">
                                        <div className="link">
                                            <img src="../asset/icons/shopping_cart.png" alt="icon" />
                                            <h4>products</h4>
                                        </div>
                                    </NavLink>
                                    <NavLink to="/">
                                        <div className="link">
                                            <img src="../asset/icons/person_pin.png" alt="icon" />
                                            <h4>suppliers</h4>
                                        </div>
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink to="/">
                                        <div className="link mb-3">
                                            <img src="../asset/icons/settings.png" alt="icon" />
                                            <h4>Settings</h4>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="dash mx-auto"></div>
                            <NavLink to="/">
                                <div className="link">
                                    <h4>users</h4>
                                </div>
                            </NavLink>
                        </nav>
                    </Navbar.Collapse>
                </Navbar>
            </aside>
            <main>
                <Outlet />
                <h1>hello</h1>
            </main>
        </div>
    );
}
 
export default Dashlayout;