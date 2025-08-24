export const routes = {
    home: () => '/',
    favorites: () => '/favorites',
    member: (id) => (id ? `/members/${id}` : '/members/:id'),
};
