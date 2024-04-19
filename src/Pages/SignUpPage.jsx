import ListingComponent from "../Listing";
import SignUpForm from "../SignUpForm";
function SignUpPage(){
    return (
        <div className="home-page">
         <ListingComponent/>
         <SignUpForm/>
        </div>
    );
}
export default SignUpPage;