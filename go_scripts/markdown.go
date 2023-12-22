package main

import (
	"fmt"
	"log"
	"os"
	"path/filepath"
	"strings"
	"text/template"

	"github.com/adrg/frontmatter"
	"github.com/gosimple/slug"
	"github.com/russross/blackfriday"
)

func copyMarkdownFile(src, dst string) error {
	// Open the source file for reading
	fmt.Println(src)
	sourceFile, err := os.Open(src)

	fmt.Println(sourceFile)

	// Will print 'Match'
	fileExtension := filepath.Ext(src)
	// Convert Markdown to HTML
	if fileExtension == ".md" {
		dat, err := os.ReadFile(src)
		if err != nil {
			log.Fatalf("Error reading file: %v", err)
		}

		rest, err := frontmatter.Parse(strings.NewReader(string(dat)), &Frontmatter)
		if err != nil {
			fmt.Println("Error parsing...")
		}

		slug := slug.Make(Frontmatter.Title)

		output := blackfriday.MarkdownBasic(rest)

		var index PostIndex = PostIndex{
			Frontmatter.Title,
			Frontmatter.Date,
			Frontmatter.Tags,
			Frontmatter.Summary,
			slug,
			os.Getenv("HOSTED_URL"),
		}

		fmt.Println(index)

		posts = append(posts, index)

		var post Post = Post{
			Frontmatter.Title,
			Frontmatter.Date,
			Frontmatter.Summary,
			Frontmatter.Tags,
			slug,
			"Justin Hunter",
			"/assets/me.jpg",
			"https://twitter.com/polluterofminds",
			"@polluterofminds",
			"/assets/twitter_card.png",
			string(output),
		}

		var tmplFile = "post.tmpl"
		tmpl, err := template.New(tmplFile).ParseFiles(footer, tmplFile, nav)
		if err != nil {
			panic(err)
		}
		fileString1 := "../dist/blog/"
		fileString2 := ".html"
		fullFileString := fileString1 + slug + fileString2

		var f2 *os.File
		f2, err = os.Create(fullFileString)
		if err != nil {
			panic(err)
		}
		err = tmpl.Execute(f2, post)
		if err != nil {
			panic(err)
		}
		err = f2.Close()
		if err != nil {
			panic(err)
		}
	}
	return err
}

func buildBlog(srcDir, dstDir string) error {
	posts = []PostIndex{}
	return filepath.Walk(srcDir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		// Create a relative path
		relPath, err := filepath.Rel(srcDir, path)
		if err != nil {
			return err
		}

		destPath := filepath.Join(dstDir, relPath)
		// If it's a directory, create it in the destination
		if info.IsDir() {
			return os.MkdirAll(destPath, info.Mode())
		}

		// If it's a file, copy it
		return copyMarkdownFile(path, destPath)
	})
}
