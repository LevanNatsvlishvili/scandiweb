
export const api = 'http://localhost:4000/graphql';

export const query = `
{
  category{
    products{
      name
      inStock
      gallery
      description
      category
      attributes{
        id
        name
        type
        items{
          displayValue
          value
          id
        }
      }
      prices{
        currency
        amount
      }
    }
  }
  currencies
}
`


