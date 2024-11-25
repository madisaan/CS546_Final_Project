import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.use('/public', express.static('public'));
app.use(express.json());   
app.use(express.urlencoded({extended: true}));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000);