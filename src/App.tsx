import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoadingPage } from "./LoadingPage/LoadingPage";
import { BookingForm } from "./BookingForm/BookingPage";
import ConfirmationPage from "./ConfirmationPage/ConfirmationPage";
import { NavMenu } from "./Menu/NavMenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/confirm" element={<ConfirmationPage />} />
        <Route path="/nav" element={<NavMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
