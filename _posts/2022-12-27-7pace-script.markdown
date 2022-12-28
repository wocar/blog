---
layout: post
title: 7pace utility
date: '2022-12-27 19:16:08 -0400'
categories:
  - tools
  - 7pace
published: true
---

In our company we use a software called 7pace to fill our timesheet.

Unfortunately you can only click up to 4h in a single click. With this little script it will default to 8hrs

***

![Screenshot]({{ site.baseurl }}/assets/7pace-ss.png)

***

Download or include the script here [{{ site.baseurl }}/download/7pace.v0.1.js][1]

[1]:{{ site.baseurl }}/download/7pace.v0.1.js

You need to install tampermonkey / userscripts for it to work.

```
// ==UserScript==
// @name         7Pace Time Tracker Default 8hrs
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.timehub.7pace.com/
// @icon         https://www.google.com/s2/favicons?domain=azure.com
// @grant        none
// @require https://gist.github.com/raw/2625891/waitForKeyElements.js

// ==/UserScript==

waitForKeyElements (".hub-content", onLoad);

async function onLoad()
{
    var dialog = $(".add-time-dialog");
    if(dialog.is(":visible"))
    {
        var processed = dialog.data("processed");
        if(processed) return;
        if(!processed)
        {
            dialog.data("processed", true);
            $(".timeframe-duration").timeEntry('setTime', new Date(0, 0, 0, 8, 0, 0));
        }
    }

}

```