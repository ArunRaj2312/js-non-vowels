var val=prompt("enter find non vowels");
var arr=[];
var res=[];
var a=0;
for(i=0;i<val.length;i++){
    arr[i]=val.slice(i,i+1);
}
console.log(arr);

for(j=0;j<arr.length;j++){
    if(arr[j]!="a" && arr[j]!="e" && arr[j]!="i" && arr[j]!="o" && arr[j]!="u"){
        if(arr[j]!=' '){
        res[a]=arr[j];
        a++;
        }
    }
}

console.log(res);