let num = document.getElementsByTagName('input')


setTimeout(() => {
    let n = num[0].value;

    if(n) {
        alert(n)
    } else {
        console.log('erro')
    }
}, 6000)
