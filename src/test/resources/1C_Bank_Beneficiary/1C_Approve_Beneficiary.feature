#Author: abuasif.nyk@gmail.com

Feature: User Approve Beneficiary
	
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
		
	Scenario: Select User to Approver
		When User Click Select User button for Approver
		#Then User enters "cda" into search field
		#Then User Click "Approver at CDA" button  		
		#double scroll down will apper here
		Then User Click checked button for Approve Request first row
		#Scroll up 2 times
		Then User Click Select User button for Creator
		Then User Click Beneficiary List button
		Then User Click SL No button
		Then User Verify the status is "active" for that Beneficiary		
		
	Scenario: User going to Create New Beneficiary of TDS Type
		Then User Click Create Beneficiary button
  	When User Click Benificiary Type field
  	Then User select TDS Type	
  	And User Select "ERP Admin" At Approver Option
  	Then User enters "AsifBenificiary-TDS" into Beneficiary Name field
  	Then User enters "asifbeneficiary@gmail.com" into Beneficiary Email field
  	Then User enters "01799999999" into beneficiary Phone field
  	Then User Click Submit button
  	
  Scenario: Select User to Approver
		When User Click Select User button for Approver
		#Then User enters "cda" into search field
		#Then User Click "Approver at CDA" button  		
		#double scroll down will apper here
		Then User Click checked button for Denaid Request first row
		#Scroll up 2 times
		Then User Click Select User button for Creator
		Then User Click Beneficiary List button
		Then User Click SL No button
		Then User Verify the status is "denied" for that Beneficiary