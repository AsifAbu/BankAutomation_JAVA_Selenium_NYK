package com.maxBank.glue;

import org.openqa.selenium.WebDriver;

import com.maxBank.framework.ParentScenario;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class Create_Cash_Withdrawal_Cheque_StepDef extends ParentScenario{

	WebDriver driver = getDriver();
	
	@Before
    public void beforeScenario() throws Throwable {
        startBrowser();
    }
	
	@Then("^User enters \"([^\"]*)\" in Check Amount field$")
	public void user_enters_in_Check_Amount_field(String arg1) throws Throwable {
	    Thread.sleep(3000);
	    create_cash_withdrawal_cheque.addAmount(arg1);
	}

	@Then("^User enters \"([^\"]*)\" in Account Cash Head field$")
	public void user_enters_in_Account_Cash_Head_field(String arg1) throws Throwable {
		Thread.sleep(3000);
	    create_cash_withdrawal_cheque.addAccountHead(arg1);
	}

	@Then("^User Click Cash Withdrawal Submit button$")
	public void user_Click_Cash_Withdrawal_Submit_button() throws Throwable {
		Thread.sleep(3000);
	    create_cash_withdrawal_cheque.clickCashWithdrawalSubmitBtn();
	}
}
