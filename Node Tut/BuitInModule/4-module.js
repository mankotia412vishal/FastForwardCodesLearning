// require('./1-modue')
// require('./2-module')
// require('./3-module)


const {readFile,writeFile}=require('fs')
readFile('E:\\Nodejs and Express Learning\\FastForwardCodesLearning\\Node Tut\\BuitInModule\\content\\first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
   const firsttext=result;
   readFile('E:\\Nodejs and Express Learning\\FastForwardCodesLearning\\Node Tut\\BuitInModule\\content\\second.txt','utf-8',(error,result)=>{
    if(error){
        console.log(error)

    }
    const secondtext=result
    writeFile('E:\\Nodejs and Express Learning\\FastForwardCodesLearning\\Node Tut\\BuitInModule\\content\\result-text.txt',`here is data : ${firsttext},${secondtext} `,(err,result)=>{
     if(err){
         console.log(err)
     }
     console.log(result)
    })
   })
})