package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/joho/godotenv"
	"github.com/stakwork/sphinx-tribes/feeds"
)

func main() {

	feeds.ParseMediumFeed("https://medium.com/feed/@jjpryor")
	return

	var err error

	err = godotenv.Load()
	if err != nil {
		fmt.Println("no .env file")
	}

	initDB()
	initCache()

	go processTwitterConfirmationsLoop()
	go processGithubIssuesLoop()

	run()
}

// Start the MQTT plugin
func run() {

	router := NewRouter()

	shutdownSignal := make(chan os.Signal)
	signal.Notify(shutdownSignal, syscall.SIGINT, syscall.SIGTERM)
	<-shutdownSignal

	// shutdown web server
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	if err := router.Shutdown(ctx); err != nil {
		fmt.Printf("error shutting down server: %s", err.Error())
	}
}
