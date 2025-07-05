import React from 'react'
import { Card } from 'react-bootstrap'
import formatCurrency from './formatCurrency'

const StoreItem = ({id , price , name , imgUrl}) => {
  return (
    <Card className='h-100'>
        <Card.Img src={imgUrl} variant="bottom" style={{height : "200px" , objectFit : "contain"}}/>

        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline'>

            <span className='fs-4'>{name}</span>
            <span className='text-muted me-2'>{formatCurrency(price)}</span>

            </Card.Title>
        </Card.Body>

    </Card> 
  )
}

export default StoreItem;