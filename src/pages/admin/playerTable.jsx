import React, { useState, useEffect } from "react";
import MainNav from "../../components/mainNav";
import DataTable from "../../components/tables/materialTable";

import Table from "react-bootstrap/Table";
// import {Link} from 'react-router-dom'

const PlayerTable = () => {
  const [PlayerData, setPlayerData] = React.useState([]);

  React.useEffect(() => {
    getPlayerData();
  }, []);

  const getPlayerData = async () => {
    const responceData = await fetch(
      "http://localhost:4112/players/getClubDashboard"
    );
    const formData = await responceData.json();

    setPlayerData(formData);
    console.log(formData);
    // return ClubData;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted");

    // Additional logic for form submission
  };
  const arr = PlayerData;

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
                  {PlayerData &&
                    PlayerData.map((Clubs, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{Clubs.name}</td>
                        <td>{Clubs.lname}</td>
                        <td>{Clubs.phone}</td>
                        <td>{Clubs.email}</td>
                        <td>{Clubs.address}</td>
                        <td>{Clubs.lat}</td>
                        <td>{Clubs.lng}</td>
                        <td>{Clubs.sport}</td>
                        <td>{Clubs.skill}</td>
                        <td>{Clubs.days}</td>
                        <td>{Clubs._from}</td>
                        <td>{Clubs._to}</td>
                        <td>{Clubs.city}</td>
                        <td>{Clubs.fee}</td>
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

export default PlayerTable;
