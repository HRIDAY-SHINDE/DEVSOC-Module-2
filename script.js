const button=document.getElementById("Fetch")


button.addEventListener('click', function(){
    var search=document.getElementById("search").value
     alert(search)
    console.log(search)
   
      
    fetch("https://api.github.com/users/"+search)
    .then((result)=>result.json())
    .then((data)=>
    {
        console.log(data)
      document.getElementById('result').innerHTML = `
                    <BR>ID: ${data.id}
                    <BR>login: ${data.login}
                    <BR>url:${data.html_url}>
                    <BR>Public Repos: ${data.public_repos}
                    <br>Followers:${data.followers}
                    <br>Following:${data.following}
                `
            
      
    })
    
    
    .catch(error => console.error('Error fetching data:', error))
    

})
