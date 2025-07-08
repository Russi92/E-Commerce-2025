import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import HomeOffers from '../data/HomeOffers.json';

function BasicExample() {
  return (


      <div className='mt-5'>

          <h1 className='text-center'>Best Offers</h1>

          <div className='d-flex gap-5 flex-wrap justify-content-center'>
            {HomeOffers.map((items) => {
                return(
                         
                    <Card style={{ width: '25rem', border : "none" }} className='shadow-lg'>

                        <Card.Img variant="top" src={items.img} style={{ width: "100%",height: "260px",objectFit: "cover"}}/>

                        <Card.Body className="d-flex flex-column justify-content-end align-items-start" style={{ height: '100%' }}>

                            <Card.Title className="d-flex flex-column justify-content-center align-items-baseline h-100">{items.name}</Card.Title>

                            <Card.Text className="d-flex flex-column justify-content-end align-items-baseline h-100">{items.description}</Card.Text>
                            <div className="mt-auto">

                            <Button variant="primary" className='w-100'>Buy Now</Button>
                            </div>

                        </Card.Body>
                        
                    </Card>
                    
                    )
                })}
                </div>
            </div>
    
  );
}

export default BasicExample;