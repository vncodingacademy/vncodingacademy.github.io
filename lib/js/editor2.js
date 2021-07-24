

/*const random_song = document.getElementById('random_song');
const choose_song = document.getElementById('choose_song');
const song = document.querySelector('.song')
function set_song(song) {
    var song_iframe = document.createElement("iframe");
    song_iframe.setAttribute("src",song);
    song_iframe.style.width = "100%";
    song_iframe.style.height = "300px";
    document.body.querySelector('.editor').appendChild(song_iframe)
}
random_song.onclick = function () {
    song.remove();
    set_song('https://www.youtube.com/embed/f02mOEt11OQ')
}

choose_song.onclick = function () {
    var url = prompt('Youtube URL:')
    var video_id = url.split('https://www.youtube.com/watch?v=')[1];
    let embedded_url = 'https://www.youtube.com/embed/'+video_id;
    song.remove();
    set_song(embedded_url)

}*/

const question1 = document.getElementById('1');
const question2 = document.getElementById('2');
const question3 = document.getElementById('3');

var firstclick1 = true;
question1.onclick = function () {
    var answer1 = document.getElementById('answer1');
    if (firstclick1)  {
        answer1.style.display = "block"
        firstclick1 = false;
    } else {
        answer1.style.display = "none"
        firstclick1 = true;
    }
}
var firstclick2 = true;
question2.onclick = function () {
    var answer2 = document.getElementById('answer2');
    if (firstclick2)  {
        answer2.style.display = "block"
        firstclick2 = false;
    } else {
        answer2.style.display = "none"
        firstclick2 = true;
    }
}
function navBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
