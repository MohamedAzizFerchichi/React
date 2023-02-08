import ProductList from '../Data/products.json'
import React, { Component } from 'react';
import Product from './Product';
class Products extends Component {
    //parcour list de produit and afficher les produit 
    state = {
        products: ProductList
        
    }
    render() { 
        return (
            <div>
                <h1>Products</h1>
                <div className="row">
                    {this.state.products.map((product) => (
                        <div className="col-4">
                            <Product product={product}></Product>
                        </div>
                    ))}
                </div>
            </div>

        );
    }
}
 
export default  Products;