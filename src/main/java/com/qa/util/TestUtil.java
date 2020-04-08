package com.qa.util;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class TestUtil extends TestBase{
	
	public static long PAGE_LOAD_TIMEOUT=30;
	public static long IMPLICIT_WAIT=30;
	
	public static void waitForElement(WebDriver driver,  String locator) {
		WebDriverWait wait = new WebDriverWait (driver, 60);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(locator)));		
	}
	
	public static void toTopPage() {
		((JavascriptExecutor) driver).executeScript("window.scrollTo(document.body.scrollHeight,0);");
	}

}
