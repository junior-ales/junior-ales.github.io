!function(){"use strict";var t="undefined"==typeof window?global:window;if("function"!=typeof t.require){var e={},n={},s={}.hasOwnProperty,a={},r=function(t,e){var n=0;e&&(e.indexOf(!1)&&(n="components/".length),e.indexOf("/",n)>0&&(e=e.substring(n,e.indexOf("/",n))));var s=a[t+"/index.js"]||a[e+"/deps/"+t+"/index.js"];return s?"components/"+s.substring(0,s.length-".js".length):t},o=function(){var t=/^\.\.?(\/|$)/;return function(e,n){var s,a,r=[];s=(t.test(n)?e+"/"+n:n).split("/");for(var o=0,i=s.length;i>o;o++)a=s[o],".."===a?r.pop():"."!==a&&""!==a&&r.push(a);return r.join("/")}}(),i=function(t){return t.split("/").slice(0,-1).join("/")},c=function(e){return function(n){var s=o(i(e),n);return t.require(s,e)}},l=function(t,e){var s={id:t,exports:{}};return n[t]=s,e(s.exports,c(t),s),s.exports},p=function(t,a){var i=o(t,".");if(null==a&&(a="/"),i=r(t,a),s.call(n,i))return n[i].exports;if(s.call(e,i))return l(i,e[i]);var c=o(i,"./index");if(s.call(n,c))return n[c].exports;if(s.call(e,c))return l(c,e[c]);throw new Error('Cannot find module "'+t+'" from "'+a+'"')};p.alias=function(t,e){a[e]=t},p.register=p.define=function(t,n){if("object"==typeof t)for(var a in t)s.call(t,a)&&(e[a]=t[a]);else e[t]=n},p.list=function(){var t=[];for(var n in e)s.call(e,n)&&t.push(n);return t},p.brunch=!0,t.require=p}}(),require.register("model/posts",function(t,e,n){n.exports=function(){var t={id:0,title:"Lunch by the Bay",href:"posts/2015/05/22/lunch-by-the-bay.html",cover:"posts/2015/05/22/lunch-by-the-bay__cover.jpg",location:"San Francisco, USA",pubdate:new Date("2015-05-23"),viewsRanking:1},e={id:1,title:"Origami Party",href:"posts/2015/04/13/origami-party.html",cover:"posts/2015/04/13/origami-party__cover.jpg",location:"Pune, India",pubdate:new Date("2015-04-14"),viewsRanking:3},n={id:2,title:"Floating Flowers",href:"posts/2015/07/17/floating-flowers.html",cover:"posts/2015/07/17/floating-flowers__cover.jpg",location:"Amsterdam, Netherlands",pubdate:new Date("2015-07-18"),viewsRanking:2},s=function(t,e){return e.slice().sort(function(e,n){return e[t]>n[t]?1:e[t]<n[t]?-1:0})},a=[t,e,n],r={"most-viewed":s("viewsRanking",a),latest:s("pubdate",a).reverse()};return{getSortedBy:function(t){return r[t]}}}()}),require.register("views/index",function(t,e,n){"use strict";var s=e("views/postsContainer"),a={init:function(){React.render(React.createElement(s,null),document.getElementById("home-page-posts"))}};n.exports=a}),require.register("views/post",function(t,e,n){"use strict";n.exports={init:function(){console.log("post")}}}),require.register("views/postsContainer",function(t,e,n){"use strict";var s=React.createClass({displayName:"Post",render:function(){var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],e=this.props.post;return React.createElement("a",{className:"post-wrapper",href:e.href},React.createElement("article",{className:"post"},React.createElement("img",{className:"post__cover",src:e.cover,alt:e.title+" photo"}),React.createElement("p",{className:"post__location"},e.location),React.createElement("p",{className:"post__pubdate"},React.createElement("time",{className:"post_pubdate__time",dateTime:e.pubdate},React.createElement("span",{className:"post__pubdate__month"},t[e.pubdate.getMonth()]),React.createElement("br",null),React.createElement("span",{className:"post__pubdate__day"},e.pubdate.getDate()))),React.createElement("h1",{className:"post__title"},e.title)))}}),a=React.createClass({displayName:"PostList",render:function(){return React.createElement("section",{className:"post-list-wrapper"},this.props.posts.map(function(t){return React.createElement(s,{key:t.title+"-"+t.id,post:t})}))}}),r=React.createClass({displayName:"SortingOptions",handleClick:function(t){this.props.onSortingChange(t.target.dataset.sortingOption)},render:function(){var t="post-list__sorting",e="post-list__sorting";return"latest"===this.props.sortBy?t="post-list__sorting--active":e="post-list__sorting--active",React.createElement("ul",{className:"post-list"},React.createElement("li",{className:e},React.createElement("button",{onClick:this.handleClick,className:"post-list__button","data-sorting-option":"most-viewed"},"most viewed")),React.createElement("li",{className:"post-list__sorting--separator"},"|"),React.createElement("li",{className:t},React.createElement("button",{"data-sorting-option":"latest",onClick:this.handleClick,className:"post-list__button"},"latest")))}}),o=e("model/posts"),i=React.createClass({displayName:"PostsContainer",getInitialState:function(){return{sortBy:"latest",posts:o.getSortedBy("latest")}},handleSortingChange:function(t){this.setState({sortBy:t,posts:o.getSortedBy(t)})},render:function(){return React.createElement("section",{className:"posts-container"},React.createElement(r,{sortBy:this.state.sortBy,onSortingChange:this.handleSortingChange}),React.createElement(a,{posts:this.state.posts}))}});n.exports=i});