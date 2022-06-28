# Big-O

Scalable Code is the basis of Big O Notation

##Big Os

O(1) <b>Constant</b> – no loops <br>
O(log N) <b>Logarithmic</b> – usually searching algorithms have log n if they are sorted (Binary Search) <br>
O(n) <b>Linear</b> – for loops, while loops through n items <br>
O(n log(n)) <b>Log Linear</b> – usually sorting operations <br>
O(n^2) <b>Quadratic</b> – every element in a collection needs to be compared to ever other element. Two
nested loops <br>
O(2^n) <b>Exponential</b> – recursive algorithms that solves a problem of size N <br>
O(n!) <b>Factorial</b> – you are adding a loop for every element <br>
Iterating through half a collection is still O(n) <br>
Two separate collections: O(a * b) <br>

What Can Cause Time in a Function? <br>
Operations (+, -, *, /) <br>
Comparisons (<, >, ==) <br>
Looping (for, while) <br>
Outside Function call (function()) <br>
Rule Book <br>
Rule 1: Always worst Case <br>
Rule 2: Remove Constants <br>
Rule 3: <br>
• Different inputs should have different variables: O(a + b) <br>
• A and B arrays nested would be: O(a * b) <br>
+ for steps in order <br>
* for nested steps <br>
Rule 4: Drop Non-dominant terms <br>
What Causes Space Complexity? <br>
• Data Structures <br>
• Function Call <br>
• Allocations <br>
