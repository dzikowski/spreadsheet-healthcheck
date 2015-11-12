Scrips in this repository allows you to check status of your webapps in Google Spreadsheets.

## Usage

In your Google Spreadsheet go to `Tools` >> `Scripts Editor` and paste content of desired script files.
Then you will be able to use it as regular formulas in your spreadsheet.

For example function `HEALTHCHECK_CONTAINS` from `src/health.gs` allows you to check status of given app by performing `GET` request to URL from the first parameter and verifying that the response contains text given in the second paramter.
In other words, calling `=HEALTHCHECK_CONTAINS(A2, "Hello")` in your spreadsheet will check if content of a response from URL given in `A2` cell contains text `"Hello"`.
