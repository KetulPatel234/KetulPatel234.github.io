function darkMode(event) {
    event.preventDefault();
    var body = document.body;
    var dark1 = document.getElementById("dark_link_1");
    var dark2 = document.getElementById("dark_link_2");
    if (body.classList.contains('dark-mode')) {
        dark1.innerHTML = 'Dark Mode'
        dark2.innerHTML = 'Dark Mode'
        body.classList.remove("dark-mode")
    }
    
    else {
        dark1.innerHTML = 'Light Mode'
        dark2.innerHTML = 'Light Mode'
        body.classList.add("dark-mode")
    }
}