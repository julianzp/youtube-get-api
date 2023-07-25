const app = require('./app');

const PORT = 3000;

// Run the App locally
app.listen(PORT, () => {
  console.log(`running in http://localhost:${PORT}`);
});
