Feature: Login

  Background: 
    Given user is on the login page

  Scenario: As a user, I can log into the system
    When user logins with <username> and <password>
    And user clicks 'Login' button
    Then website is redirected to the Inventory page
    And products and cart are displayed

    Examples: 
      | username      | password     |
      | standard_user | secret_sauce |

  Scenario Outline: As a user, I can not log into the system with invalid credentials
    When user logins with <username> and <password>
    And user clicks 'Login' button
    Then user should see a flash message saying <message>
    And form is in error state

    Examples: 
      | username        | password     | message                                                                   |
      | standardED_user | secret_sauce | Epic sadface: Username and password do not match any user in this service |
      | standard_user   | secret       | Epic sadface: Username and password do not match any user in this service |

  Scenario Outline: As a user, I can not log into the system with empty fields
    When user logins with <username> and <password>
    And user clicks 'Login' button
    Then user should see a flash message saying <message>
    And <input> is highlighted in red
    And <input> has cross icon

    Examples: 
      | username      | password     | message                            | input         |
      |               | secret_sauce | Epic sadface: Username is required | inputUsername |
      | standard_user |              | Epic sadface: Password is required | inputPassword |

  Scenario: As a user, I can not log into the system as blocked user
    When user logins with <username> and <password>
    And user clicks 'Login' button
    Then user should see a flash message saying <message>
    And form is in error state

    Examples: 
      | username        | password     | message                                             |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out. |

  Scenario: As a user, I can logout from the system
    And user is logged into the system with <username> and <password>
    When user clicks on the 'Burger' button at the top-left corner
    And user clicks on the 'Logout' button
    Then website is redirected to the Login page
    And 'Username' and 'Password' fields are empty

    Examples: 
      | username      | password     |
      | standard_user | secret_sauce |
