package com.maxBank.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentDriver;

public class Create_Bank_Cheque_Security extends ParentDriver{
	WebDriver driver = getDriver();

	public Create_Bank_Cheque_Security(WebDriver driver) {
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

	public void clickSecurityBtn() {
		driver.findElement(By.xpath("(//div[@class='tile-body'])[8]")).click();
		
	}

	public void clickPurposeOfChequeBtn() {
		driver.findElement(By.xpath("//a[@ng-click='accordion1 = !accordion1']")).click();
	}

	public void addPerposeOfChequeText(String arg1) {
		driver.findElement(By.xpath("//textarea[@name='check_purpose']")).sendKeys(arg1);
	}

	public void addChequeAmount(String arg1) {
		driver.findElement(By.xpath("//input[@name='amount']")).sendKeys(arg1);
	}
	

	public void clickChequeCategoryBtn() {
		driver.findElement(By.xpath("//input[@name='check_cat']")).click();
	}

	public void clickSecuritySubmitBtn() throws InterruptedException {
		driver.findElement(By.xpath("//button[contains(.,'Submit')]")).click();
		Thread.sleep(4000);
		driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
	}
    
}
