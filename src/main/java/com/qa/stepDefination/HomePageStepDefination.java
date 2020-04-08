package com.qa.stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import com.qa.pages.HomePage;
import com.qa.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class HomePageStepDefination extends TestBase{

	HomePage  homepage =new HomePage();



	@Given("^user is on Kayak Search page$")
	public void user_is_on_Kayak_Search_page() throws Throwable {
		TestBase.intialisation();
	}	

	   @When("^user verify the pageTitle \"([^\"]*)\"$")
	    public void user_verify_the_pageTitle(String expectedTitle) throws Throwable {
		   String pageTitle=homepage.verifyHomePageTitle();
			
		  }
	   
	   @When("^user Uncheck the default Selection$")
	   public void user_Uncheck_the_default_Selection() throws Throwable {
		 
		   homepage.selectfrom();
	   }

	   @Then("^user enters  From Location \"([^\"]*)\"$")
	   public void user_enters_From_Location(String fromairport) throws Throwable {
		   
		   System.out.println("From Airport"+fromairport);
		   homepage.EnterfromAirtport(fromairport);
	       
	   }

	   @Then("^user enters To Location \"([^\"]*)\"$")
	   public void user_enters_To_Location(String toAirport) throws Throwable {
		   homepage.EntertoAirtport(toAirport);
	      
	   }

	   @Then("^User Select the Arrival Date \"([^\"]*)\"$")
	   public void user_Select_the_Arrival_Date(String arg1) throws Throwable {
	       // Write code here that turns the phrase above into concrete actions
	      
	   }

	   @Then("^User Select the DepartureDate  \"([^\"]*)\"$")
	   public void user_Select_the_DepartureDate(String arg1) throws Throwable {
	       // Write code here that turns the phrase above into concrete actions
	      
	   }

		@Then("^user clicks Search Icon$")
		public void user_clicks_Search_Icon() throws Throwable {
		    
		}

		@Then("^user select the search result$")
		public void user_select_the_search_result() throws Throwable {
		    
		}

		@Then("^close the Browser$")
		public void close_the_Browser() throws Throwable {
		    
		}


		
		





}
