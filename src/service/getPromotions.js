import { api } from './api'

export const promotionService = {
  getAll: ({ ...props }) => {
    return api.get('/promotions?_embed=comments', { ...props })
  }
}
