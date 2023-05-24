import React, { useState, useEffect } from "react";
import MainNav from "../../components/mainNav";
import DataTable from "../../components/tables/materialTable";

import Table from "react-bootstrap/Table";
// import {Link} from 'react-router-dom'

const MarkerTable = () => {
  const [MarkerData, setMarkerData] = React.useState([]);

  React.useEffect(() => {
    getPlayerData();
  }, []);

  const getPlayerData = async () => {
    const responceData = await fetch(
      "http://localhost:4112/players/MarkerTable"
    );
    const MarkerformData = await responceData.json();

    setMarkerData(MarkerformData);
    console.log(MarkerformData);
    // return ClubData;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted");

    // Additional logic for form submission
  };

  return (
    <>
      <React.Fragment>
        <div style={{ paddingTop: "7rem" }} className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="mt-2">user Data</h5>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>lname</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>lat</th>
                    <th>lng</th>
                    <th>sport</th>
                    <th>skill</th>
                    <th>days</th>
                    <th>from</th>
                    <th>to</th>
                    <th>city</th>
                    <th>fee</th>
                  </tr>
                </thead>
                <tbody>
                  {MarkerData &&
                    MarkerData.map((Mark, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{Mark.name}</td>
                        <td>{Mark.lname}</td>
                        <td>{Mark.phone}</td>
                        <td>{Mark.email}</td>
                        <td>{Mark.address}</td>
                        <td>{Mark.lat}</td>
                        <td>{Mark.lng}</td>
                        <td>{Mark.sport}</td>
                        <td>{Mark.skill}</td>
                        <td>{Mark.days}</td>
                        <td>{Mark._from}</td>
                        <td>{Mark._to}</td>
                        <td>{Mark.city}</td>
                        <td>{Mark.fee}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </React.Fragment>
    </>
  );
};

export default MarkerTable;
