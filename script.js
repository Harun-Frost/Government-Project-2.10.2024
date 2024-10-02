// Add animation to scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.question');
    for (let i = 0; i < elements.length; i++) {
        const position = elements[i].getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            elements[i].classList.add('animation');
        }
    }
});

// Toggle the "Learn More" section
document.getElementById('learn-more-btn').addEventListener('click', function() {
    const moreInfo = document.getElementById('more-info');
    if (moreInfo.style.display === "block") {
        moreInfo.style.display = "none";
    } else {
        moreInfo.style.display = "block";
    }
});

// Toggle the "Impact" section
document.getElementById('impact-more-btn').addEventListener('click', function() {
    const impactInfo = document.getElementById('impact-info');
    if (impactInfo.style.display === "block") {
        impactInfo.style.display = "none";
    } else {
        impactInfo.style.display = "block";
    }
});
