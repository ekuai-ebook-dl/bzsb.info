(function () {
  const src = document.querySelector('iframe').src;
  if (!src) console.error('iframe检测异常，请在top层级运行');
  const url = new URL(src);
  let fileName = url.searchParams.get('a100');
  if (!fileName) console.error('未获取到文件名');
  const save_link = document.createElement('a');
  save_link.href = 'https://www.bzsb.info/searchStandard.do?action=getPdf';
  fileName = fileName.replaceAll(' ', '_') + '.pdf';
  fileName = prompt('请输入文件名，按取消则不下载', fileName);
  if (!fileName) {
    console.error('未获取到文件名');
    return;
  }
  save_link.download = fileName;
  save_link.click();
})();
