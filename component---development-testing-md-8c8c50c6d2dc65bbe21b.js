(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{KrgA:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return r})),t.d(a,"default",(function(){return b}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk");var s=t("/FXl"),n=t("TjRS");t("aD51");function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"development/testing.md"}});var p={_frontmatter:r},m=n.a;function b(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,s,n={},c=Object.keys(e);for(s=0;s<c.length;s++)t=c[s],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,["components"]);return Object(s.b)(m,c({},p,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"testing"},"Testing"),Object(s.b)("h2",{id:"test-content"},"Test content"),Object(s.b)("p",null,"Silverback assumes that production databases are somewhat confidential and copying them all over the place might be a major security risk. So, no database syncing. Every new feature should provide illustrative test content by including a ",Object(s.b)("em",{parentName:"p"},"test content module"),", that contains ",Object(s.b)("a",c({parentName:"p"},{href:"https://www.drupal.org/project/default_content"}),Object(s.b)("inlineCode",{parentName:"a"},"default_content"))," exports or install hooks to create reproducible and testable content."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"After ",Object(s.b)("inlineCode",{parentName:"p"},"silverback setup")," a project has to be fully operational and testable.")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},Object(s.b)("strong",{parentName:"em"},"TODO:")," More detailed instructions for providing default content.")),Object(s.b)("h2",{id:"running-tests"},"Running tests"),Object(s.b)("p",null,"There are two levels of testing which will be executed by the ",Object(s.b)("a",c({parentName:"p"},{href:"https://travis-ci.com/"}),"Travis")," configuration added by ",Object(s.b)("inlineCode",{parentName:"p"},"silverback init"),"."),Object(s.b)("p",null,"Custom modules are tested with ",Object(s.b)("a",c({parentName:"p"},{href:"https://www.drupal.org/docs/8/testing"}),"Drupal's standard testing frameworks"),". ",Object(s.b)("a",c({parentName:"p"},{href:"https://travis-ci.com/"}),"Travis")," will execute all Drupal tests in ",Object(s.b)("inlineCode",{parentName:"p"},"web/modules/custom"),"."),Object(s.b)("p",null,"For end to end testing, a ",Object(s.b)("a",c({parentName:"p"},{href:"https://www.cypress.io/"}),"Cypress")," configuration is provided in the ",Object(s.b)("inlineCode",{parentName:"p"},"tests")," folder. ",Object(s.b)("inlineCode",{parentName:"p"},"silverback init")," should have added some basic tests that you can run immediately."),Object(s.b)("pre",{className:"grvsc-container default-dark","data-language":"bash","data-index":"0"},Object(s.b)("code",c({parentName:"pre"},{className:"grvsc-code"}),Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"drush serve :8889"))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"cd"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"})," tests"))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"npm install"))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"cypress run"))))),Object(s.b)("p",null,"This should run the tests in a headless browser. To run them interactively and automatically, execute ",Object(s.b)("inlineCode",{parentName:"p"},"cypress open"),", which will bring up the Cypress interface. For more information on cypress options, please have a look at the ",Object(s.b)("a",c({parentName:"p"},{href:"https://docs.cypress.io/guides/guides/command-line.html"}),"Cypress CLI documentation"),"."),Object(s.b)("h2",{id:"writing-tests"},"Writing tests"),Object(s.b)("h3",{id:"simple-javascript-tests"},"Simple JavaScript tests"),Object(s.b)("p",null,"You can learn how to write standard javascript tests from the ",Object(s.b)("a",c({parentName:"p"},{href:"https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file"}),"Cypress documentation"),"."),Object(s.b)("h3",{id:"behavioral-testing"},"Behavioral testing"),Object(s.b)("p",null,"The preferred way for writing tests is to use ",Object(s.b)("a",c({parentName:"p"},{href:"https://cucumber.io/docs/gherkin/"}),"Gherkin")," to provide a specification of your feature ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"before"))," implementing it, and then adding step definitions to actually test your application."),Object(s.b)("p",null,"One general misconception about behavior testing is to think it is there so you don't have to write test code but just ",Object(s.b)("em",{parentName:"p"},'"plain English"'),". ",Object(s.b)("em",{parentName:"p"},"But that's not true!")," As a side effect, you ",Object(s.b)("em",{parentName:"p"},"might")," be able to reuse some step definitions here and there, but the main goal is to create digestible feature definitions that all stakeholders can understand and participate on."),Object(s.b)("p",null,"There is a lot of literature on writing good test specifications:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",c({parentName:"li"},{href:"http://aslakhellesoy.com/post/11055981222/the-training-wheels-came-off"}),"How the training wheels came off")," by Aslak Hellesøy"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",c({parentName:"li"},{href:"https://cucumber.io/blog"}),"The cucumber.io blog")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",c({parentName:"li"},{href:"https://soundcloud.com/cucumber-podcast"}),"The cucumber podcast"))),Object(s.b)("p",null,"Silverback comes with a simple example that tests the administration login:"),Object(s.b)("pre",{className:"grvsc-container default-dark","data-language":"gherkin","data-index":"1"},Object(s.b)("code",c({parentName:"pre"},{className:"grvsc-code"}),Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),"Feature: Login")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),"  Basic Drupal site setup and administration login.")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),"  Background:")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),"    Initial site setup with working administration login.")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),"  @Silverback @COMPLETED")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),"  Scenario: Valid Login")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),"    Given I am on the login screen")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),"    And I use the administration credentials to log in")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),"    Then I should see the administration toolbar")))),Object(s.b)("p",null,"This feature specification lives in any sub-folder of ",Object(s.b)("inlineCode",{parentName:"p"},"tests/cypress/integration"),", where you can also find the full example of the login feature.\nThe tags the scenarios are annotated with allow to control ",Object(s.b)("em",{parentName:"p"},"which")," tests are executed. The Travis configuration will by default only execute tests that are tagged with ",Object(s.b)("inlineCode",{parentName:"p"},"@COMPLETED"),", so feature definitions can be added and worked on without breaking tests."),Object(s.b)("p",null,"The corresponding step definitions look like this:"),Object(s.b)("pre",{className:"grvsc-container default-dark","data-language":"javascript","data-index":"2"},Object(s.b)("code",c({parentName:"pre"},{className:"grvsc-code"}),Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk3"}),"/* global Given, When, Then */"))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk4"}),"const"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"})," "),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"login"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"})," = ("),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),"user"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),", "),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),"pass"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),") "),Object(s.b)("span",c({parentName:"span"},{className:"mtk4"}),"=>"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"})," () "),Object(s.b)("span",c({parentName:"span"},{className:"mtk4"}),"=>"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"})," {"))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"  "),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),"cy"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"."),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"visit"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"("),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),"'/user/login'"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),");"))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"  "),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),"cy"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"."),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"get"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"("),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),"'#edit-name'"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),")."),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"type"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"("),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),"user"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),");"))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"  "),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),"cy"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"."),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"get"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"("),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),"'#edit-pass'"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),")."),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"type"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"("),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),"pass"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),");"))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"  "),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),"cy"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"."),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"get"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"("),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),"'#edit-submit'"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),")"))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"    ."),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"contains"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"("),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),"'Log in'"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),")"))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"    ."),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"click"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"();"))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"};"))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"Given"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"("),Object(s.b)("span",c({parentName:"span"},{className:"mtk5"}),"/"),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"^"),Object(s.b)("span",c({parentName:"span"},{className:"mtk5"}),"I am on the login screen"),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"$"),Object(s.b)("span",c({parentName:"span"},{className:"mtk5"}),"/"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),", () "),Object(s.b)("span",c({parentName:"span"},{className:"mtk4"}),"=>"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"})," {"))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"  "),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),"cy"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"."),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"visit"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"("),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),"'/user/login'"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),");"))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"});"))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"When"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"("))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"  "),Object(s.b)("span",c({parentName:"span"},{className:"mtk5"}),"/"),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"^"),Object(s.b)("span",c({parentName:"span"},{className:"mtk5"}),"I use the administration credentials to log in"),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"$"),Object(s.b)("span",c({parentName:"span"},{className:"mtk5"}),"/"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),","))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"  "),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"login"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"("),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),"'admin'"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),", "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),"'admin'"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),")"))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),");"))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"Then"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"("),Object(s.b)("span",c({parentName:"span"},{className:"mtk5"}),"/"),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"^"),Object(s.b)("span",c({parentName:"span"},{className:"mtk5"}),"I should see the administration toolbar"),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"$"),Object(s.b)("span",c({parentName:"span"},{className:"mtk5"}),"/"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),", () "),Object(s.b)("span",c({parentName:"span"},{className:"mtk4"}),"=>"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"})," {"))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"  "),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),"cy"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"."),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"get"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"("),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),"'#toolbar-bar'"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),");"))),"\n",Object(s.b)("span",c({parentName:"code"},{className:"grvsc-line"}),Object(s.b)("span",c({parentName:"span"},{className:"grvsc-source"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"});"))))),Object(s.b)("p",null,"We use ",Object(s.b)("a",c({parentName:"p"},{href:"https://cucumber.io/"}),"cucumber.js")," and regular expressions to map readable step definitions to actual step implementations in JavaScript. Within these steps, you can use all ",Object(s.b)("a",c({parentName:"p"},{href:"http://docs.cypress.io"}),"Cypress commands and extensions"),"."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Every scenario has to be isolated, and must not depend on execution of a previous scenario. Silverback contains hooks that will run ",Object(s.b)("inlineCode",{parentName:"p"},"silverback setup")," and ",Object(s.b)("inlineCode",{parentName:"p"},"silverback teardown")," at the beginning and end of every scenario to enforce that.")),Object(s.b)("h3",{id:"jira-integration"},"Jira integration"),Object(s.b)("p",null,"You can use the ",Object(s.b)("a",c({parentName:"p"},{href:"https://www.hindsightsoftware.com/behave-pro"}),"Behave Pro")," extension for Jira to maintain and discuss your specifications right alongside your tickets, which is a great way to make them more visible to all the stakeholders that understand ",Object(s.b)("em",{parentName:"p"},"git")," as an insult."),Object(s.b)("p",null,"Silverback comes with a ",Object(s.b)("inlineCode",{parentName:"p"},"silverback download-tests")," command that will pull all feature specifications for a project. To enable it, you just have to add some variables to the ",Object(s.b)("inlineCode",{parentName:"p"},".env")," file at the root of the project:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"SB_JIRA_HOST"),": The domain name of the Jira instance."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"SB_JIRA_USER"),": The Jira user account."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"SB_JIRA_PASS"),": The Jira account password."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"SB_JIRA_PROJECTS"),": A space separated list of Jira projects as ",Object(s.b)("inlineCode",{parentName:"li"},"[shortcut]:[project id]")," pairs. For example: ",Object(s.b)("inlineCode",{parentName:"li"},"PROJ:12345"),". To get your Jira project ID you might have to consult the instance administrator.")),Object(s.b)("p",null,"Tests are downloaded to project specific sub-folders of ",Object(s.b)("inlineCode",{parentName:"p"},"tests/cypress/integration"),", (e.g. ",Object(s.b)("inlineCode",{parentName:"p"},"tests/cypress/integration/PROJ"),") and ",Object(s.b)("em",{parentName:"p"},"should not be added to the git repository"),", since they may change outside of the development workflow."),Object(s.b)("p",null,"Scenarios downloaded from Jira will automatically be tagged based on their ticket, assignee and workflow state. Scenarios of tickets that are in progress are marked as ",Object(s.b)("inlineCode",{parentName:"p"},"@WIP")," while everything that is considered ",Object(s.b)("em",{parentName:"p"},"done")," has the tag ",Object(s.b)("inlineCode",{parentName:"p"},"@COMPLETED"),". Thats how the ",Object(s.b)("a",c({parentName:"p"},{href:"https://travis-ci.com/"}),"Travis")," configuration will only execute tests that are actually worth executing. For local development it might make sense to set the ",Object(s.b)("inlineCode",{parentName:"p"},"CYPRESS_TAGS")," environment variable to ",Object(s.b)("inlineCode",{parentName:"p"},"@assignee:my-jira-name and @WIP")," to only run tests for tickets that are assigned to oneself and currently in progress. It is also possible to add custom tags to scenarios in Jira."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Note:")," The Cucumber implementation currently only takes tags on scenarios into account. ",Object(s.b)("a",c({parentName:"p"},{href:"https://www.hindsightsoftware.com/behave-pro"}),"Behave Pro")," also allows to tag whole features, but these are ignored by the test runner (TODO: fix it in ",Object(s.b)("a",c({parentName:"p"},{href:"https://github.com/TheBrainFamily/cypress-cucumber-preprocessor"}),"https://github.com/TheBrainFamily/cypress-cucumber-preprocessor"),")."),Object(s.b)("style",{className:"grvsc-styles"},"\n  .grvsc-container {\n    overflow: auto;\n    position: relative;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 1rem;\n    padding-top: var(--grvsc-padding-top, var(--grvsc-padding-v, 1rem));\n    padding-bottom: 1rem;\n    padding-bottom: var(--grvsc-padding-bottom, var(--grvsc-padding-v, 1rem));\n    border-radius: 8px;\n    border-radius: var(--grvsc-border-radius, 8px);\n    font-feature-settings: normal;\n    line-height: 1.4;\n  }\n  \n  .grvsc-code {\n    display: table;\n  }\n  \n  .grvsc-line {\n    display: table-row;\n    box-sizing: border-box;\n    width: 100%;\n    position: relative;\n  }\n  \n  .grvsc-line > * {\n    position: relative;\n  }\n  \n  .grvsc-gutter-pad {\n    display: table-cell;\n    padding-left: 0.75rem;\n    padding-left: calc(var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem)) / 2);\n  }\n  \n  .grvsc-gutter {\n    display: table-cell;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n  }\n  \n  .grvsc-gutter::before {\n    content: attr(data-content);\n  }\n  \n  .grvsc-source {\n    display: table-cell;\n    padding-left: 1.5rem;\n    padding-left: var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem));\n    padding-right: 1.5rem;\n    padding-right: var(--grvsc-padding-right, var(--grvsc-padding-h, 1.5rem));\n  }\n  \n  .grvsc-gutter + .grvsc-source {\n    padding-left: 0.75rem;\n    padding-left: calc(var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem)) / 2);\n  }\n  \n  /* Line transformer styles */\n  \n  .grvsc-has-line-highlighting > .grvsc-code > .grvsc-line::before {\n    content: ' ';\n    position: absolute;\n    width: 100%;\n  }\n  \n  .grvsc-line-diff-add::before {\n    background-color: var(--grvsc-line-diff-add-background-color, rgba(0, 255, 60, 0.2));\n  }\n  \n  .grvsc-line-diff-del::before {\n    background-color: var(--grvsc-line-diff-del-background-color, rgba(255, 0, 20, 0.2));\n  }\n  \n  .grvsc-line-number {\n    padding: 0 2px;\n    text-align: right;\n    opacity: 0.7;\n  }\n  \n  .default-dark {\n    background-color: #1E1E1E;\n    color: #D4D4D4;\n  }\n  .default-dark .mtk1 { color: #D4D4D4; }\n  .default-dark .mtk11 { color: #DCDCAA; }\n  .default-dark .mtk3 { color: #6A9955; }\n  .default-dark .mtk4 { color: #569CD6; }\n  .default-dark .mtk12 { color: #9CDCFE; }\n  .default-dark .mtk8 { color: #CE9178; }\n  .default-dark .mtk5 { color: #D16969; }\n  .default-dark .grvsc-line-highlighted::before {\n    background-color: var(--grvsc-line-highlighted-background-color, rgba(255, 255, 255, 0.1));\n    box-shadow: inset var(--grvsc-line-highlighted-border-width, 4px) 0 0 0 var(--grvsc-line-highlighted-border-color, rgba(255, 255, 255, 0.5));\n  }\n"))}b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"development/testing.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---development-testing-md-8c8c50c6d2dc65bbe21b.js.map