const receipt = new Promise ((resolve, reject) => {
  setTimeout(function() {
    resolve();
  }, 2000);
    reject();
});

receipt.then(function () {
  console.log('This promise has resolved');

}, function() {
  console.log('This promise was rejected')
  });