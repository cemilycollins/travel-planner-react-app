(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),l=(a(16),a(7)),o=a(1),s=a(2),d=a(4),u=a(3),m=a(5),p="https://agile-meadow-25916.herokuapp.com/api/trips",h=a(6),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={start_date:null,end_date:null,name:null,img_url:null},a.changeHandler=function(e,t){a.setState(Object(h.a)({},t,e))},a.createNewTrip=function(){fetch(p,{method:"POST",body:JSON.stringify({start_date:a.state.start_date,end_date:a.state.end_date,name:a.state.name,img_url:a.state.img_url}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){a.props.addTrip(e),a.props.changeTripId(e._id),a.props.showHideForm()}).catch(function(e){return console.error(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{className:"ui form"},r.a.createElement("h4",{className:"ui dividing header"},"Create A New Trip"),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Name *"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{onChange:function(t){return e.changeHandler(t.target.value,"name")},type:"text",placeholder:"Trip Name"})),r.a.createElement("label",null,"Start Date *"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{onChange:function(t){return e.changeHandler(t.target.value,"start_date")},type:"text",placeholder:"MM/DD/YYYY"})),r.a.createElement("label",null,"End Date *"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{onChange:function(t){return e.changeHandler(t.target.value,"end_date")},type:"text",placeholder:"MM/DD/YYYY"})),r.a.createElement("label",null,"Image URL *"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{onChange:function(t){return e.changeHandler(t.target.value,"img_url")},type:"text",placeholder:"Image URL"})),r.a.createElement("div",{className:"ui button",onClick:this.createNewTrip},"Create Trip"))))}}]),t}(r.a.Component),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={AddTripClicked:!1},a.showHideForm=function(){a.setState({AddTripClicked:!a.state.AddTripClicked})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"ui inverted vertical menu"},r.a.createElement("div",{className:"active item",onClick:function(){return e.props.changeTripId(null)}},"Home"),this.props.trips?this.props.trips.map(function(t){return r.a.createElement("div",{className:"active item",onClick:function(){return e.props.changeTripId(t._id)}},t.name)}):null),r.a.createElement("div",{className:"ui blue button",onClick:this.showHideForm},this.state.AddTripClicked?"Close Trip Form":"Add New Trip"),this.state.AddTripClicked?r.a.createElement(f,{changeTripId:this.props.changeTripId,showHideForm:this.showHideForm,addTrip:this.props.addTrip}):null)}}]),t}(r.a.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Welcome to Your Travel Planner!"),r.a.createElement("p",null,"To get started, you can add a new trip or click on your existing trips on the left panel"))}}]),t}(r.a.Component),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={start_date:a.props.trip.start_date,end_date:a.props.trip.end_date,name:a.props.trip.name,img_url:a.props.trip.img_url},a.changeHandler=function(e,t){a.setState(Object(h.a)({},t,e))},a.editTrip=function(){fetch(p+"/".concat(a.props.trip._id),{method:"PUT",body:JSON.stringify({start_date:a.state.start_date,end_date:a.state.end_date,name:a.state.name,img_url:a.state.img_url}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){a.props.editTrip(e),a.props.toggleEditForm()}).catch(function(e){return console.error(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"edit-trip-form"},r.a.createElement("form",{className:"ui form"},r.a.createElement("h4",{className:"ui dividing header"},"Edit Trip"),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Name *"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{onChange:function(t){return e.changeHandler(t.target.value,"name")},type:"text",placeholder:"Trip Name",value:this.state.name})),r.a.createElement("label",null,"Start Date *"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{onChange:function(t){return e.changeHandler(t.target.value,"start_date")},type:"text",placeholder:"MM/DD/YYYY",value:this.state.start_date})),r.a.createElement("label",null,"End Date *"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{onChange:function(t){return e.changeHandler(t.target.value,"end_date")},type:"text",placeholder:"MM/DD/YYYY",value:this.state.end_date})),r.a.createElement("label",null,"Image URL *"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{onChange:function(t){return e.changeHandler(t.target.value,"img_url")},type:"text",placeholder:"Image URL",value:this.state.img_url})),r.a.createElement("div",{className:"ui button",onClick:this.editTrip},"Edit Trip"))))}}]),t}(r.a.Component),_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={editClicked:!1,deleteClicked:!1},a.toggleEditForm=function(){a.setState({editClicked:!a.state.editClicked})},a.deleteTrip=function(){fetch(p+"/".concat(a.props.trip._id),{method:"DELETE"}).then(function(e){return e.json()}).then(function(e){a.props.changeTripId(null),a.props.deleteTrip(e._id)}).catch(function(e){return console.error(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.trip;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{className:"ui top attached label"},"Trip Information"),r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"four wide column"},r.a.createElement("b",null,"Trip Name:"),r.a.createElement("p",null,e.name),r.a.createElement("b",null,"Start Date:"),r.a.createElement("p",null,e.start_date),r.a.createElement("b",null,"End Date:"),r.a.createElement("p",null,e.end_date)),r.a.createElement("div",{className:"ten wide column"},r.a.createElement("img",{className:"location_img",src:e.img_url,alt:" - "}))),this.state.editClicked?r.a.createElement(g,{trip:e,toggleEditForm:this.toggleEditForm,editTrip:this.props.editTrip}):null,r.a.createElement("div",{className:"ui two buttons"},r.a.createElement("div",{className:"ui basic blue button",onClick:this.toggleEditForm},this.state.editClicked?"Close Form":"Edit"),r.a.createElement("div",{className:"ui basic red button",onClick:this.deleteTrip},"Delete")))}}]),t}(r.a.Component),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={start_date:a.props.acc.start_date,end_date:a.props.acc.end_date,city:a.props.acc.city,address:a.props.acc.address,relevant_info:a.props.acc.relevant_info},a.changeHandler=function(e,t){a.setState(Object(h.a)({},t,e))},a.editAcc=function(e){fetch(p+"/accommodations/".concat(e),{method:"PUT",body:JSON.stringify({start_date:a.state.start_date,end_date:a.state.end_date,city:a.state.city,address:a.state.address,relevant_info:a.state.relevant_info,trip_id:a.props.trip_id}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){a.props.edit(e),a.props.toggleEditForm(null)}).catch(function(e){return console.error(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{className:"ui form"},r.a.createElement("h4",{className:"ui dividing header"},"Edit Accommodation"),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"City *"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{onChange:function(t){return e.changeHandler(t.target.value,"city")},type:"text",placeholder:"City",value:this.state.city})),r.a.createElement("label",null,"Start Date *"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{onChange:function(t){return e.changeHandler(t.target.value,"start_date")},type:"text",placeholder:"MM/DD/YYYY",value:this.state.start_date})),r.a.createElement("label",null,"End Date *"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{onChange:function(t){return e.changeHandler(t.target.value,"end_date")},type:"text",placeholder:"MM/DD/YYYY",value:this.state.end_date})),r.a.createElement("label",null,"Address *"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{onChange:function(t){return e.changeHandler(t.target.value,"address")},type:"text",placeholder:"Address",value:this.state.address})),r.a.createElement("label",null,"Relevant Info"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{onChange:function(t){return e.changeHandler(t.target.value,"relevant_info")},type:"text",placeholder:"Any Additional Details",value:this.state.relevant_info})),r.a.createElement("div",{className:"ui button",onClick:function(){return e.editAcc(e.props.acc._id)}},"Edit Accommodation"))))}}]),t}(r.a.Component),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).deleteAcc=function(e){fetch(p+"/accommodations/".concat(e),{method:"DELETE"}).then(function(e){return e.json()}).then(function(e){a.props.delete(e._id)}).catch(function(e){return console.error(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.acc;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},t.city),r.a.createElement("div",{className:"meta"},t.start_date," - ",t.end_date),r.a.createElement("div",{className:"description"},r.a.createElement("b",null,"Address: ",t.address),r.a.createElement("p",null,t.relevant_info))),r.a.createElement("div",{className:"extra content"},r.a.createElement("div",{className:"ui two buttons"},r.a.createElement("div",{className:"ui basic blue button",onClick:function(){return e.props.toggleEditForm(t)}},"Edit"),r.a.createElement("div",{className:"ui basic red button",onClick:function(){return e.deleteAcc(t._id)}},"Delete"))))}}]),t}(r.a.Component),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={start_date:"",end_date:"",city:"",address:"",relevant_info:""},a.changeHandler=function(e,t){a.setState(Object(h.a)({},t,e))},a.createAcc=function(){fetch(p+"/accommodations",{method:"POST",body:JSON.stringify({start_date:a.state.start_date,end_date:a.state.end_date,city:a.state.city,address:a.state.address,relevant_info:a.state.relevant_info,trip_id:a.props.trip_id}),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){a.props.add(e),a.props.toggleNewForm()}).catch(function(e){return console.error(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{className:"ui form"},r.a.createElement("h4",{className:"ui dividing header"},"New Accommodation"),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"City *"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{onChange:function(t){return e.changeHandler(t.target.value,"city")},type:"text",placeholder:"City",value:this.state.city})),r.a.createElement("label",null,"Start Date *"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{onChange:function(t){return e.changeHandler(t.target.value,"start_date")},type:"text",placeholder:"MM/DD/YYYY",value:this.state.start_date})),r.a.createElement("label",null,"End Date *"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{onChange:function(t){return e.changeHandler(t.target.value,"end_date")},type:"text",placeholder:"MM/DD/YYYY",value:this.state.end_date})),r.a.createElement("label",null,"Address *"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{onChange:function(t){return e.changeHandler(t.target.value,"address")},type:"text",placeholder:"Address",value:this.state.address})),r.a.createElement("label",null,"Relevant Info"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{onChange:function(t){return e.changeHandler(t.target.value,"relevant_info")},type:"text",placeholder:"Any Additional Details",value:this.state.relevant_info})),r.a.createElement("div",{className:"ui button",onClick:this.createAcc},"Create Accommodation"))))}}]),t}(r.a.Component),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={editFormData:null,newFormClicked:!1,accommodations:null,trip_id:a.props.trip_id},a.toggleEditForm=function(e){a.setState({editFormData:e})},a.toggleNewForm=function(){a.setState({newFormClicked:!a.state.newFormClicked})},a.delete=function(e){var t=a.state.accommodations.filter(function(t){return t._id!==e});a.setState({accommodations:t})},a.edit=function(e){var t=a.state.accommodations.map(function(t){return t._id===e._id?e:t});a.setState({accommodations:t})},a.add=function(e){a.state.accommodations?a.setState({accommodations:[].concat(Object(l.a)(a.state.accommodations),[e])}):a.setState({accommodations:[e]})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(p+"/accommodations/".concat(this.props.trip_id),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){t.length>0&&e.setState({accommodations:t})}).catch(function(e){return console.error(e)})}},{key:"componentDidUpdate",value:function(){var e=this;this.state.trip_id!==this.props.trip_id&&fetch(p+"/accommodations/".concat(this.props.trip_id),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){t.length>0?e.setState({accommodations:t,trip_id:e.props.trip_id}):e.setState({accommodations:null,trip_id:e.props.trip_id})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{className:"ui top attached label"},"Accommodations"),this.state.editFormData?r.a.createElement(b,{acc:this.state.editFormData,edit:this.edit,toggleEditForm:this.toggleEditForm,trip_id:this.props.trip_id}):null,r.a.createElement("div",{className:"ui blue button",onClick:this.toggleNewForm},this.state.newFormClicked?"Close Form":"Add New"),this.state.newFormClicked?r.a.createElement(N,{add:this.add,toggleNewForm:this.toggleNewForm,trip_id:this.props.trip_id}):null,this.state.accommodations?r.a.createElement("div",{className:"ui cards"},this.state.accommodations.map(function(t){return r.a.createElement(y,{acc:t,toggleEditForm:e.toggleEditForm,delete:e.delete,trip_id:e.props.trip_id})})):r.a.createElement("h2",null,"No Accommodations Yet!"))}}]),t}(r.a.Component),C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={trips:null,trip_id:null},a.addTrip=function(e){a.state.trips&&a.setState({trips:[].concat(Object(l.a)(a.state.trips),[e])})},a.editTrip=function(e){var t=a.state.trips.map(function(t){return t._id===e._id?e:t});a.setState({trips:t})},a.deleteTrip=function(e){var t=a.state.trips.filter(function(t){return t._id!==e});a.setState({trips:t})},a.findTrip=function(e){return a.state.trips.filter(function(t){return t._id===e})},a.changeTripId=function(e){a.setState({trip_id:e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;null===this.state.trips&&fetch(p,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){t.length>0&&e.setState({trips:t})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"top-header"},r.a.createElement("h1",{className:"header-text"},"Travel Planner")),r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"four wide column"},r.a.createElement(v,{trips:this.state.trips,trip_id:this.state.trip_id,changeTripId:this.changeTripId,addTrip:this.addTrip})),r.a.createElement("div",{className:"twelve wide column"},this.state.trip_id?null:r.a.createElement(E,null),this.state.trip_id&&this.state.trips.length>0?r.a.createElement("div",null,r.a.createElement(_,{trip:this.findTrip(this.state.trip_id)[0],editTrip:this.editTrip,deleteTrip:this.deleteTrip,changeTripId:this.changeTripId}),r.a.createElement(j,{trip_id:this.state.trip_id})):null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.35ceb7d2.chunk.js.map