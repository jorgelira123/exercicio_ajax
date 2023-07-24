document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.querySelector('#avatar');
    const name = document.querySelector('#name');
    const userName = document.querySelector('#username');
    const repository = document.querySelector('#repository');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const linkRepo = document.querySelector('#link-repo');


    fetch('https://api.github.com/users/jorgelira123')
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(json){
            avatar.src = json.avatar_url
            name.innerText = json.name;
            userName.innerText = json.login;
            repository.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            linkRepo.href = json.html_url;
        })
})



