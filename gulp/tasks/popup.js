

    const openSale = document.getElementById('open-sale');
    const catalogSale = document.getElementById('sale-catalog');

    openSale.addEventListener('mouseover', () => {
        catalogSale.classList.add('active');
    });

    openSale.addEventListener('mouseover', () => {
        catalogSale.classList.remove('active');
    });

