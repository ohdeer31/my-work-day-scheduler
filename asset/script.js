var timeDisplayEl = $('#currentDay');

function displayTime() {
    var currentDay = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(currentDay);
}

setInterval(displayTime, 1000);


var hour = moment().format("H");
// var hour = 3;
if (hour == 9) {
    document.querySelector(".hour-9").removeAttribute('id');
    document.querySelector(".hour-9").id = "present";
    document.querySelector(".hour-10").removeAttribute('id');
    document.querySelector(".hour-10").id = "future";
    document.querySelector(".hour-11").removeAttribute('id');
    document.querySelector(".hour-11").id = "future";
    document.querySelector(".hour-12").removeAttribute('id');
    document.querySelector(".hour-12").id = "future";
    document.querySelector(".hour-13").removeAttribute('id');
    document.querySelector(".hour-13").id = "future";
    document.querySelector(".hour-14").removeAttribute('id');
    document.querySelector(".hour-14").id = "future";
    document.querySelector(".hour-15").removeAttribute('id');
    document.querySelector(".hour-15").id = "future";
    document.querySelector(".hour-16").removeAttribute('id');
    document.querySelector(".hour-16").id = "future";
    document.querySelector(".hour-17").removeAttribute('id');
    document.querySelector(".hour-17").id = "future";
} else if (hour == 10) {
    document.querySelector(".hour-9").removeAttribute('id');
    document.querySelector(".hour-9").id = "past";
    document.querySelector(".hour-10").removeAttribute('id');
    document.querySelector(".hour-10").id = "present";
    document.querySelector(".hour-11").removeAttribute('id');
    document.querySelector(".hour-11").id = "future";
    document.querySelector(".hour-12").removeAttribute('id');
    document.querySelector(".hour-12").id = "future";
    document.querySelector(".hour-13").removeAttribute('id');
    document.querySelector(".hour-13").id = "future";
    document.querySelector(".hour-14").removeAttribute('id');
    document.querySelector(".hour-14").id = "future";
    document.querySelector(".hour-15").removeAttribute('id');
    document.querySelector(".hour-15").id = "future";
    document.querySelector(".hour-16").removeAttribute('id');
    document.querySelector(".hour-16").id = "future";
    document.querySelector(".hour-17").removeAttribute('id');
    document.querySelector(".hour-17").id = "future";
} else if (hour == 11) {
    document.querySelector(".hour-9").removeAttribute('id');
    document.querySelector(".hour-9").id = "past";
    document.querySelector(".hour-10").removeAttribute('id');
    document.querySelector(".hour-10").id = "past";
    document.querySelector(".hour-11").removeAttribute('id');
    document.querySelector(".hour-11").id = "present";
    document.querySelector(".hour-12").removeAttribute('id');
    document.querySelector(".hour-12").id = "future";
    document.querySelector(".hour-13").removeAttribute('id');
    document.querySelector(".hour-13").id = "future";
    document.querySelector(".hour-14").removeAttribute('id');
    document.querySelector(".hour-14").id = "future";
    document.querySelector(".hour-15").removeAttribute('id');
    document.querySelector(".hour-15").id = "future";
    document.querySelector(".hour-16").removeAttribute('id');
    document.querySelector(".hour-16").id = "future";
    document.querySelector(".hour-17").removeAttribute('id');
    document.querySelector(".hour-17").id = "future";
} else if (hour == 12) {
    document.querySelector(".hour-9").removeAttribute('id');
    document.querySelector(".hour-9").id = "past";
    document.querySelector(".hour-10").removeAttribute('id');
    document.querySelector(".hour-10").id = "past";
    document.querySelector(".hour-11").removeAttribute('id');
    document.querySelector(".hour-11").id = "past";
    document.querySelector(".hour-12").removeAttribute('id');
    document.querySelector(".hour-12").id = "present";
    document.querySelector(".hour-13").removeAttribute('id');
    document.querySelector(".hour-13").id = "future";
    document.querySelector(".hour-14").removeAttribute('id');
    document.querySelector(".hour-14").id = "future";
    document.querySelector(".hour-15").removeAttribute('id');
    document.querySelector(".hour-15").id = "future";
    document.querySelector(".hour-16").removeAttribute('id');
    document.querySelector(".hour-16").id = "future";
    document.querySelector(".hour-17").removeAttribute('id');
    document.querySelector(".hour-17").id = "future";
} else if (hour == 13) {
    document.querySelector(".hour-9").removeAttribute('id');
    document.querySelector(".hour-9").id = "past";
    document.querySelector(".hour-10").removeAttribute('id');
    document.querySelector(".hour-10").id = "past";
    document.querySelector(".hour-11").removeAttribute('id');
    document.querySelector(".hour-11").id = "past";
    document.querySelector(".hour-12").removeAttribute('id');
    document.querySelector(".hour-12").id = "past";
    document.querySelector(".hour-13").removeAttribute('id');
    document.querySelector(".hour-13").id = "present";
    document.querySelector(".hour-14").removeAttribute('id');
    document.querySelector(".hour-14").id = "future";
    document.querySelector(".hour-15").removeAttribute('id');
    document.querySelector(".hour-15").id = "future";
    document.querySelector(".hour-16").removeAttribute('id');
    document.querySelector(".hour-16").id = "future";
    document.querySelector(".hour-17").removeAttribute('id');
    document.querySelector(".hour-17").id = "future";
} else if (hour == 14) {
    document.querySelector(".hour-9").removeAttribute('id');
    document.querySelector(".hour-9").id = "past";
    document.querySelector(".hour-10").removeAttribute('id');
    document.querySelector(".hour-10").id = "past";
    document.querySelector(".hour-11").removeAttribute('id');
    document.querySelector(".hour-11").id = "past";
    document.querySelector(".hour-12").removeAttribute('id');
    document.querySelector(".hour-12").id = "past";
    document.querySelector(".hour-13").removeAttribute('id');
    document.querySelector(".hour-13").id = "past";
    document.querySelector(".hour-14").removeAttribute('id');
    document.querySelector(".hour-14").id = "present";
    document.querySelector(".hour-15").removeAttribute('id');
    document.querySelector(".hour-15").id = "future";
    document.querySelector(".hour-16").removeAttribute('id');
    document.querySelector(".hour-16").id = "future";
    document.querySelector(".hour-17").removeAttribute('id');
    document.querySelector(".hour-17").id = "future";
} else if (hour == 15) {
    document.querySelector(".hour-9").removeAttribute('id');
    document.querySelector(".hour-9").id = "past";
    document.querySelector(".hour-10").removeAttribute('id');
    document.querySelector(".hour-10").id = "past";
    document.querySelector(".hour-11").removeAttribute('id');
    document.querySelector(".hour-11").id = "past";
    document.querySelector(".hour-12").removeAttribute('id');
    document.querySelector(".hour-12").id = "past";
    document.querySelector(".hour-13").removeAttribute('id');
    document.querySelector(".hour-13").id = "past";
    document.querySelector(".hour-14").removeAttribute('id');
    document.querySelector(".hour-14").id = "past";
    document.querySelector(".hour-15").removeAttribute('id');
    document.querySelector(".hour-15").id = "present";
    document.querySelector(".hour-16").removeAttribute('id');
    document.querySelector(".hour-16").id = "future";
    document.querySelector(".hour-17").removeAttribute('id');
    document.querySelector(".hour-17").id = "future";
} else if (hour == 16) {
    document.querySelector(".hour-9").removeAttribute('id');
    document.querySelector(".hour-9").id = "past";
    document.querySelector(".hour-10").removeAttribute('id');
    document.querySelector(".hour-10").id = "past";
    document.querySelector(".hour-11").removeAttribute('id');
    document.querySelector(".hour-11").id = "past";
    document.querySelector(".hour-12").removeAttribute('id');
    document.querySelector(".hour-12").id = "past";
    document.querySelector(".hour-13").removeAttribute('id');
    document.querySelector(".hour-13").id = "past";
    document.querySelector(".hour-14").removeAttribute('id');
    document.querySelector(".hour-14").id = "past";
    document.querySelector(".hour-15").removeAttribute('id');
    document.querySelector(".hour-15").id = "past";
    document.querySelector(".hour-16").removeAttribute('id');
    document.querySelector(".hour-16").id = "present";
    document.querySelector(".hour-17").removeAttribute('id');
    document.querySelector(".hour-17").id = "future";
} else if (hour == 17) {
    document.querySelector(".hour-9").removeAttribute('id');
    document.querySelector(".hour-9").id = "past";
    document.querySelector(".hour-10").removeAttribute('id');
    document.querySelector(".hour-10").id = "past";
    document.querySelector(".hour-11").removeAttribute('id');
    document.querySelector(".hour-11").id = "past";
    document.querySelector(".hour-12").removeAttribute('id');
    document.querySelector(".hour-12").id = "past";
    document.querySelector(".hour-13").removeAttribute('id');
    document.querySelector(".hour-13").id = "past";
    document.querySelector(".hour-14").removeAttribute('id');
    document.querySelector(".hour-14").id = "past";
    document.querySelector(".hour-15").removeAttribute('id');
    document.querySelector(".hour-15").id = "past";
    document.querySelector(".hour-16").removeAttribute('id');
    document.querySelector(".hour-16").id = "past";
    document.querySelector(".hour-17").removeAttribute('id');
    document.querySelector(".hour-17").id = "present";
} else if (hour > 17){
    document.querySelector(".hour-9").removeAttribute('id');
    document.querySelector(".hour-9").id = "past";
    document.querySelector(".hour-10").removeAttribute('id');
    document.querySelector(".hour-10").id = "past";
    document.querySelector(".hour-11").removeAttribute('id');
    document.querySelector(".hour-11").id = "past";
    document.querySelector(".hour-12").removeAttribute('id');
    document.querySelector(".hour-12").id = "past";
    document.querySelector(".hour-13").removeAttribute('id');
    document.querySelector(".hour-13").id = "past";
    document.querySelector(".hour-14").removeAttribute('id');
    document.querySelector(".hour-14").id = "past";
    document.querySelector(".hour-15").removeAttribute('id');
    document.querySelector(".hour-15").id = "past";
    document.querySelector(".hour-16").removeAttribute('id');
    document.querySelector(".hour-16").id = "past";
    document.querySelector(".hour-17").removeAttribute('id');
    document.querySelector(".hour-17").id = "past";
} else {
    document.querySelector(".hour-9").removeAttribute('id');
    document.querySelector(".hour-9").id = "future";
    document.querySelector(".hour-10").removeAttribute('id');
    document.querySelector(".hour-10").id = "future";
    document.querySelector(".hour-11").removeAttribute('id');
    document.querySelector(".hour-11").id = "future";
    document.querySelector(".hour-12").removeAttribute('id');
    document.querySelector(".hour-12").id = "future";
    document.querySelector(".hour-13").removeAttribute('id');
    document.querySelector(".hour-13").id = "future";
    document.querySelector(".hour-14").removeAttribute('id');
    document.querySelector(".hour-14").id = "future";
    document.querySelector(".hour-15").removeAttribute('id');
    document.querySelector(".hour-15").id = "future";
    document.querySelector(".hour-16").removeAttribute('id');
    document.querySelector(".hour-16").id = "future";
    document.querySelector(".hour-17").removeAttribute('id');
    document.querySelector(".hour-17").id = "future";
}

var inputEl09 = document.querySelector(".description09");
var buttonEl09 = document.querySelector(".saveBtn09");

renderLastInfo09();

function renderLastInfo09() {
    var description = localStorage.getItem("todo09");
    if (description !== null) {
        inputEl09.textContent = description;
    }
}

buttonEl09.addEventListener("click", function(event) {
    event.preventDefault();
    var description = document.querySelector(".description09").value;
    localStorage.setItem("todo09", description);
    renderLastInfo09();
})

//

var inputEl10 = document.querySelector(".description10");
var buttonEl10 = document.querySelector(".saveBtn10");

renderLastInfo10();

function renderLastInfo10() {
    var description = localStorage.getItem("todo10");
    if (description !== null) {
        inputEl10.textContent = description;
    }
}

buttonEl10.addEventListener("click", function(event) {
    event.preventDefault();
    var description = document.querySelector(".description10").value;
    localStorage.setItem("todo10", description);
    renderLastInfo10();
})

//

var inputEl11 = document.querySelector(".description11");
var buttonEl11 = document.querySelector(".saveBtn11");

renderLastInfo11();

function renderLastInfo11() {
    var description = localStorage.getItem("todo11");
    if (description !== null) {
        inputEl11.textContent = description;
    }
}

buttonEl11.addEventListener("click", function(event) {
    event.preventDefault();
    var description = document.querySelector(".description11").value;
    localStorage.setItem("todo11", description);
    renderLastInfo11();
})

//

var inputEl12 = document.querySelector(".description12");
var buttonEl12 = document.querySelector(".saveBtn12");

renderLastInfo12();

function renderLastInfo12() {
    var description = localStorage.getItem("todo12");
    if (description !== null) {
        inputEl12.textContent = description;
    }
}

buttonEl12.addEventListener("click", function(event) {
    event.preventDefault();
    var description = document.querySelector(".description12").value;
    localStorage.setItem("todo12", description);
    renderLastInfo12();
})

//

var inputEl13 = document.querySelector(".description13");
var buttonEl13 = document.querySelector(".saveBtn13");

renderLastInfo13();

function renderLastInfo13() {
    var description = localStorage.getItem("todo13");
    if (description !== null) {
        inputEl13.textContent = description;
    }
}

buttonEl13.addEventListener("click", function(event) {
    event.preventDefault();
    var description = document.querySelector(".description13").value;
    localStorage.setItem("todo13", description);
    renderLastInfo13();
})

//

var inputEl14 = document.querySelector(".description14");
var buttonEl14 = document.querySelector(".saveBtn14");

renderLastInfo14();

function renderLastInfo14() {
    var description = localStorage.getItem("todo14");
    if (description !== null) {
        inputEl14.textContent = description;
    }
}

buttonEl14.addEventListener("click", function(event) {
    event.preventDefault();
    var description = document.querySelector(".description14").value;
    localStorage.setItem("todo14", description);
    renderLastInfo14();
})

//

var inputEl15 = document.querySelector(".description15");
var buttonEl15 = document.querySelector(".saveBtn15");

renderLastInfo15();

function renderLastInfo15() {
    var description = localStorage.getItem("todo15");
    if (description !== null) {
        inputEl15.textContent = description;
    }
}

buttonEl15.addEventListener("click", function(event) {
    event.preventDefault();
    var description = document.querySelector(".description15").value;
    localStorage.setItem("todo15", description);
    renderLastInfo15();
})

//

var inputEl16 = document.querySelector(".description16");
var buttonEl16 = document.querySelector(".saveBtn16");

renderLastInfo16();

function renderLastInfo16() {
    var description = localStorage.getItem("todo16");
    if (description !== null) {
        inputEl16.textContent = description;
    }
}

buttonEl16.addEventListener("click", function(event) {
    event.preventDefault();
    var description = document.querySelector(".description16").value;
    localStorage.setItem("todo16", description);
    renderLastInfo16();
})

//

var inputEl17 = document.querySelector(".description17");
var buttonEl17 = document.querySelector(".saveBtn17");

renderLastInfo17();

function renderLastInfo17() {
    var description = localStorage.getItem("todo17");
    if (description !== null) {
        inputEl17.textContent = description;
    }
}

buttonEl17.addEventListener("click", function(event) {
    event.preventDefault();
    var description = document.querySelector(".description17").value;
    localStorage.setItem("todo17", description);
    renderLastInfo17();
})

//

