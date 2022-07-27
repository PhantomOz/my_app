import "./App.css";
// import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Aboutus from "./pages/Aboutus";
import ApplicationForm from "./pages/ApplicationForm";
import Contactus from "./pages/Contactus";
import Gallery from "./pages/Gallery";
// import StudentList from "./components/StudentList";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Recruitmentform from "./pages/Recruitmentform";
import Users from "./pages/Users";
import Todo from "./pages/Todo";
import Login from "./pages/Login";
import Singleblogpost from "./pages/Singleblogpost";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<ApplicationForm />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/post" element={<Posts />} />
        <Route path="/post/:id" element={<Singleblogpost />} />
        <Route path="/users" element={<Users />} />
        <Route path="/todos" element={<Todo />} />
        <Route path="/recruitmentform" element={<Recruitmentform />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
