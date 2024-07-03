const image = document.querySelector("img");
image.addEventListener("load", (event) => {
  const { naturalWidth, naturalHeight, width, height } = image;
});

setInterval(() => {
  document.getElementById("current-date").innerHTML = new Date().toLocaleString('en-US', {
    timeZone:'UTC', 
    weekday: 'long'
  });
},1000)

setInterval(() => {
  document.getElementById("current-time").innerHTML = new Date().toLocaleString('en-US', {
    timeZone:'UTC', 
    timeStyle:'long', 
    hourCycle:"h12", 
    dateStyle:'short',
  });
},1000)