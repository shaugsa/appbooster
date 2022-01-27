let addbutton = document.getElementById('addBtn')
const tr = Array.from(document.querySelectorAll('tr'))
const date = '<td class="cell table__main-line table__main-date"><p class="date"> 25.06</p></td>';
const cellData = '<td class="cell data"><div class="data__down"><img class="img__arrow-down" src="images/arrow_down.svg" alt=""><p>1</p></div><div class="data__main"><p>62</p></div><div class="data__growth"><p>30</p></div></td>';
const mainInput = document.querySelector('#main-checkbox');
const checkBox = document.querySelectorAll('input');



addbutton.onclick = function() {
    tr.forEach(function el(item, index) {
        let td = document.createElement('td');
         if (index == 0) {
            td.innerHTML = date;
            td.className = 'cell table__main-line table__main-date';
            item.append(td)
         } else {
            td.innerHTML = cellData;
            td.className = 'cell data';
            item.append(td)
         }
    })
}

mainInput.addEventListener('change', () => {
    let state = mainInput.checked;
    checkBox.forEach((el, i) => {
        if (i != 0) {
            el.checked = state
        }
    })
})

