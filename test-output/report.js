$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("kayak.feature");
formatter.feature({
  "line": 1,
  "name": "Kayak Search Page",
  "description": "",
  "id": "kayak-search-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Kayak Search Scenario",
  "description": "",
  "id": "kayak-search-page;kayak-search-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on Kayak Search page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user verify the pageTitle \"Search Flights, Hotels \u0026 Rental Cars | KAYAK\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on arrivalBox and uncheck the check box",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters  Search details \"\u003cArrival\u003e\" and \"\u003cDeparture\u003e\" and \"\u003cArrivalDate\u003e\" and \"\u003cDepartureDate\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks Search Icon",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user select the search result",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefination.user_is_on_Kayak_Search_page()"
});
formatter.result({
  "duration": 5853120456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Flights, Hotels \u0026 Rental Cars | KAYAK",
      "offset": 27
    }
  ],
  "location": "HomePageStepDefination.user_verify_the_pageTitle(String)"
});
formatter.result({
  "duration": 517061915,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefination.user_click_on_arrivalBox_and_uncheck_the_check_box(String)"
});
formatter.result({
  "duration": 713518,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.qa.stepDefination.HomePageStepDefination.user_click_on_arrivalBox_and_uncheck_the_check_box(String) in file:/C:/Java_sourcecodefolder/KayakBDD/target/classes/\u0027 with pattern [^user click on arrivalBox and uncheck the check box$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Then user click on arrivalBox and uncheck the check box\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cArrival\u003e",
      "offset": 29
    },
    {
      "val": "\u003cDeparture\u003e",
      "offset": 45
    },
    {
      "val": "\u003cArrivalDate\u003e",
      "offset": 63
    },
    {
      "val": "\u003cDepartureDate\u003e",
      "offset": 83
    }
  ],
  "location": "HomePageStepDefination.user_enters_Search_details_and_and_and(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefination.user_clicks_Search_Icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefination.user_select_the_search_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefination.close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
});