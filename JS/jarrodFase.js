 function escolha1 () {

  var qntdTentativa = 1 
  var tentativaAtual = 0

  while (qntdTentativa >= tentativaAtual) {

    var escolha = prompt('O que você vai fazer? Responda com a, b, c ou d.');

    if (escolha == 'a' || escolha == 'A') {
        alert ('Muito esperto(a)!')
        window.location.href="../Jarrod/jarrodFaseTwo.html"
        break
}   else if ( escolha != 'a' || escolha != 'A') {
        if (qntdTentativa > 0) {
        alert (`Essa não foi uma boa idéia, mas hoje é seu dia de sorte. Você tem mais ${qntdTentativa} chance.`)
        qntdTentativa --
        } else {
            alert('Foi uma péssima escolha...')
            window.location.href="../HTML/gameover.html"; 
            break
        } 
} 
}
};

function escolha2 () {

  var qntdTentativa = 1 
  var tentativaAtual = 0

  while (qntdTentativa >= tentativaAtual) {

    var escolha = prompt('O que você vai fazer? Responda com a, b, c ou d.');

    if (escolha == 'd' || escolha == 'D') {
        alert ('Muito esperto(a)!')
        window.location.href="../Jarrod/jarrodFaseThree.html"
        break
}   else if ( escolha != 'd' || escolha != 'D') {
        if (qntdTentativa > 0) {
        alert (`Essa não foi uma boa idéia, mas hoje é seu dia de sorte. Você tem mais ${qntdTentativa} chance.`)
        qntdTentativa --
        } else {
            alert('Foi uma péssima escolha...')
            window.location.href="../HTML/gameover.html"; 
            break
        } 
} 
}
};

function escolha3 () {

  var qntdTentativa = 1 
  var tentativaAtual = 0

  while (qntdTentativa >= tentativaAtual) {

    var escolha = prompt('O que você vai fazer? Responda com a, b, c ou d.');

    if (escolha == 'b' || escolha == 'B') {
        alert ('Muito esperto(a)!')
        window.location.href="../HTML/win.html"
        break
}   else if ( escolha != 'b' || escolha != 'B') {
        if (qntdTentativa > 0) {
        alert (`Essa não foi uma boa idéia, mas hoje é seu dia de sorte. Você tem mais ${qntdTentativa} chance.`)
        qntdTentativa --
        } else {
            alert('Foi uma péssima escolha...')
            window.location.href="../HTML/gameover.html"; 
            break
        } 
} 
}
};