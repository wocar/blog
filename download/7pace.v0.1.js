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
