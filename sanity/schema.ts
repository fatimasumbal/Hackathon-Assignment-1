import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import Products from './lib/Products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products, post, author, category, blockContent],
}
