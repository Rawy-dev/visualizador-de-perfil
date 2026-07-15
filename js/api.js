const BASE_URL = 'https://api.github.com';

export async function fetchGithubUser(username) {
    if (!username) {
        throw new Error('O nome de usuário não pode ficar vazio.');
    }

    const response = await fetch(`${BASE_URL}/users/${encodeURIComponent(username)}`);

    if (!response.ok) {
        throw new Error('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
    }

    return response.json();
}
