
document.querySelector('#anexo_arquivo').addEventListener('change', function(evt) {
  var informacoes = {
    files: evt.target.files,
    output: [],
    tipos: ['image/jpeg', ' image/jpeg', 'image/png'],
    boll: false,
    foto: '',
  }
  for (var i = 0, f; f = informacoes.files[i]; i++) {
    for (var i = 0; i < informacoes.tipos.length; i++) {
      if (informacoes.tipos[i] == f.type) {
        informacoes.boll = true;
      }
    }
    if (!informacoes.boll) {
          informacoes.foto = 'https://png2.kisspng.com/20180319/tdw/kisspng-download-computer-icons-document-button-save-copy-png-5ab074225dc070.032358721521513506384.png';
    } else {
        informacoes.foto = window.URL.createObjectURL(this.files[0]);
    }
    informacoes.output.push('<div class="upload_arquivos"><img  src="' + informacoes.foto + '"><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
      f.size, ' bytes, last modified: ',
      f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
      '</div>');
  }
  document.querySelector('#list').innerHTML = '<ul>' + informacoes.output.join('') + '</ul>';
});