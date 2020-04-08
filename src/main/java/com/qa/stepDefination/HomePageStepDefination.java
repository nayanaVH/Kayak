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
		/*
		 * System.out.println(pageTitle); Assert.assertEquals(expectedTitle, pageTitle);
		 * WebElement arriveClick=driver.findElement(By.
		 * xpath("//div[@class='js-selection-display _id7 _ii0 _iir _iQe _kaM _ic2 _ic3']"
		 * )); Actions action=new Actions(driver);
		 * action.moveToElement(arriveClick).build().perform();
		 * //arrivalSearchBox.click(); WebElement cancel=driver.findElement(By.
		 * xpath("//div[@class='_iac _irF _Hk _h-8']/button")); JavascriptExecutor js=
		 * ((JavascriptExecutor)driver);
		 * js.executeScript("arguments[0].click();",cancel); WebElement
		 * from=driver.findElement(By.xpath("//div[@class='_ia1 _h-8 _itL']/input"));
		 * from.sendKeys("Paris"); from.sendKeys(Keys.ENTER);
		 */
	  }
   
   @Then("^user click on arrivalBox and uncheck the check box$")
   public void user_click_on_arrivalBox_and_uncheck_the_check_box()throws Throwable { 
	   
	   homepage.arrivalForm();		
   }

	@Then("^user enters  Search details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_Search_details_and_and_and(String arg1, String arg2, String arg3, String arg4) throws Throwable {
	    
	   
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
