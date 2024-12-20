const cursor = document.getElementById('cursor');

const positionElement = (e)=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
  
    //delay the cursor movement by adding a transition to the element
    setTimeout(()=>{
        cursor.style.top = `${mouseY}px`;
        cursor.style.left = `${mouseX}px`;
    }, 100);

}

document.addEventListener('mousemove', positionElement);