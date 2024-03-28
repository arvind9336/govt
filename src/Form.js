import React from "react";

function Form() {
  return (
    <div className="container">
      <div className="left">
        <label>Task Title</label>
        <input type="text" placeholder="Task Title" />
        <label>Start Date</label>
        <input type="text" placeholder="Project Starting Date" /> 
      </div>
      <div className="mid">
        <label>Task Discription</label>
        <input type="text" placeholder="Task Details" style={{width:'250px'}}/>
        {/* <input type='button' placeholder='Submit' style={{backgroundColor:'blue',padding:'5px',width:'150px',color:'black'}}/> */}
        <button
          style={{
            marginTop: "120px",
            border: "2px solid black",
            backgroundColor: "blue",
            color: "white",
            borderRadius: "10px",
            width: "117px",
            height: "38px",
            textAlign: "center",
            marginLeft:'15px',
          }}
        >
          Assign Task
        </button>
      </div>
      <div className="right">
        <label style={{marginRight:'45px'}}>Task Assigned By</label>
        <input type="text" placeholder="Task Assigned By" />
        <label style={{marginRight:'45px'}}>End Date</label>
        <input type="text" placeholder="Project End Date" />
      </div>
    </div>
  );
}
export default Form;