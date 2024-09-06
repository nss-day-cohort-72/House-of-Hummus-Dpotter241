# Events and State Self-Assessment

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Setup

1. Make sure you are in your `workspace` directory
1. `git clone {github repo SSH string}`
1. `cd` into the directory it creates
1. `code .` to open the project code
1. Use the `serve` command to start the web server
1. Open the URL provided in Chrome

## Requirements

### Initial Render

1. All 10 base dishes should be displayed as radio input options.
1. All 9 vegetables should be displayed as radio input options.
1. All 6 side dishes should be displayed as radio input options.
1. All previously purchases meals should be displayed below the meal options. Each purchase should display the primary key and the total cost of the purcahsed meal.

### State Management

1. When the user selects an item in any of the three columns, the choice should be stored as transient state.
1. When a user makes a choice for all three kinds of food, and then clicks the "Purchase Combo" button, a new sales object should be...
    1. Stored as permanent state in your local API.
    1. Represented as HTML below the **Monthly Sales** header in the following format **_exactly_**. Your output will not have zeroes, but the actual amount.
        ```html
        Receipt #1 = $00.00
        ```
   1. The user's choices should be cleared from transient state once the purchase is made.

## Design

Given the description and animation above...

1. Create an ERD for this application before you begin.
1. Make a list of what modules need to be created to make your application as modular as possible. Create a **Dependency Graph** for the project to be reviewed once you are complete with the assessment.
1. Create a **Sequence Diagram** that visualizes what your algorithm is for this project. We'll give you a minimal starting point.

```mermaid
sequenceDiagram
    participant Main
    Main->>Vegetables: Generate vegetable options
    Vegetables-->>Main: Here are some radio buttons
    participant Vegetables
    participant TransientState
    TransientState->>API: Save this dinner order
    API-->>TransientState: Order saved
    participant API
```

## Vocabulary and Understanding

> 🧨 Before you click the "Assessment Complete" button on the Learning Platform, add your answers below for each question and make a commit. It is your option to request a face-to-face meeting with a coach for a vocabulary review.

1. Should transient state be represented in a database diagram? Why, or why not?
   > Transient state should not be in a database diagram. Its representing temporary data stored in the applications memory while the script is being executed. Its only storing temporary information like user inputs, selections, calculations, etc. All of which are cleared when the application is closed or rest. The database diagram is meant to show structure and relationships from persistent data stored in the database, not temporary information needed to run the application, so representing transient data in the diagram would add unnecessary confusion to the purpose of the diagram. 
2. In the **FoodTruck** module, you are **await**ing the invocation of all of the component functions _(e.g. sales, veggie options, etc.)_. Why must you use the `await` keyword there? Explain what happens if you remove it.
   > We use await to ensure that the code waits for asynchronous operations, such as data fetching or processing, to complete before moving forward. This ensures that each component function in the FoodTruck module, like sales or veggie options, has the correct and complete data when executed. Without await, the functions would run immediately without waiting for these operations to finish, resulting in incorrect or undefined data being used. This can lead to errors, incomplete data being displayed, or default values being returned instead of the expected results.
3. When the user is making choices by selecting radio buttons, explain how that data is retained so that the **Purchase Combo** button works correctly.
   > When the user selects radio buttons, event listeners capture the selected values and update the transient state, which temporarily stores these choices while the user interacts with the app. When the Purchase Combo button is clicked, a function reads the data stored in the transient state and uses it to process the order, display the purchase details, and reset the selections for the next order. This approach ensures that the user’s choices are retained and accurately reflected in the final purchase.
4. You used the `map()` array method in the self assessment _(at least, you should have since it is a learning objective)_. Explain why that function is helpful as a replacement for a `for..of` loop.
   > map() is helpful as a replacement for a for..of loop because it simplifies the process of transforming an array. The map() method creates a new array by applying a transformation function to each element of the original array, making it ideal when you need to modify each element and return a new set of values, like when adjusting the items in a purchase combo. Unlike for..of, where you would have to manually push transformed elements into a new array, map() handles this seamlessly and in a more concise way. Additionally, map() does not alter the original array, preserving data integrity and supporting immutability, a key concept in functional programming. This means you don’t have to worry about resetting or managing the original data after transformations, which reduces the likelihood of bugs and makes the code easier to read, maintain, and debug.
