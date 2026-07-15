const profileResults = document.querySelector('.profile-results');

export function renderLoading() {
    profileResults.innerHTML = `
        <div class="profile-card loading">
            <div class="profile-avatar skeleton"></div>
            <div class="profile-info">
                <div class="skeleton skeleton-title"></div>
                <div class="skeleton skeleton-text"></div>
            </div>
        </div>
    `;
}

export function renderUserProfile(userData) {
    profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar do usuário" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name || userData.login}</h2>
                <p>${userData.bio || 'Biografia não disponível'}</p>
            </div>
        </div>

        <div class="profile-counters">
            <div class="followers">
                <h4>👥 Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>👥 Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>
    `;
}

export function renderError(message) {
    profileResults.innerHTML = '';
    alert(message);
}
