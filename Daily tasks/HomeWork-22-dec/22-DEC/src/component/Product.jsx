import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { products as pList } from '../product'
import { addCart } from '../redux/cart-reducer'
import { Button, Card, Icon } from 'semantic-ui-react'

const Product = () => {
    const [products, setProducts] = useState(pList)
    const dispatch = useDispatch()
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', margin:'10px'}}>
            {
                products.length > 0 && products.map((product, index) => (
                    <Card style={{margin:'15px'}} key={product.id}>
                        <Card.Content>
                        <Card.Header>Product-Name :- {product.name} </Card.Header>
                        </Card.Content>
                        <Card.Content>
                        <Card.Description>Id :-{product.id}</Card.Description>
                        </Card.Content>
                        <Card.Content>
                        <Card.Description>Price :-{product.price}</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button onClick={()=>{dispatch(addCart(product))}} secondary><Icon name='add circle' />Add to Cart</Button>
                        </Card.Content>
                    </Card>

                ))
            }
        </div>
    )
}

export default Product


