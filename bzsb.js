(function () {
  const src = document.querySelector('iframe').src;
  if (!src) console.error('iframe检测异常，请在top层级运行');
  const url = new URL(src);
  const fileName = url.searchParams.get('a100');
  if (!fileName) console.error('未获取到文件名');
  let save_link = document.createElement('a');
  save_link.href = "https://www.bzsb.info/searchStandard.do?action=getPdf";
  save_link.download = fileName + '.pdf';
  save_link.click();
})();
