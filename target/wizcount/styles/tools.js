document.addEventListener('DOMContentLoaded', function() {

  // Seleciona a imagem
  const userImage = document.getElementById('user');

  // Armazena as fontes das imagens
  const imageSources = [
    '../icons/icon.svg',
    '../icons/alticon.svg'
  ];

  // Adiciona um evento de mouseover para trocar a fonte da imagem
  userImage.addEventListener('mouseover', function() {
    userImage.src = imageSources[1]; // Troca para a imagem colorida
  });

  // Adiciona um evento de mouseout para retornar à fonte original da imagem
  userImage.addEventListener('mouseout', function() {
    userImage.src = imageSources[0]; // Troca para a imagem branca
  });

});
