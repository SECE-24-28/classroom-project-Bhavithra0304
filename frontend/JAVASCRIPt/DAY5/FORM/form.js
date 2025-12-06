let form1=document.querySelector("#feedbackForm")
form1.addEventListener("submit",(e)=>{
    e.preventDefault()
    let name1=document.querySelectorAll("input")[1]
    let range=document.querySelectorAll("input")[0]
    let course=document.getElementById("course")
    let feed=document.getElementById("feedback")
    let out=document.querySelector("#output")
    // out.textContent+=` ${course.value} ${range.value} ${feed.value} ${name1.value}`;
    out.innerHTML+=`<p> ${course.value} ${range.value} ${feed.value} ${name1.value}</p>`;

    form1.reset();
})
