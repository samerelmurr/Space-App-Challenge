import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './constants/components/index';
import {Pages} from "./constants/pages/index";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pages.HomePage />} />
        <Route path="/destination" element={<Pages.DestinationPage />} />
        <Route path="/crew" element={<Pages.CrewPage />} />
        <Route path="/technology" element={<Pages.TechnologyPage />} />
      </Routes>
    </>
    
  );
}

export default App;
