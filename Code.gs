function doGet(e) {
  return HtmlService
    .createHtmlOutputFromFile('login')
    .setTitle('Login')
    .setViewportMetaTag('width=device-width, initial-scale=1, viewport-fit=cover');
}
