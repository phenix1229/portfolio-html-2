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
    
    if(document.querySelector('#result').innerText.includes = 'Citrine'){
        stonePic.src = './photos/Citrine.png';
    } else if(document.querySelector('#result').innerText.includes = 'Citrine'){
        stonePic.src = './photos/amethyst.png';
    }
    document.querySelector('#result').appendChild(stonePic);
}

addStonePic();