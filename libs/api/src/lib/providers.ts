import { ApiService } from './api/api.service';
import { CardsResolver, CardsService } from './cards';
import { CategoriesResolver, CategoriesService } from './categories';

export const SERVICES = [ApiService, CardsService, CategoriesService];
export const RESOLVERS = [CategoriesResolver, CardsResolver];
