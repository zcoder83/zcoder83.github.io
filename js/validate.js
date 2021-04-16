function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  let lat = document.querySelector("#lat").value;
  let long = document.querySelector("#long").value;
  let errorLat = document.querySelector("#errorMsgLat");
  let errorLong = document.querySelector("#errorMsgLong");
  //to toggle hidden attribute
  errorLat.hidden = true;
  errorLong.hidden = true;
  let isValid = true;
  if(lat<-90 || lat>90){
    isValid = false;
    
    errorLat.hidden = false;
  }
  if(long<-180 || long>180){
    isValid = false;
    
    errorLong.hidden = false;
  }
  console.log('TODO - validate the longitude, latitude values before submitting');
  return isValid;
  
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
