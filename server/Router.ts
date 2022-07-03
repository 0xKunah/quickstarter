import express from "express";
import fs from 'fs'
export default class Router {
  private app: express.Application;
  constructor(port: Number){
    this.app = express();
    this.app.use(express.json());
    this.app.listen(port, () => console.log(`App connected on port ${port}`))
    fs.readdir('./routes', (err, data) => {
      data.forEach(r => {
        let { default: _route } = require(`./routes/${r}`)
        this.app.use(new _route().run())
      })
    })
  }
}