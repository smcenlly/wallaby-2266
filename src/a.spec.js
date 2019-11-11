describe('my simple test', () => {
  it('should work', (done) => {
    const promise = new Promise((resolve, reject) => resolve(1));
    
    promise.finally(() => {
      console.log('boo');
      done();
    });
  });
});