const express = require('express');
const app = express();
const signupRoute = require('./routes/signup');

app.use(express.json());
app.use('/signup', signupRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
