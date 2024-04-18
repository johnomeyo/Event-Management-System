
import './styles.css'
function EventTile() {
  return (
    <div className="event-tile">
      <div className='time-date'>
        <h4>21-22 OCT</h4>
        <p>19:00</p>
      </div>
      <div className='event-info'>
        <h2>Bergen Internation Film Festival</h2>
        <p>
          Films from all over the world gather all film enthusiasts for unique
          moments are the Bergen International Film Festival
        </p>
      </div>
<button className='add-to-calendar'>+ Add to calendar</button>
    </div>
  );
}
export default EventTile;
