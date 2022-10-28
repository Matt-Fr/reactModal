import React from "react";
import "./Modal.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({ message, openModal, setOpenModal }) => {
  return (
    openModal && (
      <div
        className="background"
        onClick={() => {
          setOpenModal(false);
        }}
      >
        <div
          className="background-Container"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <h3 className="background-Container-title">{message}</h3>
          <AiFillCloseCircle className="closeIcon" />
        </div>
      </div>
    )
  );
};

export default Modal;
