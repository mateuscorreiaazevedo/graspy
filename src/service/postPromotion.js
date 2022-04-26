import { api } from './api'

export const formService = {
  save: ({ title, price, url, imageUrl }) => {
    return api.post('/promotions', { title, price: Number(price), url, imageUrl })
  }
}
