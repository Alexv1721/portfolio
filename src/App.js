import Home from "./components/Home";
import Navigation from "./components/Navigation";
import ProjectsSection from "./components/Projects";
import ContactSection from './components/ContactSection '
import Resume from "./components/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <ProjectsSection/> */}
      {/* <Navigation/> */}
      {/* <Home/> */}
      {/* <ContactSection/> */}
      {/* <Resume/> */}
      <BrowserRouter>
<Routes>
<Route index element={<Home />} />
<Route path="resume" element={<Resume />} />
<Route path="project" element={<ProjectsSection />} />
<Route path="conduct" element={<ContactSection />} />


</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
