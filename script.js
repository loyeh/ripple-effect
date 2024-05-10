const btn = document.querySelector(".btn");
const circle = document.querySelector(".circle");

console.log(btn.getClientRects());

window.addEventListener("click", (e) => {
  let i = 0;
  const right = btn.getClientRects()[0].right;
  const left = btn.getClientRects()[0].left;
  const top = btn.getClientRects()[0].top;
  const bottom = btn.getClientRects()[0].bottom;
  console.log(left, e.clientX, right);
  if (
    e.clientX < right &&
    e.clientX > left &&
    e.clientY < bottom &&
    e.clientY > top
  ) {
    console.log("clicked");
    const interv = setInterval(() => {
      circle.style.top = `${e.clientY - i * 5 - top}px`;
      circle.style.left = `${e.clientX - i * 5 - left}px`;
      circle.style.opacity = i;
      circle.style.width = `${i * 10}px`;
      circle.style.height = `${i * 10}px`;
      circle.style.opacity = 1 - i / 20;
      i += 1;
      if (i > 21) {
        clearInterval(interv);
      }
    }, 20);
  }
});
