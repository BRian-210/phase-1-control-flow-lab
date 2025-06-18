// Write your code below!
function scuberGreetingForFeet(feet) { // Write your code here!
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet <= 2000) {
    return 'That will be twenty bucks.';
  } else if (2000 < feet && feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}
function ternaryCheckCity(city) {
  // Write your code here!
 return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  // Note: 'city' should be defined in the context where this function is called.
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
 }