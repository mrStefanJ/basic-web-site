import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { DataScience, Design, Mobile, Web } from "./pages/ProjectCategory";
import { Project } from "./pages/ProjectDetails";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/web-development" element={<Web />} />
            <Route path="/mobile-development" element={<Mobile />} />
            <Route path="/data-science" element={<DataScience />} />
            <Route path="/design" element={<Design />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
