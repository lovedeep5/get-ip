# get-ip
Simple API will give you json data back with user IP only.
https://get-ip-only.herokuapp.com/

#how to use the API.

in your javascript app (node.js, react.js, vanila.js)

fetch('https://get-ip-only.herokuapp.com/').then(r => r.json).then(res => console.log(res.ip));

above code will log user ip address in the browser. 
