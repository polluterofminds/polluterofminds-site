#!/bin/bash

# Start the tailwind script
# npx tailwindcss -i ./src/assets/styles.css -o ./dist/assets/styles.css --watch &

# Start the Go command
cd go_scripts && go run . &

## Change back to root directory to avoid issues
cd ..

# Wait for both processes to finish
wait
