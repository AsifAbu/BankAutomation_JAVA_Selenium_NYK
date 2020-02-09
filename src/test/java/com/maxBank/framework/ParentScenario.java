package com.maxBank.framework;

import org.openqa.selenium.WebDriver;

import com.maxBank.pageObject.Approve_Beneficiary;
import com.maxBank.pageObject.Approve_Chequebook;
import com.maxBank.pageObject.Bank_Create_Beneficiary;
import com.maxBank.pageObject.Bank_Logout;
import com.maxBank.pageObject.Company_Verify;
import com.maxBank.pageObject.Create_Advance_Slip;
import com.maxBank.pageObject.Create_Arrenger_Commission;
import com.maxBank.pageObject.Create_CF_Payment;
import com.maxBank.pageObject.Create_Cash_Withdrawal_Cheque;
import com.maxBank.pageObject.Create_Chequebooks;
import com.maxBank.pageObject.Create_Freight_Charge;
import com.maxBank.pageObject.Create_Insurance_Payment;
import com.maxBank.pageObject.Create_Material_Purchase_Bill;
import com.maxBank.pageObject.Create_Material_Requisition_Payments_Cheque;
import com.maxBank.pageObject.Create_NonRequisition_Entries_Cheque;
import com.maxBank.pageObject.Create_NonStore_Advance_Bill;
import com.maxBank.pageObject.Create_NonStore_Purchase_Bill;
import com.maxBank.pageObject.Create_Transport_Bill;
import com.maxBank.pageObject.Create_Without_Advance_Requisition_Payments_Cheque;
//import com.maxBank.pageObject.Bank_Dashboard;
import com.maxBank.pageObject.Login;
import com.maxBank.pageObject.Master_Create_Company;
import com.maxBank.pageObject.Master_Create_Project;
import com.maxBank.pageObject.Master_Login;
import com.maxBank.pageObject.Project_Verify;
import com.maxBank.pageObject.Verify_Beneficiary;
import com.maxBank.pageObject.Verify_Chequebook;

public class ParentScenario extends ParentDriver{
	
	WebDriver driver = getDriver();
	
	public Login LogIn;
	//public Bank_Dashboard bank_dashboard;
	public Bank_Logout bank_logout;
	public Master_Login master_login;
	public Master_Create_Company master_create_company;
	public Company_Verify company_verify;
	public Master_Create_Project master_create_project;
	public Project_Verify project_verify;
	public Bank_Create_Beneficiary bank_create_beneficiary;
	public Verify_Beneficiary verify_beneficiary;
	public Approve_Beneficiary approve_beneficiary;
	public Create_Chequebooks create_checkbooks;
	public Verify_Chequebook verify_chequebook;
	public Approve_Chequebook approve_chequebook;
	public Create_Material_Requisition_Payments_Cheque create_meterial_requisition_payments;
	public Create_NonRequisition_Entries_Cheque create_nonrequisition_entries_cheque;
	public Create_Without_Advance_Requisition_Payments_Cheque create_without_advanced_requisition_payments_cheque;
	public Create_Cash_Withdrawal_Cheque create_cash_withdrawal_cheque;
	
	public Create_NonStore_Advance_Bill create_nonstore_advance_bill;
	public Create_Advance_Slip create_advance_slip;
	public Create_Material_Purchase_Bill create_material_purchase_bill;
	public Create_NonStore_Purchase_Bill create_nonstore_purchase_bill;
	
	public Create_CF_Payment create_cf_payment;
	public Create_Transport_Bill create_transport_bill;
	public Create_Insurance_Payment create_insurance_payment;
	public Create_Arrenger_Commission create_arrenger_commission;
	public Create_Freight_Charge create_freight_charge;
	
	
	public void startBrowser() {
		
		LogIn = new Login(driver);
		//bank_dashboard = new Bank_Dashboard(driver);
		bank_logout = new Bank_Logout(driver);
		master_login = new Master_Login(driver);
		master_create_company = new Master_Create_Company(driver);
		company_verify = new Company_Verify(driver);
		master_create_project = new Master_Create_Project(driver);
		project_verify = new Project_Verify(driver);
		bank_create_beneficiary = new Bank_Create_Beneficiary(driver);
		verify_beneficiary = new Verify_Beneficiary(driver);
		approve_beneficiary = new Approve_Beneficiary(driver);
		create_checkbooks = new Create_Chequebooks(driver);
		verify_chequebook = new Verify_Chequebook(driver);
		approve_chequebook = new Approve_Chequebook(driver);
		create_meterial_requisition_payments = new Create_Material_Requisition_Payments_Cheque(driver);
		create_nonrequisition_entries_cheque = new Create_NonRequisition_Entries_Cheque(driver);
		create_without_advanced_requisition_payments_cheque = new Create_Without_Advance_Requisition_Payments_Cheque(driver);
		create_cash_withdrawal_cheque = new Create_Cash_Withdrawal_Cheque(driver);
		
		create_nonstore_purchase_bill = new Create_NonStore_Purchase_Bill(driver);
		create_material_purchase_bill = new Create_Material_Purchase_Bill(driver);
		create_advance_slip = new Create_Advance_Slip(driver);
		create_nonstore_advance_bill = new Create_NonStore_Advance_Bill(driver);
		
		create_cf_payment = new Create_CF_Payment(driver);
		create_transport_bill = new Create_Transport_Bill(driver);
		create_insurance_payment = new Create_Insurance_Payment(driver);
		create_arrenger_commission = new Create_Arrenger_Commission(driver);
		create_freight_charge = new Create_Freight_Charge(driver);
		
		
		
		
		
		
		
	}
	 
	    public void navigateTo() {
	    	driver.navigate().to("https://bank.jomakhata.com");
	    }
	    
	    
	    public void navigateToMasterModule() {
	    	driver.navigate().to("https://login.jomakhata.com/login/index/aHR0cHM6Ly9tYXN0ZXIuam9tYWtoYXRhLmNvbS8%3D");
	    }

}
