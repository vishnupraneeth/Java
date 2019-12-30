 Feature: Free CRM create contacts
 	Scenario Outline: Free CRM create a new contact scenario
		 Given user is already on login page
		 When title of login page in free crm
		 Then user enter "<username>" and "<password>"
		 Then user click on login button
		 Then user is on home page
		 Then user moves to new contacts page
		 Then user enters contact details "<firstname>" and "<lastname>" and "<position>"
		 Then close the browser
		 Examples:
		  |username |password |firstname |lastname  |position | 
		  |vishnu95 |test@123 | vishnu    | praneeth|CEO      |
		  |vishnu95 |test@123| vishnu    | praneeth|CEO     |
		  