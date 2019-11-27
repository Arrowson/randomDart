$(document).ready(function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var difficulty = 0

    $("#test").click(function(){
        var widthPos = 0
        var heightPos = 0
        var size = 0

        for(var i=0;i<difficulty;i++){
            widthPos = Math.floor(Math.random()*(800)+1) 
            heightPos = Math.floor(Math.random()*(300)+1)
            size = Math.floor(Math.random()*(80)+20)

            
            console.log("XCoord " + widthPos + " YCoord " + heightPos + " Radius " + size);
            ctx.strokeStyle ="#FFFFFF";
            ctx.beginPath();
            ctx.arc(widthPos, heightPos, size, 0, 2*Math.PI);
            ctx.stroke();
            ctx.fillStyle = '#FFFFFF';
            ctx.fill();
         }

    });

    $("#throw").click(function(){
        widthPos = Math.floor(Math.random()*(800)+1) 
        heightPos = Math.floor(Math.random()*(300)+1)

        var imgData = ctx.getImageData(widthPos,heightPos,1,1)
        if(imgData.data[0] == 255){
            
            ctx.fillStyle = 'red';
        }
        else{
            
            ctx.fillStyle = 'green';
        }
        ctx.beginPath();

        
        
        

        ctx.rect(widthPos, heightPos, 10, 10)
        
        ctx.stroke();
        ctx.fill();

    });
    $("#clear").click(function(){
        ctx.clearRect(0, 0, c.width, c.height);
    });
    $("#easy").click(function(){
        difficulty = 10;
        $("#dropdownMenuButton").text = "Easy"
    });
    $("#medium").click(function(){
        difficulty = 20;
        $("#dropdownMenuButton").text = "Medium"
    });
    $("#hard").click(function(){
        difficulty = 30;
        $("#dropdownMenuButton").text = "Hard"
    });
})





