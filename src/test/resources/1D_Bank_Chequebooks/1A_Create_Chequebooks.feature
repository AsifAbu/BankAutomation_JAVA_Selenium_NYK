#Author: abuasif.nyk@gmail.com

Feature: User going to Create Checkbook

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
	
	Scenario: User going to Create Cheque Book page
		When User Click Checkbooks button
		Then User Clicks Create Checkbook button
		
	Scenario: User Fillup Basic Info form
		When User Click Approver button and select Approver
		Then User Select "ERP Admin" as Signatory Authorities
		Then User set the DateMonth "0203" and Year "2020"
		
	Scenario: User Fillup Bank Account Info form
		When User Click Bank Name button and set "UCBL" bank
		Then User Click Bank Account button and set "0210589438" Account
		
	Scenario: User Fillup Check Leaf Info Form
		Then User enters "11111111" into Checkbook Number field
		Then User enters "1111111" into Starting Leaf Number field
		Then User enters "5" into Cheque Leaf Count field
		
		Then User Click CheckBookSubmit button