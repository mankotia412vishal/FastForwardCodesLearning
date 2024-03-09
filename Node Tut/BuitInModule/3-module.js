
const  {readFileSync,writeFileSync}=require('fs')
const first=readFileSync('E:\\Nodejs and Express Learning\\FastForwardCodesLearning\\Node Tut\\BuitInModule\\content\\first.txt','utf-8')
const second=readFileSync('E:\\Nodejs and Express Learning\\FastForwardCodesLearning\\Node Tut\\BuitInModule\\content\\second.txt','utf-8')
// console.log(first,second)

writeFileSync('E:\\Nodejs and Express Learning\\FastForwardCodesLearning\\Node Tut\\BuitInModule\\content\\result-sync.txt',`Here is the result : ${first},${second}`,{flag:'a'})


