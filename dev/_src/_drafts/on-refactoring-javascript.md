---
layout: post
title:  "On Refactoring JavaScript"
subtitle: "Series of posts with thoughts, strategies and what to look for when refactoring javascript code"
date:   2016-08-07
---

Post 1
------
full code version 1: https://github.com/junior-ales/tennis-score/tree/version1

Explain the series;

Present the problem;

Present full code;

GIF of app usage;

Leave questions on what can be improved

<script src="https://gist.github.com/junior-ales/dca2cb9dc691bbf435d0443c621fd6c6.js"></script>

Post 2
-------

Very important to know why you're refactoring. Applying your quotes style is not refactoring;

*Cons*:

* hard to extend;
* hard to maintain;
* hard to test DOM functions bound;
* hard to reason about the code;
* global scope;

*Pros*:

* Due to the fact that all is on global scope, testing the logic of `getScore` is relatively easy;

**extend is hard because almost nothing is resusable;**

we can model entities: Player, Game, $Board

**maintainability is hard because there isn't separation of concerns;**

scoping. you can achieve with modeling or with small functions with one responsibility each;

responsibilities:

*players informartion*

<script src="https://gist.github.com/junior-ales/9cd670352d916c97071bf187150bad8d.js"></script>

*score logic*

<script src="https://gist.github.com/junior-ales/811a43603cc2f2ff230454ddb77d3367.js"></script>

*binding DOM functions*

<script src="https://gist.github.com/junior-ales/22b7fed24c7de4f089887df7b7c68afb.js"></script>

**hard to test the DOM functions bound because you need to trigger the events and test side effects on the DOM itself**

don't test `addEventListener` this is the job of browser developers, test the functions bound.
isolate DOM code related so you don't need to fake DOM or trigger events.
dependency injection;

**hard to reason about the code due to repetition and a lot of conditional branches, magic numbers, lack of semantic code;**

tackle repetition with separation of concerns and single responsibility;
split functions in smaller functions;
give names to conditionals;

**global scope**

IIFE but then you loose the only thing was easy in this approach: the logic test;

*Define strategy: OO or Functional approach?*

Not by the book, *INSPIRED* by moth programming paradigms;

OO: objects and lexical this
functional: immutability

let's try fix the problems raised in both approaches. next post we try OO;

Post 3
------

Kind of OO. No class. OLOO
Do you really know how `new` works? If you do you know you shouldn't use it. (give reference of YDKJS and eric elliot);
