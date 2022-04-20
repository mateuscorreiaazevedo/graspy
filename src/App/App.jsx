import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PromotionForm from "../components/Form/PromotionForm";
import "../style.css"

import PromotionList from "../components/promotion/List";

export default function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<PromotionList />} />
          <Route path="/create" element={<PromotionForm />} />
        </Routes>
      </Router>
    </div>
  );
}
