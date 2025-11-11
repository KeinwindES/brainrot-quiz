const question1slider = document.getElementById("question1Input")
question1slider.addEventListener("input",()=>{
    let outputtext=""

    if (question1slider.value=="1") {outputtext="bombardiro crocodilo"}
    if (question1slider.value=="2") {outputtext="tate bros"}
    if (question1slider.value=="3") {outputtext="kai cenat"}
    document.getElementById ("question1selectanswer").innerText = outputtext
})