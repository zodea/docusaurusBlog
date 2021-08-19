"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[483],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return v}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=o(n),v=r,d=s["".concat(u,".").concat(v)]||s[v]||c[v]||l;return n?a.createElement(d,p(p({ref:t},m),{},{components:n})):a.createElement(d,p({ref:t},m))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(9443);var l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=n(6010),i="tabItem_1uMI",u="tabItemActive_2DSg";var o=37,m=39;var c=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,c=e.values,s=e.groupId,v=e.className,d=l(),f=d.tabGroupChoices,y=d.setTabGroupChoices,b=(0,a.useState)(r),k=b[0],g=b[1],h=a.Children.toArray(e.children),T=[];if(null!=s){var x=f[s];null!=x&&x!==k&&c.some((function(e){return e.value===x}))&&g(x)}var N=function(e){var t=e.currentTarget,n=T.indexOf(t),a=c[n].value;g(a),null!=s&&(y(s,a),setTimeout((function(){var e,n,a,r,l,p,i,o;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,p=window,i=p.innerHeight,o=p.innerWidth,n>=0&&l<=o&&r<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case m:var a=T.indexOf(e.target)+1;n=T[a]||T[0];break;case o:var r=T.indexOf(e.target)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":n},v)},c.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,p.Z)("tabs__item",i,{"tabs__item--active":k===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:w,onFocus:N,onClick:N},n)}))),t?(0,a.cloneElement)(h.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},1766:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),p=n(5064),i=n(8215),u=["components"],o={title:"vite\u642d\u5efa",author:"Zodea",author_url:"https://github.com/zodea",tags:["vite","vue3","pinia","ESLint","TypeScript"]},m=void 0,c={permalink:"/2021/08/19/vite\u642d\u5efa",source:"@site/blog/2021-08-19-vite\u642d\u5efa.md",title:"vite\u642d\u5efa",description:"pnpm",date:"2021-08-19T00:00:00.000Z",formattedDate:"August 19, 2021",tags:[{label:"vite",permalink:"/tags/vite"},{label:"vue3",permalink:"/tags/vue-3"},{label:"pinia",permalink:"/tags/pinia"},{label:"ESLint",permalink:"/tags/es-lint"},{label:"TypeScript",permalink:"/tags/type-script"}],readingTime:1.195,truncated:!1,nextItem:{title:"homebrew",permalink:"/2021/08/15/homebrew\u547d\u4ee4"}},s=[{value:"pnpm",id:"pnpm",children:[]},{value:"vite",id:"vite",children:[]},{value:"ESLint",id:"eslint",children:[]}],v={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"pnpm"},"pnpm"),(0,l.kt)("p",null,"\u76f8\u8f83 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," \u3001 ",(0,l.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"yarn")," \u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://www.pnpm.cn/"},"pnpm")," \u7684\u4e00\u4e2a\u4f18\u52bf\u662f\uff0c\u8282\u7701\u78c1\u76d8\u7a7a\u95f4\u5e76\u63d0\u5347\u5b89\u88c5\u901f\u5ea6\uff0c\u8be6\u60c5\u53ef\u70b9\u51fb\u5b98\u7f51\u67e5\u770b\u3002\u76f8\u5bf9\u90e8\u5206\u65e7\u9879\u76ee\uff0cpnpm\u53ef\u80fd\u5728\u4f9d\u8d56\u7ed3\u6784\u4e0a\u6709\u6240\u95ee\u9898\uff0c\u6240\u4ee5\u5c3d\u53ef\u80fd\u5728\u65b0\u9879\u76ee\u4e2d\u4f7f\u7528\u3002"),(0,l.kt)(p.Z,{groupId:"pnpm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"npx",value:"npx"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g pnpm\n"))),(0,l.kt)(i.Z,{value:"npx",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx pnpm add -g pnpm\n")))),(0,l.kt)("p",null,"\u4e3a\u4e86\u51cf\u5c11\u5185\u5b58\u7684\u4f7f\u7528\uff0cpnpm\u5728\u66f4\u65b0\u63d2\u4ef6\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u6e05\u7406\u6389\u4f4e\u7248\u672c\u7684\u4f9d\u8d56\uff0c\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," \u5bf9\u672a\u5f15\u7528\u7684\u4f9d\u8d56\u8fdb\u884c\u5220\u9664\u3002\u5f53\u4f60\u5728\u5207\u6362\u5206\u652f\u65f6\uff0c\u5982\u679c\u4f9d\u8d56\u6709\u4e0d\u540c\uff0c\u4e14\u88ab\u6e05\u7406\u6389\u4e86\uff0c\u5219\u9700\u8981\u5b89\u88c5\u7f3a\u5c11\u7684\u4f9d\u8d56\u624d\u53ef\u7ee7\u7eed\u8fd0\u884c\u3002"),(0,l.kt)("h2",{id:"vite"},"vite"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://cn.vitejs.dev/"},"Vite")," \u76f8\u8f83 ",(0,l.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/"},"webpack")," \u4f9d\u65e7\u662f\u5feb\uff0c\u800c\u4e14\u8fd9\u4e2a\u4e5f\u662f\u57fa\u4e8eVite2\u642d\u5efa\uff0c\u6240\u4ee5\u5982\u679c\u60f3\u4f7f\u7528webpack\u7cfb\u5217\u7684\uff0c\u53ef\u4ee5\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"https://cli.vuejs.org/zh/"},"Vue CLI")," \u7684\u6559\u7a0b\u8fdb\u884c\u5b89\u88c5\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u642d\u5efa\u65b9\u6cd5"),(0,l.kt)(p.Z,{groupId:"vite_boilerplate",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"},{label:"pnpm",value:"pnpm"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm init vite@latest\n"))),(0,l.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn create vite\n"))),(0,l.kt)(i.Z,{value:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pnpx create-vite\n")))),(0,l.kt)("p",null,"\u7136\u540e\u6309\u7167\u63d0\u793a\u64cd\u4f5c\u5373\u53ef\uff01"),(0,l.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u9644\u52a0\u7684\u547d\u4ee4\u884c\u9009\u9879\u76f4\u63a5\u6307\u5b9a\u9879\u76ee\u540d\u79f0\u548c\u4f60\u60f3\u8981\u4f7f\u7528\u7684\u6a21\u677f\u3002\u4f8b\u5982\uff0c\u8981\u6784\u5efa\u4e00\u4e2a Vite + Vue \u9879\u76ee\uff0c\u8fd0\u884c:"),(0,l.kt)(p.Z,{groupId:"vite_boilerplate",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"},{label:"pnpm",value:"pnpm"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# npm 6.x\nnpm init vite@latest my-vue-app --template vue\n\n# npm 7+, \u9700\u8981\u989d\u5916\u7684\u53cc\u6a2a\u7ebf\uff1a\nnpm init vite@latest my-vue-app -- --template vue\n"))),(0,l.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn create vite my-vue-app --template vue\n"))),(0,l.kt)(i.Z,{value:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pnpx create-vite my-vue-app --template vue-ts\n")))),(0,l.kt)("h2",{id:"eslint"},"ESLint"),(0,l.kt)("p",null,"\u5b89\u88c5\u4ee3\u7801\u68c0\u6d4b\u5de5\u5177\uff0c\u5e76\u5728vite\u4e2d\u542f\u7528\u81ea\u52a8\u66f4\u65b0"),(0,l.kt)(p.Z,{groupId:"vite_boilerplate",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"},{label:"pnpm",value:"pnpm"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser\nnpx eslint --init\n"))),(0,l.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser\nyarn run eslint --init\n"))),(0,l.kt)(i.Z,{value:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser\npnpx eslint --init\n")))))}d.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);