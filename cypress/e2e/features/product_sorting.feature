Feature: Product sorting

  Background: 
    Given user is logged in with valid credentials: 'standard_user', 'secret_sauce'

  Scenario Outline: As a user I can sort products by 'Name' option
    When user clicks on 'Name:<sortOrder>' option on Inventory page
    Then the products should be displayed in <sortOrder> order by name

    Examples: 
      | sortOrder |
      | za        |
      | az        |

  Scenario Outline: As a user I can sort products by 'Price' option
    When user clicks on 'Price:<priceOrder>' option
    Then the products are sorted in <priceOrder> order
    Examples: 
      | priceOrder |
      | lohi       |
      | hilo       |
