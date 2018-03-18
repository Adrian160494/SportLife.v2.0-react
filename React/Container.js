/**
 * Created by Adrian on 11.03.2018.
 */

import React from 'react';
import {BrowserRouter, Route,Link} from 'react-router-dom';
import Bmr_calculator from './Bmr_calculator.js';
import MealCreator from './MealCreator.js';
import ProductBase from './ProductBase.js';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../Redux/reducers/reducers.js';
import axios from 'axios';
import $ from 'jquery';

class Container extends React.Component{
    constructor(){
        super();
        this.count = 0;
        this.scrollinCount = 0;
        this.slideDown = this.slideDown.bind(this);
        this.slideUp = this.slideUp.bind(this);
        this.slide = this.slide.bind(this);
        this.changeMeal = this.changeMeal.bind(this);
        this.changeBMR  =this.changeBMR.bind(this);
        this.changeBase = this.changeBase.bind(this);
    }

    componentDidMount(){
        axios.get('./PHP/getProtein.php').then((respons) => {
            console.log(respons);
            this.props.addProtein(respons.data);
        });
        axios.get('./PHP/getCarbon.php').then((respons) => {
            console.log(respons);
            this.props.addCarbon(respons.data);
        });
        axios.get('./PHP/getFat.php').then((response) => {
            console.log(response);
            this.props.addFat(response.data);
        });

        window.addEventListener('scroll',()=> {
            if(this.scrollinCount==0){
                this.slideUp();
                this.scrollinCount++;
            }
        });
    }

    slide(){
        if(this.count==0){
            this.slideDown();
            this.count++;
            if(this.scrollinCount>0){
                this.scrollinCount--;
            }
        } else{
            this.slideUp();
            this.count--;
            if(this.scrollinCount>0){
                this.scrollinCount--;
            }
        }
    }

    slideUp(){
       console.log('dzialam up');
        $('.navbar-mine').css('background', 'rgba(100,100,100,0.5)');
        $('.arrow-circle').removeClass('animate-arrow');
        $('.arrow-circle').addClass('unanimate-arrow');
        $('.nav-links').css('display', 'none');
        $('.logo').css('display','none');
        $('.navbar-mine').animate({
            height: '50px',
        }, 1000, 'swing');
        setTimeout(function () {
            $('.branda').css('display','block');
        }, 1500);

    }

    slideDown(){
        console.log('dzialam down');
        $('.navbar-mine').css('background', 'rgba(100,100,100,0.8)');
        $('.arrow-circle').removeClass('unanimate-arrow');
        $('.arrow-circle').addClass('animate-arrow');
        $('.branda').css('display','none');
        $('.navbar-mine').animate({
            height: '100px',
        },1000,'swing');
        setTimeout(function () {
            $('.nav-links').css('display','block');
            $('.logo').css('display','block');
        },1500)
    }

    changeMeal(){

    }

    changeBMR(){

    }
    changeBase(){
    }
    render(){
        return(<BrowserRouter>
                <div className="content">
                    <div className="navbar-mineContainer">
                        <div className="navbar-mine" id="navbar-mine">
                            <div className="navbar nav">
                                <div className="slide-button" onClick={this.slide}>
                                    <span id="arrow-circle" className="arrow-circle glyphicon glyphicon-arrow-down"></span>
                                </div>
                                <div className="branda" id="branda">
                                    <span className="branda">SportLife v2.0</span>
                                </div>
                                <div className="logo" id="logo">
                                    <Link to="/">
                                        <img src="image/navbar-logo.png" alt="doesn't work" width="300px" height="110px"/>
                                    </Link>
                                </div>
                                <ul className="nav-links nav navbar-nav pull-right" id="nav-links">
                                    <li onClick={this.changeMeal}><Link to='/meal_creator'>Meal Creator</Link></li>
                                    <li onClick={this.changeBMR}><Link to='/bmr_calculator'>BMR Calculator</Link></li>
                                    <li onClick={this.changeBase}><Link to='/product_base'>Product Base</Link></li>
                                    <li><a href="#/contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="main-content row">
                        <Route path="/" component={Container} />
                        <Route path='/meal_creator' component={MealCreator}/>
                        <Route path='/bmr_calculator' component={Bmr_calculator}/>
                        <Route path='/product_base' component={ProductBase}/>
                    </div>
                    <div className="footerContainer">
                        <div className="footer text-center">
                            <p className="copyright">Copyright by Adrian Ciejka</p>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

Container = connect(mapStateToProps,mapDispatchToProps)(Container);

export default Container;