


function contador() {
    const n1 = document.getElementById('ini');
    const n2 = document.getElementById('fin')
    const n3 = document.getElementById('fin1')
    const res = document.getElementById('res')

    res.innerHTML = 'Contando:   '

    let i = Number(n1.value)
    let x = Number(n2.value)
    let f = Number(n3.value)

    if (i < x) {
        for (let c = i; c <= x; c += f) {
            res.innerText += ` ${c}\u{1f449}`
        }
    }
    if (i > x) {
        for (let c = i; c >= x; c -= f) {
            res.innerHTML += ` ${c}\u{1f449}`
        }

    }
    res.innerHTML += ` \u{1F3c1}`
}
