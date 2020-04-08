package com.qa.pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.qa.util.RepositeriesFactory;
import com.qa.util.TestBase;
import com.qa.util.TestUtil;

public class HomePage extends TestBase {


	public HomePage() {
		PageFactory.initElements(driver, this);
	}


	//Actions 

	//verify title of page	
	public String verifyHomePageTitle()
	{
		return driver.getTitle(); 


	}

	public void selectfrom() throws InterruptedException{

		Thread.sleep(20000);	
		driver.findElement(By.xpath(RepositeriesFactory.fromdep)).click();
		driver.findElement(By.xpath(RepositeriesFactory.selectdefault)).click();

	}

	public void EnterfromAirtport(String fromairport){

		driver.findElement(By.xpath(RepositeriesFactory.fromairport)).sendKeys(fromairport);
		driver.findElement(By.cssSelector(RepositeriesFactory.choosethesearch)).click(); 	  
	}

	public void EntertoAirtport(String toairport){


		driver.findElement(By.xpath(RepositeriesFactory.toAirport)).sendKeys(toairport);
		driver.findElement(By.cssSelector(RepositeriesFactory.choosethesearch)).click(); 	
	}






}


