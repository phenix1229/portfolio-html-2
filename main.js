// function addLinkToThumb(img){
//     const iLink = document.createElement('a');
//     iLink.target = '_blank'
//     iLink.href = document.querySelector(img).src; 
//     return document.querySelector(img).appendChild(iLink);
// }

// 

document.querySelectorAll('.img > img').forEach(function (){
    thing = document.querySelector('.img');
    const picInfo = document.querySelector('.img').innerHTML;
    const pic = document.querySelector('.img > img');
    const iLink = document.createElement('a');
    iLink.target = '_blank';
    iLink.href = pic.src; 
    iLink.innerHTML = picInfo;
    thing.removeChild(pic);
    // thing.replaceChild(iLink, pic);
    
    thing.appendChild(iLink);
})