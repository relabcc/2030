(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{368:function(e,t,n){"use strict";n.r(t);n(112);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(11),l=n(455),s=n.n(l),u=n(456),d=n.n(u),p=n(457),m=n.n(p),f=n(381),b=n(387),h=n(103),g=n(380),y=n(389),v=n(385),E=n(390),j=n(31),O=n(391),k=n(409),x=n(399),w=n(400),C=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props,t=e.pageContext.id;(0,e.setIndex)(t)},n.render=function(){var e=this.props,t=e.pageContext,n=t.title,a=t.id,r=e.isMobile;return i.a.createElement(f.a,{title:n,og:"og-"+a},i.a.createElement(y.a,{position:"relative",src:r?d.a:s.a,height:"100%"},i.a.createElement(E.a,null,i.a.createElement(b.a,{align:"center"},i.a.createElement(h.a,{transform:"rotate(-3deg)"},i.a.createElement(k.a,null,n.split("，").reduce(function(e,t,n){return e.concat(n>0?[i.a.createElement("br",{key:"b-"+n}),t]:t)},[])),i.a.createElement(h.a,{my:"1em",py:"0.15em",px:"1.5em",bg:"yellow",border:"solid 1.5px",fontSize:Object(j.d)("1.5em","2em","1.5em","2em"),fontWeight:"bold",borderRadius:"1em",display:"inline-block"},"一趟前往2030年的旅程")),i.a.createElement(g.a,{mt:"0.25em",fontWeight:"bold",lineHeight:"1.5",fontSize:Object(j.d)("0.9em","1.2em","0.8em")},"你即將參與一趟通往「超高齡臺灣」的旅程",i.a.createElement("br",null),"旅程途中，你將看到人口結構遽變下臺灣面臨的挑戰",i.a.createElement("br",null),"現在就出發，測測看你對十年後的臺灣了解多少吧！"),i.a.createElement(g.a,{mt:"1em",fontSize:Object(j.d)("0.75em","1em")},"*超高齡社會：65歲以上老年人口佔總人口比例超過20%"),i.a.createElement(h.a,{mt:"0.8em"},i.a.createElement(v.a,{m:"0.5em",py:"0.35em",px:"1.25em",hoverBg:"yellow",is:O.a,to:"/question/1"},"START")),i.a.createElement(h.a,{height:Object(j.d)("35vh","35vh","28vh","28vh")}))),!r&&i.a.createElement(h.a,{position:"absolute",bottom:"0",width:"100%"},i.a.createElement(y.a,{src:m.a,ratio:422.09/1923}))))},t}(o.PureComponent);t.default=Object(c.c)(x.a,w.a)(C)},378:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return b}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m}),n.d(t,"useStaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(1),i=n.n(o),c=n(376),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(379),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(73);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},f=function(e){r.a.useContext;var t=r.a.useContext(p);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function b(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},379:function(e,t,n){var a;e.exports=(a=n(383))&&a.default||a},380:function(e,t,n){"use strict";n(106),n(21);var a=n(0),r=n.n(a),o=n(30),i=n(78),c=n.n(i),l=n(2),s=n(105),u=n.n(s),d=n(104),p=n(27),m=Object(o.d)(u.a).withConfig({displayName:"Text",componentId:"sc-1vna78b-0"})(["margin-top:0;margin-bottom:0;"," "," "," "," "," "," "," "," "," "," "," "," ",""],l.display,l.fontSize,l.space,l.color,l.textAlign,l.fontWeight,l.fontFamily,l.lineHeight,l.letterSpacing,l.position,Object(p.a)("whiteSpace"),Object(p.a)("verticalAlign"),Object(p.a)("textTransform"));m.defaultProps={is:"p",fontSize:"1em",lineHeight:1.5,letterSpacing:1.25,blacklist:d.a},m.inline=function(e){return r.a.createElement(m,Object.assign({is:"span"},e))},m.bold=function(e){return r.a.createElement(m,Object.assign({fontWeight:"bold"},e))},m.thin=function(e){return r.a.createElement(m,Object.assign({fontWeight:"200"},e))},m.dosis=function(e){return r.a.createElement(m,Object.assign({fontFamily:"Dosis"},e))},c()(1,7).forEach(function(e){var t="h"+e;m[t]=function(n){return r.a.createElement(m,Object.assign({is:t,fontSize:1+.125*(6-e)+"em"},n))}}),m.displayName="Text",t.a=m},381:function(e,t,n){"use strict";var a=n(382),r=n(0),o=n.n(r),i=n(1),c=n.n(i),l=n(395),s=n.n(l),u=n(378),d=n(103),p=function(e){var t=e.children,n=e.title,r=e.og;return o.a.createElement(u.StaticQuery,{query:"2592518421",render:function(e){var a=e.site.siteMetadata,i=n||a.title;return o.a.createElement("div",null,o.a.createElement(s.a,null,o.a.createElement("html",{lang:"zh-Hant"}),o.a.createElement("title",null,i),o.a.createElement("meta",{name:"description",content:a.description}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:Object(u.withPrefix)("/apple-touch-icon.png")}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:Object(u.withPrefix)("/favicon-32x32.png")}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:Object(u.withPrefix)("/favicon-16x16.png")}),o.a.createElement("link",{rel:"mask-icon",color:"#5bbad",href:Object(u.withPrefix)("/safari-pinned-tab.svg")}),o.a.createElement("meta",{name:"msapplication-TileColor",content:"#da532c"}),o.a.createElement("meta",{name:"theme-color",content:"#ffffff"}),o.a.createElement("meta",{property:"og:title",content:i}),o.a.createElement("meta",{property:"og:description",content:a.description}),o.a.createElement("meta",{property:"og:image",content:a.url+"/"+(r||"fb")+".png"})),o.a.createElement(d.a,{height:"100vh"},t))},data:a})};p.propTypes={children:c.a.node},t.a=p},382:function(e){e.exports={data:{site:{siteMetadata:{title:"一趟前往2030年的旅程",url:"https://2030.relab.cc",description:"你即將參與一趟通往「超高齡臺灣」的旅程。旅程途中，你將會看到人口結構遽變下臺灣面臨的挑戰。現在就出發，測測看你對十年後的臺灣了解多少吧！"}}}}},383:function(e,t,n){"use strict";n.r(t);n(21);var a=n(0),r=n.n(a),o=n(1),i=n.n(o),c=n(107),l=n(5),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},384:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(2),r=function(e,t){return void 0===t&&(t="color"),Object(a.style)({prop:e,cssProperty:t,key:"colors"})}},385:function(e,t,n){"use strict";var a=n(377),r=n.n(a),o=(n(21),n(0)),i=n.n(o),c=n(30),l=n(2),s=n(105),u=n.n(s),d=n(103),p=n(384),m=n(104),f=Object(c.c)(["",";",";",";"],Object(p.a)("hoverColor"),Object(p.a)("hoverBg","backgroundColor"),Object(p.a)("hoverBorder","borderColor")),b=Object(c.c)(["padding:0;border:none;font-family:inherit;line-height:1.25;text-decoration:none;"," "," "," "," "," "," "," "," "," "," "," appearance:none;transition:all ","ms;cursor:pointer;&:hover,&:focus{"," outline:none;}"," "," "," ",""],l.display,l.fontSize,l.position,l.space,l.color,l.width,l.borders,l.borderColor,l.borderRadius,l.fontWeight,l.letterSpacing,Object(l.themeGet)("duration",250),function(e){return!e.disabled&&f},function(e){return e.active&&!e.disabled&&f},function(e){return e.disabled&&"\n    cursor: not-allowed;\n    opacity: 0.5;\n  "},function(e){return e.selected&&"\n    background-color: "+Object(l.themeGet)("colors.gray")(e)+";\n    opacity: 1;\n  "},function(e){return e.disabled&&e.correct&&"\n    background-color: "+Object(l.themeGet)("colors.yellow")(e)+";\n    opacity: 1;\n  "}),h=Object(c.d)(u.a).withConfig({displayName:"Button__ButtonBase",componentId:"onvwh0-0"})(["",""],b),g=function(e){return i.a.createElement(d.a,Object.assign({is:"span"},e))},y=function(e){var t=e.leftIcon,n=e.rightIcon,a=e.iconSpacing,o=e.children,c=e.verticalAlign,l=r()(e,["leftIcon","rightIcon","iconSpacing","children","verticalAlign"]);return i.a.createElement(h,l,t?i.a.createElement(g,{mr:a},t()):null,i.a.createElement(g,{verticalAlign:c},o),n?i.a.createElement(g,{ml:a},n()):null)};y.defaultProps={blacklist:m.a,is:"button",fontSize:"1.25em",border:"2px solid",borderColor:"black",bg:"gray",color:"black",hoverColor:"black",hoverBg:"darkGray",px:"1em",py:"0.75em",fontWeight:"bold",iconSpacing:"0.25em",borderRadius:"1em",display:"inline-block",verticalAlign:"text-top"},y.displayName="Button",y.secondary=function(e){return i.a.createElement(y,Object.assign({bg:"secondary",borderColor:"secondary",hoverColor:"secondary"},e))},y.transparent=function(e){return i.a.createElement(y,Object.assign({border:"1px solid transparent",bg:"transparent",color:"text",hoverBorder:"primary"},e))},t.a=y},387:function(e,t,n){"use strict";var a=n(2),r=n(30),o=n(103),i=n(31),c=Object(r.d)(o.a).withConfig({displayName:"Container",componentId:"fuc9tj-0"})(["",""],a.maxWidth);c.defaultProps={mx:"auto",px:["1em",null,"2em"],width:1,maxWidth:i.b},c.displayName="Container",t.a=c},389:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(30),i=n(2),c=n(103),l=Object(o.d)(c.a).withConfig({displayName:"BackgroundImage",componentId:"sc-1yvvs87-0"})(["position:relative;background-image:url(",");background-size:",";background-position:",";background-repeat:no-repeat;",""],function(e){return e.src},function(e){return e.size},function(e){return e.backgroundPosition},function(e){return e.height?"":Object(i.ratio)(e)});l.propTypes={src:r.a.string,size:r.a.string,position:r.a.string},l.defaultProps={ratio:1,size:"cover",backgroundPosition:"50% 50%"},l.displayName="BackgroundImage",t.a=l},390:function(e,t,n){"use strict";n(21);var a=n(377),r=n.n(a),o=n(7),i=n.n(o),c=n(0),l=n.n(c),s=n(1),u=n.n(s),d=n(396),p=n(14),m=n.n(p),f=n(103),b=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={},t.handleContainerRef=function(e){t.containerRef=e},t.handleResize=function(e){var n=t.state.shouldCenter,a=void 0!==t.containerRef&&t.containerRef.getBoundingClientRect().height>e.bounds.height;t.count+=1,t.setState({shouldCenter:t.count>4?n:a},function(){t.props.onAlignChange(t.state.shouldCenter)})},t.clearCount=function(){t.count=0},t}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.timer=setInterval(this.clearCount,200),this.count=0},n.componentWillUnmount=function(){clearInterval(this.timer)},n.render=function(){var e=this.props,t=e.children,n=(e.onAlignChange,r()(e,["children","onAlignChange"])),a=this.state.shouldCenter;return l.a.createElement(f.a,Object.assign({position:"relative",height:"100%",ref:this.handleContainerRef},n),l.a.createElement(d.a,{bounds:!0,onResize:this.handleResize},function(e){var n=e.measureRef;return l.a.createElement(f.a,{position:a&&"absolute",top:a?"50%":0,width:1,transform:a&&"translateY(-50%)",ref:n},m()(t)?t(a):t)}))},t}(c.PureComponent);b.displayName="VerticalCenter",b.propTypes={onAlignChange:u.a.func},b.defaultProps={onAlignChange:function(){}},t.a=b},391:function(e,t,n){"use strict";n(21);var a=n(377),r=n.n(a),o=n(0),i=n.n(o),c=n(30),l=n(2),s=n(105),u=n.n(s),d=n(378),p=n(104),m=n(384),f=Object(c.c)([""," "," "," "," "," "," "," text-decoration:none;"," &:hover{",";}"],l.fontSize,l.space,l.color,l.fontWeight,l.lineHeight,l.letterSpacing,l.display,function(e){return e.disabled&&"\n    pointer-events: none;\n  "},Object(m.a)("hoverColor")),b=Object(c.d)(u.a).withConfig({displayName:"Link__NomalLink",componentId:"sc-53k5wg-0"})(["",""],f),h=Object(c.d)(d.Link).withConfig({displayName:"Link__GatsbyStyledLink",componentId:"sc-53k5wg-1"})(["",""],f),g=function(e){var t=e.to,n=(e.button,e.blacklist),a=r()(e,["to","button","blacklist"]);return/^\/(?!\/)/.test(t)?i.a.createElement(h,Object.assign({to:t},a)):i.a.createElement(b,Object.assign({is:"a",target:"_blank",blacklist:n},a))};g.displayName="Link",g.defaultProps={blacklist:p.a},t.a=g},399:function(e,t,n){"use strict";var a=n(32);t.a=function(e){return Object(a.c)(function(e){var t=e.get("browser");return{browser:t,isMobile:t.lessThan.md}})(e)}},400:function(e,t,n){"use strict";var a=n(11),r=n(32),o=n(108),i=n(82),c=Object(o.a)({key:"result",reducer:i.a}),l=Object(r.c)(function(e){var t=e.get("result");return t?t.toJS():{}},function(e){return Object(a.b)({setIndex:i.d},e)});t.a=Object(a.c)(c,l)},409:function(e,t,n){"use strict";n(21);var a=n(377),r=n.n(a),o=n(0),i=n.n(o),c=n(103),l=n(31);t.a=function(e){var t=e.children,n=r()(e,["children"]);return i.a.createElement(c.a,Object.assign({},n,{pt:Object(l.d)("0.5em","1em")}),i.a.createElement(c.a,{fontSize:Object(l.d)("2em","3.25em","1.75em","3em"),fontWeight:"bold",color:"yellow",position:"relative",display:"inline-block"},t,i.a.createElement(c.a,{position:"absolute",top:"0",left:"0",color:"black",transform:"translateX(0.1em)"},t)))}},455:function(e,t,n){e.exports=n.p+"static/intro-4707b97bc07e5b878c519cec12660801.svg"},456:function(e,t,n){e.exports=n.p+"static/intro-mobile-00a0b10fdc7b3a03f82d21525f9d204c.svg"},457:function(e,t,n){e.exports=n.p+"static/introdashboard-fc08c193c3b9f005db3e9b1727739dce.svg"}}]);
//# sourceMappingURL=component---src-containers-home-page-index-js-2d4a7821a9714ce5a0ea.js.map