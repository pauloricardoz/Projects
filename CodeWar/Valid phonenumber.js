function validPhoneNumber(phoneNumber){
  //TODO: Return whether phoneNumber is in the proper form
  return( (/[(][0-9]{3}[)]\s*[0-9]{3}-?\s?[0-9]{4}/).test(phoneNumber))
}

console.log(validPhoneNumber("(123) 456-7890"))