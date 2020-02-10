package com.maxBank.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentDriver;

public class Create_Arrenger_Commission extends ParentDriver{
	WebDriver driver = getDriver();

	public Create_Arrenger_Commission(WebDriver driver) {
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
    
    public void searchByArrangerCommNO(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//input[@ng-model='filterLCArrangerCommission.columns.id_arranger_commissions[0].filterValue']")).sendKeys(arg1);
		Thread.sleep(3000);
		
	}

	

	public void addAmount(String arg1) {
		driver.findElement(By.xpath("//input[@id='input_lc_arranger_commission_masked_0']")).sendKeys(arg1);
		
	}
	
	public void clickType(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//select[@name='lc_payment_type']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//option[contains(.,'"+arg1+"')]")).click();
		
	}
	
}
