import type Route from "../interfaces/Route";
import type { Request, Response } from "express";
import express from 'express'
export default class Template implements Route {
  public path: string;
  constructor(){
    this.path = "/templates"
  }

  run(){
    let router = express.Router()
    router.route(this.path)
      .get(this.getAllTemplates)
    router.route(`${this.path}/:template`)
      .get(this.getTemplateInfos)
    return router;
  }

  getAllTemplates(req: Request, res: Response): Response {
    return res.json({templates: "list"})
  }

  getTemplateInfos(req: Request, res: Response): Response {
    let {default: template} = require(`../templates/${req.params.template}`);
    return res.json(new template())
  }
  
}