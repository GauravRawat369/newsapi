// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import "./styles/CssSidebar.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./components/News";
import Analytics from "./components/Analytics";
import Notification from "./components/Notifications";
import Statics from "./components/Stats";
import Favourites from "./components/Favourites";
import Money from "./components/Money";



function App() {
  return (
    <div className="main-div">
      <Navbar />
      <div className="main-body">
        <Router>
          <Sidebar />
          <div className="content-div">
            <Routes>
              <Route exact path="/news1" element={<News />} />
              <Route exact path="/analytics2" element={<Analytics />} />
              <Route exact path="/notification3" element={<Notification />} />
              <Route exact path="/stats4" element={<Statics />} />
              <Route exact path="/favourites5" element={<Favourites />} />
              <Route exact path="/money6" element={<Money />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
