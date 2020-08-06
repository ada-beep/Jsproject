function Ada() {
  let name = prompt(`what is your name`);
  if (name == "") {
    alert("please enter a valid name");
  } else {
    alert("Thank you, we have received your information. " + name);
  }
}

Ada();
