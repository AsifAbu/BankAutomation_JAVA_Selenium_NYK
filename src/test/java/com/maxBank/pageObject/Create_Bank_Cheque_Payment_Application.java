package com.maxBank.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentDriver;

public class Create_Bank_Cheque_Payment_Application extends ParentDriver{
	WebDriver driver = getDriver();

	public Create_Bank_Cheque_Payment_Application(WebDriver driver) {
		this.driver = driver;
	}
	
	//Scroll down
	public void scrollDown() {
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,800)", "");
    }
	
	//Scroll Up :
    public void scrollUp() {
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,-800)", "");
    }

	public void clickPaymentApplicationSelection() {
		driver.findElement(By.xpath("//a[@ng-click='accordion1 = !accordion1']")).click();
	}

	public void clickAndSearch(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//th[contains(.,'PA SN.')]")).click();
		Thread.sleep(3000);		
	}

	public void addTDS(String arg1) {
		driver.findElement(By.xpath("//input[@id='input_matpb_tds_masked_0']")).sendKeys(arg1);
	}

	public void addAmount(String arg1) {
		driver.findElement(By.xpath("//input[@id='input_matpb_masked_0']")).sendKeys(arg1);
		
	}

	public void clickPaymentApplication() {
		driver.findElement(By.xpath("(//div[@class='tile-body'])[4]")).click();
	}

}
