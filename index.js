const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    www = process.env.WWW || './';


app.use(express.static(www));
console.log(`serving ${www}`);
app.get('*', (req, res) => {
   res.send({hi:'there'});
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));