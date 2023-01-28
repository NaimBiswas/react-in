import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiEndPoints from "./index.constant";
import "./ViewAll.css";
function ViewAll() {
  const [allDetails, setAllDetails] = useState([]);
  const [showLoader, setshowLoader] = useState(true);
  useEffect(() => {
    setshowLoader(true)
    axios.get(apiEndPoints.api + "details").then((data) => {
      setshowLoader(false)
        setAllDetails(data.data?.data)
    });
  }, []);
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 scrollbar-hidden tableView">
          <button>
            <Link className="goBack" to={"/"}>
              <i className="fa fa-long-arrow-left m-l-5" aria-hidden="true"></i>
            </Link>
          </button>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Sectors</th>
                <th>Terms And Condition</th>
                <th>Last Update</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allDetails.length > 0 ? (
                allDetails?.map((_details) => (
                  <>
                    <tr key={_details._id}>
                      <td>{_details.name}</td>
                      <td>{
                            _details.selectors.map(_selector => (
                                <span className="selectors">{_selector.value}</span>
                            ))
                        
                        }</td>
                      <td>
                        {_details.isTermsAccepted ? "Accepted" : "Not Accepted"}
                      </td>
                      <td>
                        {moment(_details?.updatedAt).format("YYYY/MM/DD")}
                      </td>
                      <td>
                        <Link to={`/${_details._id}`}>
                          <i
                            className="fa fa-pencil  m-l-5 editIcon"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </td>
                    </tr>
                  </>
                ))
              ) : (
                <>
                  <tr className="noRecord">
                    <td className="TableBorder"></td>
                    <td className="TableBorder"></td>
                    <td className="TableBorder color">                  
                    <div className="loader showLoader"></div>
                      {showLoader? "":"No Record Found"}
                    </td>
                    <td className="TableBorder"></td>
                    <td className="TableBorder"></td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewAll;
