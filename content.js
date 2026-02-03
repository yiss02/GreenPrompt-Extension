// content.js - L'espion du DOM avec retour visuel

console.log("GreenPrompt : Extension chargée et prête à compter !");

// --- FONCTION VISUELLE (Le Toast) ---
function showFloatingImpact(count) {
    // Supprimer l'ancienne notification si elle existe encore
    const oldNotify = document.getElementById('green-prompt-alert');
    if (oldNotify) oldNotify.remove();

    // Créer la bulle de notification
    const notify = document.createElement('div');
    notify.id = 'green-prompt-alert';
    
    // Calcul de l'eau et du CO2 (2g par prompt pour le CO2)
    const ml = count * 10;
    const co2 = count * 2; 

    notify.innerHTML = `
        <div style="display:flex; align-items:center; gap:12px;">
            <div style="width:25px; height:35px; border:2px solid #4fc3f7; position:relative; overflow:hidden; border-radius:3px; background:#333;">
                <div style="position:absolute; bottom:0; width:100%; background:#4fc3f7; height:${Math.min((count/50)*100, 100)}%; transition: height 0.5s ease;"></div>
            </div>
            <div>
                <strong style="display:block; color:#4fc3f7; font-size:14px;">Impact IA détecté !</strong>
                <span style="font-size:12px; display:block;">Eau : <b>${ml} ml</b></span>
                <span style="font-size:11px; color:#aaa;">CO2 estimé : ${co2} g</span>
            </div>
        </div>
    `;

    // Style de la bulle (UI Moderne)
    Object.assign(notify.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: '15px 20px',
        borderRadius: '10px',
        zIndex: '10000',
        boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
        fontFamily: 'Segoe UI, Tahoma, sans-serif',
        borderLeft: '5px solid #4fc3f7',
        transition: 'all 0.4s ease-in-out',
        cursor: 'pointer'
    });

    document.body.appendChild(notify);

    // Disparition automatique après 4 secondes
    setTimeout(() => {
        notify.style.opacity = '0';
        notify.style.transform = 'translateX(20px)';
        setTimeout(() => notify.remove(), 500);
    }, 4000);
}

// --- LOGIQUE DE COMPTAGE ---
function incrementCounter() {
    chrome.storage.local.get(['promptCount'], function(result) {
        let currentCount = result.promptCount || 0;
        let newCount = currentCount + 1;

        chrome.storage.local.set({promptCount: newCount}, function() {
            console.log(`GreenPrompt : Total ${newCount} | Eau : ${newCount * 10}ml`);
            // On affiche la notification visuelle
            showFloatingImpact(newCount);
        });
    });
}

// --- DÉTECTEURS D'ÉVÉNEMENTS ---

// 1. Détection du Clic
document.addEventListener('click', function(event) {
    const sendButton = event.target.closest('.composer-submit-btn') || 
                       event.target.closest('[data-testid="send-button"]');
    
    if (sendButton && !sendButton.disabled) {
        incrementCounter();
    }
});

// 2. Détection de la touche Entrée
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        // On vérifie si l'élément actif est la zone de texte
        const isTextArea = event.target.id === 'prompt-textarea' || 
                           event.target.getAttribute('contenteditable') === 'true' ||
                           event.target.tagName === 'TEXTAREA';
        
        if (isTextArea) {
            // Petit délai pour laisser le temps au message d'être envoyé
            setTimeout(incrementCounter, 100);
        }
    }
});