var d = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve('hello world');
    } else {
      reject('no bueno');
    }
  }, 250);
});
d.then( (data) => console.log('success : ', data) )
  .then( (data) => console.log('success 2 : ', data) )
  .catch( (error) => console.log('error : ', error) );
