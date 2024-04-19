import { useNavigate } from "react-router-dom";
function SignUpForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    console.log(payload);
  };

  let routeTo = useNavigate();

  const getStarted = "Get started with Zoho Backstage";

  const dataStorage = "Your data will be stored in the US data center";

  const text =
    "All in one event management software to plan and run-in person, virtual and hybrid events with greater efficiency and impact";
  return (
    <div className="sign-up-form">
      <img
        src="https://www.zoho.com/sites/zweb/images/productlogos/backstage.svg"
        height={50}
        alt="backstage"
      />
      <span>&nbsp;</span>
      <h3>{getStarted}</h3>
      <span>&nbsp;</span>
      <p>{text}</p>
      {/* <span>&nbsp;</span> */}
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Company Name *
          <br />
          <input type="text" name="company name" />
        </label>
        <label htmlFor="">
          Email *
          <br />
          <input type="email" name="email" />
        </label>
        <label htmlFor="">
          Password *
          <br />
          <input type="password" name="password" />
        </label>
        <label htmlFor="">
          Phone Number *
          <br />
          <input type="number" name="phone" />
        </label>
        <p>{dataStorage}</p>
        <span>&nbsp;</span>
        <button
          type="submit"
          className="sbmt-btn"
          onClick={() => routeTo("/create")}
        >
          SIGN UP NOW
        </button>
      </form>
    </div>
  );
}
export default SignUpForm;
