"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[23],{969:function(t,n,e){e.d(n,{JS:function(){return i},W7:function(){return f},kR:function(){return o},v9:function(){return v}});var r=e(861),a=e(757),u=e.n(a),c=e(243);function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day");case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t,n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(n,e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/").concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.Z.defaults.params={api_key:"ce1c433bf23cc41cab87899af39da180"}},23:function(t,n,e){e.r(n);var r=e(433),a=e(861),u=e(439),c=e(757),i=e.n(c),s=e(791),o=e(689),p=e(969),f=e(184);n.default=function(){var t=(0,s.useState)([]),n=(0,u.Z)(t,2),e=n[0],c=n[1],h=(0,o.UO)().movieId;return(0,s.useEffect)((function(){function t(){return(t=(0,a.Z)(i().mark((function t(){var n,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.W7)(h,"reviews");case 2:n=t.sent,e=n.results,c((0,r.Z)(e));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[h]),console.log(e),(0,f.jsx)("ul",{children:e.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("p",{children:["Author: ",e]}),(0,f.jsx)("p",{children:r})]},n)}))})}}}]);
//# sourceMappingURL=23.7002544a.chunk.js.map