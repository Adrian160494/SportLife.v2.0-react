/**
 * Created by Adrian on 11.03.2018.
 */

import React from 'react';
import {connect} from 'react-redux';
import ProteinTable from './ProteinTable.js';
import CarbonTable from './CarbonTable.js';
import FatTable from './FatTable.js';
import {mapStateToProps,mapDispatchToProps} from '../Redux/reducers/reducers.js';
import $ from 'jquery';

class MealCreator extends React.Component{
    constructor(props){
        super(props);
        this.actualView = 1;
        this.tempMakro = {
            protein: '',
            carbon: '',
            fat:''
        };
        this.change = this.change.bind(this);
        this.calculate = this.calculate.bind(this);
        this.createMeals = this.createMeals.bind(this);
        this.createTable = this.createTable.bind(this);
        this.previousButton = this.previousButton.bind(this);
    }

    componentDidMount(){
        $('.table1').css('display','none');
        $('.table2').css('display','none');
        $('.table3').css('display','block');

        $('#proteins').bind('click',function () {
            console.log('dzialam 1');
            $('.table1').css('display','block');
            $('.table2').css('display','none');
            $('.table3').css('display','none');
        });
        $('#carbons').bind('click',function () {
            console.log('dzialam 2');
            $('.table1').css('display','none');
            $('.table2').css('display','block');
            $('.table3').css('display','none');
        });
        $('#fats').bind('click',function () {
            console.log('dzialam 3');
            $('.table3').css('display','block');
            $('.table2').css('display','none');
            $('.table1').css('display','none');
        });

            $('#makroProtein').bind('change',()=>{
                this.change(1);
            });
        $('#makroCarbon').bind('change',()=>{
            this.change(2);
        });
        $('#makroFat').bind('change',()=>{
            this.change(3);
        });
        document.getElementById('prepare_click').addEventListener('click',this.calculate);
        document.getElementById('previousButton').addEventListener('click',this.previousButton);
    }

    previousButton(){
        document.getElementById('meals-view').innerHTML = '<div></div>';
        document.getElementById('tables-view').style.display = 'block';
        document.getElementById('previousButton').disabled = true;

    }

    change(number){
        console.log('dzialam change');
        switch (number) {
            case 1:
                var value1 = document.getElementById('makroProtein').value;
                this.tempMakro.protein = value1;
                break;
            case 2:
                var value2 = document.getElementById('makroCarbon').value;
                this.tempMakro.carbon = value2;
                break;
            case 3:
                var value3 = document.getElementById('makroFat').value;
                this.tempMakro.fat = value3;
                break;
        }
    }

    calculate(){
        let protein = parseFloat(this.tempMakro.protein);
        console.log(this.props.mealProducts.protein.length);
        let carbon = parseFloat(this.tempMakro.carbon);
        let fat = parseFloat(this.tempMakro.fat);
        if(!isNaN(protein) || !isNaN(carbon) || !isNaN(fat)){
            let error = document.getElementById('error');
            if(this.props.mealProducts.protein.length>2 && this.props.mealProducts.carbon.length>3 && this.props.mealProducts.fat.length>1){
               console.log('Dzialam wszystko ok');
                error.classList.remove('success');
                error.classList.add('errorCode');
                this.createMeals();
                document.getElementById('tables-view').style.display = 'none';
                document.getElementById('meals-view').style.display = 'block';
            } else{
                console.log('dzialam tylko makro');
                error.innerHTML = "Fill all the gaps!!/Type numbers into boxes!!";
                error.classList.remove('success');
                error.classList.add('errorCode');
            }

        } else {
            console.log('wszystko do dupy');
            let error = document.getElementById('error');
            error.innerHTML = "Fill all the gaps!!/Type numbers into boxes!!";
            error.classList.remove('success');
            error.classList.add('errorCode');
        }

    }

    createMeals(){
        this.props.clearCreatedMeals();
        for(let i=0;i<this.props.mealProducts.protein.length;i++){
            let protein = this.props.mealProducts.protein[i];
            let carbon = this.props.mealProducts.carbon[Math.floor(Math.random() * this.props.mealProducts.carbon.length)];
            let fat = this.props.mealProducts.fat[Math.floor(Math.random() * this.props.mealProducts.fat.length)];
            let proteinQuantity = Math.floor((parseFloat(this.tempMakro.protein) * 100)/parseFloat(protein.protein));
            let carbonQuantity =Math.floor((parseFloat(this.tempMakro.carbon) * 100)/parseFloat(carbon.carbon));
            let fatQuantity = Math.floor((parseFloat(this.tempMakro.fat) * 100)/parseFloat(fat.fat));
            let meal = {
                proteinProduct: protein, quantityProtein: proteinQuantity,
                carbonProduct: carbon, quantityCarbon: carbonQuantity,
                fatProduct: fat, quantityFat: fatQuantity
            };
            this.props.addCreatedMeal(meal);
        }
        this.createTable();
    }

    createTable(){
        let html ='';
        for(let i=0;i<this.props.mealProducts.createdMeals.length;i++){
            html = html + '<div class="meal_panel"><div class="meal_panel_heading"><h1>Meal proposition '+i+'</h1></div><div class="meal_panel_body"><p>Meal properties to achieve: '+this.tempMakro.protein+' [g] of proteins, '+this.tempMakro.carbon+' [g] of carbons and '+this.tempMakro.fat+' [g] of fats!</p><p>Protein product : '+this.props.mealProducts.createdMeals[i].proteinProduct.product+' --->  '+this.props.mealProducts.createdMeals[i].quantityProtein+' [g]</p> <p>Carbon product : '+this.props.mealProducts.createdMeals[i].carbonProduct.product+' --->  '+this.props.mealProducts.createdMeals[i].quantityCarbon+' [g]</p> <p>Fat product : '+this.props.mealProducts.createdMeals[i].fatProduct.product+' --->  '+this.props.mealProducts.createdMeals[i].quantityFat+' [g]</p></div></div>';
        }
        console.log(html);
        document.getElementById('meals-view').innerHTML = html;
        html='';
        document.getElementById('previousButton').disabled = false;
    }

    render(){
        return(
            <div className="creator">
                <div className="col-md-12">
                    <div className="col-md-12">
                        <table className="table table-hovered table-bordered">
                            <thead>
                            <tr><td colSpan="5"  className="text-center heading-td" >High PROTEINS products(min 3 products)</td></tr>
                            <tr className="heading-td"><td>Product</td><td>Kcal</td><td>Protein</td><td>Carbon</td><td>Fat</td></tr>
                            </thead>
                            <tbody id="proteinTable"></tbody>
                        </table>
                        <table className="table table-hovered table-bordered">
                            <thead>
                            <tr><td colSpan="5" className="text-center heading-td">High CARBONS products(min 4 products)</td></tr>
                            <tr className="heading-td"><td>Product</td><td>Kcal</td><td>Protein</td><td>Carbon</td><td>Fat</td></tr>
                            </thead>
                            <tbody id="carbonTable"></tbody>
                        </table>
                        <table className="table table-hovered table-bordered">
                            <thead>
                            <tr><td colSpan="5" className="text-center heading-td">High FATS products(min 2 products)</td></tr>
                            <tr className="heading-td"><td>Product</td><td>Kcal</td><td>Protein</td><td>Carbon</td><td>Fat</td></tr>
                            </thead>
                            <tbody id="fatTable"></tbody>
                        </table>
                    </div>
                    <div className="col-md-12 text-center">
                        <form className="form-inline" method="get" action="">
                            <input id="makroProtein" className="form-control" placeholder="Protein[g]"/>
                            <input id="makroCarbon" className="form-control" placeholder="Carbon[g]" />
                            <input id="makroFat" className="form-control" placeholder="Fat[g]"/>
                        </form>
                        <div id="error" className="error"></div>
                    </div>
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-8">
                        <div className="tables">
                            <div className="btns-grup">
                                <button id="proteins" className="btn btn-default" >Proteins</button>
                                <button id="carbons" className="btn btn-default">Carbons</button>
                                <button id="fats" className="btn btn-default">Fats</button>
                                <button id="prepare_click" className="btn btn-primary pull-right" >Prepare</button>
                                <button id="previousButton" className="btn btn-default pull-right" disabled="disabled">Close</button>
                            </div>
                            <div className="table-view" id="tables-view">
                                <div className="table1">
                                    <ProteinTable/>
                                </div>
                                <div className="table2">
                                    <CarbonTable/>
                                </div>
                                <div className="tNameble3">
                                    <FatTable/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="meals" id="meals-view">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

MealCreator = connect(mapStateToProps,mapDispatchToProps)(MealCreator);

export default  MealCreator;