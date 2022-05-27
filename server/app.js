const express = require('express');
const api = require('./routes/api');
const app = express();
const morgan = require('morgan');

app.use(morgan('combined'));
app.use(express.json())
app.use('/v1', api);
console.log(process.env)
const PORT = process.env.PORT || 3001;
app.listen(3001, () => {
    console.log(`Server is running on port ${PORT}`);
}
);