(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27f9b700"],{"1a86":function(e,t,n){"use strict";var a=n("5530"),o=n("2ef0"),r=n("2f62");t["a"]={computed:Object(a["a"])({},Object(r["b"])([])),data:function(){return{listQuery:{},tableList:[],queryData:[],tableLoading:!1,pagination:{currentPage:1,pageSize:10,total:300,pageSizes:[10,20,30,40,50]}}},watch:{"pagination.currentPage":{handler:function(e){this.listQuery.page=Object(o["cloneDeep"])(e)},deep:!0,immediate:!0},"pagination.pageSize":{handler:function(e){this.listQuery.limit=Object(o["cloneDeep"])(e)},deep:!0,immediate:!0},"pagination.total":{handler:function(e){var t=this,n=e,a=this.pagination.currentPage,o=this.pagination.pageSize;if(0!==n&&!(n>o*(a-1))){var r=n/o,i=n<=o*a&&n>o*(a-1);(n/o!==0||i)&&i||(this.pagination.currentPage=Math.ceil(r)),setTimeout((function(){t.getList()}),50)}},deep:!0}},methods:{getList:function(){},sizeChange:function(e){var t=this;this.pagination.currentPage=1,this.pagination.pageSize=e,setTimeout((function(){t.getList()}),10)},currentChange:function(e){var t=this;this.pagination.currentPage=e,setTimeout((function(){t.getList()}),10)},warningNotify:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"提醒",t=arguments.length>1?arguments[1]:void 0,n="warning";this.notify({msg:e,type:n,duration:t})},successNotify:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"成功",t=arguments.length>1?arguments[1]:void 0;this.notify({msg:e,duration:t})},errorNotify:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"失败",t=arguments.length>1?arguments[1]:void 0,n="error";this.notify({msg:e,type:n,duration:t})},notify:function(e){var t=e.msg,n=void 0===t?"":t,a=e.type,o=void 0===a?"success":a,r=e.duration,i=void 0===r?1500:r;this.$message({message:n,type:o,duration:i})},handleFilter:function(){var e=this;for(var t in this.listQuery)""===this.listQuery[t]&&(this.listQuery[t]=void 0);this.pagination.currentPage=1,setTimeout((function(){e.getList()}),10)}}}},7547:function(e,t,n){},d9ff:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-container",{staticClass:"train-page"},[n("div",{staticClass:"header-box"},[n("search-bar",{attrs:{filterable:!1,"list-query":e.listQuery,"form-props":e.searchProps,"search-button":e.searchButton},on:{handleSearch:e.handleSearch},scopedSlots:e._u([{key:"button-groups",fn:function(){return[n("zf-button",{attrs:{type:"text"},on:{click:e.handleAddArticle}},[e._v("+添加班次")])]},proxy:!0}])})],1),n("div",{staticClass:"table-box"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"header-cell-style":{"background-color":"#FAFAFA",color:"#000",fontWeight:"400"},border:""}},[n("el-table-column",{attrs:{type:"selection",align:"center",width:"55"}}),e._l(e.tableConfig,(function(e,t){return n("el-table-column",{key:t,attrs:{width:"name"==e.prop?"450":"",prop:e.prop,align:"center",label:e.label}})})),n("el-table-column",{attrs:{align:"center",width:"180",fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){return e.handleDetail(t.$index,t.row)}}},[e._v("详情")]),n("el-button",{attrs:{type:"text"},on:{click:function(n){return e.handleEdit(t.$index,t.row)}}},[e._v("修改")]),n("el-button",{attrs:{type:"text"},on:{click:function(n){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")]),n("el-button",{attrs:{type:"text"},on:{click:function(n){return e.handleUpimg(t.$index,t.row)}}},[e._v("传图")]),n("el-button",{attrs:{type:"text"},on:{click:function(n){return e.handleUpVideo(t.$index,t.row)}}},[e._v("传视频")])]}}])})],2)],1),n("pagination",{ref:"pagination",attrs:{total:"100",pagination:e.pagination},on:{currentChange:e.currentChange,sizeChange:e.sizeChange}}),n("zf-form",{ref:"zfForm",attrs:{form:e.form,"form-options":e.formOptions},on:{"create-class-code":e.createClassCode,handleSumbit:e.handleFormSumbit}})],1)},o=[],r=n("1a86"),i={menu:[],btnShow:!0,column:[{label:"班次名称",formControl:[{prop:"className",type:"input",rule:[{required:!0,message:"请输入班次名称",trigger:"blur"}]}]},{label:"班次简称(小程序)",formControl:[{prop:"classAbbreviation",type:"input",rule:[{required:!0,message:"请输入班次简称",trigger:"blur"}]}]},{label:"优先级（1-10）",formControl:[{prop:"priority",type:"number",rule:[{type:"number",message:"请输入数字"},{type:"number",min:1,max:10,message:"优先级等级为1-10"}]}]},{label:"培训时间",formControl:[{prop:"abstract",type:"data-range"}]},{label:"课程总数",formControl:[{prop:"classNum",type:"number",rule:[{required:!0,message:"请输入课程总数",trigger:"blur"},{type:"number",message:"请输入数字"}]}]},{label:"总学时",formControl:[{prop:"studyNum",type:"number",rule:[{required:!0,message:"请输入总学时",trigger:"blur"},{type:"number",message:"请输入数字"}]}]},{label:"是否收费",formControl:[{prop:"company",type:"select",options:[{value:0,label:"收费单位"},{value:1,label:"免费单位"}]},{prop:"companyTime",type:"datetimerange",options:[{value:0,label:"网授"},{value:1,label:"面授"}]},{prop:"companyNum",type:"number",placeholder:"请输入网授限额人数",rule:[{type:"number",message:"请输入数字"}]}]},{label:"电子发票",formControl:[{prop:"s",type:"input",hidden:!0},{prop:"electronicInvoice",type:"select",options:[{value:0,label:"开启"},{value:1,label:"关闭"}]}]},{label:"食堂位置",formControl:[{prop:"canteenLocation",type:"input"},{prop:"canteenTime",type:"timerange"}]},{label:"简介",formControl:[{prop:"intro",type:"textarea",rule:[{required:!0,message:"请输入简介",trigger:"blur"}]}]},{label:"排班",formControl:[{prop:"Scheduling",type:"input"}]}]},l={mixins:[r["a"]],data:function(){return{tableConfig:[{prop:"name",label:"班次名称"},{prop:"value1",label:"显示级别"},{prop:"value3",label:"开班时间"},{prop:"value4",label:"录入时间"},{prop:"value5",label:"创建者"}],tableData:[{name:"全省法院新闻宣传和舆论引导工作培训班在河南法官进修学院开班",value1:1,value3:"2016-05-03",value4:"2020-07-01",value5:"张三"},{name:"全省法院新闻宣传和舆论引导工作培训班在河南法官进修学院开班",value1:2,value3:"2016-05-04",value4:"2020-07-02",value5:"张三"},{name:"全省法院新闻宣传和舆论引导工作培训班在河南法官进修学院开班",value1:3,value3:"2016-05-01",value4:"2020-07-03",value5:"张三"},{name:"全省法院新闻宣传和舆论引导工作培训班在河南法官进修学院开班",value1:4,value3:"2016-05-02",value4:"2020-07-04",value5:"张三"}],searchProps:[{prop:"title",label:"标题",placeholder:"",type:"input",change:function(){console.log(123)}},{prop:"column",label:"按栏目",placeholder:"请选择栏目",type:"select",change:function(){console.log(123)},data:[{label:"栏目1",value:1},{label:"栏目2",value:0}]},{prop:"status",label:"状态",placeholder:"请选择状态",type:"select",change:function(){console.log(123)},data:[{label:"状态1",value:1},{label:"状态2",value:0}]}],searchButton:[{text:"查询",fn:"handleSearch",type:"add"}],formOptions:i,form:{}}},methods:{handleDetail:function(e,t){this.$message("Detail")},handleAddArticle:function(){var e=this;this.form={},this.$refs.zfForm.open(),this.$nextTick((function(){e.$refs.zfForm.handleReset()}))},createClassCode:function(){this.notify({msg:"重新生成班次提取码",type:"info"})},handleFormSumbit:function(){this.notify({msg:"表单提交",type:"info"})},handleEdit:function(e,t){this.form={className:"全省法院新闻宣传和舆论引导工作培训班在河南法官进修学院开班\n",classAbbreviation:"全省法院新闻宣传和舆论引导工作培训班在河南法官进修学院开班\n",priority:5,classNum:8},this.$refs.zfForm.open()},handleDelete:function(e,t){this.$message("Delete")},handleUpimg:function(e,t){this.$message("Updata-img")},handleUpVideo:function(){this.$message("Updata-Video")},handleSearch:function(){console.log("handleSearch")}}},s=l,u=(n("e2c4"),n("2877")),c=Object(u["a"])(s,a,o,!1,null,"39244dd9",null);t["default"]=c.exports},e2c4:function(e,t,n){"use strict";var a=n("7547"),o=n.n(a);o.a}}]);