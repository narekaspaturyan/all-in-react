import React, { useState } from "react";

function Select({
  array = [
    { title: "Male", value: "male" },
    { title: "Female", value: "female" },
  ],
}) {
  const [gender, setGender] = useState("");

  return (
    <div
      style={{
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "480px",
        height: "54px",
        padding: " 0 20px 0 10px",
        border: "1px solid rgba(134, 117, 79, 0.2)",
        borderRadius: "6px",
      }}
    >
      <select
        onChange={(e) => setGender(e.target.value)}
        style={{
          width: "460px",
          height: "52px",
          border: "none",
          outline: "none",
          color: "#777",
          fontSize: "14px",
        }}
      >
        <option value="" disabled defaultValue>
          Gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        {/* {array.map((el) => {
          return (
            <option key={uid()} value={el.value}>
              {el.title}
            </option>
          );
        })} */}
      </select>
    </div>
  );
}

export default Select;
