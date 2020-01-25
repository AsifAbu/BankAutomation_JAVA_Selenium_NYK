#Author: abuasif.nyk@gmail.com

Feature: User goig to Verify New Project
	Scenario: Successful Login with Valid Credentials
		Given User is on Login page
		When User enters "erp.maxgroup@gmail.com" into Master_name field
    And User enters "123" into Master_Password field
    And User Click LogIn button
    And User Login Successfully

	Scenario: Select Role
		Then User select Creator at CDA
		Then click Confirm button
		
	Scenario: User going to Project List and Collect Data Fixed Budget
		When User Click on Project List button
		Then User Collect the Recent Created Project Data Fixed Budget
	
	Scenario: User going to Project List and Collect Data Recurring Budget
		Given User is on Login page
		Then User select Creator at CDA
		Then click Confirm button
		When User Click on Project List button
		Then User Collect the Recent Created Project Data Recurring Budget