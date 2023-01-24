import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  './ViewAll.css'
function ViewAll() {
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <button><Link className="goBack" to={'/'}> <i className="fa fa-long-arrow-left m-l-5" aria-hidden="true"></i></Link></button>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Sectors</th>
                            <th>Terms And Condition</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                           <h2>Coming Soon</h2>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ViewAll;
