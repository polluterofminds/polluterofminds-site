package main

import (
	"fmt"
	"os"
	"sort"
	"text/template"
	"time"
)

var footer = "footer.tmpl"
var head = "head.tmpl"
var nav = "nav.tmpl"
var search = "search.tmpl"

type Tag struct {
	Name  string
	Count int
}

var Frontmatter struct {
	Title   string    `yaml:"title"`
	Date    time.Time `yaml:"date"`
	Tags    []string  `yaml:"tags"`
	Summary string    `yaml:"summary"`
	Draft   bool      `yaml:"draft"`
	Cover   string    `yaml:"cover"`
}

type PostIndex struct {
	Title     string
	Date      time.Time
	Tags      []string
	Summary   string
	Slug      string
	HostedURL string
	Cover     string
}

var posts []PostIndex

type Post struct {
	Title         string
	Date          time.Time
	Description   string
	Tags          []string
	Slug          string
	AuthorName    string
	Avatar        string
	Twitter       string
	TwitterHandle string
	Cover         string
	Content       string
}

var dirToServe = "../dist"

func build() {
	fmt.Println("Building...")
	//	Build blog
	buildBlog("../src/data/blog", dirToServe)
	//	Build the about page
	buildAbout()
	//	Build assets folder
	copyDir("../src/assets", dirToServe+"/assets")
	//	Build projects
	buildProjects()

	//	Build tag pages
	buildTags()

	//	Build search page
	buildSearchPage()

	var tmplFile = "index.tmpl"
	tmpl, err := template.New(tmplFile).ParseFiles(footer, tmplFile, head, nav)
	if err != nil {
		panic(err)
	}

	var f *os.File
	f, err = os.Create("../dist/index.html")
	if err != nil {
		panic(err)
	}

	sort.Slice(posts, func(i, j int) bool {
		return posts[j].Date.Before(posts[i].Date)
	})

	err = tmpl.Execute(f, posts[:5])
	if err != nil {
		panic(err)
	}
	err = f.Close()
	if err != nil {
		panic(err)
	}

	//	Build tag pages
	buildTagPages()
	//	Build blog page using same template
	buildPostsPage()
	//	Create sitemap
	generateSitemap()

	createRssFeed()
}

func main() {
    args := os.Args[1:]
    buildOnly := false
    
    if len(args) > 0 && args[0] == "build" {
        buildOnly = true
    }
    
    build()
    
    if !buildOnly {
        watch()
    }
}
