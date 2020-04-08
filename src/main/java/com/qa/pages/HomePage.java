package com.qa.pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
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
	
	
	/*
	 * @FindBy(xpath="//div[@id='f3y4-dateRangeInput-display-start-inner']")
	 * WebElement startDate;
	 */
	
	  @FindBy(xpath="//div[@class='js-selection-display _id7 _ii0 _iir _iQe _kaM _ic2 _ic3']")
	  WebElement arriveClick;
	 
	  
	  
	  @FindBy(xpath="//div[@class='_iac _irF _Hk _h-8']/button")
	  WebElement cancel;
	 
     
	
	/*
	 * @FindBy
	 * (xpath="//div[contains[@id='origin-airport-display-multi-container']//div[@class='js-selection-display _id7 _ii0 _iir _iQe _kaM _ic2 _ic3'][contains(text(),'Atlanta (ATL)')]"
	 * ) WebElement arrivalSearchBox;
	 * 
	 * 
	 * @FindBy
	 * (xpath="//div[contains(@id,'origin-airport-display-multi-container')]")
	 * WebElement arrivalSearchBox)
	 */
	 
  public HomePage() {
	  PageFactory.initElements(driver, this);
  }
  
  
  //Actions 
  
//verify title of page	
  public String verifyHomePageTitle()
  {
	  return driver.getTitle(); 
	  
   
  }
  
  // user click on arrivalBox and uncheck the check box
  public void arrivalForm() throws InterruptedException {
	  //From
	  TestUtil.waitForElement(driver,  RepositeriesFactory.depCrossIcon);
	  driver.findElement(By.xpath(RepositeriesFactory.depCrossIcon)).click();
	  driver.findElement(By.xpath(RepositeriesFactory.fromdep)).sendKeys("Atlanta (ATL)");
		  JavascriptExecutor fromScript = (JavascriptExecutor) driver;
		  WebElement ele = driver.findElement(By.xpath(RepositeriesFactory.autoSearchList));
		  fromScript.executeScript("arguments[0].scrollIntoView(true);",ele); 
		  List<WebElement> fromList = driver.findElements(By.xpath(RepositeriesFactory.toCity));
		  //System.out.println(list.size()); 
		  for(int i=0;i<fromList.size();i++)
		  {
		  System.out.println(fromList.get(i).getText());
		  if(fromList.get(i).getText().contains("Atlanta (ATL)"))
		  { 
			  fromList.get(i).click();
			  Thread.sleep(3000);
			  driver.findElement(By.xpath("//div[@class='item-info']"));
		     break; 
		  } 
		  
		  }
		  
		  //To
		  //TestUtil.toTopPage();
		  TestUtil.waitForElement(driver,RepositeriesFactory.todep);  
		  //driver.findElement(By.xpath(RepositeriesFactory.todepdisplay)).click();
		  driver.findElement(By.xpath(RepositeriesFactory.todep));
		  driver.findElement(By.xpath(RepositeriesFactory.todep)).click();
		  driver.findElement(By.xpath(RepositeriesFactory.todep)).sendKeys("Newark (EWR)");
			  JavascriptExecutor toScript = (JavascriptExecutor) driver;
			  WebElement toAutoSearchEle = driver.findElement(By.xpath(RepositeriesFactory.autoSearchList));
			  toScript.executeScript("arguments[0].scrollIntoView(true);",toAutoSearchEle); 
			  List<WebElement> toList = driver.findElements(By.xpath(RepositeriesFactory.toCity));
			  //System.out.println(list.size()); 
			  for(int i=0;i<toList.size();i++)
			  {
			  System.out.println(toList.get(i).getText());
			  if(toList.get(i).getText().contains("Newark (EWR)"))
			  { 
				  toList.get(i).click();
			     break; 
			  } 
			  
			  }
			  
	
		 
	  
  }
	 
}
