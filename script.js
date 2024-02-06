const button=document.getElementById("Fetch")


button.addEventListener('click', function(){
    var search=document.getElementById("search").value
    //  alert(search)
    console.log(search)
   
      
    fetch("https://api.github.com/users/"+search)
    .then((result)=>result.json()
        // alert("ID FOUND");
    )
    .then((data)=>
    {
        console.log(data)
      document.getElementById('result').innerHTML = `
                    <BR>ID: ${data.id}
                    <BR>LOGIN: ${data.login}
                    <BR>GITHUB-PAGE:<A href="${data.html_url}" style="color:#0bb8fd">Click here</a>
                    <BR>Public Repos: ${data.public_repos}
                    <br>Followers:${data.followers}
                    <br>Following:${data.following}<BR>
                    <br><img src="${data.avatar_url}"  style="border-radius: 50%; width: 100px; height: 100px;">
                    `
    })
   .catch(error => {
            console.error('Error fetching user data:', error);
            alert('Error fetching user data. Please try again.');
        });
})
    


