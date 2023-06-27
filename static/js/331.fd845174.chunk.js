"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[331],{1331:function(n,t,r){r.r(t),r.d(t,{default:function(){return _}});var e,a,i,o=r(3433),c=r(5861),u=r(9439),s=r(4687),p=r.n(s),h=r(2791),f=r(7689),l=r(3969),d=r(6113),g=r(168),x=r(1109),m=x.Z.li(e||(e=(0,g.Z)(["\n  padding: 5px;\n  background: rgba(255, 255, 255, 0.7);\n  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.7);\n  border-radius: 8px;\n"]))),v=x.Z.p(a||(a=(0,g.Z)(["\n  font-size: 12px;\n  width: 100px;\n\n  &:first-of-type {\n    margin-bottom: 5px;\n  }\n"]))),b=r(184),Z=function(n){var t=n.character,r=n.name,e=n.profile_path;return(0,b.jsxs)(m,{children:[null!==e?(0,b.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e),alt:r,width:120}):(0,b.jsx)(d.Z,{width:120,height:180}),(0,b.jsxs)(v,{children:["Name: ",r]}),(0,b.jsxs)(v,{children:["Character: ",t]})]})},w=r(1749),y=r(3974),k=r(8411),j=x.Z.ul(i||(i=(0,g.Z)(["\n  margin-top: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n"]))),_=function(){var n=(0,h.useState)([]),t=(0,u.Z)(n,2),r=t[0],e=t[1],a=(0,h.useState)(!1),i=(0,u.Z)(a,2),s=i[0],d=i[1],g=(0,h.useState)(null),x=(0,u.Z)(g,2),m=x[0],v=x[1],_=(0,f.UO)().movieId;return(0,h.useEffect)((function(){var n=new AbortController;function t(){return(t=(0,c.Z)(p().mark((function t(){var r,a;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d(!0),t.next=4,(0,l.W7)(_,"credits",n);case 4:if(r=t.sent,(a=r.cast).length){t.next=9;break}return v(k.Z.errorCast),t.abrupt("return");case 9:e((0,o.Z)(a)),v(null),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),"ERR_CANCELED"!==t.t0.code&&v(k.Z.errorFetch);case 16:return t.prev=16,d(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,13,16,19]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){n.abort()}}),[_]),(0,b.jsxs)(b.Fragment,{children:[null!==m&&(0,b.jsx)(y.Z,{children:m}),s&&(0,b.jsx)(w.Z,{}),r&&(0,b.jsx)(j,{children:r.map((function(n){var t=n.id,r=n.name,e=n.character,a=n.profile_path;return(0,b.jsx)(Z,{profile_path:a,name:r,character:e},t)}))})]})}},3974:function(n,t,r){r.d(t,{Z:function(){return c}});var e,a=r(168),i=r(1109).Z.p(e||(e=(0,a.Z)(["\n  display: inline-flex;\n  padding: 8px;\n  background: rgba(255, 255, 255, 0.7);\n  border-radius: 8px;\n  margin-top: 20px;\n  color: black;\n  font-size: 18px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),o=r(184),c=function(n){var t=n.children;return(0,o.jsx)(i,{children:t})}},8411:function(n,t){t.Z={emptyLine:"Sorry, you didn't enter your search term, please try again!",errorFetch:"Oops! Something went wrong! Try reloading this page.",errorCast:"Sorry but there is no information about the cast of the movie.",errorRewievs:"Sorry, but there are no reviews yet."}},3969:function(n,t,r){r.d(t,{JS:function(){return c},W7:function(){return h},kR:function(){return s},v9:function(){return l}});var e=r(5861),a=r(4687),i=r.n(a),o=r(1243);function c(n){return u.apply(this,arguments)}function u(){return(u=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day",{signal:t.signal});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(n,t){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(i().mark((function n(t,r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t),{signal:r.signal});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,t,r){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(i().mark((function n(t,r,e){var a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/").concat(r),{signal:e.signal});case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(i().mark((function n(t,r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t),{signal:r.signal});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}o.Z.defaults.params={api_key:"ce1c433bf23cc41cab87899af39da180"}},6113:function(n,t,r){var e=r(184);t.Z=function(n){var t=n.width,r=n.height;return(0,e.jsx)("img",{src:"https://media.istockphoto.com/id/1075374570/vector/coming-soon.jpg?s=612x612&w=0&k=20&c=6W1rSRAoJnxtMSi98mGD7LjiXA3xQMotLn8hJnmXjzI=",alt:"not found",width:t,height:r})}}}]);
//# sourceMappingURL=331.fd845174.chunk.js.map