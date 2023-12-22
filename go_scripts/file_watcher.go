package main

import (
	"fmt"
	"log"

	"github.com/fsnotify/fsnotify"
)

func watchGoFiles() {
	// Create a new watcher.
	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		log.Fatal(err)
	}
	defer watcher.Close()

	// Process events.
	go func() {
		for {
			select {
			case event, ok := <-watcher.Events:
				if !ok {
					return
				}
				fmt.Println("event:", event)
				if event.Op&fsnotify.Write == fsnotify.Write {
					fmt.Println("modified file:", event.Name)
					build()
				}
			case err, ok := <-watcher.Errors:
				if !ok {
					return
				}
				log.Println("error:", err)
			}
		}
	}()

	// Add a directory to watch.
	err = watcher.Add("../go_scripts")
	if err != nil {
		log.Fatal(err)
	}

	// Block until a signal is received.
	<-make(chan bool)
}

func watch() {
	watchGoFiles()
	// Create a new watcher.
	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		log.Fatal(err)
	}
	defer watcher.Close()

	// Process events.
	go func() {
		for {
			select {
			case event, ok := <-watcher.Events:
				if !ok {
					return
				}
				fmt.Println("event:", event)
				if event.Op&fsnotify.Write == fsnotify.Write || event.Op&fsnotify.Chmod == fsnotify.Chmod {
					fmt.Println("modified file:", event.Name)
					build()
				}
			case err, ok := <-watcher.Errors:
				if !ok {
					return
				}
				log.Println("error:", err)
			}
		}
	}()

	// Add a directory to watch.
	err = watcher.Add("../src/data")
	if err != nil {
		log.Fatal(err)
	}

	// Block until a signal is received.
	<-make(chan bool)
}
