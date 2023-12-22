package main

import (
	"fmt"
	"os"
	"text/template"
)

type TagPostIndex struct {
	AllTags []Tag
	Posts   []PostIndex
}

var tags []Tag

func buildTags() {
	tags = []Tag{}
	// Map to keep track of tag counts
	tagCounts := make(map[string]int)

	// Iterate over posts and tags to count occurrences
	for _, post := range posts {
		for _, tag := range post.Tags {
			tagCounts[tag]++
		}
	}

	// Create a slice of Tag structs from the map
	for tagName, count := range tagCounts {
		tags = append(tags, Tag{Name: tagName, Count: count})
	}

	var tagTmpFile = "tags.tmpl"
	tagtmpl, err := template.New(tagTmpFile).ParseFiles(footer, tagTmpFile, head)
	if err != nil {
		panic(err)
	}
	tagString1 := "../dist/"
	tagString2 := ".html"
	fullTagString := tagString1 + "tags" + tagString2

	var f3 *os.File
	f3, err = os.Create(fullTagString)
	if err != nil {
		panic(err)
	}
	err = tagtmpl.Execute(f3, tags)
	if err != nil {
		panic(err)
	}
	err = f3.Close()
	if err != nil {
		panic(err)
	}
}

func buildTagPages() {
	//	We need to loop over tags
	//	We need to filter posts by the tag
	//	We need to create a page for each tag
	for _, tagSlice := range tags {
		var postsToInclude []PostIndex
		for _, post := range posts {
			for _, tag := range post.Tags {
				if tagSlice.Name == tag {
					postsToInclude = append(postsToInclude, post)
				}
			}
		}
		var tagIndex TagPostIndex = TagPostIndex{
			tags,
			postsToInclude,
		}
		var tagTmpFile = "tag_page.tmpl"
		tagtmpl, err := template.New(tagTmpFile).ParseFiles(footer, tagTmpFile, head)
		if err != nil {
			panic(err)
		}
		tagString1 := "../dist/tags/"
		tagString2 := ".html"
		fullTagString := tagString1 + tagSlice.Name + tagString2

		// Check if the directory exists
		if _, err := os.Stat(tagString1); os.IsNotExist(err) {
			// Directory does not exist, so create it
			err := os.MkdirAll(tagString1, 0755)
			if err != nil {
				fmt.Printf("Error creating directory: %s\n", err)
				return
			}
			fmt.Println("Directory created")
		} else {
			fmt.Println("Directory already exists")
		}

		var f3 *os.File
		f3, err = os.Create(fullTagString)
		if err != nil {
			panic(err)
		}
		err = tagtmpl.Execute(f3, tagIndex)
		if err != nil {
			panic(err)
		}
		err = f3.Close()
		if err != nil {
			panic(err)
		}
	}
}

func buildPostsPage() {
	var tagIndex TagPostIndex = TagPostIndex{
		tags,
		posts,
	}
	var tagTmpFile = "tag_page.tmpl"
	tagtmpl, err := template.New(tagTmpFile).ParseFiles(footer, tagTmpFile, head)
	if err != nil {
		panic(err)
	}
	tagString1 := "../dist/blog/"
	tagString2 := ".html"
	fullTagString := tagString1 + "index" + tagString2

	// Check if the directory exists
	if _, err := os.Stat(tagString1); os.IsNotExist(err) {
		// Directory does not exist, so create it
		err := os.MkdirAll(tagString1, 0755)
		if err != nil {
			fmt.Printf("Error creating directory: %s\n", err)
			return
		}
		fmt.Println("Directory created")
	} else {
		fmt.Println("Directory already exists")
	}

	var f3 *os.File
	f3, err = os.Create(fullTagString)
	if err != nil {
		panic(err)
	}
	err = tagtmpl.Execute(f3, tagIndex)
	if err != nil {
		panic(err)
	}
	err = f3.Close()
	if err != nil {
		panic(err)
	}
}
