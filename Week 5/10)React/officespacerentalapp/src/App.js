import React from "react";

function App() {

  // Office Space Object
  const office = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  // Multiple Office Spaces
  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore"
    },
    {
      Name: "WeWork",
      Rent: 65000,
      Address: "Hyderabad"
    }
  ];

  return (

    <div style={{ marginLeft: "80px" }}>

      <h1>Office Space , at Affordable Range</h1>

      <img
        src="/office.jpg"
        alt="Office Space"
        width="300"
      />

      <hr />

      {officeList.map((item, index) => (

        <div key={index}>

          <h2>Name: {item.Name}</h2>

          <h3
            style={{
              color: item.Rent <= 60000 ? "red" : "green"
            }}
          >
            Rent: Rs. {item.Rent}
          </h3>

          <h3>
            Address: {item.Address}
          </h3>

          <br />

        </div>

      ))}

    </div>

  );

}

export default App;