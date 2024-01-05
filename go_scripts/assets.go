package main

import (
	"io"
	"os"
	"path/filepath"
)

func copyFile(src, dst string) error {
	// Open the source file for reading
	sourceFile, err := os.Open(src)

	defer sourceFile.Close()

	// Create the destination file for writing
	destFile, err := os.Create(dst)
	if err != nil {
		return err
	}
	defer destFile.Close()

	// Copy the contents of the source file to the destination file
	_, err = io.Copy(destFile, sourceFile)
	if err != nil {
		return err
	}

	// Explicitly calling Sync to flush writes to stable storage
	err = destFile.Sync()
	return err
}

func copyDir(srcDir, dstDir string) error {
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
		return copyFile(path, destPath)
	})
}
