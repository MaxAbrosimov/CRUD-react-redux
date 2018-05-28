import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {connect} from 'react-redux'
import * as productActions from 'actions/products'

import ProductTable from 'components/products/ProductTable'
import GenreList from 'components/GenreList'

class ProductsListCmp extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount(){
        this.props.loadAllProducts()
    }

    getProducts(){
        if(!this.props.products){
            return []
        }

        return this.props.products
    }

    render() {
        return (
        <div style={{display: 'flex'}}>
            <div style={{width: '20%', paddingTop: 10}}>
                <GenreList genres={this.props.genres} selectedGenre={this.props.selectedGenre} onGenreClick={this.props.changeGenre}/>
            </div>
            <ProductTable products = {this.getProducts()} deleteProduct={this.props.deleteProduct}/>
        </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        products: state.product.products,
        genres: state.product.genres,
        selectedGenre: state.product.selectedGenre
    }
}

export const ProductsList = connect(mapStateToProps, productActions)(ProductsListCmp);