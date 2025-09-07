async function fetchRepos(event) {
  event.preventDefault(); // Prevent form submission
  try {
    const profileDiv = document.getElementById("profile");
    const repoDiv = document.getElementById("repos");
    profileDiv.innerHTML = ""; // Clear previous profile
    repoDiv.innerHTML = ""; // Clear previous results
    const username = document.getElementById("usernameField").value.trim();
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );

    if (!response.ok) {
      profileDiv.innerHTML = "Profile not found";
      return;
    }

    const apiData = await response.json();
    console.log(apiData);

    const profileData = {
      name: apiData[0].owner.login,
      avatar: apiData[0].owner.avatar_url,
      id: apiData[0].owner.id,
    };

    // profileDiv.innerHTML = `<div><img src="${profileData.avatar}" width="100px" style="border-radius: 50%;"/></div><div>${profileData.name}</div>`;
    profileDiv.innerHTML = `<div><img src="${profileData.avatar}" width="150px" style="border-radius: 50%;"/> <div>Username: ${profileData.name} <br> ID: ${profileData.id}</div></div>`;

    apiData.forEach((element) => {
      const repo = document.createElement("div");
      repo.innerHTML = `
        <div><strong><a href="${element.html_url}" target="_blank">${element.name}</a></strong></div>
        <div>Forks: ${element.forks_count} | Watchers: ${element.watchers_count} | Stars: ${element.stargazers_count}</div>
      `;
      repoDiv.appendChild(repo);
    });
  } catch (error) {
    console.log(error);
  }
}
