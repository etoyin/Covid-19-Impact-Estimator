(this["webpackJsonpcovid-19-evaluator-ui"]=this["webpackJsonpcovid-19-evaluator-ui"]||[]).push([[0],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(45),o=a.n(r),l=(a(53),a(5)),i=a(6),c=a(8),p=a(7),m=(a(54),a(46)),d=function(e,t){var a=t.periodType,n=t.timeToElapse,s=t.totalHospitalBeds,r=function(e,t){var a;switch(e){case"months":a=30*t;break;case"weeks":a=7*t;break;default:a=t}return a}(a,n),o=e*Math.pow(2,Math.trunc(r/3)),l=.15*o,i=.35*s;return{currentlyInfected:e,infectionsByRequestedTime:o,severeCasesByRequestedTime:l,hospitalBedsByRequestedTime:Math.trunc(i-l),casesForICUByRequestedTime:Math.trunc(.05*o),casesForVentilatorsByRequestedTime:Math.trunc(.02*o)}},u=function(e){var t=e.reportedCases;return d(10*t,e)},h=function(e){var t=e.reportedCases;return d(50*t,e)},v=function(e){return{data:e,impact:u(e),severeImpact:h(e)}},E=a(28),b=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).switchBtwImPactAndSevere=function(e){return{chartData:{labels:["Reported Cases(".concat(n.props.result.data.reportedCases,")"),"Estimate Currently Infected(".concat(e.currentlyInfected,")"),"Infections in ".concat(n.props.result.data.timeToElapse," ").concat(n.props.result.data.periodType," (").concat(e.infectionsByRequestedTime,")"),"Cases in ICU (".concat(e.casesForICUByRequestedTime,")"),"Cases that will need Ventilators(".concat(e.casesForVentilatorsByRequestedTime,")")],datasets:[{label:"Severe Estimated Impact",data:[n.props.result.data.reportedCases,e.currentlyInfected,e.infectionsByRequestedTime,e.casesForICUByRequestedTime,e.casesForVentilatorsByRequestedTime],backgroundColor:["#45ec23","#45ec23","#45ec23","#45ec23","#45ec23"]}]}}},n.handleClick=function(){n.setState({toggleImpact:!n.state.toggleImpact})},n.state={impact:"",severeImpact:"",toggleImpact:!0},n}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(){var e=this;setTimeout((function(){void 0!==e.props.result&&e.setState({severeImpact:e.switchBtwImPactAndSevere(e.props.result.severeImpact),impact:e.switchBtwImPactAndSevere(e.props.result.impact)})}),1e3)}},{key:"render",value:function(){return void 0!==this.props.result&&console.log(this.props.result),this.state.toggleImpact?s.a.createElement("div",{className:"inner-flex-box"},s.a.createElement("div",{className:"button-div"},s.a.createElement("button",{className:"result-button",onClick:this.handleClick},this.state.toggleImpact?"Worst Case Scenerio":"Estimated Impact"),s.a.createElement("span",null,this.state.toggleImpact?"Best Case":"Worst Case")),s.a.createElement("div",{className:"inner-flex- child"},s.a.createElement(E.a,{data:this.state.impact.chartData,option:{maintainAspectRatio:!1}}))):s.a.createElement("div",{className:"inner-flex-box"},s.a.createElement("div",{className:"button-div"},s.a.createElement("button",{className:"result-button",onClick:this.handleClick},this.state.toggleImpact?"Worst Case Scenerio":"Estimated Impact"),s.a.createElement("span",null,this.state.toggleImpact?"Best Case":"Worst Case")),s.a.createElement("div",{className:"inner-flex- child"},s.a.createElement(E.a,{data:this.state.severeImpact.chartData,option:{maintainAspectRatio:!1}})))}}]),a}(n.Component),f=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).validateInput=function(e,t){var a=n.state.formErrors,s=n.state.popEntryInvalid,r=n.state.periodTypeInvalid,o=n.state.timeToElapseInValid,l=n.state.reportedCasesInvalid,i=n.state.reportedCasesInvalid;switch(e){case"population":s=Number(t)<10||t.length<1,a.population=s?"Population cannot be blank or less than 10":"";break;case"periodType":r=""==t,a.periodType=r?"Select a period Type":"";break;case"timeToElapse":o=Number(t)<1||t.length<1,a.timeToElapse=o?"input a figure above 1":"";break;case"reportedCases":l=Number(t)<1||t.length<1,a.reportedCases=l?"Reported Cases Cannot be blank or less than 1":"";break;case"totalHospitalBeds":i=Number(t)<1||t.length<1,a.totalHospitalBeds=i?"Total hospital beds cannot blank or less than 1":""}n.setState({periodTypeInvalid:r,popEntryInvalid:s,timeToElapseInValid:o,reportedCasesInvalid:l,totalHospitalBedsInvalid:i},n.validateForm)},n.validateForm=function(){n.setState({formValid:!n.state.periodTypeInvalid&&!n.state.popEntryInvalid&&!n.state.timeToElapseInValid&&!n.state.reportedCasesInvalid&&!n.state.totalHospitalBedsInvalid})},n.handleChange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(m.a)({},t,a),(function(){n.validateInput(t,a)}))},n.handleSubmit=function(e){e.preventDefault(),console.log(n.state.periodType),n.state.formValid?n.setState({result:v(n.state),submitError:""}):n.setState({submitError:"You need to enter all empty space to submit the form"})},n.state={population:"",periodType:"",timeToElapse:"",reportedCases:"",totalHospitalBeds:"",formErrors:{population:"",periodType:"",timeToElapse:"",reportedCases:"",totalHospitalBeds:""},popEntryInvalid:!0,periodTypeInvalid:!0,timeToElapseInValid:!0,reportedCasesInvalid:!0,totalHospitalBedsInvalid:!0,formValid:!1,submitError:"",canSubmit:!1},n}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("header",{className:"header"},"COVID-19 Impact Estimator"),s.a.createElement("div",{className:"flex-container"},s.a.createElement("form",{className:"flex-box"},s.a.createElement("p",{className:"submit-error"},this.state.submitError),s.a.createElement("div",{className:"error-text"},s.a.createElement(C,{formErrors:this.state.formErrors})),s.a.createElement("div",{className:"input-half"},s.a.createElement("label",null,"Population",s.a.createElement("input",{"data-population":!0,type:"number",name:"population",onChange:this.handleChange,placeholder:"Enter Population"})),s.a.createElement("label",null,"Period Type",s.a.createElement("select",{"data-period-type":!0,name:"periodType",value:this.state.periodType,onChange:this.handleChange,placeholder:"Select Period Type"},s.a.createElement("option",{value:""},"Select Period Type"),s.a.createElement("option",{value:"days"},"Days"),s.a.createElement("option",{value:"weeks"},"Weeks"),s.a.createElement("option",{value:"months"},"Months"))),s.a.createElement("label",null,"Time to elaspe",s.a.createElement("input",{"data-time-to-elapse":!0,type:"number",name:"timeToElapse",onChange:this.handleChange,placeholder:"Time to Elapse"})),s.a.createElement("label",null,"Reported Cases",s.a.createElement("input",{"data-reported-cases":!0,type:"number",name:"reportedCases",onChange:this.handleChange,placeholder:"Enter Reported Cases"})),s.a.createElement("label",null,"Total Hospital Beds",s.a.createElement("input",{"data-total-hospital-beds":!0,type:"number",name:"totalHospitalBeds",onChange:this.handleChange,placeholder:"Enter Total Hospital Beds"}))),s.a.createElement("div",{className:"button-div"},s.a.createElement("button",{class:"form-button","data-go-estimate":!0,type:"submit",onClick:this.handleSubmit},"Estimate"))),s.a.createElement("section",{className:"flex-box"},s.a.createElement(b,{result:this.state.result}))))}}]),a}(n.Component),C=function(e){var t=e.formErrors;return s.a.createElement("div",{className:"formErrors"},s.a.createElement("ul",null,Object.keys(t).map((function(e,a){if(t[e].length>0)return s.a.createElement("li",{key:a},t[e])}))))},y=f,I=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(y,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,t,a){e.exports=a(150)},53:function(e,t,a){},54:function(e,t,a){}},[[48,1,2]]]);
//# sourceMappingURL=main.dd5eb222.chunk.js.map