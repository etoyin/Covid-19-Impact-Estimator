(this["webpackJsonpcovid-19-evaluator-ui"]=this["webpackJsonpcovid-19-evaluator-ui"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),l=a.n(o),s=(a(13),a(14),a(7)),i=a(1),c=a(2),p=a(4),d=a(3),u=function(e,t){var a=t.periodType,n=t.timeToElapse,r=t.totalHospitalBeds,o=function(e,t){var a;switch(e){case"months":a=30*t;break;case"weeks":a=7*t;break;default:a=t}return a}(a,n),l=e*Math.pow(2,Math.trunc(o/3)),s=.15*l,i=.35*r;return{currentlyInfected:e,infectionsByRequestedTime:l,severeCasesByRequestedTime:s,hospitalBedsByRequestedTime:Math.trunc(i-s),casesForICUByRequestedTime:Math.trunc(.05*l),casesForVentilatorsByRequestedTime:Math.trunc(.02*l)}},m=function(e){var t=e.reportedCases;return u(10*t,e)},h=function(e){var t=e.reportedCases;return u(50*t,e)},E=function(e){return{data:e,impact:m(e),severeImpact:h(e)}},v=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"result-display"}))}}]),a}(n.Component),b=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).validateInput=function(e,t){var a=n.state.formErrors,r=n.state.popEntryInvalid,o=n.state.periodTypeInvalid,l=n.state.timeToElapseInValid,s=n.state.reportedCasesInvalid,i=n.state.reportedCasesInvalid;switch(e){case"population":r=Number(t)<10||t.length<1,a.population=r?"Population cannot be blank or less than 10":"";break;case"periodType":o=null==t,a.periodType=o?"Select a period Type":"";break;case"timeToElapse":l=Number(t)<1||t.length<1,a.timeToElapse=l?"input a figure above 1":"";break;case"reportedCases":s=Number(t)<1||t.length<1,a.reportedCases=s?"Reported Cases Cannot be blank or less than 1":"";break;case"totalHospitalBeds":i=Number(t)<1||t.length<1,a.totalHospitalBeds=i?"Total hospital beds cannot blank or less than 1":""}n.setState({periodTypeInvalid:o,popEntryInvalid:r,timeToElapseInValid:l,reportedCasesInvalid:s,totalHospitalBedsInvalid:i},n.validateForm)},n.validateForm=function(){n.setState({formValid:!n.state.periodTypeInvalid&&!n.state.popEntryInvalid&&!n.state.timeToElapseInValid&&!n.state.reportedCasesInvalid&&!n.state.totalHospitalBedsInvalid})},n.handleChange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(s.a)({},t,a),(function(){n.validateInput(t,a)}))},n.handleSubmit=function(e){e.preventDefault(),n.state.formValid?(n.setState({result:E(n.state),submitError:""}),console.log(n.state.result)):(n.setState({submitError:"You need to enter all empty space to submit the form"}),console.log(n.state.submitError))},n.state={population:"",periodType:"",timeToElapse:"",reportedCases:"",totalHospitalBeds:"",formErrors:{population:"",periodType:"",timeToElapse:"",reportedCases:"",totalHospitalBeds:""},popEntryInvalid:!0,periodTypeInvalid:!0,timeToElapseInValid:!0,reportedCasesInvalid:!0,totalHospitalBedsInvalid:!0,formValid:!1,submitError:"",result:""},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"header"},"COVID-19 Impact Estimator"),r.a.createElement("div",{className:"flex-container"},r.a.createElement("form",{className:"flex-box"},r.a.createElement("p",{className:"submit-error"},this.state.submitError),r.a.createElement("div",{className:"error-text"},r.a.createElement(f,{formErrors:this.state.formErrors})),r.a.createElement("div",{className:"input-half"},r.a.createElement("label",null,"Population"),r.a.createElement("input",{"data-population":!0,type:"number",name:"population",onChange:this.handleChange,placeholder:"Enter Population"}),r.a.createElement("label",null,"Period Type"),r.a.createElement("select",{"data-period-type":!0,name:"periodType",value:this.state.periodType,onChange:this.handleChange,placeholder:"Select Period Type"},r.a.createElement("option",{value:""},"Select Period Type"),r.a.createElement("option",{value:"days"},"Days"),r.a.createElement("option",{value:"weeks"},"Weeks"),r.a.createElement("option",{value:"months"},"Months")),r.a.createElement("label",null,"Time to elaspe"),r.a.createElement("input",{"data-time-to-elapse":!0,type:"number",name:"timeToElapse",onChange:this.handleChange,placeholder:"Time to Elapse"}),r.a.createElement("label",null,"Reported Cases"),r.a.createElement("input",{"data-reported-cases":!0,type:"number",name:"reportedCases",onChange:this.handleChange,placeholder:"Enter Reported Cases"}),r.a.createElement("label",null,"Total Hospital Beds"),r.a.createElement("input",{"data-total-hospital-beds":!0,type:"number",name:"totalHospitalBeds",onChange:this.handleChange,placeholder:"Enter Total Hospital Beds"})),r.a.createElement("div",{className:"button-div"},r.a.createElement("button",{"data-go-estimate":!0,type:"submit",onClick:this.handleSubmit},"Estimate"))),r.a.createElement("section",{className:"flex-box"},r.a.createElement(v,null))))}}]),a}(n.Component),f=function(e){var t=e.formErrors;return r.a.createElement("div",{className:"formErrors"},r.a.createElement("ul",null,Object.keys(t).map((function(e,a){if(t[e].length>0)return r.a.createElement("li",{key:a},t[e])}))))},y=b;var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.fbf6717a.chunk.js.map