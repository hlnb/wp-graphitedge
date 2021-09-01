!function(){var e={4184:function(e,s){var t;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],s=0;s<arguments.length;s++){var t=arguments[s];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var o=n.apply(null,t);o&&e.push(o)}}else if("object"===i)if(t.toString===Object.prototype.toString)for(var a in t)r.call(t,a)&&t[a]&&e.push(a);else e.push(t.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(t=function(){return n}.apply(s,[]))||(e.exports=t)}()}},s={};function t(r){var n=s[r];if(void 0!==n)return n.exports;var i=s[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,{a:s}),s},t.d=function(e,s){for(var r in s)t.o(s,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:s[r]})},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},function(){"use strict";var e=window.wp.element,s=window.React,r=t.n(s);class n extends r().Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,s){console.error(e),console.error(s)}render(){return this.state.hasError?(0,e.createElement)("div",{className:"sui-notice sui-notice-error"},(0,e.createElement)("div",{className:"sui-notice-content"},(0,e.createElement)("div",{className:"sui-notice-message"},(0,e.createElement)("span",{className:"sui-notice-icon sui-icon-warning-alert sui-md","aria-hidden":"true"}),(0,e.createElement)("p",null,(0,e.createElement)("strong",null,"Something went wrong. Please contact ",(0,e.createElement)("a",{target:"_blank",href:"https://wpmudev.com/get-support/"},"support"),"."))))):this.props.children}}var i=n,o=window.ReactDOM,a=t.n(o);function l(){return(l=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}var d=window.wp.i18n,u=t(4184),p=t.n(u);class h extends r().Component{constructor(e){super(e),this.state={open:!1}}toggle(e){const s=e.target.className||"";("BUTTON"!==(e.target.tagName||"")||s.includes("sui-accordion-open-indicator"))&&this.setState({open:!this.state.open})}render(){return(0,e.createElement)("div",{className:p()("sui-accordion-item",this.props.className,{"sui-accordion-item--open":this.state.open})},(0,e.createElement)("div",{className:"sui-accordion-item-header",onClick:e=>this.toggle(e)},this.props.header),(0,e.createElement)("div",{className:"sui-accordion-item-body"},(0,e.createElement)("div",{className:"sui-box"},(0,e.createElement)("div",{className:"sui-box-body"},this.props.children))))}}c(h,"defaultProps",{className:""});class m extends r().Component{constructor(e){super(e),this.state={activeTab:"issues"}}render(){const s=this.props.activeIssues,t=Object.keys(s).length,n=this.props.ignoredIssues,i=t+Object.keys(n).length>0,o=this.getTabData(s,n);return(0,e.createElement)(h,{className:p()({[this.props.warningClass]:t>0,"sui-success":t<1,"wds-no-crawl-issues":!i}),header:(0,e.createElement)(r().Fragment,null,(0,e.createElement)("div",{className:"sui-accordion-item-title"},(0,e.createElement)("span",{"aria-hidden":"true",className:p()({"sui-icon-warning-alert":t>0,[this.props.warningClass]:t>0,"sui-success sui-icon-check-tick":t<1})}),this.getTitle(t)),i&&(0,e.createElement)("div",null,(0,e.createElement)("span",{className:"sui-accordion-open-indicator"},(0,e.createElement)("span",{"aria-hidden":"true",className:"sui-icon-chevron-down"}),(0,e.createElement)("button",{type:"button",className:"sui-screen-reader-text"},(0,d.__)("Expand issue","wds")))))},i&&(0,e.createElement)(r().Fragment,null,(0,e.createElement)("small",null,(0,e.createElement)("strong",null,(0,d.__)("Overview","wds"))),(0,e.createElement)("p",null,(0,e.createElement)("small",null,this.props.description)),(0,e.createElement)("div",{className:"sui-tabs"},(0,e.createElement)("div",{"data-tabs":""},Object.keys(o).map((s=>(0,e.createElement)("div",{className:p()({active:this.state.activeTab===s}),onClick:()=>this.setState({activeTab:s})},o[s].label)))),(0,e.createElement)("div",{"data-panes":""},Object.keys(o).map((s=>(0,e.createElement)("div",{className:p()({active:this.state.activeTab===s})},this.getPane(o[s]))))))))}getTabData(e,s){return{issues:{label:(0,d.__)("Issues","wds"),items:e,noItemsNotice:(0,d.__)("No active issues.","wds"),tableClass:"wds-crawl-issues-table"},ignored:{label:(0,d.__)("Ignored","wds"),items:s,noItemsNotice:(0,d.__)("No ignored issues.","wds"),tableClass:"wds-ignored-items-table"}}}getPane(s){const t=s.items,n=Object.keys(t).length>0;return(0,e.createElement)(r().Fragment,null,(0,e.createElement)("table",{className:s.tableClass},(0,e.createElement)("tbody",null,n&&(0,e.createElement)(r().Fragment,null,Object.keys(t).map((e=>this.props.renderIssue(e,t[e]))),(0,e.createElement)("tr",{className:"wds-controls-row"},(0,e.createElement)("td",{colSpan:"4"},this.props.renderControls(this.props.type,this.state.activeTab)))),!n&&(0,e.createElement)("tr",{className:"wds-no-results-row"},(0,e.createElement)("td",{colSpan:"2"},(0,e.createElement)("small",null,s.noItemsNotice))))))}getTitle(e){return(0,d.sprintf)(1===e?this.props.singularTitle:this.props.pluralTitle,e>0?e:(0,d.__)("No","wds"))}}c(m,"defaultProps",{type:"",activeIssues:{},ignoredIssues:{},singularTitle:"",pluralTitle:"",description:"",warningClass:"sui-warning",renderIssue:()=>!1,renderControls:()=>!1});class g extends r().Component{render(){return(0,e.createElement)(m,l({},this.props,{singularTitle:(0,d.__)("%s URL has multiple redirections","wds"),pluralTitle:(0,d.__)("%s URLs have multiple redirections","wds"),description:(0,d.__)("Some of your URLs have multiple redirections. In the options menu you can List occurrences to see where these links can be found, and also set up and 301 redirects to a newer version of these pages.","wds")}))}}class w extends r().Component{render(){return(0,e.createElement)(m,l({},this.props,{singularTitle:(0,d.__)("%s URL is resulting in 4xx error","wds"),pluralTitle:(0,d.__)("%s URLs are resulting in 4xx errors","wds"),description:(0,d.__)("Some of your URLs are resulting in 4xx errors. Either the page no longer exists or the URL has changed. In the options menu you can List occurrences to see where these links can be found, and also set up and 301 redirects to a newer version of these pages.","wds")}))}}class f extends r().Component{render(){return(0,e.createElement)(m,l({},this.props,{singularTitle:(0,d.__)("%s URL is resulting in 5xx server error","wds"),pluralTitle:(0,d.__)("%s URLs are resulting in 5xx server errors","wds"),description:(0,d.__)("Some of your URLs are resulting in 5xx server errors. These errors are indicative of errors in your server-side code. In the options menu you can List occurrences to see where these links can be found, and also set up and 301 redirects to a newer version of these pages.","wds")}))}}class b extends r().Component{render(){return(0,e.createElement)(m,l({},this.props,{singularTitle:(0,d.__)("%s URL could not be processed","wds"),pluralTitle:(0,d.__)("%s URLs could not be processed","wds"),description:(0,d.__)("Some of your URLs could not be processed by our crawlers. In the options menu you can List occurrences to see where these links can be found, and also set up and 301 redirects to a newer version of these pages.","wds")}))}}class _ extends r().Component{render(){return(0,e.createElement)(m,l({},this.props,{singularTitle:(0,d.__)("%s URL is missing from the sitemap","wds"),pluralTitle:(0,d.__)("%s URLs are missing from the sitemap","wds"),description:(0,d.__)("SmartCrawl couldn’t find these URLs in your Sitemap. You can choose to add them to your Sitemap, or ignore the warning if you don’t want them included.","wds"),warningClass:"sui-default"}))}}class E extends r().Component{render(){const s=p()("sui-button-icon sui-dropdown-anchor",{"sui-button-onload":this.props.loading});return(0,e.createElement)("div",{className:"sui-dropdown sui-accordion-item-action"},(0,e.createElement)("button",{className:s,"aria-label":(0,d.__)("Dropdown","wds"),disabled:this.props.disabled},(0,e.createElement)("span",{className:"sui-loading-text"},(0,e.createElement)("span",{className:this.props.icon,style:{pointerEvents:"none"},"aria-hidden":"true"})),(0,e.createElement)("span",{className:"sui-icon-loader sui-loading","aria-hidden":"true"})),(0,e.createElement)("ul",null,this.props.buttons.map((s=>(0,e.createElement)("li",null,s)))))}}c(E,"defaultProps",{icon:"sui-icon-widget-settings-config",buttons:[],loading:!1,disabled:!1,onClick:()=>!1});class v extends r().Component{render(){return(0,e.createElement)("button",{className:p()({"sui-option-red":this.props.red}),onClick:()=>this.props.onClick(),type:"button"},(0,e.createElement)("span",{className:this.props.icon,"aria-hidden":"true"}),this.props.text)}}c(v,"defaultProps",{text:"",icon:"",red:!1,onClick:()=>!1});class y extends r().Component{handleClick(e){e.preventDefault(),this.props.onClick()}render(){let s,t,r=this.props.icon?(0,e.createElement)("span",{className:this.props.icon,"aria-hidden":"true"}):"";return this.props.loading?(s=(0,e.createElement)("span",{className:"sui-loading-text"},r," ",this.props.text),t=(0,e.createElement)("span",{className:"sui-icon-loader sui-loading","aria-hidden":"true"})):(s=(0,e.createElement)("span",null,r," ",this.props.text),t=""),(0,e.createElement)("button",{className:p()(this.props.className,"sui-button","sui-button-"+this.props.color,{"sui-button-onload":this.props.loading,"sui-button-ghost":this.props.ghost,"sui-button-icon":!this.props.text.trim(),"sui-button-dashed":this.props.dashed}),onClick:e=>this.handleClick(e),id:this.props.id,disabled:this.props.disabled},s,t)}}c(y,"defaultProps",{id:"",text:"",color:"",dashed:!1,icon:!1,loading:!1,ghost:!1,disabled:!1,className:"",onClick:()=>!1});class I extends r().Component{render(){return(0,e.createElement)("tr",null,(0,e.createElement)("td",null,!this.props.ignored&&(0,e.createElement)("span",{"aria-hidden":"true",className:"sui-icon-warning-alert"}),(0,e.createElement)("small",null,(0,e.createElement)("strong",null,this.props.path))),(0,e.createElement)("td",null,!this.props.ignored&&(0,e.createElement)(E,{loading:this.props.loading,disabled:this.props.disabled,buttons:[(0,e.createElement)(v,{icon:"sui-icon-plus",text:(0,d.__)("Add to Sitemap","wds"),onClick:()=>this.props.onAddToSitemap()}),(0,e.createElement)(v,{icon:"sui-icon-eye-hide",text:(0,d.__)("Ignore","wds"),onClick:()=>this.props.onIgnore()})]}),this.props.ignored&&(0,e.createElement)(y,{icon:"sui-icon-plus",text:(0,d.__)("Restore","wds"),ghost:!0,loading:this.props.loading,disabled:this.props.disabled,onClick:()=>this.props.onRestore()})))}}c(I,"defaultProps",{path:"",loading:!1,disabled:!1,onAddToSitemap:()=>!1,onIgnore:()=>!1,onRestore:()=>!1});var C=SUI,x=t.n(C),N=jQuery,S=t.n(N);class k extends r().Component{constructor(e){super(e),this.props=e}componentDidMount(){x().openModal(this.props.id,this.props.focusAfterClose,this.props.focusAfterOpen?this.props.focusAfterOpen:this.getTitleId(),!1,!1)}componentWillUnmount(){x().closeModal()}handleKeyDown(e){S()(e.target).is(".sui-modal.sui-active input")&&13===e.keyCode&&(e.preventDefault(),e.stopPropagation(),!this.props.enterDisabled&&this.props.onEnter&&this.props.onEnter(e))}render(){const s=this.getHeaderActions(),t=Object.assign({},{"sui-modal-sm":this.props.small,"sui-modal-lg":!this.props.small},this.props.dialogClasses);return(0,e.createElement)("div",{className:p()("sui-modal",t),onKeyDown:e=>this.handleKeyDown(e)},(0,e.createElement)("div",{role:"dialog",id:this.props.id,className:p()("sui-modal-content",this.props.id+"-modal"),"aria-modal":"true","aria-labelledby":this.props.id+"-modal-title","aria-describedby":this.props.id+"-modal-description"},(0,e.createElement)("div",{className:"sui-box",role:"document"},(0,e.createElement)("div",{className:p()("sui-box-header",{"sui-flatten sui-content-center sui-spacing-top--40":this.props.small})},(0,e.createElement)("h3",{id:this.getTitleId(),className:p()("sui-box-title",{"sui-lg":this.props.small})},this.props.title),s),(0,e.createElement)("div",{className:p()("sui-box-body",{"sui-content-center":this.props.small})},this.props.description&&(0,e.createElement)("p",{className:"sui-description",id:this.props.id+"-modal-description"},this.props.description),this.props.children),this.props.footer&&(0,e.createElement)("div",{className:"sui-box-footer"},this.props.footer))))}getTitleId(){return this.props.id+"-modal-title"}getHeaderActions(){const s=this.getCloseButton();return this.props.small?s:this.props.headerActions?this.props.headerActions:(0,e.createElement)("div",{className:"sui-actions-right"},s)}getCloseButton(){return(0,e.createElement)("button",{id:this.props.id+"-close-button",type:"button",onClick:()=>this.props.onClose(),disabled:this.props.disableCloseButton,className:p()("sui-button-icon",{"sui-button-float--right":this.props.small})},(0,e.createElement)("span",{className:"sui-icon-close sui-md","aria-hidden":"true"}),(0,e.createElement)("span",{className:"sui-screen-reader-text"},(0,d.__)("Close this dialog window","wds")))}}c(k,"defaultProps",{id:"",title:"",description:"",small:!1,headerActions:!1,focusAfterOpen:"",focusAfterClose:"container",dialogClasses:[],disableCloseButton:!1,enterDisabled:!1,onEnter:!1,onClose:()=>!1});class A extends r().Component{render(){const s=(0,e.createInterpolateElement)((0,d.sprintf)((0,d.__)("We found links to <strong>%s</strong> in these locations, you might want to remove these links or direct them somewhere else.","wds"),this.props.path),{strong:(0,e.createElement)("strong",null)});return(0,e.createElement)(k,{id:"wds-issue-occurrences",title:(0,d.__)("Broken URL Locations","wds"),description:s,onClose:()=>this.props.onClose(),focusAfterOpen:"wds-close-occurrences-modal-button",small:!0},(0,e.createElement)("div",{className:"wds-issue-occurrences"},(0,e.createElement)("ul",null,this.props.origin.map((s=>(0,e.createElement)("li",null,(0,e.createElement)("a",{href:s},s)))))),(0,e.createElement)(y,{id:"wds-close-occurrences-modal-button",onClick:()=>this.props.onClose(),ghost:!0,text:(0,d.__)("Close","wds")}))}}c(A,"defaultProps",{path:"",origin:[],onClose:()=>!1});class P extends r().Component{constructor(e){super(e),this.state={showingOccurrences:!1}}render(){return(0,e.createElement)("tr",null,(0,e.createElement)("td",null,!this.props.ignored&&(0,e.createElement)("span",{"aria-hidden":"true",className:"sui-warning sui-icon-warning-alert"}),(0,e.createElement)("small",null,(0,e.createElement)("strong",null,this.props.path))),!this.props.ignored&&(0,e.createElement)("td",null,(0,e.createElement)("span",{className:"sui-tag sui-tag-warning"},!!this.props.origin&&this.props.origin.length)),(0,e.createElement)("td",null,!this.props.ignored&&(0,e.createElement)(E,{loading:this.props.loading,disabled:this.props.disabled,buttons:[(0,e.createElement)(v,{text:(0,d.__)("List Occurrences","wds"),icon:"sui-icon-list-bullet",onClick:()=>this.startShowingOccurrences()}),(0,e.createElement)(v,{text:(0,d.__)("Redirect","wds"),icon:"sui-icon-arrow-right",onClick:()=>this.props.onRedirect()}),(0,e.createElement)(v,{text:(0,d.__)("Ignore","wds"),icon:"sui-icon-eye-hide",onClick:()=>this.props.onIgnore()})]}),this.props.ignored&&(0,e.createElement)(y,{icon:"sui-icon-plus",text:(0,d.__)("Restore","wds"),ghost:!0,loading:this.props.loading,disabled:this.props.disabled,onClick:()=>this.props.onRestore()}),this.state.showingOccurrences&&(0,e.createElement)(A,{path:this.props.path,origin:this.props.origin,onClose:()=>this.stopShowingOccurrences()})))}startShowingOccurrences(){this.setState({showingOccurrences:!0})}stopShowingOccurrences(){this.setState({showingOccurrences:!1})}}c(P,"defaultProps",{path:"",origin:[],loading:!1,disabled:!1,onRedirect:()=>!1,onIgnore:()=>!1,onRestore:()=>!1});var R=class{static get(e,s="general"){Array.isArray(e)||(e=[e]);let t=window["_wds_"+s]||{};return e.forEach((e=>{t=t&&t.hasOwnProperty(e)?t[e]:""})),t}static get_bool(e,s="general"){return!!this.get(e,s)}};class T{static redirect(e,s){return this.post("wds_redirect_crawl_item",{source:e,destination:s})}static changeIssueStatus(e,s){return this.post(s,{issue_id:e})}static ignoreIssue(e){return this.changeIssueStatus(e,"wds_ignore_crawl_item")}static restoreIssue(e){return this.changeIssueStatus(e,"wds_restore_crawl_item")}static restoreAll(){return this.post("wds_restore_all_crawl_items")}static addToSitemap(e){return this.post("wds_sitemap_add_extra",{path:e})}static post(e,s){const t=R.get("nonce","crawler");return class{static post(e,s,t={}){return new Promise((function(r,n){const i=Object.assign({},{action:e,_wds_nonce:s},t);S().post(ajaxurl,i).done((function(e){var s;e.success?r(null==e?void 0:e.data):n(null==e||null===(s=e.data)||void 0===s?void 0:s.message)})).fail((()=>n()))}))}}.post(e,t,s)}}class O extends r().Component{constructor(e){super(e)}render(){return(0,e.createElement)("div",{className:p()("sui-form-field",{"sui-form-field-error":!this.props.isValid})},(0,e.createElement)("label",{className:"sui-label"},this.props.label),(0,e.createElement)("input",{id:this.props.id,type:"text",className:"sui-form-control",onChange:e=>this.props.onChange(e.target.value),value:this.props.value,placeholder:this.props.placeholder}),!!this.props.description&&(0,e.createElement)("p",{className:"sui-description"},(0,e.createElement)("small",null,this.props.description)))}}c(O,"defaultProps",{id:"",label:"",description:"",value:"",isValid:!0,placeholder:"",onChange:()=>!1});class j{static isNonEmpty(e){return e&&e.trim()}static isValuePlainText(e){return S()("<div>").html(e).text()===e}}const q=(L=O,U=[j.isNonEmpty,j.isValuePlainText],class extends r().Component{constructor(e){super(e),this.state={initial:!0}}isValueValid(e){if(this.state.initial)return!0;if(Array.isArray(U)){let s=!0;return U.forEach((t=>{s=s&&t(e)})),s}return U(e)}handleChange(e){this.setState({initial:!1},(()=>{this.props.onChange(e,this.isValueValid(e))}))}render(){return(0,e.createElement)(L,l({},this.props,{isValid:this.isValueValid(this.props.value),onChange:e=>this.handleChange(e)}))}});var L,U;class W extends r().Component{constructor(e){super(e),this.state={destination:this.props.destination,isDestinationValid:j.isNonEmpty(this.props.destination)}}handleDestinationChange(e,s){this.setState({destination:e,isDestinationValid:s})}render(){const s=(0,e.createInterpolateElement)((0,d.sprintf)((0,d.__)("Choose where to redirect <strong>%s</strong>","wds"),this.props.source),{strong:(0,e.createElement)("strong",null)}),t=(0,e.createInterpolateElement)((0,d.__)("Formats include relative URLs like <strong>/cats</strong> or absolute URLs like <strong>https://website.com/cats</strong>. This feature will automatically redirect traffic from the broken URL to this new URL, you can view all your redirects under <strong><a>Advanced Tools</a></strong>.","wds"),{strong:(0,e.createElement)("strong",null),a:(0,e.createElement)("a",{href:R.get("advanced_tools_url","crawler")})}),r=()=>this.props.onSave(this.state.destination.trim()),n=!this.state.isDestinationValid;return(0,e.createElement)(k,{id:"wds-issue-redirect",title:(0,d.__)("Redirect URL","wds"),description:s,focusAfterOpen:"wds-crawler-redirect-destination",onEnter:r,enterDisabled:n,onClose:()=>this.props.onClose(),disableCloseButton:this.props.requestInProgress,small:!0},(0,e.createElement)(q,{id:"wds-crawler-redirect-destination",label:(0,d.__)("New URL","wds"),placeholder:(0,d.__)("Enter new URL","wds"),description:t,value:this.state.destination,onChange:(e,s)=>this.handleDestinationChange(e,s)}),(0,e.createElement)("div",{style:{display:"flex",justifyContent:"space-between"}},(0,e.createElement)(y,{text:(0,d.__)("Cancel","wds"),ghost:!0,onClick:()=>this.props.onClose(),disabled:this.props.requestInProgress}),(0,e.createElement)(y,{text:(0,d.__)("Apply","wds"),onClick:r,icon:"sui-icon-check",disabled:n,loading:this.props.requestInProgress})))}}c(W,"defaultProps",{source:"",destination:"",requestInProgress:!1,onSave:()=>!1,onClose:()=>!1});class D extends r().Component{render(){return(0,e.createElement)("div",{className:"sui-floating-notices"},(0,e.createElement)("div",{role:"alert",id:this.props.id,className:"sui-notice","aria-live":"assertive"}))}}c(D,"defaultProps",{id:""});class B{static showSuccessNotice(e,s,t=!0){return this.showNotice(e,s,"success",t)}static showErrorNotice(e,s,t=!0){return this.showNotice(e,s,"error",t)}static showInfoNotice(e,s,t=!0){return this.showNotice(e,s,"info",t)}static showWarningNotice(e,s,t=!0){return this.showNotice(e,s,"warning",t)}static showNotice(e,s,t="success",r=!0){SUI.closeNotice(e),SUI.openNotice(e,"<p>"+s+"</p>",{type:t,icon:{error:"warning-alert",info:"info",warning:"warning-alert",success:"check-tick"}[t],dismiss:{show:r}})}}var V=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function M(e,s){if(e.length!==s.length)return!1;for(var t=0;t<e.length;t++)if(!((r=e[t])===(n=s[t])||V(r)&&V(n)))return!1;var r,n;return!0}var F=function(e,s){var t;void 0===s&&(s=M);var r,n=[],i=!1;return function(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];return i&&t===this&&s(o,n)||(r=e.apply(this,o),i=!0,t=this,n=o),r}};class K extends r().Component{constructor(e){super(e),this.state={issues:R.get("issues","crawler")||{},redirectInProgress:!1,requestInProgress:!1},this.getAllActiveIssueKeysMemoized=F((e=>this.getAllActiveIssueKeys(e))),this.getActiveSitemapIssuesMemoized=F((e=>this.getActiveSitemapIssueCount(e)))}componentDidUpdate(e,s,t){const r=this.getIssues(),n=this.getAllActiveIssueKeysMemoized(r),i=this.getActiveSitemapIssuesMemoized(r);this.props.onActiveIssueCountChange(n.length,i)}render(){const s=this.getIssues()||{},t=Array.from(new Set([...Object.keys(s),"3xx","4xx","5xx","sitemap","inaccessible"])),n=this.getAllActiveIssueKeysMemoized(s);return(0,e.createElement)(r().Fragment,null,n.length>0&&this.getIgnoreAllButton(),(0,e.createElement)("p",null,(0,d.__)("Here are potential issues SmartCrawl has picked up. We recommend fixing them up to ensure you aren’t penalized by search engines - you can however ignore any of these warnings.","wds")),(0,e.createElement)(D,{id:"wds-crawl-report-notice"}),(0,e.createElement)("div",{className:"sui-accordion wds-draw-left"},t.map((t=>{const r=this.getGroupComponent(t),n=s.hasOwnProperty(t)?s[t]:{},i="sitemap"===t?(e,s)=>this.renderSitemapIssue(e,s):(e,s)=>this.renderIssue(e,s),o="sitemap"===t?(e,s)=>this.renderSitemapControls(e,s):(e,s)=>this.renderControls(e,s);return(0,e.createElement)(r,{type:t,activeIssues:this.getActiveIssues(n),ignoredIssues:this.getIgnoredIssues(n),renderIssue:i,renderControls:o})}))),this.maybeShowRedirectModal())}renderSitemapIssue(s,t){return(0,e.createElement)(I,l({},t,{loading:this.state.requestInProgress===s,disabled:this.state.requestInProgress,onIgnore:()=>this.ignoreItem(s),onAddToSitemap:()=>this.addToSitemap(s),onRestore:()=>this.restoreItem(s)}))}renderIssue(s,t){return(0,e.createElement)(P,l({},t,{loading:this.state.requestInProgress===s,disabled:this.state.requestInProgress,onRedirect:()=>this.startRedirecting(s),onIgnore:()=>this.ignoreItem(s),onRestore:()=>this.restoreItem(s)}))}addToSitemap(e){this.setState({requestInProgress:e},(()=>{const s=this.getIssue(e);T.addToSitemap(s.path).then((e=>{this.showSuccessNotice((0,d.__)("The missing item has been added to your sitemap as an extra URL.","wds")),this.setState({issues:e.issues})})).catch(this.showError).finally((()=>this.markRequestAsComplete()))}))}ignoreItem(e){this.setState({requestInProgress:e},(()=>{T.ignoreIssue(e).then((e=>{this.showSuccessNotice((0,d.__)("The issue has been ignored.","wds")),this.setState({issues:e.issues})})).catch(this.showError).finally((()=>this.markRequestAsComplete()))}))}restoreItem(e){this.setState({requestInProgress:e},(()=>{T.restoreIssue(e).then((e=>{this.showSuccessNotice((0,d.__)("The issue has been restored.","wds")),this.setState({issues:e.issues})})).catch(this.showError).finally((()=>this.markRequestAsComplete()))}))}maybeShowRedirectModal(){if(!this.state.redirectInProgress)return!1;const s=this.state.redirectInProgress,t=this.getIssue(s);return!!t&&(0,e.createElement)(W,{source:t.path,destination:t.redirect,onSave:e=>this.redirect(t.path,e),onClose:()=>this.stopRedirecting(),requestInProgress:this.state.requestInProgress})}startRedirecting(e){this.setState({redirectInProgress:e})}redirect(e,s){this.setState({requestInProgress:!0},(()=>{T.redirect(e,s).then((e=>{this.showSuccessNotice((0,d.__)("The URL has been redirected successfully.","wds")),this.setState({redirectInProgress:!1,issues:e.issues})})).catch(this.showError).finally((()=>this.markRequestAsComplete()))}))}stopRedirecting(){this.setState({redirectInProgress:!1})}renderControls(e,s){return"issues"===s?this.getIgnoreAllOfTypeButton(e):this.getRestoreAllButton(e)}getIgnoreAllOfTypeButton(s){return(0,e.createElement)(y,{icon:"sui-icon-eye-hide",text:(0,d.__)("Ignore All","wds"),ghost:!0,loading:this.state.requestInProgress===s,disabled:this.state.requestInProgress,onClick:()=>this.ignoreAllOfType(s)})}getIgnoreAllButton(){const s=function(s,t){return class extends r().Component{render(){const r=document.getElementById(t);return r?a().createPortal((0,e.createElement)(s,this.props),r):null}}}(y,"wds-ignore-all-button-placeholder");return(0,e.createElement)(s,{text:(0,d.__)("Ignore All","wds"),ghost:!0,icon:"sui-icon-eye-hide",onClick:()=>this.ignoreAll(),loading:"ignore-all"===this.state.requestInProgress,disabled:this.state.requestInProgress})}getRestoreAllButton(s){return(0,e.createElement)(y,{icon:"sui-icon-plus",text:(0,d.__)("Restore All","wds"),ghost:!0,loading:this.state.requestInProgress===s,disabled:this.state.requestInProgress,onClick:()=>this.restoreAll(s)})}renderSitemapControls(s,t){return"issues"!==t?this.getRestoreAllButton(s):(0,e.createElement)("div",{style:{display:"flex",justifyContent:"space-between"}},this.getIgnoreAllOfTypeButton(s),(0,e.createElement)(y,{icon:"sui-icon-plus",text:(0,d.__)("Add All to Sitemap","wds"),color:"blue",loading:"add-all-to-sitemap"===this.state.requestInProgress,disabled:this.state.requestInProgress,onClick:()=>this.addAllToSitemap(s)}))}restoreAll(e){const s=this.getIssues(),t=Object.keys(this.getIgnoredIssues(s[e]));this.setState({requestInProgress:e},(()=>{T.restoreIssue(t).then((e=>{this.showSuccessNotice((0,d.__)("The issues have been restored.","wds")),this.setState({issues:e.issues})})).catch(this.showError).finally((()=>this.markRequestAsComplete()))}))}ignoreAll(){const e=this.getIssues(),s=this.getAllActiveIssueKeys(e);this.setState({requestInProgress:"ignore-all"},(()=>{T.ignoreIssue(s).then((e=>{this.showSuccessNotice((0,d.__)("The issues have been ignored.","wds")),this.setState({issues:e.issues})})).catch(this.showError).finally((()=>this.markRequestAsComplete()))}))}getActiveSitemapIssueCount(e){const s=this.getActiveIssues(e.sitemap||{});return Object.keys(s).length}getAllActiveIssueKeys(e){const s=this.getFlattenedIssues(e);return Object.keys(this.getActiveIssues(s))}getFlattenedIssues(e){return Object.keys(e).reduce(((s,t)=>Object.assign(s,e[t])),{})}ignoreAllOfType(e){const s=this.getIssues(),t=Object.keys(this.getActiveIssues(s[e]));this.setState({requestInProgress:e},(()=>{T.ignoreIssue(t).then((e=>{this.showSuccessNotice((0,d.__)("The issues have been ignored.","wds")),this.setState({issues:e.issues})})).catch(this.showError).finally((()=>this.markRequestAsComplete()))}))}addAllToSitemap(e){const s=this.getIssues(),t=Object.keys(this.getActiveIssues(s[e])).map((t=>s[e][t].path));this.setState({requestInProgress:"add-all-to-sitemap"},(()=>{T.addToSitemap(t).then((e=>{this.showSuccessNotice((0,d.__)("The missing items have been added to your sitemap as extra URLs.","wds")),this.setState({issues:e.issues})})).catch(this.showError).finally((()=>this.markRequestAsComplete()))}))}getGroupComponent(e){const s={"3xx":g,"4xx":w,"5xx":f,inaccessible:b,sitemap:_};return!!s.hasOwnProperty(e)&&s[e]}getIssue(e){const s=this.getIssues();let t=!1;return Object.keys(s).some((r=>{const n=Object.keys(s[r]).find((s=>s===e));return n&&(t=s[r][n]),n})),t}getActiveIssues(e){return this.filterIssues((s=>!e[s].ignored),e)}getIgnoredIssues(e){return this.filterIssues((s=>e[s].ignored),e)}filterIssues(e,s){return s=s||{},Object.keys(s).filter(e).reduce(((e,t)=>Object.assign(e,{[t]:s[t]})),{})}getIssues(){return this.state.issues||{}}showSuccessNotice(e){B.showSuccessNotice("wds-crawl-report-notice",e,!1)}showError(e){B.showErrorNotice("wds-crawl-report-notice",e||(0,d.__)("An unknown error occurred, please reload the page and try again.","wds"),!1)}markRequestAsComplete(){this.setState({requestInProgress:!1})}}c(K,"defaultProps",{onActiveIssueCountChange:()=>!1}),function(s,t){const r=document.getElementById("wds-url-crawler-report");function n(){s(".tab_url_crawler").find(".wds-url-crawler-progress").length&&s.post(ajaxurl,{action:"wds_get_crawl_progress",_wds_nonce:Wds.get("crawler","nonce")},(()=>!1),"json").done((function(e){var t,r;const i=null==e||null===(t=e.data)||void 0===t?void 0:t.in_progress,o=null==e||null===(r=e.data)||void 0===r?void 0:r.progress,a=s("#tab_url_crawler .wds-progress");i?(Wds.update_progress_bar(a,o),setTimeout(n,5e3)):(Wds.update_progress_bar(a,100),window.location.reload())}))}function a(){s(".wds-sitemap-toggleable").each((function(){const e=s(this),t=e.next("tr").find(".sui-table");e.find('input[type="checkbox"]').is(":checked")?t.show():t.hide()}))}function l(){const e=s("#wds-switch-to-native-button");Wds.open_dialog("wds-switch-to-native-modal","wds-switch-to-native-sitemap",e.attr("id")),e.off().on("click",(function(){e.addClass("sui-button-onload"),u(!1,(function(){window.location.href=d({"switched-to-native":1})}))}))}function c(){const e=s("#wds-switch-to-smartcrawl-button");Wds.open_dialog("wds-switch-to-smartcrawl-modal","wds-switch-to-smartcrawl-sitemap",e.attr("id")),e.off().on("click",(function(){e.addClass("sui-button-onload"),u(!0,(function(){window.location.href=d({"switched-to-sc":1})}))}))}function d(e){const t=window.location.href,r=new URLSearchParams(window.location.search);return t.split("?")[0]+"?"+s.param(s.extend({},{page:r.get("page")},e))}function u(e,t){return s.post(ajaxurl,{action:"wds-override-native",override:e?"1":"0",_wds_nonce:Wds.get("sitemaps","nonce")},t,"json")}function p(){const e=s(this);return e.addClass("sui-button-onload"),s.post(ajaxurl,{action:"wds-manually-update-engines",_wds_nonce:Wds.get("sitemaps","nonce")},(function(){Wds.show_floating_message("wds-sitemap-manually-notify-search-engines",Wds.l10n("sitemaps","manually_notified_engines"),"success"),e.removeClass("sui-button-onload")}),"json")}function h(){const e=s(this);return e.addClass("sui-button-onload"),s.post(ajaxurl,{action:"wds-manually-update-sitemap",_wds_nonce:Wds.get("sitemaps","nonce")},(function(){Wds.show_floating_message("wds-sitemap-manually-updated",Wds.l10n("sitemaps","manually_updated"),"success"),e.removeClass("sui-button-onload")}),"json")}function m(){return s(this).addClass("sui-button-onload"),s.post(ajaxurl,{action:"wds-deactivate-sitemap-module",_wds_nonce:Wds.get("sitemaps","nonce")},(function(){window.location.reload()}),"json")}r&&(0,o.render)((0,e.createElement)(i,null,(0,e.createElement)(K,{onActiveIssueCountChange:function(e,t){const r=s("#tab_url_crawler .sui-box-header .sui-tag"),n=s("li.tab_url_crawler"),i=n.find(".sui-tag"),o=n.find(".sui-icon-check-tick"),a=n.find(".sui-icon-loader"),l=s(".wds-new-crawl-button"),c=s(".sui-summary-large"),d=s('.sui-summary-large + [class*="sui-icon-"]'),u=s(".wds-invisible-urls-count"),p=s(".sui-box-header .wds-ignore-all").closest("div");undefined!==e&&(e>0?(r.show().html(e),i.show().html(e),p.show(),o.hide(),d.removeClass("sui-icon-check-tick sui-success").addClass("sui-icon-info sui-warning")):(r.hide(),i.hide(),p.hide(),o.show(),d.removeClass("sui-icon-info sui-warning").addClass("sui-icon-check-tick sui-success")),c.html(e),u.html(t),a.hide(),l.show())}})),r),s((function(){window.Wds.hook_conditionals(),window.Wds.hook_toggleables(),window.Wds.conditional_fields(),window.Wds.dismissible_message(),window.Wds.vertical_tabs(),window.Wds.reporting_schedule(),n(),class{static getQueryParam(e){const s=location.search;return new URLSearchParams(s).get(e)}static removeQueryParam(e){const s=location.search,t=new URLSearchParams(s);if(!t.get(e))return;t.delete(e);const r=location.href.replace(s,"?"+t.toString());history.replaceState({},"",r)}}.removeQueryParam("crawl-in-progress"),s(document).on("change",'.wds-sitemap-toggleable input[type="checkbox"]',a).on("change","#wds_sitemap_options-sitemap-disable-automatic-regeneration",(function(){const e=s(this);e.closest(".sui-toggle").find(".sui-notice").toggleClass("hidden",e.is(":checked"))})).on("click","#wds-switch-to-native-sitemap",l).on("click","#wds-switch-to-smartcrawl-sitemap",c).on("click","#wds-deactivate-sitemap-module",m).on("click","#wds-manually-update-sitemap",h).on("click","#wds-manually-notify-search-engines",p),s(a)}))}(jQuery)}()}();