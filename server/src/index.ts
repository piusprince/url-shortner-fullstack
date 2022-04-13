import express from "express";
import config from "config";
import healthCheckRoute from "./routes/healthCheck";

const app = express();

const port = config.get("port");

app.listen(8000, () => {
  console.log(`App is running on port ${port}`);
  app.use("/healthcheck", healthCheckRoute);
});
