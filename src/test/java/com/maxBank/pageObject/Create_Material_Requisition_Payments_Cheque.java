package com.maxBank.pageObject;

import java.util.ArrayList;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.maxBank.framework.ParentDriver;

public class Create_Material_Requisition_Payments_Cheque extends ParentDriver{

	WebDriver driver = getDriver();
	
	public Create_Material_Requisition_Payments_Cheque(WebDriver driver) {
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
    
//    public void statusScrollDown() {        
//        WebElement scroll = driver.findElement(By.xpath("(//div[@class='slimScrollBar'])[1]"));
//        scroll.sendKeys(Keys.PAGE_DOWN);
//    }
	public void clickChequeBtn() {
		driver.findElement(By.xpath("//a[contains(.,'Cheques')]")).click();
		
	}

	public void clickCreatCheckBtn() {
		driver.findElement(By.xpath("(//a[contains(.,'Create Cheque')])[2]")).click();
		
	}

	public void clickRegularBOBtn() {
		driver.findElement(By.xpath("(//div[contains(.,'Regular BO')])[8]")).click();
		
	}

	public void clickVendorAmountSelectionBtn() {
		driver.findElement(By.xpath("//a[contains(.,'Vendor & Amount Selection')]")).click();
		
	}

	public void clickAndSelectRequiitionType(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//select[@name='vendor_type']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//option[contains(.,'"+arg1+"')]")).click();
		
	}

	public void clickAndSelectVendor(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//input[@name='vendor_name']")).sendKeys(arg1);
		Thread.sleep(2000);
		driver.findElement(By.xpath("//li[contains(.,'"+arg1+"')]")).click();
	}

	public void clickIDRequisitionBtn() throws InterruptedException {
		driver.findElement(By.xpath("//th[contains(.,'ID Requisition')]")).click();
		
	}

	public void addTDS(String arg1) throws InterruptedException {
		scrollDown();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//input[@id='input_reg_tds_masked_0']")).sendKeys(arg1);
		
	}

	public void addVDS(String arg1) {
		driver.findElement(By.xpath("//input[@id='input_reg_vds_masked_0']")).sendKeys(arg1);
		
	}

	public void addAmount(String arg1) {
		driver.findElement(By.xpath("//input[@id='input_reg_masked_0']")).sendKeys(arg1);
		
	}

	public void selectBank(String arg1) throws InterruptedException {
		scrollDown();
		scrollDown();
		scrollDown();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//input[@name='bank_name']")).sendKeys(arg1);
		Thread.sleep(2000);
		driver.findElement(By.xpath("//li[contains(.,'"+arg1+"')]")).click();
		
	}

	public void setAccountNo(String arg1) throws InterruptedException {
		scrollDown();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[@name='account_no']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//li[contains(.,'"+arg1+"')]")).click();
		
	}

	public void setChequebook(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//input[@name='checkbook_no']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//li[contains(.,'"+arg1+"')]")).click();
		scrollDown();
		Thread.sleep(2000);
		scrollDown();
	}

	public void setBeneficiaryName(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//input[@name='beneficiary_name']")).sendKeys(arg1);
		Thread.sleep(2000);
		driver.findElement(By.xpath("(//li[contains(.,'"+arg1+"')])[1]")).click();
		
	}

	public void selectBearerCheque() {
		driver.findElement(By.xpath("//input[@value='bearer']")).click();
		
	}

	public void setChequeAuditor(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//input[@name='check_auditor_name']")).sendKeys(arg1);
		Thread.sleep(2000);
		driver.findElement(By.xpath("(//li[contains(.,'"+arg1+"')])[2]")).click();
	}
	
	public void setSignatoryAuthority(String arg1) throws InterruptedException {
		driver.findElement(By.xpath("//input[@name='sig_auth_name']")).sendKeys(arg1);
		Thread.sleep(2000);
		driver.findElement(By.xpath("(//li[contains(.,'"+arg1+"')])[2]")).click();
	}

	public void clickMaterialRequisitionSubmitBtn() throws InterruptedException {
		driver.findElement(By.xpath("//button[contains(.,'Submit')]")).click();
		Thread.sleep(4000);
		driver.findElement(By.xpath("//button[contains(.,'OK')]")).click();
	}
	
	public void setUserAsAuditor() throws InterruptedException {
		scrollUp();
		scrollUp();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//button[@class='btn red-haze btn-sm dropdown-toggle']")).click();     //click the red button
		Thread.sleep(3000);
		driver.findElement(By.xpath("//input[@ng-model='roleSearch']")).sendKeys("cda");   //search with cda
		Thread.sleep(3000);
		driver.findElement(By.xpath("//a[contains(.,'Auditor at CDA')]")).click();    //select approver role
		Thread.sleep(3000);
		
	}

	public void collectTotalAmountDataAndVerify() throws InterruptedException{
		String getTotalAmount = driver.findElement(By.xpath("(//td[@class='ng-binding'])[1]")).getText();
		Thread.sleep(3000);
		
		Assert.assertEquals(getTotalAmount, "5");
	}

	public void CollectBeneficiaryNameAndVerify() throws InterruptedException {
		String getBeneficiaryName = driver.findElement(By.xpath("(//td[@class='ng-binding'])[2]")).getText();
		Thread.sleep(3000);
		Assert.assertEquals(getBeneficiaryName, "Asad & Co");
	}

	public void CollectBankNameAndVerify() throws InterruptedException {
		String getBankName = driver.findElement(By.xpath("(//td[@class='ng-binding'])[3]")).getText();
		Thread.sleep(3000);
		Assert.assertEquals(getBankName, "Trust Bank , Mohakhali");
	}

	public void CollectAccountDataAndVerify() throws InterruptedException {
		String getAccountData = driver.findElement(By.xpath("(//td[@class='ng-binding'])[4]")).getText();
		Thread.sleep(3000);
		Assert.assertEquals(getAccountData, "0210589481");
	}

	public void statusVerify(String arg1) throws InterruptedException {
		//scrollDown();
		Thread.sleep(4000);
		String getStatus = driver.findElement(By.xpath("(//span[@class='timeline-body-alerttitle font-red-intense ng-binding'])[contains(.,'"+arg1+"')]")).getText();
		Thread.sleep(3000);
		Assert.assertEquals(getStatus, arg1);
	}

	public void CollectTDSDataAndVerify() throws InterruptedException {
		scrollDown();
		Thread.sleep(2000);
		scrollDown();
		Thread.sleep(2000);
		String getTDS = driver.findElement(By.xpath("(//td[@class='ng-binding'])[15]")).getText();
		Thread.sleep(3000);
		Assert.assertEquals(getTDS, "1");
	}

	public void CollectVDSDataAndVerify() throws InterruptedException {
		String getVDS = driver.findElement(By.xpath("(//td[@class='ng-binding'])[16]")).getText();
		Thread.sleep(3000);
		Assert.assertEquals(getVDS, "2");
	}

	public void CollectTotalAmountAndVerify() throws InterruptedException {
		String getTotalAmount = driver.findElement(By.xpath("(//td[@class='ng-binding'])[17]")).getText();
		Thread.sleep(3000);
		Assert.assertEquals(getTotalAmount, "5");
		
	}

	public void ClickReviewButton() throws InterruptedException {
		scrollDown();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//button[contains(.,'Review')]")).click();
		Thread.sleep(2000);
		scrollUp();
		
	}

	public void clickPrintBtn() throws InterruptedException {
		scrollDown();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//button[contains(.,'Print')]")).click();
		
	}

	public void closeTab1() throws InterruptedException {
		Thread.sleep(2000);
		//Create an ArrayList and store the open tabs
		ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
		Thread.sleep(2000);
		//below code will switch to new tab
		driver.switchTo().window(tabs.get(1));
		Thread.sleep(2000);
		//perform whatever actions you want in new tab then close it
		driver.close();
		Thread.sleep(2000);
		//Switch back to your original tab
		driver.switchTo().window(tabs.get(0));
		Thread.sleep(2000);
	}

	public void clickChequePrintConfirmBtn() throws InterruptedException {
		driver.findElement(By.xpath("//button[contains(.,'CONFIRM')]")).click();
		Thread.sleep(2000);
		scrollUp();
	}

	public void clickApproveBtn() throws InterruptedException {
		scrollDown();
		Thread.sleep(2000);
		driver.findElement(By.xpath("(//button[contains(.,'Approve')])[2]")).click();
	}

	public void clickDeliverBtn() throws InterruptedException {
		scrollDown();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//button[contains(.,'Deliver')]")).click();
		
	}

	public void setChequeReceverName(String arg1) {
		driver.findElement(By.xpath("//input[@name='receiver_name']")).sendKeys(arg1);
		
	}

	public void setReceverPhoneNumber(String arg1) {
		driver.findElement(By.xpath("//input[@name='receiver_phone']")).sendKeys(arg1);
		
	}

	public void clickConfirmDeleverBtn() throws InterruptedException {
		driver.findElement(By.xpath("//button[contains(.,'CONFIRM DELIVERY')]")).click();
		Thread.sleep(3000);
		scrollUp();
		Thread.sleep(3000);
		scrollUp();
		Thread.sleep(3000);
		scrollUp();
		Thread.sleep(3000);
		scrollUp();
	}

	public void clickCompleteChequeBtn() throws InterruptedException {
		driver.findElement(By.xpath("//button[contains(.,'Complete')]")).click();
		Thread.sleep(3000);
		scrollUp();
		Thread.sleep(3000);
		scrollUp();
		Thread.sleep(3000);
		scrollUp();
	}

	public void setUserAsApproverCheque() throws InterruptedException {
		driver.findElement(By.xpath("//button[@class='btn red-haze btn-sm dropdown-toggle']")).click();     //click the red button
		Thread.sleep(3000);
		driver.findElement(By.xpath("//input[@ng-model='roleSearch']")).sendKeys("cda");   //search with cda
		Thread.sleep(3000);
		driver.findElement(By.xpath("//a[contains(.,'Approver at CDA')]")).click();    //select approver role
		Thread.sleep(3000);
	}
	
	
}

