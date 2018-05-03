/**
 * Created by Adrian on 18.04.2018.
 */
import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps,mapDispatchToProps} from '../Redux/reducers/reducers.js';

class Conclusion extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            sex: this.props.bmrReducer[0].sex,
            weight: this.props.bmrReducer[0].weight,
            height: this.props.bmrReducer[0].height,
            age: this.props.bmrReducer[0].age,
            activity: this.props.bmrReducer[0].activity,
            target: this.props.bmrReducer[0].target,
            cpm: '',
            cpmTarget:'',
            bmr:'',
        }
    }

    componentDidMount(){
        console.log(this.props.bmrReducer[0]);
        if (this.state.sex == 'male') {
            let first = 13.7 * this.state.weight;
            let second = 5 * this.state.height;
            let third = 6.76 * this.state.age;
            let bmrr = 66 + first + second - third;
            let cpm = bmrr * this.state.activity;
            let cpmTarget = 0;
            if (this.state.target == 'reduction') {
                cpmTarget = cpm - 300;
            } else {
                cpmTarget = cpm + 300;
            }
            this.state.cpm = cpm;
            this.state.cpmTarget = cpmTarget;
            this.state.bmr = bmrr;
        } else {
            let first = 9.6 * this.state.weight;
            let second = 1.8 * this.state.height;
            let third = 4.7 * this.state.age;
            let bmrr = 655 + first + second - third;
            let cpm = bmrr * this.state.activity;
            this.state.bmr = bmrr;
            let cpmTarget = 0;
            if (this.state.target == 'reduction') {
                cpmTarget = cpm - 300;
            } else {
                cpmTarget = cpm + 300;
            }
            this.state.cpm = cpm;
            this.state.cpmTarget = cpmTarget;
            this.state.bmr = bmrr;
        }
        document.getElementById('sexLabel').innerHTML = this.state.sex;
        document.getElementById('heightLabel').innerHTML = this.state.height;
        document.getElementById('weightLabel').innerHTML = this.state.weight;
        document.getElementById('ageLabel').innerHTML = this.state.age;
        document.getElementById('activityLabel').innerHTML = this.state.activity;
        document.getElementById('bmrLabel').innerHTML = this.state.bmr;
        document.getElementById('cpmLabel').innerHTML = this.state.cpm;
        document.getElementById('cpmTargetLabel').innerHTML = this.state.cpmTarget;
        document.getElementById('targetLabel').innerHTML = this.state.target;
    }


    render(){
        return(
            <div className="panel panel-danger conclusion">
                <div className="text-center">
                    <p className="tab-heading">Conclusion</p>
                </div>
                <div className="panel-body">
                    <div className="well text-center">
                        <div className="col-xs-12">
                            <div className="col-xs-6">
                                <label>Sex:</label>
                            </div>
                            <div className="col-xs-6">
                                <div id="sexLabel"></div>
                            </div>
                        </div>

                    </div>
                    <div className="well text-center">
                        <div className="col-xs-12">
                            <div className="col-xs-6">
                                <label>Weight:</label>
                            </div>
                            <div className="col-xs-6">
                                <div id="weightLabel"></div>
                            </div>
                        </div>

                    </div>
                    <div className="well text-center">
                        <div className="col-xs-12">
                            <div className="col-xs-6">
                                <label>Height:</label>
                            </div>
                            <div className="col-xs-6">
                                <div id="heightLabel"></div>
                            </div>
                        </div>

                    </div>
                    <div className="well text-center">
                        <div className="col-xs-12">
                            <div className="col-xs-6">
                                <label>Age:</label>
                            </div>
                            <div className="col-xs-6">
                                <div id="ageLabel"></div>
                            </div>
                        </div>

                    </div>
                    <div className="well text-center">
                        <div className="col-xs-12">
                            <div className="col-xs-6">
                                <label>Activity:</label>
                            </div>
                            <div className="col-xs-6">
                                <div id="activityLabel"></div>
                            </div>
                        </div>

                    </div>
                    <div className="well text-center">
                        <div className="col-xs-12">
                            <div className="col-xs-6">
                                <label>BMR:</label>
                            </div>
                            <div className="col-xs-6">
                                <div id="bmrLabel"></div>
                            </div>
                        </div>

                    </div>
                    <div className="well text-center">
                        <div className="col-xs-12">
                            <div className="col-xs-6">
                                <label>CPM:</label>
                            </div>
                            <div className="col-xs-6">
                                <div id="cpmLabel"></div>
                            </div>
                        </div>

                    </div>
                    <div className="well text-center">
                        <div className="col-xs-12">
                            <div className="col-xs-6">
                                <label>Target:</label>
                            </div>
                            <div className="col-xs-6">
                                <div id="targetLabel"></div>
                            </div>
                        </div>

                    </div>
                    <div className="well text-center">
                        <div className="col-xs-12">
                            <div className="col-xs-6">
                                <label>CPM Target:</label>
                            </div>
                            <div className="col-xs-6">
                                <div id="cpmTargetLabel"></div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="panel-footer text-center">
                    <h3>Stay well and good lack!</h3>
                </div>
            </div>
                );
    }
}

Conclusion =connect(mapStateToProps,mapDispatchToProps)(Conclusion);

export default Conclusion;
