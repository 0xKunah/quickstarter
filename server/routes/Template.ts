import type Route from "../interfaces/Route";
import type { Request, Response } from "express";
import express from 'express'
export default class Template implements Route {
  public path: string;
  constructor(){
    this.path = "/templates"
    this.get = this.get;
  }

  run(){
    let router = express.Router()
    router.route(this.path)
      .get(this.get)
    return router;
  }

  get(req: Request, res: Response){
    return res.json({ok: "oueoue"})
  }
}