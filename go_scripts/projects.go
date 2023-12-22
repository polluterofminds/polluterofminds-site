package main

import (
	"encoding/json"
	"fmt"
	"os"
	"text/template"
)

// Define a struct that matches the structure of your JSON file
type Project struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Image       string `json:"imgSrc"`
	Href        string `json:"href"`
}

var projectData = "../src/data/projects/projectdata.json"

func buildProjects() {
	// Open the JSON file
	file, err := os.Open(projectData)
	if err != nil {
		fmt.Println("Error opening file:", err)
		return
	}
	defer file.Close()

	// Decode the JSON data
	var projects []Project
	decoder := json.NewDecoder(file)
	err = decoder.Decode(&projects)
	if err != nil {
		fmt.Println("Error decoding JSON:", err)
		return
	}

	var tmplFile = "projects.tmpl"
	tmpl, err := template.New(tmplFile).ParseFiles(footer, tmplFile, head, nav)
	if err != nil {
		panic(err)
	}

	var f *os.File
	f, err = os.Create("../dist/projects.html")
	if err != nil {
		panic(err)
	}
	err = tmpl.Execute(f, projects)
	if err != nil {
		panic(err)
	}
	err = f.Close()
	if err != nil {
		panic(err)
	}
}
