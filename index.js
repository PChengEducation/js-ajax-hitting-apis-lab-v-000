function getRepositories(){
  const username = document.getElementById("username").value;
  const req = name XMLHttpRequest()
  req.addEventListener("load", displayRepositories);
  req.open("GET", "https://api.github.com/user/" + username + "/repos")
  req.send()
}

function displayRepositories(){
  const repos = JSON.parse(this.responseText)
  const repoList = "<ul>" + repos.map(r => {
    const dataUsername = 'data-username="' + r.owner.login + '"'
    const dataRepoName = 'data-repository="' + r.name + '"'
    return(`
      <li>
      <h2>${r.name}</h2>
      <a hreft="${r.html.url}">${r.html_url}</a><br>
      <a href="#" ${dataRepoName} ${dataUsername} onclick="getCommits(this)">
      Get Commits</a><br>
      <a href="#" ${dataRepoName} ${dataUsername} onclick="getBranches(this)">
      Get Branches</a><br></li>
      </li>`)
  }).join ('') + "</ul>";
  document.getElementById("repositories").innerHTML = repoList
}

function getBranches(el){
  const name = el.dataset.repository;
  const username = document.getElementById("username").value;
  const req = new XMLHttpRequest();
  req.addEventListener("load", displayBranches);
  req.open("GET", "https://api.github.com/repos/") + username + "/" + name + 
  "/branches";
  req.send()
}


