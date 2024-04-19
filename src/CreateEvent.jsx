import meet from "./assets/meet.png";
import EventModal from "./EventModal";
import React, { useState } from "react";
const pStyle = {
  fontSize: "20px",
};
function CreateEventCard() {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(true);
    console.log("openModal");
  };
  return (
    <>
      {openModal && <EventModal closeModal={setOpenModal} />}
      <span>&nbsp;</span>
      <p></p>

      <div className="create-event-card">
        <div className="head-texts">
          <p style={pStyle}>Events</p>
          <button onClick={handleModal}>Create</button>
        </div>
        <hr />
        <span>&nbsp;</span>
        <img src={meet} alt="" />
        <h3>New Event</h3>
        <p>Broadcast to a larger audience using EMS for greater efficiency.</p>
        <p></p>
      </div>
    </>
  );
}
export default CreateEventCard;
