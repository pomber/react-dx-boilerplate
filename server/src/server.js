const router = require("koa-router")();
const logger = require("koa-logger");
const Koa = require("koa");
const app = new Koa();

router.get("/api/time/:value", getTime).post("/api/time", saveTime);

async function getTime(ctx) {
  const value = ctx.params.value;
  ctx.body = { echo: value, time: new Date() };
}

async function saveTime(ctx) {
  ctx.body = "?";
}

app.use(logger());
app.use(router.routes());

app.listen(8000);
