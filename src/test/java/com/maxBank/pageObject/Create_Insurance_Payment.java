package com.maxBank.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentDriver;

public class Create_Insurance_Payment extends ParentDriver{
	WebDriver driver = getDriver();

	public Create_Insurance_Payment(WebDriver driver) {
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
    public void searchByInsuranceCoverageNo(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//input[@ng-model='filterLCInsurance.columns.id_insurance_coverages[0].filterValue']")).sendKeys(arg1);
		Thread.sleep(3000);
		
	}

	public void addTDS(String arg1) {
		driver.findElement(By.xpath("//input[@id='input_lc_insurance_tds_masked_0']")).sendKeys(arg1);
		
	}

	public void addAmount(String arg1) {
		driver.findElement(By.xpath("//input[@id='input_lc_insurance_masked_0']")).sendKeys(arg1);
		
	}
}
