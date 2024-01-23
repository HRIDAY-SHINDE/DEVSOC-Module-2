const button=document.getElementById("Fetch")

// var search= username.split('').join('');
// const token = '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';
button.addEventListener('click', function(){
    var search=document.getElementById("search").value
     alert(search)
    console.log(search)
    fetch("https://api.github.com/users/"+search)
    .then((result)=>result.json())
    .then((data)=>
    {
        console.log(data)
    })

})