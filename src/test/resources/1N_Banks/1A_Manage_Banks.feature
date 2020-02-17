#Author: abuasif.nyk@gmail.com

Feature: User Do Manage Bank

#	Scenario: Successful Login with Valid Credentials
#		Given User is on Login page
#		When User enters "erp.maxgroup@gmail.com" into Username field
    #And User enters "123" into Password field
    #And User Click LogIn button
    #And User Login Successfully
#
#	Scenario: Select Role
#		Then User select Creator at CDA
#		Then click Confirm button

	Scenario: User going Manage Bank page
		And User Click Banks button
		Then User Click Manage Bank button
		Then User enters "testingBankName" into Bank Name field
		Then User enters "testingFullBankName" into Bank Full Name field
		Then User Click Submit button
		
	Scenario: User Verify Manage Data of Recently Managed Bank
		Then User Collect Data and Verify
		Then Delete it