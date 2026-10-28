---
title: Definitionen in der Programmierung (Konzepte)
description: Definitionen über Programmierkonzepte, detailiert erklärt
---

## Learning Objectives

Fragen, die in dieser Lektion beantwortert werden sollen:<br />

<ul>
<li>Was sind die verschiedenen Konzepte in der Programmierung?</li>
<li>Warum sind sie relevant?</li>
<li>Wie werden sie in unterschiedlichen Programmiersprachen umgesetzt?</li>
</ul>

## Was sind Konzepte in der Programmierung?

Ein Konzept ist etwas Kleines was man verstehen muss, beispielsweise wie du dafür sorgst, dass dein Programm Entscheidungen trifft oder was es tun soll wenn etwas Unerwartetes passiert.

## Warum sind sie relevant?

Das Gute an Konzepten ist, dass wenn du sie grundlegend verstehst, ihre Implementierung einfacher ist als wenn du einfach ohne Vorwissen drauflos gestartet wärst! Du solltest ein Konzept verstehen, um seine Implementierung schneller zu verstehen anstatt alles immer von Anfang an zu lernen.

## Begriffe über Codeausführung

<ul>
  <li>Compiler: Ein Compiler ist ein Programm, welches deinen Code in eine Sprache übersetzt die dein Computer verstehen kann. Alle Programmiersprachen enden schlussendlich als Binärcode.</li><br />
  <li>Interpreter: Ebenso ein Programm, welches deinen Code in eine maschinenlesbare Form übersetzt. Der Unterschied zum Compiler besteht darin, dass Teile des Codes nach Bedarf übersetzt werden anstatt alles aufeinmal.</li>
</ul>

## Begriffe über wie man programmiert

_Ein Programmier Paradigma ist die Art wie du Code schreibst. Die nachfolgenden Begriffe sind verschiedene Arten Code zu schreiben. Sei dir bewusst, dass nicht alle Programmiersprachen alle Arten Code zu schreiben unterstützen._

<details>
  <summary>Einführung in die Welt der Programmierung</summary>
    <ul>
      <details>
        <summary>OOP(Objekt Orientierte Programmierung)</summary>
        Objekt Orientierte Programmierung konzentriert sich - wie der Name schon vermuten lässt - auf Objekte.<br />Konzepte wie Kapsulation, Vererbung als auch Polymorphie spielen eine wichtige Rolle dabei
      </details>
    </ul>
</details>

## Allgemeine Programmierbegriffe

### Methoden

Eine Methode ist eine Funktion, welche immer in einer Klasse vorzufinden ist.

> Eine Klasse ist etwas was du in manchen Programmiersprachen finden wirst, meist in solchen welche das Programmier Paradigma [Object Oriented Programming](../5_definitions-in-programming-principles/) unterstützen.<br/>
> Einfach gesagt, ist eine Struktur in der du deinen Code einbettest.

### Functions

Eine Funktion ist ein wiederverwendbarer Block an Code, den du aufrufen kannst um entweder einen Rückgabewert zu erhalten oder etwas zu modifizieren.

#### Where to find them

In Java wirst du zum Beispiel nur Methoden finden, da es in Java keine Funktionen außerhalb von Klassen geben kann.

Im Gegensatz dazu, kannst du in Python sowohl Methoden als auch Funktionen vorfinden, da Python das Vorkommen von Funktionen außerhalb von Klassen erlaubt.<br />
Zusätzlich dazu unterstützt Python auch verschiedene Programmier Paradigmata (OOP, Dynamisch, Prozedural).

### Schleifen

Eine Schleife ist etwas, das manche Programmiersprachen über Schlüsselwörter bieten, bei welchen du den Code in einen definierten Bereich packst, um ihn mehrmals ausführen zu lassen. Dieser Bereich wird oft durch Klammern (z.B. in Java) oder über Einrückungen (z.B. in Python) gekennzeichnet.

### Entscheidungwege

Es gibt 2 Hauptwege für Entscheidungswege, die du finden wirst. Eine Methode ist über sogenannte if-statements und ein anderer Weg geht über switch-statements. Wir schauen kurz an, was die sind.

#### if-statements

If-statements sind Codeblöcke, die folgende Stuktur befolgen, die über viele Programmiersprachen hinweg vorzufinden ist:

> if (Bedingung) + Codeblock

Natürlich kannst du auch definieren was passiert, wenn die Bedingung nicht erfüllt wird. Du machst das indem du die folgende Struktur zum obigen Beispiel hinzufügst:

> else + Codeblock

Merke dir, dass du oft eine Abgrenzung zwischen dem Code hast, der in diesem Bedingungsblock steht und dem der es nicht tut hast. Diese Abgrenzung funktioniert entweder über Klammern (in Java mithilfe dieser Klammern: "{}") oder über Einrückungen (In Python rückst du mit 2 Leerzeichen ein und hörst mit Einrücken auf, wenn der Codeblock enden soll).

#### switch-statements

Wenn wir über switch-statements reden, liegt oft folgende Struktur vor:

```
switch(Wert){
  catch Wert1:
    Codeblock
  catch Wert2:
    Codeblock
  .
  .
  .
  default:
    block of code
}
```

Das kann oft einfacher zu schreiben sein als if-statements, vor allem wenn man nach spezifischen Werten abgleicht.

In anderen Fällen(z.B. kompliziertere Bedingungen) kann es trotzdem besser sein bei if-statements zu bleiben.

Wie du sehen kannst ist das grundlegende Prinzip einen Wert zu übergeben und spezifischen Code auszuführen je nachdem mit welchem Wert eines Falls der Wert übereinstimmt.

Wird kein Treffer gefunden wird ein Standard Code ausgeführt.

Vergiss nicht, dass in manchen Programmiersprachen **jedes Stück Code beginnend vom ersten Treffer** ausgeführt wird, außer du definierst einen Stopp z.B. durch Schlüsselwörter wie **break** während andere standardmäßig **nur einen Fall ausführen**.

### Fehlerbehandlung

**Das letzte Kapitel dieser Lektion wird Fehlerbehandlung sein.**

Weil jede Programmmiersprache ein wenig anders mit Fehlern umgeht, werden wir hier eine kleine Abstraktion nutzen, um das Thema ein wenig verdaulicher zu machen.

Eine Beispielstruktur in Pseudo Code:

> try + Codeblock + catch + Codeblock

In diesem Beispiel kannst du das grundlegende Konzept von Fehlerbehandlung sehen. Du **versuchst(try)** etwas zu tun und wenn es fehlschlägt **fängst(catch)** du den aufkommenden Fehler ab. Die Codeblöcke im try-Block sind der überprüfte Code und der Code im catch-Block wird als _Fehlerbehandlungscode_ bezeichnet.

Wie gesagt, jede Programmiersprache geht anders mit Fehlerbehandlung um. Das bedeutet, dass du die konkrete Umsetzung dieses Konzepts für deine Programmiersprache lernen musst.
Jedoch sollte dir das Konzept der Fehlerbehandlung mittlerweile bekannter sein, was es einfacher machen wird die Details für deinen spezifischen Anwendungsfall zu lernen!
