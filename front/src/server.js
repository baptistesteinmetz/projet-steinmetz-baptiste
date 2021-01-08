//Install express server
const express = require('express');
const path = require('path');

const app = express();
console.log('here');
// Serve only the static files form the dist directory
app.use(express.static(__dirname));

app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname + 'index.html'));
});
console.log('there');

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8000);
console.log(process.env.PORT);