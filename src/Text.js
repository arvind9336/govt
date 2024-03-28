import React from "react";

function Text() {
  return (
    <div className="text">
      <textarea
        placeholder="Enter Some Text Here........"
        style={{
          width: "600px",
          marginTop: "70px",
          height: "200px",
          textAlign: "top",
        }}
      />
      <br />
      <button style={{ marginTop: "90px",backgroundColor:'blue',borde:'2px solid black',borderRadius:'5px' }}>Add Additional Notes</button>
    </div>
  );
}

export default Text;