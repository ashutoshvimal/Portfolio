// store current file name and split it on period
var fileName = document.location.href.match(/[^\/]+$/)[0];

$(function () {
    $('.sidebar-container').load('sidebar.html', function () {
        // Update selected nav
        $('a[href="' + fileName + '"] div').addClass('nav-selected');

        $('.mobile-menu').on('click', function () {
            // Toggle only the navigation container
            $('.sidebar-nav-container').toggleClass('active');
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const start = new Date('2023-01-05');
    const now = new Date();
    let experienceYears = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    if (months < 0) {
        experienceYears--;
        months += 12;
    }
    if(months > 6){
        experienceYears += 0.5;
        console.log(months);
    }

    document.getElementById("experience-years").textContent = experienceYears + "+";
});