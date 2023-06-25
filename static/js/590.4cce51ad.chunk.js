"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[590],{3974:function(n,r,t){t.d(r,{Z:function(){return u}});var e,a=t(168),i=t(1109).Z.p(e||(e=(0,a.Z)(["\n  margin-top: 20px;\n  color: black;\n  font-size: 18px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),o=t(184),u=function(n){var r=n.children;return(0,o.jsx)(i,{children:r})}},8411:function(n,r){r.Z={emptyLine:"Sorry, you didn't enter your search term, please try again",errorFetch:"Oops! Something went wrong! Try reloading this page",errorCast:"Sorry but there is no information about the cast of the movie",errorRewievs:"Sorry, but there are no reviews yet"}},3969:function(n,r,t){t.d(r,{JS:function(){return u},W7:function(){return f},kR:function(){return s},v9:function(){return h}});var e=t(5861),a=t(4687),i=t.n(a),o=t(1243);function u(n){return c.apply(this,arguments)}function c(){return(c=(0,e.Z)(i().mark((function n(r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day",{signal:r.signal});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(n,r){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(i().mark((function n(r,t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(r),{signal:t.signal});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n,r,t){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(i().mark((function n(r,t,e){var a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/").concat(t),{signal:e.signal});case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,r){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(i().mark((function n(r,t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(r),{signal:t.signal});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}o.Z.defaults.params={api_key:"ce1c433bf23cc41cab87899af39da180"}},4590:function(n,r,t){t.r(r),t.d(r,{default:function(){return _}});var e,a,i,o=t(3433),u=t(5861),c=t(9439),s=t(4687),p=t.n(s),f=t(2791),l=t(7689),h=t(3969),d=t(3974),g=t(8411),v=t(1749),x=t(168),m=t(1109),b=m.Z.li(e||(e=(0,x.Z)(["\n  padding: 8px;\n  background: rgba(255, 255, 255, 0.7);\n  border-radius: 8px;\n"]))),Z=m.Z.p(a||(a=(0,x.Z)(["\n  margin-bottom: 10px;\n  display: inline-flex;\n  padding: 8px;\n\n  font-size: 16px;\n  background-color: black;\n  color: white;\n  border-radius: 8px;\n"]))),y=t(184),w=function(n){var r=n.author,t=n.content;return(0,y.jsxs)(b,{children:[(0,y.jsxs)(Z,{children:["Author: ",r]}),(0,y.jsx)("p",{children:t})]})},k=m.Z.ul(i||(i=(0,x.Z)(["\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),_=function(){var n=(0,f.useState)([]),r=(0,c.Z)(n,2),t=r[0],e=r[1],a=(0,f.useState)(!1),i=(0,c.Z)(a,2),s=i[0],x=i[1],m=(0,f.useState)(null),b=(0,c.Z)(m,2),Z=b[0],_=b[1],j=(0,l.UO)().movieId;return(0,f.useEffect)((function(){var n=new AbortController;function r(){return(r=(0,u.Z)(p().mark((function r(){var t,a;return p().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return x(!0),r.prev=1,r.next=4,(0,h.W7)(j,"reviews",n);case 4:if(t=r.sent,(a=t.results).length){r.next=9;break}return _(g.Z.errorRewievs),r.abrupt("return");case 9:e((0,o.Z)(a)),_(null),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(1),"ERR_CANCELED"!==r.t0.code&&_(g.Z.errorFetch);case 16:return r.prev=16,x(!1),r.finish(16);case 19:case"end":return r.stop()}}),r,null,[[1,13,16,19]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){n.abort()}}),[j]),(0,y.jsxs)(y.Fragment,{children:[null!==Z&&(0,y.jsx)(d.Z,{children:Z}),s&&(0,y.jsx)(v.Z,{}),t&&(0,y.jsx)(k,{children:t.map((function(n){var r=n.id,t=n.author,e=n.content;return(0,y.jsx)(w,{author:t,content:e},r)}))})]})}}}]);
//# sourceMappingURL=590.4cce51ad.chunk.js.map