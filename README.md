# Unhandled Exceptions in JavaScript

This repository demonstrates a common error in JavaScript: unhandled exceptions.  The `calculate` function throws errors for division by zero and invalid operators. The initial version of the code does not handle these exceptions, leading to the program crashing.  The solution showcases how to use `try...catch` blocks to gracefully handle these errors.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred code editor.
3. Run the files in a JavaScript environment (e.g., Node.js).

## Bugs

The `bug.js` file contains the initial code with the unhandled exceptions. 

## Solutions

The `bugSolution.js` file provides a corrected version of the code using `try...catch` to prevent crashes and provide informative error messages.