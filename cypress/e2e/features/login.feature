Feature: OrangeHRM Login page tests

    Test includes:
    - verifying the expected components on the login page
    - verifying the expected login functionalities


    Scenario: Login page components
        Given I am on the login page
        Then I see branding logo
        And I see login label
        And I see login logo
        And I see username components
        And I see password components
        And I see the Login button
        And I see the Forget your password? link
        And I see copyright components
        And I see social media footer components

    Scenario: User login with valid credentials
        Given I am on the login page
        When I enter username 'Admin'
        And I enter password 'admin123'
        And I click Login button
        Then I am logged in to the OrangeHRM portal

    Scenario: User login with invalid username
        Given I am on the login page
        When I enter username 'Sadman'
        And I enter password 'admin123'
        And I click Login button
        Then I see invalid login error message

    Scenario: User login with invalid password
        Given I am on the login page
        When I enter username 'Admin'
        And I enter password 'admin456'
        And I click Login button
        Then I see invalid login error message

    Scenario: User login with both invalid credentials
        Given I am on the login page
        When I enter username 'Sadman'
        And I enter password 'admin456'
        And I click Login button
        Then I see invalid login error message
    
    Scenario: User login with no username
        Given I am on the login page
        When I enter password 'admin123'
        And I click Login button
        Then I see required username field error
    
    Scenario: User login with no password
        Given I am on the login page
        When I enter username 'Admin'
        And I click Login button
        Then I see required password field error
    
    Scenario: User login with no username and password
        Given I am on the login page
        When I click Login button
        Then I see required username field error
        And I see required password field error

    Scenario: User login
        Given I am on the login page
        When I log in as an admin
        Then I am logged in to the OrangeHRM portal
