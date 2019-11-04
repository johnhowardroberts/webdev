// select all divs and give them a purple background

$("div").css("background", "purple");

// select the divs with class 'highlight' and make them 200px wide

$(".highlight").css("width", "200px");

// select the div with id 'third' and give it an orange border

$("#third").css("border", "1px solid orange");

// select the first div only and change its font color to pink

$("div:first-of-type").css("color", "pink");

//can also use:

$("div:first").css("color", "pink");

// but it is slightly slower as it is a jQuery shortcut
