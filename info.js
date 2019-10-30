const birthDate = prompt("What is your birth date (mmddyyyy)?\n")

const optionNum = prompt("What would you like to know?\n1 = Age\n2 = Zodiac sign\n3 = Birthstone\n4 = All of the above\nPress any other key and 'Enter' to exit\n")

const result = yourInfo(optionNum);

document.querySelector('#result').innerText = result

// function addStonePic(){
//     if(document.querySelector('#result').innerText.includes = 'Topaz'){
//         const blueTopazPic = document.createElement('img');
//         blueTopazPic.src = './photos/blue-topaz.png';
//         document.querySelector('#result').appendChild(blueTopazPic);
//     }
// }

function addStonePic(){
    const stonePic = document.createElement('img');
    stonePic.className = 'sPic';
    
    if(document.querySelector('#result').innerText.includes('Garnet')){
        stonePic.src = './photos/garnet.png';
    } else if(document.querySelector('#result').innerText.includes('Amethyst')){
        stonePic.src = './photos/amethyst.png';
    } else if(document.querySelector('#result').innerText.includes('Aquamarine')){
        stonePic.src = './photos/aquamarine.png';
    } else if(document.querySelector('#result').innerText.includes('Diamond')){
        stonePic.src = './photos/diamond.png';
    } else if(document.querySelector('#result').innerText.includes('Emerald')){
        stonePic.src = './photos/emerald.png';
    } else if(document.querySelector('#result').innerText.includes('Alexandrite')){
        stonePic.src = './photos/alexandrite.png';
    } else if(document.querySelector('#result').innerText.includes('Ruby')){
        stonePic.src = './photos/ruby.png';
    } else if(document.querySelector('#result').innerText.includes('Peridot')){
        stonePic.src = './photos/peridot.png';
    } else if(document.querySelector('#result').innerText.includes('Sapphire')){
        stonePic.src = './photos/sapphire.png';
    } else if(document.querySelector('#result').innerText.includes('Tourmaline')){
        stonePic.src = './photos/tourmaline.png';
    } else if(document.querySelector('#result').innerText.includes('Citrine')){
        stonePic.src = './photos/Citrine.png';
    } else if(document.querySelector('#result').innerText.includes('Topaz')){
        stonePic.src = './photos/blue-topaz.png';
    }
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

addSignPic();
addStonePic();

