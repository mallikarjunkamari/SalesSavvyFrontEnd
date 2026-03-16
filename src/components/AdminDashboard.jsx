import React, { useState } from "react";
import CustomModal from "./CustomModal";
import "./assets/styles.css";

export default function AdminDashboard() {

const [modalType, setModalType] = useState(null);
const [response, setResponse] = useState(null);

const cardData = [
{
title: "Overall Business",
description: "View total revenue since inception",
team: "Analytics",
modalType: "overallBusiness",
},
// You can add more cards here
];

const handleOverallBusiness = async () => {
try {


  const response = await fetch(
    "http://localhost:9090/admin/business/overall",
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.ok) {
    const data = await response.json();

    setResponse({ overallBusiness: data });
    setModalType("overallBusiness");

  } else {

    const errorMessage = await response.text();

    setResponse({
      message: `Error: ${errorMessage}`,
    });

    setModalType("response");
  }

} catch (error) {

  console.error("Error fetching overall business details:", error);

  setResponse({
    message: "Error: Something went wrong",
  });

  setModalType("response");
}


};

return ( <div className="admin-dashboard">

```
  <main className="dashboard-content">

    <div className="cards-grid">

      {cardData.map((card, index) => (

        <div
          key={index}
          className="card"
          onClick={() => {
            setModalType(card.modalType);
            setResponse(null);
          }}
        >

          <div className="card-content">

            <h3 className="card-title">{card.title}</h3>

            <p className="card-description">{card.description}</p>

            <span className="card-team">
              <p className="teams">Team:</p> {card.team}
            </span>

          </div>

        </div>

      ))}

    </div>

  </main>

  {modalType && (
    <CustomModal
      modalType={modalType}
      onClose={() => {
        setModalType(null);
        setResponse(null);
      }}
      onSubmit={() => {

        if (modalType === "overallBusiness") {
          handleOverallBusiness();
        }

      }}
      response={response}
    />
  )}

</div>

);
}