// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Add bounce effect on social link click
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function() {
    this.classList.add('animate-bounce');
    setTimeout(() => {
        this.classList.remove('animate-bounce');
    }, 500);
    });
});

function convertUnits() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(inputValue)) {
    resultDiv.innerHTML = 'Please enter a valid number';
    return;
    }

    // Base conversions assume 16px = 1rem, 100vw = window.innerWidth, 100vh = window.innerHeight
    const baseFontSize = 16; // Default font size for rem/em
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const chWidth = baseFontSize * 0.5; // Approximate ch as half of font-size
    const exHeight = baseFontSize * 0.5; // Approximate ex as half of font-size
    const dpi = 96; // Standard DPI for web (1in = 96px)

    // Conversion factors to pixels
    const toPxFactors = {
    px: 1,
    rem: baseFontSize,
    em: baseFontSize,
    vw: viewportWidth / 100,
    vh: viewportHeight / 100,
    vmin: Math.min(viewportWidth, viewportHeight) / 100,
    vmax: Math.max(viewportWidth, viewportHeight) / 100,
    '%': 1, // Assuming % is relative to parent, treated as px for simplicity
    pt: dpi / 72, // 1pt = 1/72 inch
    pc: dpi / 6,  // 1pc = 12pt
    cm: dpi / 2.54, // 1cm = 1/2.54 inch
    mm: dpi / 25.4, // 1mm = 1/10 of cm
    in: dpi, // 1in = 96px
    ch: chWidth,
    ex: exHeight
    };

    // Convert input to pixels first
    let valueInPx = inputValue * toPxFactors[inputUnit];

    // Convert from pixels to output unit
    let result = valueInPx / toPxFactors[outputUnit];

    resultDiv.innerHTML = `${inputValue} ${inputUnit} = ${result.toFixed(4)} ${outputUnit}`;
}