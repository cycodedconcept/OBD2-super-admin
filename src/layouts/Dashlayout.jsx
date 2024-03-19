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
                            <div className="logo d-none d-lg-flex justify-content-between ms-3 w-100">
                                <img src="../asset/Frame 20614.png" alt="logo" className="img-fluid" />
                                <h3>obd manger</h3>
                            </div>
                            <div className="d-flex flex-column justify-content-between links">
                                <div>
                                    <div className="link">
                                        <img src="../asset/icons/pie-chart.png" alt="icon" />
                                        <p>dashboard</p>
                                    </div>
                                    <NavLink to="users" className="link">
                                        <img src="../asset/icons/person_outline.png" alt="icon" />
                                        <p>users</p>
                                    </NavLink>
                                    <NavLink to="meco" className="link">
                                        <img src="../asset/icons/people_alt.png" alt="icon" />
                                        <p>meco & towler</p>
                                    </NavLink>
                                    <NavLink to="flits" className="link">
                                        <img src="../asset/icons/people_alt.png" alt="icon"/>
                                        <p>flit managers</p>
                                    </NavLink>
                                    <NavLink to="devices" className="link">
                                        <img src="../asset/icons/memory.png" alt="icon" />
                                        <p><span>obd</span> device</p>
                                    </NavLink>
                                    <NavLink to="products" className="link">
                                        <img src="../asset/icons/shopping_cart.png" alt="icon" />
                                        <p>products</p>
                                    </NavLink>
                                    <NavLink to="suppliers" className="link">
                                        <img src="../asset/icons/person_pin.png" alt="icon" />
                                        <p>suppliers</p>
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink to="settings" className="link mb-3">
                                            <img src="../asset/icons/settings.png" alt="icon" />
                                            <p>Settings</p>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="dash mx-auto"></div>
                            <NavLink to="/" className="link mt-2">
                                <p>users</p>
                            </NavLink>
                        </nav>
                    </Navbar.Collapse>
                </Navbar>
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
 
export default Dashlayout;