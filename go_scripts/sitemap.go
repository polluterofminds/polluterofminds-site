package main

import (
	"encoding/xml"
	"log"
	"os"
	"time"
)

type Urlset struct {
	XMLName xml.Name `xml:"urlset"`
	Urls    []Url    `xml:"url"`
}

type Url struct {
	Loc        string  `xml:"loc"`
	LastMod    string  `xml:"lastmod"`
	ChangeFreq string  `xml:"changefreq,omitempty"`
	Priority   float64 `xml:"priority,omitempty"`
}

func writeSitemapToFile(filename, sitemapContent string) error {
	return os.WriteFile(filename, []byte(sitemapContent), 0644)
}

func generateSitemap() {
	var urlset Urlset
	for _, post := range posts {
		urlset.Urls = append(urlset.Urls, Url{
			Loc:        "https://polluterofminds.com/blog/" + post.Slug,
			LastMod:    post.Date.Format(time.RFC3339),
			ChangeFreq: "weekly",
			Priority:   0.8,
		})
	}

	urlset.Urls = append(urlset.Urls, Url{
		Loc:        "https://polluterofminds.com",
		LastMod:    time.Now().Format(time.RFC3339),
		ChangeFreq: "weekly",
		Priority:   0.6,
	})

	urlset.Urls = append(urlset.Urls, Url{
		Loc:        "https://polluterofminds.com/about",
		LastMod:    time.Now().Format(time.RFC3339),
		ChangeFreq: "weekly",
		Priority:   0.6,
	})

	urlset.Urls = append(urlset.Urls, Url{
		Loc:        "https://polluterofminds.com/projects",
		LastMod:    time.Now().Format(time.RFC3339),
		ChangeFreq: "weekly",
		Priority:   0.6,
	})

	urlset.Urls = append(urlset.Urls, Url{
		Loc:        "https://polluterofminds.com/tags",
		LastMod:    time.Now().Format(time.RFC3339),
		ChangeFreq: "weekly",
		Priority:   0.6,
	})

	output, err := xml.MarshalIndent(urlset, "", "  ")
	if err != nil {
		panic(err)
	}

	err = writeSitemapToFile("../dist/sitemap.xml", xml.Header+string(output))
	if err != nil {
		log.Fatal(err)
		panic(err)
	}
}
