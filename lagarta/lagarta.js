async function lagarta(){
    let milton = "()()()()()()()()()()()()()(0*0)"
    let espaço = " "
    let milton_pós_almoço =  "( )( )( )( )( )( )( )( )(  )( )( )( )()(0*0)"

    function slepp(ms){
        return new Promise( resolve => setTimeout(resolve, ms))
    }

    for ( let i = 0; i < 100000; i ++){
        milton =  espaço + milton
        console.log(milton)
        await slepp (200) 
        console.clear();
        console.log(milton_pós_almoço)
        milton_pós_almoço =  espaço + milton_pós_almoço
        await slepp (500)
        console.clear();
    
    }
}
1