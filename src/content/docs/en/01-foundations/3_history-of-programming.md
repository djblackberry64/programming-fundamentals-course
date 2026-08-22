---
title: History of programming
description: A broad history outline of programming
---

We have a loooong way ahead of us before we arrive where we are today. Let me take you on a little journey...

<img
  src="/programming-fundamentals-course//images/biker_embarking_on_journey.jpeg"
  alt="Austria, Random Hill, Biker driving into the sunset"
  width="300"
  style="border-radius: 20px;"
/>

## Learning Objectives

Questions to be answered in this part of the curriculum: <br />

<ul>
<li>How did we get to where we are?</li>
<li>How did programming evolve over time?</li>
</ul>

## Humble beginnings of programming

### Textiles and Punch Cards

The first programs weren't written on a screen. Heck, they weren't even written at all!

They were punched into cards and they didn't display a shiny UI. They were used to automate machines involved in the weaving process.

### We want to calculate!

Not only our dear computer science people wanted computing to work. Mathematicians and the S.T.E.M. field in general had a huge impact on the development of modern computing.

They also left their marks on the field:

Things like Lambda expressions (often seen with python functions, [stemming from the lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus)) or how programming languages handle mathemetical operations are still relevant to this day.

### Two origins of modern computing

In the end, there were two big movements: one from the computer engineering field, another from the Maths/S.T.E.M. field.
They approached this differently though.

When computer science thought about the specific implementation (for example making recursion as fast as loops), Maths/S.T.E.M. mostly focused on the theoretical approach of computing:

If it could be formally described, it was theoretically solved - no matter if it was practically doable. As seen with things like leaving square roots in their exact form instead of approximating them:

A square with sides of 1, calculation of its diagonal

$$
\sqrt{1^2 + 1^2} = \sqrt{2}
$$

**In the end, modern programming is the intersection of these two perspectives.**

## Low Level Predecessor Languages

### What are these languages?

Low Level Predecessor Languages are languages associated with the beginnings of programming, often serving as a base for other languages to build upon.

### Can I have your compiler?

<div class="starlight-aside starlight-aside--note">
<p class="starlight-aside__title">Some short definitions</p>
<br />

A compiler is a program that is used to execute code by translating the
code you write into a language computers can understand _binary code_.

An interpreter is also a program used to execute code but instead of translating the whole program at once like the compiler does, it only translates the pieces that are currently needed.

Code is the thing that you write to create a program so a computer can execute it with the help of the compiler.

</div>

It was common for languages back then to write their compiler on an existing compiler platform/programming language.

Early compilers were written in Assembly, later ones could compile themselves – a concept known as self-hosting.

One well-known instance of this was the C programming language:

To keep it short: C used Assembly to write its compiler.

<div class="starlight-aside starlight-aside--danger">
  <p class="starlight-aside__title">Burning question</p>
  <br />

**Now you may ask: But how can it be that there's C code when I look up the
source code of the C compiler?**

</div>

Let's see what happened there:

So the base of the C compiler is Assembly code which in turn is translated into binary code.

_How can the compiler be written in C then? - It isn't really written in C (in the beginning)._

It's all binary under the hood. They just used Assembly (a readable representation of binary) to code the necessary parts of the language compiler and could then use the C programming language itself to extend its functionality.

If you wanna have a specific history from a compiler borrowing progression:

Binary > Assembly > C (1973, Dennis Ritchie) > C++ (1983, Bjarne Stroustrup) > Java (1995, Sun Microsystems) > Kotlin (2011, JetBrains)

**This is only one of multiple development branches - many languages developed in parallel or influenced each other.**

## The rise of popularity in the 90s

Following the languages that build on Assembler and lower level languages, high level languages like Java and Python increased the popularity of software development.

While low level languages provided high memory control, high level languages provided abstractions that enabled more rapid development as well as addressed other use cases where memory allocation isn't the main focus.

The web language trinity of HTML, CSS and JavaScript was also born during this time allowing the evolving internet to grow.

All of this was possible because of multiple trends during that time:

<ul>
  <li>The rise of personal computers</li>
  <li>The attractive tech job market during that time</li>
  <li>
    The upcoming of tech companies and their need for technically versed staff
  </li>
</ul>

## The dot com crash

After a boom a crash will follow...

<img
  src="/programming-fundamentals-course//images/clinical_chairs.jpeg"
  alt="Two random backfacing chairs, hard contrast and many shadows, dark picture"
  width="300"
  style="border-radius: 20px;"
/>

The dot com crash was one of the most devastating setbacks for software development.

It was caused by high speculation and the growing discrepancy between the investments in tech and the low ROI (Return On Investment) on them.

Many startups failed during that time.

Unemployment spiked because of mass layoffs and the job market became highly competitive as new roles disappeared due to companies scaling back or canceling online projects.

The market had not only lost roles but the now unemployed software developers were faced with an oversaturated market where a job in the field was nearly impossible to get.

## The start to code movement

After the market recovered, the 2010s "start to code movement" really made computer science popular again.<br />

More resources and tutorials than ever before were made for starters and governments propagated computer science skills as "a basic skill in modern society".

But as with every hype it has to cool down after a while. In the end of the 2010s as well as the early 2020s the hype had mostly faded again.

## The corona pandemic revival

Then corona hit...<br />

I won't talk too much about our _favourite_ virus here but one thing it did was bring some hype back into the field of computer science.

There are some key factors why there was a revival in the time of the pandemic:<br />

<ul>
  <li>
    One of them being that lots of people were at home at this time and
    consuming more digital media/products.
  </li>
  <br />
  <li>
    Second of all, people interacted with the digital world on a larger scale
    than ever before.
  </li>
</ul>

## The current stagnation

The current stagnation is a mix of multiple phenomenons falling together:

<ul>
  <li>
    First, we have our overhiring in the pandemic which then resulted in mass
    layoffs.
  </li>
  <br />
  <li>
    Second, we have the oversaturation of the job market in the field of
    computer science, this set the bar higher for new grads and really everyone
    looking for a job in this field.
  </li>
  <br />
  <li>
    Lastly, layoffs get justified with embracing new automation technologies
    like AI as cover for mass layoffs after the pandemic overhiring.
  </li>
</ul>
<div class="starlight-aside starlight-aside--tip">
<p class="starlight-aside__title">Key Takeaway</p><br />

**This historical progression should teach us that technological progress is not linear, but cyclical**

</div>
