package main

import (
  "fmt"
  "net/http"
  "html/template"
)

func handler(w http.ResponseWriter, r *http.Request) {
  t, _ := template.ParseFiles("views/index.html")
  t.Execute(w, nil)
}

func main() {
  http.HandleFunc("/", handler)
  http.Handle("/public/", http.StripPrefix("/public/", http.FileServer(http.Dir("public/"))))
  fmt.Printf("Listening in on port 8080\n")
  http.ListenAndServe(":8080", nil)
}
