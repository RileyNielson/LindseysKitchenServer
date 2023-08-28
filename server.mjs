import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import recipes from "./routes/recipes.mjs";

const PORT = process.env.PORT || 5050;
const app = express();
const corsOptions = {
  origin: "lindseyskitchen.com"
}


app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));

app.use("/recipes", recipes);

// start the Express serve
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});