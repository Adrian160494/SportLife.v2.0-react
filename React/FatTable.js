/**
 * Created by Adrian on 22.03.2018.
 */


import React from 'react';
import {mapStateToProps, mapDispatchToProps} from '../Redux/reducers/reducers.js';
import {connect} from 'react-redux';


class FatTable extends React.Component{
    constructor(props){
        super(props);
        this.products = this.props.products.fat[0];
        this.fillFatTable = this.fillFatTable.bind(this);
        this.addEvent = this.addEvent.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.addRemoveEvents = this.addRemoveEvents.bind(this);
    }

    componentDidMount(){
        let arrayOfButtons = document.getElementsByClassName('fatButton');
        for(let i=0;i<arrayOfButtons.length;i++){
            this.addEvent(arrayOfButtons[i],this.products[i]);
        }
        this.fillFatTable();


    }

    fillFatTable(){
        let products = this.props.mealProducts.fat;
        let html = '';
        for(let i=0; i<products.length;i++){
            if(products.length === 1){
                html += '<tr><td><button class="btn btn-danger removeFatButton">-</button>'+products[i].product+'</td><td>'+products[i].kcal+'</td><td>'+products[i].protein+'</td><td>'+products[i].carbon+'</td><td>'+products[i].fat+'</td></tr>';
            } else {
                if(i===(products.length -1)){
                    html += '<tr><td><button class="btn btn-danger removeFatButton">-</button>'+products[i].product+'</td><td>'+products[i].kcal+'</td><td>'+products[i].protein+'</td><td>'+products[i].carbon+'</td><td>'+products[i].fat+'</td></tr>';
                } else {
                    html += '<tr><td><button class="btn btn-danger removeFatButton">-</button>'+products[i].product+'</td><td>'+products[i].kcal+'</td><td>'+products[i].protein+'</td><td>'+products[i].carbon+'</td><td>'+products[i].fat+'</td></tr>';
                }
            }
        }
        document.getElementById('fatTable').innerHTML=html;
        this.addRemoveEvents();
    }

    addEvent(button,product){
        button.addEventListener('click',()=>{
            this.props.addFatProduct(product);
            this.fillFatTable();
        })
    }

    removeProduct(button,index){
        button.addEventListener('click',()=>{
            this.props.mealProducts.fat.splice(index,1);
            this.fillFatTable();
        });
    }

    addRemoveEvents(){
        let fillProducts = document.getElementsByClassName('removeFatButton');
        let products = this.props.mealProducts.fat;
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
                {this.props.products.fat[0].map((product,index) => <tr><td>{product.product}</td><td>{product.kcal}</td><td>{product.protein}</td><td>{product.carbon}</td><td>{product.fat}</td><td><button className="myAddButton fatButton" key={index}>+</button></td></tr>)}
                </tbody>
            </table>
        )
    }
}

FatTable = connect(mapStateToProps,mapDispatchToProps)(FatTable);

export default FatTable;