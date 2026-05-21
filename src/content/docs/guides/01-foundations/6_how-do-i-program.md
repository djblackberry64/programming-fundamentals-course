---
title: How do I program?
description: A detailed guide on how to program
---

# How do I program?

## OS (Operating system)

Your operating system is the software that talks directly to your hardware (including drivers and stuff). Knowing how things work on your operating system (OS) is crucial for all the other steps to follow when we program locally.

### Windows

Windows is the most common desktop OS on the market so let's start with this one.<br />

This OS is a propriatary(meaning commercial, not open source) OS which is developed by Microsoft and it has its own Windows kernel.<br />

It is limited in its configurability(e.g. you can't change your desktop environment) but it has great compatibility due to the fact that it's so commmon.

### MacOS

This is the second most common desktop OS on the market so let's continue.<br />

This OS too is propriatary but in contrast to Windows it's based on Unix and developed by Apple.<br />

It is also limited in its configurability and it has less compatibility because its less common.<br />
But Adobe programs are exceptionally well optimized for MacOS and you can't get around it for iOS (and for that matter ipadOS and MacOS) development.

### Linux

This is one of the least common desktop OS on the market. Multiple OSs based on the Linux kernel fall under the "Linux OS" category.<br />

Compared to the other two Linux is open source (meaning the source code is available for everyone to see and modify) and is (like MacOS) Unix based.<br />

In the past drivers were extremely limited for Linux but that - among other things like software support - have improved drastically in recent years.<br />
It's also the most configurable one (you can even run it without an desktop environment!) and it has the most options to choose from.

### Other

This is the section with fairly rare desktop OSs or mobile OSs.<br />

> We will still take a quick look at them as some of them will be platforms we develop for.

<details>
  <summary>Other OSs</summary>
  <ul>
    <details>
      <summary>BSD</summary>
      "BSD(Berkely Software Distribution), also known as Berkely Unix, is a discontinued Unix operating system developed and distributed by the Computer Systems Research Group (CSRG) at the University of California, Berkely." - <a href="https://en.wikipedia.org/wiki/Berkeley_Software_Distribution">Cited from WikiPedia</a>
    </details>
    <details>
    <summary>Android</summary>
    Android is one of the most common mobile operating systems(phone-tablets) and it's developed by Google.<br />
    <details>
    <summary>It's also one of the most open ones out there, both because of it's:</summary>
     1. open source nature<br />
     2. And it's open platform where you can run your own Android apps(although this seems subject to change recently)<br />
    </details>
    <a href="https://en.wikipedia.org/wiki/Android_(operating_system)">Visit this site for more information</a>
    </details>
    <details>
    <summary>iOS and iPadOS</summary>
    iOS is the other big player in the mobile OS market while iPadOS is an iPad only OS.<br />
    They're both developed by Apple and you'll need an Apple device for their development (either through MacOS with its emulator or the physical phone/tablet itself).<br />
    More information can be found at:
    <a href="https://en.wikipedia.org/wiki/IOS">iOS</a>,
    <a href="https://en.wikipedia.org/wiki/IPadOS">iPadOS</a>
    </details>
  </ul>
</details>

## IDE

An Integrated Development Environment (IDE) is a program which is used to develop software.</br>
It often includes special development tools for writing and debugging (correcting mistakes in a programm) code.</br>
Popular examples include VSCode, Zed and JetBrains IDEs.

_But there's a difference about the approaches an IDE might take._<br />

There are IDEs like VSCode or Zed for example which take a more plugin based approach, meaning most of the functionality comes from plugins.<br />
Whereas IDEs like the ones from JetBrains have most functionality already at the core of the application.

_There are both up and downsides to these approaches:_<br />

Plugin based approach: Setup can be tedious, but the core application itself remains lightweight.<br />
Core functionality based approach: Setup is often not required or easier, but the core application itself can be bloated for certain use cases.

## Installations

Depending on which OS you chose the installation process for the required software can look quite different.
The most stark difference though is between Windows and MacOS/Linux.

### Windows Installations

Windows installations mainly involve downloading an .exe file and executing it to start the setup.<br />
You'll rarely use the terminal in Windows to do installations except when using <a href="https://learn.microsoft.com/en-us/windows/package-manager/winget/">winget</a> - an open source tool that allows for applications to be installed via the command line.

Note: Oftentimes you'll also need to edit your system's variables or user environment variables to complete the install.

For a guide on how to do that: <a href="https://www.howtogeek.com/787217/how-to-edit-environment-variables-on-windows-10-or-11/">Click this link</a>

### MacOS Installations

MacOS installations can be both done by installing graphically or installing via the command line.

_Note: Installations of regular apps are often done via graphical installations.</br>Development tools are often installed via the command line._

#### Graphical Installations

Mac App Store and manual installs via DMG/PKG files are the main ways to install apps on macOS.

#### CLI (command line interface) Installations

If you install things via the CLI you should use a package manager like homebrew.<br />
Here is a guide to install the homebrew package manager: <a href="https://brew.sh/">Link to guide</a>

### Linux Installations

In contrast to Windows or MacOS the main way to install things in Linux is through the command line.<br />
But there's also a little thing to note here:

**Linux distributions tend to use a package manager that is shared within a distribution family.<br />
(e.g. Debian-based, Fedora-based, Arch-based)**

This means that for example:

- APT, used by Debian and Debian based distros
- DNF, used by Fedora(+RHEL) and Fedora based distros
- Pacman, used by Arch and Arch based distros

_But don't be mistaken. You can also install graphically in Linux._

In comparison to the other OSs you can/have to install support for these app/package formats(if not preinstalled in your distro) for example: snap, Flatpack

But there's also package types used by distributions that come with support in their respective distribution family:

- .deb files (on Debian based distros)
- .rpm (on Fedora based distros)
- .pkg.tar.zst package (on Arch based distros)
