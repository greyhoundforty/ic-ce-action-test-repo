/**
 * The `main` function is the entry-point into the function.
 * It has one optional argument, which carries all the 
 * parameters the function was invoked with.
*/
async function main(params) {
  // log environment variables available to the function
  console.log(process.env);
  // log Code Engine system headers available to the function
  console.log(params.__ce_headers);
  // log all parameters for debugging purposes
  console.log("params: "+params);
  // since functions are invoked through http(s), we return an HTTP response
  return { 
      statusCode: 200, 
      headers: { 'Content-Type': 'application/json' }, 
      body: params };
}

// this step is necessary, if you gave your main function a different name
// we include it here for documentation purposes only
module.exports.main = main;
