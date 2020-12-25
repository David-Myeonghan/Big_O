### What is good code?

1. Readable
2. Scalable (Big O) -

How long does it take to run a certain problem through a function or a task?
How can we measure big O, or the efficiency?

## Big O = in terms of effeciency, How long an algorithm takes to run

BigO and scalability means when we grow bigger and bigger with our input, How much does the algorithm slow down.
(Algorithmic Efficiency)
The less it slows down(the slower it slows down), the better it is.

Instead of using time to measure the efficiency of our function, we can just calculate how many operations a computer has to perform. Big O allows us and concerns us with how many steps it takes in a function.

Big O doesn’t measure things in seconds. Instead we’re focusing on **how quickly the runtime grows**.
The size of input compared to the number of operations that increase => scalability!

Inputs can be any type of data

- O(n) [O of n] - Linear Time (Proportionally).

- O(1) [O of one] - Constant time
  No matter how big the input is, the number of operations stays flat
  Predictability, in terms of computing, is very nice.

## Rule Book

- 1. Worst Case

  - What is the worst scenario of the function.
    - What if the items we are looking for is the last item in the array?

- 2. Remove Constants

  - We don't care how steep the line is. Care about how the line moves as our inputs increase.

- 3. Different terms for inputs

  - Waht if there are two input(parameters) -> O(a + b)
  - When you see nested loops, multiply them
  - Same indentaion, Add.
  - Nested, Multiply.

  - If you have the power of three, something's wrong.

- 4. Drop Non Dominants
  - We worry abouth the most important dominant terms.

### What does all mean?

- To Write Scalable code.
- Data Structures + Algorithms = Programs
  - Refer "https://www.bigocheatsheet.com/"

### O(n!) - "O n factorial" = "OH NO"

### What is good code? (2)

1. Readable (maintainable)
2. Scalable - can be divided into...
   - Speed - Time Complexity - How many operations does it cost?
   - Memory - Space Complexity - such as RAM, that is required by the algorithm.

- Space and Memory are mutually exclusice?
  - have to decide what you optimise.. memeory? or time?

### When a program executes, it has two ways to rememver things.

1. the heap - store variables
2. the stack - keep track of function calls

## Big O is related to 'Scalable'

- that you should always be the back of your mind.
- how efficient we can run your code.

- Make you see the code differently by Big O, related to Readable, Scalable(Speed, Memory).
- Constant Not always better than O(n) if input is just a hundred.
