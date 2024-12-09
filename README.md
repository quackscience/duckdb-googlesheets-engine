# Google Sheets DuckDB Engine

## Macro Library
https://script.google.com/macros/library/d/1BacEJir06S0Kojb53TqhX6ECUO1tNZX6SbQoKAPueC_qdZzij3KkBc1M/6

## Install
### Library
- Browse to `Extensions` > `Apps Script`
- At the left of the Apps Script editor, next to "Libraries," click `Add`
- In the "Script ID" field, paste `1BacEJir06S0Kojb53TqhX6ECUO1tNZX6SbQoKAPueC_qdZzij3KkBc1M`
- Click `Look up`
- Choose the latest version available
- Click `Add` and Authorize the Library

![image](https://gist.github.com/user-attachments/assets/7749d33b-bbc7-4247-a84d-d8a972a41cae)

<!--
### Manual
Browse to Extensions > Apps Script

![image](https://gist.github.com/user-attachments/assets/827c4672-eef3-4179-bf77-70fb05c15c23)

Copy the `.gs` + `.html` and Deploy as Library

![image](https://gist.github.com/user-attachments/assets/1a04ace7-519c-4f22-b64a-9ffbc5d7277b)

-->

## Usage
Type a query in a cell and execute it with DuckDB. Example:
```
SELECT * FROM 'https://duckdb.org/data/schedule.csv'
```

<img src="https://i.imgur.com/nRxtLUb.gif" />



