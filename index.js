// sistema de contagem de peças //

var  peso  =  100 ;
if ( peso  > = 100 ) {
    console . log ( "Peso da peça válido" )
}  else  {
    console . log ( "Peso da peça inválido" )
}

var  ListaDePecas  =  [ 'Filtro de oleo' , 'Amortecedor' , 'Filtro de Gasolina' , 'Correia dentada' , 'Filtro de ar' ] ;
console . log ( "Quantidade de peças:"  +  ListaDePecas )

if ( ListaDePecas . comprimento  <= 10 ) {
    console . log ( 'As peças já estão cadastradas' ) ;
} 

para  ( var  i  =  0 ;  i  <  ListaDePecas . comprimento ;  i  ++ ) {
    var  PecaAtual  =  ListaDePecas [ i ] ;
    if ( PecaAtual . comprimento  <  4 )  {
        console . log ( PecaAtual  +  'Esta peça possui nome inferior a 4 caracteres!' )
    }  else  {
        console . log ( PecaAtual  +  'Está peça podera! Ser Cadastrada.' )
    }
}

