"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13],{94:function(e,t,a){a.r(t);var r=a(7294),n=a(6742),s=a(745),l=a(4973),i=a(3018);t.default=function(e){var t=e.tags,a=e.sidebar,c=(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"}),u={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);u[t]=u[t]||[],u[t].push(e)}));var g=Object.entries(u).sort((function(e,t){var a=e[0],r=t[0];return a.localeCompare(r)})).map((function(e){var a=e[0],s=e[1];return r.createElement("article",{key:a},r.createElement("h2",null,a),s.map((function(e){return r.createElement(n.Z,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),r.createElement("hr",null))})).filter((function(e){return null!=e}));return r.createElement(s.Z,{title:c,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:a},r.createElement("h1",null,c),r.createElement("section",{className:"margin-vert--lg"},g))}}}]);