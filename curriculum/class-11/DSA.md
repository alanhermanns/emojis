# Implementation: Stacks and Queues

## Features
- Create a `Node` class that has properties for the value stored in the Node, and a pointer to the next node.
- Create a `Stack` class that has a `top` property. It creates an empty Stack when instantiated.
    - This object should be aware of a default empty value assigned to `top` when the stack is created.
    - Define a method called `push` which takes any value as an argument and adds a new node with that value to the `top` of the stack with an O(1) Time performance.
    - Define a method called `pop` that does not take any argument, removes the node from the top of the stack, and returns the node's value.
    - Define a method called `peek` that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
    - Define a method called `isEmpty` that does not take an argument, and returns a boolean indicating whether or not the stack is empty.

- Create a `Queue` class that has a front property. It creates an empty Queue when instantiated.
    - This object should be aware of a default empty value assigned to `front` when the queue is created.
    - Define a method called `enqueue` which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
    - Define a method called `dequeue` that does not take any argument, removes the node from the front of the queue, and returns the node's value.
    - Define a method called `peek` that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
    - Define a method called `isEmpty` that does not take an argument, and returns a boolean indicating whether or not the queue is empty.

- Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
- Be sure to follow your languages best practices for naming conventions.

You have access to the Node class and all the properties on the Linked List class.

## Structure and Testing
Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write tests to prove the following functionality:
1. Can successfully push onto a stack
2. Can successfully push multiple values onto a stack
3. Can successfully pop off the stack
4. Can successfully empty a stack after multiple pops
5. Can successfully peek the next item on the stack
6. Can successfully instantiate an empty stack
6. Can successfully enqueue into a queue
7. Can successfully enqueue multiple values into a queue
8. Can successfully dequeue out of a queue the expected value
9. Can successfully peek into a queue, seeing the expected value
9. Can successfully empty a queue after multiple dequeues
10. Can successfully instantiate an empty queue

Ensure your tests are passing before you submit your solution.

## Documentation: Your README.md

```markdown
# Stacks and Queues
<!-- Short summary or background information -->

## Challenge
<!-- Description of the challenge -->

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API
<!-- Description of each method publicly available to your Stack and Queue-->
```

## Submission Instructions
1. Create a pull request from your branch to your `master` branch
1. In your open pull request, leave as a comment [a checklist](https://github.com/blog/1825-task-lists-in-all-markdown-documents){:target="_blank"} of the specifications and tasks above, with the actual steps that you completed checked off
1. Submitting your completed work to Canvas:
    1. Copy the link to your open pull request and paste it into the corresponding Canvas assignment
    1. Leave a description of how long this assignment took you in the comments box
    1. Add any additional comments you like about your process or any difficulties you may have had with the assignment
1. Merge your branch into `master`, and delete your branch (don't worry, the PR link will still work)
