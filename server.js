const express = require('express');
const app = express();
const PORT = 3000;

// Serve frontend and backend
app.use(express.static('src'));

app.listen(PORT, () => {
  console.log(`DaveCom-Retail Shopping Cart running on port ${PORT}`);
});
