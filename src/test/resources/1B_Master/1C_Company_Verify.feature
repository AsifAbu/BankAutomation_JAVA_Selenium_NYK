#Author: abuasif.nyk@gmail.com

Feature: User goig to Verify New Company

	Scenario: Successful Login with Valid Credentials
		Given User is on Login page
    And User Login Successfully

	Scenario: Select Role
		Then User select Creator at CDA
		Then click Confirm button
		
	Scenario: User going to Company List and Collect Data page
		When User Click on Company List button
		Then User Collect the Recent Created Company Data
		
	Scenario: User is going to Log Out
		Then User click on profile button
		Then User click again click on Log Out button
	
	Scenario: Successful Login with Valid Credentials in Master Module
		Given User is on Master_LogIn page
		When User enters "erp.maxgroup@gmail.com" into Master_name field
    And User enters "123" into Master_Password field
    And User Click Master_LogIn button
    And User Master_Login Successfully