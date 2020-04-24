(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{c0tc:function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",(function(){return p})),n.d(a,"default",(function(){return l}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var t=n("/FXl"),s=n("TjRS");n("aD51");function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"development/workflow.md"}});var r={_frontmatter:p},m=s.a;function l(e){var a=e.components,n=function(e,a){if(null==e)return{};var n,t,s={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["components"]);return Object(t.b)(m,c({},r,n,{components:a,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"development-workflow"},"Development workflow"),Object(t.b)("p",null,"To get the most out of (and in to) ",Object(t.b)("inlineCode",{parentName:"p"},"amazeelabs/silverback"),", the development process should follow a common pattern:"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},"Review feature/bug request"),Object(t.b)("li",{parentName:"ol"},"Create the project level feature specification"),Object(t.b)("li",{parentName:"ol"},"Investigate which parts are not doable by just configuring and/or theming existing components."),Object(t.b)("li",{parentName:"ol"},"Try to find a reusable, generic solution (e.g. Views/Rules/Block/GraphQL plugins)."),Object(t.b)("li",{parentName:"ol"},"Create a pull request against ",Object(t.b)("inlineCode",{parentName:"li"},"amazeelabs/silverback")," with the proposed changes/additions. It should contain:",Object(t.b)("ul",{parentName:"li"},Object(t.b)("li",{parentName:"ul"},"The code/dependency changes themselves."),Object(t.b)("li",{parentName:"ul"},"New or modified feature specifications in ",Object(t.b)("inlineCode",{parentName:"li"},"assets/tests/cypress/integration/silverback"),"."),Object(t.b)("li",{parentName:"ul"},"New or modified documentation pages in ",Object(t.b)("inlineCode",{parentName:"li"},"docs"),"."),Object(t.b)("li",{parentName:"ul"},"Example configuration in ",Object(t.b)("inlineCode",{parentName:"li"},"config"),"."))),Object(t.b)("li",{parentName:"ol"},"Apply the pull request as a patch in your projects ",Object(t.b)("inlineCode",{parentName:"li"},"composer.json"),"."),Object(t.b)("li",{parentName:"ol"},"If there are dependency changes, you have to add them temporarily to your project's\n",Object(t.b)("inlineCode",{parentName:"li"},"composer.json"),". Composer patches can't affect dependencies since they are collected before patches are applied.")),Object(t.b)("h2",{id:"working-on-dependencies"},"Working on dependencies"),Object(t.b)("p",null,"Sometimes it's necessary to work on one of the dependencies of a project. Instead\nof creating a separate project or messing with composers checkout of the module,\nthe ",Object(t.b)("inlineCode",{parentName:"p"},"path"),"  repository can be used to achieve this a little more easily. As an\nexample, lets create a local checkout of the GraphQL module:"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},"Create a new directory called ",Object(t.b)("inlineCode",{parentName:"li"},"packages/drupal")," within the project directory\nand clone the GraphQL module:")),Object(t.b)("pre",{className:"grvsc-container default-dark","data-language":"bash","data-index":"0"},Object(t.b)("code",c({parentName:"pre"},{className:"grvsc-code"}),Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"mkdir packages && "),Object(t.b)("span",c({parentName:"span"},{className:"mtk11"}),"cd"),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"})," packages")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"mkdir drupal && "),Object(t.b)("span",c({parentName:"span"},{className:"mtk11"}),"cd"),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"})," drupal")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"git clone git@github.com:drupal-graphql/graphql.git")))),Object(t.b)("ol",{start:2},Object(t.b)("li",{parentName:"ol"},"Add this directory as a local repository to ",Object(t.b)("inlineCode",{parentName:"li"},"composer.json"),":")),Object(t.b)("pre",{className:"grvsc-container default-dark","data-language":"json","data-index":"1"},Object(t.b)("code",c({parentName:"pre"},{className:"grvsc-code"}),Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"{")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",c({parentName:"span"},{className:"mtk12"}),'"repositories"'),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),": [")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"    {")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"        "),Object(t.b)("span",c({parentName:"span"},{className:"mtk12"}),'"type"'),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",c({parentName:"span"},{className:"mtk8"}),'"path"'),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"        "),Object(t.b)("span",c({parentName:"span"},{className:"mtk12"}),'"url"'),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",c({parentName:"span"},{className:"mtk8"}),'"./packages/drupal/graphql"')),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"    }")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"  ]")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"}")))),Object(t.b)("ol",{start:3},Object(t.b)("li",{parentName:"ol"},"Require the dev version of the GraphQL module:")),Object(t.b)("pre",{className:"grvsc-container default-dark","data-language":"bash","data-index":"2"},Object(t.b)("code",c({parentName:"pre"},{className:"grvsc-code"}),Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"composer require drupal/graphql:"),Object(t.b)("span",c({parentName:"span"},{className:"mtk8"}),'"8.x-3.x-dev as 3.0"')))),Object(t.b)("p",null,"Now the package in Drupal should be symlinked to the local checkout."),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"amazeelabs/silverback")," includes the ",Object(t.b)("inlineCode",{parentName:"p"},"wikimedia/composer-merge-plugin")," and will\nlook for a ",Object(t.b)("inlineCode",{parentName:"p"},"composer.json")," in the ",Object(t.b)("inlineCode",{parentName:"p"},"packages")," directory. It should not be committed\nbut used to persist the mentioned local overrides. Simply add the repositories and\nthe dependency aliases to this file ..."),Object(t.b)("pre",{className:"grvsc-container default-dark","data-language":"json","data-index":"3"},Object(t.b)("code",c({parentName:"pre"},{className:"grvsc-code"}),Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"{")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",c({parentName:"span"},{className:"mtk12"}),'"repositories"'),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),": [")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"    {")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"      "),Object(t.b)("span",c({parentName:"span"},{className:"mtk12"}),'"type"'),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",c({parentName:"span"},{className:"mtk8"}),'"path"'),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"      "),Object(t.b)("span",c({parentName:"span"},{className:"mtk12"}),'"url"'),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",c({parentName:"span"},{className:"mtk8"}),'"./packages/drupal/ckeditor5_sections"')),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"    },")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"    {")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"      "),Object(t.b)("span",c({parentName:"span"},{className:"mtk12"}),'"type"'),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",c({parentName:"span"},{className:"mtk8"}),'"path"'),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"      "),Object(t.b)("span",c({parentName:"span"},{className:"mtk12"}),'"url"'),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",c({parentName:"span"},{className:"mtk8"}),'"./packages/drupal/graphql"')),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"    },")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"    {")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"      "),Object(t.b)("span",c({parentName:"span"},{className:"mtk12"}),'"type"'),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",c({parentName:"span"},{className:"mtk8"}),'"path"'),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"      "),Object(t.b)("span",c({parentName:"span"},{className:"mtk12"}),'"url"'),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",c({parentName:"span"},{className:"mtk8"}),'"./packages/amazeelabs/silverback"')),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"    }")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"  ],")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"  "),Object(t.b)("span",c({parentName:"span"},{className:"mtk12"}),'"require"'),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),": {")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",c({parentName:"span"},{className:"mtk12"}),'"drupal/graphql"'),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",c({parentName:"span"},{className:"mtk8"}),'"8.x-3.x-dev as 3.0"'),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",c({parentName:"span"},{className:"mtk12"}),'"drupal/ckeditor5_sections"'),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",c({parentName:"span"},{className:"mtk8"}),'"8.x-1.x-dev as 1.0"')),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"  }")),"\n",Object(t.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",c({parentName:"span"},{className:"mtk1"}),"}")))),Object(t.b)("p",null,"...and run ",Object(t.b)("inlineCode",{parentName:"p"},"composer update")," to include the local packages."),Object(t.b)("style",{className:"grvsc-styles"},"\n  .grvsc-container {\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 1rem;\n    padding-top: var(--grvsc-padding-top, var(--grvsc-padding-v, 1rem));\n    padding-bottom: 1rem;\n    padding-bottom: var(--grvsc-padding-bottom, var(--grvsc-padding-v, 1rem));\n    border-radius: 8px;\n    border-radius: var(--grvsc-border-radius, 8px);\n    font-feature-settings: normal;\n  }\n  \n  .grvsc-code {\n    display: inline-block;\n    min-width: 100%;\n  }\n  \n  .grvsc-line {\n    display: inline-block;\n    box-sizing: border-box;\n    width: 100%;\n    padding-left: 1.5rem;\n    padding-left: var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem));\n    padding-right: 1.5rem;\n    padding-right: var(--grvsc-padding-right, var(--grvsc-padding-h, 1.5rem));\n  }\n  \n  .grvsc-line-highlighted {\n    background-color: var(--grvsc-line-highlighted-background-color, transparent);\n    box-shadow: inset var(--grvsc-line-highlighted-border-width, 4px) 0 0 0 var(--grvsc-line-highlighted-border-color, transparent);\n  }\n  \n  .default-dark {\n    background-color: #1E1E1E;\n    color: #D4D4D4;\n  }\n  .default-dark .mtk1 { color: #D4D4D4; }\n  .default-dark .mtk11 { color: #DCDCAA; }\n  .default-dark .mtk12 { color: #9CDCFE; }\n  .default-dark .mtk8 { color: #CE9178; }\n"))}l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"development/workflow.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---development-workflow-md-0c08addc97a22c408f30.js.map