document.querySelectorAll('tr').forEach(row => {
    const cells = row.querySelectorAll('td');
    if (cells[0] && cells[1]) {
        const firstCellText = cells[0].textContent.trim().toUpperCase();
        const secondCellText = cells[1].textContent.trim();
        
        if ((firstCellText.includes('DEPARTAMENTO') || firstCellText.includes('CAMPUS')) && secondCellText === '') {
            row.classList.add('hidden');
        }
    }
});