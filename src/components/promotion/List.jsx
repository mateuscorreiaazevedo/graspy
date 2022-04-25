import { usePromotions } from '../../hooks/usePromotions'
import { Link } from 'react-router-dom'
import { ListHeader, ListTitle } from './Style'
import PromotionSearch from './Search'
import PromotionLoading from './Loading'

export default function PromotionList () {
  const { promotions, event, search } = usePromotions()

  return (
    <div>
      <ListHeader>
        <ListTitle>Promoshow</ListTitle>
        <Link to="/create" className="list-link">
          Nova Promoção!
        </Link>
      </ListHeader>
      <PromotionSearch value={search} onChange={event} />
      <PromotionLoading promotions={promotions} loading={search}/>
    </div>
  )
}
