document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const age = document.getElementById("age").value;
  const name = document.getElementById("name").value;

  // Validation: check if fields are empty
  if (age === "" || name === "") {
    alert("Please enter valid details");
    return;
  }

  // Promise with 4-second delay
  const votePromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (parseInt(age) > 18) {
        resolve(name);
      } else {
        reject(name);
      }
    }, 4000);
  });

  votePromise
    .then(function (name) {
      alert("Welcome, " + name + ". You can vote.");
    })
    .catch(function (name) {
      alert("Oh sorry " + name + ". You aren't old enough.");
    });
});