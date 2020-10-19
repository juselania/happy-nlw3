    /*const element = document.querySelector('h1');
      function digitaTexto(elemento){
          const textArray = elemento.innerHTML.split('');
          element.innerHTML = '';
          textArray.forEach((letra, i) => {
              setTimeout(( ) => element.innerHTML += letra, 75 * i);
          });
      }
     setTimeout(digitaTexto(element),2000); */

     function typeWrite(elemento){
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = ' ';
        textoArray.forEach(function(letra, i){   
          
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 75 * i)
    
      });
    }
    const titulo = document.querySelector('h1');
    typeWrite(titulo);
    
    typeWrite(document.querySelector('#animate'));