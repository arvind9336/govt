import React, { useEffect, useState } from "react";

export default function Project() {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    getEmployee();
  }, []);
  const getEmployee = async () => {
    // let result = await fetch("http://localhost:3600/products");
    // result = await result.json();
    // setEmployee(result);
  };
  return (
    <div className="list">
      <h3>All Project Details</h3>
      <ul>
        <li>S No.</li>
        <li>Project Title</li>
        <li>Project/Work Details</li>
        <li>Start Date</li>
        <li>End Date</li>
        <li>Assined By</li>
        <li>Project Status</li>
        <li>Operation</li>
      </ul>
      {
        employee.length>0 ? employee.map((item,index)=>
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.project_title}</li>
            <li>{item.project_details}</li>
            <li>{item.start_date}</li>
            <li>{item.end_date}</li>
            <li>{item.assined_by}</li>
            <li>{item.project_status}</li>
            <li>
              <button>remove</button>
            </li>
          </ul>
        )
        :
        <h3>No Result Found</h3>
      }
    </div>
  );
}