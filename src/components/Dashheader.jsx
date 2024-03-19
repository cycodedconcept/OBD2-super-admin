import { useState } from "react";
import { Form } from 'react-bootstrap';
import { Search } from "react-bootstrap-icons";
import '../components/css/dashheader.css'

const DashHeader = ({ page, para }) => {
    const [search, setSearch] = useState("")
    return ( 
        <div className="header mt-3 ms-lg-3">
            <div className="d-lg-flex justify-content-between align-items-center ">
                <div>
                    <h1>{page}</h1>
                    <p>Here are the list of {para} on the platform</p>
                </div>
                <div className="search-bar">
                    <form 
                        action="#"
                        method="POST"
                        className="search-form mb-3 mb-lg-0"
                    >
                        <input 
                            type="text" 
                            name="query" 
                            className="form-control" 
                            id="query" required 
                            placeholder="Search"
                            onChange={(e) => {
                                setSearch(e.target.value)
                            }}
                            value={search}
                        />
                        <button type="submit" >
                            <Search />
                        </button>
                    </form>
                </div>
            </div>
            <div className="dashh w-100"></div>
            <Form.Select aria-label="filter" className="filter py-2">
                <option>Filter by date</option>
                <option value="today">Today</option>
                <option value="month">This month</option>
                <option value="year">This year</option>
            </Form.Select>
        </div>
    );
}

export default DashHeader;