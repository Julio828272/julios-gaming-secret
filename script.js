const games = {
    guns: [
        { name: 'Shooter Game', icon: '🔫', file: 'games/shooter.html' },
        { name: 'Target Practice', icon: '🎯', file: 'games/target.html' },
        { name: 'Zombie Blaster', icon: '🧟', file: 'games/zombies.html' },
    ],
    casual: [
        { name: 'Snake', icon: '🐍', file: 'games/snake.html' },
        { name: 'Flappy Bird', icon: '🐦', file: 'games/flappy.html' },
        { name: 'Clicker Game', icon: '💰', file: 'games/clicker.html' },
        { name: '2048', icon: '🔢', file: 'games/2048.html' },
        { name: 'Memory Match', icon: '🧠', file: 'games/memory.html' },
        { name: 'Dino Runner', icon: '🦕', file: 'games/dino.html' },
    ],
    horror: [
        { name: 'Granny Escape', icon: '👵', file: 'games/granny.html' },
        { name: 'Hello Neighbor', icon: '🏚️', file: 'games/neighbor.html' },
        { name: 'Scary Maze', icon: '🕷️', file: 'games/maze.html' },
        { name: 'Ghost Hunter', icon: '👻', file: 'games/ghost.html' },
    ],
    multiplayer: [
        { name: 'Pong', icon: '🏓', file: 'games/pong.html' },
        { name: 'Tic Tac Toe', icon: '⭕', file: 'games/tictactoe.html' },
        { name: 'Battle Game', icon: '⚔️', file: 'games/battle.html' },
    ]
};

function showCategory(category) {
    const gamesList = document.getElementById('games-list');
    gamesList.innerHTML = '';
    
    games[category].forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <div class="game-icon">${game.icon}</div>
            <div class="game-name">${game.name}</div>
        `;
        card.onclick = () => playGame(game);
        gamesList.appendChild(card);
    });
}

function playGame(game) {
    document.getElementById('games-list').style.display = 'none';
    document.getElementById('game-view').style.display = 'block';
    
    const gameContent = document.getElementById('game-content');
    gameContent.innerHTML = `<iframe src="${game.file}" style="width: 100%; height: 600px; border: none; border-radius: 5px;"></iframe>`;
}

function backToMenu() {
    document.getElementById('games-list').style.display = 'grid';
    document.getElementById('game-view').style.display = 'none';
    document.getElementById('game-content').innerHTML = '';
}

function searchGoogle() {
    const query = document.getElementById('searchInput').value;
    if (query.trim()) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
}

function openNowGG() {
    window.open('https://nowgg.fun', '_blank');
}

// Allow Enter key to search
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchGoogle();
        }
    });
    
    // Show casual games by default
    showCategory('casual');
});
