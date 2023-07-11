let btn = document.getElementById(`button`);
btn.onmousedown = () => console.log("I was pressed!");
btn.onmouseenter = () => console.log("Mouse on me!");
btn.onmouseleave = () => console.log("Mouse is not on me!");