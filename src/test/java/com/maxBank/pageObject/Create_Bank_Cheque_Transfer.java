package com.maxBank.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentDriver;

public class Create_Bank_Cheque_Transfer extends ParentDriver{
	WebDriver driver = getDriver();

	public Create_Bank_Cheque_Transfer(WebDriver driver) {
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

	public void clickTransferBtn() {
		driver.findElement(By.xpath("(//div[@class='tile-body'])[6]")).click();
	}
	

	public void clickTransferSelection() {
		driver.findElement(By.xpath("//a[@ng-click='accordion1 = !accordion1']")).click();
	}

	public void setTransferType(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//select[@name='transfer_type']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//option[contains(.,'"+arg1+"')]")).click();
	}

	public void setPaymentType(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//select[@name='transfer_payment_type']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//option[contains(.,'"+arg1+"')]")).click();
	}

	public void addAmount(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//input[@name='amount']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[@name='amount']")).sendKeys(arg1);
	}

	public void setProjectTo(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//select[@name='select_project_to']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("(//option[contains(.,'"+arg1+"')])[2]")).click();
	}

	public void clickTransferSubmit() throws InterruptedException {
		driver.findElement(By.xpath("//button[contains(.,'Submit')]")).click();
		Thread.sleep(4000);
		driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
	}

	public void clickIDBtn() {
		driver.findElement(By.xpath("//th[contains(.,'ID')]")).click();
	}

	public void addTotalAmount(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//input[@name='transfer_0']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[@name='transfer_0']")).sendKeys(arg1);
	}
}
