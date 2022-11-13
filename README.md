# State Management: Implementing Redux

This demo app goes with the [Implementing Redux presentation slides found here](https://docs.google.com/presentation/d/1xzE8DyhF44FAq2ysnE_bZuYHR4hW9XlbVOoRNzubHE0/edit?usp=sharing)

## Running locally

- Clone this repo
- `npm install` dependencies
- `npm start`
- You should be good to go at `localhost:3000`

## Branches

- `main`: Main branch: we'll add features to this branch
- `broken-reducers`: Switch to this branch and practice fixing the reducers that mutate state
- `finished`: The full implementation, for your reference
- `legacy`: A refactored version of `finished` that uses the older `connect()` with `mapStateToProps()` and `mapStateToDispatch()`.    
    - [This GitHub comparison link](https://github.com/mikeboyle/redux-demo-pizza/compare/finished..legacy) shows the changes made to replace the hooks with `connect()`. 
    - You can also view [the reverse diff link](https://github.com/mikeboyle/redux-demo-pizza/compare/legacy..finished) to see how to refactor legacy code into hooks code.

## Codealong activities

1. On `main` branch, implement the `Clear All` filters button
1. On the `broken-reducers` branch, fix the following reducers that mutate state:
    1. Click on a filter
    1. Remove item from cart
    1. Type into delivery info form

## Further practice

- Button that clears all items from cart
- Button that clears the order form
- Clear order form after submit
- Show total number of items in cart
- Add subtotal, tax, grand total to cart
- Show quantity if 2+ of same item in cart
- Let users sort items by name and price
- Add toppings to a pizza in the cart
- Let users add items to the menu
