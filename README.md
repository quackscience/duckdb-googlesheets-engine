<img src="https://github.com/user-attachments/assets/46a5c546-7e9b-42c7-87f4-bc8defe674e0" width=250 />

# Google Sheets DuckDB Engine

This little hack loads DuckDB WASM as a Google Sheets Library to execute, parse and return data.

> No query data is sent to the extension, google or anywhere. Everything remains local.

## Setup
#### Install Extension
- Open a Google Sheets document
- Browse to `Extensions` > `Apps Script`
- At the left of the Apps Script editor, next to `Libraries` click ➕
- In the `Script ID` field, paste `1BacEJir06S0Kojb53TqhX6ECUO1tNZX6SbQoKAPueC_qdZzij3KkBc1M`
- Click `Look up` and choose the latest version
- Click `Add` and Authorize the Library

![image](https://github.com/user-attachments/assets/3a1a2945-0552-49fe-8246-4c96bb5f1609)

<!--

### Extension Macro
The following macro and the code in this repository are used as part of this demo

* https://script.google.com/macros/library/d/1BacEJir06S0Kojb53TqhX6ECUO1tNZX6SbQoKAPueC_qdZzij3KkBc1M/6


-->

### Extension Usage
Type a query in a cell and execute it with DuckDB. Example:
```
SELECT * FROM 'https://duckdb.org/data/schedule.csv'
```

<img src="https://i.imgur.com/nRxtLUb.gif" width="800px" />

### Todo

* Add Query Form in the sidebar
* Read Table into DuckDB memory
* Add dropdown with quick examples

<br />
<br />

## DIY Setup
Follow these steps if you'd like to fork and create your own library based on this code. Not needed for testing.

### Manual
Browse to Extensions > Apps Script

![image](https://github.com/user-attachments/assets/b2537c94-45f8-4884-9ba4-923adbc8e7dc)

Copy the `.gs` + `.html` and Deploy as Library

![image](https://github.com/user-attachments/assets/5e7c0e1a-2551-4e50-bf6a-a74136fea03e)

> That's it! You can start using your own custom script in Google Sheets

