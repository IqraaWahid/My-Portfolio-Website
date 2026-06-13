function zoomToSection(sectionId) {
    document.body.style.transform = "scale(1.05)";
    document.body.style.transition = "transform 0.4s ease";


    setTimeout(function () {
        document.body.style.transform = "scale(1)";


        document.getElementById(sectionId).scrollIntoView({
            behavior: "smooth"
        });
    }, 300);
}