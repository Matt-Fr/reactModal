import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import Modal from "./lib/Modal";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setOpenModal(!openModal);
        }}
      >
        Open the modal!!
      </button>
      <Modal
        message="Employee Created"
        openModal={openModal}
        setOpenModal={setOpenModal}
      ></Modal>
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
