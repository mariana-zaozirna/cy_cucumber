Feature: Checkout

  Background: 
    Given user is logged in with valid credentials: 'standard_user', 'secret_sauce'
    And 'Cart' has 1 product

  Scenario: As a user I can purchase products
    When user navigates to Checkout page
    And user sends 'Checkout' form with <firstName>, <lastName>, <postalCode>
    And user clicks on 'Finish' button on Overview page
    Then website is redirected to the Checkout Complete page
    And user should see message saying <message>

    Examples: 
      | firstName | lastName | postalCode | message                   |
      | amy       | cuanti   |      38726 | Thank you for your order! |

  Scenario Outline: As a user I can not submit 'Checkout' form with empty field
    When user navigates to Checkout page
    And user sends 'Checkout' form with <firstName>, <lastName>, <postalCode>
    Then user should see a message saying <message>
    And <inputField> is highlighted in red color
    And all inputFields has cross icon

    Examples: 
      | firstName | lastName | postalCode | message                        | inputField      |
      |           | Cuanti   |      38726 | Error: First Name is required  | firstNameInput  |
      | Amely     |          |      73628 | Error: Last Name is required   | lastNameInput   |
      | Amely     | Cuanti   |            | Error: Postal Code is required | postalCodeInput |
