---
title: Definitionen in der Programmierung (Prinzipien)
description: Defintionen über Programmierprinzipien im Detail erklärt
---

## Lernziele

Fragen, die in dieser Lektion beantwortet werden sollen:<br />

<ul>
<li>Was sind verschiedene Prinzipien in der Programmierung?</li>
<li>Warum sind diese relevant?</li>
<li>Wie werden sie in verschiedenen Programmiersprachen umgesetzt?</li>
</ul>

## Was sind verschiedene Prinzipien in der Programmierung?

Prinzipien in der Programmierung sind oft abstraktere Konzepte, welche oft Design Entscheidungen oder verschiedene Wege wie man programmiert umfassen und weniger eine spezifische Sache behandeln.

## Warum sind diese relevant?

Prinzipien in der Programmierung sind relevant, da sie Organisation fördern, sollten die Leute sie denn befolgen.

Du würdest doch nicht 10 verschiedene mögliche Ladestecker für dein Handy haben, oder? (Mit dem Vereinheitlichen und fordern von bestimmten Anforderungen nach denen etwas beurteilt wird, beschäftigt sich die **Standardtisierung** )

## Wie werden diese in verschiedenen Programmiersprachen umgesetzt?

Manche Prinzipien können in einer Programmiersprache stärker vertreten sein, als in einer anderen. Manche konzentrieren sich auf Lesbarkeit, andere auf Geschwindigkeit.

Jedoch sind universellere Dinge wie Standardtisierung oder Modularisierung häufiger anzutreffen, da sie das Arbeiten mit einer Programmiersprache (und ihres Ökosystems) vereinfachen.

## Begriffe darüber wie man programmiert (Paradigmen)

_Ein Programmier Paradigma ist die Art wie du Code schreibst._

_Die folgenden Begriffe beschreiben unterschiedliche Arten Code zu schreiben._

_Sei dir bewusst, dass nicht jede Programmiersprachen alle Arten unterstützt._

<details>
  <summary>Einführung in die Welt der Programmierung</summary>
    <ul>
      <details>
        <summary>OOP(Objekt Orientierte Programmierung)</summary>
        OOP(Objekt Orientierte Programmierung) arbeitet - wie der Name schon vermuten lässt - mit Objekten.<br />
        Konzepte wie Kapselung, Vererbung als auch Polymorphie spielen eine wichtige Rolle in diesem Programmier Paradigma.
      </details>
    </ul>
</details>

### Kapselung

Kapselung bedeutet die Abhängigkeiten und Anforderungen einer spezifischen Sache in einem separaten Bereich zu haben anstatt beispielsweise alles in die Hauptanwendung zu stopfen.

> Modul A (Abhängigkeiten und Anforderungen) ist ein Teil vom größeren Programm M mit seinen eigenen Abhängigkeiten + Anforderungen.

### Modularisierung

Modularisierung geht oft Hand in Hand mit Kapselung. Du kannst bestimmte Funktionalität auf bestimmte Teile auslagern.

**Zum Beispiel kümmert sich Teil A um Nutzereingaben, Teil B um Zahlungsabwicklung und Teil C verwaltet deinen Lagerbestand**

Das Ziel von Modularisierung ist eine nahtlose Integration der Einzelteile mit der Kernanwendung, ohne die Kernanwendung mit unnötiger Funktionalität zu überladen.

Sie hilft auch dabei, Probleme zu identifizieren, um sie leichter auf konkrete Teile zurückzuführen.

### Lesbarkeit

Lesbarkeit ist oft ein Kernaspekt, wenn es darum geht, wie leicht eine Programmiersprache zu lernen ist.

Ein schlechtes Beispiel hierfür wäre die Sprache [brainfuck](https://brainfuck.net/learn) während eines der besseren [Python](https://www.python.org/) wäre.

_Python sticht in seiner Lesbarkeit durch seine große Ähnlichkeit zur englischen Sprache(was eine ziemlich universelle Sprache ist) heraus._

Aber nicht nur die Ähnlichkeit zu menschlichen Sprachen macht eine Programmiersprache lesbarer, sondern auch die Menge an Code, die für ein bestimmtes Ergebnis notwendig ist.

Je mehr Zeilen du schreibst, desto eher wirst du einen Fehler machen.

## Regeln vs. Konventionen vs. Standards

Es gibt oft viele verschiedene Dinge, die du im täglichen Leben befolgst.
Diese sind **Regeln**, **Konventionen** und **Standards**

Sie werden oft als Synonyme untereinander verwendet, aber das Verstehen ihrer Unterschiede wird essentiell für produktive Zusammenarbeit sein, welche wir in der [fortgeschrittenen Sektion](../../03-advanced-section/2_collaboration/) behandeln.

### Regeln

Wir sind alle mit dem Konzept einer Regel vertraut. Ich würde sagen, die folgenden 2 Konzepte basieren hierauf.

Eine Regel ist etwas, dass du kennenlernst (sei es schriftlich, erzählt oder auf andere Art) und deren Rat du befolgst.

Das Konzept einer Regel an sich ist ziemlich einfach und gut anpassbar. Erst wenn man zu Konventionen oder Standards kommen, werden die Konzepte spezifischer.

### Konventionen

Eine Konvention ist etwas das als Erweiterung des Regelkonzepts verstanden werden kann.

Zuerst einmal sind Konventionen (oft) sozial. Eine Gruppe an Personen (eine Gemeinschaft) einigt sich auf ein paar Regeln, die sie alle versprechen nach bestem Gewissen einzuhalten.

Konventionen sind oft nicht förmlich festgehalten sondern werden öfters implizit gelernt.

Das unterscheidet sie auch von Standards, obwohl eine Konvention oft als Vorgänger eines Standards auftritt.

### Standards

Was ist ein Standard? Denke an das was du über Konventionen gelernt hast, aber es wird jetzt formeller.

Nun hast du Dokumentation, klarere Richtlinien, vielleicht sogar fest-verankerte Regelwerke wie Syntax.

Ein Standard ist nichts Vages (zumindest ist ein guter Standard nicht). Er ist formell beschrieben, richtig dokumentiert und noch mehr Leute haben sich darauf geeinigt.

Standards sind in deinem Alltag:

Von dem Wasser aus deinem Wasserhahn bis zu deiner Steckdose oder selbst ein Blatt Papier!

Standards sind wichtig und stammen meist (aber nicht immer) von einer Konvention, die ihnen vorrausging.

### Worauf man achten sollte

Du wirst oft zwischen einer Konvention und einem Standard abwägen müssen. Wenn nicht anders vermittelt, würde ich empfehlen bei einem bekannten Standard bei deinem Arbeitsplatz zu bleiben.

Sollte jedoch eine umgebungsspezifische Konvention vorrausgesetzt werden(zum Beispiel eine bestimmte Code Benennung, die vom regulären Standard abweicht), würde ich dir dringend empfehlen diese stattdessen zu befolgen.

Dein Arbeitsplatz wird nämlich meist erwarten, dass du diese befolgst, um deine Arbeit einzureichen.
