function openFile(file_name) {
    window.open(file_name)
}


function darkMode(dark_link, event) {
    event.preventDefault();
    var body = document.body;

    if (body.classList.contains('dark-mode')) {
        dark_link.innerHTML = 'Dark Mode'
        body.classList.remove("dark-mode")
    }
    
    else {
        dark_link.innerHTML = 'Light Mode'
        body.classList.add("dark-mode")
    }
}