
var songArr=[
    "song1",
    "song2",
    "song3",
    "song4",
    "song5",
    "song6",
    "song7",
    "song8",
    "song9",
    "song10"
]

var songIndex=0;
var playButton=document.querySelector("#playButton");
var playbar=document.querySelector("#playbar");
//var audioelement=new Audio();

var audioelement;
// for (var i = 0; i < 10; i++) {
//     document.querySelector("#startButton" + (i + 1)).addEventListener("click", (function(index) {
//         return function() {
//             //console.log("Entered");
//             songIndex=index;
//             //console.log(index);
//             if (audioelement) {
//                 // Stop the currently playing audio before starting a new one
//                 audioelement.pause();
//                 audioelement.currentTime = 0;
//                 $("#playButton").click(function()
//                 {
//                     if(audioelement.paused || audioelement.currentTime<=0)
//                     {
//                         audioelement.play();
//                         $("#playButton").removeClass("fa-play");
//                         $("#playButton").addClass("fa-pause");
                        
//                     }
//                     else{
//                         audioelement.pause();
//                         $("#playButton").removeClass("fa-pause");
//                         $("#playButton").addClass("fa-play");
                        
//                     }
//                 })
//               }
//             audioelement = new Audio("song" + (index + 1) + ".mp3");
//             if (audioelement.paused || audioelement.currentTime <= 0) {
//                 audioelement.play();
//                 $("#playButton").removeClass("fa-play");
//                 $("#playButton").addClass("fa-pause");
//             } else {
//                 //console.log("ENter");
//                 audioelement.pause();
//                 $("#playButton").removeClass("fa-pause");
//                 $("#playButton").addClass("fa-play");
//             }

//             $("#playButton").click(function()
//             {
//                 if(audioelement.paused || audioelement.currentTime<=0)
//                 {
//                     audioelement.play();
//                     $("#playButton").removeClass("fa-play");
//                     $("#playButton").addClass("fa-pause");
                    
//                 }
//                 else{
//                     audioelement.pause();
//                     $("#playButton").removeClass("fa-pause");
//                     $("#playButton").addClass("fa-play");
                    
//                 }
//             })

//             audioelement.addEventListener("timeupdate",function()
//             {
//                 var progress=parseInt(audioelement.currentTime/audioelement.duration*100);
//                 //console.log(progress);
//                 //console.log("timeupdate");
//                 playbar.value=progress;
//             })


//             playbar.addEventListener("input",function()
//             {
//                 //console.log("change");
//                 audioelement.currentTime=playbar.value*audioelement.duration/100;
//             })
            
//                     };
//     })(i));
// }



for(var i=0;i<10;i++)
{
    document.querySelector("#startButton" + (i + 1)).addEventListener("click",handleClick(i));
}

function handleClick(index)
{
    return function(){
        songIndex=index;
        //console.log(index);
        if (audioelement) {
            // Stop the currently playing audio before starting a new one
            audioelement.pause();
            audioelement.currentTime = 0;
            $("#playButton").click(function()
            {
                if(audioelement.paused || audioelement.currentTime<=0)
                {
                    audioelement.play();
                    $("#playButton").removeClass("fa-play");
                    $("#playButton").addClass("fa-pause");
                    
                }
                else{
                    audioelement.pause();
                    $("#playButton").removeClass("fa-pause");
                    $("#playButton").addClass("fa-play");
                    
                }
            })
          }
        audioelement = new Audio("song" + (index + 1) + ".mp3");
        if (audioelement.paused || audioelement.currentTime <= 0) {
            audioelement.play();
            $("#playButton").removeClass("fa-play");
            $("#playButton").addClass("fa-pause");
        } else {
            //console.log("ENter");
            audioelement.pause();
            $("#playButton").removeClass("fa-pause");
            $("#playButton").addClass("fa-play");
        }

        $("#playButton").click(function()
        {
            if(audioelement.paused || audioelement.currentTime<=0)
            {
                audioelement.play();
                $("#playButton").removeClass("fa-play");
                $("#playButton").addClass("fa-pause");
                
            }
            else{
                audioelement.pause();
                $("#playButton").removeClass("fa-pause");
                $("#playButton").addClass("fa-play");
                
            }
        })

        audioelement.addEventListener("timeupdate",function()
        {
            var progress=parseInt(audioelement.currentTime/audioelement.duration*100);
            //console.log(progress);
            //console.log("timeupdate");
            playbar.value=progress;
        })


        playbar.addEventListener("input",function()
        {
            //console.log("change");
            audioelement.currentTime=playbar.value*audioelement.duration/100;
        })
    };
    
}

var nextButton = document.querySelector("#nextButton");
nextButton.addEventListener("click", function() {
    // Pause the currently playing audio
    console.log(songIndex);
    if(audioelement)
    {
        audioelement.pause();
        audioelement.currentTime = 0;
                $("#playButton").click(function()
                {
                    if(audioelement.paused || audioelement.currentTime<=0)
                    {
                        audioelement.play();
                        $("#playButton").removeClass("fa-play");
                        $("#playButton").addClass("fa-pause");
                        
                    }
                    else{
                        audioelement.pause();
                        $("#playButton").removeClass("fa-pause");
                        $("#playButton").addClass("fa-play");
                        
                    }
                })
    }
    audioelement.pause();
    audioelement.currentTime = 0;

    // Increment the songIndex to go to the next song
    songIndex++;

    // Check if the songIndex exceeds the length of the songArr
    if (songIndex >= songArr.length) {
        // Reset the songIndex to 0 if it exceeds the length
        songIndex = 0;
    }
    console.log(songIndex);

    // Create a new audio element for the next song
    audioelement = new Audio(songArr[songIndex] + ".mp3");
    audioelement.play();
    $("#playButton").removeClass("fa-play");
    $("#playButton").addClass("fa-pause");

    // Add event listeners for the play/pause button and the time update
    $("#playButton").click(function() {
        if (audioelement.paused || audioelement.currentTime <= 0) {
            audioelement.play();
            $("#playButton").removeClass("fa-play");
            $("#playButton").addClass("fa-pause");
        } else {
            audioelement.pause();
            $("#playButton").removeClass("fa-pause");
            $("#playButton").addClass("fa-play");
        }
    });

    audioelement.addEventListener("timeupdate", function() {
        var progress = parseInt(audioelement.currentTime / audioelement.duration * 100);
        playbar.value = progress;
    });

    playbar.addEventListener("input", function() {
        audioelement.currentTime = playbar.value * audioelement.duration / 100;
    });
});


var previousButton = document.querySelector("#previous");
previousButton.addEventListener("click", function() {
    // Pause the currently playing audio
    //console.log(songIndex);
    if(audioelement)
    {
        audioelement.pause();
        audioelement.currentTime = 0;
                $("#playButton").click(function()
                {
                    if(audioelement.paused || audioelement.currentTime<=0)
                    {
                        audioelement.play();
                        $("#playButton").removeClass("fa-play");
                        $("#playButton").addClass("fa-pause");
                        
                    }
                    else{
                        audioelement.pause();
                        $("#playButton").removeClass("fa-pause");
                        $("#playButton").addClass("fa-play");
                        
                    }
                })
    }
    audioelement.pause();
    audioelement.currentTime = 0;

    // Increment the songIndex to go to the next song
    songIndex--;

    // Check if the songIndex exceeds the length of the songArr
    if (songIndex < 0) {
        // Reset the songIndex to 0 if it exceeds the length
        songIndex = songArr.length-1;
    }
    //console.log(songIndex);

    // Create a new audio element for the next song
    audioelement = new Audio(songArr[songIndex] + ".mp3");
    audioelement.play();
    $("#playButton").removeClass("fa-play");
    $("#playButton").addClass("fa-pause");

    // Add event listeners for the play/pause button and the time update
    $("#playButton").click(function() {
        if (audioelement.paused || audioelement.currentTime <= 0) {
            audioelement.play();
            $("#playButton").removeClass("fa-play");
            $("#playButton").addClass("fa-pause");
        } else {
            audioelement.pause();
            $("#playButton").removeClass("fa-pause");
            $("#playButton").addClass("fa-play");
        }
    });

    audioelement.addEventListener("timeupdate", function() {
        var progress = parseInt(audioelement.currentTime / audioelement.duration * 100);
        playbar.value = progress;
    });

    playbar.addEventListener("input", function() {
        audioelement.currentTime = playbar.value * audioelement.duration / 100;
    });
});



// var songIndex = 0;
// var playButton = document.querySelector("#playButton");
// var playbar = document.querySelector("#playbar");
// var audioelement;

// for (var i = 0; i < 10; i++) {
//   document.querySelector("#startButton" + (i + 1)).addEventListener("click", (function(index) {
//     return function() {
//       console.log("Entered");
//       if (audioelement && !audioelement.paused) {
//         // Pause the currently playing audio before starting a new one
//         audioelement.pause();
//         audioelement.currentTime = 0;
//         document.querySelector("#startButton" + (songIndex + 1)).classList.remove("fa-pause");
//         document.querySelector("#startButton" + (songIndex + 1)).classList.add("fa-play-circle");
//         $("#playButton").removeClass("fa-pause");
//         $("#playButton").addClass("fa-play");
//       }
//       if (songIndex === index && audioelement && !audioelement.paused) {
//         // If the same button is clicked again, pause the audio
//         audioelement.pause();
//         document.querySelector("#startButton" + (index + 1)).classList.remove("fa-pause");
//         document.querySelector("#startButton" + (index + 1)).classList.add("fa-play-circle");
//         $("#playButton").removeClass("fa-pause");
//         $("#playButton").addClass("fa-play");
//         songIndex = -1; // Reset the song index
//       } else {
//         // Play the new audio
//         audioelement = new Audio("song" + (index + 1) + ".mp3");
//         audioelement.play();
//         document.querySelector("#startButton" + (index + 1)).classList.remove("fa-play");
//         document.querySelector("#startButton" + (index + 1)).classList.add("fa-pause");
//         $("#playButton").removeClass("fa-play");
//         $("#playButton").addClass("fa-pause");
//         songIndex = index; // Update the current song index
//       }

//       $("#playButton").click(function() {
//         if (audioelement && !audioelement.paused) {
//           audioelement.pause();
//           $("#playButton").removeClass("fa-pause");
//           $("#playButton").addClass("fa-play");
//           if (songIndex >= 0) {
//             document.querySelector("#startButton" + (songIndex + 1)).classList.remove("fa-pause");
//             document.querySelector("#startButton" + (songIndex + 1)).classList.add("fa-play");
//             songIndex = -1; // Reset the song index
//           }
//         } else if (audioelement && audioelement.paused) {
//           audioelement.play();
//           $("#playButton").removeClass("fa-play");
//           $("#playButton").addClass("fa-pause");
//           if (songIndex >= 0) {
//             document.querySelector("#startButton" + (songIndex + 1)).classList.remove("fa-play");
//             document.querySelector("#startButton" + (songIndex + 1)).classList.add("fa-pause");
//           }
//         }
//       });


//       audioelement.addEventListener("timeupdate",function()
//             {
//                 var progress=parseInt(audioelement.currentTime/audioelement.duration*100);
//                 //console.log(progress);
//                 //console.log("timeupdate");
//                 playbar.value=progress;
//             })


//             playbar.addEventListener("input",function()
//             {
//                 //console.log("change");
//                 audioelement.currentTime=playbar.value*audioelement.duration/100;
//             })

//     };
//   })(i));
// }











