function EventModal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modal-container">
        <div className="title">
          <p>Create an Event</p>
          <button onClick={() => closeModal(false)} className="close-btn">
            X
          </button>
        </div>
        <div className="imagePick">
          <span>&nbsp;</span>
          <h2>Camera</h2>
          <h3>Upload a cover image</h3>
          <p>
            Images help to display the message better, hence greater audience
          </p>
        </div>
        <div className="body">
          <form action="">
            <label htmlFor="event_format">Event Format</label>
            <select name="event_format" id="" className="select-style">
              <option value="">Select</option>
              <option value="">Concert</option>
              <option value="">Corporate</option>
            </select>
            <label htmlFor="event_name">Event Name</label>
            <input type="text" name="event_name" />
            <label htmlFor="timezone">Timezone</label>
            <input type="datetime-local" name="timezone" id="" />
            <label htmlFor="event_description">Description</label>
            <textarea
              name="description"
              id=""
              // cols="75"
              rows="10"
              placeholder="Ex: topics, schedule, etc."
            ></textarea>
            <label htmlFor="guests">Guest/s</label>
            <input type="text" name="guests" />
            <p>
              Add the guest/s as it provides attendees with valuable insight
              into who will be presenting, fostering anticipation and aiding in
              decision-making.
            </p>
            <button className="create-btn" type="submit">
              Create Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default EventModal;
