package main

import (
	"fmt"
	"log"
	"os"
	"strings"
	"text/template"

	"github.com/adrg/frontmatter"
	"github.com/russross/blackfriday"
)

// Define a struct that matches the structure of your Yaml file
var AboutFrontMatter struct {
	Name       string `yaml:"name"`
	Avatar     string `yaml:"avatar"`
	Occupation string `yaml:"occupation"`
	Company    string `yaml:"company"`
	Email      string `yaml:"email"`
	Github     string `yaml:"github"`
	LinkedIn   string `yaml:"linkedin"`
	Twitter    string `yaml:"twitter"`
	Warpcast   string `yaml:"warpcast"`
}

type About struct {
	Name       string `yaml:"name"`
	Avatar     string `yaml:"avatar"`
	Occupation string `yaml:"occupation"`
	Company    string `yaml:"company"`
	Email      string `yaml:"email"`
	Github     string `yaml:"github"`
	LinkedIn   string `yaml:"linkedin"`
	Twitter    string `yaml:"twitter"`
	Warpcast   string `yaml:"warpcast"`
	Content    string
}

var about = "../src/data/about.md"

func buildAbout() {
	// Open the source file for reading
	_, err := os.Open(about)

	// Convert Markdown to HTML
	dat, err := os.ReadFile(about)
	if err != nil {
		log.Fatalf("Error reading file: %v", err)
	}

	rest, err := frontmatter.Parse(strings.NewReader(string(dat)), &AboutFrontMatter)
	if err != nil {
		fmt.Println("Error parsing...")
	}

	output := blackfriday.MarkdownBasic(rest)

	var about_page About = About{
		AboutFrontMatter.Name,
		AboutFrontMatter.Avatar,
		AboutFrontMatter.Occupation,
		AboutFrontMatter.Company,
		AboutFrontMatter.Email,
		AboutFrontMatter.Github,
		AboutFrontMatter.LinkedIn,
		AboutFrontMatter.Twitter,
		AboutFrontMatter.Warpcast,
		string(output),
	}

	var tmplFile = "about.tmpl"
	tmpl, err := template.New(tmplFile).ParseFiles(footer, tmplFile, head, nav)
	if err != nil {
		panic(err)
	}
	fileString1 := "../dist/"
	fileString2 := ".html"
	fullFileString := fileString1 + "about" + fileString2

	var f2 *os.File
	f2, err = os.Create(fullFileString)
	if err != nil {
		panic(err)
	}
	err = tmpl.Execute(f2, about_page)
	if err != nil {
		panic(err)
	}
	err = f2.Close()
	if err != nil {
		panic(err)
	}

}
