const  cards  =  documento . querySelectorAll ( '.memory-card' ) ;

let  hasFlippedCard  =  false ;
deixe  lockBoard  =  false ;
deixe  firstCard ,  secondCard ;

função  flipCard ( )  {
  if  ( lockBoard )  return ;
  if  ( this  ===  firstCard )  return ;

  isso . classList . add ( 'virar' ) ;

  if  ( ! hasFlippedCard )  {
    hasFlippedCard  =  true ;
    firstCard  =  this ;

    retorno ;
  }

  segundoCard  =  this ;
  checkForMatch ( ) ;
}

função  checkForMatch ( )  {
  vamos  isMatch  =  firstCard . conjunto de dados . estrutura  ===  secondCard . conjunto de dados . quadro ;

  é Match ? disableCards ( ) : unflipCards ( ) ;
}

função  desabilitarCartões ( )  {
  primeiroCartão . removeEventListener ( 'click' ,  flipCard ) ;
  segundoCartão . removeEventListener ( 'click' ,  flipCard ) ;

  resetBoard ( ) ;
}

função  unflipCards ( )  {
  lockBoard  =  true ;

  setTimeout ( ( )  =>  {
    primeiroCartão . classList . remove ( 'virar' ) ;
    segundoCartão . classList . remove ( 'virar' ) ;

    resetBoard ( ) ;
  } ,  1500 ) ;
}

função  resetBoard ( )  {
  [ hasFlippedCard ,  lockBoard ]  =  [ false ,  false ] ;
  [ firstCard ,  secondCard ]  =  [ null ,  null ] ;
}

( função  embaralhar ( )  {
  cartões . forEach ( cartão  =>  {
    deixe  randomPos  =  Math . andar ( Math . random ( )  *  12 ) ;
    cartão . estilo . ordem  =  randomPos ;
  } ) ;
} ) ( ) ;

cartões . forEach ( card  =>  card . addEventListener ( 'click' ,  flipCard ) ) ;