function escolha1 () {

    var qntdTentativa = 1 
    var tentativaAtual = 0
  
    while (qntdTentativa >= tentativaAtual) {
  
      var escolha = prompt('O que você vai fazer? Responda com a, b, c ou d.');
  
      if (escolha == null) {
        break
      } else if (escolha == 'c' || escolha == 'C') {
          alert ('Muito esperto(a)!')
          window.location.href="../Claire/claireFaseTwo.html"
          break
  }   else if ( escolha != 'c' || escolha != 'C') {
          if (qntdTentativa > 0) {
          alert (`Essa não foi uma boa idéia, mas hoje é seu dia de sorte. Você tem mais uma chance.`)
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
  
      if (escolha == null) {
        break
      } else if (escolha == 'a' || escolha == 'A') {
          alert ('Muito esperto(a)!')
          window.location.href="../Claire/claireFaseThree.html"
          break
  }   else if ( escolha != 'a' || escolha != 'A') {
          if (qntdTentativa > 0) {
          alert (`Essa não foi uma boa idéia, mas hoje é seu dia de sorte. Você tem mais uma chance.`)
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
  
      if (escolha == null) {
        break
      } else if (escolha == 'a' || escolha == 'A') {
          alert ('Muito esperto(a)!')
          window.location.href="../HTML/win.html"
          break
  }   else if ( escolha != 'a' || escolha != 'A') {
          if (qntdTentativa > 0) {
          alert (`Essa não foi uma boa idéia, mas hoje é seu dia de sorte. Você tem mais uma chance.`)
          qntdTentativa --
          } else {
              alert('Foi uma péssima escolha...')
              window.location.href="../HTML/gameover.html"; 
              break
          } 
  } 
  }
  };