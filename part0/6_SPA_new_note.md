```mermaid
  participant browser
  participant server

  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  Note right of browser: The requests contains the new note in json format, which in turn contains the content and the date
  activate server
  server->>browser: HTTPS status 201
  deactivate server
  Note right of browser: Status 201 does not require a redirect, so the browser does not request the html document again
```
