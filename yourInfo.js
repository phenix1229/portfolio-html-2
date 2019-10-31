function separateDate(birthDate) {
    birthDay = Number(birthDate.substring(2, 4));
    birthMonth = Number(birthDate.substring(0, 2))
    birthYear = Number(birthDate.substring(4));

    return birthDay, birthMonth, birthYear;
}

function age(birthDate){
  separateDate(birthDate);
  
  today = new Date();

  if (today.getMonth() +1 < birthMonth || (today.getMonth() + 1 === birthMonth && today.getDate() < birthDay)) { age =    today.getFullYear() - birthYear - 1;
  } else{
    age = (today.getFullYear() - birthYear);
  }
  return 'You are ' + age + ' years old.';
}

function zodiacSign(birthDate) {
  separateDate(birthDate);

  sign = 'Your Zodiac sign is ';
  
  if (birthMonth === 3 && birthDay >= 21 || birthMonth === 4 && birthDay <= 20) {
    return sign + 'Aries.';
  } else if (birthMonth === 4 && birthDay >= 21 || birthMonth === 5 && birthDay <= 20) {
    return sign + 'Taurus.';
  } else if (birthMonth === 5 && birthDay >= 21 || birthMonth === 6 && birthDay <= 20) {
    return sign + 'Gemini.';
  } else if (birthMonth === 6 && birthDay >= 21 || birthMonth === 7 && birthDay <= 22) {
    return sign + 'Cancer.';
  } else if (birthMonth === 7 && birthDay >= 23 || birthMonth === 8 && birthDay <= 22) {
    return sign + 'Leo.';
  } else if (birthMonth === 8 && birthDay >= 23 || birthMonth === 9 && birthDay <= 22) {
    return sign + 'Virgo.';
  } else if (birthMonth === 9 && birthDay >= 23 || birthMonth === 10 && birthDay <= 22) {
    return sign + 'Libra.';
  } else if (birthMonth === 10 && birthDay >= 23 || birthMonth === 11 && birthDay <= 22) {
    return sign + 'Scorpio.';
  } else if (birthMonth === 11 && birthDay >= 23 || birthMonth === 12 && birthDay <= 21) {
    return sign + 'Sagittarius.';
  } else if (birthMonth === 12 && birthDay >= 22 || birthMonth === 1 && birthDay <= 19) {
    return sign + 'Capricorn.';
  } else if (birthMonth === 1 && birthDay >= 20 || birthMonth === 2 && birthDay <= 19) {
    return sign + 'Aquarius.';
  } else {
    return sign + 'Pisces.';
  }
}

// function addStonePic(stone){
//       const stonePic = document.createElement('img');
//       stonePic.className = 'sPic';
//       stonePic.src = `./photos/${stone}.png`;
//       document.querySelector('body').appendChild(stonePic);
// }

function birthStone(birthDate) {
  separateDate(birthDate);
  const stones = ['Garnet.', 'Amethyst.', 'Aquamarine.', 'Diamond', 'Emerald.', 'Alexandrite.', 'Ruby.', 'Peridot.', 'Sapphire.', 'Pink-Tourmaline.', 'Citrine.', 'Blue-Topaz.']
  const stone = stones[birthMonth - 1];
  // if (birthMonth === 1) {
  //       stone = 'Garnet.';
  //   } else if (birthMonth === 2) {
  //       stone = 'Amethyst.';
  //   } else if (birthMonth === 3) {
  //       stone = 'Aquamarine.';
  //   } else if (birthMonth === 4) {
  //       stone = 'Diamond.';
  //   } else if (birthMonth === 5) {
  //       stone = 'Emerald.';
  //   } else if (birthMonth === 6) {
  //       stone = 'Alexandrite.';
  //   } else if (birthMonth === 7) {
  //       stone = 'Ruby.';
  //   } else if (birthMonth === 8) {
  //       stone = 'Peridot.';
  //   } else if (birthMonth === 9) {
  //       stone = 'Sapphire.';
  //   } else if (birthMonth === 10) {
  //       stone = 'Pink Tourmaline.';
  //   } else if (birthMonth === 11) {
  //       stone = 'Citrine.';
  //   } else {
  //       stone = 'Blue Topaz.';
  //   }

  // reply = `Your birthstone is ${stone}`;
  return `Your birthstone is ${stone}\n ${addSignPic(stones[birthMonth - 1])}`; 
}

function yourInfo(optionNum){
  if (optionNum === "1"){
    return age(birthDate);
  } else if (optionNum === "2"){
    return zodiacSign(birthDate);
  } else if (optionNum === "3"){
    return birthStone(birthDate);
  } else if(optionNum === '4'){
    return `${age(birthDate)}\n ${zodiacSign(birthDate)}\n ${birthStone(birthDate)}`;
  } else {
    return "Goodbye"}
}

// function getStoneName(){
//   const resultStr = document.querySelector('#result').innerText.split(' ');
//   const nameLocation = resultStr[resultStr.length - 1];
//   const stoneName = nameLocation.slice(0, nameLocation.length - 1);
//   return stoneName.toLowerCase();
// }

function addStonePic(){
  // getStoneName();
  const stonePic = document.createElement('img');
  stonePic.className = 'sPic';
  stonePic.src = `./photos/${stone.toLowerCase()}png`;
  
  // if(document.querySelector('#result').innerText.includes('Garnet')){
  //     stonePic.src = './photos/garnet.png';
  // } else if(document.querySelector('#result').innerText.includes('Amethyst')){
  //     stonePic.src = './photos/amethyst.png';
  // } else if(document.querySelector('#result').innerText.includes('Aquamarine')){
  //     stonePic.src = './photos/aquamarine.png';
  // } else if(document.querySelector('#result').innerText.includes('Diamond')){
  //     stonePic.src = './photos/diamond.png';
  // } else if(document.querySelector('#result').innerText.includes('Emerald')){
  //     stonePic.src = './photos/emerald.png';
  // } else if(document.querySelector('#result').innerText.includes('Alexandrite')){
  //     stonePic.src = './photos/alexandrite.png';
  // } else if(document.querySelector('#result').innerText.includes('Ruby')){
  //     stonePic.src = './photos/ruby.png';
  // } else if(document.querySelector('#result').innerText.includes('Peridot')){
  //     stonePic.src = './photos/peridot.png';
  // } else if(document.querySelector('#result').innerText.includes('Sapphire')){
  //     stonePic.src = './photos/sapphire.png';
  // } else if(document.querySelector('#result').innerText.includes('Tourmaline')){
  //     stonePic.src = './photos/tourmaline.png';
  // } else if(document.querySelector('#result').innerText.includes('Citrine')){
  //     stonePic.src = './photos/Citrine.png';
  // } else if(document.querySelector('#result').innerText.includes('Topaz')){
  //     stonePic.src = './photos/blue-topaz.png';
  // }
  document.querySelector('#result').appendChild(stonePic);
}

function addSignPic(){
  
  const signPic = document.createElement('img');
  signPic.className = 'sPic';
  
  if(document.querySelector('#result').innerText.includes('Aquarius')){
      signPic.src = './photos/aquarius.png';
  } else if(document.querySelector('#result').innerText.includes('Pisces')){
      signPic.src = './photos/pisces.png';
  } else if(document.querySelector('#result').innerText.includes('Aries')){
      signPic.src = './photos/aries.png';
  } else if(document.querySelector('#result').innerText.includes('Taurus')){
      signPic.src = './photos/taurus.png';
  } else if(document.querySelector('#result').innerText.includes('Gemini')){
      signPic.src = './photos/gemini.png';
  } else if(document.querySelector('#result').innerText.includes('Cancer')){
      signPic.src = './photos/cancer.png';
  } else if(document.querySelector('#result').innerText.includes('Leo')){
      signPic.src = './photos/leo.png';
  } else if(document.querySelector('#result').innerText.includes('Virgo')){
      signPic.src = './photos/virgo.png';
  } else if(document.querySelector('#result').innerText.includes('Libra')){
      signPic.src = './photos/libra.png';
  } else if(document.querySelector('#result').innerText.includes('Scorpio')){
      signPic.src = './photos/scorpio.png';
  } else if(document.querySelector('#result').innerText.includes('Sagittarius')){
      signPic.src = './photos/sagittarius.png';
  } else if(document.querySelector('#result').innerText.includes('Capricorn')){
      signPic.src = './photos/capricorn.png';
  }
  document.querySelector('#result').appendChild(signPic);
}


module.exports = {
  separateDate,
  age,
  zodiacSign,
  birthStone,
  yourInfo,
  addSignPic,
  addStonePic
}