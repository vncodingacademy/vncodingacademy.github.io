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
    if (firstclick1)  {
        var answer1 = document.createElement('div');
        answer1.innerHTML = '<span class="console">console</span><span>.</span><span class="log">log</span><span>(</span><span class="string">"</span><span class="string">Nguyễn Văn A</span><span class="string">"</span><span>)</span>';
        answer1.className = 'lesson_example';
        document.body.querySelector('.question1').appendChild(answer1);
        firstclick1 = false;
    } else {
        var answer1  = document.querySelector('.question1 .lesson_example');
        answer1.remove();
        firstclick1 = true;
    }
}
var firstclick2 = true;
question2.onclick = function () {
    if (firstclick2)  {
        var answer2 = document.createElement('div');
        answer2.innerHTML = '<span class="console">console</span><span>.</span><span class="log">log</span><span>(</span><span class="number">2021</span><span>)</span>';
        answer2.className = 'lesson_example';
        document.body.querySelector('.question2').appendChild(answer2);
        firstclick2 = false;
    } else {
        var answer2  = document.querySelector('.question2 .lesson_example');
        answer2.remove();
        firstclick2 = true;
    }
}
var firstclick3 = true;
question3.onclick = function () {
    if (firstclick3)  {
        var answer3 = document.createElement('div');
        answer3.innerHTML = '<span class="console">console</span><span>.</span><span class="log">log</span><span>(</span><span class="string">"</span><span class="string">Tôi rất thích học lập trình trên trang web</span><span class="string" style="white-space: pre-line"> của Việt Hùng</span><span class="string">"</span><span>)</span>';
        answer3.style.height = "100px"
        answer3.className = 'lesson_example';
        document.body.querySelector('.question3').appendChild(answer3);
        firstclick3 = false;
    } else {
        var answer3  = document.querySelector('.question3 .lesson_example');
        answer3.remove();
        firstclick3 = true;
    }
}