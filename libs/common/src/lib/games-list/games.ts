export interface Game {
  name: string;
  link: string;
  imageUrl?: string;
  description?: string;
}

export const games: Game[] = [
  {
    name: 'Alias',
    link: 'alias',
    description: 'Игра, в которой игрокам нужно объяснять друг другу слова'
  }
];
