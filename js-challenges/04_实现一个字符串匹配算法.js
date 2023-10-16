function myIndexOf(string,subString) {
    if(subString===""){
        return -1
    }
    for(let i = 0 ;i<=string.length-subString.length;i++){
        if(string.slice(i,i+subString.length)===subString){
            return i
        }

    }
    return -1;
}
console.log(myIndexOf("mawenfei",'en'));