let calculator = localStorage.getItem('calculator') || '';

        function updateCalculator(n) {
            calculator += n;
            document.querySelector('.js-display').innerHTML = calculator;
            localStorage.setItem('calculator', calculator);
        }