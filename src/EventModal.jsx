function EventModal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modal-container">
        <div className="title">
          <p>Create an Event</p>
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="imagePick"></div>
        <div className="body"></div>
      </div>
    </div>
  );
}
export default EventModal;
