/**
 * Created by Adrian on 11.03.2018.
 */

import React from 'react';
import {Link} from 'react-router-dom';
import Conclusion from "./Conclusion";
import {connect} from 'react-redux';
import {mapStateToProps,mapDispatchToProps} from '../Redux/reducers/reducers.js';

class Bmr_calculator extends React.Component{
    constructor(props){
        super(props);
        this.calculateBMR = this.calculateBMR.bind(this);
    }

    componentDidMount(){
        let button = document.getElementById('Calculate');
        button.addEventListener('click',()=>{
            this.calculateBMR();
            console.log('Dzialam click');
        });
        document.getElementById('calculateReal').style.display='none';
        document.getElementById('calculateReal').addEventListener('click',()=>{
            document.getElementById('home_page').style.display = 'none';
            document.getElementById('calculateReal').style.display='none';
        });
    }

    calculateBMR(){
        console.log('Dzialam calculate');
        let sex =document.getElementById('sexSelect').value;
        let weight = document.getElementById('weightInput').value;
        let height = document.getElementById('heightInput').value;
        let age = document.getElementById('ageInput').value;
        let target = document.getElementById('targetSelect').value;
        let activity = document.getElementById('activitySelect').value;
        if(sex.length>0 && weight.length>0 && height.length>0 && age.length>0 && target.length>0 && activity.length>0){
            console.log('Wlaze tu i dzialam');
            document.getElementsByClassName('has-error')[0].innerHTML = '';
            document.getElementById('calculateReal').style.display = 'block';
            document.getElementById('Calculate').style.display= 'none';
            console.log(sex);
            console.log(weight);
            console.log(height);
            console.log(age);
            console.log(target);
            console.log(activity);
            this.props.addBMRProps(sex,weight,height,age,activity,target);
        } else {
            document.getElementsByClassName('has-error')[0].innerHTML = 'Fill the all gaps below!!!';
        }
    }

    render(){
        return(
            <div className="calculator">
                <div className="panel panel-default ">
                    <div className="text-center">
                        <span className="tab-heading">Calculate your BMR direction</span>
                    </div>
                    <div className="panel-body text-center">
                        <form className="form" >
                            <div className="form-group">
                                <div className="col-md-5">
                                    <label>Sex:
                                    </label>
                                </div>
                                <div className="col-md-7">
                                    <select className="form-control" id="sexSelect">
                                        <option selected >Choose sex</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-5">
                                    <label>Weight:

                                    </label>
                                </div>
                                <div className="col-md-7">
                                    <input id="weightInput" type="text" className="form-control"/>
                                </div>

                            </div>
                            <div className="form-group">
                                <div className="col-md-5">
                                    <label>Height:

                                    </label>
                                </div>
                                <div className="col-md-7">
                                    <input id="heightInput" type="text" className="form-control"/>
                                </div>

                            </div>
                            <div className="form-group">
                                <div className="col-md-5">
                                    <label>Age:

                                    </label>
                                </div>
                                <div className="col-md-7">
                                    <input id="ageInput" type="text"  className="form-control"/>
                                </div>

                            </div>
                            <div className="form-group">
                                <div className="col-md-5">
                                    <label>Activity:

                                    </label>
                                </div>
                                <div className="col-md-7">
                                    <select className="form-control" id="activitySelect">
                                        <option selected>Choose activity </option>
                                        <option value="1.0">1.0</option>
                                        <option value="1.2">1.2</option>
                                        <option value="1.4">1.4</option>
                                        <option value="1.6">1.6</option>
                                        <option value="1.8">1.8</option>
                                        <option value="2.0">2.0</option>
                                    </select>
                                </div>

                            </div>
                            <div className="form-group">
                                <div className="col-md-5">
                                    <label>Target:

                                    </label>
                                </div>
                                <div className="col-md-7">
                                    <select className="form-control" id="targetSelect">
                                        <option selected>Choose target</option>
                                        <option value="reduction">Reduction</option>
                                        <option value="mass">Mass</option>
                                    </select>
                                </div>

                            </div>
                        </form>
                            <div className="form-group text-center">
                                <button id="Calculate" className="btn btn-primary btn-sm" >Calculate</button>
                                <div className="text-center calculateDiv">
                                    <Link to="/conclusion"><button id="calculateReal" className="btn btn-default btn-sm">Calculate</button></Link>
                                </div>
                            </div>
                            <div className="has-error">

                            </div>
                    </div>
                    <div className="panel-footer">

                    </div>
                </div>
            </div>
        );
    }
}

Bmr_calculator = connect(mapStateToProps,mapDispatchToProps)(Bmr_calculator);

export default Bmr_calculator;