const t = document.querySelector('h2.titulo');

t.addEventListener('mouseenter', function() {
    t.style.color = 'red';
})

t.addEventListener('mouseout', function() {
    t.style.color = 'white';
})