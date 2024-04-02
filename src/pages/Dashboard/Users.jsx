import { Tabs, Tab } from "react-bootstrap";
import DashHeader from "../../components/Dashheader";
import '../css/tabs.css'
import Tables from "../../components/Tables";

const Users = () => {
    return ( 
        <>
        <DashHeader page={'Users'} para={'OBD users'} />
        <Tabs
        id="user-tab"
        defaultActiveKey="users"
        className="my-4 ms-lg-3"
        >
            <Tab eventKey="users" title="All Users">
                <Tables />
            </Tab>
            <Tab eventKey="active" title="Active Users">
                <Tables />
            </Tab>
            <Tab eventKey="inactive" title="Inactive Users">
                <Tables />
            </Tab>
        </Tabs>
        </>
    );
}












export default Users;