/**
 * Created by Adrian on 11.03.2018.
 */

import React from 'react';
import {browserHistory} from 'react-router';
import {BrowserRouter, Route,Link} from 'react-router-dom';
import Bmr_calculator from './Bmr_calculator.js';
import MealCreator from './MealCreator.js';
import ProductBase from './ProductBase.js';
import MakroCalculator from './MakroCalculator.js';
import Conclusion from './Conclusion.js';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../Redux/reducers/reducers.js';
import axios from 'axios';
import $ from 'jquery';

class Container extends React.Component{
    constructor(){
        super();
        this.count = 0;
        this.scrollinCount = 0;
        this.menuCount = 0;
        this.slideDown = this.slideDown.bind(this);
        this.slideUp = this.slideUp.bind(this);
        this.slide = this.slide.bind(this);
        this.changeMeal = this.changeMeal.bind(this);
        this.changeBMR  =this.changeBMR.bind(this);
        this.changeBase = this.changeBase.bind(this);
        this.changeCalc = this.changeCalc.bind(this);
        this.menu = this.menu.bind(this);
        this.showMobile = this.showMobile.bind(this);
        this.hideMobile = this.hideMobile.bind(this);
        this.hideAllMobile = this.hideAllMobile.bind(this);
        this.hideHome = this.hideHome.bind(this);
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

        document.getElementById('changeCalc').addEventListener('click',()=>{
            this.changeCalc();
            this.hideMobile();
            this.menuCount=0;
            $('.menuButton').addClass('glyphicon-menu-hamburger');
            $('.menuButton').removeClass('glyphicon-plus-sign');
            $('.menuButton').addClass('unrotate');
            $('.menuButton').removeClass('rotate');
        });
        document.getElementById('changeCalc1').addEventListener('click',()=>{
            this.changeCalc();
        });
        document.getElementById('changeBase').addEventListener('click',()=>{
            this.changeBase();
            this.hideMobile();
            this.menuCount=0;
            $('.menuButton').addClass('glyphicon-menu-hamburger');
            $('.menuButton').removeClass('glyphicon-plus-sign');
            $('.menuButton').addClass('unrotate');
            $('.menuButton').removeClass('rotate');
        });
        document.getElementById('changeBase1').addEventListener('click',()=>{
            this.changeBase();
        });
        document.getElementById('changeBMR').addEventListener('click',()=>{
            this.changeBMR();
            this.hideMobile();
            this.menuCount=0;
            $('.menuButton').addClass('glyphicon-menu-hamburger');
            $('.menuButton').removeClass('glyphicon-plus-sign');
            $('.menuButton').addClass('unrotate');
            $('.menuButton').removeClass('rotate');
        });
        document.getElementById('changeBMR1').addEventListener('click',()=>{
            this.changeBMR();
        });
        document.getElementById('changeMeal').addEventListener('click',()=>{
            this.changeMeal();
            this.hideMobile();
            this.menuCount=0;
            $('.menuButton').addClass('glyphicon-menu-hamburger');
            $('.menuButton').removeClass('glyphicon-plus-sign');
            $('.menuButton').addClass('unrotate');
            $('.menuButton').removeClass('rotate');
        });
        document.getElementById('changeMeal1').addEventListener('click',()=>{
            this.changeMeal();
        });
    }

    hideHome(){
        document.getElementById('home_page').style.display = 'none';
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
        $('.navbar-mine').css({
            background:'rgba(100,100,100,0.5)',
            border: '0px solid black',
            transition: '1s all'
        });
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

    slideDown() {
        console.log('dzialam down');
        $('.navbar-mine').css({
            background: 'rgba(100,100,100,0.8)',
            border: '2px solid black',
            transition: '1s all'
        });
        $('.arrow-circle').removeClass('unanimate-arrow');
        $('.arrow-circle').addClass('animate-arrow');
        $('.branda').css('display', 'none');
        $('.navbar-mine').animate({
            height: '100px',
        }, 1000, 'swing');
        setTimeout(function () {
            $('.nav-links').css('display', 'block');
            $('.logo').css('display', 'block');
        }, 1500)
    }

    changeMeal(){
        this.hideHome();
        $('body').css({
            background: 'url(./image/background1.jpg)',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'

        });
    }

    changeCalc(){
        this.hideHome();
            $('body').css({
                background: 'url(./image/backgorund4.jpg)',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'

            });
    }

    changeBMR(){
        this.hideHome();
        $('body').css({
            background: 'url(./image/background3.jpg)',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'

        });
    }
    changeBase(){
        this.hideHome();
        $('body').css({
            background: 'url(./image/backgorund2.jpg)',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'

        });
    }

    menu(){
        if(this.menuCount==0){
            this.showMobile();
            this.menuCount++;
            $('.menuButton').removeClass('glyphicon-menu-hamburger');
            $('.menuButton').addClass('glyphicon-plus-sign');
            $('.menuButton').removeClass('unrotate');
            $('.menuButton').addClass('rotate');
        } else {
            this.hideMobile();
            this.menuCount=0;
            $('.menuButton').addClass('glyphicon-menu-hamburger');
            $('.menuButton').removeClass('glyphicon-plus-sign');
            $('.menuButton').addClass('unrotate');
            $('.menuButton').removeClass('rotate');
        }
    }

    showMobile() {
        $('.navigation-mobile').css({
            display: 'block',
            transition: '2s all',
        });
    }

    hideMobile() {
        $('.navigation-mobile').css({
            display: 'none',
            transition: '2s all',
        });
    }


    hideAllMobile(){
        this.hideMobile();
    menuCount=0;
    $('.menuButton').addClass('glyphicon-menu-hamburger');
    $('.menuButton').removeClass('glyphicon-plus-sign');
    $('.menuButton').addClass('unrotate');
    $('.menuButton').removeClass('rotate');
}

    render(){
        return(<BrowserRouter>
                <div className="content">
                    <div className="navbar-mineContainer">
                        <div className="navbar-mine" id="navbar-mine">
                            <div className="navbar nav">
                                <div className="slide-button" onClick={this.slide}>
                                    <span id="arrow-circle" className="arrow-circle glyphicon glyphicon-menu-hamburger"></span>
                                </div>
                                <div className="branda" id="branda">
                                    <span className="branda">SportLife v2.0</span>
                                </div>
                                <div className="logo" id="logo">
                                    <img src="image/navbar-logo.png" alt="doesn't work" width="300px" height="110px"/>
                                </div>
                                <ul className="nav-links nav navbar-nav pull-right" id="nav-links">
                                    <li id="changeMeal1"><Link to='/meal_creator'>Meal Creator</Link></li>
                                    <li id="changeBMR1"><Link to='/bmr_calculator'>BMR Calculator</Link></li>
                                    <li id="changeBase1"><Link to='/product_base'>Product Base</Link></li>
                                    <li id="changeCalc1"><Link to='/makro_calculator'>Calculator</Link></li>
                                </ul>
                            </div>
                        </div>
                        <span className="menuButton glyphicon glyphicon-menu-hamburger" onClick={this.menu}></span>
                        <div className="navigation-mobile text-center">
                            <div className="branda2">
                                <span className="branda2">SportLife v2.0</span>
                            </div>
                            <ul className="nav-links2 nav">
                                <li id="changeMeal"><Link to='/meal_creator'>Meal Creator</Link></li>
                                <li id="changeBMR"><Link to='/bmr_calculator'>BMR Calculator</Link></li>
                                <li id="changeBase"><Link to='/product_base'>Product Base</Link></li>
                                <li id="changeCalc"><Link to='/makro_calculator'>Calculator</Link></li>
                            </ul>
                            <div className="logo2">
                                <img src="image/navbar-logo.png" alt="doesn't work" width="300px" height="110px"/>
                            </div>
                        </div>
                    </div>
                    <div className="main-content row">
                        <div className="home_page" id="home_page">
                            <Bmr_calculator/>
                        </div>
                        <Route path='/meal_creator' component={MealCreator} />
                        <Route path='/bmr_calculator' component={Bmr_calculator}/>
                        <Route path='/product_base' component={ProductBase}/>
                        <Route path='/makro_calculator' component={MakroCalculator}/>
                        <Route path='/conclusion' component={Conclusion}/>
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