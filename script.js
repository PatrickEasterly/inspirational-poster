
//declare vaiables
let image = document.getElementById('pic')
let first = document.getElementById('part1')
let second = document.getElementById('part2')

image.onclick = function() {
    if(first.textContent == 'Never') {
        first.textContent = 'Epstein';
        second.textContent = "Didn't kill himself.";
    } else {
        first.textContent = 'Never';
        second.textContent = 'Give Up.'
    }
}