(this.webpackJsonplifecycle=this.webpackJsonplifecycle||[]).push([[0],[,function(e,_,t){"use strict";var a=t(3),n=t(4),r=t(6),l=t(5),c=t(7),o=t(0),s=t.n(o),i=function(e){function _(){var e,t;Object(a.a)(this,_);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=Object(r.a)(this,(e=Object(l.a)(_)).call.apply(e,[this].concat(c)))).btnstyle={width:t.props.width||"24%",height:"70px",margin:"1px",fontSize:"1.5rem",backgroundColor:t.props.orange||"#6c757d"},t}return Object(c.a)(_,e),Object(n.a)(_,[{key:"render",value:function(){return s.a.createElement("button",{id:this.props.ops,className:"btn btn-secondary rounded-0",style:this.btnstyle,onClick:"="===this.props.label?this.props.calc:"AC"===this.props.label?this.props.clear:"<="===this.props.ops?this.props.clearOneDigit:this.props.createStatement,key:this.props.label},this.props.label)}}]),_}(o.Component);_.a=i},,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_fahim_Documents_AllMaterial_ReactJS_Exercise_ReactLifeCycle_Calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_home_fahim_Documents_AllMaterial_ReactJS_Exercise_ReactLifeCycle_Calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_home_fahim_Documents_AllMaterial_ReactJS_Exercise_ReactLifeCycle_Calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_home_fahim_Documents_AllMaterial_ReactJS_Exercise_ReactLifeCycle_Calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),_home_fahim_Documents_AllMaterial_ReactJS_Exercise_ReactLifeCycle_Calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),_home_fahim_Documents_AllMaterial_ReactJS_Exercise_ReactLifeCycle_Calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_components_button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1),App=function(_Component){function App(){var _getPrototypeOf2,_this;Object(_home_fahim_Documents_AllMaterial_ReactJS_Exercise_ReactLifeCycle_Calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=Object(_home_fahim_Documents_AllMaterial_ReactJS_Exercise_ReactLifeCycle_Calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,(_getPrototypeOf2=Object(_home_fahim_Documents_AllMaterial_ReactJS_Exercise_ReactLifeCycle_Calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(App)).call.apply(_getPrototypeOf2,[this].concat(args))),_this.state={statement:[],result:""},_this.mainCont={width:"40%",padding:"1px",marginTop:"10%",borderRadius:"10px",borderBottomLeftRadius:"3px",borderBottomRightRadius:"3px",paddingBottom:"5px"},_this.btnCont={width:"100%",padding:"0px",margin:"0px",display:"flex",justifyContent:"center",flexWrap:"wrap"},_this.handleChange=function(e){_this.setState({statement:Object(_home_fahim_Documents_AllMaterial_ReactJS_Exercise_ReactLifeCycle_Calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e.target.value)}),_this.forceUpdate()},_this.createStatement=function(e){var _=e.target.id,t=[].concat(Object(_home_fahim_Documents_AllMaterial_ReactJS_Exercise_ReactLifeCycle_Calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(_this.state.statement),[_]);_this.setState({statement:t}),_this.forceUpdate()},_this.calc=function(){var myStatement=_this.state.statement.join(""),result=eval(myStatement).toString().split("");_this.setState({result:result,statement:Object(_home_fahim_Documents_AllMaterial_ReactJS_Exercise_ReactLifeCycle_Calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(result)}),console.log("calc"),_this.forceUpdate()},_this.calcfromInput=function(event){event.preventDefault();var result=eval(_this.state.statement.join(""));_this.setState({result:result,statement:[result]}),console.log("calcfromInput"),_this.forceUpdate()},_this.cleanup=function(){_this.setState({statement:[],result:""})},_this.clearOneDigit=function(){var e=_this.state.statement;e.pop(),_this.setState({statement:Object(_home_fahim_Documents_AllMaterial_ReactJS_Exercise_ReactLifeCycle_Calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e)}),_this.forceUpdate()},_this}return Object(_home_fahim_Documents_AllMaterial_ReactJS_Exercise_ReactLifeCycle_Calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(App,_Component),Object(_home_fahim_Documents_AllMaterial_ReactJS_Exercise_ReactLifeCycle_Calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{style:this.mainCont,className:"container bg-dark col-3"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form",{onSubmit:this.calcfromInput},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input",{type:"text",value:this.state.statement.join(""),onChange:this.handleChange,className:"form-control bg-dark text-white border-0 pl-4",style:{fontSize:"150%",paddingTop:"40px",paddingBottom:"40px",marginTop:"20px",marginBottom:"20px"}})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{style:this.btnCont},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__.a,{ops:"",label:"AC",createStatement:this.createStatement,clear:this.cleanup}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__.a,{ops:"<=",label:"\u2190",clearOneDigit:this.clearOneDigit}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__.a,{ops:"%",label:"%",createStatement:this.createStatement}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__.a,{ops:"/",label:"/",createStatement:this.createStatement,orange:"#e07a3a"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__.a,{ops:"7",label:"7",createStatement:this.createStatement}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__.a,{ops:"8",label:"8",createStatement:this.createStatement}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__.a,{ops:"9",label:"9",createStatement:this.createStatement}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__.a,{ops:"*",label:"X",createStatement:this.createStatement,orange:"#e07a3a"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__.a,{ops:"4",label:"4",createStatement:this.createStatement}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__.a,{ops:"5",label:"5",createStatement:this.createStatement}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__.a,{ops:"6",label:"6",createStatement:this.createStatement}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__.a,{ops:"-",label:"-",createStatement:this.createStatement,orange:"#e07a3a"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__.a,{ops:"1",label:"1",createStatement:this.createStatement}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__.a,{ops:"2",label:"2",createStatement:this.createStatement}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__.a,{ops:"3",label:"3",createStatement:this.createStatement}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__.a,{ops:"+",label:"+",createStatement:this.createStatement,orange:"#e07a3a"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__.a,{ops:"0",label:"0",createStatement:this.createStatement,width:"48.5%"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__.a,{ops:".",label:".",createStatement:this.createStatement}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__.a,{ops:"=",label:"=",createStatement:this.createStatement,orange:"#e07a3a",calc:this.calc})))}}]),App}(react__WEBPACK_IMPORTED_MODULE_6__.Component);__webpack_exports__.a=App},function(e,_,t){e.exports=t(17)},,,,,function(e,_,t){},function(e,_,t){"use strict";t.r(_);var a=t(0),n=t.n(a),r=t(9),l=t.n(r),c=(t(16),t(10));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(c.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.a0e9a43a.chunk.js.map