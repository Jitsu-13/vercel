const app = require('./src/app.js');
const port = process.env.PORT || 8001;

app.get('/home', (req, res) => {
   res.status(200).json('Welcome, your app is working well');
 })

// Server
app.listen(port, () => {
   console.log(`Listening on: http://localhost:${port}`);
});