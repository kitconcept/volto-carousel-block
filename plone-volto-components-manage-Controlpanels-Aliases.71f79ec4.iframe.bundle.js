"use strict";(self.webpackChunk_plone_volto=self.webpackChunk_plone_volto||[]).push([[5772],{"./src/components/manage/Controlpanels/Aliases.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.3.5_@types+react@18.3.18__@types+react@18.3.18_react-do_2cp3bg7cxwk7ngedyi7dzketgq/node_modules/react-redux/es/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../../node_modules/.pnpm/react-router@5.2.0_react@18.2.0/node_modules/react-router/esm/react-router.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_34__=__webpack_require__("../../../node_modules/.pnpm/react-router-dom@5.2.0_react@18.2.0/node_modules/react-router-dom/esm/react-router-dom.js"),_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/helpers/Url/Url.js"),_plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/Helmet/Helmet.jsx"),_plone_volto_actions_aliases_aliases__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./src/actions/aliases/aliases.js"),react_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Container/Container.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Form/Form.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Header/Header.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Input/Input.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/addons/Radio/Radio.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Table/Table.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Loader/Loader.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/modules/Checkbox/Checkbox.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/addons/Pagination/Pagination.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_33__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Menu/Menu.js"),react_intl__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/index.js"),react_intl__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/useIntl.js"),react_intl__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/message.js"),_plone_volto_components_manage_Widgets_DatetimeWidget__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/manage/Widgets/DatetimeWidget.jsx"),_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/manage/Widgets/FormFieldWrapper.jsx"),_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/manage/Form/index.tsx"),_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/theme/Icon/Icon.jsx"),_plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/manage/Toolbar/Toolbar.jsx"),_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/manage/Toast/Toast.jsx"),_plone_volto_components_theme_FormattedDate_FormattedDate__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/theme/FormattedDate/FormattedDate.jsx"),_plone_volto_hooks_client_useClient__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/hooks/client/useClient.js"),_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/icons/back.svg"),_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_13__),_plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/icons/editing.svg"),_plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(_plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_14__),lodash_map__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/map.js"),lodash_map__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_15__),react_toastify__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../../../node_modules/.pnpm/react-toastify@5.5.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-toastify/esm/react-toastify.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const messages=(0,react_intl__WEBPACK_IMPORTED_MODULE_16__.defineMessages)({back:{id:"Back",defaultMessage:"Back"},aliases:{id:"URL Management",defaultMessage:"URL Management"},AddUrl:{id:"Add Alternative URL",defaultMessage:"Add Alternative URL"},EditUrl:{id:"Edit Alternative URL",defaultMessage:"Edit Alternative URL"},success:{id:"Success",defaultMessage:"Success"},successAdd:{id:"Alias has been added",defaultMessage:"Alias has been added"},successUpload:{id:"Aliases have been uploaded.",defaultMessage:"Aliases have been uploaded."},successRemove:{id:"Aliases have been removed.",defaultMessage:"Aliases have been removed."},filterByPrefix:{id:"Filter by prefix",defaultMessage:"Filter by path"},manualOrAuto:{id:"Manually or automatically added?",defaultMessage:"Manually or automatically added?"},createdAfter:{id:"Created after",defaultMessage:"Created after"},createdBefore:{id:"Created before",defaultMessage:"Created before"},altUrlPathTitle:{id:"Alternative url path (Required)",defaultMessage:"Alternative URL path (Required)"},altUrlError:{id:"Alternative url path must start with a slash.",defaultMessage:"Alternative URL path must start with a slash."},targetUrlPathTitle:{id:"Target Path (Required)",defaultMessage:"Target Path (Required)"},BulkUploadAltUrls:{id:"BulkUploadAltUrls",defaultMessage:"Bulk upload CSV"},CSVFile:{id:"CSVFile",defaultMessage:"CSV file"},Both:{id:"Both",defaultMessage:"Both"},Automatically:{id:"Automatically",defaultMessage:"Automatically"},Manually:{id:"Manually",defaultMessage:"Manually"},examplePath:{id:"examplePath",defaultMessage:"/example"}}),filterChoices=[{label:"Both",value:""},{label:"Automatically",value:"no"},{label:"Manually",value:"yes"}],itemsPerPageChoices=[10,25,50,"All"],Aliases=props=>{const title=props,intl=(0,react_intl__WEBPACK_IMPORTED_MODULE_17__.c)(),dispatch=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(),{pathname:pathname}=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_18__.IT)(),history=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Uz)(),hasAdvancedFiltering=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state=>{var _state$site$data,_state$site$data$feat;return null===(_state$site$data=state.site.data)||void 0===_state$site$data||null===(_state$site$data$feat=_state$site$data.features)||void 0===_state$site$data$feat?void 0:_state$site$data$feat.filter_aliases_by_date})),hasBulkUpload=void 0!==hasAdvancedFiltering,aliases=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state=>state.aliases)),{0:filterType,1:setFilterType}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(filterChoices[0]),{0:createdBefore,1:setCreatedBefore}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),{0:createdAfter,1:setCreatedAfter}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),{0:aliasesToRemove,1:setAliasesToRemove}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),{0:filterQuery,1:setFilterQuery}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),{0:activePage,1:setActivePage}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),{0:itemsPerPage,1:setItemsPerPage}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10),{0:addModalOpen,1:setAddModalOpen}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),{0:addError,1:setAddError}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),{0:editingData,1:setEditingData}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),{0:uploadModalOpen,1:setUploadModalOpen}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),{0:uploadError,1:setUploadError}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),{0:csvErrors,1:setCSVErrors}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),isClient=(0,_plone_volto_hooks_client_useClient__WEBPACK_IMPORTED_MODULE_12__.W)(),updateResults=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{const options={query:filterQuery,manual:filterType.value,batchStart:(activePage-1)*itemsPerPage,batchSize:"All"===itemsPerPage?999999999999:itemsPerPage};hasAdvancedFiltering?(options.start=createdAfter||"",options.end=createdBefore||""):options.datetime=createdBefore||"",dispatch((0,_plone_volto_actions_aliases_aliases__WEBPACK_IMPORTED_MODULE_19__.cj)((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_2__.U$)(pathname),options))}),[activePage,createdAfter,createdBefore,dispatch,filterQuery,filterType.value,hasAdvancedFiltering,itemsPerPage,pathname]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>updateResults()),[activePage,itemsPerPage]);const pages=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{let pages=Math.ceil(aliases.items_total/itemsPerPage);return(0===pages||isNaN(pages))&&(pages=""),pages}),[aliases.items_total,itemsPerPage]);return __jsx("div",{id:"page-aliases"},__jsx(_plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_3__.c,{title:intl.formatMessage(messages.aliases)}),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_21__.c,null,__jsx("article",{id:"content"},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_22__.c.Group,{raised:!0},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_22__.c,{className:"primary"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_23__.c,{id:"URL Management",defaultMessage:"URL Management",values:{title:__jsx("q",null,title)}})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_22__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_24__.c,{primary:!0,id:"add-alt-url",onClick:()=>setAddModalOpen(!0)},intl.formatMessage(messages.AddUrl),"…"),addModalOpen&&__jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_7__.Ah,{open:!0,onSubmit:formData=>{const{altUrlPath:altUrlPath,targetUrlPath:targetUrlPath}=formData;if(!altUrlPath||"/"!==altUrlPath.charAt(0))return void setAddError(intl.formatMessage(messages.altUrlError));(editingData?dispatch((0,_plone_volto_actions_aliases_aliases__WEBPACK_IMPORTED_MODULE_19__.Oq)("",{items:[{path:editingData.altUrlPath}]})):Promise.resolve()).then((()=>{dispatch((0,_plone_volto_actions_aliases_aliases__WEBPACK_IMPORTED_MODULE_19__.W0)("",{items:[{path:altUrlPath,"redirect-to":targetUrlPath}]})).then((()=>{updateResults(),setAddModalOpen(!1),setEditingData(null),react_toastify__WEBPACK_IMPORTED_MODULE_20__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_10__.c,{success:!0,title:intl.formatMessage(messages.success),content:intl.formatMessage(messages.successAdd)}))})).catch((error=>{var _error$response,_error$response$body;setAddError(null===(_error$response=error.response)||void 0===_error$response||null===(_error$response$body=_error$response.body)||void 0===_error$response$body?void 0:_error$response$body.message)}))}))},onCancel:()=>setAddModalOpen(!1),title:editingData?intl.formatMessage(messages.EditUrl):intl.formatMessage(messages.AddUrl),submitError:addError,schema:{fieldsets:[{id:"default",fields:["altUrlPath","targetUrlPath"]}],properties:{altUrlPath:{title:intl.formatMessage(messages.altUrlPathTitle),description:__jsx(react_intl__WEBPACK_IMPORTED_MODULE_23__.c,{id:"Enter the absolute path where the alternative url should exist. The path must start with '/'. Only URLs that result in a 404 not found page will result in a redirect occurring.",defaultMessage:"Enter the absolute path where the alternative URL should exist. The path must start with '/'. Only URLs that result in a 404 not found page will result in a redirect occurring."}),placeholder:intl.formatMessage(messages.examplePath)},targetUrlPath:{title:intl.formatMessage(messages.targetUrlPathTitle),description:__jsx(react_intl__WEBPACK_IMPORTED_MODULE_23__.c,{id:"Enter the absolute path of the target. Target must exist or be an existing alternative url path to the target.",defaultMessage:"Enter the absolute path of the target. Target must exist or be an existing alternative URL path to the target."}),placeholder:intl.formatMessage(messages.examplePath)}},required:["altUrlPath","targetUrlPath"]},formData:editingData||{}}),hasBulkUpload&&__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_24__.c,{onClick:()=>setUploadModalOpen(!0)},intl.formatMessage(messages.BulkUploadAltUrls),"…"),uploadModalOpen&&__jsx(_plone_volto_components_manage_Form__WEBPACK_IMPORTED_MODULE_7__.Ah,{open:!0,onSubmit:formData=>{fetch(`data:${formData.file["content-type"]};base64,${formData.file.data}`).then((res=>res.blob())).then((blob=>{dispatch((0,_plone_volto_actions_aliases_aliases__WEBPACK_IMPORTED_MODULE_19__.cf)(blob)).then((()=>{updateResults(),setUploadError(null),setCSVErrors([]),setUploadModalOpen(!1),react_toastify__WEBPACK_IMPORTED_MODULE_20__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_10__.c,{success:!0,title:intl.formatMessage(messages.success),content:intl.formatMessage(messages.successUpload)}))})).catch((error=>{var _error$response2,_error$response2$body,_error$response$body$,_error$response3,_error$response3$body;setUploadError(null===(_error$response2=error.response)||void 0===_error$response2||null===(_error$response2$body=_error$response2.body)||void 0===_error$response2$body?void 0:_error$response2$body.message),setCSVErrors(null!==(_error$response$body$=null===(_error$response3=error.response)||void 0===_error$response3||null===(_error$response3$body=_error$response3.body)||void 0===_error$response3$body?void 0:_error$response3$body.csv_errors)&&void 0!==_error$response$body$?_error$response$body$:[])}))}))},onCancel:()=>setUploadModalOpen(!1),title:intl.formatMessage(messages.BulkUploadAltUrls),submitError:uploadError,description:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("p",null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_23__.c,{id:"bulkUploadUrlsHelp",defaultMessage:"Add many alternative URLs at once by uploading a CSV file. The first column should be the path to redirect from; the second, the path to redirect to. Both paths must be Plone-site-relative, starting with a slash (/). An optional third column can contain a date and time. An optional fourth column can contain a boolean to mark as a manual redirect (default true)."})),__jsx("p",null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_23__.c,{id:"Example",defaultMessage:"Example"}),":",__jsx("br",null),__jsx("code",null,"/old-home-page.asp,/front-page,2019/01/27 10:42:59 GMT+1,true",__jsx("br",null),"/people/JoeT,/Users/joe-thurston,2018-12-31,false")),csvErrors.length?__jsx("div",{className:"ui error message",style:{"overflow-x":"auto"}},__jsx("pre",null,"Errors:","\n",csvErrors.map((err=>`${err.line_number}: ${err.line} - ${err.message}\n`)))):null),schema:{fieldsets:[{id:"default",fields:["file"]}],properties:{file:{title:intl.formatMessage(messages.CSVFile),type:"object",factory:"File Upload"}},required:["file"]}}))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_22__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_25__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_26__.c,{size:"medium"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_23__.c,{id:"All existing alternative urls for this site",defaultMessage:"Existing alternative URLs for this site"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_22__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_25__.c.Field,null,__jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_6__.default,{id:"filterQuery",title:intl.formatMessage(messages.filterByPrefix)},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_27__.c,{name:"filter",placeholder:intl.formatMessage(messages.examplePath),value:filterQuery,onChange:e=>setFilterQuery(e.target.value)}))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_25__.c.Field,null,__jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_6__.default,{id:"filterType",title:intl.formatMessage(messages.manualOrAuto)},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_25__.c.Group,{inline:!0},filterChoices.map(((o,i)=>__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_25__.c.Field,{key:i},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_28__.c,{label:intl.formatMessage({id:o.label}),name:"radioGroup",value:o.value,checked:filterType===o,onChange:()=>setFilterType(o)}))))))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_25__.c.Field,null,__jsx(_plone_volto_components_manage_Widgets_DatetimeWidget__WEBPACK_IMPORTED_MODULE_5__.default,{id:"created-before-date",title:intl.formatMessage(messages.createdBefore),dateOnly:!0,value:createdBefore,onChange:(id,value)=>{setCreatedBefore(value)}})),hasAdvancedFiltering&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_25__.c.Field,null,__jsx(_plone_volto_components_manage_Widgets_DatetimeWidget__WEBPACK_IMPORTED_MODULE_5__.default,{id:"created-after-date",title:intl.formatMessage(messages.createdAfter),dateOnly:!0,value:createdAfter,onChange:(id,value)=>{setCreatedAfter(value)}})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_24__.c,{onClick:()=>updateResults(),primary:!0},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_23__.c,{id:"Filter",defaultMessage:"Filter"}))))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_22__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_26__.c,{size:"small"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_23__.c,{id:"Alternative url path → target url path (date and time of creation, manually created yes/no)",defaultMessage:"Alternative URL path → target URL path (date and time of creation, manually created yes/no)"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_29__.c,{celled:!0,compact:!0},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_29__.c.Header,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_29__.c.Row,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_29__.c.HeaderCell,{width:"1"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_23__.c,{id:"Select",defaultMessage:"Select"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_29__.c.HeaderCell,{width:"10"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_23__.c,{id:"Alias",defaultMessage:"Alias"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_29__.c.HeaderCell,{width:"1"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_23__.c,{id:"Date",defaultMessage:"Date"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_29__.c.HeaderCell,{width:"1"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_23__.c,{id:"Manual",defaultMessage:"Manual"})))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_29__.c.Body,null,aliases.get.loading&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_29__.c.Row,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_29__.c.Cell,{colSpan:"4"},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_30__.c,{active:!0,inline:"centered"}))),aliases.items.length>0&&aliases.items.map(((alias,i)=>__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_29__.c.Row,{key:i,verticalAlign:"top"},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_29__.c.Cell,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_31__.c,{onChange:(e,{value:value})=>(alias=>{aliasesToRemove.includes(alias)?setAliasesToRemove(aliasesToRemove.filter((x=>x!==alias))):setAliasesToRemove([...aliasesToRemove,alias])})(value),checked:aliasesToRemove.includes(alias.path),value:alias.path})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_29__.c.Cell,null,alias.path,__jsx("br",null),"  → ",alias["redirect-to"]," ",__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_24__.c,{basic:!0,style:{verticalAlign:"middle"},"aria-label":intl.formatMessage(messages.EditUrl),onClick:()=>{setEditingData({altUrlPath:alias.path,targetUrlPath:alias["redirect-to"]}),setAddModalOpen(!0)}},__jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__.c,{name:_plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_14___default(),size:"18px"}))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_29__.c.Cell,null,__jsx(_plone_volto_components_theme_FormattedDate_FormattedDate__WEBPACK_IMPORTED_MODULE_11__.c,{date:alias.datetime})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_29__.c.Cell,null,`${alias.manual}`)))))),__jsx("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",marginBottom:"20px"}},pages&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_32__.c,{boundaryRange:0,activePage:activePage,ellipsisItem:null,firstItem:null,lastItem:null,siblingRange:1,totalPages:pages,onPageChange:(e,{activePage:activePage})=>setActivePage(activePage)}),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_33__.c.Menu,{position:"right",style:{display:"flex",marginLeft:"auto"}},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_33__.c.Item,{style:{color:"grey"}},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_23__.c,{id:"Show",defaultMessage:"Show"}),":"),lodash_map__WEBPACK_IMPORTED_MODULE_15___default()(itemsPerPageChoices,(size=>__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_33__.c.Item,{style:{padding:"0 0.4em",margin:"0em 0.357em",cursor:"pointer"},key:size,value:size,active:size===itemsPerPage,onClick:(e,{value:value})=>{setItemsPerPage(value),setActivePage(1)}},size))))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_24__.c,{id:"remove-alt-urls",disabled:0===aliasesToRemove.length,onClick:()=>{dispatch((0,_plone_volto_actions_aliases_aliases__WEBPACK_IMPORTED_MODULE_19__.Oq)("",{items:aliasesToRemove.map((a=>({path:a})))})).then((()=>{updateResults(),react_toastify__WEBPACK_IMPORTED_MODULE_20__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_10__.c,{success:!0,title:intl.formatMessage(messages.success),content:intl.formatMessage(messages.successRemove)}))})),setAliasesToRemove([])},primary:!0},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_23__.c,{id:"Remove selected",defaultMessage:"Remove selected"})))))),isClient&&(0,react_dom__WEBPACK_IMPORTED_MODULE_4__.createPortal)(__jsx(_plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_9__.c,{pathname:pathname,hideDefaultViewButtons:!0,inner:__jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.cH,{className:"item",to:"#",onClick:()=>history.push((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_2__.yn)(pathname))},__jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_8__.c,{name:_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_13___default(),className:"contents circled",size:"30px",title:intl.formatMessage(messages.back)}))}),document.getElementById("toolbar")))};__webpack_exports__.default=Aliases,Aliases.__docgenInfo={description:"",methods:[],displayName:"Aliases"}}}]);