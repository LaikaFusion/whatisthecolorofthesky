YOU NEED TO CREATE THE DATABASE BEFORE THE SERVER IS STARTED.

ON ANY START THE SERVER PULLS EVERY COLOR IN THE DB INTO MEMORY, IF THIS IS NOT THERE IT'LL FAIL AND YOU'LL THINK YOU CAN FIX IT AND YOUR FIX WILL WORK BUT REALLY YOU DIDN'T FIX IT YOU JUST DELAYED THE PROBLEM BECAUSE YEAH YOU HAVE A WORKING DB BUT IF YOU'D HAVE JUST CREATED A DB FIRST THEN THIS WOULDN'T HAVE BEEN A PROBLEM NOW WOULD IT?

ENDPOINTS


GET:<URL>/sky/view
  
Will display the seeds or skies in database.


POST:<URL>/sky
  
Input: {"color":"#<colorvalue>"} : must be 7 char string
  
Will take in a color as a hex value and and generate a list of URLS matching that color, then sends back a random URL from that list. If the color isn't in the DB it attempts to calculate the nearest one


POST: <URL>/sky/add
  
Input: {"images":"['<image url>']"} : a string that's really an array of urls
  
Processes and adds the urls to database


POST: <URL>/sky/addraw
  
Input: {"images":"[{url:<image url>, color1:<first hex color>, color2:<first hex color>, color3:<first hex color>, color4:<first hex color>, color5:<first hex color> }]}" : a string that's really an array of objects which has six string values

Adds color objects straight to the db so you can do the processing and hosting seprate


GET: <URL>/colorrefresh
  
This reloads all the db colors into memory if you added to the db, or something else happened


POST: <url>/imgur
  
Input: {"pages":<page number from the imgur results you want to pull>, "secretpass":<imgur client id that matches the one in the ENV>} :pages is a number, secret pass is a string
  
Pulls off the imgur API some pictures with the "sky" tag. This is an incredibly memory/cpu intensive task, and could potentionally take multi gigs of ram. Heroku is not happy if you run this on the free teir


ENV FILE STUFF
CLIENTID=<IMGUR CLIENT ID>
PORT=<PORT YOU WANT EXPRESS TO USE>
