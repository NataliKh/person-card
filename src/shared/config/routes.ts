export const routes = {
  home: () => '/',
  favorites: () => '/favorites',
  member: (id?: string) => (id ? `/members/${id}` : '/members/:id'),
} as const;
