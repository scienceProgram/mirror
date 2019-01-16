var canvas = document.getElementById("can");
var ctx = canvas.getContext("2d");

function get() {
    var data;
    $.get('http://localhost:5000', (res) => {
        data = res["image"];
        let image = new Image();
        image.src = data;
        ctx.beginPath();
        ctx.drawImage(image, 0, 0);
        ctx.stroke();
    });
}

function start() {
    setInterval(function() {
        get();
    }, 5000);
}
