import express from "express";
import { PORT, DBURL, CORS_ORIGINS } from "./config";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { router } from "./routes";
import { errorHandler } from "./middlewares/errorHandler";

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
  app.use(errorHandler);

  app.use("/api", router);

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
