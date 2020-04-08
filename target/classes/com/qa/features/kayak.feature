Feature: Kayak Search Page
Scenario: Kayak Search Scenario

Given user is on Kayak Search page
When user verify the pageTitle "Search Flights, Hotels & Rental Cars | KAYAK"
Then user click on arrivalBox and uncheck the check box 
Then user enters  Search details "<Arrival>" and "<Departure>" and "<ArrivalDate>" and "<DepartureDate>"
Then user clicks Search Icon
Then user select the search result
Then close the Browser

