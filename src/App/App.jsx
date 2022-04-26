import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../style.css'
import Promotions from '../pages/Promotions'
import NewPromotion from '../pages/NewPromotion'
import EditPromotion from '../pages/EditPromotion'

export default function App () {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Promotions />} />
          <Route path="/create" element={<NewPromotion />} />
          <Route path="/edit/:id" element={<EditPromotion />} />
        </Routes>
      </Router>
    </div>
  )
}
