import "./userInputField.css";

function UserInputField(props) {
  return (
    <div className="UserInputField">
      <h3 className="UserInputTitle">{props.title}</h3>
      <input type="text" placeholder={props.placeholder} className="UserInputFieldInput" />
    </div>
  );
}

export default UserInputField;