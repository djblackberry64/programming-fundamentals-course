---
title: Definitions in programming (concepts)
description: Definitions about programming concepts explained in detail
---

## What are concepts in programming?

A concept is a little thing to grasp like how to make your program decide something or what to do when something unexpected happens.

## Why are they relevant?

The good thing about concepts is that when you understand them their implementation often gets easier compared to jumping in without prior knowledge about them! You should understand a concept so that you can quickly understand its implementation rather than learn everything all over again!

## How are they executed in different programming languages?

Each language handles these concepts a little differently. Some languages for example allow you to store different kinds of data in the same variable because it just adjusts to match the information so to say. In others, you define what the variable can store and that can't change after you defined it.

_A text variable can become a number variable in some languages or must stay a variable for storing texts in others._

## Terms about code execution

<ul>
  <li>Compiler: A compiler is a program that translates your code into a language your computer can read. All programming languages end up as binary code.</li><br />
  <li>Interpreter: Also a program that translates your code into a machine readable form. The difference to the compiler is that pieces of code get translated as needed.</li>
</ul>

## General programming terms

### Methods

A method is a function that always resides in a class.

> A class is something that you can find in some programming languages, often in ones that support the paradigm [Object Oriented Programming](../5_definitions-in-programming-principles/).<br/>
> Simplified, it is a structure in which you nest your code.

### Functions

A function is a reusable block of code that you can call either to get returns or to modify something.

#### Where to find them

In Java for example you'll only find methods as there can't be a function outside of a class.

Whereas in Python you can find both methods and functions as Python allows functions outside of classes as well as supports different programming paradigms (OOP, Dynamic, Procedural).

### Loops

A loop is something most programming languages offer via keywords where you put code in a defined space to be executed repeatedly. This space is often separated either by parantheses(e.g. Java) or identation (e.g. Python).

### Decision Branching

There are two main ways for decision branching that you can find out there. One method is by if-statements and one is by switch statements. We'll quickly go over what they are.

#### if-statements

if-statements are blocks of code which follow a structure that can be commonly found across languages:

> if (condition) + block of code

Of course you can also specify what happens when the condition isn't met. You do this by adding the following structure to the example above:

> else + block of code

Note that you often have separation between the code that is in this conditional block either by parenthesis (in Java it would be these: "{}") or identation (In Python you ident with 2 spaces and stop identing when the code block should end).

### Error Handling

**The last chapter of this lesson will be error handling.**

Because each language handles errors a little differently we'll use a little abstraction to make this topic a little more palatable.

An example structure in pseudo code:

> try + block of code + catch + block of code

In this example you can see the general concept of error handling. You **try** to do something and when it fails you **catch** the error that occured. The blocks of code in between are the code checked when they're in the try-block and the _error handling code_ when they are in the catch block.

As we discussed, each programming language manages error handling a different way. This means you'll have to learn the specific way to handle errors in your code for this language. Though the concept of error handling should be more familiar to you after this lesson which'll make it easier to grasp the details!
