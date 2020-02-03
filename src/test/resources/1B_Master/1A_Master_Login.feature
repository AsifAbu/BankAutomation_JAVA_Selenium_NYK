#Author: abuasif.nyk@gmail.com

Feature: User is on Master_LogIn page

  Scenario: Unsuccessful Master_LogIn with Invalid Username and Valid Password
    Given User is on Master_LogIn page
    When User enters "mithukhan18@yahoo.com" into Username field
    And User enters "123" into Password field
    And User Click Master_LogIn button
    And Master_LogIn Denied With Alert Message "Invalid Email or Password"

  Scenario: Unsuccessful Master_LogIn with Valid Username and Invalid Password
    Given User is on Master_LogIn page
    When User enters "fahadbilla@yahoo.com" into Username field
    And User enters "123d34593234556" into Password field
    And User Click Master_LogIn button
    And Master_LogIn Denied With Alert Message "Invalid Email or Password"
   

  Scenario: Unsuccessful Master_LogIn with Blank Username and Blank Password
    Given User is on Master_LogIn page
    When User enters "" into Username field
    And User enters "" into Password field
    And User Click Master_LogIn button
    And Master_LogIn Denied With Alert Message "Please enter valid email address"

  Scenario: Unsuccessful Master_LogIn with Blank Username and Valid Password
    Given User is on Master_LogIn page
    When User enters "" into Username field
    And User enters "123" into Password field
    And User Click Master_LogIn button
    And Master_LogIn Denied With Alert Message "Please enter valid email address"

  Scenario: Unsuccessful Master_LogIn with Valid Username and Blank Password
    Given User is on Master_LogIn page
    When User enters "fahadbillah@yahoo.com" into Username field
    And User enters "" into Password field
    And User Click Master_LogIn button
    And Master_LogIn Denied With Alert Message "Please enter password"

	Scenario: Successful Login with Valid Credentials in Master Module
		Given User is on Master_LogIn page
		When User enters "erp.maxgroup@gmail.com" into Master_name field
    And User enters "123" into Master_Password field
    And User Click Master_LogIn button
    And User Master_Login Successfully

	