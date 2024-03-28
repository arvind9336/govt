import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Attend from "./Attend";
import Assessment from "./Assessment";
import Monitor from "./Monitor";
import Report from "./Report";
import User from "./User";
// import Project from "./Project";
import Logo from "./Logo";
import Footer from "./Footer";
import Header from "./Header";
// import Solved from "./Solved";
// import Text from "./Text";
import Form from "./Form";
function App() {
  return (
    <div className="App">
        <Logo />
      <BrowserRouter>
        <NavBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attendance" element={<Attend />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/monitor" element={<Monitor />}/>
          <Route path="/report" element={<Report />}/>
          <Route path="/user" element={<User />}/>
        </Routes>
      </BrowserRouter>
      {/* <Project />  */}
      <Form />
      {/* <Text  /> */}
      {/* <Solved /> */}
      <Footer />
    </div>
  );
}

export default App;
