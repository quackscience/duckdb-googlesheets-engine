# Google Sheets DuckDB Engine

## Extension Macro

* https://script.google.com/macros/library/d/1BacEJir06S0Kojb53TqhX6ECUO1tNZX6SbQoKAPueC_qdZzij3KkBc1M/6

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
### Manual
Browse to Extensions > Apps Script

![image](https://gist.github.com/user-attachments/assets/827c4672-eef3-4179-bf77-70fb05c15c23)

Copy the `.gs` + `.html` and Deploy as Library

![image](https://gist.github.com/user-attachments/assets/1a04ace7-519c-4f22-b64a-9ffbc5d7277b)

-->

### Extension Usage
Type a query in a cell and execute it with DuckDB. Example:
```
SELECT * FROM 'https://duckdb.org/data/schedule.csv'
```

<img src="https://i.imgur.com/nRxtLUb.gif" />



