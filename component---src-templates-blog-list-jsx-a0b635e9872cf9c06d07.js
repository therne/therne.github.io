(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{146:function(t,e,r){"use strict";r.r(e),r.d(e,"blogListQuery",function(){return l});r(428);var a=r(9),n=(r(0),r(233),r(153)),i=r(167),o=r(277),c=r(271),s=r.n(c);e.default=function(t){var e=t.data,r=t.classes,c=t.pageContext,l=t.location,u=e.allMarkdownRemark.edges;return Object(a.b)(i.a,null,u.map(function(t){var e=t.node;return Object(a.b)(o.a,{key:e.fields.slug,title:e.frontmatter.title||e.fields.slug,url:e.fields.slug,summary:e.frontmatter.description||e.excerpt,category:e.frontmatter.category,date:e.frontmatter.date,cover:e.frontmatter.cover})}),Object(a.b)(n.Link,{className:r.link,to:"/blog"+(c.current<=1?"":"/"+c.current)},Object(a.b)(s.a,{className:r.button,disabled:0===c.current},"이전 페이지")),Object(a.b)(n.Link,{className:r.link,to:c.current+1===c.numPages?""+l.pathname:"/blog/"+(c.current+2)},Object(a.b)(s.a,{className:r.button,disabled:c.current+1===c.numPages},"다음 페이지")))};var l="3147262854"},233:function(t,e,r){"use strict";var a=r(156).a.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(t){a[t]=a(t)})},277:function(t,e,r){"use strict";var a=r(52),n=r.n(a),i=r(25),o=r(184),c=r.n(o),s=r(156),l=r(9),u=(r(0),r(4)),b=r.n(u),d=r(153),g=(r(166),Object(s.a)("article",{target:"e18xvwak0"})({name:"k008qs",styles:"display:flex;"})),p=Object(s.a)("div",{target:"e18xvwak1"})({name:"1rr4qq7",styles:"flex:1;"}),m=Object(s.a)("h3",{target:"e18xvwak2"})("font-size:14px;font-weight:400;letter-spacing:1.375px;text-transform:uppercase;color:","#7e7e7e",";margin-bottom:8px;"),f=Object(s.a)("h1",{target:"e18xvwak3"})("font-size:24px;font-weight:bold;color:","#535353",";letter-spacing:-0.72px;line-height:32px;margin-bottom:8px;a{color:inherit;text-decoration:none;}"),v=Object(s.a)("summary",{target:"e18xvwak4"})("font-size:16px;color:","#707070",";margin-bottom:8px;"),h=Object(s.a)("time",{target:"e18xvwak5"})("font-size:14px;color:","#a2a2a2",";letter-spacing:-0.2px;"),k=function(t){var e=t.image,r=c()(t,["image"]);return Object(l.b)(d.Link,n()({css:Object(i.a)({width:"160px",marginLeft:"24px",backgroundImage:"url("+e+")",backgroundPosition:"center",backgroundSize:"cover"},"")},r))},x=function(t){var e=t.url,r=t.title,a=t.date,n=t.summary,i=t.category,o=t.cover,s=c()(t,["url","title","date","summary","category","cover"]);return Object(l.b)(g,s,Object(l.b)(p,null,Object(l.b)(m,null,i),Object(l.b)(f,null,Object(l.b)(d.Link,{to:e},r)),Object(l.b)(v,{dangerouslySetInnerHTML:{__html:n}}),Object(l.b)(h,null,a)),o&&Object(l.b)(k,{to:e,image:o.childImageSharp.resolutions.src}))};x.propTypes={url:b.a.string.isRequired,title:b.a.string.isRequired,date:b.a.string.isRequired,summary:b.a.string.isRequired,category:b.a.string.isRequired,cover:b.a.object},x.defaultProps={cover:null};var j=x;r.d(e,"a",function(){return j})},428:function(t,e,r){"use strict";r(429)("link",function(t){return function(e){return t(this,"a","href",e)}})},429:function(t,e,r){var a=r(12),n=r(27),i=r(18),o=/"/g,c=function(t,e,r,a){var n=String(i(t)),c="<"+e;return""!==r&&(c+=" "+r+'="'+String(a).replace(o,"&quot;")+'"'),c+">"+n+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(c),a(a.P+a.F*n(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",r)}}}]);
//# sourceMappingURL=component---src-templates-blog-list-jsx-a0b635e9872cf9c06d07.js.map