import { NavLink, Outlet } from "react-router-dom";
import './dashlayout.css'

const Dashlayout = () => {
    return ( 
        <div className="dashlay">
            <aside className="sidebar">
                <nav className="">
                    <div className="link">
                        <img src="../asset/logo.png" alt="logo" />
                        <h3><span>obd</span> manger</h3>
                    </div>
                    <div className="d-flex flex-column justify-content-between links">
                        <div>
                            <div className="link">
                                    <img src="../asset/logo.png" alt="logo" />
                                    <h4>dashboard</h4>
                            </div>
                            <NavLink to="/">
                                <div className="link">
                                    <img src="../asset/logo.png" alt="logo" />
                                    <h4>users</h4>
                                </div>
                            </NavLink>
                            <NavLink to="/">
                                <div className="link">
                                    <img src="../asset/logo.png" alt="logo" />
                                    <h4>meco & towler</h4>
                                </div>
                            </NavLink>
                            <NavLink to="/">
                                <div className="link">
                                    <img src="../asset/logo.png" alt="logo" />
                                    <h4>flit managers</h4>
                                </div>
                            </NavLink>
                            <NavLink to="/">
                                <div className="link">
                                    <img src="../asset/logo.png" alt="logo" />
                                    <h4><span>obd</span> device</h4>
                                </div>
                            </NavLink>
                            <NavLink to="/">
                                <div className="link">
                                    <img src="../asset/logo.png" alt="logo" />
                                    <h4>products</h4>
                                </div>
                            </NavLink>
                            <NavLink to="/">
                                <div className="link">
                                    <img src="../asset/logo.png" alt="logo" />
                                    <h4>suppliers</h4>
                                </div>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/">
                                <div className="link mb-3">
                                    <img src="../asset/logo.png" alt="logo" />
                                    <h4>Settings</h4>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="dash mx-auto"></div>
                    <NavLink to="/">
                        <div className="link">
                            <img src="../asset/logo.png" alt="logo" />
                            <h4>users</h4>
                        </div>
                    </NavLink>
                </nav>
            </aside>
            <main>
                <Outlet />
                <h1>hello</h1>
            </main>
        </div>
    );
}
 
export default Dashlayout;