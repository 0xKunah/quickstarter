import type { Template, TemplateOptions } from "../interfaces/Template";
import axios from 'axios';
import { exec } from 'child_process'
import fs from "fs";

export default class React implements Template {
  public name: String;
  public description: String;
  public version: String;
  public author: String;
  public repo: String;
  public options: TemplateOptions;
  public methods: Object;

  constructor(){
    this.name = "React";
    this.description = "My super react template";
    this.version = "1.0.0";
    this.options = {
      ui: ["TailwindCSS"],
      scripts: ["Craco", "Vite"]
    }
    this.author = "Kunah";
    this.repo = "react-app"
    this.methods = {
      tailwind: this.installTailwind
    }
  }

  installTailwind(){
    exec('npm install -D tailwindcss postcss autoprefixer')
    exec('npx tailwindcss init -p')
    fs.writeFile('tailwind.config.js', `module.exports = {
      content: ["./src/**/*.{js,jsx}",],
      theme: {
        extend: {},
      },
      plugins: [],
    }`, (err) => {
      console.log(err)
    })
  }
}