// function addLinkToThumb(img){
//     const iLink = document.createElement('a');
//     iLink.target = '_blank'
//     iLink.href = document.querySelector(img).src; 
//     return document.querySelector(img).appendChild(iLink);
// }

// 

document.querySelectorAll('.img > img').forEach(function (){
    const thing = document.querySelector('.img');
    // console.log(thing)
    // const picInfo = document.querySelector('.img').innerHTML;
    // console.log(picInfo);
    const pic = document.querySelector('.img > img');
    const iLink = document.createElement('a');
    // const picThumb = document.createElement('img')
    iLink.target = '_blank';
    iLink.href = pic.src; 
    // picThumb.src = picInfo
    iLink.innerHTML = pic.outerHTML
    // iLink.innerHTML = picInfo;
    thing.removeChild(pic);
    // thing.replaceChild(iLink, pic);
    console.log(iLink)
    thing.appendChild(iLink);
})