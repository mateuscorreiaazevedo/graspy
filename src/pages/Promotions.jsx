import { Link } from 'react-router-dom'
import PromotionList from '../components/promotion/List.jsx'
import { ListHeader, ListTitle } from '../components/promotion/Style.jsx'
import PromotionSearch from '../components/promotion/Search'
import { usePromotions } from '../hooks/usePromotions.js'

export default function Promotions () {
  const { event, search } = usePromotions()

  return (
    <div>
      <ListHeader>
        <ListTitle>Promoshow</ListTitle>
        <Link to="/create" className="list-link">
          Nova Promoção!
        </Link>
      </ListHeader>
      <PromotionSearch value={search} onChange={event} />
      <PromotionList />
    </div>
  )
}
