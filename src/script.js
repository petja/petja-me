let star_id = -1;
let star_count = 12;
let star_round = 1000;

/*spark_id = -1;
spark_count = 500;
spark_round = 10000;*/

let logo_el = document.getElementById('logo');
let stars_el = document.getElementById('stars');
let sparks_el = document.getElementById('sparks');

document.addEventListener("DOMContentLoaded", function() {
    //init_figure();
    //go_to_page(0);

    /*setTimeout(function(){
        logo_el = document.getElementById('logo');
        logo_el.style.animation = "logo_bounce 0.54s infinite alternate";
    }, 3000);*/

    /*
    for(i=0; i<spark_count; i++){
        var spark = document.createElement("div");
        spark.className = "spark";

        sparks_el.appendChild(spark);
    }
    setInterval(function(){
        spark_id = (spark_id + 1) % spark_count;
        var spark = sparks_el.childNodes[spark_id];

        var percent = spark_id / spark_count;
        var x = window.innerWidth * percent;

        var spark_pos_a = {
            x : x,
            y : Math.random() * 8 - 12
        };
        var spark_pos_b = {
            x : x + (Math.random() * 128 + 128),
            y : window.innerHeight / 5
        };
        var spark_pos_c = {
            x : (spark_pos_a.x + spark_pos_b.x) / 2,
            y : (spark_pos_a.y + spark_pos_b.y) / 2,
        };

        spark.animate([
            {
                left        : spark_pos_a.x + 'px',
                top         : spark_pos_a.y + 'px',
                transform   : 'scale(0.5)'
            },
            {
                left        : spark_pos_c.x + 'px',
                top         : spark_pos_c.y + 'px',
                transform   : 'scale(1)'
            },
            {
                left        : spark_pos_b.x + 'px',
                top         : spark_pos_b.y + 'px',
                transform   : 'scale(0)'
            }
        ], spark_round / 4);
    }, spark_round * 1.5 / spark_count);*/

    /*setInterval(function(){
        setTimeout(function(){
                logo_el = document.getElementById('logo');
                logo_el.animate([
                        {
                                transform : 'scaleX(1)'
                        },
                        {
                                transform : 'scaleX(2) scaleY(0.5)'
                        },
                        {
                                transform : 'scaleX(1)'
                        }
                ], 250);
        }, 2500 * Math.random());
    }, 7500);*/

    for(let i=0; i<star_count; i++){
        var star = document.createElement("div");
        star.className = "star";

        stars.appendChild(star);
    }

    setInterval(function(){
        var stars_el = document.getElementById('stars');
        var logo_el = document.getElementById('logo');

        star_id = (star_id + 1) % star_count;
        var star = stars_el.childNodes[star_id];
        var star_pos = {
            x : logo_el.offsetWidth * Math.random() + logo_el.offsetLeft,
            y : logo_el.offsetHeight * Math.random() + logo_el.offsetTop,
        };

        star.className = "star";
        star.style.left = star_pos.x + "px";
        star.style.top = star_pos.y + "px";
        star.className = "star animated";
    }, star_round / star_count);

    document.querySelector("#start-btn").addEventListener("click", function(e) {

        window.open('https://t.me/petjato');
        return;

        var contact_menu = document.querySelector("#contact-card");
        var backdrop = document.querySelector("#backdrop");
        var scanlines = document.querySelector("#scanlines");
        //var fab = document.querySelector("#fab");
        //var close_icon = document.querySelector("#fab-close-icon");
        //var message_icon = document.querySelector("#fab-message-icon");
        var bg_music = document.querySelector("#bg-music");

        if(contact_menu.className == "opened") {
            //close_icon.style.display = "none";
            //message_icon.style.display = "block";

            contact_menu.className = "closed";
            //fab.className = "closed";

            setTimeout(function(){
                contact_menu.style.display = "none";
                scanlines.style.display = "block";
                backdrop.className = "closed";
                bg_music.volume = 1;
            }, 400);
        } else {
            //close_icon.style.display = "block";
            //message_icon.style.display = "none";

            contact_menu.style.display = "block";
            contact_menu.className = "opened";
            backdrop.className = "opened";
            //fab.className = "opened";
            scanlines.style.display = "none";

            bg_music.volume = 0.2;
        }
    });
});

let page = 0;

/*setTimeout(function(){
    setInterval(function(){
        page++;
        for(var i = 0; i < 4; i++) slogan_flash(i);
    }, 2500);
}, 1500);*/

function slogan_flash(i) {
    slogan_element = document.querySelector('#slogan');
    setTimeout(function(){
        slogan_element.style.visibility = 'hidden';
        setTimeout(function(){
            slogan_element.style.visibility = 'visible';
        }, 75);
    }, i * 150);
}

/*setInterval(function(){
    go_to_page(page);
}, 50);*/

var slogans = [
    "Full Stack Software Developer",
    "BBA Student @ HAMK UAS",
    "Currenty living in Hämeenlinna, Finland",
    "Born " + age().toFixed(1) + " years ago",
    "Railroad fanatic",
];

function go_to_page(n){
    var slogan = document.querySelector('#slogan');
    slogan.innerText = slogans[n % slogans.length];
}

function age(){
    return (Date.now() - 854011020000) / 86400000 / 365.2425;
}

function init_figure() {
    c = document.getElementById("figurehead");
    ctx = c.getContext("2d");

    document.addEventListener("mousemove", function(e) {
        draw_figure(e.pageX, e.pageY);
    });

    figure_img = new Image;
    figure_img.src = 'img/pixelart.png';

    figure_img.onload = function(){
            draw_figure(0, 0);
    };
}

function draw_figure(mouseX, mouseY){
    // Clear canvas
    ctx.clearRect(0, 0, c.width, c.height);

    // Calculate rotation
    var canvas_position = c.getBoundingClientRect();
    var angle = get_angle_between_coordinates(mouseX, canvas_position.left + c.width / 2, mouseY, canvas_position.top + c.height / 2);

    // Draw!
    ctx.save();
    ctx.translate(c.width / 2, c.height / 2);
    if((angle + Math.PI) > 4.7124 || (angle + Math.PI) < 1.5708){
        ctx.scale(1, -1);
        ctx.rotate(-angle);
    }else{
        ctx.rotate(angle);
    }
    ctx.drawImage(figure_img, -48, -64, 96, 128);
    ctx.restore();
}

function get_angle_between_coordinates(x1, x2, y1, y2) {
    return Math.atan2(y2 - y1, x2 - x1);
}
