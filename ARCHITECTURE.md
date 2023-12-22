This is a simple description to help plan and build the tools to build my static site. The goals are: 
1. Write code in Go
2. Create html files in directory from original markdown files
3. Use as little Javascript as possible
4. Use templating?


## Generator
* Read files from a directory
* Ensure each file is Markdown
* Convert markdown body to html
* Use markdown frontmatter to populate HTML head elements
* Create sitemap
* Create rss feed

## Simple Dev Server
* Write server in Go
* Serve files from `dist` folder
* Hot reload 