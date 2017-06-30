// function getTempCallback(location,callback){
//   callback(undefined,38);
//   callback('City not found');
// }

// getTempCallback('Singapore',function(err, temp){
//   if(err){
//     console.log(err);
//   }else{
//     console.log('success',temp);
//   }
// });

// function getTempPromise(location){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(38);
//       reject('City not found');
//     }, 1000);
//   });
// }

// getTempPromise('Singapore')
//   .then((temp)=>{
//     console.log('promise success',temp);
//   },(err)=>{
//     console.log('promise error',err);
//   })
function addPromise(a,b){
  return new Promise((resolve,reject) => {
    if(isNumber(a) && isNumber(b)){
      resolve(a+b);
    }else{
      reject('a & b need to be number');
    }
  });
}

function isNumber(number){
  return typeof(number) === 'number';
}

addPromise(2,3)
  .then((sum)=>{
    console.log('success',sum)
  },(err)=>{
    console.log('error', err);
  })

  addPromise(2,'max')
  .then((sum)=>{
    console.log('success',sum)
  },(err)=>{
    console.log('error', err);
  })