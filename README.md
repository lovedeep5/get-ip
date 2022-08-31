# get-ip
Simple API for the user IP only
https://get-ip-only.herokuapp.com/

Node.js, express used simple api, tracking nothing just giving you back json data on get request.

#how to use the API.

in your javascript app (node.js, react.js, vanila.js)

fetch('https://get-ip-only.herokuapp.com/').then(r => r.json).then(res => console.log(res.ip));

above code will log user ip address in the browser. 
