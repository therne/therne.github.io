(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{146:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(178),r=n(200),p=n.n(r),l=n(4),s=n.n(l),c=n(158),d=n.n(c),f=n(156),u=n(152),g=n(182),m=n(253);function h(){var e=p()(["\n  padding: 100px 0 0;\n  @media (max-width: 414px) {\n    padding: 70px 0 0;\n  }\n"]);return h=function(){return e},e}var b=g.a.extend(h()),w=function(e){var t=e.data,a=Object(u.get)("allMarkdownRemark.edges")(t);return o.a.createElement(b,null,o.a.createElement(d.a,null,o.a.createElement("title",null,"WONISM | PORTFOLIOS"),o.a.createElement("meta",{name:"og:title",content:"WONISM | PORTFOLIOS"})),Object(u.map)(function(e){if("/404/"!==e.node.path){var t=Object(u.get)("node.frontmatter")(e),a=t.path,i=t.title,r=t.images,p=Object(u.isArray)(r)?Object(u.first)(r):null;return Object(u.isEmpty)(p)?o.a.createElement(m.a,{key:a},o.a.createElement(f.Link,{to:a},o.a.createElement("h4",null,i))):o.a.createElement(m.a,{key:a},o.a.createElement(f.Link,{to:a},Object(u.includes)("//")(p)?o.a.createElement("img",{src:p,alt:"portfolio"}):o.a.createElement("img",{src:n(160)("./"+p),alt:"portfolio"}),o.a.createElement("h6",null,i)))}return null})(a))};w.propTypes={data:s.a.shape({}).isRequired};var y=w;n.d(t,"pageQuery",function(){return v});t.default=function(e){return o.a.createElement(i.a,e,o.a.createElement(y,e))};var v="3379136043"},160:function(e,t,n){var a={"./images/1.jpg":161,"./images/2.jpg":162,"./me.png":194,"./resume/index.md":163,"./test-1/1.png":164,"./test-1/2.png":165,"./test-1/index.md":166,"./test-2/3.png":167,"./test-2/4.png":168,"./test-2/index.md":169,"./test-3/5.png":170,"./test-3/6.png":171,"./test-3/index.md":172,"./test-4/7.png":173,"./test-4/8.png":174,"./test-4/9.png":175,"./test-4/index.md":176};function o(e){var t=i(e);return n(t)}function i(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=160},161:function(e,t,n){e.exports=n.p+"static/1-f93e323ea105ecf6f8a88aa508673701.jpg"},162:function(e,t,n){e.exports=n.p+"static/2-34077c2ae4a023e25230a44ae5ecaa03.jpg"},163:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n> ---\n| type: "resume"\n| title: "Resume"')},164:function(e,t,n){e.exports=n.p+"static/1-f93e323ea105ecf6f8a88aa508673701.png"},165:function(e,t,n){e.exports=n.p+"static/2-34077c2ae4a023e25230a44ae5ecaa03.png"},166:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n> ---\n| type: "portfolio"\n| title: "Gatsby Advanced Blog"')},167:function(e,t,n){e.exports=n.p+"static/3-58f617929f2cc2492b5df81349aaeece.png"},168:function(e,t,n){e.exports=n.p+"static/4-c39321e0dbc27a0dac4d3f078e664366.png"},169:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n> ---\n| type: "portfolio"\n| title: "Gatsby Advanced Blog"')},170:function(e,t,n){e.exports=n.p+"static/5-e4dd0ca2ab98e87eacad87e391414b51.png"},171:function(e,t,n){e.exports=n.p+"static/6-c5df77eb6272acd552decfe348295a47.png"},172:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n> ---\n| type: "portfolio"\n| title: "Gatsby Advanced Blog"')},173:function(e,t,n){e.exports=n.p+"static/7-1398f7ad17588bd657ad459ee5f370a1.png"},174:function(e,t,n){e.exports=n.p+"static/8-6fe54be1b5f54eea5f440ea0eb766f31.png"},175:function(e,t,n){e.exports=n.p+"static/9-5a1d19df0ab27dc072518b6065c1088f.png"},176:function(e,t){throw new Error('Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type.\n> ---\n| type: "portfolio"\n| title: "Gatsby Advanced Blog"')},182:function(e,t,n){"use strict";var a=n(153).a.div.withConfig({displayName:"SimpleWrapper",componentId:"sc-1pn98d4-0"})(["position:relative;&:before,&:after{display:block;content:'';clear:both;}"]);t.a=a},200:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),e.raw=t,e}},253:function(e,t,n){"use strict";var a=n(153).a.section.withConfig({displayName:"PortfolioCard",componentId:"sc-1ywhlua-0"})(["display:inline-block;position:relative;float:left;padding:28.125% 0 0;width:50%;height:0;background-color:#eee;overflow:hidden;@media (max-width:414px){padding:56.25% 0 0;width:100%;}&:nth-child(4n + 2),&:nth-child(4n + 3){background-color:#fff;}&:hover{img{width:110%;}h4{font-size:2.2vw;}}a{display:block;position:absolute;top:0;left:0;width:100%;height:100%;color:#000;}img{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;width:100%;height:auto;transition:all .4s ease 0s;}h6{position:absolute;bottom:16px;left:16px;font-size:14px;text-decoration:underline;}h4{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;width:80%;height:2em;line-height:2em;font-size:2vw;text-align:center;transition:all .4s ease 0s;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}"]);t.a=a}}]);
//# sourceMappingURL=component---src-templates-portfolios-jsx-e6f5199131cf8649c9c1.js.map