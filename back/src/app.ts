import express, { Request, Response, NextFunction } from "express";
import parse from "rss-to-json";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/welcome", async (req: Request, res: Response, next: NextFunction) => {
  var rss = await parse("https://rss.blog.naver.com/dellose.xml", {});
  res.send(JSON.stringify(rss, null, 3));
});

app.listen("5000", () => {
  console.log(`
  ################################################
  Server listening on port: 5000
  ################################################
`);
});
