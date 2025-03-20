"use strict";(self.webpackChunk_plone_volto=self.webpackChunk_plone_volto||[]).push([[2940,8200],{"./src/components/manage/Controlpanels/Controlpanel.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var _home_runner_work_volto_carousel_block_volto_carousel_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.3.5_@types+react@18.3.18__@types+react@18.3.18_react-do_2cp3bg7cxwk7ngedyi7dzketgq/node_modules/react-redux/es/index.js"),redux__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../../node_modules/.pnpm/redux@4.2.1/node_modules/redux/es/redux.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../../../node_modules/.pnpm/react-router@5.2.0_react@18.2.0/node_modules/react-router/esm/react-router.js"),_plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/helpers/Helmet/Helmet.jsx"),_plone_volto_helpers_FormValidation_FormValidation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/FormValidation/FormValidation.jsx"),react_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Container/Container.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),react_intl__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/index.js"),react_intl__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/injectIntl.js"),react_toastify__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../../node_modules/.pnpm/react-toastify@5.5.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-toastify/esm/react-toastify.js"),_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/theme/Icon/Icon.jsx"),_plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/manage/Toolbar/Toolbar.jsx"),_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/manage/Toast/Toast.jsx"),_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/manage/Form/index.tsx"),_plone_volto_actions_controlpanels_controlpanels__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./src/actions/controlpanels/controlpanels.js"),_plone_volto_registry__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/registry.js"),_plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/icons/save.svg"),_plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_10__),_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/icons/clear.svg"),_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_11__),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const messages=(0,react_intl__WEBPACK_IMPORTED_MODULE_12__.defineMessages)({changesSaved:{id:"Changes saved.",defaultMessage:"Changes saved."},back:{id:"Back",defaultMessage:"Back"},save:{id:"Save",defaultMessage:"Save"},cancel:{id:"Cancel",defaultMessage:"Cancel"},info:{id:"Info",defaultMessage:"Info"},error:{id:"Error",defaultMessage:"Error"}});class Controlpanel extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),(0,_home_runner_work_volto_carousel_block_volto_carousel_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__.c)(this,"form",react__WEBPACK_IMPORTED_MODULE_0__.createRef()),this.onCancel=this.onCancel.bind(this),this.onSubmit=this.onSubmit.bind(this),this.state={isClient:!1,error:null}}componentDidMount(){this.props.getControlpanel(this.props.id),this.setState({isClient:!0})}UNSAFE_componentWillReceiveProps(nextProps){if(this.props.updateRequest.loading&&nextProps.updateRequest.error){var _nextProps$updateRequ,_nextProps$updateRequ2,_nextProps$updateRequ3,_nextProps$updateRequ4,_nextProps$updateRequ5,_nextProps$updateRequ6,_nextProps$updateRequ7,_nextProps$updateRequ8,_nextProps$updateRequ9,_DOMParser$parseFromS,_DOMParser$parseFromS2,_DOMParser$parseFromS3;const message=(null===(_nextProps$updateRequ=nextProps.updateRequest.error)||void 0===_nextProps$updateRequ||null===(_nextProps$updateRequ2=_nextProps$updateRequ.response)||void 0===_nextProps$updateRequ2||null===(_nextProps$updateRequ3=_nextProps$updateRequ2.body)||void 0===_nextProps$updateRequ3||null===(_nextProps$updateRequ4=_nextProps$updateRequ3.error)||void 0===_nextProps$updateRequ4?void 0:_nextProps$updateRequ4.message)||(null===(_nextProps$updateRequ5=nextProps.updateRequest.error)||void 0===_nextProps$updateRequ5||null===(_nextProps$updateRequ6=_nextProps$updateRequ5.response)||void 0===_nextProps$updateRequ6||null===(_nextProps$updateRequ7=_nextProps$updateRequ6.body)||void 0===_nextProps$updateRequ7?void 0:_nextProps$updateRequ7.message)||(null===(_nextProps$updateRequ8=nextProps.updateRequest.error)||void 0===_nextProps$updateRequ8||null===(_nextProps$updateRequ9=_nextProps$updateRequ8.response)||void 0===_nextProps$updateRequ9?void 0:_nextProps$updateRequ9.text)||"",error=(null===(_DOMParser$parseFromS=(new DOMParser).parseFromString(message,"text/html"))||void 0===_DOMParser$parseFromS||null===(_DOMParser$parseFromS2=_DOMParser$parseFromS.all)||void 0===_DOMParser$parseFromS2||null===(_DOMParser$parseFromS3=_DOMParser$parseFromS2[0])||void 0===_DOMParser$parseFromS3?void 0:_DOMParser$parseFromS3.textContent)||message,errorsList=(0,_plone_volto_helpers_FormValidation_FormValidation__WEBPACK_IMPORTED_MODULE_3__.ym)(error);let invariantErrors=[];Array.isArray(errorsList)&&(invariantErrors=(0,_plone_volto_helpers_FormValidation_FormValidation__WEBPACK_IMPORTED_MODULE_3__.ms)(errorsList)),this.setState({error:error}),invariantErrors.length>0&&react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_7__.c,{error:!0,title:this.props.intl.formatMessage(messages.error),content:invariantErrors.join(" - ")}))}this.props.updateRequest.loading&&nextProps.updateRequest.loaded&&react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.info(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_7__.c,{info:!0,title:this.props.intl.formatMessage(messages.info),content:this.props.intl.formatMessage(messages.changesSaved)}))}onSubmit(data){this.props.updateControlpanel(this.props.controlpanel["@id"],data)}onCancel(){this.props.history.goBack()}render(){const{filterControlPanelsSchema:filterControlPanelsSchema}=_plone_volto_registry__WEBPACK_IMPORTED_MODULE_9__.default.settings;return this.props.controlpanel?__jsx("div",{id:"page-controlpanel"},__jsx(_plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_2__.c,{title:this.props.controlpanel.title}),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c,null,__jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_8__.QF,{ref:this.form,title:this.props.controlpanel.title,schema:filterControlPanelsSchema(this.props.controlpanel),formData:this.props.controlpanel.data,requestError:this.state.error,onSubmit:this.onSubmit,onCancel:this.onCancel,hideActions:!0,loading:this.props.updateRequest.loading})),this.state.isClient&&(0,react_dom__WEBPACK_IMPORTED_MODULE_4__.createPortal)(__jsx(_plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_6__.c,{pathname:this.props.pathname,hideDefaultViewButtons:!0,inner:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c,{id:"toolbar-save",className:"save","aria-label":this.props.intl.formatMessage(messages.save),onClick:()=>this.form.current.onSubmit(),disabled:this.props.updateRequest.loading,loading:this.props.updateRequest.loading},__jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__.c,{name:_plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_10___default(),className:"circled",size:"30px",title:this.props.intl.formatMessage(messages.save)})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c,{className:"cancel","aria-label":this.props.intl.formatMessage(messages.cancel),onClick:()=>this.onCancel()},__jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__.c,{name:_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_11___default(),className:"circled",size:"30px",title:this.props.intl.formatMessage(messages.cancel)})))}),document.getElementById("toolbar"))):__jsx("div",null)}}(0,_home_runner_work_volto_carousel_block_volto_carousel_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_13__.c)(Controlpanel,"defaultProps",{controlpanel:null}),__webpack_exports__.default=(0,redux__WEBPACK_IMPORTED_MODULE_17__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_18__.cp,(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(((state,props)=>({controlpanel:state.controlpanels.controlpanel,updateRequest:state.controlpanels.update,id:props.match.params.id,pathname:props.location.pathname})),{updateControlpanel:_plone_volto_actions_controlpanels_controlpanels__WEBPACK_IMPORTED_MODULE_19__.gH,getControlpanel:_plone_volto_actions_controlpanels_controlpanels__WEBPACK_IMPORTED_MODULE_19__.Gm}),react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Ak)(Controlpanel),Controlpanel.__docgenInfo={description:"Controlpanel class.\n@class Controlpanel\n@extends Component",methods:[{name:"onSubmit",docblock:"Submit handler\n@method onSubmit\n@param {object} data Form data.\n@returns {undefined}",modifiers:[],params:[{name:"data",description:"Form data.",type:{name:"object"},optional:!1}],returns:{},description:"Submit handler"},{name:"onCancel",docblock:"Cancel handler\n@method onCancel\n@returns {undefined}",modifiers:[],params:[],returns:{},description:"Cancel handler"}],displayName:"Controlpanel",props:{controlpanel:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"shape",value:{"@id":{name:"string",required:!1},data:{name:"object",required:!1},schema:{name:"object",required:!1},title:{name:"string",required:!1}}},required:!1},updateControlpanel:{description:"",type:{name:"func"},required:!0},getControlpanel:{description:"",type:{name:"func"},required:!0},id:{description:"",type:{name:"string"},required:!0},updateRequest:{description:"",type:{name:"shape",value:{loading:{name:"bool",required:!1},loaded:{name:"bool",required:!1}}},required:!0},pathname:{description:"",type:{name:"string"},required:!0}}}},"./src/components/manage/Controlpanels/Controlpanels.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Controlpanels}});var _home_runner_work_volto_carousel_block_volto_carousel_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/helpers/Helmet/Helmet.jsx"),lodash_concat__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/concat.js"),lodash_concat__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_2__),lodash_filter__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/filter.js"),lodash_filter__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_3__),lodash_last__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/last.js"),lodash_last__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_4__),lodash_map__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/map.js"),lodash_map__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_5__),lodash_sortBy__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/sortBy.js"),lodash_sortBy__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_6__),lodash_uniqBy__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/uniqBy.js"),lodash_uniqBy__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_7__),react_intl__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/index.js"),react_intl__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/useIntl.js"),react_intl__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/message.js"),react_dom__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../../node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.3.5_@types+react@18.3.18__@types+react@18.3.18_react-do_2cp3bg7cxwk7ngedyi7dzketgq/node_modules/react-redux/es/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("../../../node_modules/.pnpm/react-router-dom@5.2.0_react@18.2.0/node_modules/react-router-dom/esm/react-router-dom.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Container/Container.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Message/Message.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Header/Header.js"),_plone_volto_components_theme_Error_Error__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/theme/Error/Error.jsx"),_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/theme/Icon/Icon.jsx"),_plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/manage/Toolbar/Toolbar.jsx"),_plone_volto_components_manage_Controlpanels_VersionOverview__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/components/manage/Controlpanels/VersionOverview.jsx"),_plone_volto_registry__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/registry.js"),_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/icons/back.svg"),_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_15__),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const messages=(0,react_intl__WEBPACK_IMPORTED_MODULE_16__.defineMessages)({sitesetup:{id:"Site Setup",defaultMessage:"Site Setup"},back:{id:"Back",defaultMessage:"Back"},versionoverview:{id:"Version Overview",defaultMessage:"Version Overview"},general:{id:"General",defaultMessage:"General"},addonconfiguration:{id:"Add-on Configuration",defaultMessage:"Add-on Configuration"},content:{id:"Content",defaultMessage:"Content"},moderatecomments:{id:"Moderate Comments",defaultMessage:"Moderate Comments"},usersandgroups:{id:"Users and Groups",defaultMessage:"Users and Groups"},usersControlPanelCategory:{id:"Users",defaultMessage:"Users"},users:{id:"Users",defaultMessage:"Users"},groups:{id:"Groups",defaultMessage:"Groups"},addons:{id:"Add-Ons",defaultMessage:"Add-Ons"},database:{id:"Database",defaultMessage:"Database"},usergroupmemberbership:{id:"User Group Membership",defaultMessage:"User Group Membership"},undo:{id:"Undo",defaultMessage:"Undo"},urlmanagement:{id:"URL Management",defaultMessage:"URL Management"},contentRules:{id:"Content Rules",defaultMessage:"Content Rules"},relations:{id:"Relations",defaultMessage:"Relations"}});function Controlpanels({location:location}){const intl=(0,react_intl__WEBPACK_IMPORTED_MODULE_17__.c)(),{0:isClient,1:setIsClient}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),{pathname:pathname}=location,controlpanels=(0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state=>state.controlpanels.controlpanels)),controlpanelsRequest=(0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state=>state.controlpanels.list)),systemInformation=(0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state=>state.controlpanels.systeminformation));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsClient(!0)}),[]);const error=null==controlpanelsRequest?void 0:controlpanelsRequest.error;if(error)return __jsx(_plone_volto_components_theme_Error_Error__WEBPACK_IMPORTED_MODULE_10__.c,{error:error});let customcontrolpanels=_plone_volto_registry__WEBPACK_IMPORTED_MODULE_14__.default.settings.controlpanels?_plone_volto_registry__WEBPACK_IMPORTED_MODULE_14__.default.settings.controlpanels.map((el=>(el.group=intl.formatMessage({id:el.group,defaultMessage:el.group})||el.group,el))):[];const{filterControlPanels:filterControlPanels}=_plone_volto_registry__WEBPACK_IMPORTED_MODULE_14__.default.settings,filteredControlPanels=lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(lodash_concat__WEBPACK_IMPORTED_MODULE_2___default()(filterControlPanels(controlpanels),customcontrolpanels,[{"@id":"/addons",group:intl.formatMessage(messages.general),title:intl.formatMessage(messages.addons)},{"@id":"/database",group:intl.formatMessage(messages.general),title:intl.formatMessage(messages.database)},{"@id":"/rules",group:intl.formatMessage(messages.content),title:intl.formatMessage(messages.contentRules)},{"@id":"/undo",group:intl.formatMessage(messages.general),title:intl.formatMessage(messages.undo)},{"@id":"/aliases",group:intl.formatMessage(messages.general),title:intl.formatMessage(messages.urlmanagement)},{"@id":"/relations",group:intl.formatMessage(messages.content),title:intl.formatMessage(messages.relations)},{"@id":"/moderate-comments",group:intl.formatMessage(messages.content),title:intl.formatMessage(messages.moderatecomments)},{"@id":"/users",group:intl.formatMessage(messages.usersControlPanelCategory),title:intl.formatMessage(messages.users)},{"@id":"/usergroupmembership",group:intl.formatMessage(messages.usersControlPanelCategory),title:intl.formatMessage(messages.usergroupmemberbership)},{"@id":"/groups",group:intl.formatMessage(messages.usersControlPanelCategory),title:intl.formatMessage(messages.groups)}]),(controlpanel=>(0,_home_runner_work_volto_carousel_block_volto_carousel_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_18__.c)((0,_home_runner_work_volto_carousel_block_volto_carousel_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_18__.c)({},controlpanel),{},{id:lodash_last__WEBPACK_IMPORTED_MODULE_4___default()(controlpanel["@id"].split("/"))}))),groups=lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_7___default()(filteredControlPanels,"group"),"group"),{controlPanelsIcons:icons}=_plone_volto_registry__WEBPACK_IMPORTED_MODULE_14__.default.settings;return __jsx("div",{className:"view-wrapper"},__jsx(_plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_1__.c,{title:intl.formatMessage(messages.sitesetup)}),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_19__.c,{className:"controlpanel"},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__.c.Group,{raised:!0},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__.c,{className:"primary"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_21__.c,{id:"Site Setup",defaultMessage:"Site Setup"})),systemInformation&&systemInformation.upgrade&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_22__.c,{attached:!0,warning:!0},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_21__.c,{id:"The site configuration is outdated and needs to be upgraded.",defaultMessage:"The site configuration is outdated and needs to be upgraded."})," ",__jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.cH,{to:"/controlpanel/plone-upgrade"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_21__.c,{id:"Please continue with the upgrade.",defaultMessage:"Please continue with the upgrade."}))),lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(groups,(group=>[__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__.c,{key:`header-${group}`,secondary:!0},group),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__.c,{key:`body-${group}`,attached:!0},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_24__.c,{doubling:!0,columns:6},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_24__.c.Row,null,lodash_map__WEBPACK_IMPORTED_MODULE_5___default()(lodash_sortBy__WEBPACK_IMPORTED_MODULE_6___default()(lodash_filter__WEBPACK_IMPORTED_MODULE_3___default()(filteredControlPanels,{group:group}),(controlpanel=>controlpanel.title)),(controlpanel=>__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_24__.c.Column,{key:controlpanel.id},__jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.cH,{to:`/controlpanel/${controlpanel.id}`},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_25__.c,{as:"h3",icon:!0,textAlign:"center"},__jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__.c,{name:(null==icons?void 0:icons[controlpanel.id])||icons.default,size:"48px"}),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_25__.c.Content,null,controlpanel.title)))))))))]))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__.c.Group,{raised:!0},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__.c,{className:"primary"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_21__.c,{id:"Version Overview",defaultMessage:"Version Overview"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__.c,{attached:!0},systemInformation?__jsx(_plone_volto_components_manage_Controlpanels_VersionOverview__WEBPACK_IMPORTED_MODULE_13__.default,systemInformation):null))),isClient&&(0,react_dom__WEBPACK_IMPORTED_MODULE_8__.createPortal)(__jsx(_plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_12__.c,{pathname:pathname,hideDefaultViewButtons:!0,inner:__jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.cH,{to:"/",className:"item"},__jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__.c,{name:_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_15___default(),className:"contents circled",size:"30px",title:intl.formatMessage(messages.back)}))}),document.getElementById("toolbar")))}Controlpanels.__docgenInfo={description:"Controlpanels container class.",methods:[],displayName:"Controlpanels"}},"./src/components/manage/Controlpanels/VersionOverview.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Controlpanels_VersionOverview}});var react=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),message=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/message.js"),isEmpty=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEmpty.js"),isEmpty_default=__webpack_require__.n(isEmpty),package_namespaceObject=JSON.parse('{"N9":"@plone/volto","WU":"18.10.1"}'),lib=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/index.js"),useIntl=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/useIntl.js"),registry=__webpack_require__("./src/registry.js"),__jsx=react.createElement;const messages=(0,lib.defineMessages)({no_addons:{id:"No addons found",defaultMessage:"No addons found"}}),voltoVersion=package_namespaceObject.WU,VersionOverview=({cmf_version:cmf_version,debug_mode:debug_mode,pil_version:pil_version,plone_version:plone_version,plone_restapi_version:plone_restapi_version,python_version:python_version,zope_version:zope_version})=>{const intl=(0,useIntl.c)(),{addonsInfo:addonsInfo}=registry.default.settings,isProject=package_namespaceObject.N9!=package_namespaceObject.N9;return __jsx(react.Fragment,null,__jsx("ul",{style:{fontSize:"16px",fontFamily:"Monospace",paddingLeft:"1rem"}},isProject?__jsx("li",null,package_namespaceObject.N9," ",package_namespaceObject.WU):null,voltoVersion&&__jsx("li",null,"Volto ",voltoVersion),__jsx("li",null,"Plone ",plone_version),__jsx("li",null,"plone.restapi ",plone_restapi_version),__jsx("li",null,"CMF ",cmf_version),__jsx("li",null,"Zope ",zope_version),__jsx("li",null,"Python ",python_version),__jsx("li",null,"PIL ",pil_version)),__jsx("h3",null,"Add-ons"),isEmpty_default()(addonsInfo)?__jsx("p",null,intl.formatMessage(messages.no_addons)):__jsx("ul",{style:{fontSize:"16px",fontFamily:"Monospace"}},addonsInfo.map((addon=>__jsx("li",{key:addon.name},`${addon.name} ${addon.version||""}`)))),"No"!==debug_mode&&__jsx("p",null,__jsx(message.c,{id:"Warning Regarding debug mode",defaultMessage:"You are running in 'debug mode'. This mode is intended for sites that are under development. This allows many configuration changes to be immediately visible, but will make your site run more slowly. To turn off debug mode, stop the server, set 'debug-mode=off' in your buildout.cfg, re-run bin/buildout and then restart the server process."})))};var Controlpanels_VersionOverview=VersionOverview;VersionOverview.__docgenInfo={description:"",methods:[],displayName:"VersionOverview"}}}]);