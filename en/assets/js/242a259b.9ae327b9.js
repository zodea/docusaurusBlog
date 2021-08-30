"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[942],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),o=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=o(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=o(t),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=c;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(7294),a=t(9443);var l=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(6010),p="tabItem_1uMI",s="tabItemActive_2DSg";var o=37,u=39;var m=function(e){var n=e.lazy,t=e.block,a=e.defaultValue,m=e.values,c=e.groupId,d=e.className,f=l(),g=f.tabGroupChoices,v=f.setTabGroupChoices,k=(0,r.useState)(a),y=k[0],b=k[1],h=r.Children.toArray(e.children),N=[];if(null!=c){var x=g[c];null!=x&&x!==y&&m.some((function(e){return e.value===x}))&&b(x)}var T=function(e){var n=e.currentTarget,t=N.indexOf(n),r=m[t].value;b(r),null!=c&&(v(c,r),setTimeout((function(){var e,t,r,a,l,i,p,o;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,l=e.right,i=window,p=i.innerHeight,o=i.innerWidth,t>=0&&l<=o&&a<=p&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},w=function(e){var n,t;switch(e.keyCode){case u:var r=N.indexOf(e.target)+1;t=N[r]||N[0];break;case o:var a=N.indexOf(e.target)-1;t=N[a]||N[N.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},d)},m.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,i.Z)("tabs__item",p,{"tabs__item--active":y===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:w,onFocus:T,onClick:T},t)}))),n?(0,r.cloneElement)(h.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},9443:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},2014:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return m},assets:function(){return c},toc:function(){return d},default:function(){return g}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=t(5064),p=t(8215),s=["components"],o={title:"vite\u642d\u5efa\uff08\u4e00\uff09CLI\u642d\u5efa\u53cadotFile\u7684\u914d\u7f6e",author:"Zodea",author_url:"https://github.com/zodea",tags:["vite","vue3","ESLint","prettier","TypeScript"],date:new Date("2021-08-19T00:00:00.000Z"),slug:"vite1"},u=void 0,m={permalink:"/en/vite1",source:"@site/blog/vite\u642d\u5efa1.md",title:"vite\u642d\u5efa\uff08\u4e00\uff09CLI\u642d\u5efa\u53cadotFile\u7684\u914d\u7f6e",description:"pnpm",date:"2021-08-19T00:00:00.000Z",formattedDate:"August 19, 2021",tags:[{label:"vite",permalink:"/en/tags/vite"},{label:"vue3",permalink:"/en/tags/vue-3"},{label:"ESLint",permalink:"/en/tags/es-lint"},{label:"prettier",permalink:"/en/tags/prettier"},{label:"TypeScript",permalink:"/en/tags/type-script"}],readingTime:5.14,truncated:!0,authors:[{name:"Zodea",url:"https://github.com/zodea"}],nextItem:{title:"homebrew",permalink:"/en/homebrew"}},c={authorsImageUrls:[void 0]},d=[{value:"pnpm",id:"pnpm",children:[]},{value:"vite",id:"vite",children:[]},{value:"gitignore",id:"gitignore",children:[]},{value:"ESLint",id:"eslint",children:[{value:"eslint-define-config",id:"eslint-define-config",children:[]},{value:"vite-plugin-eslint",id:"vite-plugin-eslint",children:[]}]},{value:"prettier",id:"prettier",children:[{value:"\u4ee3\u7801\u68c0\u6d4b\u89c4\u5219",id:"\u4ee3\u7801\u68c0\u6d4b\u89c4\u5219",children:[]}]}],f={toc:d};function g(e){var n=e.components,t=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"pnpm"},"pnpm"),(0,l.kt)("p",null,"\u76f8\u8f83 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," \u3001 ",(0,l.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"yarn")," \u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://www.pnpm.cn/"},"pnpm")," \u7684\u4e00\u4e2a\u4f18\u52bf\u662f\uff0c\u8282\u7701\u78c1\u76d8\u7a7a\u95f4\u5e76\u63d0\u5347\u5b89\u88c5\u901f\u5ea6\uff0c\u8be6\u60c5\u53ef\u70b9\u51fb\u5b98\u7f51\u67e5\u770b\u3002\u76f8\u5bf9\u90e8\u5206\u65e7\u9879\u76ee\uff0cpnpm\u53ef\u80fd\u5728\u4f9d\u8d56\u7ed3\u6784\u4e0a\u6709\u6240\u95ee\u9898\uff0c\u6240\u4ee5\u5c3d\u53ef\u80fd\u5728\u65b0\u9879\u76ee\u4e2d\u4f7f\u7528\u3002"),(0,l.kt)(i.Z,{groupId:"pnpm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"npx",value:"npx"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g pnpm\n"))),(0,l.kt)(p.Z,{value:"npx",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx pnpm add -g pnpm\n")))),(0,l.kt)("p",null,"\u4e3a\u4e86\u51cf\u5c11\u5185\u5b58\u7684\u4f7f\u7528\uff0cpnpm\u5728\u66f4\u65b0\u63d2\u4ef6\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u6e05\u7406\u6389\u4f4e\u7248\u672c\u7684\u4f9d\u8d56\uff0c\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," \u5bf9\u672a\u5f15\u7528\u7684\u4f9d\u8d56\u8fdb\u884c\u5220\u9664\u3002\u5f53\u4f60\u5728\u5207\u6362\u5206\u652f\u65f6\uff0c\u5982\u679c\u4f9d\u8d56\u6709\u4e0d\u540c\uff0c\u4e14\u88ab\u6e05\u7406\u6389\u4e86\uff0c\u5219\u9700\u8981\u5b89\u88c5\u7f3a\u5c11\u7684\u4f9d\u8d56\u624d\u53ef\u7ee7\u7eed\u8fd0\u884c\u3002"),(0,l.kt)("h2",{id:"vite"},"vite"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://cn.vitejs.dev/"},"Vite")," \u76f8\u8f83 ",(0,l.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/"},"webpack")," \u4f9d\u65e7\u662f\u5feb\uff0c\u800c\u4e14\u8fd9\u4e2a\u4e5f\u662f\u57fa\u4e8eVite2\u642d\u5efa\uff0c\u6240\u4ee5\u5982\u679c\u60f3\u4f7f\u7528webpack\u7cfb\u5217\u7684\uff0c\u53ef\u4ee5\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"https://cli.vuejs.org/zh/"},"Vue CLI")," \u7684\u6559\u7a0b\u8fdb\u884c\u5b89\u88c5\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u642d\u5efa\u65b9\u6cd5"),(0,l.kt)(i.Z,{groupId:"vite_boilerplate",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"},{label:"pnpm",value:"pnpm"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm init vite@latest\n"))),(0,l.kt)(p.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn create vite\n"))),(0,l.kt)(p.Z,{value:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pnpx create-vite\n")))),(0,l.kt)("p",null,"\u7136\u540e\u6309\u7167\u63d0\u793a\u64cd\u4f5c\u5373\u53ef\uff01"),(0,l.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u9644\u52a0\u7684\u547d\u4ee4\u884c\u9009\u9879\u76f4\u63a5\u6307\u5b9a\u9879\u76ee\u540d\u79f0\u548c\u4f60\u60f3\u8981\u4f7f\u7528\u7684\u6a21\u677f\u3002\u4f8b\u5982\uff0c\u8981\u6784\u5efa\u4e00\u4e2a Vite + Vue \u9879\u76ee\uff0c\u8fd0\u884c:"),(0,l.kt)(i.Z,{groupId:"vite_boilerplate",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"},{label:"pnpm",value:"pnpm"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# npm 6.x\nnpm init vite@latest my-vue-app --template vue-ts\n\n# npm 7+, \u9700\u8981\u989d\u5916\u7684\u53cc\u6a2a\u7ebf\uff1a\nnpm init vite@latest my-vue-app -- --template vue-ts\n"))),(0,l.kt)(p.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn create vite my-vue-app --template vue-ts\n"))),(0,l.kt)(p.Z,{value:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pnpx create-vite my-vue-app --template vue-ts\n")))),(0,l.kt)("h2",{id:"gitignore"},"gitignore"),(0,l.kt)("p",null,"\u5728\u9879\u76ee\u6784\u5efa\u4e4b\u521d\uff0c\u6211\u4eec\u5c31\u9700\u8981\u63d0\u524d\u5148\u914d\u7f6e\u597dgit\u7684\u76f8\u5173\u4fe1\u606f\u53ca\u5176\u9700\u8981\u5ffd\u7565\u7684\u63d0\u4ea4\u6587\u4ef6\n\u9996\u5148\u5728\u547d\u4ee4\u884c\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u521d\u59cb\u5316\u9879\u76ee"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"git init\n\u7136\u540e\u518d\u521b\u5efa\u5ffd\u7565\u6587\u4ef6\uff0c\u8fd9\u91cc\u6211\u63a8\u8350\u4f7f\u7528vscode\u7684 ",(0,l.kt)("strong",{parentName:"p"},"codezombiech.gitignore")," \u63d2\u4ef6\uff0c\u7531\u4ed6\u53ef\u4ee5\u901a\u8fc7\u64cd\u4f5c\u751f\u6210\u76f8\u5173\u7684\u5ffd\u7565\u914d\u7f6e\uff0c\u6216\u4f7f\u7528\u4e0b\u9762\u7684\u7b80\u5355\u914d\u7f6e\uff1a"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:'language-title=".gitignore"'},"node_modules\n.DS_Store\ndist\ndist-ssr\n*.local\n"))),(0,l.kt)("h1",{id:"other"},"other"),(0,l.kt)("p",null,".npmrc\n.cache\ntest/upload-server/static"),(0,l.kt)("p",null,".local"),(0,l.kt)("h1",{id:"local-env-files"},"local env files"),(0,l.kt)("p",null,".env.local\n.env.*.local"),(0,l.kt)("h1",{id:"log-files"},"Log files"),(0,l.kt)("p",null,"npm-debug.log",(0,l.kt)("em",{parentName:"p"},"\nyarn-debug.log"),"\nyarn-error.log",(0,l.kt)("em",{parentName:"p"},"\npnpm-debug.log")),(0,l.kt)("h1",{id:"editor-directories-and-files"},"Editor directories and files"),(0,l.kt)("p",null,".idea"),(0,l.kt)("h1",{id:"vscode"},".vscode"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},".suo\n"),".ntvs*\n",(0,l.kt)("em",{parentName:"p"},".njsproj\n"),".sln\n*.sw?"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\n## EditorConfig\n\u4e0d\u540c\u7684IDE\u90fd\u652f\u6301\u8be5\u63d2\u4ef6\uff0c\u80fd\u544a\u8bc9\u4f60\u7684IDE\u8fd9\u4e48\u53bb\u7ea6\u675f\u4f60\u7684\u9879\u76ee\u6587\u4ef6\uff0c\u5728vscode\u4e2d\u53ef\u4ee5\u5b89\u88c5 **editorconfig.editorconfig** \u8be5\u63d2\u4ef6\uff0c\u7136\u540e\u5728vscode\u7684\u8d44\u6e90\u7ba1\u7406\u5668\u53f3\u952e\u53ef\u4ee5\u901a\u8fc7Generate .editorconfig\u751f\u6210\u4e00\u4efd\u9ed8\u8ba4\u7684\u7ea6\u675f\u6587\u4ef6\u3002\n\n```editorconfig title=".editorconfig"\n# EditorConfig is awesome: https://EditorConfig.org\n\n# top-most EditorConfig file\nroot = true\n\n[*]\nindent_style = space\nindent_size = 2\nend_of_line = lf\ncharset = utf-8\ntrim_trailing_whitespace = true\ninsert_final_newline = true\nmax_line_length = 100\n\n[*.{yml,yaml,json}]\nindent_style = space\nindent_size = 2\n\n[*.md]\ntrim_trailing_whitespace = false\n\n[Makefile]\nindent_style = tab\n\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u5e26\u6ce8\u91ca\u7248"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u2193\u544a\u8bc9EditorConfig\u63d2\u4ef6\uff0c\u8fd9\u662f\u6839\u6587\u4ef6\uff0c\u4e0d\u7528\u7ee7\u7eed\u5f80\u4e0a\u67e5\u627e\u3002\nroot = true\n\n# \u2193\u5339\u914d\u5168\u90e8\u6587\u4ef6\u3002\n[*]\n# \u2193\u4f7f\u7528`utf-8`\u5b57\u7b26\u96c6\u3002\ncharset=utf-8\n# \u2193\u7ed3\u5c3e\u6362\u884c\u7b26\uff0c\u53ef\u9009`lf`\u3001`cr`\u3001`crlf`\u3002\nend_of_line=lf\n# \u2193\u5728\u6587\u4ef6\u7ed3\u5c3e\u63d2\u5165\u65b0\u884c\u3002\ninsert_final_newline=true\n# \u2193\u7f29\u8fdb\u7684\u6837\u5f0f\u4e3a\u7a7a\u683c\u3002\nindent_style=space\n# \u2193\u7f29\u8fdb\u4e3a2\u3002\nindent_size=2\n# \u2193\u884c\u6700\u5927\u957f\u5ea6\u4e3a100\u3002\nmax_line_length = 100\n\n# \u2193\u5339\u914d\u4ee5`.yml`\u3001`.yaml`\u3001`.json`\u7ed3\u5c3e\u7684\u6587\u4ef6\u3002\n[*.{yml,yaml,json}]\nindent_style = space\nindent_size = 2\n\n# \u2193\u5339\u914d\u4ee5`.md`\u7ed3\u5c3e\u7684\u6587\u4ef6\u3002\n[*.md]\n# \u2193\u4fee\u526a\u5c3e\u90e8\u7684\u7a7a\u767d\ntrim_trailing_whitespace = false\n\n[Makefile]\nindent_style = tab\n")))),(0,l.kt)("h2",{id:"eslint"},"ESLint"),(0,l.kt)("p",null,"\u5b89\u88c5\u4ee3\u7801\u68c0\u6d4b\u5de5\u5177\uff0c\u5e76\u5728vite\u4e2d\u542f\u7528\u81ea\u52a8\u66f4\u65b0"),(0,l.kt)(i.Z,{groupId:"vite_boilerplate",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"},{label:"pnpm",value:"pnpm"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D eslint typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser\nnpx eslint --init\n"))),(0,l.kt)(p.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add -D eslint typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser\nyarn run eslint --init\n"))),(0,l.kt)(p.Z,{value:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm i -D eslint typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser\npnpx eslint --init\n")))),(0,l.kt)("h3",{id:"eslint-define-config"},"eslint-define-config"),(0,l.kt)("p",null,"\u518d\u5b89\u88c5",(0,l.kt)("inlineCode",{parentName:"p"},"eslint-define-config"),"\uff0c\u901a\u8fc7\u5176\u63d0\u793a\u7684eslint\u5bf9\u8c61\u5c5e\u6027\u7684\u529f\u80fd\uff0c\u66f4\u4fbf\u4e8e\u6837\u5f0f\u7684\u7ba1\u7406"),(0,l.kt)(i.Z,{groupId:"vite_boilerplate",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"},{label:"pnpm",value:"pnpm"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D eslint-define-config\n"))),(0,l.kt)(p.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add -D eslint-define-config\n"))),(0,l.kt)(p.Z,{value:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm i -D eslint-define-config\n")))),(0,l.kt)("p",null,"\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u5728\u6839\u76ee\u5f55\u4e0b\u65b0\u589e\u4ee5\u4e0b\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title=".eslintrc.js"',title:'".eslintrc.js"'},'// @ts-check\nconst { defineConfig } = require("eslint-define-config");\nmodule.exports = defineConfig({\n  root: true,\n  parser: \'@typescript-eslint/parser\',\n  plugins: [\n    \'@typescript-eslint\',\n  ],\n  parserOptions: {\n    ecmaVersion: 2020,\n    sourceType: "module",\n    jsxPragma: "React",\n    ecmaFeatures: {\n      jsx: true,\n    },\n  },\n  extends: [\n    "plugin:vue/vue3-recommended",\n    "plugin:@typescript-eslint/recommended",\n  ],\n});\n')),(0,l.kt)("p",null,"\u89e3\u91ca\u4e00\u4e0b\u91cd\u8981\u7684\u90e8\u5206"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"parser: '@typescript-eslint/parser'"),"\u544a\u8bc9ESLint\u4f7f\u7528\u4f60\u5b89\u88c5\u7684\u89e3\u6790\u5668\u5305\uff08",(0,l.kt)("a",{parentName:"li",href:"https://github.com/typescript-eslint/typescript-eslint/tree/fa35e22702207baf07acb3eec11d3383721bf6b6/packages/parser"},"@typescript-eslint/parser"),"\uff09\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u4f7f\u5f97ESLint\u80fd\u591f\u7406\u89e3TypeScript\u7684\u8bed\u6cd5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u662f\u5fc5\u987b\u7684\uff0c\u5426\u5219ESLint\u4f1a\u5728\u8bd5\u56fe\u89e3\u6790TypeScript\u4ee3\u7801\u65f6\u629b\u51fa\u9519\u8bef\uff0c\u5c31\u50cf\u5b83\u662f\u666e\u901a\u7684JavaScript\u4e00\u6837\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"plugins: ['@typescript-eslint']")," \u544a\u8bc9ESLint\u52a0\u8f7d\u4f60\u5b89\u88c5\u7684\u63d2\u4ef6\u5305\uff08",(0,l.kt)("a",{parentName:"li",href:"https://github.com/typescript-eslint/typescript-eslint/tree/fa35e22702207baf07acb3eec11d3383721bf6b6/packages/eslint-plugin"},"@typescript-eslint/eslint-plugin"),"\uff09\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u5141\u8bb8\u4f60\u5728\u4f60\u7684\u4ee3\u7801\u5e93\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u89c4\u5219\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"extends: [ ... ] "),"\u544a\u8bc9ESLint\uff0c\u4f60\u7684\u914d\u7f6e\u6269\u5c55\u4e86\u7ed9\u5b9a\u7684\u914d\u7f6e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"eslint:recommended"),'\u662fESLint\u5185\u7f6e\u7684 "\u63a8\u8350 "\u914d\u7f6e--\u5b83\u6253\u5f00\u4e86\u4e00\u4e2a\u5c0f\u7684\u3001\u5408\u7406\u7684\u89c4\u5219\u96c6\uff0c\u4e3a\u4f17\u6240\u5468\u77e5\u7684\u6700\u4f73\u5b9e\u8df5\u63d0\u4f9b\u4e86\u63d0\u793a\u3002'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"plugin:@typescript-eslint/recommended"),'\u662f\u6211\u4eec\u7684 "\u63a8\u8350 "\u914d\u7f6e--\u5b83\u5c31\u50cf',(0,l.kt)("inlineCode",{parentName:"li"},"eslint:recommended"),"\u4e00\u6837\uff0c\u53ea\u662f\u5b83\u53ea\u5f00\u542f\u6211\u4eecTypeScript\u4e13\u7528\u63d2\u4ef6\u7684\u89c4\u5219\u3002")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u7531\u4e8evue\u6709\u7279\u6b8a\u7684template\u8bed\u6cd5\uff0c\u6240\u4ee5\u5bf9\u4e8e\u4ee3\u7801\u68c0\u6d4b\u7684\u90e8\u5206\uff0c\u9700\u8981\u66f4\u6362\u4e3a",(0,l.kt)("a",{parentName:"p",href:"https://eslint.vuejs.org/user-guide/#what-is-the-use-the-latest-vue-eslint-parser-error"},"elint-pluign-vue"),"\u63d2\u4ef6\uff0c\u6839\u636e\u91cc\u9762\u7684\u6559\u7a0b\uff0c\u6211\u4eec\u5bf9\u5f53\u524d\u7684\u4ee3\u7801\u68c0\u6d4b\u8fdb\u884c\u66ff\u6362\u4fee\u6539\u3002"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'{5,6,8} title=".eslintrc.js"',"{5,6,8}":!0,title:'".eslintrc.js"'},'// @ts-check\nconst { defineConfig } = require("eslint-define-config");\nmodule.exports = defineConfig({\n  // ...\n- "parser": "@typescript-eslint/parser",\n+ "parser": "vue-eslint-parser",\n  "parserOptions": {\n+     "parser": "@typescript-eslint/parser",\n      "ecmaVersion": 2020,\n      "sourceType": "module"\n  }\n  // ...\n});\n\n')),(0,l.kt)("p",null,"\u76ee\u524d\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"eslint"),"\u7684\u914d\u7f6e\u90e8\u5206\u6682\u544a\u4e00\u6bb5\u843d\uff0c\u6211\u4eec\u73b0\u5728\u6765\u6dfb\u52a0\u8fd0\u884c\u65f6\u4ee3\u7801\u68c0\u6d4b\uff0c\u8fd9\u6837\u5c31\u80fd\u5b9e\u73b0\u7edf\u4e00\u7684\u63d0\u4ea4\u89c4\u8303\uff0c\u4e0d\u9700\u8981\u5bf9\u6bcf\u4e2a\u7535\u8111\u7684\u4e0d\u540c\u4ee3\u7801\u683c\u5f0f\u5316\u914d\u7f6e\u8fdb\u884c\u5904\u7406\u3002"),(0,l.kt)("h3",{id:"vite-plugin-eslint"},"vite-plugin-eslint"),(0,l.kt)("p",null,"\u5b98\u65b9\u6587\u6863",(0,l.kt)("a",{parentName:"p",href:"https://github.com/gxmari007/vite-plugin-eslint"},"vite-plugin-eslint")),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"vite-plugin-eslint")," \u5b9e\u73b0\u5bf9 ",(0,l.kt)("strong",{parentName:"p"},"\u975e\u6839\u76ee\u5f55\u4e0b")," \u7684\u6587\u4ef6\u8fdb\u884c\u81ea\u52a8\u683c\u5f0f\u5316"),(0,l.kt)(i.Z,{groupId:"vite_boilerplate",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"},{label:"pnpm",value:"pnpm"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D vite-plugin-eslint\n"))),(0,l.kt)(p.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add -D vite-plugin-eslint\n"))),(0,l.kt)(p.Z,{value:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm i -D vite-plugin-eslint\n")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="vite.config.ts"',title:'"vite.config.ts"'},"import { defineConfig } from 'vite';\nimport eslintPlugin from 'vite-plugin-eslint';\n\nexport default defineConfig({\n  plugins: [eslintPlugin({\n      fix: true,\n    })],\n});\n")),(0,l.kt)("h2",{id:"prettier"},"prettier"),(0,l.kt)("p",null,"\u6b64\u65f6\u6211\u4eec\u518d\u6dfb\u52a0\u683c\u5f0f\u5316\u4ee3\u7801\u7684\u63d2\u4ef6\uff0c\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"https://prettier.io/"},"prettier"),"\uff0c\u4e5f\u53ef\u4ee5\u7ed3\u5408 ",(0,l.kt)("inlineCode",{parentName:"p"},"vscode")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"esbenp.prettier-vscode")," \u63d2\u4ef6\u6765\u683c\u5f0f\u5316\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u9700\u8981\u5b89\u88c5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prettier"),": \u63d0\u4f9b ",(0,l.kt)("inlineCode",{parentName:"li"},"eslint-plugin-prettier")," \u7684\u683c\u5f0f\u5316\u4f9d\u8d56"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"eslint-plugin-prettier"),": \u9879\u76ee\u7684\u552f\u4e00\u683c\u5f0f\u5316\u63d2\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"eslint-config-prettier"),": \u89e3\u51b3",(0,l.kt)("inlineCode",{parentName:"li"},"ESLint"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"prettier"),"\u7684\u89c4\u5219\u51b2\u7a81")),(0,l.kt)(i.Z,{groupId:"vite_boilerplate",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"},{label:"pnpm",value:"pnpm"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D eslint-config-prettier eslint-plugin-prettier prettier\n"))),(0,l.kt)(p.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add -D eslint-config-prettier eslint-plugin-prettier prettier\n"))),(0,l.kt)(p.Z,{value:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm i -D eslint-config-prettier eslint-plugin-prettier prettier\n")))),(0,l.kt)("p",null,"\u7136\u540e\u5c31\u914d\u7f6eprettier"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="prettier.config.js"',title:'"prettier.config.js"'},"module.exports = {\n  printWidth: 100,\n  tabWidth: 2,\n  useTabs: false,\n  semi: true,\n  vueIndentScriptAndStyle: true,\n  singleQuote: true,\n  quoteProps: 'as-needed',\n  bracketSpacing: true,\n  trailingComma: 'es5',\n  jsxBracketSameLine: false,\n  jsxSingleQuote: false,\n  arrowParens: 'always',\n  insertPragma: false,\n  requirePragma: false,\n  proseWrap: 'never',\n  htmlWhitespaceSensitivity: 'strict',\n  endOfLine: 'lf',\n  rangeStart: 0,\n};\n")),(0,l.kt)("p",null,"\u914d\u7f6e\u5ffd\u7565\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:'language-title=".prettierignore"'},"/dist/*\n.local\n.output.js\n/node_modules/**\n\n**/*.svg\n**/*.sh\n\n/public/*\n")),(0,l.kt)("p",null,"\u518d\u628aprettier\u914d\u7f6e\u8fdbESLint"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'{5,6} title=".eslintrc.js"',"{5,6}":!0,title:'".eslintrc.js"'},"// ...\n  extends: [\n    'plugin:vue/vue3-recommended',\n    'plugin:@typescript-eslint/recommended',\n    'prettier',\n    'plugin:prettier/recommended',\n  ],\n// ...\n")),(0,l.kt)("h3",{id:"\u4ee3\u7801\u68c0\u6d4b\u89c4\u5219"},"\u4ee3\u7801\u68c0\u6d4b\u89c4\u5219"),(0,l.kt)("p",null,"\u4e4b\u524d\u8bf4\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"ESLint"),"\u662f\u7528\u6765\u68c0\u67e5\u4ee3\u7801\u7684\u3002\u53c8\u5b89\u88c5\u4e86\u90a3\u4e48\u591a\u7684\u63d2\u4ef6\u3002\u4f46\u662f\u5b98\u65b9\u9ed8\u8ba4\u7684\u65b9\u6848\u6709\u65f6\u4e0d\u4e00\u6837\u7b26\u5408\u6211\u4eec\u7684\u8981\u6c42\u3002\u6211\u4eec\u9700\u8981\u81ea\u5b9a\u4e49\u81ea\u5df1\u7684\u89c4\u5219\u3002"),(0,l.kt)("p",null,"\u4fee\u6539\u89c4\u5219\u4e3b\u8981\u662f\u4fee\u6539\u6839\u76ee\u5f55\u4e0b.eslintrc.js\u6587\u4ef6\u7684",(0,l.kt)("strong",{parentName:"p"},"rules"),"\u5b57\u6bb5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title=".eslintrc.js"',title:'".eslintrc.js"'},"// ...\n  rules: {\n    'vue/script-setup-uses-vars': 'error',\n    '@typescript-eslint/ban-ts-ignore': 'off',\n    '@typescript-eslint/explicit-function-return-type': 'off',\n    '@typescript-eslint/no-explicit-any': 'off',\n    '@typescript-eslint/no-var-requires': 'off',\n    '@typescript-eslint/no-empty-function': 'off',\n    'vue/custom-event-name-casing': 'off',\n    'no-use-before-define': 'off',\n    '@typescript-eslint/no-use-before-define': 'off',\n    '@typescript-eslint/ban-ts-comment': 'off',\n    '@typescript-eslint/ban-types': 'off',\n    '@typescript-eslint/no-non-null-assertion': 'off',\n    '@typescript-eslint/explicit-module-boundary-types': 'off',\n    '@typescript-eslint/no-unused-vars': [\n      'error',\n      {\n        argsIgnorePattern: '^_',\n        varsIgnorePattern: '^_',\n      },\n    ],\n    'no-unused-vars': [\n      'error',\n      {\n        argsIgnorePattern: '^_',\n        varsIgnorePattern: '^_',\n      },\n    ],\n    'space-before-function-paren': 'off',\n\n    'vue/attributes-order': 'off',\n    'vue/one-component-per-file': 'off',\n    'vue/html-closing-bracket-newline': 'off',\n    'vue/max-attributes-per-line': 'off',\n    'vue/multiline-html-element-content-newline': 'off',\n    'vue/singleline-html-element-content-newline': 'off',\n    'vue/attribute-hyphenation': 'off',\n    'vue/require-default-prop': 'off',\n    'vue/html-self-closing': [\n      'error',\n      {\n        html: {\n          void: 'always',\n          normal: 'never',\n          component: 'always',\n        },\n        svg: 'always',\n        math: 'always',\n      },\n    ],\n  },\n// ...\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u5e26\u6ce8\u91ca\u7248"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"module.exports = {\n  // ...\n  rules: {\n    // \u2193\u7981\u6b62\u5728setup\u5185\u4f7f\u7528var\u5b9a\u4e49\u53d8\u91cf\n    'vue/script-setup-uses-vars': 'error',\n    // \u2193\u7981\u6b62\u4f7f\u7528@ts-ignore\u6765\u6d88\u9664ESLint\u68c0\u67e5\n    '@typescript-eslint/ban-ts-ignore': 'off',\n    // \u2193\u5728\u51fd\u6570\u548c\u7c7b\u65b9\u6cd5\u4e0a\u9700\u8981\u663e\u5f0f\u7684\u8fd4\u56de\u7c7b\u578b\n    '@typescript-eslint/explicit-function-return-type': 'off',\n    // \u2193\u7981\u6b62\u4f7f\u7528any\u7c7b\u578b\n    '@typescript-eslint/no-explicit-any': 'off',\n    // \u2193\u9664\u5bfc\u5165\u8bed\u53e5\u5916\uff0c\u7981\u6b62\u4f7f\u7528require\u8bed\u53e5\n    '@typescript-eslint/no-var-requires': 'off',\n    // \u2193\u7981\u6b62\u4f7f\u7528\u7a7a\u51fd\u6570\n    '@typescript-eslint/no-empty-function': 'off',\n    // \u2193\u5bf9\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u540d\u79f0\u5f3a\u5236\u4f7f\u7528\u7279\u5b9a\u7684\u5927\u5c0f\u5199\n    'vue/custom-event-name-casing': 'off',\n    // \u2193\u7981\u6b62\u5b9a\u4e49\u524d\u4f7f\u7528\n    'no-use-before-define': 'off',\n    // \u2193\u5728\u5b9a\u4e49\u53d8\u91cf\u4e4b\u524d\u4e0d\u5141\u8bb8\u4f7f\u7528\u53d8\u91cf\n    '@typescript-eslint/no-use-before-define': 'off',\n    // \u2193\u7981\u6b62\u4f7f\u7528@ts-\u6ce8\u89e3\n    '@typescript-eslint/ban-ts-comment': 'off',\n    // \u2193\u7981\u6b62\u4f7f\u7528\u7279\u5b9a\u7c7b\u578b\n    '@typescript-eslint/ban-types': 'off',\n    // \u2193\u7981\u6b62\u4f7f\u7528!\u540e\u7f00\u8fd0\u7b97\u7b26\u8fdb\u884c\u975enull\u65ad\u8a00\n    '@typescript-eslint/no-non-null-assertion': 'off',\n    // \u2193\u5728\u5bfc\u51fa\u7684\u51fd\u6570\u548c\u7c7b\u7684\u516c\u5171\u7c7b\u65b9\u6cd5\u4e0a\u9700\u8981\u663e\u5f0f\u7684\u8fd4\u56de\u503c\u548c\u53c2\u6570\u7c7b\u578b\n    '@typescript-eslint/explicit-module-boundary-types': 'off',\n    // \u2193\u7981\u6b62\u4f7f\u7528\u672a\u4f7f\u7528\u7684\u53d8\u91cf\n    '@typescript-eslint/no-unused-vars': [\n      'error',\n      {\n        argsIgnorePattern: '^h$',\n        varsIgnorePattern: '^h$',\n      },\n    ],\n    // \u2193\u7981\u6b62\u4f7f\u7528\u672a\u4f7f\u7528\u7684\u53d8\u91cf\n    'no-unused-vars': [\n      'error',\n      {\n        argsIgnorePattern: '^h$',\n        varsIgnorePattern: '^h$',\n      },\n    ],\n    // \u2193\u5728\u51fd\u6570\u62ec\u53f7\u524d\u9700\u8981\u6216\u4e0d\u5141\u8bb8\u6709\u7a7a\u683c\n    'space-before-function-paren': 'off',\n\n    // \u2193\u5f3a\u5236\u5c5e\u6027\u987a\u5e8f\n    'vue/attributes-order': 'off',\n    // \u2193\u5f3a\u5236\u6bcf\u4e2a\u7ec4\u4ef6\u5e94\u4f4d\u4e8e\u5176\u81ea\u5df1\u7684\u6587\u4ef6\u4e2d\n    'vue/one-component-per-file': 'off',\n    // \u2193\u5728\u6807\u7b7e\u7684\u53f3\u62ec\u53f7\u4e4b\u524d\u8981\u6c42\u6216\u4e0d\u5141\u8bb8\u6362\u884c\n    'vue/html-closing-bracket-newline': 'off',\n    // \u2193\u5f3a\u5236\u6bcf\u884c\u7684\u6700\u5927\u5c5e\u6027\u6570\n    'vue/max-attributes-per-line': 'off',\n    // \u2193\u5728\u591a\u884c\u5143\u7d20\u7684\u5185\u5bb9\u4e4b\u524d\u548c\u4e4b\u540e\u9700\u8981\u6362\u884c\n    'vue/multiline-html-element-content-newline': 'off',\n    // \u2193\u5728\u5355\u884c\u5143\u7d20\u7684\u5185\u5bb9\u4e4b\u524d\u548c\u4e4b\u540e\u9700\u8981\u6362\u884c\n    'vue/singleline-html-element-content-newline': 'off',\n    // \u2193\u5728\u6a21\u677f\u4e2d\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e0a\u5b9e\u65bd\u5c5e\u6027\u547d\u540d\u6837\u5f0f\n    'vue/attribute-hyphenation': 'off',\n    // \u2193\u9700\u8981\u9053\u5177\u7684\u9ed8\u8ba4\u503c\n    'vue/require-default-prop': 'off',\n    // \u2193\u5b9e\u65bd\u81ea\u6211\u5c01\u95ed\u7684\u98ce\u683c\n    // 'vue/html-self-closing': 'off',\n    'vue/html-self-closing': [\n      'error',\n      {\n        html: {\n          void: 'always',\n          normal: 'never',\n          component: 'always',\n        },\n        svg: 'always',\n        math: 'always',\n      },\n    ],\n  },\n};\n")))),(0,l.kt)("p",null,"\u76ee\u524d\u57fa\u672c\u7684dotFile\u914d\u7f6e\u5c31\u5728\u6b64\u544a\u4e00\u6bb5\u843d\uff0c\u5bf9\u4e8e.env\u7684\u591a\u73af\u5883\u914d\u7f6e\u53ca\u5176\u4ed6\u7684dotFile\u4f1a\u5728\u4e4b\u540e\u7684\u6587\u7ae0\u770b\u60c5\u51b5\u66f4\u65b0"))}g.isMDXComponent=!0},6010:function(e,n,t){function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);