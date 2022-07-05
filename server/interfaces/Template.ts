export interface TemplateOptions {
  ui: String[],
  scripts: String[]
}

export interface Template {
  name: String,
  description: String,
  version: String,
  author: String,
  repo: String,
  options: TemplateOptions,
}