import Express from './router.js';

const app = new Express();

app.allMethods('/allMethods', undefined, (req, res) => res.end("Assalomu alaykum"));

app.listen(3000, () => console.log('Server is running at http://localhost:3000'));