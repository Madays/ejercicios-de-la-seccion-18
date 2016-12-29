function stringMultiplicar(n) {
    var n;
    var i;
    var salida="";
    for (i=1; i<=10; i++){    
        if(i<=10){
            salida += n+"x"+i+"="+n*i;  
            if (i<10){
            salida+="/";
        }
        }        
    }
    return salida;
}
