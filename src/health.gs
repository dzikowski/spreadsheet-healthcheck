
function HEALTHCHECK(url) {
  return HEALTHCHECK_OK(url);
}

function HEALTHCHECK_OK(url) {
  try {
    var response = UrlFetchApp.fetch(url);
    var code = response.getResponseCode()
    return 200 <= code && code <= 299;
  } catch(err) {
    return 'ERROR: ' + err.message;
  }
}

function HEALTHCHECK_CONTAINS(url, text) {
  try {
    var response = UrlFetchApp.fetch(url);
    var responseText = response.getContentText();
    return responseText.indexOf(text) > -1;
  } catch(err) {
    return 'ERROR: ' + err.message;
  }
}

