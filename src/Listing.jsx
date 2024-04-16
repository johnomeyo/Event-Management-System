import image from "./assets/calendar.png";
import amazon from "./assets/amazon.png";
import meta from "./assets/meta.png";
import google from "./assets/google.png";

function ListingComponent() {
  const title = "Everything you need to know(and then some)";
  const listings = [
    "End-to-end event management",
    "In-depth event analytics",
    "0% commission event ticketing",
    "Multichannel marketing tools",
    "Touchless onsite solutions",
  ];
  return (
    <div className="listing">
        <span>&nbsp;</span>
      <h2>EMS</h2>
      <span>&nbsp;</span>
      <img src={image} alt="calendar icon" height={80} />
      <span>&nbsp;</span>
      <h2>{title}</h2>
      <span>&nbsp;</span>
      <ul>
        {listings.map((listing, index) => (
          <li key={index}>{listing}</li>
        ))}
      </ul>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <div className="trusted-by">
        <hr className="line" />
        <div className="text">TRUSTED BY</div>
        <hr className="line" />
      </div>
      <span>&nbsp;</span>
      <div className="logo-container">
        <img src={amazon} alt="amazon logo" />
        <img src={google} alt="amazon logo" />
        <img src={meta} alt="amazon logo" />
      </div>
    </div>
  );
}
export default ListingComponent;
