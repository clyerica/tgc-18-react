Create a budget tracker in React, that tracks the user's expenses.

For each expense, 
- record the date that it incurs (just using a String is fine)
- the description of the expense
- category
    - transport
    - entertainment
    - food
    - bills
    - loans
    - others
- amount
- whether it is reconciled (which is stored as boolean true or false).


Add in the following features:
- Allow the user to add a new expense
- Allow the user to edit an expense
- Display via a checkbox whether an expense has been reconciled. 
- Allow the user to toggle whether the expense is reconciled by checking or unchecking (checked means reconciled). 
- Allow the user to delete an expense

Steps by Steps
1. Create a new component name BudgetTracker and do all the code for this hands on inside there
2. Create a state object for the component, and list down three sample expenses. 
    * Each expense must have an id property to uniquely identify each of them.
3. Write a function, maybe naming it renderExpenses, that will display all the expenses
4. Add a form that allows the user to enter a new expense
5. Allow the user to update an existing expense
6. Allow the user to delete an existing expense
