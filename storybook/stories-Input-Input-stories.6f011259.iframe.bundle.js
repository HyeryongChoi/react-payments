"use strict";(self.webpackChunkreact_payments=self.webpackChunkreact_payments||[]).push([[734],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./src/stories/Input/Input.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicInput:function(){return BasicInput},UnderlineInput:function(){return UnderlineInput},__namedExportsOrder:function(){return __namedExportsOrder}});var _BasicInput$parameter,_BasicInput$parameter2,_BasicInput$parameter3,_UnderlineInput$param,_UnderlineInput$param2,_UnderlineInput$param3,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),meta={title:"Example/Input",component:__webpack_require__("./src/components/input/Input.tsx").I,tags:["autodocs"]};__webpack_exports__.default=meta;var BasicInput={args:{designType:"basic",width:"200px"}},UnderlineInput={args:{designType:"underline",width:"200px"}};BasicInput.parameters=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},BasicInput.parameters),{},{docs:(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_BasicInput$parameter=BasicInput.parameters)||void 0===_BasicInput$parameter?void 0:_BasicInput$parameter.docs),{},{source:(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:"{\n  args: {\n    designType: 'basic',\n    width: '200px'\n  }\n}"},null===(_BasicInput$parameter2=BasicInput.parameters)||void 0===_BasicInput$parameter2||null===(_BasicInput$parameter3=_BasicInput$parameter2.docs)||void 0===_BasicInput$parameter3?void 0:_BasicInput$parameter3.source)})}),UnderlineInput.parameters=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},UnderlineInput.parameters),{},{docs:(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_UnderlineInput$param=UnderlineInput.parameters)||void 0===_UnderlineInput$param?void 0:_UnderlineInput$param.docs),{},{source:(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:"{\n  args: {\n    designType: 'underline',\n    width: '200px'\n  }\n}"},null===(_UnderlineInput$param2=UnderlineInput.parameters)||void 0===_UnderlineInput$param2||null===(_UnderlineInput$param3=_UnderlineInput$param2.docs)||void 0===_UnderlineInput$param3?void 0:_UnderlineInput$param3.source)})});var __namedExportsOrder=["BasicInput","UnderlineInput"]},"./src/components/input/Input.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:function(){return Input}});var _templateObject,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["designType","backgroundColor"],Input=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref,ref){var _ref$designType=_ref.designType,designType=void 0===_ref$designType?"basic":_ref$designType,backgroundColor=_ref.backgroundColor,props=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Style.Input,(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref:ref,className:designType,backgroundColor:backgroundColor},props))})),Style={Input:styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.input(_templateObject||(_templateObject=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n    display: flex;\n    align-items: center;\n\n    width: ",";\n    height: ",";\n\n    padding: 0;\n    border: 0;\n    border-radius: 7px;\n    background-color: ",";\n\n    font-size: 15px;\n    text-align: center;\n\n    :focus {\n      outline: none;\n      border-color: #75c4d2;\n      box-shadow: 0 0 4px #75c4d2;\n      background-color: #cddfe3;\n    }\n\n    ::placeholder {\n      color: #c6c6c6;\n    }\n\n    &.underline {\n      border-radius: 0;\n      border-bottom: 1px solid #737373;\n      background-color: transparent;\n\n      :focus {\n        box-shadow: 0 4px 4px -4px #75c4d2;\n      }\n    }\n  "])),(function(props){return props.width?"".concat(props.width):"36px"}),(function(props){return props.height?"".concat(props.height):"100%"}),(function(props){return props.backgroundColor?props.backgroundColor:"#ecebf1"}))};try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{designType:{defaultValue:{value:"basic"},description:"",name:"designType",required:!1,type:{name:"enum",value:[{value:'"basic"'},{value:'"underline"'}]}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}}}]);