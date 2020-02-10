package com.maxBank.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentDriver;

public class Create_Freight_Charge extends ParentDriver{
	WebDriver driver = getDriver();

	public Create_Freight_Charge(WebDriver driver) {
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

	public void searchByFreightChargeNo(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//input[@ng-model='filterLCFreightCharge.columns.id_freight_charges[0].filterValue']")).sendKeys(arg1);
		Thread.sleep(3000);
	}

	public void addAmount(String arg1) {
		driver.findElement(By.xpath("//input[@id='input_lc_frieght_charge_masked_0']")).sendKeys(arg1);
		
	}
	
}
