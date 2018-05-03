/**
 * Created by Adrian on 14.04.2018.
 */

import React from 'react';
import {mapStateToProps,mapDispatchToProps} from '../Redux/reducers/reducers.js';
import {connect} from 'react-redux';

class MakroCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.products = this.props.products;
        this.addEvent = this.addEvent.bind(this);
        this.fillTheTable = this.fillTheTable.bind(this);
        this.addRemoveEvent = this.addRemoveEvent.bind(this);
        this.removeEvent = this.removeEvent.bind(this);
        this.calculate = this.calculate.bind(this);
    }
    componentDidMount(){

        document.getElementById('calculate').addEventListener('click',()=>{
           this.calculate();
        });

        document.getElementById('tableProteinMakro').style.display = 'block';
        document.getElementById('tableCarbonMakro').style.display = 'none';
        document.getElementById('tableFatMakro').style.display = 'none';

        let buttonsProtein = document.getElementsByClassName('makroProteinButton');
        for(let i=0;i<buttonsProtein.length;i++){
            this.addEvent(buttonsProtein[i],this.products.protein[0][i],i,'protein');
        }
        let buttonsCarbon = document.getElementsByClassName('makroCarbonButton');
        for(let i=0;i<buttonsCarbon.length;i++){
            this.addEvent(buttonsCarbon[i],this.products.carbon[0][i],i,'carbon');
        }
        let buttonsFat = document.getElementsByClassName('makroFatButton');
        for(let i=0;i<buttonsFat.length;i++){
            this.addEvent(buttonsFat[i],this.products.fat[0][i],i,'fat');
        }
        let changeView1 = document.getElementsByClassName('changeView1')[0];
        changeView1.addEventListener('click',function () {
            document.getElementById('tableProteinMakro').style.display = 'block';
            document.getElementById('tableCarbonMakro').style.display = 'none';
            document.getElementById('tableFatMakro').style.display = 'none';
        });
        let changeView2 = document.getElementsByClassName('changeView2')[0];
        changeView2.addEventListener('click',function () {
            document.getElementById('tableProteinMakro').style.display = 'none';
            document.getElementById('tableCarbonMakro').style.display = 'block';
            document.getElementById('tableFatMakro').style.display = 'none';
        });
        let changeView3 = document.getElementsByClassName('changeView3')[0];
        changeView3.addEventListener('click',function () {
            document.getElementById('tableProteinMakro').style.display = 'none';
            document.getElementById('tableCarbonMakro').style.display = 'none';
            document.getElementById('tableFatMakro').style.display = 'block';
        })
    }

    addRemoveEvent(){
        let removeButtons = document.getElementsByClassName('removeMakroButton');
        for(let i=0;i<removeButtons.length;i++){
            this.removeEvent(removeButtons[i],i);
            console.log('Dzialam add remove');
        }
    }
    removeEvent(button,index){
        button.addEventListener('click',()=> {
            console.log('Dzialam remove');
            this.props.makroProducts.splice(index,1);
            this.fillTheTable();
        });
    }

    addEvent(button,product,index,type){
        button.addEventListener('click',()=>{
            this.props.addMakroProduct(product,index,type);
            this.fillTheTable();
        });
    }

    fillTheTable(){
        let products = this.props.makroProducts;
        let html = '';
        for(let i=0; i<products.length;i++){
            console.log("Produckt: "+products[i].product.product);
            if(products.length === 1){
                html += '<tr><td><button class="btn btn-danger removeMakroButton">-</button>'+products[i].product.product+'</td><td>'+products[i].product.kcal+'</td><td>'+products[i].product.protein+'</td><td>'+products[i].product.carbon+'</td><td>'+products[i].product.fat+'</td><td><input type="number" id="makroWeight'+i+'"/></td></tr>';
            } else {
                if(i===(products.length -1)){
                    html += '<tr><td><button class="btn btn-danger removeMakroButton">-</button>'+products[i].product.product+'</td><td>'+products[i].product.kcal+'</td><td>'+products[i].product.protein+'</td><td>'+products[i].product.carbon+'</td><td>'+products[i].product.fat+'</td><td><input type="number" id="makroWeight'+i+'"/></td></tr>';
                } else {
                    html += '<tr><td><button class="btn btn-danger removeMakroButton">-</button>'+products[i].product.product+'</td><td>'+products[i].product.kcal+'</td><td>'+products[i].product.protein+'</td><td>'+products[i].product.carbon+'</td><td>'+products[i].product.fat+'</td><td><input type="number" id="makroWeight'+i+'"/></td></tr>';
                }
            }
        }
        document.getElementById('makroTable').innerHTML=html;
        this.addRemoveEvent();
    }

    calculate(){
        let protein=0,carbon=0,fat=0,kcal=0;
        for(let i=0;i<this.props.makroProducts.length;i++){
            let product = this.props.makroProducts[i].product;
            console.log(product);
            let input = document.getElementById('makroWeight'+i).value;
            console.log(input);
            if(input!=0 && !isNaN(input)){
                protein += (parseFloat(product.protein)*input)/100;
                carbon += (parseFloat(product.carbon)*input)/100;
                fat += (parseFloat(product.fat) * input)/100;
                kcal += (parseFloat(product.kcal)*input)/100;
            }
        }
        document.getElementById('proteinLabel').innerHTML = protein;
        document.getElementById('carbonLabel').innerHTML = carbon;
        document.getElementById('fatLabel').innerHTML = fat;
        document.getElementById('kcalLabel').innerHTML = kcal;
    }

    render(){
        return(
            <div className="makroCreator">
                <div className="col-md-12">
                    <div className="col-md-12">
                        <table className="table table-hover table-bordered">
                            <thead>
                            <tr className="heading-td"><td>Product</td><td>Kcal</td><td>Protein</td><td>Carbon</td><td>Fat</td><td>Weight</td></tr>
                            </thead>
                            <tbody id="makroTable">

                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-12 text-center">
                        <table className="table table-bordered">
                            <tr><td>Protein</td><td>Carbon</td><td>Fat</td><td>Kcal</td></tr>
                            <tr><td><label className="form-control" id="proteinLabel"></label></td><td><label className="form-control" id="carbonLabel"></label></td><td><label className="form-control" id="fatLabel"></label></td><td><label className="form-control" id="kcalLabel"></label></td></tr>
                        </table>
                        <button className="btn btn-default" id="calculate">Oblicz</button>
                        <span className="error"></span>
                    </div>
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-8">
                        <div className="btns-grup">
                            <button className="btn btn-default changeView1" >Proteins</button>
                            <button className="btn btn-default changeView2" >Carbons</button>
                            <button className="btn btn-default changeView3" >Fats</button>
                        </div>
                        <div className="table-view">
                            <div id="tableProteinMakro">
                                <table className="table table-bordered table-hovered">
                                    <thead>
                                    <tr className="heading-td"><td>Product</td><td>Kcal</td><td>Protein</td><td>Carbon</td><td>Fat</td><td>Add</td></tr>
                                    </thead>
                                    <tbody>
                                    {this.props.products.protein[0].map((product,index)=><tr>
                                        <td>{product.product}</td>
                                        <td>{product.kcal}</td>
                                        <td>{product.protein} g</td>
                                        <td>{product.carbon} g</td>
                                        <td>{product.fat} g </td>
                                        <td className="text-center"><button className="addButtonMakro makroProteinButton" >+</button></td>
                                    </tr>)}
                                    </tbody>
                                </table>
                            </div>
                            <div id="tableCarbonMakro">
                                <table className="table table-bordered table-hovered">
                                    <thead>
                                    <tr className="heading-td"><td>Product</td><td>Kcal</td><td>Protein</td><td>Carbon</td><td>Fat</td><td>Add</td></tr>
                                    </thead>
                                    <tbody>
                                    {this.props.products.carbon[0].map((product,index)=><tr>
                                        <td>{product.product}</td>
                                        <td>{product.kcal}</td>
                                        <td>{product.protein} g</td>
                                        <td>{product.carbon} g</td>
                                        <td>{product.fat} g </td>
                                        <td className="text-center"><button className="addButtonMakro makroCarbonButton">+</button></td>
                                    </tr>)}
                                    </tbody>
                                </table>
                            </div>
                            <div id="tableFatMakro">
                                <table className="table table-bordered table-hovered">
                                    <thead>
                                    <tr className="heading-td"><td>Product</td><td>Kcal</td><td>Protein</td><td>Carbon</td><td>Fat</td><td>Add</td></tr>
                                    </thead>
                                    <tbody>
                                    {this.props.products.fat[0].map((product,index)=><tr>
                                        <td>{product.product}</td>
                                        <td>{product.kcal}</td>
                                        <td>{product.protein} g</td>
                                        <td>{product.carbon} g</td>
                                        <td>{product.fat} g </td>
                                        <td className="text-center"><button className="addButtonMakro makroFatButton" >+</button></td>
                                    </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

MakroCalculator = connect(mapStateToProps,mapDispatchToProps)(MakroCalculator);

export default MakroCalculator;
