# Big-O

Scalable Code is the basis of Big O Notation

##Big Os

O(1) <b>Constant</b> – no loops
O(log N) <b>Logarithmic</b> – usually searching algorithms have log n if they are sorted (Binary Search)
O(n) <b>Linear</b> – for loops, while loops through n items
O(n log(n)) <b>Log Linear</b> – usually sorting operations
O(n^2) <b>Quadratic</b> – every element in a collection needs to be compared to ever other element. Two
nested loops
O(2^n) <b>Exponential</b> – recursive algorithms that solves a problem of size N
O(n!) <b>Factorial</b> – you are adding a loop for every element
Iterating through half a collection is still O(n)
Two separate collections: O(a * b)
What Can Cause Time in a Function?
Operations (+, -, *, /)
Comparisons (<, >, ==)
Looping (for, while)
Outside Function call (function())
Rule Book
Rule 1: Always worst Case
Rule 2: Remove Constants
Rule 3:
• Different inputs should have different variables: O(a + b)
• A and B arrays nested would be: O(a * b)
+ for steps in order
* for nested steps
Rule 4: Drop Non-dominant terms
What Causes Space Complexity?
• Variables
• Data Structures
• Function Call
• Allocations
