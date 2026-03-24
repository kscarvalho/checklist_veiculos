// PRÉ VISUALIZAÇÃO DA IMG
const inputImagemCrlv = document.getElementById('arquivo');
const previewCrlv = document.getElementById('preview');

inputImagemCrlv.addEventListener('change', function () {
  const arquivo = this.files[0];

  if (arquivo) {
    const leitor1 = new FileReader();

    leitor1.onload = function (e) {
      previewCrlv.src = e.target.result;
      previewCrlv.style.display = 'block';
    };

    leitor1.readAsDataURL(arquivo);
  }
});

const inputImagemCartao = document.getElementById('imagemcartao');
const previewCartao = document.getElementById('preview');

inputImagemCartao.addEventListener('change', function () {
  const imagemcartao = this.files[1];

  if (imagemcartao) {
    const leitor2 = new FileReader();

    leitor2.onload = function (e) {
      previewCartao.src = e.target.result;
      previewCartao.style.display = 'block';
    };

    leitor2.readAsDataURL(imagemcartao);
  }
});

// ATIVAR A AREA DE CRLV
const inputCrlvSim = document.getElementById('crlvsim');
const areaImagemCrlv = document.getElementById('areaimagemcrlv');
areaImagemCrlv.style.display = 'none';

function ativaAreaDaFotoCrlv() {
  if (inputCrlvSim.checked) {
    areaImagemCrlv.style.display = 'block';
  } else {
    areaImagemCrlv.style.display = 'none';
  }
}

addEventListener('click', ativaAreaDaFotoCrlv);

const inputNaoCrlv = document.getElementById('crlvnao');
const comentarioCrlv = document.getElementById('comentariocrlv');
comentarioCrlv.style.display = 'none';

function ativaAreaDoComentarioCrlv() {
  if (inputNaoCrlv.checked) {
    comentarioCrlv.style.display = 'block';
  } else {
    comentarioCrlv.style.display = 'none';
  }
}

addEventListener('click', ativaAreaDoComentarioCrlv);

// ATIVAR A AREA DO CARTÃO
const inputCartaoSim = document.getElementById('cartaosim');
const areaImagemCartao = document.getElementById('areaimagemcartao');
areaImagemCartao.style.display = 'none';

function ativaAreaDaFotoCartao() {
  if (inputCartaoSim.checked) {
    areaImagemCartao.style.display = 'block';
  } else {
    areaImagemCartao.style.display = 'none';
  }
}

addEventListener('click', ativaAreaDaFotoCartao);

const inputCartaoNao = document.getElementById('cartaonao');
const comentarioCartao = document.getElementById('comentariocartao');
comentarioCartao.style.display = 'none';

function ativaAreaDoComentarioCartao() {
  if (inputCartaoNao.checked) {
    comentarioCartao.style.display = 'block';
  } else {
    comentarioCartao.style.display = 'none';
  }
}

addEventListener('click', ativaAreaDoComentarioCartao);
