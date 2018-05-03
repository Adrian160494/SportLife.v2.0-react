/**
 * Created by Adrian on 22.03.2018.
 */

import React from 'react';
import {mapStateToProps, mapDispatchToProps} from '../Redux/reducers/reducers.js';
import {connect} from 'react-redux';


class ProteinTable extends React.Component{
    constructor(props){
        super(props);
        this.products = this.props.products.protein[0];
        this.fillProteinTable = this.fillProteinTable.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.addRemoveEvents = this.addRemoveEvents.bind(this);
        this.addEvent = this.addEvent.bind(this);
    }

    componentDidMount(){
        let arrayOfButtons = document.getElementsByClassName('proteinButton');
        for(let i=0;i<arrayOfButtons.length;i++){
            this.addEvent(arrayOfButtons[i],this.products[i]);
        }
        this.fillProteinTable();

    }

    fillProteinTable(){
        let products = this.props.mealProducts.protein;
        let html = '';
        for(let i=0; i<products.length;i++){
            console.log("Produckt: "+products[i].product);
            if(products.length === 1){
                html += '<tr><td><button class="btn btn-danger removeProteinButton">-</button>'+products[i].product+'</td><td>'+products[i].kcal+'</td><td>'+products[i].protein+'</td><td>'+products[i].carbon+'</td><td>'+products[i].fat+'</td></tr>';
            } else {
                if(i===(products.length -1)){
                    html += '<tr><td><button class="btn btn-danger removeProteinButton">-</button>'+products[i].product+'</td><td>'+products[i].kcal+'</td><td>'+products[i].protein+'</td><td>'+products[i].carbon+'</td><td>'+products[i].fat+'</td></tr>';
                } else {
                    html += '<tr><td><button class="btn btn-danger removeProteinButton">-</button>'+products[i].product+'</td><td>'+products[i].kcal+'</td><td>'+products[i].protein+'</td><td>'+products[i].carbon+'</td><td>'+products[i].fat+'</td></tr>';
                }
            }
        }
        document.getElementById('proteinTable').innerHTML=html;
        this.addRemoveEvents();
    }

    addEvent(button,product){
        button.addEventListener('click',()=>{
            this.props.addProteinProduct(product);
            this.fillProteinTable();
        });
    }

    removeProduct(button,index){
        button.addEventListener('click',()=>{
           this.props.mealProducts.protein.splice(index,1);
           this.fillProteinTable();
        });
    }

    addRemoveEvents(){
        let fillProducts = document.getElementsByClassName('removeProteinButton');
        let products = this.props.mealProducts.protein;
        for(let i=0;i<products.length;i++){
            this.removeProduct(fillProducts[i],i);
        }
    }

    render(){
        return(
                <table className="table table-bordered table-hovered">
                    <thead>
                    <tr className="heading-td"><td>Product</td><td>Kcal</td><td>Protein</td><td>Carbon</td><td>Fat</td><td>Add</td></tr>
                    </thead>
                    <tbody>
                    {this.props.products.protein[0].map((product,index) => <tr><td>{product.product}</td><td>{product.kcal}</td><td>{product.protein}</td><td>{product.carbon}</td><td>{product.fat}</td><td><button key={index} className="myAddButton proteinButton" >+</button></td></tr>)}
                    </tbody>
                </table>
        )
    }
}

ProteinTable = connect(mapStateToProps,mapDispatchToProps)(ProteinTable);

export default ProteinTable;