

// promise


let promise = new Promise(function(res,rej){
      if(5==4){
        res()
      }else{
        rej()
      }
})

console.log(promise)