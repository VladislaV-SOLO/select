const options = [
    {
        label: 'Витебск', value: 2
    },
    {
        label: 'Могилёв', value: 6
    },
    {
        label: 'Гомель', value: 3
    },
    {
        label: 'Брест', value: 1
    },
    {
        label: 'Гродно', value: 4
    },
    {
        label: 'Минск', value: 7
    }
]

class Select {
    constructor(selector, options, width) {
        this.$select = document.querySelector(selector);
        this.options = options;
        this.$select.style.setProperty('--selected-width', width);
        this.$label = document.querySelector('.select__label');
        this.$dropDown = document.querySelector('.select__drop-down')
        
        this.itemsForDropDown = options.map(({label, value}) => {
            return `<li data-id=${value}>${label}</li>`
        }).join('')

        this.$dropDown.insertAdjacentHTML("afterbegin", this.itemsForDropDown) //вставляет текст insertAdjacentHTML
    
    this.$select.addEventListener('click', (e) => {
        console.log(e.target);
        console.log(e.target.tagName);
        console.log(e.target.classList);

        if(e.target.classList.contains('select__label')) {
            console.log('ты кликнул на LABEL');
        } else {
            if(e.target.tagName.toLowerCase() === 'li') {
                console.log('ты кликнул на LI');
                this.selectItem(+e.target.dataset.id)
            }
        }
    })
    
    
    
    }

    selectItem(id) {
        const selectedElement = this.options.find(item => item.value === id)
        this.$label.innerHTML = selectedElement.label
    }

}

const customSelect = new Select('.select', options,  '350px')

console.log(customSelect);