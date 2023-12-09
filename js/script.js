
// ----------------------------------------------------- Task 8 -----------------------------------------------------

    function randomQoute(){
        var qoute = [ 
            "<h6>To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.</h6>",
            "<h6>If you tell the truth, you don't have to remember anything.</h6>",
            "<h6>Always forgive your enemies; nothing annoys them so much.</h6>",
            "<h6>To live is the rarest thing in the world. Most people exist, that is all</h6>",
            "<h6>It is better to be hated for what you are than to be loved for what you are not.</h6>",
        ];
        var author = [
            "<p>__Ralph Waldo Emerson</p>",
            "<p>__Mark Twain</p>",
            "<p>__Oscar Wilde</p>",
            "<p>__Oscar Wilde</p>",
            "<p>__Andre Gide</p>",
        ];
        var random = Math.floor( Math.random() * qoute.length )
        document.getElementById("qoute").innerHTML = ( qoute[random] +  author[random]);
    }












