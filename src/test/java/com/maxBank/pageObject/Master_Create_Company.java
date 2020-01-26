package com.maxBank.pageObject;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.UUID;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.maxBank.framework.ParentDriver;

public class Master_Create_Company extends ParentDriver{
	
	WebDriver driver = getDriver();

	public Master_Create_Company(WebDriver driver) {
		this.driver = driver;
	}
	
	//Scroll down: 
    public void scrollDown() {
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,800)", "");
    }
	
	//Scroll Up :
    public void scrollUp() {
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,-800)", "");
    }

	public void ClickCompanyBtn() {
		driver.findElement(By.xpath("(//a[@class='nav-link nav-toggle'])[2]")).click();
	}
	
	public void ClickAddNewCompanyBtn() {
		driver.findElement(By.xpath("//a[@ui-sref='companyCreate']")).click();
	}
    
	public void userInAddNewCompanyPage() {
		
		String A = driver.getCurrentUrl();
		
		String B = "https://master.jomakhata.com/#/company/create";
		Assert.assertEquals(A, B);
	}
	String CompanyNameDemo,CompanyCodeDemo;
	public void addCompanyName(String arg1) {
		arg1 = UUID.randomUUID().toString();
		CompanyNameDemo = arg1;
		driver.findElement(By.xpath("//input[@id='companyName']")).sendKeys(arg1);
		
	}

	public void addCompanyCode(String arg1) throws FileNotFoundException, UnsupportedEncodingException {
		arg1 = UUID.randomUUID().toString();
		CompanyCodeDemo = arg1;
		PrintWriter writer = new PrintWriter("LocalStorage/NewCompanyData.txt", "UTF-8");
		writer.println(CompanyCodeDemo+"/"+CompanyNameDemo);
		writer.close();
		driver.findElement(By.xpath("//input[@id='companyId']")).sendKeys(arg1);
	}

	public void clickCityBtn() {
		driver.findElement(By.xpath("//span[@class='select2-selection select2-selection--single']")).click();
		
	}
	
	public void citySearch(String arg1) {
		driver.findElement(By.xpath("//input[@class='select2-search__field']")).sendKeys(arg1);
	}
	
	public void selectCity() {
		driver.findElement(By.xpath("//li[@class='select2-results__option select2-results__option--highlighted']")).click();
		
	}

	public void companyAddress(String arg1) {
		driver.findElement(By.xpath("//input[@id='companyAddress']")).sendKeys(arg1);		
	}

	public void establishDate() {
		driver.findElement(By.xpath("(//i[@class='fa fa-calendar'])[1]")).click();		
	}

	public void establishDateSelect() {
		driver.findElement(By.xpath("(//td[@class='day active'])[1]")).click();
	}

	public void companyAccNo(String arg1) {
		driver.findElement(By.xpath("//input[@id='companyAcNumber']")).sendKeys(arg1);
		
	}

	public void companyTreadLience(String arg1) {
		driver.findElement(By.xpath("//input[@id='tradeLicense']")).sendKeys(arg1);
		
	}

	public void taxDeductionAcc(String arg1) {
		driver.findElement(By.xpath("//input[@id='taxDeductionAc']")).sendKeys(arg1);
		
	}

	public void providedFundRegNo(String arg1) {
		driver.findElement(By.xpath("//input[@id='pfRegNumber']")).sendKeys(arg1);
		
	}
	
	public void fundRegDate() {
		driver.findElement(By.xpath("(//i[@class='fa fa-calendar'])[2]")).click();		
	}

	public void fundRegDateSelect() {
		driver.findElement(By.xpath("(//td[@class='day active'])[2]")).click();
	}

	public void gratuityRefNo(String arg1) {
		driver.findElement(By.xpath("//input[@id='gratuityRegNum']")).sendKeys(arg1);
		
	}

	public void retirementAge(String arg1) {
		driver.findElement(By.xpath("//input[@id='retirementAge']")).sendKeys(arg1);
		
	}

	public void contactPersonName(String arg1) {
		driver.findElement(By.xpath("//input[@id='contactPersonName']")).sendKeys(arg1);
		
	}

	public void contactPersionDesignation(String arg1) {
		driver.findElement(By.xpath("//input[@id='contactPersonDesignation']")).sendKeys(arg1);
		
	}

	public void website(String arg1) {
		driver.findElement(By.xpath("//input[@id='website']")).sendKeys(arg1);
		
	}

	public void companyEmail(String arg1) {
		driver.findElement(By.xpath("//input[@id='companyEmail']")).sendKeys(arg1);
		
	}

	public void telephoneNumber(String arg1) {
		driver.findElement(By.xpath("//input[@id='telephoneNum']")).sendKeys(arg1);
		
	}

	public void faxNumber(String arg1) {
		driver.findElement(By.xpath("//input[@id='faxNumber']")).sendKeys(arg1);
		
	}

	public void businessType(String arg1) {
		driver.findElement(By.xpath("//input[@id='businessType']")).sendKeys(arg1);
		
	}

	public void businessGroup(String arg1) {
		driver.findElement(By.xpath("//input[@id='businessGroup']")).sendKeys(arg1);
		
	}

	public void companyCatagory(String arg1) {
		driver.findElement(By.xpath("//input[@id='companyCategory']")).sendKeys(arg1);
		
	}

	public void remarks(String arg1) {
		driver.findElement(By.xpath("//textarea[@ng-model='createCompany.remarks']")).sendKeys(arg1);
		
	}

	public void createCompany() {
		driver.findElement(By.xpath("//button[contains(.,'Create Company')]")).click();
		
	}

	public void clickShowAllCompaniesBtn() {
		driver.findElement(By.xpath("//a[@ui-sref='companyList']")).click();
		
	}

	public void verifyShowAllCompaniesPage() {
		String A = driver.getCurrentUrl();
		
		String B = "https://master.jomakhata.com/#/company/List";
		Assert.assertEquals(A, B);
		
	}

	
	//save data in text file  
	
	public void verify_New_Company() throws IOException {
		String CompanyCodeSaved, CompanyNameSaved;
		
		String data = FileUtils.readFileToString(new File("LocalStorage/NewCompanyData.txt"), "UTF-8");
		String[] parts = data.trim().split("/");
		CompanyCodeSaved = parts[0].trim(); //previously saved in text when created
		CompanyNameSaved = parts[1].trim();
		
		driver.findElement(By.xpath("(//input[@ng-change='getallData(true)'])[4]")).sendKeys(CompanyNameSaved);
		
		//data collect from the list page
		String ComNameInList = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div/div/div/div[2]/div/table/tbody/tr[1]/td[3]/div/div")).getText();
		String ComCodeInList = driver.findElement(By.xpath("/html/body/div[4]/div[2]/div/div/div/div/div[2]/div/table/tbody/tr[1]/td[2]/div/div")).getText();
		
		//assert here of list data vs saved data in Master Module
		Assert.assertEquals(CompanyNameSaved, ComNameInList);
		Assert.assertEquals(CompanyCodeSaved, ComCodeInList);
	}

	public void Search_Designation_Title_UTF_For_New_Project() throws IOException, InterruptedException {
		String data = FileUtils.readFileToString(new File("LocalStorage/NewProjectData.txt"), "UTF-8");
		driver.findElement(By.xpath("//input[@name='searchDesignationTitle']")).sendKeys(data);
	}

	public void logoutMaster() {
		driver.findElement(By.xpath("//span[@class='username username-hide-on-mobile ng-binding']")).click();
		driver.findElement(By.xpath("//a[@ng-click='logout()']")).click();
	}
    
}
