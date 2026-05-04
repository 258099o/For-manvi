document.getElementById('surpriseBtn').addEventListener('click', function() {
    const message = document.getElementById('hiddenMessage');
    if (message.classList.contains('hidden')) {
        message.classList.remove('hidden');
        this.textContent = "I really do!";
    } else {
        message.classList.add('hidden');
        this.textContent = "Click for a Surprise";
    }
});

