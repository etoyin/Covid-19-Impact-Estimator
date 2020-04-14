import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';



class Result extends Component {
  constructor(props){
    super(props);
    this.state = {
      impact: '',
      severeImpact: '',
      toggleImpact: true
    }
  }
  switchBtwImPactAndSevere = (data) => {
    return {
      chartData: {
        labels: [
          `Reported Cases(${this.props.result.data.reportedCases})`, 
          `Estimate Currently Infected(${data.currentlyInfected})`, 
          `Infections in ${this.props.result.data.timeToElapse} ${this.props.result.data.periodType} (${data.infectionsByRequestedTime})`,
          `Cases in ICU (${data.casesForICUByRequestedTime})`,
          `Cases that will need Ventilators(${data.casesForVentilatorsByRequestedTime})`
        ],
        datasets: [
          {
            label: 'Severe Estimated Impact',
            data: [
              this.props.result.data.reportedCases,
              data.currentlyInfected,
              data.infectionsByRequestedTime,
              data.casesForICUByRequestedTime,
              data.casesForVentilatorsByRequestedTime
            ],
            backgroundColor: ['#45ec23', '#45ec23', '#45ec23', '#45ec23', '#45ec23']
          }
        ]

      },

    }
  }
  componentWillReceiveProps() {
    setTimeout(() => {
      if(this.props.result !== undefined ){
        this.setState({
          severeImpact: this.switchBtwImPactAndSevere(this.props.result.severeImpact),
          impact: this.switchBtwImPactAndSevere(this.props.result.impact)
        });
      }
    }, 1000);
  }
  handleClick = () => {
    this.setState({
      toggleImpact: !this.state.toggleImpact
    })
  }
  render() {
    if(this.props.result !== undefined) {
      console.log(this.props.result);
    }
    if(this.state.toggleImpact){
      return(
        <div className='inner-flex-box'>
          <div className='button-div'>
            <button className='result-button' onClick={this.handleClick}>{(!this.state.toggleImpact)? 'Estimated Impact' : 'Worst Case Scenerio'}</button>
            <span>{(this.state.toggleImpact) ? 'Best Case' : 'Worst Case'}</span>
          </div>         
          <div className='inner-flex- child'>
          <Bar 
            data={this.state.impact.chartData}
            option={{
              maintainAspectRatio: false
            }}
          />  
          </div>
        </div>
      )
    } else {
      return(
        <div className='inner-flex-box'>
          <div className='button-div'>
            <button className='result-button' onClick={this.handleClick}>{(!this.state.toggleImpact)? 'Estimated Impact' : 'Worst Case Scenerio'}</button>
            <span>{(this.state.toggleImpact) ? 'Best Case' : 'Worst Case'}</span>
          </div>
          <div className='inner-flex- child'>
          <Bar 
            data={this.state.severeImpact.chartData}
            option={{
              maintainAspectRatio: false
            }}
          />  
          </div>
        </div>
      )
    }
    
  }
}

export default Result;