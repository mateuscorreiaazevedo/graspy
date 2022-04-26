import PromotionForm from '../components/form/Form'
import { TitleNewPromotion, SubtitleNewPromotion, NavNewPromotion } from './style'

export default function NewPromotion () {
  return (
        <main>
          <NavNewPromotion>
            <TitleNewPromotion to="/">PromoShow</TitleNewPromotion>
            <SubtitleNewPromotion>Nova Promoção!</SubtitleNewPromotion>
          </NavNewPromotion>
          <PromotionForm />
        </main>
  )
}
