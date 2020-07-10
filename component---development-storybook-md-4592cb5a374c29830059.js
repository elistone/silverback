(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{tBud:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return c}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk");var r=t("/FXl"),o=t("TjRS");t("aD51");function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"development/storybook.md"}});var s={_frontmatter:i},l=o.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(r.b)(l,a({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"storybook"},"Storybook"),Object(r.b)("p",null,"CSS development happens (also for non-decoupled projects) in ",Object(r.b)("a",a({parentName:"p"},{href:"https://storybook.js.org/"}),"Storybook"),". After\n",Object(r.b)("inlineCode",{parentName:"p"},"silverback init")," the project should contain a ",Object(r.b)("inlineCode",{parentName:"p"},"/storybook")," folder and a\n",Object(r.b)("inlineCode",{parentName:"p"},"storybook")," custom theme."),Object(r.b)("h2",{id:"using-the-theme"},"Using the theme"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"storybook")," theme that is created automatically is supposed to act as a link\nbetween Drupal's theming layer and the pattern library in storybook. It attaches\nthe assets created by storybook and loads Twig templates using the ",Object(r.b)("a",a({parentName:"p"},{href:"https://drupal.org/project/components"}),"components"),"\nmodule.\nThe theme is not supposed to be used directly, but as a base theme for a project\nspecific one, since we might inject new configuration or base templates in the\nfuture."),Object(r.b)("h2",{id:"working-with-storybook"},"Working with storybook"),Object(r.b)("p",null,"All components should be added in the ",Object(r.b)("inlineCode",{parentName:"p"},"storybook/twig")," folder along with\ntheir example stories."),Object(r.b)("p",null,"To work with storybook, you first should run ",Object(r.b)("inlineCode",{parentName:"p"},"yarn")," in the root directory to\ninstall the dependencies. To run storybook in development mode execute\n",Object(r.b)("inlineCode",{parentName:"p"},"yarn run storybook"),". This will bring up the storybook UI with hot reloading."),Object(r.b)("p",null,"To compile the stylesheets for use with Drupal, run ",Object(r.b)("inlineCode",{parentName:"p"},"yarn run build-library"),".\nThis will compile the javascript and css components and expose them to the theme\nautomatically."),Object(r.b)("h2",{id:"an-example-component"},"An example component"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"TODO:")," Create a full example component.")),Object(r.b)("style",{className:"grvsc-styles"},"\n  .grvsc-container {\n    overflow: auto;\n    position: relative;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 1rem;\n    padding-top: var(--grvsc-padding-top, var(--grvsc-padding-v, 1rem));\n    padding-bottom: 1rem;\n    padding-bottom: var(--grvsc-padding-bottom, var(--grvsc-padding-v, 1rem));\n    border-radius: 8px;\n    border-radius: var(--grvsc-border-radius, 8px);\n    font-feature-settings: normal;\n    line-height: 1.4;\n  }\n  \n  .grvsc-code {\n    display: table;\n  }\n  \n  .grvsc-line {\n    display: table-row;\n    box-sizing: border-box;\n    width: 100%;\n    position: relative;\n  }\n  \n  .grvsc-line > * {\n    position: relative;\n  }\n  \n  .grvsc-gutter-pad {\n    display: table-cell;\n    padding-left: 0.75rem;\n    padding-left: calc(var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem)) / 2);\n  }\n  \n  .grvsc-gutter {\n    display: table-cell;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n  }\n  \n  .grvsc-gutter::before {\n    content: attr(data-content);\n  }\n  \n  .grvsc-source {\n    display: table-cell;\n    padding-left: 1.5rem;\n    padding-left: var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem));\n    padding-right: 1.5rem;\n    padding-right: var(--grvsc-padding-right, var(--grvsc-padding-h, 1.5rem));\n  }\n  \n  .grvsc-gutter + .grvsc-source {\n    padding-left: 0.75rem;\n    padding-left: calc(var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem)) / 2);\n  }\n  \n  /* Line transformer styles */\n  \n  .grvsc-has-line-highlighting > .grvsc-code > .grvsc-line::before {\n    content: ' ';\n    position: absolute;\n    width: 100%;\n  }\n  \n  .grvsc-line-diff-add::before {\n    background-color: var(--grvsc-line-diff-add-background-color, rgba(0, 255, 60, 0.2));\n  }\n  \n  .grvsc-line-diff-del::before {\n    background-color: var(--grvsc-line-diff-del-background-color, rgba(255, 0, 20, 0.2));\n  }\n  \n  .grvsc-line-number {\n    padding: 0 2px;\n    text-align: right;\n    opacity: 0.7;\n  }\n  \n"))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"development/storybook.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---development-storybook-md-4592cb5a374c29830059.js.map