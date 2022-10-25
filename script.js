 console.log("hi");
//initialize variable
let songindex = 0;
let  audioElement=new Audio('/songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));

let songs=[
    { songsname:"mariyo-mortals",filepath:"/songs/1.mp3",coverpath:"/covers/1.jpg"},
    { songsname:"cielo-",filepath:"/songs/2.mp3",coverpath:"/covers/2.jpg"},
    { songsname:"abc",filepath:"/songs/3.mp3",coverpath:"/covers/3.jpg"},
    { songsname:"efg",filepath:"/songs/4.mp3",coverpath:"/covers/4.jpg"},
    { songsname:"hij",filepath:"/songs/5.mp3",coverpath:"/covers/5.jpg"},
    { songsname:"kml",filepath:"/songs/6.mp3",coverpath:"/covers/6.jpg"},
    ]

    songitems.forEach((element,i) => {
        element.getElementsByClassName("songname")[0].innerText=songs[i].songsname;
        element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    });

//Handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }

    else{
        audioElement.pause();
        masterplay.classList.add("fa-play-circle");
        masterplay.classList.remove("fa-pause-circle");
        gif.style.opacity=0;
    }
})



//Listen to event
audioElement.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime =myprogressbar.value *audioElement.duration/100;
})

const makeallplay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');

    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{

    element.addEventListener('click',(e)=>{
        makeallplay();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
       audioElement.src=`songs/${songindex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=5){
        songindex=0;
    }
    else{
        songindex +=1;
    }
    audioElement.src=`songs/${songindex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})


document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex -=1;
    }
    audioElement.src=`songs/${songindex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    

})

