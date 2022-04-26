import { Link } from 'react-router-dom'
import PromotionList from '../components/promotion/List.jsx'
import { ListHeader, ListTitle } from '../components/promotion/Style.jsx'

export default function Promotions () {
  return (
    <div>
      <ListHeader>
        <ListTitle>Promoshow</ListTitle>
        <Link to="/create" className="list-link">
          Nova Promoção!
        </Link>
      </ListHeader>
      <PromotionList />
    </div>
  )
}
