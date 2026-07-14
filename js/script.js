const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');
const BASE_URL = 'https://api.github.com';

btnSearch.addEventListener('click', async () => {
	const searchTerm = inputSearch.value.trim();

	if (!searchTerm) return;

	// mostrar estado de carregamento
	profileResults.innerHTML = `
		<div class="profile-card loading">
			<div class="profile-avatar skeleton"></div>
			<div class="profile-info">
				<div class="skeleton skeleton-title"></div>
				<div class="skeleton skeleton-text"></div>
			</div>
		</div>
	`;

	try {
		const response = await fetch(`${BASE_URL}/users/${searchTerm}`);

		if (!response.ok) {
			profileResults.innerHTML = '';
			alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente');
			return;
		}

		const userData = await response.json();

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
					<h4>Seguidores</h4>
					<span>${userData.followers}</span>
				</div>
				<div class="following">
					<h4>Seguindo</h4>
					<span>${userData.following}</span>
				</div>
			</div>
		`;
	} catch (error) {
		console.error('Erro ao buscar usuário:', error);
		profileResults.innerHTML = '';
		alert('Ocorreu um erro ao buscar o usuário. Por favor, tente novamente.');
	}
});