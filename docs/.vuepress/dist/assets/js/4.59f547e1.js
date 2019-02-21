(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{171:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("p",[s("a",{attrs:{href:"https://travis-ci.com/AmazeeLabs/silverback",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://travis-ci.com/AmazeeLabs/silverback.svg?branch=master",alt:"Build Status"}}),s("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("To create or work on a Silverback project the following tools have to be available on your system:")]),t._v(" "),s("ul",[s("li",[t._v("A "),s("a",{attrs:{href:"http://php.net/manual/en/install.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("PHP 7"),s("OutboundLink")],1),t._v(" interpreter meeting "),s("a",{attrs:{href:"https://www.drupal.org/docs/8/system-requirements/php-requirements",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drupal requirements"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Installed and configured "),s("a",{attrs:{href:"https://direnv.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("direnv"),s("OutboundLink")],1),t._v(" (don't forget about the "),s("a",{attrs:{href:"https://direnv.net/index.html#setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("setup"),s("OutboundLink")],1),t._v(" for your shell)")]),t._v(" "),s("li",[t._v("Globally installed "),s("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("composer"),s("OutboundLink")],1)]),t._v(" "),t._m(5)]),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("Given you already created a composer based Drupal project like this:")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),s("p",[t._v("Requiring and initating the package did a couple of things:")]),t._v(" "),s("ul",[s("li",[t._v("A list of common project dependencies have been installed.")]),t._v(" "),s("li",[t._v("Configuration files for Travis, Lando and amazee.io have been created.")]),t._v(" "),s("li",[t._v("Your composer.json has been slightly modified.")]),t._v(" "),t._m(12),t._v(" "),s("li",[t._v("A "),s("code",[t._v("tests")]),t._v(" directory with a fully operational "),s("a",{attrs:{href:"https://www.cypress.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cypress"),s("OutboundLink")],1),t._v(" setup appeared.")]),t._v(" "),t._m(13)]),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("To update Silverback along with its dependencies simply update the composer package:")]),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("To run the project locally, just execute the setup procedure and start a local development server:")]),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),s("p",[t._v("Silverback assumes that production databases are somewhat confidential and copying them all over the place might be a major security risk. So, no database syncing. Every new feature should provide illustrative test content by including a "),s("em",[t._v("test content module")]),t._v(", that contains "),s("a",{attrs:{href:"https://www.drupal.org/project/default_content",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("default_content")]),s("OutboundLink")],1),t._v(" exports or install hooks to create reproducible and testable content.")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),s("p",[t._v("There are two levels of testing which will be executed by the "),s("a",{attrs:{href:"http://travis-ci.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Travis"),s("OutboundLink")],1),t._v(" configuration added by "),s("code",[t._v("silverback init")]),t._v(".")]),t._v(" "),s("p",[t._v("Custom modules are tested with "),s("a",{attrs:{href:"https://www.drupal.org/docs/8/testing",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drupal's standard testing frameworks"),s("OutboundLink")],1),t._v(". "),s("a",{attrs:{href:"http://travis-ci.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Travis"),s("OutboundLink")],1),t._v(" will execute all Drupal tests in "),s("code",[t._v("web/modules/custom")]),t._v(".")]),t._v(" "),s("p",[t._v("For end to end testing, a "),s("a",{attrs:{href:"https://www.cypress.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cypress"),s("OutboundLink")],1),t._v(" configuration is provided in the "),s("code",[t._v("tests")]),t._v(" folder. "),s("code",[t._v("silverback init")]),t._v(" should have added some basic tests that you can run immediately.")]),t._v(" "),t._m(27),s("p",[t._v("This should run the tests in a headless browser. To run them interactively and automatically, execute "),s("code",[t._v("cypress open")]),t._v(", which will bring up the cypress interface. For more information on cypress options, please have a look at the "),s("a",{attrs:{href:"https://docs.cypress.io/guides/guides/command-line.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cypress CLI documentation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),s("p",[t._v("You can learn how to write standard javascript tests from the "),s("a",{attrs:{href:"https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cypress documentation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(30),t._v(" "),s("p",[t._v("The preferred way for writing tests is to use "),s("a",{attrs:{href:"https://docs.cucumber.io/gherkin/reference/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gherkin"),s("OutboundLink")],1),t._v(" to provide a specification of your feature "),t._m(31),t._v(" implementing it, and then adding step definitions to actually test your application.")]),t._v(" "),t._m(32),t._v(" "),s("p",[t._v("There is a lot of literature on writing good test specifications:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://aslakhellesoy.com/post/11055981222/the-training-wheels-came-off",target:"_blank",rel:"noopener noreferrer"}},[t._v("How the training wheels came off"),s("OutboundLink")],1),t._v(" by Aslak Hellesøy")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://cucumber.io/blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("The cucumber.io blog"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://soundcloud.com/cucumber-podcast",target:"_blank",rel:"noopener noreferrer"}},[t._v("The cucumber podcast"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("Silverback comes with a simple example that tests the administration login:")]),t._v(" "),t._m(33),t._m(34),t._v(" "),s("p",[t._v("The corresponding step definitions look like this:")]),t._v(" "),t._m(35),s("p",[t._v("We use "),s("a",{attrs:{href:"https://cucumber.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("cucumber.js"),s("OutboundLink")],1),t._v(" and regular expressions to map readable step definitions to actual step implementations in javascript. Within these steps, you can use all "),s("a",{attrs:{href:"http://docs.cypress.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("cypress commands and extensions"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),s("p",[t._v("You can use the "),s("a",{attrs:{href:"https://marketplace.atlassian.com/apps/1211664/behave-pro-for-bdd-jira-git-cucumber?hosting=cloud&tab=overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("Behave Pro"),s("OutboundLink")],1),t._v(" extension for Jira to maintain and discuss your specifications right alongside your tickets, which is a great way to make them more visible to all the stakeholders that understand "),s("em",[t._v("git")]),t._v(" as an insult.")]),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),s("p",[t._v("Scenarios downloaded from Jira will automatically be tagged based on their ticket, assignee and workflow state. Scenarios of tickets that are in progress are marked as "),s("code",[t._v("@WIP")]),t._v(" while everything that is considered "),s("em",[t._v("done")]),t._v(" has the tag "),s("code",[t._v("@COMPLETED")]),t._v(". Thats how the "),s("a",{attrs:{href:"http://travis-ci.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Travis"),s("OutboundLink")],1),t._v(" configuration will only execute tests that are actually worth executing. For local development it might make sense to set the "),s("code",[t._v("CYPRESS_TAGS")]),t._v(" environment variable to "),s("code",[t._v("@assignee:my-jira-name and @WIP")]),t._v(" to only run tests for tickets that are assigned to oneself and currently in progress. It is also possible to add custom tags to scenarios in Jira.")]),t._v(" "),s("p",[s("strong",[t._v("Note:")]),t._v(" The cucumber implementation currently only takes tags on scenarios into account. "),s("a",{attrs:{href:"https://marketplace.atlassian.com/apps/1211664/behave-pro-for-bdd-jira-git-cucumber?hosting=cloud&tab=overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("Behave Pro"),s("OutboundLink")],1),t._v(" also allows to tag whole features, but these are ignored by the test runner (TODO: fix it in https://github.com/TheBrainFamily/cypress-cucumber-preprocessor).")]),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),s("p",[t._v("The project is ready to be used with amazeeio local development flow. Just install "),s("a",{attrs:{href:"https://docs.amazee.io/local_docker_development/pygmy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pygmy"),s("OutboundLink")],1),t._v(", run "),s("code",[t._v("docker-compose up -d")]),t._v(" and the site is ready to be installed.")]),t._v(" "),t._m(45),t._v(" "),s("p",[t._v("Lagoon doesn't yet support just-in-time fetching of site aliases for drush 9. Please refer to "),s("a",{attrs:{href:"https://lagoon.readthedocs.io/en/latest/using_lagoon/drupal/drush9/",target:"_blank",rel:"noopener noreferrer"}},[t._v("the docs"),s("OutboundLink")],1),t._v(" for a work-around.")]),t._v(" "),t._m(46),t._v(" "),s("p",[t._v("The project is set up to use webpack to bundle drupal libraries, so they can be written in modern javascript and import packages from npm. Setup:")]),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"amazee-silverback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#amazee-silverback","aria-hidden":"true"}},[this._v("#")]),this._v(" Amazee Silverback")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("amazee/silverback")]),this._v(" is a composer package adding common project dependencies, tooling and configuration scaffolding to Amazee Drupal projects. It aims to improve product quality and reduce maintenance costs by encouraging three simple principles:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[s("strong",[t._v("Maximize open source:")]),t._v(" Lower initial costs, technical debt and maintenance costs by using and contributing to open source code as much as possible. For every feature required by a project that is not solvable by configuration or theming, try to find a generic solution that can be contributed and added as a dependency to "),s("code",[t._v("amazeelabs/silverback")]),t._v(".")]),t._v(" "),s("li",[s("strong",[t._v("Minimize requirements:")]),t._v(" It has to be as easy as possible to work on a project. If you need the production database and a local elasticsearch cluster to edit CSS files, you are doing microservices terribly wrong. "),s("em",[t._v("Example:")]),t._v(" By default silverback development sites run on SQLite. MySQL is considered a performance optimization, and it's not in the projects scope to test Drupal's database abstraction layer.")]),t._v(" "),s("li",[s("strong",[t._v("Testability first:")]),t._v(" A project has to be fully testable with only the git repository at any time. All required assets (test content, media, configuration) have to be set up during the installation process. It "),s("strong",[t._v("must not")]),t._v(" rely on production data. Every feature and bug fix has to bring a test case that can be reproduced. It might take more time initially, but it will pay off.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("em",[this._v("Optional:")]),this._v(" A bitcoin miner to give the other three processor cores a purpose, since they are not consumed by docker any more.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"project-initialisation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#project-initialisation","aria-hidden":"true"}},[this._v("#")]),this._v(" Project initialisation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("composer create-project drupal-composer/drupal-project:8.x-dev my-project --no-interaction\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You just have to require the "),e("code",[this._v("amazeelabs/silverback")]),this._v(" composer package and initialise it:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("cd")]),this._v(" my-project\ncomposer remove drupal/core\ncomposer require amazeelabs/silverback\n./vendor/bin/silverback init\nyarn\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you've set up "),e("code",[this._v("direnv")]),this._v(" correctly, it will complain at this point that there is an unknown "),e("code",[this._v(".envrc")]),this._v(" file. Just execute "),e("code",[this._v("direnv allow")]),this._v(" to enable it. From now own environment variables and executable search paths will be set automatically whenever you enter this directory. Here is how it should look in case of a correct installation:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("me@local:~/Projects $ cd my-project/\ndirenv: error .envrc is blocked. Run `direnv allow` to approve its content.\nme@local:~/Projects/my-project $ direnv allow\ndirenv: loading .envrc\ndirenv: export +CYPRESS_BASE_URL ... +SB_TEST_CONTENT ~PATH\nme@local:~/Projects/my-project $ cd ..\ndirenv: unloading\nme@local:~/Projects $ cd my-project/\ndirenv: loading .envrc\ndirenv: export +CYPRESS_BASE_URL ... +SB_TEST_CONTENT ~PATH\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("An environment-based "),e("code",[this._v("settings.php")]),this._v(" has been placed in "),e("code",[this._v("web/sites/default")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("A "),e("code",[this._v(".env")]),this._v(" file was initialised that you can use to configure your local environment.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"updating"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updating","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("composer upgrade amazeelabs/silverback --with-dependencies\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This will also trigger an update hook that re-runs "),e("code",[this._v("silverback init")]),this._v(". If you removed the update hook, you'll have to do that yourself. This will overwrite all the scaffolded files to get in any updates. You can just use git to select which updates you want and which not.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"running-the-website-locally"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-the-website-locally","aria-hidden":"true"}},[this._v("#")]),this._v(" Running the website locally")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("silverback setup\ndrush serve\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Now your Drupal installation should be accessible at http://localhost:8888. Admin account credentials can be configured in your "),e("code",[this._v(".env")]),this._v(" file.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Another invocation of "),s("code",[t._v("silverback setup")]),t._v(" will scratch the current install and and create a new one. "),s("code",[t._v("silverback teardown")]),t._v(" will just do the "),s("em",[t._v("scratch")]),t._v(" part. Running "),s("code",[t._v("silverback setup --backup")]),t._v(" will create a backup before removing the current install, and "),s("code",[t._v("silverback teardown --restore")]),t._v(" will bring the latest backup back. These two commands are mainly used by the end to end testing processes to spin up test sites ("),s("em",[t._v("TODO: Move test sites to simpletest subsites")]),t._v(").")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Danger:")]),this._v(" Currently, there can be only "),e("em",[e("strong",[this._v("one")])]),this._v(" backup.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testing","aria-hidden":"true"}},[this._v("#")]),this._v(" Testing")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"test-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-content","aria-hidden":"true"}},[this._v("#")]),this._v(" Test content")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("After "),e("code",[this._v("silverback setup")]),this._v(" a project has to be fully operational and testable.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[e("strong",[this._v("TODO:")]),this._v(" More detailed instructions for providing default content.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"running-tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-tests","aria-hidden":"true"}},[this._v("#")]),this._v(" Running tests")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("cd")]),this._v(" tests\n"),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v("\ncypress run\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"writing-tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-tests","aria-hidden":"true"}},[this._v("#")]),this._v(" Writing tests")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"simple-javascript-tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simple-javascript-tests","aria-hidden":"true"}},[this._v("#")]),this._v(" Simple javascript tests")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"behavioral-testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#behavioral-testing","aria-hidden":"true"}},[this._v("#")]),this._v(" Behavioral testing")])},function(){var t=this.$createElement,e=this._self._c||t;return e("em",[e("strong",[this._v("before")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("One general misconception about behavior testing is to think it is there so you don't have to write test code but just "),e("em",[this._v('"plain English"')]),this._v(". "),e("em",[this._v("But that's not true!")]),this._v(" As a side effect, you "),e("em",[this._v("might")]),this._v(" be able to reuse some step definitions here and there, but the main goal is to create digestable feature definitions that all stakeholders can understand and participate on.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-gherkin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-gherkin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token feature"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Feature:")]),s("span",{pre:!0,attrs:{class:"token important"}},[t._v(" Login")]),t._v("\n\n  Basic Drupal site setup and administration login.\n\n")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token scenario"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Background:")]),s("span",{pre:!0,attrs:{class:"token important"}})]),t._v("\n    Initial site setup with working administration login.\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v("@Silverback")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v("@COMPLETED")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token scenario"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Scenario:")]),s("span",{pre:!0,attrs:{class:"token important"}},[t._v(" Valid Login")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("Given")]),t._v(" I am on the login screen\n    "),s("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("And")]),t._v(" I use the administration credentials to log in\n    "),s("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("Then")]),t._v(" I should see the administration toolbar\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This feature specification lives in any subfolder of "),e("code",[this._v("tests/cypress/integration")]),this._v(", where you can also find the full example of the login feature.\nThe tags the scenarios are annotated with allow to control "),e("em",[this._v("which")]),this._v(" tests are executed. The travis configuration will by default only execute tests that are tagged with "),e("code",[this._v("@COMPLETED")]),this._v(", So feature definitions can be added and worked on without breaking tests.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* global Given, When, Then */")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("login")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  cy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("visit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user/login'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  cy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#edit-name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  cy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#edit-pass'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  cy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#edit-submit'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Log in'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Given")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^I am on the login screen$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  cy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("visit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user/login'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("When")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^I use the administration credentials to log in$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("login")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^I should see the administration toolbar$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  cy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#toolbar-bar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Every scenario has to be isolated, and must not depend on execution of a previous scenario. Silverback contains hooks that will run "),e("code",[this._v("silverback setup")]),this._v(" and "),e("code",[this._v("silverback teardown")]),this._v(" at the beginning and end of every scenario to enforce that.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"jira-integration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jira-integration","aria-hidden":"true"}},[this._v("#")]),this._v(" Jira integration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Silverback comes with a "),e("code",[this._v("silverback download-tests")]),this._v(" command that will pull all feature specifications for a project. To enable it, you just have to add some variables to the "),e("code",[this._v(".env")]),this._v(" file at the root of the project:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("SB_JIRA_HOST")]),t._v(": The domain name of the Jira instance.")]),t._v(" "),s("li",[s("code",[t._v("SB_JIRA_USER")]),t._v(": The Jira user account.")]),t._v(" "),s("li",[s("code",[t._v("SB_JIRA_PASS")]),t._v(": The Jira account password.")]),t._v(" "),s("li",[s("code",[t._v("SB_JIRA_PROJECTS")]),t._v(": A space separated list of Jira projects as "),s("code",[t._v("[shortcut]:[project id]")]),t._v(" pairs. For example: "),s("code",[t._v("PROJ:12345")]),t._v(". To get your Jira project ID you might have to consult the instance' administrator.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Tests are downloaded to project specific subfolders of "),e("code",[this._v("tests/cypress/integration")]),this._v(", (e.g. "),e("code",[this._v("tests/cypress/integration/PROJ")]),this._v(") and "),e("em",[this._v("should not be added to the git repsitory")]),this._v(", since they may change outside of the development workflow.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"development-workflow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#development-workflow","aria-hidden":"true"}},[this._v("#")]),this._v(" Development workflow")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To get the most out of (and in to) "),e("code",[this._v("amazeelabs/silverback")]),this._v(", the development process should follow a common pattern:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("Review feature/bug request")]),t._v(" "),s("li",[t._v("Create the project level feature specification")]),t._v(" "),s("li",[t._v("Investigate which parts are not doable by just configuring and/or theming existing components.")]),t._v(" "),s("li",[t._v("Try to find a reusable, generic solution (e.g. Views/Rules/Block/GraphQL plugins).")]),t._v(" "),s("li",[t._v("Create a pull request against "),s("code",[t._v("amazeelabs/silverback")]),t._v(" with the proposed changes/additions. It should contain:\n"),s("ul",[s("li",[t._v("The code/dependency changes themselves.")]),t._v(" "),s("li",[t._v("New or modified feature specifications in "),s("code",[t._v("assets/tests/cypress/integration/silverback")]),t._v(".")]),t._v(" "),s("li",[t._v("New or modified documentation pages in "),s("code",[t._v("docs")]),t._v(" ("),s("strong",[t._v("TODO:")]),t._v(" use https://docusaurus.io/?).")]),t._v(" "),s("li",[t._v("Example configuration in "),s("code",[t._v("config")]),t._v(".")])])]),t._v(" "),s("li",[t._v("Apply the pull request as a patch in your projects "),s("code",[t._v("composer.json")]),t._v(".")]),t._v(" "),s("li",[t._v("If there are dependency changes, you have to add them temporarily to your project's\n"),s("code",[t._v("composer.json")]),t._v(". Composer patches can't affect dependencies since they are collecteded before patches are applied.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"lagoon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lagoon","aria-hidden":"true"}},[this._v("#")]),this._v(" Lagoon")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"drush-aliases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#drush-aliases","aria-hidden":"true"}},[this._v("#")]),this._v(" Drush aliases")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"webpack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack","aria-hidden":"true"}},[this._v("#")]),this._v(" Webpack")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("drush en -y webpack_babel")]),this._v(" (there's webpack_react too if you need react)")]),this._v(" "),e("li",[e("code",[this._v("yarn webpack-dev")]),this._v(" - starts the local webpack dev server. This needs to be on all the time during development, so the libraries are built. If you don't want to change anything, but have the libraries working, run "),e("code",[this._v("drush webpack:build")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"known-issues"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#known-issues","aria-hidden":"true"}},[this._v("#")]),this._v(" Known issues")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("In case of javascript errors, first try disabling the aggregation at "),e("em",[this._v("/admin/config/development/performance")]),this._v(".")]),this._v(" "),e("li",[this._v("Only one "),e("code",[this._v("yarn webpack-dev")]),this._v(" can be running at any given point in time.")])])}],!1,null,null,null);e.default=n.exports}}]);