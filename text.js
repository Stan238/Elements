const weightFont = document.getElementById("rangeWeight").value;
console.log(weightFont);
document.addEventListener("input", () => {
    const weightFont1 = document.getElementById("rangeWeight").value;
    const sizeFont1 = document.getElementById("rangeSize").value;
    console.log(weightFont1);
    console.log(sizeFont1);
    document.body.style.fontWeight = weightFont1;
    document.body.style.fontSize = `${sizeFont1}px`;
    
})