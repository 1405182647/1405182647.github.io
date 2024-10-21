const shell = document.querySelector('.shell');
shell.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const mybutton = document.getElementById("topBtn");
  if (shell.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            document.querySelector('.head').style.opacity = 1;
        } else {
            document.querySelector('.head').style.opacity = 0.9999;
        }
    });
}, { threshold: [0] });

navObserver.observe(document.querySelector('.head'));

function topFunction() {
    const shell = document.querySelector('.shell');
    shell.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
     const head = document.querySelector('.head');
    head.style.opacity = 1;
    setTimeout(() => {
        head.style.opacity = 1;
    }, 1000);
}          

