import "./Nav.css";

function Nav(props) {
  const navOptions = ["Study", "Questions", "Resources"];
  const navOptionsDisplay = navOptions.map((option) => 
    <h3>{option}</h3>
  )
  const [ navOption, setNavOption ] = useState(props.initialNavOption);

  function switchNavOption(index) {
    if (index >= 2) {
      selectedOptionIndex = 2; 
    } else if (index <= 0) {
      selectedOptionIndex = 0;
    } else {
      selectedOptionIndex = 1;
    }
  }
  
  const navSlideoutStyle = {};

  let navSlideoutIsActive = false;
  function toggleNav() {
    navSlideoutIsActive = !navSlideoutIsActive;
    if (navSlideoutIsActive) {
      navSlideoutStyle.right = "0px";
    } else {
      navSlideoutStyle = {};
    }
  }


  return (
    <div className="NavRoot">
      <div className="NavTitleGroup">
        <h2>{navOptions[selectedOptionIndex]}</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={toggleNav}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <div className="NavSlideout" style={navSlideoutStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={toggleNav}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <div class="NavOptions">
          {navOptionsDisplay}
        </div>
      </div>
    </div>
  )
}

export default Nav;