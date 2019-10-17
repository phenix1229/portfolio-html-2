// function addLinkToThumb(img){
//     const iLink = document.createElement('a');
//     iLink.target = '_blank'
//     iLink.href = document.querySelector(img).src; 
//     return document.querySelector(img).appendChild(iLink);
// }

// 

document.querySelectorAll('.img1').forEach(function (space){
    const 
    const picInfo = document.querySelector('.img1').innerHTML
    const pic = document.querySelector('.img1 > img')
    const iLink = document.createElement('a');
    iLink.target = '_blank';
    iLink.href = pic.src; 
    iLink.innerHTML = picInfo;
    ;
    
    return space.appendChild(iLink);
})

// function testLink(){
//     const testLink = document.createElement('a')
//     testLink.href = "#";
//     testLink.innerText = "test link";
//     testLink.id = "test";
//     return document.body.appendChild(testLink);
// }

// testLink()
// document.body.appendChild('#test')

// addLinkToThumb('.thumbnail');