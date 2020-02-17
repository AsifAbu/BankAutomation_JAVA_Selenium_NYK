#Author: abuasif.nyk@gmail.com

Feature: User create TDS Cheque

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

	Scenario: User going create Cheque page
		And User Click Cheque button
		Then User Click Create Cheque button
		Then User Click TDS&VDS button
		Then User Click COmpany, TDS Type & Amount Selection button
		
	Scenario: For TDS Type
		Then User Click Select Cheque Type button and select "TDS"

#For TDS, Vendor Type
#	Scenario: For Vendor TDS Type
#		Then User Click select TDS Type and select "Vendor TDS"
#		Then User Click ID Requisition
#		Then User Click Amount nbutton in first row
#	
#	Scenario: User Fillup Bank Information section
#		Then User Click Bank Select and select "Trust Bank"
#		Then User Click Account No field and select "0210589481"
#		Then User Click select Chequebook and select "1122"
#
#		
#	Scenario: User Fillup Cheque Information section
#		Then User Click Cheque Date CDC
#		Then User Click Beneficiary Name and select "Munnu Traders"
#		Then User Click Cheque Category field and select Bearer Cheque
#		Then User Click Cheque Auditor field and select "ERP Admin"
#		Then User Click Signatory Authority field and select "ERP Admin"
#		Then User Click TDS Submit button
#		
#	Scenario: Verify Data of Transfer Cheque
#		Then User Collect "Check Request Created" Status and Verify
#	
#	Scenario: Approve Transfer Cheque
#		When User Click Select User button for Auditor
#		#1scrollDown
#		Then User Click Review button
#		#1Scrollup
#		Then User Collect "Cheque Request Reviewed" Status and Verify
#		When User Click Select User button for Creator
#		#1scrollDown
#		Then User Click Print button
#		Then User Close New Tab
#		Then User Click Confirm button
#		Then User Collect "Cheque Printed" Status and Verify
#		When User Click Select User button for Cheque Approver
#		#1scrollDown
#		Then User Click Approve button
#		Then User Collect "Cheque Request Approved" Status and Verify
#		#1scrollUp
#		When User Click Select User button for Creator
#		#2scrollDown
#		Then User Click Deliver button
#		Then User enters "Asif" into Cheque Recever name field
#		Then User enters "01899999999" into Recever phone Number field
#		Then User Click Confirm Delevery button
#		Then User Collect "Check Delivered" Status and Verify
		
		
#For TDS, Fund Payment TDS Type
#	Scenario: For Vendor TDS Type
#		Then User Click select TDS Type and select "Fund Payment TDS"
#		Then User Click ID Requisition
#		Then User Click Amount nbutton in first row
#	
#	Scenario: User Fillup Bank Information section
#		Then User Click Bank Select and select "Trust Bank"
#		Then User Click Account No field and select "0210589481"
#		Then User Click select Chequebook and select "1122"
#
#		
#	Scenario: User Fillup Cheque Information section
#		Then User Click Cheque Date CDC
#		Then User Click Beneficiary Name and select "Munnu Traders"
#		Then User Click Cheque Category field and select Bearer Cheque
#		Then User Click Cheque Auditor field and select "ERP Admin"
#		Then User Click Signatory Authority field and select "ERP Admin"
#		Then User Click TDS Submit button
#		
#	Scenario: Verify Data of Transfer Cheque
#		Then User Collect "Check Request Created" Status and Verify
#	
#	Scenario: Approve Transfer Cheque
#		When User Click Select User button for Auditor
#		#1scrollDown
#		Then User Click Review button
#		#1Scrollup
#		Then User Collect "Cheque Request Reviewed" Status and Verify
#		When User Click Select User button for Creator
#		#1scrollDown
#		Then User Click Print button
#		Then User Close New Tab
#		Then User Click Confirm button
#		Then User Collect "Cheque Printed" Status and Verify
#		When User Click Select User button for Cheque Approver
#		#1scrollDown
#		Then User Click Approve button
#		Then User Collect "Cheque Request Approved" Status and Verify
#		#1scrollUp
#		When User Click Select User button for Creator
#		#2scrollDown
#		Then User Click Deliver button
#		Then User enters "Asif" into Cheque Recever name field
#		Then User enters "01899999999" into Recever phone Number field
#		Then User Click Confirm Delevery button
#		Then User Collect "Check Delivered" Status and Verify
		
#For TDS, Purchase Bill TDS Type
#	Scenario: For Purchase Bill TDS Type
#		Then User Click select TDS Type and select "Purchase Bill TDS"
#		Then User Click ID Requisition "Bill Sn"
#		Then User Click Amount nbutton in first row
#	
#	Scenario: User Fillup Bank Information section
#		Then User Click Bank Select and select "Trust Bank"
#		Then User Click Account No field and select "0210589481"
#		Then User Click select Chequebook and select "1122"
#
#		
#	Scenario: User Fillup Cheque Information section
#		Then User Click Cheque Date CDC
#		Then User Click Beneficiary Name and select "Munnu Traders"
#		Then User Click Cheque Category field and select Bearer Cheque
#		Then User Click Cheque Auditor field and select "ERP Admin"
#		Then User Click Signatory Authority field and select "ERP Admin"
#		Then User Click TDS Submit button
#		
#	Scenario: Verify Data of Transfer Cheque
#		Then User Collect "Check Request Created" Status and Verify
#	
#	Scenario: Approve Transfer Cheque
#		When User Click Select User button for Auditor
#		#1scrollDown
#		Then User Click Review button
#		#1Scrollup
#		Then User Collect "Cheque Request Reviewed" Status and Verify
#		When User Click Select User button for Creator
#		#1scrollDown
#		Then User Click Print button
#		Then User Close New Tab
#		Then User Click Confirm button
#		Then User Collect "Cheque Printed" Status and Verify
#		When User Click Select User button for Cheque Approver
#		#1scrollDown
#		Then User Click Approve button
#		Then User Collect "Cheque Request Approved" Status and Verify
#		#1scrollUp
#		When User Click Select User button for Creator
#		#2scrollDown
#		Then User Click Deliver button
#		Then User enters "Asif" into Cheque Recever name field
#		Then User enters "01899999999" into Recever phone Number field
#		Then User Click Confirm Delevery button
#		Then User Collect "Check Delivered" Status and Verify
		
		
#For TDS, Subcontractor Bill TDS Type
#	Scenario: For Vendor TDS Type
#		Then User Click select TDS Type and select "Subcontractor Bill TDS"
#		Then User Click ID Requisition "Bill Sn"
#		Then User Click Amount nbutton in first row
#	
#	Scenario: User Fillup Bank Information section
#		Then User Click Bank Select and select "Trust Bank"
#		Then User Click Account No field and select "0210589481"
#		Then User Click select Chequebook and select "1122"
#
#		
#	Scenario: User Fillup Cheque Information section
#		Then User Click Cheque Date CDC
#		Then User Click Beneficiary Name and select "Munnu Traders"
#		Then User Click Cheque Category field and select Bearer Cheque
#		Then User Click Cheque Auditor field and select "ERP Admin"
#		Then User Click Signatory Authority field and select "ERP Admin"
#		Then User Click TDS Submit button
#		
#	Scenario: Verify Data of Transfer Cheque
#		Then User Collect "Check Request Created" Status and Verify
#	
#	Scenario: Approve Transfer Cheque
#		When User Click Select User button for Auditor
#		#1scrollDown
#		Then User Click Review button
#		#1Scrollup
#		Then User Collect "Cheque Request Reviewed" Status and Verify
#		When User Click Select User button for Creator
#		#1scrollDown
#		Then User Click Print button
#		Then User Close New Tab
#		Then User Click Confirm button
#		Then User Collect "Cheque Printed" Status and Verify
#		When User Click Select User button for Cheque Approver
#		#1scrollDown
#		Then User Click Approve button
#		Then User Collect "Cheque Request Approved" Status and Verify
#		#1scrollUp
#		When User Click Select User button for Creator
#		#2scrollDown
#		Then User Click Deliver button
#		Then User enters "Asif" into Cheque Recever name field
#		Then User enters "01899999999" into Recever phone Number field
#		Then User Click Confirm Delevery button
#		Then User Collect "Check Delivered" Status and Verify


#For TDS, Payment Application TDS Type
	Scenario: For Vendor TDS Type
		Then User Click select TDS Type and select "Payment Application TDS"
		Then User Click ID Requisition "PA SN"
		Then User Click Amount nbutton in first row
	
	Scenario: User Fillup Bank Information section
		Then User Click Bank Select and select "Trust Bank"
		Then User Click Account No field and select "0210589481"
		Then User Click select Chequebook and select "1122"

		
	Scenario: User Fillup Cheque Information section
		Then User Click Cheque Date CDC
		Then User Click Beneficiary Name and select "Munnu Traders"
		Then User Click Cheque Category field and select Bearer Cheque
		Then User Click Cheque Auditor field and select "ERP Admin"
		Then User Click Signatory Authority field and select "ERP Admin"
		Then User Click TDS Submit button
		
	Scenario: Verify Data of Transfer Cheque
		Then User Collect "Check Request Created" Status and Verify
	
	Scenario: Approve Transfer Cheque
		When User Click Select User button for Auditor
		#1scrollDown
		Then User Click Review button
		#1Scrollup
		Then User Collect "Cheque Request Reviewed" Status and Verify
		When User Click Select User button for Creator
		#1scrollDown
		Then User Click Print button
		Then User Close New Tab
		Then User Click Confirm button
		Then User Collect "Cheque Printed" Status and Verify
		When User Click Select User button for Cheque Approver
		#1scrollDown
		Then User Click Approve button
		Then User Collect "Cheque Request Approved" Status and Verify
		#1scrollUp
		When User Click Select User button for Creator
		#2scrollDown
		Then User Click Deliver button
		Then User enters "Asif" into Cheque Recever name field
		Then User enters "01899999999" into Recever phone Number field
		Then User Click Confirm Delevery button
		Then User Collect "Check Delivered" Status and Verify
		
		
		
