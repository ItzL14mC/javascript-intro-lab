(function() {
    const myHeading = document.getElementById("myHeading")
    myHeading.innerHTML = "Liams Page"
    document.querySelector("li").setAttribute("class", "currentPage")
    // document.querySelector('nav ul li a').setAttribute('href', 'http://www.google.co.uk')
    document.getElementById("myTestBtn").addEventListener("click", (ev)=>{
        console.dir(ev)
    })

    // let redBtn = document.querySelector(".red")
    // redBtn.addEventListener("click", function() {
    //     document.body.setAttribute("class", "redBack")
    // })

    // let greenBtn = document.querySelector(".green")
    // greenBtn.addEventListener("click", function() {
    //     document.body.setAttribute("class", "greenBack")
    // })

    // let blueBtn = document.querySelector(".blue")
    // blueBtn.addEventListener("click", function() {
    //     document.body.setAttribute("class", "blueBack")
    // })

    // let resetBtn = document.querySelector(".reset")
    // resetBtn.addEventListener("click", function() {
    //     document.body.removeAttribute("class")
    // })

    let colBtns = document.querySelectorAll(".colPicker")
    colBtns.forEach(colBtn => {
        colBtn.addEventListener('click', function(ev) {
        let backCol = ev.target.innerText
        backCol = backCol.toLowerCase() + "Back"
      document.body.setAttribute("class", backCol)
    });
  });
})();   

