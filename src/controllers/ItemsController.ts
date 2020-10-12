import { Request, Response } from 'express'
import knex from '../database/connections'

interface IItem {
  id: number;
  title: string;
  image: string;
}

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*')

    const serializedItem = items.map((item: IItem) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.0.106:3333/uploads/${item.image}`
      }
    })

    return response.json(serializedItem)
  }
}

export default ItemsController;