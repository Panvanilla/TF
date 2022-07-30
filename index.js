class Lection {

    render() {
        let htmlCatalog = '';
        LECTIONS.forEach(({ newcard, type, about, name, lector, hours, level, link}) => {
            htmlCatalog += `
                <div class="card-lection ${about}">
                <img class="new-icon" src="${newcard}">
                        <div class="title-card">
                           
                            <span>${type}</span>
                        </div>
                    <div class="title-card1"><b style="word-break:break-all;">${name}</b></div>
                    <p>${lector}</p>
                    <div class="small-flex">
                        <div class="hours">${hours}</div>
                        <div class="level">${level}</div>
                    </div>
                    <a href="${link}">Learn more</a>
                </div>
            `
        });

        const html = `
            <div class="lections__container">
                ${htmlCatalog}
            </div>
        `;

        document.getElementById('div').innerHTML = html
    }
}

// const lect = new Lection();
// lect.render();

function app() {
    const buttons = document.querySelectorAll('.button')
    const cards = document.querySelectorAll('.card-lection')
    const filtersleft = document.querySelectorAll('.subfiltercontainer')
 
    function filter(filteredType, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(filteredType)
            const isShowAll = filteredType.toLowerCase() === 'all'
            if (isItemFiltered && !isShowAll) {
                item.classList.add('anime');
                item.classList.add('hide')
            } else {
                item.classList.remove('hide');
                item.classList.remove('anime');
            }
        })
    }

    cards.forEach((card) => {
        card.ontransitionend = function () {
            if (card.classList.contains('anime')) {
                card.classList.add('hide')
            }
        }
    })

   buttons.forEach((button) => {
        const currentType = button.dataset.filter
        button.addEventListener('click', () => {
             filter(currentType, filtersleft);
             filter(currentType, cards);
             
            
            }
        )}
        
    )

    
    
 for (button in buttons) {
    buttons[button].onclick = function() {
         buttons.forEach(function(button) {
            button.classList.remove('clicked');
         })
         this.classList.add('clicked')
     }
 }

//  filtersleft.forEach((filterleft) => {
//         filterleft.ontransitionend = function () {
//             if (filterleft.classList.contains('anime')) {
//                 filterleft.classList.add("hide")
//             }
//         }
//     })
   
}

app()

document.querySelector('#search').oninput = function() {
    let val = this.value.toLowerCase().trim();
    let items = document.querySelectorAll('.card-lection')
    if (val != '') {
        items.forEach(function(elem) {
            if (elem.innerText.toLowerCase().indexOf(val) < 1) {
                elem.classList.add('hide');
            } else {
                elem.classList.remove('hide');
            }
        })
    } else {
        items.forEach(function(elem) {
            elem.classList.remove('hide');
        })
    }
}

// $("button").click(function() {
    // $('html,body').animate({
    //     scrollTop: $(".how-container").offset().top},
    //     'slow');
// });


// $(".subfiltercontainer").click(function() {
//     $('.filterbar-container').animate({
//         scrollTop: $('input[type="checkbox"]').offset().top},
//         'slow');
// });


