function toggleBox(selectedBox) {
    const allBoxes = document.querySelectorAll('.box');
    
    // Collapse all boxes except the clicked one
    allBoxes.forEach(box => {
        if (box !== selectedBox) box.classList.remove('expanded');
    });

    // Toggle the expansion of the clicked box
    selectedBox.classList.toggle('expanded');
}
