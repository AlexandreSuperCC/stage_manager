function getEmailIndex(arr, email){
    for(var i=0;i<arr.length;i++){
        if(arr[i].email == email){
            return i;
        }
    }
    return -1;
}
module.exports = getEmailIndex;
