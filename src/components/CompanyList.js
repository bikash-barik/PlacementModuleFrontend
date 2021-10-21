import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveCompanys,
} from "../actions/company";
import { Link } from "react-router-dom";


const CompanysList = () => {
    const [currentCompany, setCurrentCompany] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    // const [searchTitle, setSearchTitle] = useState("");
  
    const companys = useSelector(state => state.companys);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(retrieveCompanys());
    }, []);
  
    // const onChangeSearchTitle = e => {
    //   const searchTitle = e.target.value;
    //   setSearchTitle(searchTitle);
    // };
  
    // const refreshData = () => {
    //   setCurrentCompany(null);
    //   setCurrentIndex(-1);
    // };
  
    const setActiveCompany = (company, index) => {
      setCurrentCompany(company);
      setCurrentIndex(index);
    };
  
    // const removeAllCompanys = () => {
    //   dispatch(deleteAllCompanys())
    //     .then(response => {
    //       console.log(response);
    //       refreshData();
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // };
  
    // const findByTitle = () => {
    //   refreshData();
    //   dispatch(findCompanysByTitle(searchTitle));
    // };
  
    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            {/* <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={onChangeSearchTitle}
            /> */}
            {/* <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={findByTitle}
              >
                Search
              </button>
            </div> */}
          </div>
        </div>
        <div className="col-md-6">
          <h4>Companys List</h4>
  
          <ul className="list-group">
            {companys &&
              companys.map((company, index) => (
                <li
                  className={
                    "list-group-item " + (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActiveCompany(company, index)}
                  key={index}
                >
                  {company.comName}
                  
                </li>
              ))}
          </ul>
  
          {/* <button
            className="m-3 btn btn-sm btn-danger"
            onClick={removeAllCompanys}
          >
            Remove All
          </button> */}
        </div>
        <div className="col-md-6">
          {currentCompany ? (
            <div>
              <h4>Company</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentCompany.comName}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentCompany.comAddress}
              </div>
              {/* <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentCompany.published ? "Published" : "Pending"}
              </div> */}
  
              <Link
                to={"/companys/" + currentCompany.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Company...</p>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default CompanysList;
  