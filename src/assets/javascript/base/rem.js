document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + "px"
window.onresize = function() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + "px"
}

// console.log('输出1rem', document.documentElement.style.fontSize);