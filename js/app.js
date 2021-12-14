let sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll(".nav-item");

window.onscroll = ()=>{
    let current;
    sections.forEach( section=>{
        let sectionTop = section.offsetTop;
        // console.log(sectionTop, scrollY);
        if (scrollY >= sectionTop - 55) {
            current = section.getAttribute('id');
        }
    });
    // console.log('----------');

    // console.log(current);
    navLi.forEach(li=>{
        li.classList.remove('active');
        if (li.classList.contains(current)) {
              
            li.classList.add('active');
        }
    });
}

