function factorial(n) {
    var i;  var factorial = 1; var n;
    if (n<=0){
        return null;
    }else{
    for (i=1;i<=n;i++){
        factorial*=i;
    }
    return factorial;
    }
}