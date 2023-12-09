// 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'


document.getElementById('button').addEventListener('click', generateJokes);

function generateJokes() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single', true)

    xhr.onload = function (e) {
        if (this.status === 200) {
            const response = JSON.parse(this.response)

            let output = `<h3>${response.joke}</h3>`
        
            document.getElementById('jokes').innerHTML = output
        }

       

        e.preventDefault()
    }

    xhr.send()

   
}