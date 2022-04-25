import PromotionCard from './Card'
import PropTypes from 'prop-types'
import { Loading } from './Style'

PromotionLoading.propTypes = {
  loading: PropTypes.object,
  promotions: PropTypes.object
}

export default function PromotionLoading ({ loading, promotions }) {
  if (loading === '') {
    return <Loading>Digite no campo acima o que deseja</Loading>
  }

  return (
    <>
      {promotions.map((promotion) => (
        <PromotionCard {...promotion} key={promotion.id} />
      ))}
    </>
  )
}
