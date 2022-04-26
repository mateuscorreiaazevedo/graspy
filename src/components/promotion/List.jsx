import { usePromotions } from '../../hooks/usePromotions'
import PromotionCard from './Card'

export default function PromotionList () {
  const { promotions, loading } = usePromotions()

  return (
    <div>
      {!!loading && <div>Carregando...</div>}
      {promotions.map((promotion) => (
        <PromotionCard {...promotion} key={promotion.id} />
      ))}
    </div>
  )
}
