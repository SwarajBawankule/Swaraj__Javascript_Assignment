function visualizeWalls() {
    const numWalls = parseInt(document.getElementById('numWalls').value);
    const wallHeightsInput = document.getElementById('wallHeights').value;
    const wallHeights = wallHeightsInput.split('#').map(Number);

    if (wallHeights.length !== numWalls) {
        alert('The number of heights does not match the number of walls.');
        return;
    }

    drawWalls(wallHeights); 
    calculateVisibleWalls(wallHeights); 
}

function drawWalls(wallHeights) {
    const canvas = document.getElementById('wallCanvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    const maxHeight = Math.max(...wallHeights);
    const widthPerWall = canvas.width / wallHeights.length;

    wallHeights.forEach((height, index) => {
        const scaledHeight = (height / maxHeight) * canvas.height;

        
        ctx.fillStyle = 'blue';
        ctx.fillRect(index * widthPerWall, canvas.height - scaledHeight, widthPerWall - 10, scaledHeight);
        
      
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.font = 'bold 16px Arial';  

      
        const textYPosition = canvas.height - 5; 
        ctx.fillText(height, index * widthPerWall + (widthPerWall / 2) - 5, textYPosition);
    });
}

function calculateVisibleWalls(wallHeights) {
    const leftVisible = visibleFromLeft(wallHeights);
    const rightVisible = visibleFromRight(wallHeights);

    document.getElementById('leftVisible').textContent = `Walls visible from the left: ${leftVisible}`;
    document.getElementById('rightVisible').textContent = `Walls visible from the right: ${rightVisible}`;
}

function visibleFromLeft(walls) {
    let maxSeen = 0;
    let visibleCount = 0;

    for (let height of walls) {
        if (height > maxSeen) {
            visibleCount++;
            maxSeen = height;
        }
    }

    return visibleCount;
}

function visibleFromRight(walls) {
    let maxSeen = 0;
    let visibleCount = 0;

    for (let i = walls.length - 1; i >= 0; i--) {
        if (walls[i] > maxSeen) {
            visibleCount++;
            maxSeen = walls[i];
        }
    }

    return visibleCount;
}
