import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import CourseTypeManager from "./components/Courses/CourseTypeManager";
import Home from "./components/Home/Home";
import StudentRegister from "./components/Student/StudentRegister";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [asidetitle, setAsidetitle] = useState([]);
  const [credits, setCredits] = useState(0);
  const [prices, setPrices] = useState(0);
  const [credit, setCredit] = useState(0);

  const handleAsideTitle = (name, credit, price) => {
    const newAsidetitle = [...asidetitle, name];
    setAsidetitle(newAsidetitle);
    setCredits(credits + credit);
    setPrices(prices + price);
    setCredit(credit);
  };

  return (
    <Router>
      <Navbar/>
      <Header />
      <main className="container mx-auto">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleAsideTitle={handleAsideTitle}
                asidetitle={asidetitle}
                credits={credits}
                prices={prices}
                credit={credit}
              />
            }
          />
          <Route path="/newCourse" element={<CourseTypeManager />} />
          <Route path="/newRegister" element={<StudentRegister/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
