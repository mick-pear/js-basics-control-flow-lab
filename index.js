function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return 'This one is on me!'
  } else if (distance > 2500) {
    return 'No can do.'
  } else if (distance > 2000) {
    return 'I will gladly take your thirty bucks.'
  }
} 

function ternaryCheckCity(city) {
  let answer
  city === 'NYC' ? (answer = 'Ok, sounds good.') : (answer = 'No go.');
  return answer;
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}