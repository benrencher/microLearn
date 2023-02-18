import "./CreateAccount.css";
import UserInputField from "../../components/userInputField/userInputField.js";
import Button from "../../components/Button/Button.js";

function CreateAccount() {
  return (
    <div className="CreateAccount">
      <h2 className="CreateAccountTitle">Create an account</h2>
      <div className="CreateAccountInputFields">
        <UserInputField title="Username"/>
        <UserInputField title="Password"/>
        <UserInputField title="Re-enter password"/>
      </div>
      <Button title="Sign up"/>
    </div>
  )
}

export default CreateAccount;