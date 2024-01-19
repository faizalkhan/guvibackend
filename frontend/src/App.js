import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./bootstrap.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import Course from "./components/Course";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <main>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} exact></Route>
              <Route path="/login" element={<Login />} exact></Route>
              <Route path="/signup" element={<Signup />} exact></Route>
              <Route path="/signup" element={<Signup />} exact></Route>
              <Route path="/course/:id" element={<Course />} exact></Route>              
            </Routes>
          </Container>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
