import { useEffect, useState } from "react";
import "./App.css";
import options from './dropDownValue.json'
import Select from 'react-select'
import ViewAll from "./pages/ViewAll";
import { Link } from "react-router-dom";
function App() {
  const [name, setName] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(Boolean);
  let [selectedOptions, setSelectedOptions] = useState([]);
  let [isValidationToShow, setIsValidationToShow] = useState("");
  let [checkboxValidation, setcheckboxValidation] = useState(Boolean);
  let [selectorValidation, setselectorValidation] = useState(Boolean);
  useEffect(() => {
    if (name && name.length) {
      setIsValidationToShow(false);
      return;
    }
  }, [name]);
  const onCheckBoxChange = (event)  =>{
    if(checkboxValidation) {
      setcheckboxValidation(false)
    }
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    if (!name && name.length === 0) {
      setIsValidationToShow(true);
    }
    if(!agreeTerms) {
      setcheckboxValidation(true)
    }
    if(selectedOptions.length === 0) {
      setselectorValidation(true)
    }
    const dataModel = [{
      name:name,
      selectors: selectedOptions,
      isTermsAccepted: agreeTerms
    }]
    console.log(dataModel);
  };
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src="/assets/images/img-01.png" alt="IMG" />
          </div>

          <form className="login100-form validate-form" onSubmit={onSubmit}>
            <span className="login100-form-title">Please enter your name and pick the Sectors</span>
            <div
              className={`wrap-input100 validate-input ${
                isValidationToShow ? "alert-validate" : ""
              }`}
              data-validate="Name field is required"
            >
              <input
                className="input100"
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                onBlur={() => (isValidationToShow = true)}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>
            <div className={`wrap-input100 validate-input ${selectorValidation ? "alert-validate" : ""  }`}
              data-validate="Selector field is required"
            >
              <Select className=""  closeMenuOnSelect={false} isMulti options={options} onChange={(e) =>{setSelectedOptions(e); setselectorValidation(false)}} isOptionDisabled={() => selectedOptions.length >= 5}/>
              <span className="focus-input100"></span>
            </div>
            <div className={` validate-input ${checkboxValidation ? "alert-validate" : ""}`} data-validate="Agree to terms field is required">
              <div className="text-center p-t-12">
                <input onChange={(e) =>{ setAgreeTerms(!agreeTerms);onCheckBoxChange(e)}} type="checkbox" className="form-check-input"  /> <span className="txt1">Agree to terms</span> 
              </div>
            </div>
            
            <div className="container-login100-form-btn">
              <button className="login100-form-btn">Save</button>
            </div>

            <div className="text-center p-t-12"></div>
            <div className="text-center p-t-136">
              <Link  className="txt2"  to='view-all'>
                View All Submitted Result 
                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
