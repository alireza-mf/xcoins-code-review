import express from "express";
import { PORT, DBURL, CORS_ORIGINS } from "./config";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { router as favoriteRouter } from "./routes/favorite/favorite.router";
import { router as profileRouter } from "./routes/profile/profile.router";
import { router as simulatorRouter } from "./routes/simulator/simulator.router";

(async () => {
  const db = await mongoose.connect(`${DBURL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`Connected to DB ${DBURL}`);

  const app = express();
  app.use(cors({ origin: CORS_ORIGINS }));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(favoriteRouter);
  app.use(profileRouter);
  app.use(simulatorRouter);

  const httpServer = app.listen(PORT, () =>
    console.log(`✅  Ready on port http://localhost:${PORT}`),
  );

  process.on("SIGTERM", () => {
    httpServer.close();
    db.disconnect();

    console.log("Shut down gracefully.");
    process.exit(0);
  });
})();
