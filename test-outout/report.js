$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("kayak.feature");
formatter.feature({
  "line": 1,
  "name": "Kayak Search Page",
  "description": "",
  "id": "kayak-search-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Kayak Search Scenario",
  "description": "",
  "id": "kayak-search-page;kayak-search-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on Kayak Search page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user verify the pageTitle \"Search Flights, Hotels \u0026 Rental Cars | KAYAK\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Uncheck the default Selection",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters  From Location \"\u003cDeparture\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters To Location \"\u003cArrival\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Select the Arrival Date \"\u003cArrivalDate\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User Select the DepartureDate  \"\u003cDepartureDate\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks Search Icon",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user select the search result",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "kayak-search-page;kayak-search-scenario;",
  "rows": [
    {
      "cells": [
        "Departure",
        "Arrival",
        "ArrivalDate",
        "DepartureDate"
      ],
      "line": 18,
      "id": "kayak-search-page;kayak-search-scenario;;1"
    },
    {
      "cells": [
        "Mumbai",
        "Bengaluru",
        "ArrivalDate",
        "DepartureDate"
      ],
      "line": 19,
      "id": "kayak-search-page;kayak-search-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Kayak Search Scenario",
  "description": "",
  "id": "kayak-search-page;kayak-search-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on Kayak Search page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user verify the pageTitle \"Search Flights, Hotels \u0026 Rental Cars | KAYAK\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Uncheck the default Selection",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters  From Location \"Mumbai\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters To Location \"Bengaluru\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Select the Arrival Date \"ArrivalDate\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User Select the DepartureDate  \"DepartureDate\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks Search Icon",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user select the search result",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefination.user_is_on_Kayak_Search_page()"
});
formatter.result({
  "duration": 6558411405,
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
  "duration": 550649750,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefination.user_Uncheck_the_default_Selection()"
});
formatter.result({
  "duration": 50166670278,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//html[1]/body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/section[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]\"}\n  (Session info: chrome\u003d80.0.3987.163)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-38O48P3\u0027, ip: \u0027192.168.254.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Nayana\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:63018}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d17bd5607d216fbc6485d75b8ede0c1f\n*** Element info: {Using\u003dxpath, value\u003d//html[1]/body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/section[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.qa.pages.HomePage.selectfrom(HomePage.java:43)\r\n\tat com.qa.stepDefination.HomePageStepDefination.user_Uncheck_the_default_Selection(HomePageStepDefination.java:37)\r\n\tat ✽.When user Uncheck the default Selection(kayak.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mumbai",
      "offset": 28
    }
  ],
  "location": "HomePageStepDefination.user_enters_From_Location(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bengaluru",
      "offset": 25
    }
  ],
  "location": "HomePageStepDefination.user_enters_To_Location(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ArrivalDate",
      "offset": 30
    }
  ],
  "location": "HomePageStepDefination.user_Select_the_Arrival_Date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "DepartureDate",
      "offset": 32
    }
  ],
  "location": "HomePageStepDefination.user_Select_the_DepartureDate(String)"
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