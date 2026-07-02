---
title: Wie programmiere ich?
prev: "de/01-foundations/4_definitions-in-programming-concepts/"
next: "de/02-language-specific-lessons/1_intro/"
---

# Wie programmiere ich?

## OS (Operating system = dt. Betriebssystem)

Dein Betriebssystem (OS) ist eine Software, die direkt mit deiner Hardware kommuniziert (zusätzlich mit Gerätetreibern und anderen Sachen). Das Wissen darüber wie Dinge auf deinem Betriebssystem (OS) funktionieren ist essenziell für das Befolgen aller anderen Schritte, die wir durchführen werden, wenn wir lokal(d.h. bei uns auf dem Gerät) programmieren.

### Windows

Windows ist das häufigste Betriebssystem auf dem Markt also starten wir mit diesem.<br />

Dieses Betriebssystem ist ein properitäres(kommerziell, nicht open source) Betriebssystem, welches von Microsoft entwickelt wird und seinen eigenen Windows Kernel hat.<br />

Es ist limtiert in seiner Anpassbarkeit (z.B. kann man die Desktopumgebung nicht ändern) aber es hat eine sehr gute Kompatibilität dadurch, dass es so häufig ist.

### MacOS

MacOS ist das zweithäufigste Betriebssystem am Markt also lass uns doch gleich damit weitermachen.<br />

Dieses Betriebssystem ist auch properitär aber im Gegensatz zu Windows basiert es auf Unix und wird von Apple entwickelt. <br />

Es ist auch limitiert in seiner Anpassbarkeit und es hat weniger Kompatibilität, da es weniger häufig als Windows ist.<br />
Jedoch sind Adobe Programme außergewöhnlich gut für MacOS optimiert und du kommst für die iOS Entwicklung (und ehrlich gesagt auch die iPadOS und MacOS Entwicklung) nicht daran vorbei.

### Linux

Linux ist einer der seltensten genutzten Betriebssysteme (OS) im Gegensatz zu Windows & MacOS. Verschiedenste Betriebssysteme basierend auf dem Linux Kernel fallen unter die Kategorie "Linux Betriebssystem".<br />

Im Vergleich zu den anderen beiden Betriebssystemen ist Linux open source (was heißt, dass der Quellcode für jeden zur Ansicht und Modifikation zur Verfügung steht) und ist (wie MacOS) basierend auf Unix.<br />

In der Vergangenheit waren Gerätetreiber auf Linux sehr limitiert aber dies - zusätzlich zu anderen Dingen wie Softwareunterstützung - haben sich in den letzten Jahren dramatisch verbessert.<br />
Es ist auch das anpassbarste Betriebssystem unter den Dreien (du kannst es sogar ohne Desktop Umgebung laufen lassen!) und es hat die meisten Optionen (quasi Ableger von Linux) zwischen denen man wählen kann.

### Andere

Das ist die Sektion mit den relativ seltenen Desktop Betriebssystemen oder Betriebssystemen für mobile Geräte.<br />

> Wir werden trotzdem einen Blick auf sie werfen, da ein paar hiervon Plattformen sein werden für die wir entwickeln.

<details>
  <summary>Andere Betriebssysteme</summary>
  <ul>
    <details>
      <summary>BSD</summary>
      "BSD(Berkely Software Distribution), auch bekannt als Berkely Unix, ist eine eingestellte Variante des Betriebssystems Unix, entwickelt und vertrieben von der "Computer Systems Research Group (CSRG)" von der Universität von Californien, Berkely." - <a href="https://de.wikipedia.org/wiki/Berkeley_Software_Distribution">Nachempfunden von WikiPedia</a>
    </details>
    <details>
    <summary>Android</summary>
    Android ist eines der führenden Betriebssysteme im Bereich der mobilen Betriebssysteme (Handys-Tablets) und wird von Google entwickelt.<br />
    <details>
    <summary>Es ist auch eines der offensten da draußen, da es sowohl</summary>
     1. open source ist.<br />
     2. Als auch eine offene Plattform ist, auf welcher du deine eigenen Android Apps laufen lassen kannst (obwohl sich dies in nächster Zeit ändern könnte)<br />
    </details>
    <a href="https://de.wikipedia.org/wiki/Android_(Betriebssystem)">Besuche diese Seite für mehr Informationen</a>
    </details>
    <details>
    <summary>iOS und iPadOS</summary>
    iOS ist ein weiterer Big Player im Markt von mobilen Betriebssystemen während iOS ein iPad only Betriebssystem ist.<br />
    Sie werden beide von Apple entwickelt und du brauchst ein Apple-Gerät für die Entwicklung für diese Plattformen (entweder durch MacOS mit seinem Emulator oder mit dem physischen Handy/tablet an sich).<br />
    Mehr Informationen lasen sich auf folgenden Seiten finden:
    <a href="https://de.wikipedia.org/wiki/IOS_(Betriebssystem)">iOS</a>,
    <a href="https://de.wikipedia.org/wiki/IPadOS">iPadOS</a>
    </details>
  </ul>
</details>

## IDE (Integrated Development Environment = dt. Entwicklungsumgebung)

Eine Entwicklungsumgebung (IDE) ist ein Programm, welches für die Entwicklung von Software genutzt wird.</br>
Es ist beinhaltet oft spezielle Entwicklungswerkzeuge für das Schreiben und Debugggen (das Korrigieren von Fehlern in einem Programm) von Code.</br>
Beliebte Beispiele stellen VSCode, Zed und JetBrains IDEs dar.

_Aber es gibt Unterschiede in den Ansätzen, die eine IDE verfolgt._<br />

Es gibt IDEs wie VSCode oder Zed, die eher einen plugin-basierten Ansatz verfolgen. Das bedeutet der Großteil der Funktionalität wird aus Plugins bezogen.<br />
Wohingegen IDEs wie die von JetBrains die meiste Funktionalität schon im Kern der Anwendung haben.

_Es gibt Vor- und Nachteile bei beiden Ansätzen:_<br />

Plugin-basierter Ansatz: Einrichtung kann langwierig sein, aber die Kernanwendung bleibt leicht.<br />
Kernfunktionalität Ansatz: Einrichtung ist oft nicht benötigt oder einfacher, aber die Kernanwendung kann ziemlich übertrieben für bestimmte Szenarien sein.

## Installationen

Je nachdem was für ein Betriebssystem du auswählst, kann der Instalationsprozess für die benötigten Programme ziemlich anders ausfallen.
Der gravierendste Unterschied besteht jedoch zwischen Windows und MacOS/Linux.

### Windows Installationen

Windows Installationen bestehen hauptsächlich daraus eine .exe-Datei herunterzuladen und diese für den Start der Einrichtung auszuführen.<br />
Du wirst selten die Konsole in Windows für Installationen verwenden außer du nutzt <a href="https://learn.microsoft.com/en-us/windows/package-manager/winget/">winget</a> - ein open source Werkzeug, dass es einem ermöglicht Programme über die Konsole zu installieren.

Merke: Du wirst meistens auch die Umgebungsvariablen für das System oder deinen Benutzer ändern müssen.

Für eine Anleitung, wie man das macht: <a href="https://bodo-schoenfeld.de/umgebungsvariablen-in-windows-11-bearbeiten/">Klick mich!</a>

### MacOS Installationen

MacOS Installationen können sowohl graphisch als auch über die Konsole durchgeführt werden.

_Merke: Die Installation von regulären Apps wird oft graphisch durchgeführt.</br>Anwendungen für die Softwareentwicklung werden oft über die Konsole installiert._

#### Graphische Installationen

Der Mac App Store und manuelle Installationen über DMG/PKG-Dateien sind die häufigsten Wege um Apps auf MacOS zu installieren.

#### CLI (command line interface = dt. Konsole) Installationen

Wenn du etwas in MacOS pber die Konsole installierst solltest du einen Package Manager wie Homebrew verwenden.<br />
Hier ist ein Tutorial wie man den homebrew package manager installiert: <a href="https://brew.sh/de/">Link zum Tutorial</a>

### Linux Installationen

Im Gegensatz zu Windows oder MacOS installiert man Dinge in Linux meistens über die Konsole und nicht graphisch.<br />
Aber hier ist auch eine kleine Sache anzumerken:

**Linux Distributionen(umgs. "Distros") tendieren dazu einen Package Manager zu nutzen, der innerhalb einer Distributionsfamilie geteilt wird.<br />
(e.g. Debian-basiert, Fedora-basiert, Arch-basiert)**

Das heißt zum Beispiel:

- APT, verwendet von Debian und Debian basierten Distros
- DNF, verwendet von Fedora(+RHEL) und Fedora basierten Distros
- Pacman, verwendet von Arch und Arch basierten Distros

_Aber denkt ja nicht, dass wäre der einzige Weg. Du kannst auch graphisch in Linux installieren._

Im Gegensatz zu anderen Betriebssystemen kannst/musst du Unterstützung für diese App-/Paketformate (wenn nicht auf deiner Distribution vorinstalliert) herunterladen. Zum Beispiel: snap, Flatpack

Aber es gibt auch Paketformate, welche von Distributionen verwendet werden, welche mit vorinstallierter Unterstützung in ihrer jeweiligen Distributionsfamilie kommen:

- .deb Dateien (auf Debian basierten Distributionen)
- .rpm (auf Fedora basierten Distributionen)
- .pkg.tar.zst Pakete (auf Arch basierten Distributionen)
