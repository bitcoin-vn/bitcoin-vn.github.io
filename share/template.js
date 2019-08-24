var audio = {};
var volumes = {
    hover: 0.3,
    click: 0.5
};

var feature = {
    /**
     * Hover sound
     * @param {*} path: audio
     */
    initMouseEnterSound: function (container, path, volume) {
        // sound hover
        var $element = $(container);
        $element.unbind("mouseenter"); // clear cache
        $element.mouseenter(function (e) {
            feature.playAudioJS(path, volume);
        });
    },
    /**
     * Click sound
     * @param {*} path: audio
     */
    initMouseDownSound: function (container, path, volume) {
        // sound hover
        var $element = $(container);
        $element.unbind("mousedown"); // clear cache
        $element.mousedown(function (e) {
            feature.playAudioHtmlRestart(path, volume);
        });
    },
    /**
     * @param {*} path: audio
     * @param {*} volume: number
     */
    playAudioJS: function (path, volume) {
        audio = new Audio();
        audio.src = path;
        audio.volume = volume;
        audio.load();
        audio.play().catch(function () {
            console.log('Exception play audio: issue');
        });
        return audio;
    },
    /**
     * @param {*} path: src audio
     * @param {*} volume: number
     */
    playAudioHtmlRestart: function (path, volume) {
        var audio = $("#btcVnAudio")[0]; // Declare a local variable
        audio.currentTime = 0;
        audio.volume = volume;
        audio.src = path;
        audio.play().catch(function () {
            console.log('Exception play audio: issue');
        });
        return audio;
    },
    /**
     * Stop audio html
     */
    stopAudioHtml: function () {
        var audio = $("#btcVnAudio")[0]; // Declare a local variable
        audio.src = '';
        audio.currentTime = 0;
        return audio;
    },
};

$(document).ready(function () {
    $("#nav-bar").load("/share/nav.html", function (responseTxt, statusTxt, xhr) {
        if (statusTxt == "success") {
            feature.initMouseEnterSound(".button", "/share/audio/bombom.mp3", volumes.hover);
        }
    });
    $("#nav-bar-collapse").load("/share/nav.html", function (responseTxt, statusTxt, xhr) {
        if (statusTxt == "success") {
            feature.initMouseEnterSound(".button", "/share/audio/bombom.mp3", volumes.hover);
        }
    });

    $("a").click(function() {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash
            })
        }
    })

})
