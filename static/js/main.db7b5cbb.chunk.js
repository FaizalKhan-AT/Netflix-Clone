(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{120:function(e,t,c){},121:function(e,t,c){},122:function(e,t,c){},123:function(e,t,c){},135:function(e,t,c){},136:function(e,t,c){},138:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),i=c(71),n=c.n(i),l=(c(91),c(31)),r=c(11),o=c(6),j=(c(92),c(32)),d=c.n(j),b="https://api.themoviedb.org/3",h="92e259cfd9721cc76a352054566afeb4",O="https://image.tmdb.org/t/p/original",m=d.a.create({baseURL:b}),x=c(162),u=c(159),v=c(160),g=c(158),p=c(44),f=c.n(p),N=c(1),w=Object(s.createContext)(null);var S=function(e){var t=e.children,c=Object(s.useState)(null),a=Object(o.a)(c,2),i=a[0],n=a[1],l=Object(s.useState)(),r=Object(o.a)(l,2),j=r[0],d=r[1];return Object(N.jsx)(w.Provider,{value:{movieData:i,setMovieData:n,genre:j,setGenre:d},children:t})};var y=function(){var e=Object(s.useState)(),t=Object(o.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(!1),n=Object(o.a)(i,2),l=n[0],j=n[1],d=Object(r.e)(),b=Object(s.useContext)(w).setMovieData;return Object(s.useEffect)((function(){m.get("trending/all/week?api_key=".concat(h,"&language=en-US")).then((function(e){var t=e.data.results,c=Math.floor(Math.random()*e.data.results.length);a(t[c])})).catch((function(e){j(!0)}))}),[]),Object(N.jsxs)(N.Fragment,{children:[l&&Object(N.jsxs)(u.a,{action:Object(N.jsx)(g.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){j(!1)},children:Object(N.jsx)(f.a,{})}),variant:"filled",className:"alert-internet",color:"error",severity:"error",children:[Object(N.jsx)(v.a,{children:"Network Error"}),"Check your Internet Connection (Slow or not connected)."]}),c?Object(N.jsx)("div",{style:{backgroundImage:"url(".concat(c?O+c.backdrop_path:"Loading",")")},className:"banner",children:Object(N.jsxs)("div",{className:"content",children:[Object(N.jsx)("h2",{className:"movie-title",children:c?"".concat(c.title?c.title:c.name):"Loading..."}),Object(N.jsx)("p",{className:"description",children:c?c.overview:"Loading..."}),Object(N.jsxs)("div",{className:"button-group",children:[Object(N.jsx)("button",{onClick:function(){b(c&&c),d.push("/watch")},className:"play",children:"Play"}),Object(N.jsx)("button",{className:"watch",children:"+ Watch List"})]})]})}):Object(N.jsx)(x.a,{sx:{height:500,bgcolor:"grey.900"},animation:"wave",variant:"rectangular"})]})},k=c(82);c(120);var _=function(e){var t=e.post,c=e.genre,a=Object(r.e)(),i=Object(s.useContext)(w),n=i.setMovieData,l=i.setGenre;return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:"details-banner",children:Object(N.jsxs)("div",{className:"details-container",style:{backgroundImage:"url(".concat(t?O+t.backdrop_path:"",")")},children:[Object(N.jsxs)("div",{className:"addition-details",children:[Object(N.jsx)("h2",{className:"movie-title movie-title-size",children:t&&"".concat(t.title?t.title:t.name)}),Object(N.jsxs)("div",{className:"rating-bar",children:[Object(N.jsx)("span",{style:{color:"gold",fontSize:"18px"},children:"\u2605"})," ",t?t.vote_average:"0"]}),Object(N.jsx)("div",{className:"desc-container",children:Object(N.jsx)("p",{className:"description",children:t?t.overview:"Loading..."})}),Object(N.jsx)("button",{className:"play-btn",onClick:function(){n(t),l(c),a.push("/watch")},children:"Play"})]}),Object(N.jsx)("div",{className:"details-image",children:Object(N.jsx)("img",{className:"post-image",src:t?O+t.poster_path:"",alt:"unable to load poster"})})]})})})};c(121);var C=function(e){var t=e.url,c=e.title,a=e.isSmall,i=[{width:1,itemsToShow:1},{width:300,itemsToShow:2,itemsToScroll:2},{width:550,itemsToShow:2,itemsToScroll:2},{width:768,itemsToShow:3},{width:1200,itemsToShow:a?6:5},{width:2560,itemsToShow:a?8:7}],n=Object(s.useState)(!1),l=Object(o.a)(n,2),r=l[0],j=l[1],d=Object(s.useState)([]),b=Object(o.a)(d,2),h=b[0],u=b[1],v=Object(s.useState)(),g=Object(o.a)(v,2),p=g[0],f=g[1];return Object(s.useEffect)((function(){try{j(!0),m.get("".concat(t)).then((function(e){u(e.data.results),j(!1)}))}catch(e){j(!0)}}),[t]),Object(N.jsxs)("div",{className:"Cards",children:[Object(N.jsx)("div",{className:"title",children:c}),Object(N.jsx)("div",{className:"card-container",children:Object(N.jsxs)(k.a,{breakPoints:i,renderPagination:function(e){var t=e.pages;return Object(N.jsx)("div",{children:t.map((function(e){return null}))})},children:[h&&h.map((function(e,t){return Object(N.jsx)("img",{onClick:function(){!function(e){f(e)}(e)},className:a?"small-card":"card",src:O+e.poster_path,alt:"Posters"},t)})),r&&[1,2,3,4,5,6].map((function(e){return Object(N.jsx)(x.a,{style:{marginLeft:"20px"},sx:{height:300,width:a?250:290,bgcolor:"grey.900"},animation:"wave",variant:"rectangular"},e)}))]})}),p&&Object(N.jsx)(_,{genre:t,post:p})]})},M=(c(122),c(78)),L=c.n(M);var z=function(){var e=Object(r.e)(),t=Object(s.useRef)(),c=Object(s.useState)(!0),a=Object(o.a)(c,2),i=a[0],n=a[1],l=Object(s.useState)(!1),j=Object(o.a)(l,2),d=j[0],b=j[1],h=function(){window.scrollY>50&&b(!0),0===window.scrollY&&b(!1)};return Object(s.useEffect)((function(){return window.addEventListener("scroll",h),function(){window.removeEventListener("scroll",h)}}),[d]),Object(N.jsxs)("div",{className:d?"Navbar scrolled":"Navbar",children:[Object(N.jsx)("div",{className:"logo",onClick:function(){return e.push("/")},children:Object(N.jsx)("img",{src:"./assets/images/netflix logo.png",alt:"Logo"})}),Object(N.jsxs)("div",{className:"nav-slider",children:[Object(N.jsxs)("ul",{ref:t,className:"nav-links",children:[Object(N.jsx)("div",{className:"mobile-list",children:Object(N.jsxs)("li",{className:"search-cont",children:[Object(N.jsx)("input",{type:"search",className:"search-input",placeholder:"Search"}),Object(N.jsx)("button",{className:"search-btn",children:Object(N.jsx)("img",{className:"search-icon",src:"./assets/images/search_white_24dp.svg",alt:"search-btn"})})]})}),Object(N.jsx)("li",{children:"Home"}),Object(N.jsx)("li",{children:"TV Shows"}),Object(N.jsx)("li",{children:"Movies"}),Object(N.jsx)("li",{children:"Latest"}),Object(N.jsx)("li",{children:"My List"}),Object(N.jsxs)("div",{className:"mobile-list",children:[Object(N.jsxs)("li",{children:["Notifications",Object(N.jsxs)("label",{className:"cont-tool",children:[Object(N.jsx)("div",{className:"tool-tip",children:"9"}),Object(N.jsx)("img",{className:"notification",src:"./assets/images/notifications_white_24dp.svg",alt:"notifications"})]})]}),Object(N.jsx)("li",{children:"KIDS"}),Object(N.jsx)("li",{children:"DVD"})]})]}),Object(N.jsxs)("div",{className:"icons",children:[Object(N.jsxs)("div",{className:"search-container",children:[Object(N.jsx)("input",{type:"search",className:"search-input",placeholder:"Search"}),Object(N.jsx)("button",{className:"search-btn",children:Object(N.jsx)("img",{className:"search-icon",src:"./assets/images/search_white_24dp.svg",alt:"search-btn"})})]}),Object(N.jsx)("p",{className:"links",children:"KIDS"}),Object(N.jsx)("p",{className:"links",children:"DVD"}),Object(N.jsxs)("label",{className:"cont",children:[Object(N.jsx)("div",{className:"tool-tip",children:"9"}),Object(N.jsx)("img",{className:"notification",src:"./assets/images/notifications_white_24dp.svg",alt:"notifications"})]}),Object(N.jsx)("img",{className:"avatar",src:"./assets/images/Netflix-avatar.png",alt:"avatar"})]})]}),Object(N.jsx)("span",{className:"hamburger-btn",onClick:function(){t.current.classList.toggle("slide-active")},children:Object(N.jsx)(g.a,{color:"inherit",onClick:function(){return n(!i)},children:i?Object(N.jsx)(L.a,{sx:{fontSize:26}}):Object(N.jsx)(f.a,{sx:{fontSize:26}})})})]})};c(123);var D=function(){return Object(N.jsx)("div",{className:"footer",children:Object(N.jsxs)("h3",{children:["Netflix clone developed with ~ ",Object(N.jsx)("svg",{title:"react",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 32 32",children:Object(N.jsxs)("g",{transform:"matrix(.05696 0 0 .05696 .647744 2.43826)",fill:"none","fill-rule":"evenodd",children:[Object(N.jsx)("circle",{r:"50.167",cy:"237.628",cx:"269.529",fill:"#00d8ff"}),Object(N.jsxs)("g",{stroke:"#00d8ff","stroke-width":"24",children:[Object(N.jsx)("path",{d:"M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z"}),Object(N.jsx)("path",{d:"M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z"}),Object(N.jsx)("path",{d:"M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z"})]})]})}),", by ",Object(N.jsx)(l.b,{className:"footer-link",target:"_blank",to:{pathname:"https://github.com/FaizalKhan-AT"},children:" Faizal Khan"})]})})},T="discover/tv?api_key=".concat(h,"&with_networks=213"),E="trending/all/week?api_key=".concat(h,"&language=en-US"),F="discover/movie?api_key=".concat(h,"&with_genres=28"),I="discover/movie?api_key=".concat(h,"&with_genres=35"),P="discover/movie?api_key=".concat(h,"&with_genres=27"),A="discover/movie?api_key=".concat(h,"&with_genres=99"),K="discover/movie?api_key=".concat(h,"&with_genres=10749");function R(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(z,{}),Object(N.jsx)(y,{}),Object(N.jsx)(C,{url:T,title:"Netflix Orginals"}),Object(N.jsx)(C,{url:E,title:"Trending Now",isSmall:!0}),Object(N.jsx)(C,{url:F,title:"Action Movies",isSmall:!0}),Object(N.jsx)(C,{url:K,title:"Romance Movies",isSmall:!0}),Object(N.jsx)(C,{url:P,title:"Horror Movies",isSmall:!0}),Object(N.jsx)(C,{url:I,title:"Comedy Movies",isSmall:!0}),Object(N.jsx)(C,{url:A,title:"Documentaries",isSmall:!0}),Object(N.jsx)(D,{})]})}var U=c(79);c(135);var V=function(){var e=Object(s.useContext)(w).movieData,t=Object(s.useState)(),c=Object(o.a)(t,2),a=c[0],i=c[1],n=Object(s.useState)(""),l=Object(o.a)(n,2),r=l[0],j=l[1];return Object(s.useEffect)((function(){var t;i(e),console.log(e),t=e&&e.id,d.a.get("".concat(b,"/movie/").concat(t,"/videos?api_key=").concat(h,"&language=en-US")).then((function(e){try{if(null!==e.data.results){var t=e.data.results[0].key;j(t)}}catch(c){alert("No Trailer Available")}}))}),[]),Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"player",children:[Object(N.jsx)("div",{className:"top-bar"}),Object(N.jsx)(U.a,{opts:{height:"500",width:"100%",playerVars:{autoplay:1}},videoId:r&&r}),Object(N.jsxs)("div",{className:"player-movie-details-container",children:[Object(N.jsx)("h2",{children:a&&"".concat(a.title?a.title:a.name)}),Object(N.jsxs)("div",{className:"rating-bar",children:[Object(N.jsx)("span",{style:{color:"gold",fontSize:"18px"},children:"\u2605"})," ",a?a.vote_average:"0"]}),Object(N.jsx)("p",{className:"description-movie",children:a?a.overview:"no description"})]})]})})};c(136);var B=function(){var e=a.a.useContext(w).genre,t=Object(s.useState)([]),c=Object(o.a)(t,2),i=c[0],n=c[1];return a.a.useEffect((function(){if(e)try{d.a.get("".concat(b,"/").concat(e)).then((function(e){n(e.data.results),console.log(i)}))}catch(t){console.log(t)}else try{d.a.get("".concat(b,"/").concat(E)).then((function(e){n(e.data.results),console.log(i)}))}catch(t){console.log(t)}}),[]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h2",{className:"posts-title",children:"Related Movies"}),Object(N.jsx)("div",{className:"posts-container",children:i.map((function(e){return Object(N.jsxs)("div",{className:"post-card",children:[Object(N.jsx)("img",{className:"card-image",src:e&&O+e.poster_path,alt:e?e.title:e.name}),Object(N.jsxs)("div",{className:"post-card-details",children:[Object(N.jsx)("h4",{className:"post-title",children:e&&"".concat(e.title?e.title:e.name)}),Object(N.jsxs)("div",{className:"rating-bar-post",children:[Object(N.jsx)("span",{style:{color:"gold",fontSize:"18px"},children:"\u2605"})," ",e?e.vote_average:"0"]}),Object(N.jsx)("p",{className:"post-overview",children:e?e.overview:"description"})]})]},e.id)}))})]})};var G=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(z,{}),Object(N.jsx)(V,{}),Object(N.jsx)(B,{}),Object(N.jsx)(D,{})]})};var H=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(S,{children:Object(N.jsxs)(l.a,{children:[Object(N.jsx)(r.a,{path:"/",exact:!0,component:R}),Object(N.jsx)(r.a,{path:"/watch",component:G})]})})})};n.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(H,{})}),document.getElementById("root"))},91:function(e,t,c){},92:function(e,t,c){}},[[138,1,2]]]);
//# sourceMappingURL=main.db7b5cbb.chunk.js.map