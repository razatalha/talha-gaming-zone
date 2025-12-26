window.addEventListener("scroll",()=>{
  document.querySelectorAll(".reveal").forEach(sec=>{
    if(sec.getBoundingClientRect().top < window.innerHeight-120){
      sec.classList.add("active");
    }
  });
});
