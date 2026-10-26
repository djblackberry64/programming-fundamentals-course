---
title: Definitions in programming (principles)
description: Definitions about programming principles explained in detail
---

## Learning Objectives

Questions to be answered in this part of the curriculum:<br />

<ul>
<li>What are different principles in Programming?</li>
<li>Why are they relevant?</li>
<li>How are they executed in different programming languages?</li>
</ul>

## What are different principles in Programming?

Principles in programming are often higher level concepts which are often design decisions or ways of how to program and less about a specific thing.

## Why are they relevant?

Principles in programming are relevant because they keep things organized when people adhere to them. You wouldn't want 10 different charging port types your phone could have, no? (Unifying and having specific requirements for something to be held to a standard is what **standardization** is about)

## How are they executed in different programming languages?

Principles can be more prominent in one programming language than it is in another. Some might prioritize keeping things more readable, others focus more on speed. Though more universal things are standardization or modularization are often to be found because it makes working with a programming language(especially setup and general usability of their ecosystem) easier.

## Terms about how to program (paridigms)

_A programming paradigm is the way you write code. The following terms are different ways to write code. Be aware that not every programming language supports every way of writing code._

<details>
  <summary>Introduction to the programming world</summary>
    <ul>
      <details>
        <summary>OOP(Object Oriented Programming)</summary>
        Object Oriented Programming works - as its name might suggest - with objects.<br />
        Concepts like encapsulation, inheritance as well as polymorphism play a crucial role in this programming paradigm.
      </details>
    </ul>
</details>

## Capsulation

Capsulation means having the dependencies and requirements of a specific thing in a seperate area rather than having everything in the main part of an application for example.

> Module A (dependencies and requirements) is part of the big program M with its own dependencies+requirements.

## Modularization

Modularization often goes hand in hand with capsulation. You outsource specific functionality to specified parts.

**For example part A handles user input, part B handles payment processing and part C takes care of logging your inventory.**

The goal with modularization is a seemless integration with the core application without overloading with unnecessary functionality right from the start. It also helps identifying problems as you can pinpoint them more easily.

## Readability

Readability is often key for how easy a programming language is to pick up. An example for this would be the language [brainfuck](https://brainfuck.net/learn) while the one of the best would be [Python](https://www.python.org/).

_Python stands out in readability because of its close resemblance to the English language(which is a pretty universal language)._

But not only resemblance to real-world languages makes a programming language readable, it's also the volume of the code needed to achieve a specific result. The more lines you have to write, the more you're prone to making a mistake.

## Rules vs. Conventions vs. Standards

There are often different things you adhere to in your daily life. There are **conventions**, **standards** and **rules**

These are often used as synonyms, but understanding the differences between them will be crucial to productive colaboration which we'll get to in the [advanced section](../../03-advanced-section/2_collaboration/).

### Rules

We all are familiar with the concept of a rule. I would say the other two are based upon this very concept. A rule is something that you get to know (be it written, told or otherwise) which guidance you'll then follow. The concept of a rule itself is simple and pretty adaptable, it's only when you get to conventions or standards that the concept becomes more narrow.

### Conventions

A convention can be thought as the extension of the rule concept with a few additions.
Firstly, conventions are (often) social. A group of people (a community) agrees upon a few rules they all promise to follow to their best capabilities. Conventions are often not formally described but rather learned implicitly more often than not. This is also what makes them different from standards, although a convention often predates the standard that grows from it.

### Standards

What is a standard? Think about what you just learnt about conventions but it's more formal now. You have documentation, clearer guidelines, maybe even some hard-coded rulesets like syntax.

A standard isn't something vague anymore (or at least a good standard isn't). It's formally described, properly documented, agreed upon by more people and often by a larger scale of people to be exact.

Standards are in your daily life: From the water quality of your tap to your electrical plug or even a sheet of paper!

Standards are important and often (but not always) stem from a convention that came beforehand

### What to be aware of

You'll often come across the decision to weigh the pros and cons between a convention and a standard. If not otherwise specified, I'd recommend you stick with the known standard at your workplace. However if an environment-specific convention is given (e.g. a code naming that differs from the standard or builds upon it), I strongly suggest you follow that instead, as your workplace will typically require it for your work to be accepted.
