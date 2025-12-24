import express, { Application } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes


// Root endpoint
app.get('/', (req, res) => {
  res.send('Express TypeScript Backend is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
