"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{713:function(t,n,e){e.d(n,{Hg:function(){return f},Ku:function(){return m},Pg:function(){return h},W_:function(){return y},z1:function(){return s}});var r=e(861),c=e(757),a=e.n(c),u=e(912),i="bc23d88e8c379b88dcc9e69c75bc8f78",o="https://api.themoviedb.org/3";function s(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function t(n){var e,r,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=encodeURIComponent(n),r="".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(e,"&language=en-US"),t.next=4,u.Z.get(r);case 4:return c=t.sent,t.abrupt("return",c.data.results);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function t(){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(o,"/trending/movie/day?api_key=").concat(i),t.next=3,u.Z.get(n);case 3:return e=t.sent,t.abrupt("return",e.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(o,"/movie/").concat(n,"?api_key=").concat(i),t.next=3,u.Z.get(e);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(i),t.next=3,u.Z.get(e);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(i),t.next=3,u.Z.get(e);case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},444:function(t,n,e){e.d(n,{d:function(){return i}});var r=e(184),c=function(t){var n=t.film,e=null;try{void 0===(e=n.original_title)&&(e=n.name)}catch(c){console.log(c)}return(0,r.jsx)("li",{id:n.id,children:e})},a=e(87),u=e(689),i=function(t){var n=t.path,e=t.title,i=t.listFilms,o=(0,u.TH)();return(0,r.jsxs)("ul",{className:"listFilms",children:[(0,r.jsx)("h1",{children:e}),i.map((function(t){return(0,r.jsx)(a.rU,{to:"".concat(n).concat(t.id),state:{from:o},children:(0,r.jsx)(c,{film:t},t.id)},t.id)}))]})}},415:function(t,n,e){e.r(n),e.d(n,{Home:function(){return h}});var r=e(861),c=e(439),a=e(757),u=e.n(a),i=e(444),o=e(713),s=e(686),p=e.n(s),f=e(791),l=e(184),h=function(){var t=(0,f.useState)([]),n=(0,c.Z)(t,2),e=n[0],a=n[1],s=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.Hg)();case 3:n=t.sent,a(n),0===n.length&&p().Notify.failure("Oops, there is no trending films now"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),p().Notify.failure("Sorry, there are no films now. Please try later.");case 11:case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return(0,f.useEffect)((function(){s()}),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i.d,{title:"Trending list",path:"movies/",listFilms:e})})};n.default=h}}]);
//# sourceMappingURL=415.8064c3ac.chunk.js.map