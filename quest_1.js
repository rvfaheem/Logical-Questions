s="abcabcbb"
str=""
strs=[]
count=0

for(let i of  s){
    console.log(i)
    if(!str.includes(i)){
        str+=i
        // count+=1
        console.log(str)
       
    }else{
        strs.push(str)
        str=i;
        console.log(i)
        console.log(strs)
    }
    
    
}

