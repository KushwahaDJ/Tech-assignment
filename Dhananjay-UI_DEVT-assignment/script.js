const questionNo = document.getElementById("qno");
const totalQuestions = document.getElementsByClassName("totalQue");
const hide = document.querySelector(".dummy");
const imagesAns = document.getElementById("images");
const descriptionV = document.getElementById("desc");
const description1 = document.querySelector(".mb-0");
const instructionData = document.getElementById("data-ins");

console.log(instructionData);

fetch("./data.xml")
  .then((res) => {
    return res.text();
  })
  .then((data) => {
    let parser = new DOMParser(),
      xmlDoc = parser.parseFromString(data, "text/xml");
    let questions = xmlDoc.getElementsByTagName("question");
    let descriptions = xmlDoc.getElementsByTagName("description");
    let textDesc = xmlDoc.getElementsByTagName("text");
    let instructionsRule = xmlDoc.getElementsByTagName("instruction");
    let images = xmlDoc.getElementsByTagName("image");

    console.log();

    // this is for the fething the questions
    for (let i = 0; i < questions.length; i++) {
      questionNo.innerText = questions[i].innerHTML;
    }
    //this code for the description
    descriptionV.innerText = descriptions[0].innerHTML;
    description1.innerText = textDesc[0].innerHTML;
    instructionData.innerText = instructionsRule[0].innerHTML;

    for (let i = 0; i < images.length; i++) {
      if (images[i].getAttribute("src")) {
        hide.style.display = "none";
        imagesAns.innerHTML += `<div class="col-xl-3 col-lg-4 col-sm-6 mb-3">
        <div class="img">
          <img class="img-fluid"  src=${images[i].getAttribute("src")} alt="">
          <input type="checkbox">
        </div>
      </div>`;
      }
    }

    totalQuestions.innerText = questions.length;
  });
