const path=require('path')
console.log(path.sep)
const filepath=path.join('./content','subsubfolder','test.txt')
console.log(filepath)

const base =path.basename(filepath)
console.log(base)
const absolutePath=path.resolve(__dirname,'content','subsubfolder','test.txt')
console.log(absolutePath)