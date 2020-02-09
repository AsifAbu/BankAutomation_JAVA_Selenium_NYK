package com.maxBank.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentDriver;

public class Create_CF_Payment extends ParentDriver{
	WebDriver driver = getDriver();

	public Create_CF_Payment(WebDriver driver) {
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

	public void clickLCPaymentBtn() {
		driver.findElement(By.xpath("(//div[@class='tile-body'])[3]")).click();
		
	}

	public void clickAmountSelection() {
		driver.findElement(By.xpath("//a[@ng-click='accordion1 = !accordion1']")).click();
	}

	public void setLCPaymentType(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//select[@name='lc_payment_type']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//option[contains(.,'"+arg1+"')]")).click();
	}

	public void setCDR_SL(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//input[@ng-model='filterCustomDutyRequisition.columns.id_custom_duty_requisitions[0].filterValue']")).sendKeys(arg1);	
		Thread.sleep(3000);
	}

	public void addTDS(String arg1) {
		driver.findElement(By.xpath("//input[@id='input_cdr_tds_masked_0']")).sendKeys(arg1);
		
	}

	public void addAmount(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//input[@id='input_lc_arranger_commission_tds_masked_0']")).sendKeys(arg1);
		Thread.sleep(1000);
		scrollDown();
	}

	public void setBankTo(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//select[@name='bank_to']")).sendKeys(arg1);
		Thread.sleep(2000);
		driver.findElement(By.xpath("//option[contains(.,'"+arg1+"')]")).click();
	}

	public void setbankToAccountNo(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//select[@name='account_to_no']")).sendKeys(arg1);
		Thread.sleep(2000);
		driver.findElement(By.xpath("//option[contains(.,'"+arg1+"')]")).click();
	}

	public void clickCDC() {
		driver.findElement(By.xpath("(//input[@name='check_date_type'])[1]")).click();
		
	}

	public void cfSubmitBtn() throws InterruptedException {
		driver.findElement(By.xpath("//button[contains(.,'Submit')]")).click();
		Thread.sleep(4000);
		driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
	}

	public void CandFType(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//select[@name='cnf_type']")).sendKeys(arg1);
		Thread.sleep(2000);
		driver.findElement(By.xpath("//option[contains(.,'"+arg1+"')]")).click();
		
	}
	
	
	
	
}
