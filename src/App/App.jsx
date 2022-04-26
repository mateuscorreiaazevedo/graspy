import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../style.css'
import Promotions from '../pages/Promotions'
import NewPromotion from '../pages/NewPromotion'

export default function App () {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Promotions />} />
          <Route path="/create" element={<NewPromotion />} />
        </Routes>
      </Router>
    </div>
  )
}
