/**
 * Created by Adrian on 11.03.2018.
 */

import React from 'react';
import {mapStateToProps,mapDispatchToProps} from '../Redux/reducers/reducers.js';
import {connect} from 'react-redux';

class ProductBase extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="col-md-12 text-center">
                    <div className="col-md-6 col-sm-8 col-xs-12">
                        <table className="table table-bordered table-hovered">
                            <thead>
                            <tr><td className="text-center" colSpan="6">High protein products</td></tr>
                            <tr><td>Product</td><td>Kcal</td><td>Protein[g]</td><td>Carbon[g]</td><td>Fat[g]</td></tr>
                            </thead>
                            <tbody>
                            {this.props.products.protein[0].map((product,index) => <tr><td>{product.product}</td><td>{product.kcal}</td><td>{product.protein}</td><td>{product.carbon}</td><td>{product.fat}</td></tr>)}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6 col-sm-8 col-xs-12">
                        <table className="table table-bordered table-hovered">
                            <thead>
                            <tr><td className="text-center" colSpan="6">High carbon products</td></tr>
                            <tr><td>Product</td><td>Kcal</td><td>Protein[g]</td><td>Carbon[g]</td><td>Fat[g]</td></tr>
                            </thead>
                            <tbody>
                            {this.props.products.carbon[0].map((product,index) => <tr><td>{product.product}</td><td>{product.kcal}</td><td>{product.protein}</td><td>{product.carbon}</td><td>{product.fat}</td></tr>)}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6 col-sm-8 col-xs-12">
                        <table className="table table-bordered table-hovered">
                            <thead>
                            <tr><td className="text-center" colSpan="6">High fat products</td></tr>
                            <tr><td>Product</td><td>Kcal</td><td>Protein[g]</td><td>Carbon[g]</td><td>Fat[g]</td></tr>
                            </thead>
                            <tbody>
                            {this.props.products.fat[0].map((product,index) => <tr><td>{product.product}</td><td>{product.kcal}</td><td>{product.protein}</td><td>{product.carbon}</td><td>{product.fat}</td></tr>)}
                            </tbody>
                        </table>
                    </div>
            </div>
        );
    }
}
ProductBase = connect(mapStateToProps,mapDispatchToProps)(ProductBase);

export default ProductBase;