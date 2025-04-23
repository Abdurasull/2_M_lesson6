import Express from './router.js';

const app = new Express();

app.allMethods('/use', undefined, (req, res) => res.end("hello with use method"));

app.listen(3000, () => console.log('Server is running at http://localhost:3000'));