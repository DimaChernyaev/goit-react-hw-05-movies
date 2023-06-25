"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[331],{1331:function(t,n,r){r.r(n),r.d(n,{default:function(){return _}});var e,a,i,o=r(3433),c=r(5861),u=r(9439),s=r(4687),p=r.n(s),h=r(2791),f=r(7689),l=r(3969),d=r(6113),g=r(168),m=r(1109),x=m.Z.li(e||(e=(0,g.Z)(["\n  padding: 5px;\n  background: rgba(255, 255, 255, 0.7);\n  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.7);\n  border-radius: 8px;\n"]))),v=m.Z.p(a||(a=(0,g.Z)(["\n  font-size: 12px;\n  width: 100px;\n\n  &:first-of-type {\n    margin-bottom: 5px;\n  }\n"]))),Z=r(184),w=function(t){var n=t.character,r=t.name,e=t.profile_path;return(0,Z.jsxs)(x,{children:[null!==e?(0,Z.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e),alt:r,width:120}):(0,Z.jsx)(d.Z,{width:120,height:180}),(0,Z.jsxs)(v,{children:["Name: ",r]}),(0,Z.jsxs)(v,{children:["Character: ",n]})]})},b=r(1749),y=r(3974),k=r(8411),j=m.Z.ul(i||(i=(0,g.Z)(["\n  margin-top: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n"]))),_=function(){var t=(0,h.useState)([]),n=(0,u.Z)(t,2),r=n[0],e=n[1],a=(0,h.useState)(!1),i=(0,u.Z)(a,2),s=i[0],d=i[1],g=(0,h.useState)(null),m=(0,u.Z)(g,2),x=m[0],v=m[1],_=(0,f.UO)().movieId;return(0,h.useEffect)((function(){var t=new AbortController;function n(){return(n=(0,c.Z)(p().mark((function n(){var r,a;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(!0),n.next=4,(0,l.W7)(_,"credits",t);case 4:if(r=n.sent,(a=r.cast).length){n.next=9;break}return v(k.Z.errorCast),n.abrupt("return");case 9:e((0,o.Z)(a)),v(null),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),"ERR_CANCELED"!==n.t0.code&&v(k.Z.errorFetch);case 16:return n.prev=16,d(!1),n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[0,13,16,19]])})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){t.abort()}}),[_]),(0,Z.jsxs)(Z.Fragment,{children:[null!==x&&(0,Z.jsx)(y.Z,{children:x}),s&&(0,Z.jsx)(b.Z,{}),r&&(0,Z.jsx)(j,{children:r.map((function(t){var n=t.id,r=t.name,e=t.character,a=t.profile_path;return(0,Z.jsx)(w,{profile_path:a,name:r,character:e},n)}))})]})}},3974:function(t,n,r){r.d(n,{Z:function(){return c}});var e,a=r(168),i=r(1109).Z.p(e||(e=(0,a.Z)(["\n  margin-top: 20px;\n  color: black;\n  font-size: 18px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),o=r(184),c=function(t){var n=t.children;return(0,o.jsx)(i,{children:n})}},8411:function(t,n){n.Z={emptyLine:"Sorry, you didn't enter your search term, please try again",errorFetch:"Oops! Something went wrong! Try reloading this page",errorCast:"Sorry but there is no information about the cast of the movie",errorRewievs:"Sorry, but there are no reviews yet"}},3969:function(t,n,r){r.d(n,{JS:function(){return c},W7:function(){return h},kR:function(){return s},v9:function(){return l}});var e=r(5861),a=r(4687),i=r.n(a),o=r(1243);function c(t){return u.apply(this,arguments)}function u(){return(u=(0,e.Z)(i().mark((function t(n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day",{signal:n.signal});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t,n){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(i().mark((function t(n,r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(n),{signal:r.signal});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,n,r){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(i().mark((function t(n,r,e){var a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/").concat(r),{signal:e.signal});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t,n){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(i().mark((function t(n,r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(n),{signal:r.signal});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.Z.defaults.params={api_key:"ce1c433bf23cc41cab87899af39da180"}},6113:function(t,n,r){var e=r(184);n.Z=function(t){var n=t.width,r=t.height;return(0,e.jsx)("img",{src:"https://media.istockphoto.com/id/1075374570/vector/coming-soon.jpg?s=612x612&w=0&k=20&c=6W1rSRAoJnxtMSi98mGD7LjiXA3xQMotLn8hJnmXjzI=",alt:"not found",width:n,height:r})}}}]);
//# sourceMappingURL=331.ccf4b697.chunk.js.map