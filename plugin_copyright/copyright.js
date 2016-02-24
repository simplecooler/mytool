var answer, setClipboardText;

setClipboardText = function(event) {
  var htmlData, node, textData;
  event.preventDefault();
  node = document.createElement('div');
  node.appendChild(window.getSelection().getRangeAt(0).cloneContents());
  htmlData = '<div>文／' + $('.author-info > .author-name > span').text() + '（' + $('.author-info > .label').text().replace(/\s/g, '') + '）<br />' + I18n.t("reading.copyright.link") + document.location.href + '<br />' + I18n.t("reading.copyright.message") + '<br /><br />' + node.innerHTML + '</div>';
  textData = '文／' + $('.author-info > .author-name > span').text() + '（' + $('.author-info > .label').text().replace(/\s/g, '') + '）\r\n' + I18n.t("reading.copyright.link") + document.location.href + '\r\n' + I18n.t("reading.copyright.message") + '\r\n\r\n' + window.getSelection().getRangeAt(0);
  if (event.clipboardData) {
    event.clipboardData.setData('text/html', htmlData);
    event.clipboardData.setData('text/plain', textData);
  } else if (window.clipboardData) {
    return window.clipboardData.setData('text', textData);
  }
};

answer = document.getElementById('content-copyright');

answer.addEventListener('copy', function(e) {
  setClipboardText(e);
});