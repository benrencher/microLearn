import "./login.css";
import UserInputField from "../../components/userInputField/userInputField";

function Login() {
  return (
    <div className="Login">
      <div className="LoginHeadings">
        <h1 className="LoginMainHeading">Micro Learn</h1>
        <h3 className="LoginSubHeading">Learn more in less time</h3>
      </div>
      <div className="LoginEntryFields">
        <UserInputField title={"Username"} />
        <UserInputField title={"Password"} />
      </div>
      <h3 className="LoginSubHeading">Create an account</h3>
    </div>
  )
}

export default Login;