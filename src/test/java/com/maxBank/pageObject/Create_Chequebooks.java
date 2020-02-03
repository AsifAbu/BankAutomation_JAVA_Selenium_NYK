package com.maxBank.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentDriver;

public class Create_Chequebooks extends ParentDriver{
	WebDriver driver = getDriver();

	public Create_Chequebooks(WebDriver driver) {
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
	
	public void clickCheckbooksBtn() {
		driver.findElement(By.xpath("//a[contains(.,'Chequebooks')]")).click();
		
	}

	public void clickCreateCheckbooksBtn() {
		driver.findElement(By.xpath("//span[contains(.,'Create Chequebook')]")).click();
		
	}

	public void setApprover() throws InterruptedException {
		driver.findElement(By.xpath("//select[@ng-model='checkBook.approved_by']")).click();
		Thread.sleep(3000);
		driver.findElement(By.xpath("(//option[contains(.,'ERP Admin')])[1]")).click();
	}

	public void setSignatoryAuthorities(String arg1) {
		driver.findElement(By.xpath("(//option[contains(.,'ERP Admin')])[2]")).click();		
	}

	public void setDate(String arg1, String arg2) throws InterruptedException {
		driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div[2]/div/div[2]/form/div[1]/div[3]/div/div/input")).sendKeys(arg1);
		Thread.sleep(1000);
		driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div[2]/div/div[2]/form/div[1]/div[3]/div/div/input")).sendKeys(Keys.ARROW_RIGHT);
		Thread.sleep(1000);
		driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div[2]/div/div[2]/form/div[1]/div[3]/div/div/input")).sendKeys(arg2);
		Thread.sleep(1000);
		
	}

	public void setBankName(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//select[@ng-model='checkBook.id_banks']")).click();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//option[contains(.,'"+arg1+"')]")).click();
		Thread.sleep(1000);
	}

	public void setBankAccNo(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//select[@ng-model='checkBook.id_project_accounts']")).click();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//option[contains(.,'"+arg1+"')]")).click();
		Thread.sleep(2000);
	}

	public void addChequeBookNumber(String arg1) {
		driver.findElement(By.xpath("//input[@name='checkbook_number']")).sendKeys(arg1);
		
	}

	public void addStartingLeafNo(String arg1) {
		driver.findElement(By.xpath("//input[@name='starting_leaf_no']")).sendKeys(arg1);
		
	}

	public void addLeafCount(String arg1) {
		driver.findElement(By.xpath("//input[@name='leaf_count']")).sendKeys(arg1);
		
	}

	public void clickSubmitBtn() {
		scrollDown();
		driver.findElement(By.xpath("//button[contains(.,'Submit')]")).click();
		scrollUp();
		scrollUp();
		scrollUp();
		
	}
	
}
