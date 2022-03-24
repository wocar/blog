---
layout: post
title: LINQPad on MacOS using CrossOver 21.2
date: '2022-03-23 19:16:08 -0400'
categories:
  - tools
  - linqpad
  - crossover
published: true
---

We all love LINQPad, and for sure we also love developing in our shinny MacBooks,
unfortunately these two don't get along very well.

This was the case for many years, however and luckily for all of us, CrossOver 21.2 allows
us to run LINQPad on MacOS in a somewhat stable manner.

In this tutorial simple tutorial, I'll show you how to do it because it is somewhat
tricky!

![test.jpg]({{site.baseurl}}/assets/test.jpg)

Configure CrossOver 21.2
===================

Download crossover from my affiliate link
here [https://www.codeweavers.com/crossover/download](https://www.codeweavers.com/?ad=903)

Installation should be pretty straight forward, if not take a look
at [How to install CrossOver Mac](https://www.codeweavers.com/support/wiki/mac/mactutorial/install)

_Crossover costs $59.95 for one year of support. For me
investing those extra bucks was definitely worth it. There is also a free trial_

Creating a bottle
=====
1. Click the + sign at the bottom left corner and click "New bottle..."
2. Name the bottle however you want
3. Choose "Windows 7" **(very important)** NO x64
1. Right click the bottle you just created (make sure you don't create a new one, the UI
   is tricky)
2. Choose: Install software in "Your bottle name"
3. Type and search in the list "Microsoft .NET Framework 4.5". 
4. Repeat the process and install "Microsoft .NET Framework 4.6.2"

**Sometimes the installer might seem freeze**, this could be because there is a background
window waiting for your input, don't forget to click Next-Finish-Next-Finish-Next on all the installers'
windows that popup.

Click restart now when prompted (It won't actually restart your computer)

This is how I managed to get it working.

Install LINQPad
===================

I prefer the XCopy (zip) method, however in this case it is easier to use the installer.

1. Download LINQPad 7 from
   here [LINQPad7Setup.exe](https://www.linqpad.net/GetFile.aspx?LINQPad7Setup.exe)
2. Right click you bottle and choose Install software in "Your bottle name"
3. Go to the second tab called "Choose an installer"
4. Choose the first option and select LINQPad7Setup.exe from your downloads
5. Wait for the wizard to install and click on install x86 runtime
6. Finish wizard & run linqpad from crossover

Important LINQPad config!
===================

- Enable: Preferences -> Results -> Default destination: Grid
- Always use "Results to DataGrid (Control + Shift + G)"
- Windows 7 64 bits + x86 linqpad is the most reliable version I've found ✅ 
- Windows 10 + x86 linqpad works but make sure you don't use "Results to RichText"

Summary
===================

Now you are ready to use LINQPad in MacOS in a somewhat reliable manner.

I did try many configurations, you can check out my notes here:

<details>
  <summary>Expand to view notes!</summary>
  {% highlight markdown %}

      Config 1: Most reliable ✅ (Very few crashes)
         Windows 7 64 Bits 
         NET 4.5.2 
         Unlisted application
      
         HTML results not working choose grid
         Looks ugly
         Use x86 version
         x64 version doesn't launch
      
      Config 2: 
         Windows 7
         NET 4.5.2
         Choose optimize for Notepad++
      
         Crashes from time to time
         Looks pretty
         Html Dump works
      
      Config 3:
         Windows 10 64 bit
         Productivity -> 64-bit dependencies (installs a lot of stuff, takes like 10 min to install)
      
         Doesn't even launch linqpad>
      
         
      Config 4:
         Windows 10 
         Unlisted App
      
         Keeps throwing `System.EntryPointNotFoundException`
         Reinstall and optimize for Notepad++: Crashes randomly (not as often)? (Does this even make any difference? Who knows)
         How to reproduce crashes: 
            Dump some results to HTML
            Stop typing for about a minute (without losing focus)
            Type Control-S or Command-S (save) it will crash the app
         Use legacy IE: Still crashes but not that often :(
         Workaround 1:
            Never use html dump, always dump to grid (Y)

      {% endhighlight %}

</details>
