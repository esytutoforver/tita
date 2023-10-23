const express  = require('express'); // explain this line
const app = express();
const port = 8080
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.static('public'))

app.get('/send/:title', function(req, res) { 
  //res.sendFile(__dirname +  "/views/send.html");
  res.render('send', {
    title: req.params.title,
    data: [
      { title: "learn html 5", price: 150, qte: 15 },
      { title: "learn html", price: 150, qte: 15},
    ]
  })
});
app.get('/para/:para1', (req, res) => {
  res.send(`Hello World: ${ req.params.para1 } ${ req.query.age }`);
});

const mongoose = require('mongoose'); // describe

mongoose.connect('mongodb+srv://indexed:aqwxsz@mongodb01.hmpqf.mongodb.net/biblio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Other options (if needed)
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


const Article = require('./models/Article');
app.get('/articles', async(req, res) =>{
  const articles = await Article.find();
  res.send(articles);
});
app.post('/articles',  (req, res) =>{
  const article = new Article();
  article.title = req.body.title;
  article.price = req.body.price;
  article.qte = req.body.qte;
   article.save()
   .then( ()=> {res.json(article);})
   .catch( (error) => {res.json(error)});
    
   });



const bookRoute     = require('./routes/book');
const categoryRoute = require('./routes/category');
const productsRoute = require('./routes/products');


app.use('/products', productsRoute);


app.use('/book', bookRoute);
app.use('/category', categoryRoute);

app.post('/', (req, res) => {
  res.send(req.body);
});

app.get('/', (req, res) => {
    res.send('APP GET');
})

app.listen(port, (req, res) => {
    console.log(`Server running on port 127.0.0.1:${port}`);
});