#Author: abuasif.nyk@gmail.com

Feature: User Create New Bank Account

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
		
	Scenario: User going Add Bank Page
		And User Click Banks button
		Then User Click Add Bank button
		
	Scenario: User Fill the form
		Then User Click and select "ERP Admin" into Approver field
		Then User Click and select "Trust Bank" into Bank Name field
		Then User enter "112233445" into Account Number field
		Then User Click and select "SOD" into Account Type field
		Then User enters "Mohakhali, Dhaka" into Branch name field
		Then User enters "112233446" into Account Routing Number field
		
		Then User enters "Dhaka" into Branch Head Destination field
		Then User enters "Mohakhali, Dhaka" into Branch Address field
		Then User enters "01788888888" into Phone Number field
		Then User enters "asif@gmail.com" into Email field
		
		Then Click Submit button of Create Account
		
		
	Scenario: Verify The Created Status
		Then User Click All Project List button
		Then User Click SL No button
		Then User collect Account Status "created" and Verify
		
		
	Scenario: User Going to Approve New Created Bank Account
		Then User Click Dashboard button
		
		#scrollDown 2
		Then User Approve The created Account
		#scrollUp 2
		
		And User Click Banks button
		Then User Click All Project List button
		Then User enters "112233445" into Account Number Search field
		Then User collect Account Status "active" and Verify
		
		