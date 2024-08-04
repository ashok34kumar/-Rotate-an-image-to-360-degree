const img = document.querySelector('.rotate-img')
// console.log(img);

let rtdeg = 0 
setInterval(() => {
    rtdeg++
    if (rtdeg == 360) {
        rtdeg = 0
    }
    //console.log(rtdeg);
    //img.style.transform = 'rotate('+rotate+'deg)'
    img.style.transform = `rotate(${rtdeg}deg)`

}, 10);




