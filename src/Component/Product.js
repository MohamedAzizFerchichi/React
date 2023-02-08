import Card from 'react-bootstrap/Card';
import { Component } from 'react';
class Product extends Component {
    render() { 
        return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require(`../assets/images/${this.props.product.img}`)} />
              <Card.Body>
                <Card.Title>{this.props.product.name}</Card.Title>
                <Card.Text>
                  {this.props.product.description}
                </Card.Text>
                <Card.Text>
                 {this.props.product.price}
                </Card.Text>
              </Card.Body>
            </Card>
          );
    }

}
export default Product;