#Author: abuasif.nyk@gmail.com

Feature: User Create_Company on Master page

  Scenario: User going to Master_Add_New_Company page
    When User Click Master Company button
    And User Click Master Add New Company button
 	
 	Scenario: User going to create new company
 		Given User is on Master Add New Company Create page
 		When User enters "" into Company Name field
 		And User enters "" into Company Code field
 #		And User Click City button
 #		And User enters "Rajshahi" into City Search field
 #		And User Click into City field
 #		And User enters "Saheb Bazar" into Company Address field
 #		And User Click Calender button into Establish Date field
 #		And User Click Date button into Establish Date field
 #		And User enters "100" into Company Account No field
 #		And User enters "Raj-1100" into Company TreadLicense field
 #		And User enters "50" into Tax Deduction AccountNo field
 #		And User enters "1122" into Provided Fund Reg No field
 #		And User Click Calender button into Provided Fund Reg Date field
 #		And User Click Date button into Provided Fund Reg Date field
 #		And User enters "2211" into Gratuity Reg No field
 #		And User enters "70" into Retirement Age field
 #		And User enters "Abu Asif" Contact Person name field
 #		And User enters "HR" into Contact Person Designation field
 			And User enters "abuasif.com" into Website field
 #		And Usert enters "abuasif.nyk@gmail.com" into Company Email field
 #		And User enters "01780963777" into Telephone Number field
 #		And User enters "000111" into Fax Number field
 #		And User enters "Bank Management" into Business Type field
 #		And User enters "Max Group" into Business Group field
 #		And User enters "ERP Management" into Company Catagory field
 #		And User enters "Not Applicable" into Remarks field
 		And User Clicks Create Company button
 		
 		
	Scenario: User is goint to save the data which is recently created
		When User Click Show All Companies button
		Then User collect the recent created company data
		
	 