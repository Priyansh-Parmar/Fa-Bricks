document.addEventListener("click", function (e) { 
    if (e.target && e.target.hasAttribute("data-url")) {
        const url = e.target.getAttribute("data-url");
        window.location.href = url;
    }
});

let prods = [
    { name: 'Window Panes', url: 'windowPane.html' },
    { name: 'Window Grills', url: 'windowGrill.html' },
    { name: 'Balcony Railings', url: 'balconyRailing.html' },
    { name: 'Stair Railings', url: 'stairRailing.html' },
    { name: 'Privacy Windows', url: 'privacyWindows.html' },
    { name: 'Hammers', url: 'hammer.html' },
    { name: 'Drills', url: 'drill.html' },
    { name: 'Wrenches', url: 'wrench.html' },
    { name: 'Nails', url: 'nail.html' },
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value.trim();
    if (input.length) {
        result = prods.filter((item) => {
            return item.name.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result);
    if (!result.length) {
        resultsBox.innerHTML = '';
    }
};

function display(result) {
    const content = result.map((item) => {
        return `<li onclick="selectInput('${item.name}', '${item.url}')">${item.name}</li>`;
    });
    resultsBox.innerHTML = `<ul>${content.join('')}</ul>`;
}

function selectInput(name, url) {
    inputBox.value = name;
    resultsBox.innerHTML = '';
    window.location.href = url;
}
