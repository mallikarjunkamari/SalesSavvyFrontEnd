import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerHomePage from "./components/CustomerHomePage";
import CartPage from "./components/CartPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerHomePage />} />
        <Route path="/UserCartPage" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}