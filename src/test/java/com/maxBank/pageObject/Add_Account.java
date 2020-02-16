package com.maxBank.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.maxBank.framework.ParentDriver;

public class Add_Account extends ParentDriver{

	WebDriver driver = getDriver();
	
	public Add_Account(WebDriver driver) {
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

	public void clickAddBankBtn() {
		driver.findElement(By.xpath("//a[contains(.,'Add Account')]")).click();
	}

	public void setApprover(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//select[@name='approved_by']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//option[contains(.,'"+arg1+"')]")).click();
	}

	public void setBankName(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//select[@name='id_banks']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//option[contains(.,'"+arg1+"')]")).click();
	}

	public void setAccountNumber(String arg1) {
		driver.findElement(By.xpath("//input[@name='account_number']")).sendKeys(arg1);
	}

	public void setAccountType(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//select[@name='account_type']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//option[contains(.,'"+arg1+"')]")).click();
	}

	public void setBranchName(String arg1) {
		driver.findElement(By.xpath("//input[@name='branch_name']")).sendKeys(arg1);
	}

	public void setRoutingNumber(String arg1) {
		driver.findElement(By.xpath("//input[@name='routing_number']")).sendKeys(arg1);
	}

	public void setHeadDestination(String arg1) {
		driver.findElement(By.xpath("//input[@name='branch_head']")).sendKeys(arg1);
	}

	public void setBranchAddress(String arg1) {
		driver.findElement(By.xpath("//input[@name='branch_address']")).sendKeys(arg1);
	}

	public void setPhoneNumber(String arg1) {
		driver.findElement(By.xpath("//input[@name='account_phone_number']")).sendKeys(arg1);
	}

	public void setEmail(String arg1) {
		driver.findElement(By.xpath("//input[@name='account_email']")).sendKeys(arg1);
	}

	public void clickSubmitBtn() throws InterruptedException {
		driver.findElement(By.xpath("//button[contains(.,'Submit')]")).click();
		Thread.sleep(2000);
		scrollUp();
		Thread.sleep(2000);
		scrollUp();
	}

	public void clickProjectListBtn() {
		driver.findElement(By.xpath("//a[contains(.,'All Project Account List')]")).click();
	}

	public void verifyStatus(String arg1) throws InterruptedException {
		String status = driver.findElement(By.xpath("(//tr[@class='ng-scope'])[1]/td[@class='ng-binding'][13]")).getText();
		Thread.sleep(3000);
		Assert.assertEquals(status, arg1);
	}

	public void clickDashborad() throws InterruptedException {
		driver.findElement(By.xpath("//a[contains(.,'Dashboard')]")).click();
		Thread.sleep(2000);
		scrollDown();
		Thread.sleep(2000);
		scrollDown();
	}
	

	public void clickApproveBtn() throws InterruptedException {
		driver.findElement(By.xpath("//button[@ng-click='approve_others(value.id,value.type)']")).click();
		Thread.sleep(2000);
		scrollUp();
		Thread.sleep(2000);
		scrollUp();
	}

	public void searchByAccountNo(String arg1) {
		driver.findElement(By.xpath("(//input[@ng-change='columnSearch()'])[4]")).sendKeys(arg1);
	}

}
