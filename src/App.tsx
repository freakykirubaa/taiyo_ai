import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./Sidebar";
import "./index.css";
import Contact from "./components/Contacts/Contacts";
import Charts from "./components/Charts/Charts";
import "./App.css";
import store from "./ConfigureStore";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}> 
    <div className="flex flex-col md:flex-row">
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/charts-and-maps" element={<Charts />} />
        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
