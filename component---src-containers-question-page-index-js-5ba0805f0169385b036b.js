(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{374:function(e,t,n){"use strict";n.r(t);n(465);var r=n(7),a=n.n(r),o=n(0),i=n.n(o),c=n(1),s=n.n(c),l=n(412),u=n(404),d=n(467),p=n.n(d),m=n(468),f=n.n(m),h=n(469),b=n.n(h),g=n(470),y=n.n(g),v=n(471),w=n.n(v),E=n(472),x=n.n(E),j=n(473),O=n.n(j),C=n(474),k=n.n(C),P=n(475),I=n.n(P),S=[p.a,f.a,b.a,y.a,w.a,x.a,O.a,k.a,I.a],q=n(410),A=n(381),R=n(405),L=n(103),T=n(380),z=n(387),N=n(390),W=n(385),M=n(389),G=n(411),D=n(401),B=n(391),Q=(n(106),function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).getMatches=function(e,t){var n,r=[];for(n=t.exec(e);n;n=t.exec(e)){var a=n[1],o=n.index;r.push({text:a,index:o,lastIndex:o+(a.length+2)})}return r},t.parseCounter=0,t.parseString=function(e){var n=[];if(""===e)return n;var r=t.getMatches(e,/\[([^\]]*)\]/g);if(!r)return e;var a=0;return r.forEach(function(r,o){r.index>a&&n.push(e.substring(a,r.index));var c={key:"parse"+t.parseCounter+"match"+o};n.push(i.a.createElement("b",c,r.text)),a=r.lastIndex}),a<e.length&&n.push(e.substring(a)),1===n.length?n[0]:n},t}return a()(t,e),t.prototype.render=function(){var e=this.parseString(this.props.children);return i.a.createElement("span",null,e)},t}(o.PureComponent));Q.propTypes={children:s.a.node};var _=Q,H=n(31),F=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={},t.handleClose=function(){t.setState({showAnswer:!1})},t.handleChoose=function(e){var n=t.state.question,r=n.id,a=n.correct;window.ga&&window.ga("send","event","回答問題","第"+r+"題","選項"+(e+1)),t.setState({select:e,chooseAnswer:!0,showAnswer:!0}),t.props.setAnswer(r-1,e,e===a)},t.handleLearnMore=function(){var e=t.state.qId;t.setState(function(e){return{showAnswer:!e.showAnswer}}),t.props.clickLearnMore(e)},t}a()(t,e),t.getDerivedStateFromProps=function(e){var t=e.pageContext;return{question:t,pageId:t.id,qId:t.id-1}};var n=t.prototype;return n.componentDidMount=function(){this.props.startViewQuestion(this.state.qId)},n.render=function(){var e=this,t=this.state,n=t.showAnswer,r=t.select,a=t.question,o=t.chooseAnswer,c=t.qId,s=t.pageId;return i.a.createElement(A.a,null,i.a.createElement(z.a,{align:"center",height:"100vh",my:Object(H.d)("0","0","2em")},i.a.createElement(N.a,null,i.a.createElement(L.a,{height:Object(H.d)("50%","11em")},i.a.createElement(R.a,{justifyContent:"center",my:"1em"},q.map(function(e,t){return i.a.createElement(R.a,{alignItems:"center",key:t},i.a.createElement(D.a,{width:"1em",border:"solid 1.5px",bg:t<=c?"yellow":"gray"}),q.length-1!==t&&i.a.createElement(L.a,{bg:"black",height:"2px",px:Object(H.d)("0.75em","1.5em","0.5em")}))})),i.a.createElement(L.a,{mt:Object(H.d)("3.5rem","1.5em"),pl:Object(H.d)("0","3em"),fontSize:Object(H.d)("1em","1.5em"),position:"relative",maxWidth:Object(H.d)("25em",q[c].textPerLine),mx:Object(H.d)("2em","0")},i.a.createElement(D.a,{width:"2.5em",color:"white",bg:"black",position:"absolute",left:Object(H.d)("50%","0.5em"),top:Object(H.d)("-3em","auto"),transform:Object(H.d)("translateX(-50%)","unset")},"Q",s),i.a.createElement(L.a,{textAlign:"left"},i.a.createElement(T.a,{px:"0.5em",fontWeight:"bold",whiteSpace:"pre-wrap"},q[c].title),i.a.createElement(T.a,{px:"0.75em",fontSize:Object(H.d)("auto","1rem"),my:"1em"},q[c].sub)))),i.a.createElement(L.a,{height:"50%"},i.a.createElement(R.a,{flexDirection:Object(H.d)("column","row"),justifyContent:"center",alignItems:"center",my:Object(H.d)("0","3.5em")},i.a.createElement(L.a,{width:1,mb:Object(H.d)("1em","0"),position:"relative"},i.a.createElement(M.a,{src:S[c],ratio:533.33/915.69,borderRadius:Object(H.d)("4em","5em"),border:"2px solid"},n&&i.a.createElement("div",null,i.a.createElement(L.a,{position:"absolute",top:"0",bottom:"0",left:"0",right:"0",bg:"rgba(255,255,255,0.9)",px:Object(H.d)("2.5em","3em"),pt:"3em",pb:Object(H.d)("1.5em","3em"),borderRadius:Object(H.d)("4em","5.5em")},i.a.createElement(G.a,null,i.a.createElement(_,null,q[c].reserch),i.a.createElement(T.a,{mt:"0.75em",fontSize:"0.8em"},q[c].source))),i.a.createElement(L.a,{position:"absolute",top:"-0.25em",right:"1.25em"},i.a.createElement(W.a.transparent,{border:"transparent",hoverBg:"transparent",color:"black",onClick:this.handleClose},i.a.createElement(l.a,{size:"2em"})))))),i.a.createElement(L.a,{ml:"1em"},i.a.createElement(L.a,{m:"0.5em"},q[c].options.map(function(t,n){return i.a.createElement(L.a,{mb:"0.75em",key:n},i.a.createElement(W.a,{onClick:function(){return e.handleChoose(n)},disabled:o,selected:r===n,correct:q[c].correct===n,width:Object(H.d)("14.5em","15em"),py:Object(H.d)("0.5em","0.75em"),fontWeight:"normal"},t))}),i.a.createElement(R.a,{mt:Object(H.d)("1em","2.5em"),justifyContent:"center"},i.a.createElement(W.a,{mx:Object(H.d)("0.25em","0.5em"),width:Object(H.d)("7em","7em"),py:Object(H.d)("0.5em","0.75em"),onClick:this.handleLearnMore,fontWeight:"normal"},"數據解說"),i.a.createElement(W.a,{mx:Object(H.d)("0.25em","0.5em"),width:Object(H.d)("7em","7em"),py:Object(H.d)("0.5em","0.75em"),is:B.a,to:a.isLast?"/destination":"/question/"+(s+1),fontWeight:"normal"},a.isLast?"完成測驗":"下一題")))))))))},t}(o.PureComponent);F.propTypes={pageContext:s.a.object,answers:s.a.array,setAnswer:s.a.func};t.default=Object(u.a)(F)},378:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m}),n.d(t,"useStaticQuery",function(){return f});var r=n(0),a=n.n(r),o=n(1),i=n.n(o),c=n(376),s=n.n(c);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(379),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var d=n(73);n.d(t,"parsePath",function(){return d.a});var p=a.a.createContext({}),m=function(e){return a.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})},f=function(e){a.a.useContext;var t=a.a.useContext(p);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},379:function(e,t,n){var r;e.exports=(r=n(383))&&r.default||r},380:function(e,t,n){"use strict";n(106),n(21);var r=n(0),a=n.n(r),o=n(30),i=n(78),c=n.n(i),s=n(2),l=n(105),u=n.n(l),d=n(104),p=n(27),m=Object(o.d)(u.a).withConfig({displayName:"Text",componentId:"sc-1vna78b-0"})(["margin-top:0;margin-bottom:0;"," "," "," "," "," "," "," "," "," "," "," "," ",""],s.display,s.fontSize,s.space,s.color,s.textAlign,s.fontWeight,s.fontFamily,s.lineHeight,s.letterSpacing,s.position,Object(p.a)("whiteSpace"),Object(p.a)("verticalAlign"),Object(p.a)("textTransform"));m.defaultProps={is:"p",fontSize:"1em",lineHeight:1.5,letterSpacing:1.25,blacklist:d.a},m.inline=function(e){return a.a.createElement(m,Object.assign({is:"span"},e))},m.bold=function(e){return a.a.createElement(m,Object.assign({fontWeight:"bold"},e))},m.thin=function(e){return a.a.createElement(m,Object.assign({fontWeight:"200"},e))},m.dosis=function(e){return a.a.createElement(m,Object.assign({fontFamily:"Dosis"},e))},c()(1,7).forEach(function(e){var t="h"+e;m[t]=function(n){return a.a.createElement(m,Object.assign({is:t,fontSize:1+.125*(6-e)+"em"},n))}}),m.displayName="Text",t.a=m},381:function(e,t,n){"use strict";var r=n(382),a=n(0),o=n.n(a),i=n(1),c=n.n(i),s=n(395),l=n.n(s),u=n(378),d=n(103),p=function(e){var t=e.children,n=e.title,a=e.og;return o.a.createElement(u.StaticQuery,{query:"2592518421",render:function(e){var r=e.site.siteMetadata,i=n||r.title;return o.a.createElement("div",null,o.a.createElement(l.a,null,o.a.createElement("html",{lang:"zh-Hant"}),o.a.createElement("title",null,i),o.a.createElement("meta",{name:"description",content:r.description}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:Object(u.withPrefix)("/apple-touch-icon.png")}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:Object(u.withPrefix)("/favicon-32x32.png")}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:Object(u.withPrefix)("/favicon-16x16.png")}),o.a.createElement("link",{rel:"mask-icon",color:"#5bbad",href:Object(u.withPrefix)("/safari-pinned-tab.svg")}),o.a.createElement("meta",{name:"msapplication-TileColor",content:"#da532c"}),o.a.createElement("meta",{name:"theme-color",content:"#ffffff"}),o.a.createElement("meta",{property:"og:title",content:i}),o.a.createElement("meta",{property:"og:description",content:r.description}),o.a.createElement("meta",{property:"og:image",content:r.url+"/"+(a||"fb")+".png"})),o.a.createElement(d.a,{height:"100vh"},t))},data:r})};p.propTypes={children:c.a.node},t.a=p},382:function(e){e.exports={data:{site:{siteMetadata:{title:"一趟前往2030年的旅程",url:"https://2030.relab.cc",description:"你即將參與一趟通往「超高齡臺灣」的旅程。旅程途中，你將會看到人口結構遽變下臺灣面臨的挑戰。現在就出發，測測看你對十年後的臺灣了解多少吧！"}}}}},383:function(e,t,n){"use strict";n.r(t);n(21);var r=n(0),a=n.n(r),o=n(1),i=n.n(o),c=n(107),s=n(5),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},384:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(2),a=function(e,t){return void 0===t&&(t="color"),Object(r.style)({prop:e,cssProperty:t,key:"colors"})}},385:function(e,t,n){"use strict";var r=n(377),a=n.n(r),o=(n(21),n(0)),i=n.n(o),c=n(30),s=n(2),l=n(105),u=n.n(l),d=n(103),p=n(384),m=n(104),f=Object(c.c)(["",";",";",";"],Object(p.a)("hoverColor"),Object(p.a)("hoverBg","backgroundColor"),Object(p.a)("hoverBorder","borderColor")),h=Object(c.c)(["padding:0;border:none;font-family:inherit;line-height:1.25;text-decoration:none;"," "," "," "," "," "," "," "," "," "," "," appearance:none;transition:all ","ms;cursor:pointer;&:hover,&:focus{"," outline:none;}"," "," "," ",""],s.display,s.fontSize,s.position,s.space,s.color,s.width,s.borders,s.borderColor,s.borderRadius,s.fontWeight,s.letterSpacing,Object(s.themeGet)("duration",250),function(e){return!e.disabled&&f},function(e){return e.active&&!e.disabled&&f},function(e){return e.disabled&&"\n    cursor: not-allowed;\n    opacity: 0.5;\n  "},function(e){return e.selected&&"\n    background-color: "+Object(s.themeGet)("colors.gray")(e)+";\n    opacity: 1;\n  "},function(e){return e.disabled&&e.correct&&"\n    background-color: "+Object(s.themeGet)("colors.yellow")(e)+";\n    opacity: 1;\n  "}),b=Object(c.d)(u.a).withConfig({displayName:"Button__ButtonBase",componentId:"onvwh0-0"})(["",""],h),g=function(e){return i.a.createElement(d.a,Object.assign({is:"span"},e))},y=function(e){var t=e.leftIcon,n=e.rightIcon,r=e.iconSpacing,o=e.children,c=e.verticalAlign,s=a()(e,["leftIcon","rightIcon","iconSpacing","children","verticalAlign"]);return i.a.createElement(b,s,t?i.a.createElement(g,{mr:r},t()):null,i.a.createElement(g,{verticalAlign:c},o),n?i.a.createElement(g,{ml:r},n()):null)};y.defaultProps={blacklist:m.a,is:"button",fontSize:"1.25em",border:"2px solid",borderColor:"black",bg:"gray",color:"black",hoverColor:"black",hoverBg:"darkGray",px:"1em",py:"0.75em",fontWeight:"bold",iconSpacing:"0.25em",borderRadius:"1em",display:"inline-block",verticalAlign:"text-top"},y.displayName="Button",y.secondary=function(e){return i.a.createElement(y,Object.assign({bg:"secondary",borderColor:"secondary",hoverColor:"secondary"},e))},y.transparent=function(e){return i.a.createElement(y,Object.assign({border:"1px solid transparent",bg:"transparent",color:"text",hoverBorder:"primary"},e))},t.a=y},387:function(e,t,n){"use strict";var r=n(2),a=n(30),o=n(103),i=n(31),c=Object(a.d)(o.a).withConfig({displayName:"Container",componentId:"fuc9tj-0"})(["",""],r.maxWidth);c.defaultProps={mx:"auto",px:["1em",null,"2em"],width:1,maxWidth:i.b},c.displayName="Container",t.a=c},389:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(30),i=n(2),c=n(103),s=Object(o.d)(c.a).withConfig({displayName:"BackgroundImage",componentId:"sc-1yvvs87-0"})(["position:relative;background-image:url(",");background-size:",";background-position:",";background-repeat:no-repeat;",""],function(e){return e.src},function(e){return e.size},function(e){return e.backgroundPosition},function(e){return e.height?"":Object(i.ratio)(e)});s.propTypes={src:a.a.string,size:a.a.string,position:a.a.string},s.defaultProps={ratio:1,size:"cover",backgroundPosition:"50% 50%"},s.displayName="BackgroundImage",t.a=s},390:function(e,t,n){"use strict";n(21);var r=n(377),a=n.n(r),o=n(7),i=n.n(o),c=n(0),s=n.n(c),l=n(1),u=n.n(l),d=n(396),p=n(14),m=n.n(p),f=n(103),h=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={},t.handleContainerRef=function(e){t.containerRef=e},t.handleResize=function(e){var n=t.state.shouldCenter,r=void 0!==t.containerRef&&t.containerRef.getBoundingClientRect().height>e.bounds.height;t.count+=1,t.setState({shouldCenter:t.count>4?n:r},function(){t.props.onAlignChange(t.state.shouldCenter)})},t.clearCount=function(){t.count=0},t}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.timer=setInterval(this.clearCount,200),this.count=0},n.componentWillUnmount=function(){clearInterval(this.timer)},n.render=function(){var e=this.props,t=e.children,n=(e.onAlignChange,a()(e,["children","onAlignChange"])),r=this.state.shouldCenter;return s.a.createElement(f.a,Object.assign({position:"relative",height:"100%",ref:this.handleContainerRef},n),s.a.createElement(d.a,{bounds:!0,onResize:this.handleResize},function(e){var n=e.measureRef;return s.a.createElement(f.a,{position:r&&"absolute",top:r?"50%":0,width:1,transform:r&&"translateY(-50%)",ref:n},m()(t)?t(r):t)}))},t}(c.PureComponent);h.displayName="VerticalCenter",h.propTypes={onAlignChange:u.a.func},h.defaultProps={onAlignChange:function(){}},t.a=h},391:function(e,t,n){"use strict";n(21);var r=n(377),a=n.n(r),o=n(0),i=n.n(o),c=n(30),s=n(2),l=n(105),u=n.n(l),d=n(378),p=n(104),m=n(384),f=Object(c.c)([""," "," "," "," "," "," "," text-decoration:none;"," &:hover{",";}"],s.fontSize,s.space,s.color,s.fontWeight,s.lineHeight,s.letterSpacing,s.display,function(e){return e.disabled&&"\n    pointer-events: none;\n  "},Object(m.a)("hoverColor")),h=Object(c.d)(u.a).withConfig({displayName:"Link__NomalLink",componentId:"sc-53k5wg-0"})(["",""],f),b=Object(c.d)(d.Link).withConfig({displayName:"Link__GatsbyStyledLink",componentId:"sc-53k5wg-1"})(["",""],f),g=function(e){var t=e.to,n=(e.button,e.blacklist),r=a()(e,["to","button","blacklist"]);return/^\/(?!\/)/.test(t)?i.a.createElement(b,Object.assign({to:t},r)):i.a.createElement(h,Object.assign({is:"a",target:"_blank",blacklist:n},r))};g.displayName="Link",g.defaultProps={blacklist:p.a},t.a=g},401:function(e,t,n){"use strict";var r=n(377),a=n.n(r),o=n(0),i=n.n(o),c=n(1),s=n.n(c),l=n(103),u=function(e){var t=e.children,n=e.border,r=e.borderColor,o=e.bg,c=e.is,s=a()(e,["children","border","borderColor","bg","is"]);return i.a.createElement(l.a,s,i.a.createElement(l.a,{position:"relative",pt:"100%"},i.a.createElement(l.a,{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",width:1,borderRadius:"50%",border:n,borderColor:r,bg:o,is:c},i.a.createElement(l.a,{top:"50%",left:"50%",transform:"translate(-50%, -50%)",position:"absolute",lineHeight:"0",fontSize:"1.2em"},t))))};u.propTypes={children:s.a.node,border:s.a.string,borderColor:s.a.string,bg:s.a.string,is:s.a.oneOfType([s.a.string,s.a.func])},u.displayName="Circle",t.a=u},404:function(e,t,n){"use strict";var r=n(11),a=n(32),o=n(108),i=n(17),c="App/QuestionPage/SET_ANSWER",s="App/QuestionPage/START_VIEW_QUESTION",l="App/QuestionPage/CLICK_LEARN_MORE",u=function(e,t,n){return{type:c,qId:e,optId:t,isCorrect:n}},d=function(e){return{type:s,qId:e}},p=function(e){return{type:l,qId:e}},m=Object(i.fromJS)({answers:[],startTimes:[],learnMoreClicks:[]});var f="questions",h=Object(o.a)({key:f,reducer:function(e,t){switch(void 0===e&&(e=m),t.type){case c:return e.setIn(["answers",t.qId],[t.optId,t.isCorrect,new Date]);case s:return e.setIn(["startTimes",t.qId],new Date);case l:return e.updateIn(["learnMoreClicks",t.qId],function(e){return e||(window.ga&&window.ga("send","event","深入了解","第"+(t.qId+1)+"題"),new Date)});default:return e}}}),b=Object(a.c)(function(e){var t=e.getIn([f,"answers"]),n=e.getIn([f,"startTimes"]),r=e.getIn([f,"learnMoreClicks"]);return{answers:t?t.toJS():[],score:t?t.filter(function(e){return e&&e[1]}).size:0,startTimes:n,learnMoreClicks:r}},function(e){return Object(r.b)({setAnswer:u,startViewQuestion:d,clickLearnMore:p},e)});t.a=Object(r.c)(h,b)},405:function(e,t,n){"use strict";var r=n(2),a=n(30),o=n(103),i=n(104),c=Object(a.d)(o.a).withConfig({displayName:"Flex",componentId:"sc-1wakzhz-0"})([""," "," "," ",""],r.alignItems,r.justifyContent,r.flexDirection,r.flexWrap);c.defaultProps={display:"flex",blacklist:i.a},c.displayName="Flex",t.a=c},410:function(e){e.exports=[{id:1,options:["減少約160萬","減少約100萬","持平"],title:"2018年臺灣勞動人口共有1708萬人，占總人口72.4%\n你認為十年後勞動人口的趨勢會如何變化？",sub:"(勞動人口定義：15-64歲人口)",reserch:"根據推估，2028年臺灣勞動人口將比2018年減少約160萬。\n\n由於生育率降低，臺灣的勞動人口數從2015年就已經開始下降。2028年時勞動人口占總人口降至65.8%。根據國發會推估，[未來二十年每十年勞動人口減少約160-170萬，相當於2018年彰化縣和基隆市的人口總和]。在人口結構遽變下，如何提升生產力、促進產業創新及進化，是否開放移民政策，將是臺灣能否維持經濟成長的關鍵。",source:"資料來源：內政部戶政司、國發會人口推估-中推計",textPerLine:"32em",correct:0},{id:2,options:["100萬","400萬","700萬"],title:"根據統計，每位需要長期照護的老人，平均被照顧時間為7.3年\n期間你認為平均每位需要長照的老人總花費大約是多少錢？",sub:"(根據衛福部 1051219 長照 2.0 核定本，需要長照定義為吃飯、上下床、更換衣服、 上廁所、洗澡、室內外走動及家事活動能力等 7 項中1項以上障礙)",reserch:"平均每位需要長期照護的老人總花費約400-500萬元。\n\n推估平均每月照顧一位長期被照顧者支出約5-7萬元。2010年行政院主計總處戶口及住宅普查資料統計約12.7%的老人需要照顧，國發會推估2028年65歲以上老人總數為526萬，以此推估2028年需照顧老人人口可達67萬人、年照顧支出總計推估可達4,020億元。在日本，越來越多人離開工作崗位或提早退休以照顧年邁的父母，[老人照護還有龐大的機會成本。未來，誰來照顧臺灣遽增的老人？能否使老人更健康活躍？臺灣的青壯年能不能負擔得起家中長輩照護的支出？]人口結構老化雖帶來商業契機，但我們同時也需要注意老年人口快速增加所造成醫療保健、社會保險與福利支出上升的挑戰。",source:"資料來源：衛福部-2017年老人狀況調查、國發會-中華民國人口推計（2018至2065年）數據－中推計、行政院主計總處-2010年戶口及住宅普查資料",textPerLine:"35em",correct:1},{id:3,options:["花蓮縣","高雄市","新北市"],title:"十年後，臺灣每五個人就會有一個老人\n你認為目前哪個縣市老年人口總數最多？",sub:"(老年人口定義：65歲以上人口)",reserch:"2018年全臺老年人口數，雖然僅佔總人口的13.5%，卻相近於新竹縣全縣人口。而高雄市約有42萬老人，老人人口比例約15%。花蓮縣老人人口約有5.2萬，老人人口比例近16%。\n\n雖然全臺灣預計在2026年才會進入超高齡社會，但人口老化已提前出現在許多鄉鎮市區。2018年367個鄉鎮市區中已有五分之一進入超高齡社會，此外，[老年人口排名前5%的地區(主要在臺北、新北、桃園、中壢)，老年人口數量就佔全臺灣約27%]，高齡人口分布比例相當不均。因應人口結構老化帶來的影響刻不容緩，且資源分配需因地制宜。",source:"資料來源：資料來源：內政部戶政司-縣市人口年齡結構指標",textPerLine:"24em",correct:2},{id:4,options:["南韓","臺灣","印尼"],title:"臺灣的社經發展相對鄰國有緊密的關係\n你認為以下哪個國家會最晚進入「超高齡社會」？",reserch:"根據聯合國推估，泰國、印尼、馬來西亞、菲律賓、越南等東南亞國家會比南韓、臺灣、新加坡較晚進入超高齡社會。\n\n人口紅利(demographic dividend)是指因為勞動人口數在總人口數中的比例上升，所伴隨的經濟成長效應。因出生率降低且老化快速，[臺灣的人口紅利將於 2027 年結束，並正式進入超高齡社會]，因此了解臺灣相對亞洲其他鄰國的區域定位將是決定臺灣未來發展的重要關鍵。",source:"資料來源：聯合國-Probabilistic Population Projections based on the World Population Prospects: The 2017 Revision",textPerLine:"28em",correct:2},{id:5,options:["減少約40%","減少約10%","持平"],title:"2018年臺灣的18歲人口約有30萬人\n你認為十年後臺灣的18歲人口會有多少人？",reserch:"根據推估，2028年18歲的人口僅會剩下16.9萬人。\n\n想知道2028年18歲的人口，可以參考2018年8歲的人口。18歲人口的大幅減少，相當於未來十年內大學新生入學人數將隨之驟減。此外，[未來十年內，青壯年的扶養負擔將增加37%]，現在每2.6位青壯年扶養一位幼年及老年人口，2028年將為每1.9位青壯年扶養。人口結構老化對社會的衝擊是全面性的，包含教育、醫療、公共設施與資源分配等。長期而言，我們可以思考許多需要青年人力的工作（例如警消、護理）是否仍有足夠的人員供應？產業是否需要思考新的生產模式呢？",source:"資料來源：國發會-中華民國人口推計（2018至2065年）數據－中推計",textPerLine:"25em",correct:0},{id:6,options:["30萬人","50萬人","70萬人"],title:"我們身邊有不少協助長輩的外籍看護、或是在工地裡協助重大建設的產業移工，整體來說，你認為目前臺灣合法的外籍移工人數有多少？",reserch:"2018年臺灣的合法外籍移工人數有706,850人。\n\n2018年臺灣的合法外籍移工總數，已經超越雲林縣的人口總數。在未來10年老年人口增加約180萬人、勞動人口減少約160萬人的情形下，我們除了需要思考如何讓外籍移工成為幫助臺灣的力量，也需要關注臺灣如何能透過更具包容性的社會、及更全面的政策來幫助移工。",source:"資料來源：中華民國統計資訊網-2018年外籍勞工統計",textPerLine:"27em",correct:2},{id:7,options:["6","16","66"],title:"除了外籍移工，新移民也讓臺灣走向愈趨多元的社會\n你認為目前臺灣每＿個新生兒，就有一個是新移民後代？",reserch:"2018年母親為新移民的新生兒佔臺灣總新生兒比例為6.2％。\n\n[過去18年來母親為新移民的新生兒佔總新生兒比約9%，代表新移民已逐漸代表臺灣社會不小比例。]進一步觀察臺灣各地區新移民後代的數據，連江縣、嘉義縣、雲林縣連續三年都在新移民新生兒排行的前五名，各在8-13%之間，顯示移工／新移民帶來的文化影響在某些縣市可能較早出現且影響較廣泛。根據內政部統計，2018年底原住民人口佔總人口約2.4%，已設籍外來人口則佔約1.4%。在臺灣走向多元社會的路上，我們除了思考制度層面的保障外，新移民／移工的心理層面、社會融合也需要持續關注。",source:"資料來源：內政部戶政司-嬰兒出生按生父母原屬國籍按縣市",textPerLine:"31em",correct:1},{id:8,options:["40%","65%","90%"],title:"美國的服務業產值占總GDP的67%\n你認為臺灣服務業的產值佔總GDP比例約為多少？",reserch:"2018年臺灣的服務業產值佔總GDP比例為63%。\n\n目前臺灣工業雖僅佔臺灣GDP36%，傳統電子製造業卻佔臺股市值的68%，表示市場投資人認同的價值仍多半來自於傳統電子製造業。而雖然臺灣與美國皆以服務業產值佔GDP較高比例，臺灣上市公司市值排名前五名分別為：台積電、鴻海、台塑化、中華電信、台塑；相較美國股市市值排名前五大公司為微軟Microsoft、蘋果Apple、亞馬遜 Amazon、谷歌Google的母公司Alphabet及股神巴菲特的波克夏Berkshire Hathaway則以引領未來新經濟的公司為主。臺灣尚未產生獨角獸，但最近美國上市的叫車服務公司Lyft上市時市值超過220億美元，就與台塑不相上下。未來臺灣的產業創新與發展，需要更積極思考[如何應用過去堅實的工業基礎，在服務業為主的產業型態下，讓創新與知識帶領產業發展出新的利基。]",source:"資料來源：行政院主計總處-「國民所得統計及國內經濟情勢展望」，Bloomberg 註: 以2019/4/3收盤價計算",textPerLine:"28em",correct:1},{id:9,options:["40%","55%","80%"],title:"2017年60歲以上的網路使用率是39.4%\n你認為2018年60歲以上的網路使用率約提升成多少？",sub:"(2017年網路使用率：20-29歲為99.2%、60歲以上為39.4%；2018年20-29歲的網路使用率較前一年度增加0.2%到99.4%)",reserch:"2018年60歲以上上網率首度突破五成，從2017年的39.4%，提升至2018年的53.9%，是近一年成長速度最快的族群。[但65歲以上的網路族族完全不會去查證網路訊息真實性的比率最高(約56.2%)，且過半的人缺乏基礎資訊安全認知(例如：數位足跡認知、應用程式存取權限)。]\n\n隨著科技與網路發展，主流媒體的商業模式逐漸轉變成提升點擊點閱轉換率，再以數據分析循環提升(2017年網路廣告量佔總廣告量50%)，而未來資訊碎片化的情形將隨著科技發展而更加嚴重。根據國發會調查，2018年全臺手機行動上網族的連網時間，平均達3小時31分鐘(211分鐘)，12-19歲族群的連網時間更高，達282分鐘。身為閱聽眾的我們每天花在媒體時間越來越長，因此每個族群皆需要具備媒體識讀的能力，才能在浩瀚的資訊量當中篩選出真實且重要的訊息。",source:"資料來源：國發會107年個人家戶數位機會調查報告、107年手機族數位機會調查報告(手冊)、107數位機會發展現況總冊(手冊)",textPerLine:"29em",correct:1}]},411:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(0),i=n.n(o),c=(n(1),n(425)),s=n(396),l=n(103),u=(n(385),n(380)),d=(n(31),function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.measure()},n.render=function(){var e=this.props,t=e.measureRef,n=e.contentRect.bounds.height,r=e.children;return i.a.createElement(l.a,{height:"100%"},i.a.createElement(l.a,{height:"100%",ref:t},i.a.createElement(c.Scrollbars,{style:{height:n},autoHide:!0},i.a.createElement(u.a,{textAlign:"left",lineHeight:"1.75",whiteSpace:"pre-wrap"},r))))},t}(o.PureComponent));d.propTypes={},t.a=Object(s.b)("bounds")(d)},467:function(e,t,n){e.exports=n.p+"static/q1-baecf5d337678955c1ed35cd87b74446.svg"},468:function(e,t,n){e.exports=n.p+"static/q2-bbd58c971ed436a589d9d7f31ff8f8c2.svg"},469:function(e,t,n){e.exports=n.p+"static/q3-f7d61e7f952adb3caa8a4df56ea46d2b.svg"},470:function(e,t,n){e.exports=n.p+"static/q4-46a33b91faba3b66395dbf274106be9d.svg"},471:function(e,t,n){e.exports=n.p+"static/q5-06736448b70f09ac73b3d1b74c892519.svg"},472:function(e,t,n){e.exports=n.p+"static/q6-a87781d2346f5393403e92aaeec1804d.svg"},473:function(e,t,n){e.exports=n.p+"static/q7-00270ab4da6ba32df6c1ff6f18d6313e.svg"},474:function(e,t,n){e.exports=n.p+"static/q8-37a0e215605e0b67c1f2d6ec85a1c595.svg"},475:function(e,t,n){e.exports=n.p+"static/q9-2ea4177a056938f2ea527c3d144aeb8e.svg"}}]);
//# sourceMappingURL=component---src-containers-question-page-index-js-5ba0805f0169385b036b.js.map