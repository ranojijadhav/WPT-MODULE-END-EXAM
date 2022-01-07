import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <>
      <Mycomponent />
    </>
  );

  function Mycomponent() {
    const appName = "MyChatApp";
    const studentname = "Ranoji Jadhav";
    const Studentid = "210940320099";

    const [message, setmessage] = useState("");
    const [list, setList] = useState([]);

    const handlemessage = (e) => {
      setMessage(e.target.value);
    };
  }

  return (
    <div>
      <div className="d-flex align-items-center mb-2 bg-secondary p-2">
        <h1 className="p-2 fs-2 text-light">
          <strong>{appName}</strong>
        </h1>

        <h6 className="text-light">
          <em>
            by {studentname} {Studentid}
          </em>
        </h6>
      </div>

      <div className="d-flex">
        <input
          type="text"
          className="form-control me-2 "
          value={message}
          placeholder="Lets chat here"
          onChange={handlemessage}
        />
        <input className="btn btn-secondary w-25" type="button" value="SEND" />
      </div>
    </div>
  );
}
