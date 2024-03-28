import React from "react";

function Solved() {
  return (
    <div>
      <textarea
        placeholder="Selected Challenges Type........"
        style={{
          width: "600px",
          marginTop: "70px",
          height: "60px",
          textAlign: "top",
        }}
      />
      <br />
      <textarea
        placeholder="Solution text........"
        style={{
          width: "600px",
          marginTop: "70px",
          height: "200px",
          textAlign: "top",
        }}
      />
      <br />
      <input type="text" placeholder="Solved By Name" style={{marginRight:"500px", width:'130px', textAlign:'center'    }}/>
      <input type="text" placeholder="On Date" style={{width:'80px', textAlign:'center'}}/>
      <br />
      <button style={{marginBottom:"45px", border:"2px solid black", borderRadius:"5px", backgroundColor:"blue"}}>Submit</button>   
    </div>
  );
}
export default Solved;