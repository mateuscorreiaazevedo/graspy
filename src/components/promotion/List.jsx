import { usePromotion } from '../../hooks/usePromotions'
import PromotionCard from './Card'
import PromotionSearch from './Search'

export default function PromotionList () {
  const { promotions, loading, handleChange, search } = usePromotion()

  return (
    <div>
      <PromotionSearch type="search" placeholder="Buscar produto" value={search} onChange={handleChange} />
      {!!loading && <div>Carregando...</div>}
      {promotions.map((promotion) => (
        <PromotionCard {...promotion} key={promotion.id} />
      ))}
    </div>
  )
}
