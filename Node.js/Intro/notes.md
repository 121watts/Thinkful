### Error-first callback
http://thenodeway.io/posts/understanding-error-first-callbacks/

1) The first argument of the callback is reserved for an error object. If an error occurred, 
it will be returned by the first err argument.

2) The second argument of the callback is reserved for any successful response data.
If no error occurred, err will be set to null and any successful data will be returned 
in the second argument.

Example:

fs.readFile('/foo.txt', function(err, data) {
  // If an error occurred, handle it (throw, propagate, etc)
  if(err) {
    console.log('Unknown Error');
    return;
  }
  // Otherwise, log the file contents
  console.log(data);
});
