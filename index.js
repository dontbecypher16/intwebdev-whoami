
let allWords = document.querySelector("#words");
let bioButton = document.querySelector("#submit");

async function getRandomName() {
  const url =
    "https://namey.muffinlabs.com/name.json?count=1&with_surname=true&frequency=common";
  const response = await fetch(url);
  const names = await response.json();
  console.log(names);

 


  // TODO: finish this function (see the README for details)
}

async function setName() {
  try {
    const randomName = await getRandomName(allWords.words);
    // TODO: finish this function (see the README for details)
    for(let i = 0; i < randomName.length; i++) {
      let name = randomName[i].name;
      console.log(name);
    }
    bioButton.insertAdjacentHTML("afterbegin", "<h2>" + name + "</h2>");

  } catch (err) {
    console.error(err);
  }
}


let bioImage = document.querySelector("#bio");
let outputImage = document.querySelector("#output-word");


words.onsubmit = function generateBio(event) {
  // Since we're not actually submitting the form to a backend, we need to call preventDefault
  // more about this function: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  event.preventDefault();

  console.log("Generating bio...");

fetch("https://thispersondoesnotexist.com/image")
.then(
  function parseTheJson(response) {
    return response.json()
  }
 )
 .then(
  function doTheWork(data) {
    
    // finally we have access to the data
    // console.log(data);
    let newImageUrl = data.file;
    // console.log(newImageUrl);
    
    // set the new url
    bioImage.src = newImageUrl;
    
  }
)

  // TODO: write the rest of the function (see the README for details)

  console.log("Done!");
};
