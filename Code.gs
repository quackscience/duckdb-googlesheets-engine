function onOpen() {
  SpreadsheetApp.getUi().createMenu('SQL').addItem('Run', 'runSQL').addToUi();
}

function runSQL() {
  const html = HtmlService.createHtmlOutputFromFile('Sidebar').setTitle('SQL Runner');
  SpreadsheetApp.getUi().showSidebar(html);
}

function getSelectedQuery() {
  const selectedRange = SpreadsheetApp.getActiveRange();
  if (!selectedRange) {
    throw new Error("Please select a cell containing the SQL query");
  }
  const query = selectedRange.getValue();
  console.log("Selected query:", query);
  return query;
}

function writeResults(data) {
  console.log("Writing data to sheet:", data);
  const sheet = SpreadsheetApp.getActiveSheet();
  if (data && data.length > 0) {
    sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
    console.log("Data written successfully");
  } else {
    console.log("No data to write");
  }
}