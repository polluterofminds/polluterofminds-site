package main

import (
	"encoding/xml"
	"log"
	"os"
	"time"
)

// RSS related structs
type RSS struct {
	XMLName xml.Name `xml:"rss"`
	Version string   `xml:"version,attr"`
	Channel Channel  `xml:"channel"`
}

type Channel struct {
	Title       string  `xml:"title"`
	Link        string  `xml:"link"`
	Description string  `xml:"description"`
	Items       []Item  `xml:"item"`
}

type Item struct {
	Title       string `xml:"title"`
	Link        string `xml:"link"`
	Description string `xml:"description"`
	PubDate     string `xml:"pubDate"`
}

func createRssFeed() {
	var items []Item
	for _, post := range posts {
		item := Item{
			Title:       post.Title,
			Link:        "https://polluterofminds.com/blog/" + post.Slug,
			Description: post.Summary,
			PubDate:     post.Date.Format(time.RFC1123Z),
		}
		items = append(items, item)
	}

	// Create RSS feed
	rss := RSS{
		Version: "2.0",
		Channel: Channel{
			Title:       "@polluterofminds RSS Feed",
			Link:        "https://polluterofminds.com",
			Description: "RSS feed for my blog",
			Items:       items,
		},
	}

	// Convert RSS struct to XML
	xmlData, err := xml.MarshalIndent(rss, "", "  ")
	if err != nil {
		log.Fatal(err)
	}

	// Add XML declaration before the marshaled data
	xmlWithHeader := []byte(xml.Header + string(xmlData))

	// Write to file
	err = os.WriteFile("../dist/feed.xml", xmlWithHeader, 0644)
	if err != nil {
		log.Fatal(err)
	}
	
	log.Println("RSS feed created successfully at ../dist/feed.xml")
}