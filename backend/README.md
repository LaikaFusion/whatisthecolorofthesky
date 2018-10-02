YOU NEED TO CREATE THE DATABASE BEFORE THE SERVER IS STARTED

ENDPOINTS

localhost:3000/sky/view
Will display the seeds or skies in database.

localhost:3000/sky
Will take in a color as a hex value and and generate a list of URLS matching that color, then sends back a random URL from that list.

localhost:3000/sky/add


localhost:3000/sky/:id
Will return the specific sky with that ID

localhost:3000/imgur
Pulls off the imgur API some pictures with the "sky" tag