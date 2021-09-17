window.addEventListener('DOMContentLoaded', () => {
    class MenuCard {
        constructor(src, alt, title, desc, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.desc = desc;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 10.500;
            this.changeToUSD();

        }
        changeToUSD() {
            this.price = this.price * this.transfer
        }
        render() {
            const element = document.createElement('div')

            if (this.classes.length === 0){
                this.classes = 'menu_item'
                element.classList.add(this.classes)
            }else{
                this.classes.forEach(className => element.classList.add(className))
            }
            element.innerHTML = `
                <div class="menu__item">
                        <img src="${this.src}" alt="${this.alt}">
                        <h3 class="menu__item-subtitle">${this.title}</h3>
                        <div class="menu__item-descr">${this.desc}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> $</div>
                        </div>
                </div>
            `
            this.parent.append(element)
        }
    }
    
    new MenuCard(
        src='img/tabs/audi.jpg',
        alt = 'audi',
        title = 'Audi',
        desc = 'Немецкая автомобилестроительная компания в составе концерна Volkswagen Group, специализирующаяся на выпуске автомобилей под маркой Audi. Штаб-квартира расположена в городе Ингольштадт (Германия).',
        price = 100000000,
        parentSelector = '.menu .container'
    ).render()
    
    new MenuCard(
        src ='img/tabs/bmw.jpg',
        alt = 'bmw',
        title = 'BMW',
        desc = 'Немецкая автомобилестроительная компания в составе концерна Volkswagen Group, специализирующаяся на выпуске автомобилей под маркой Audi. Штаб-квартира расположена в городе Ингольштадт (Германия).',
        price = 200000000,
        parentSelector = '.menu .container'
    ).render()
    
    new MenuCard(
        src ='img/tabs/merc.jpg',
        alt = 'mercedes',
        title = 'Mercedes',
        desc = 'Немецкая автомобилестроительная компания в составе концерна Volkswagen Group, специализирующаяся на выпуске автомобилей под маркой Audi. Штаб-квартира расположена в городе Ингольштадт (Германия).',
        price = 300000000,
        parentSelector = '.menu .container'
    ).render()

})