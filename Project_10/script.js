const searchInput = document.querySelector("#search-input");



searchInput.addEventListener("keydown", function(event){
    if(event.code === "Enter"){
        search();
    }''
})

function search(){
    const input = searchInput.value;
    window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C1ONGR_enIN1049IN1049&oq=" + input + "&gs_lcrp=EgZjaHJvbWUqDQgAEAAY4wIYyQMYgAQyDQgAEAAY4wIYyQMYgAQyCggBEC4YyQMYgAQyBwgCEC4YgAQyBwgDEC4YgAQyDQgEEAAYkgMYgAQYigUyDQgFEAAYkgMYgAQYigUyCggGEC4Y1AIYgAQyBggHEEUYPNIBBzk2OWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8"
}