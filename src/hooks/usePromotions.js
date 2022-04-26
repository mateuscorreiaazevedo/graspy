import { useEffect, useState } from 'react'
import { promotionService } from '../service/getPromotions'

export const usePromotions = () => {
  const [promotions, setPromotions] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const params = {}
  if (search) {
    params.title_like = search
  }

  useEffect(() => {
    promotionService
      .getAll({ params })
      .then((res) => setPromotions(res.data))
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false))
  }, [search])

  const event = (e) => setSearch(e.target.value)

  return {
    promotions,
    event,
    search,
    loading
  }
}
