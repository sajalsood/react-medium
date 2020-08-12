const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 5000;
const routes = require('./routes');

app.use(cookieParser());
app.use(express.json());
app.use(express.static('./build'));

app.get('/session', routes.session.status);
app.post('/session', routes.session.create);
app.delete('/session', routes.session.remove);

app.get('/blogs', routes.blogs.all.read);
app.get('/blogs/:blogId', routes.blogs.one.read);
app.get('/blogs/user/:userId', routes.blogs.user.read);

app.post('/blogs/user/:userId', routes.blogs.user.add);
app.put('/blogs/user/:userId', routes.blogs.user.update);
app.delete('/blogs/user/:userId/:blogId', routes.blogs.user.delete);

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`) );
