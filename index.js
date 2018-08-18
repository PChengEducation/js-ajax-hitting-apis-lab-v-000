function getRepositories(){
  const username = document.getElementById("username").value;
  const req = name XMLHttpRequest()
  req.addEventListener("load", displayRepositories);
  req.open("GET", "https://api.github.com/user/" + username + "/repos")
  req.send()
}

