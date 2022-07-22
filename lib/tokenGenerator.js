let token=()=>{
    let numbers='0123456789'
    let chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let token='';
    let randNum=Math.floor(Math.random()*numbers.length)
        token+=numbers.charAt(randNum)
    for(let i=0;i<7;i++){
        let rand=Math.floor(Math.random()*chars.length)
        token+=chars.charAt(rand);
    }
    return token;
}

module.exports=token;