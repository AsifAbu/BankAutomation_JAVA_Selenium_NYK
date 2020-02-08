package com.maxBank.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentDriver;

public class Create_Cash_Withdrawal_Cheque extends ParentDriver{

	WebDriver driver = getDriver();
	
	public Create_Cash_Withdrawal_Cheque(WebDriver driver) {
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
	
    public void clickCashWithdrawalSubmitBtn() throws InterruptedException {
		driver.findElement(By.xpath("//button[contains(.,'Submit')]")).click();
		Thread.sleep(4000);
		driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
	}
    
    public void addAmount(String arg1) {
		driver.findElement(By.xpath("//input[@ng-model='createCheck.amountMasked']")).sendKeys(arg1);
		
	}

	public void addAccountHead(String arg1) throws InterruptedException {
		Thread.sleep(3000);
		driver.findElement(By.xpath("(//select[@name='cashHead'])/option[contains(.,'ID:19600 Cash in Hand Site')]")).click();
		Thread.sleep(3000);
	}
}
