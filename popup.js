document.addEventListener('DOMContentLoaded', function() {
    // 1. Lire le stockage
    chrome.storage.local.get(['promptCount'], function(result) {
        const count = result.promptCount || 0;
        const ml = count * 10;
        
        // 2. Mettre à jour le texte
        document.getElementById('mlCount').textContent = ml;
        document.getElementById('promptText').textContent = `${count} prompt${count > 1 ? 's' : ''} envoyé${count > 1 ? 's' : ''}`;

        // 3. Animer le verre d'eau
        // On définit qu'un verre plein (100%) = 50 prompts (500ml)
        const maxPrompts = 50;
        let percentage = (count / maxPrompts) * 100;
        
        // On limite à 100% pour ne pas que ça déborde visuellement
        if (percentage > 100) percentage = 100;

        document.getElementById('waterLevel').style.height = percentage + '%';
    });
});