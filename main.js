// function addLinkToThumb(img){
//     const iLink = document.createElement('a');
//     iLink.target = '_blank'
//     iLink.href = document.querySelector(img).src; 
//     return document.querySelector(img).appendChild(iLink);
// }

document.querySelectorAll('.thumbnail').forEach(function (space){
    const iLink = document.createElement('a');
    iLink.target = '_blank';
    iLink.href = space.src; 
    iLink.innerText = `<img src='space.src' height="120px"></img>`;
    return space.appendChild(iLink);
})

function testLink(){
    const testLink = document.createElement('a')
    testLink.href = "#";
    testLink.innerText = "test link";
    testLink.id = "test";
    return document.body.appendChild(testLink);
}

testLink()
// document.body.appendChild('#test')

// addLinkToThumb('.thumbnail');