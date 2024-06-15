fetch('https://icanhazdadjoke.com/slack')
 .then(data => data.json())
 .then(jokeData=>{
    const text=jokeData.attachments[0].text;
    const joke=document.getElementById("jokeElement");

    joke.innerHTML=text
 })