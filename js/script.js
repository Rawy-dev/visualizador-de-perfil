import { fetchGithubUser } from './api.js';
import { renderLoading, renderUserProfile, renderError } from './ui.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');

btnSearch.addEventListener('click', async () => {
    const searchTerm = inputSearch.value.trim();

    if (!searchTerm) return;

    renderLoading();

    try {
        const userData = await fetchGithubUser(searchTerm);
        renderUserProfile(userData);
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        renderError(error.message || 'Ocorreu um erro ao buscar o usuário. Por favor, tente novamente.');
    }
});