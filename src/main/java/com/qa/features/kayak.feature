Feature: Kayak Search Page

@smoke
Scenario Outline: Kayak Search Scenario

Given user is on Kayak Search page
When user verify the pageTitle "Search Flights, Hotels & Rental Cars | KAYAK"
When user Uncheck the default Selection
Then user enters  From Location "<Departure>" 
Then user enters To Location "<Arrival>" 
Then User Select the Arrival Date "<ArrivalDate>" 
Then User Select the DepartureDate  "<DepartureDate>"
Then user clicks Search Icon
Then user select the search result
Then close the Browser

Examples:
|Departure |Arrival|ArrivalDate|DepartureDate|
| Mumbai |Bengaluru|ArrivalDate|DepartureDate|

