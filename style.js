function el (str, ...params) {
    var element, varios
    if(params.length > 0){
        varios = params.find(param=>typeof param === 'boolean')
        element = params.find(param=>typeof param === 'object')
    }
    return (element
                ? element[varios ? 'querySelectorAll' : 'querySelector'](str)
                : document[varios ? 'querySelectorAll' : 'querySelector'](str)
    )
}
function goStyle() {
    var style = document.createElement('style'),
    head = document.head || document.getElementsByTagName('head')[0],
    css = /*css*/`
        *{
            background-color: black !important;
            color: white !important;
            fill: black !important;
        }
        img, svg{
            display: none !important;
        }
    `
    style.innerHTML = css
    head.appendChild(style)
}
function mesengerConcentration(){
    el('._1enh._7q1s').remove()
    el('._673w._6ynl').remove()
    el('._4_j5').remove()
    el('#u_0_0').style.height = '100vh'
    el('#u_0_0').firstElementChild.style.height = '100vh'
    el('#u_0_0').firstElementChild.firstElementChild.style.height = '100vh'
    el('._4u-c._1wfr._9hq').style.height = '100vh'
}
goStyle();
(window.location.origin==='https://www.messenger.com') && mesengerConcentration()
