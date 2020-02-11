#Author: abuasif.nyk@gmail.com
#
#Feature: User create Emergency Cheque
#
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
#
#	#For Head Office
#	Scenario: User going create Cheque page
#		And User Click Cheque button
#		Then User Click Create Cheque button
#		Then User Click Emergency button
#		
#		Then User Click Location & Purpose of Cheque Selection button
#		Then User Click Select Location type field and select "Head Office" 
#		Then User enters "for Testing" in Purpose of Cheque field
#	
#		Scenario: User Fillup Bank Information section
#			Then User Click Bank Select and select "Trust Bank"
#			Then User Click Account No field and select "0210589481"
#			Then User Click select Chequebook and select "1122"	
			
			
#Up all done
#have to Correction Under from here----------------------
			
			
#		Scenario: User Fillup Cheque Information section
#			Then User Click Beneficiary Name and select "Asad & Co"
#			Then User Click Cheque Category field and select Bearer Cheque
#			Then User Click Cheque Auditor field and select "ERP Admin"
#			Then User Click Signatory Authority field and select "ERP Admin"
#			Then User Click C&F Payment Submit button
#			
#		Scenario: Verify Data of C&F Payment Cheque
#			Then User Collect Total Amount Data and Verify
#			Then User Collect Beneficiary Name and Verify
#			Then User Collect Bank name and Verify
#			Then User Collect Account Data and Verify
#			Then User Collect "Check Request Created" Status and Verify
#		
#		Scenario: Approve C&F Payment Cheque
#			When User Click Select User button for Auditor
#			#1scrollDown
#			Then User Click Review button
#			#1Scrollup
#			Then User Collect "Cheque Request Reviewed" Status and Verify
#			When User Click Select User button for Creator
#			#1scrollDown
#			Then User Click Print button
#			Then User Close New Tab
#			Then User Click Confirm button
#			Then User Collect "Cheque Printed" Status and Verify
#			When User Click Select User button for Cheque Approver
#			#1scrollDown
#			Then User Click Approve button
#			Then User Collect "Cheque Request Approved" Status and Verify
#			#1scrollUp
#			When User Click Select User button for Creator
#			#2scrollDown
#			Then User Click Deliver button
#			Then User enters "Asif" into Cheque Recever name field
#			Then User enters "01899999999" into Recever phone Number field
#			Then User Click Confirm Delevery button
#			Then User Collect "Check Delivered" Status and Verify
#			Then User Click Complete button
#			
#			################################################
#		#For Third Party C&F
#		Scenario: User going create Cheque page
#			And User Click Cheque button
#			Then User Click Create Cheque button
#			Then User Click LC Payments button
#			Then User Click Amount Selection button
#			Then User Click LC Payment type field and select "C&F Payment" 
#			Then User Click C&F Type field and select "Third Party C&F"
#			Then User Click Vendor List field and select "Regal Sports"
#			Then User Click CDR SL field and search "116"
#			Then User enters "1" in first row TDS field in LC Payment Bill
#			Then User enters "5" in first row Amount field LC Payment Bill
#	
#		Scenario: User Fillup Bank Information section
#			Then User Click Bank Select and select "Trust Bank"
#			Then User Click Account No field and select "0210589481"
#			Then User Click select Chequebook and select "1122"	
#			
#		Scenario: User Fillup Cheque Information section
#			Then User Click Cheque Date CDC
#			Then User Click Beneficiary Name and select "Asad & Co"
#			Then User Click Cheque Category field and select Bearer Cheque
#			Then User Click Cheque Auditor field and select "ERP Admin"
#			Then User Click Signatory Authority field and select "ERP Admin"
#			Then User Click C&F Payment Submit button
#			
#		Scenario: Verify Data of C&F Payment Cheque
#			Then User Collect Total Amount Data and Verify
#			Then User Collect Beneficiary Name and Verify
#			Then User Collect Bank name and Verify
#			Then User Collect Account Data and Verify
#			Then User Collect "Check Request Created" Status and Verify
#		
#		Scenario: Approve C&F Payment Cheque
#			When User Click Select User button for Auditor
#			#1scrollDown
#			Then User Click Review button
#			#1Scrollup
#			Then User Collect "Cheque Request Reviewed" Status and Verify
#			When User Click Select User button for Creator
#			#1scrollDown
#			Then User Click Print button
#			Then User Close New Tab
#			Then User Click Confirm button
#			Then User Collect "Cheque Printed" Status and Verify
#			When User Click Select User button for Cheque Approver
#			#1scrollDown
#			Then User Click Approve button
#			Then User Collect "Cheque Request Approved" Status and Verify
#			#1scrollUp
#			When User Click Select User button for Creator
#			#2scrollDown
#			Then User Click Deliver button
#			Then User enters "Asif" into Cheque Recever name field
#			Then User enters "01899999999" into Recever phone Number field
#			Then User Click Confirm Delevery button
#			Then User Collect "Check Delivered" Status and Verify
#			Then User Click Complete button