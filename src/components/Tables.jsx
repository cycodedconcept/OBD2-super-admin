import { Table } from "react-bootstrap";
import './css/tables.css'

const Tables = () => {
    return ( 
        <Table className="ms-lg-3">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email Address</th>
                    <th>Phone Number</th>
                    <th>Status</th>
                    <th>Driver's License</th>
                    <th>Started Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Will Smith Black</td>
                    <td>altenwerth.ansel@sawayn.com</td>
                    <td>+234-012-345-6789</td>
                    <td>
                        <div className= {"activee"}>
                            <div className={"dot-" + "activee"}></div>
                            active
                        </div>
                        </td>
                    <td>FP1223849371</td>
                    <td>May 19, 2020 </td>
                </tr>
                <tr>
                    <td>Will Smith Black</td>
                    <td>altenwerth.ansel@sawayn.com</td>
                    <td>+234-012-345-6789</td>
                    <td>
                        <div className={"inactivee"}>
                        <div className={"dot-" + "inactivee"}></div>
                        inactive
                        </div>
                    </td>
                    <td>FP1223849371</td>
                    <td>May 19, 2020 </td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Tables;