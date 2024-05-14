import Intro from "./components/Intro/intro";
import Clock from "./components/Intro/Clock/clock";
import Date from "./components/Date/datePicker";
import User from "./components/User/user";
import Admin from "./components/Admin/admin";
import Add from "./components/Adding/Add";
 import Edit from "./components/Edit/edit"

function App() {
  return (
    <div className="App">
     <Intro />
     <Clock />
     <Date />
     <User />
     <Admin />
     <Add />
      <Edit /> 
     
     
    </div>
  );
}

export default App;
