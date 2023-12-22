package main

import (
	"fmt"
	"os"
	"text/template"
)

func buildSearchPage() {
	// Open the source file for reading
	sourceFile, err := os.Open(about)

	fmt.Println(sourceFile)

	tmpl, err := template.New(search).ParseFiles(footer, search, head, nav)
	if err != nil {
		panic(err)
	}
	fileString1 := "../dist/"
	fileString2 := ".html"
	fullFileString := fileString1 + "search" + fileString2

	var f2 *os.File
	f2, err = os.Create(fullFileString)
	if err != nil {
		panic(err)
	}
	err = tmpl.Execute(f2, posts)
	if err != nil {
		panic(err)
	}
	err = f2.Close()
	if err != nil {
		panic(err)
	}

}
