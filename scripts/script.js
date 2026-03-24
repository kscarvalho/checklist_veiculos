// ADICIONAR IMG E PRÉ VIASUALIZAÇÃO CRLV
const inputImagemCrlv = document.getElementById('adicionarImgCrlv');
const previewCrlv = document.getElementById('previewCrlv');

inputImagemCrlv.addEventListener('change', function () {
  const adicionarImgCrlv = this.files[0];

  if (adicionarImgCrlv) {
    const leitor1 = new FileReader();
    leitor1.onload = function (e) {
      previewCrlv.src = e.target.result;
      previewCrlv.style.display = 'block';
      3;
    };

    leitor1.readAsDataURL(adicionarImgCrlv);
  }
});

// ADICIONAR IMG E PRÉ VIASUALIZAÇÃO CARTÃO
const inputImagemCartao = document.getElementById('adicionarImgCartao');
const previewCartao = document.getElementById('previewCartao');

inputImagemCartao.addEventListener('change', function () {
  const adicionarImgCartao = this.files[0];

  if (adicionarImgCartao) {
    const leitor2 = new FileReader();

    leitor2.onload = function (e) {
      previewCartao.src = e.target.result;
      previewCartao.style.display = 'block';
    };

    leitor2.readAsDataURL(adicionarImgCartao);
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
