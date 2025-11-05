import logo from './logo.svg';
import './App.css';

import EmployeeList from "./EmployeeList/EmployeeList.jsx";
// import UserList from "./UserList/UserList.jsx";

function App() {
  
  const logApplicationLaunch = (message) => {
    console.log(message);
  };

  // Example usage of the logging function
  logApplicationLaunch('Application Launched1.');
  logApplicationLaunch('Application Launched2.');



  return (
    <div className="">
      {/* <UserList/> */}
      <EmployeeList />
    </div>
  );
}

export default App;
