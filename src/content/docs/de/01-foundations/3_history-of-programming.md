---
title: Die Geschichte der Programmierung
prev: "de/01-foundations/2_what-is-programming/"
next: "de/01-foundations/4_definitions-in-programming-concepts/"
---

# Die Geschichte der Programmierung

Wir haben einen laaaangen Weg vor uns - bis wir dort ankommen, wo wir heute stehen. Lass mich dich auf eine kleine Reise mitnehmen...

<figure>
    <img src="../../../resources/img/biker_embarking_on_journey.jpeg"
         alt="Österreich, Zufälliger Hügel" width="300">
    <figcaption>Eine Radfahrerin auf dem Weg zu einer Reise in den Horizont</figcaption>
</figure>

## Die bescheidenen Anfänge der Programmierung

### Textilien und Lochkarten

Die ersten Programme wurden nicht auf einem Bildschirm geschrieben. Hey, sie wurden nicht einmal wirklich geschrieben!

Sie wurden in Lochkarten gestanzt und zeigten keine schöne grafische Oberfläche an. Sie wurden dafür genutzt um die Automatisierung von Maschinen beim Weben voranzutreiben.

### Wir wollen rechnen!

Nicht nur unsere geliebte Informatik-Truppe wollte, dass die Technik funktioniert. Mathematiker und der S.T.E.M. Bereich im Allgemeinen hatten einen immensen Einfluss auf die Entwicklung der modernen Technik.

Sie haben auch ihre Spuren im Bereich hinterlassen:

Dinge wie Lambda Ausdrücke (oft mit Python Funktionen zu sehen, [stammend vom Lambda Kalkül](https://de.wikipedia.org/wiki/Lambda-Kalk%C3%BCl) oder wie Programmiersprachen mit mathematischen Operationen umgehen, sind heutzutage immer noch relevant.

### Zwei Ursprünge des modernen Computing

Letzten Endes, gab es zwei Strömungen:
eine aus dem Engineering-Bereich, eine weitere aus der theoretischen Mathematik.
Beide gingen jedoch anders an die Sache heran.

Während Computer Engineering über die konkrete Implementierung nachdachte (zum Beispiel: Rekursion so schnell wie Schleifen machen), legte die theoretische Mathematik den Fokus eher auf den theoretischen Ansatz von Computing:

Wenn es formal beschreibbar ist, war es theoretisch gelöst – unabhängig davon, wie praktisch umsetzbar es ist. Gut demonstriert am Beispiel von Wurzeln im Ergebnis stehen lassen:

Ein Quadrat mit Seiten von 1, Berechnung seiner Diagonale

$$
{\sqrt {{1 ^ 2} + {1 ^ 2}}} = \sqrt 2
$$

**Moderne Programmierung ist letztlich das Zusammenspiel dieser beiden Perspektiven.**

## Die Low Level Programmiersprachen als Vorfahren

### Was sind diese Sprachen?

Frühe Low-Level-Sprachen sind Sprachen, die mit den Anfängen der Programmierung in Verbindung gebracht werden, da sie öfters als die Basis dienten, auf der andere Sprachen aufbauten.

### Darf ich deinen Compiler haben?

> Wenn du noch mehr darüber erfahren willst, was ein Compiler ist, gehe bitte zur nächsten Lektion.
>
> Damals war es üblich für Programmiersprachen ihren Compiler auf einer bereits existenten Compiler Plattform/Programmiersprache zu schreiben.
>
> Frühe Compiler wurden oft in Assembly geschrieben, spätere konnten sich selbst kompilieren (self-hosting).
>
> Ein bekannter Fall von so etwas ist die Programmiersprache C gewesen:

Kurz: C hat Assembly genutzt um seinen Compiler zu schreiben.

> Ein Compiler ist ein Programm, dessen Funktion darin besteht, den Code den du schreibst in eine Sprache zu übersetzen die Computer verstehen _Binärcode_.

> Ein Interpreter ist auch ein Programm, welches zur Codeausführung genutzt wird, aber anstatt den ganzen Code auf einmal zu übersetzen wie der Compiler es tut, werden nur die gerade benötigten Teile übersetzt.

> Code ist was du schreibst um ein Programm zu schreiben, dass der Computer mithilfe des Compilers ausführen kann.

**Jetzt fragst du dich vielleicht: Wie kann dann C Code im Code vom C Compiler stehen, wenn ich mir den Quellcode des Compilers ansehe?**

Schauen wir uns an was hier passiert ist:

Also der C Compiler basiert auf Assembly Code, welcher wiederum zu Binär Code übersetzt wird.

_Wie kann der Compiler dann in C geschrieben sein? - Einfach. Er ist es (anfangs) nicht._

Unter der Haube ist alles Binärcode. Sie haben nur Assembly (eine lesbare Repräsentation von Binärcode) verwendet um die notwendigen Teile des Sprachen Compilers zu schreiben und konnten dann den Rest in C schreiben, um die Funktionalität zu erweitern.

Wenn man sich einen konkreten Compiler Borrowing Verlauf ansieht:

Binary > Assembly > C (1973, Dennis Ritchie) > C++ (1983, Bjarne Stroustrup) > Java (1995, Sun Microsystems) > Kotlin (2011, JetBrains)

**Dies ist nur einer von mehreren Entwicklungssträngen – viele Sprachen entstanden parallel oder beeinflussten sich gegenseitig.**

## Der Zuwachs an Beliebtheit in den 90er

Im Anschluss an die Sprachen, die auf Assembler und anderen Low Level Sprachen aufbauten, sorgten High Level Sprachen wie Java und Python für einen Zuwachs an Beliebtheit für den Bereich der Softwareentwicklung.

Während Low Level Sprachen eine granulare Speicherkontrolle bereitstellten, stellten High Level Sprachen Abstraktionen zur Verfügung, die schnellere Entwicklung ermöglichten und andere Nutzungsszenarien ansprachen, bei denen Speicherkontrolle nicht der Hauptfokus war.

Das Websprachen Trio bestehened aus HTML, CSS und JavaScript wurde auch in dieser Zeit geboren und erlaubte es dem sich entwickelnden Internet zu wachsen.

All dies wurde durch mehrere Trends zu dieser Zeit ermöglicht:

<ul>
    <li>
    Der Aufstieg von PCs
    </li>
    <li>
    Der attraktive Tech Arbeitsmarkt zu der Zeit
    </li>
    <li>
    Die Zunnahme von Tech Unternehmen und ihrem Bedarf an technisch versierten Arbeitskräften
    </li>
</ul>

## Der dot com Absturz

Nach einem High folgt ein Low...

<figure>
    <img src="../../../resources/img/clinical_chairs.jpeg"
         alt="Zwei gewöhnliche Stühle von uns abgewandt, starker Kontrast und viele Schatten, dunkles Bild" width="300">
    <figcaption>Zwei Stühle uns abgewandt, lösen ein Gefühl der Verlassenheit aus.</figcaption>
</figure>

Der dot com Absturz war eine der gravierensten Rückschläge für den Bereich der Software Entwicklung.

Er wurde durch die hohe Spekulation und die wachsende Diskrepanz zwischen Tech Investments und ihrem niedrigen ROI (Return On Investment = (vereinfacht) was bekommst du für deine Mühen) ausgelöst.

Viele Startups scheiterten in dieser Zeit.

Arbeitslosigkeit stieg dramatisch wegen den Massenentlassungen an und der Arbeitsmarkt war von hoher Konkurrenz geprägt, da neue Rollen durch die Verkleinerung oder das Einstellen von Online Projekten durch Unternehmen verschwanden.

Der Arbeitsmarkt hatte nicht nur Stellen verloren, sondern die jetzt arbeitslosen Softwareentwickler sahen sich einem übersättigten Arbeitsmarkt gegenüber, in welchem das Finden eines Jobs in diesem Bereich fast unmöglich war.

## Die "start to code" Bewegung

Nachdem der Arbeitsmarkt sich erholte, machte die 2010er "start to code" Bewegung Computer Science wieder beliebt.<br />

Es wurden mehr Ressourcen und Tutorials als je zuvor für Beginner erstellt und Regierungen priesen Computer Science Fähigkeiten als "grundlegende Fähigkeit in der modernen Gesellschaft".

Aber wie es mit jedem Hype so ist, muss er auch wieder enden. Gegen Ende der 2010er bzw. Anfang der 2020er Jahre war der Hype längst wieder verflogen.

## Die Corona Pandemie Wiedergeburt

Dann traf uns Corona...<br />

Ich werde jetzt nicht viele Wort über unser _Lieblingsvirus_ hier verlieren, aber eine Sache die es tat, war den Hype um den Computer Science Bereich wiederaufleben zu lassen.

Es gibt ein paar Schlüsselfaktoren, warum eine Wiedergeburt des Hypes in der Zeit der Pandemie zustande kam:<br />

<ul>
<li>Einer davon war das viele Leute zuhause waren und mehr digitale Medien/Produkte konsumierten.</li><br />
<li>Ein weiterer Grund ist, dass Menschen in einem Ausmaß mit der digitalen Welt interagiert, welches zuvor nie dagewesen war.</li>
</ul>

## Die derzeitige Stagnation

Die derzeitige Stagnation lässt sich auf mehrere dazu beitragende Ursachen zurückführen:

<ul>
<li>Erstens hatten wir das übermäßige Anheuern in der Pandemie, welches dann in Massenentlassungen endete.</li><br />
<li>Zweitends haben wir die Übersättigung des Arbeitsmarktes im Computer Science Bereich, was die Anforderungen für Neueinsteiger und eigentlich alle, die einen Job in diesem Bereich wollten, höher setzte.</li><br />
<li>Als letzten Punkt lässt sich hier noch die Rechtfertigung von Massenentlassungen anführen.<br />
Dies geschah oft nach dem übermäßigen Anheuern in der Pandemie.<br />
Als Deckmantel wurde hierfür die Implementierung von neuen Automatisierungstechnologien wie KI herangezogen.</li>
</ul>

**Diese historische Progression sollte uns allen bewusst machen, dass technischer Fortschritt nicht linear, sondern zyklisch ist.**
