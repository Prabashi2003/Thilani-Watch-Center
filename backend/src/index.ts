import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import watchRoutes from "./routes/watchRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import brandRoutes from "./routes/brandRoutes";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/watches", watchRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/brand", brandRoutes);

app.get("/", (_, res) => {
  res.send("Watch Backend Running 🚀");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
