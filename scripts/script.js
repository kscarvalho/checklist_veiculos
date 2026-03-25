// ADICIONAR IMG E PRÉ VIASUALIZAÇÃO CRLV FRENTE
const inputImagemCrlvFrente = document.getElementById('adicionarImgCrlvFrente');
const previewCrlvFrente = document.getElementById('previewCrlvFrente');

inputImagemCrlvFrente.addEventListener('change', function () {
  const adicionarImgCrlvFrente = this.files[0];

  if (adicionarImgCrlvFrente) {
    const leitor1 = new FileReader();
    leitor1.onload = function (e) {
      previewCrlvFrente.src = e.target.result;
      previewCrlvFrente.style.display = 'block';
      3;
    };
    leitor1.readAsDataURL(adicionarImgCrlvFrente);
  }
});

// ATIVAR A PRIMEIRA AREA DE CRLV PARA ADD IMG FRENTE
const inputCrlvSim = document.getElementById('crlvsim');
const areaImagemCrlv = document.getElementById('areaimagemcrlvFrente');
areaImagemCrlv.style.display = 'none';

function ativaAreaDaFotoCrlvFrente() {
  if (inputCrlvSim.checked) {
    areaImagemCrlv.style.display = 'block';
  } else {
    areaImagemCrlv.style.display = 'none';
  }
}

addEventListener('click', ativaAreaDaFotoCrlvFrente);

// ATIVAR A AREA DE CRLV COMENTARIOS
const inputNaoCrlv = document.getElementById('crlvnao');
const comentarioCrlv = document.getElementById('comentariocrlv');
comentarioCrlv.style.display = 'none';

function ativaAreaDoComentarioCrlv() {
  if (inputNaoCrlv.checked) {
    comentarioCrlv.style.display = 'block';
    previewCrlvVerso.style.display = "none"; 
  } else {
    comentarioCrlv.style.display = 'none';    
  }
}

addEventListener('click', ativaAreaDoComentarioCrlv);



// BOTÃO PARA ATIVAR ASEGUNDA AREA DE IMG CRLV VERSO
const botaoSegundaImg = document.querySelector('.imgMaisPrimeira')
botaoSegundaImg.style.display = 'none'
function ativarAreaDaFotoCrlvVerso() {
  if (inputCrlvSim.checked) {
    botaoSegundaImg.style.display = 'block';
  } else {
    botaoSegundaImg.style.display = 'none';
  } 
}
addEventListener('click', ativarAreaDaFotoCrlvVerso);

// ATIVAR AREA SEGUNDA IMG CRLV
const segundaImgCrlv = document.getElementById('previewCrlvVerso')
segundaImgCrlv.style.display = "none"

function ativarSegundaAreaFotoCrlvVerso() {
  if (botaoSegundaImg.click) {
    segundaImgCrlv.style.display = 'block' 
  } else {
    segundaImgCrlv.style.display = 'none'
  }
}

botaoSegundaImg.addEventListener('click',  ativarSegundaAreaFotoCrlvVerso)

// ADICIONAR IMG E PRÉ VIASUALIZAÇÃO CRLV VERSO
const inputImagemCrlvVerso = document.getElementById('adicionarImgCrlvVerso');
const previewCrlvVerso = document.getElementById('previewCrlvVerso');

inputImagemCrlvVerso.addEventListener('change', function () {
  const adicionarImgCrlvVerso = this.files[0];

  if (adicionarImgCrlvVerso) {
    const leitor2 = new FileReader();
    leitor2.onload = function (e) {
      previewCrlvVerso.src = e.target.result;
      previewCrlvVerso.style.display = 'block';
      3;
    };
    leitor2.readAsDataURL(adicionarImgCrlvVerso);
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


// ATIVAR A AREA DO CARTÃO COMENTARIOS
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

