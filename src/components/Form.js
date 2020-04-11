import React, {Component} from 'react';
import {covid19ImpactEstimator} from './estimator.js'
import Result from './Result';

class Form extends Component {
  constructor(props){
    super(props)

    this.state = {
      population: '',
      periodType: '',
      timeToElapse: '',
      reportedCases: '',
      totalHospitalBeds: '',
      formErrors: {
        population: '',
        periodType: '',
        timeToElapse: '',
        reportedCases: '',
        totalHospitalBeds: ''
      },
      popEntryInvalid: true,
      periodTypeInvalid: true,
      timeToElapseInValid: true,
      reportedCasesInvalid: true,
      totalHospitalBedsInvalid: true,
      formValid: false,
      submitError: '',
      result: ''
    }
  }
  validateInput = (fieldName, value) => {
    let formErrors = this.state.formErrors;
    let popEntryInvalid = this.state.popEntryInvalid;
    let periodTypeInvalid = this.state.periodTypeInvalid;
    let timeToElapseInValid = this.state.timeToElapseInValid;
    let reportedCasesInvalid = this.state.reportedCasesInvalid;
    let totalHospitalBedsInvalid = this.state.reportedCasesInvalid;

    switch (fieldName) {
      case 'population':
        popEntryInvalid = Number(value) < 10 || value.length < 1;
        formErrors.population = popEntryInvalid ? 'Population cannot be blank or less than 10' : '';
        break;
      case 'periodType':
        periodTypeInvalid = value == null;
        formErrors.periodType = periodTypeInvalid ? 'Select a period Type' : '';
        break;
      case 'timeToElapse':
        timeToElapseInValid = Number(value) < 1 || value.length < 1;
        formErrors.timeToElapse = timeToElapseInValid ? 'input a figure above 1' : '';
        break;
      case 'reportedCases':
        reportedCasesInvalid = Number(value) < 1 || value.length < 1;
        formErrors.reportedCases = reportedCasesInvalid ? 'Reported Cases Cannot be blank or less than 1' : '';
        break;
      case 'totalHospitalBeds':
        totalHospitalBedsInvalid = Number(value) < 1 || value.length < 1;
        formErrors.totalHospitalBeds = totalHospitalBedsInvalid ? 'Total hospital beds cannot blank or less than 1' : '';
        break;
      default:
        break;
    }
    this.setState({
      periodTypeInvalid,
      popEntryInvalid,
      timeToElapseInValid,
      reportedCasesInvalid,
      totalHospitalBedsInvalid
    }, this.validateForm);
  }

  validateForm = () => {
    this.setState({
      formValid: !this.state.periodTypeInvalid && 
                !this.state.popEntryInvalid &&
                !this.state.timeToElapseInValid &&
                !this.state.reportedCasesInvalid &&
                !this.state.totalHospitalBedsInvalid
    })
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name] : value
    }, () => {
      this.validateInput(name, value)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state.formErrors);
    if(!this.state.formValid) {
      this.setState({
        submitError: 'You need to enter all empty space to submit the form'
      })
      console.log(this.state.submitError);
    }else{
      this.setState({
        result: covid19ImpactEstimator(this.state),
        submitError: ''
      })
      console.log(this.state.result);
    }
    

  }

  render(){
    return (
      <div className='container'>
        <header className='header'>COVID-19 Impact Estimator</header>
        <div className='flex-container'>
          <form className='flex-box'>
            <p className='submit-error'>{this.state.submitError}</p>
            <div className='error-text'>
              <FormErrors formErrors={this.state.formErrors} />                    
            </div>
            <div className='input-half'>
              <label>Population</label>
              <input data-population type='number' name='population' onChange={this.handleChange} placeholder='Enter Population'/>
              <label>Period Type</label>              
              <select data-period-type name='periodType' value={this.state.periodType} onChange={this.handleChange} placeholder='Select Period Type'>
                <option value=''>Select Period Type</option>
                <option value='days'>Days</option>
                <option value='weeks'>Weeks</option>
                <option value='months'>Months</option>
              </select>
              <label>Time to elaspe</label>
              <input data-time-to-elapse type='number' name='timeToElapse' onChange={this.handleChange} placeholder='Time to Elapse'/>
              <label>Reported Cases</label>              
              <input data-reported-cases type='number' name='reportedCases' onChange={this.handleChange} placeholder='Enter Reported Cases'/>
              <label>Total Hospital Beds</label>              
              <input data-total-hospital-beds type='number' name='totalHospitalBeds' onChange={this.handleChange} placeholder='Enter Total Hospital Beds'/>
            </div>
            <div className='button-div'>
              <button data-go-estimate type='submit' onClick={this.handleSubmit}>Estimate</button>
            </div>
          </form>

          <section className='flex-box'>
            <Result />
          </section>
        </div>
      </div>
    )
  }
}

const FormErrors = ({formErrors}) => {
  return(
    <div className='formErrors'>
      <ul>
        {
          Object.keys(formErrors).map((fieldName, i) => {
            if(formErrors[fieldName].length > 0){
              return (
                <li key={i}>{formErrors[fieldName]}</li>
              )
            }
          })
        }
      </ul>
    </div>
  )
}


export default Form;