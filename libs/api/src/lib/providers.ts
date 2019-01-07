import { ApiService } from './api/api.service';
import { CardsService } from './cards';
import { CategoriesService } from './categories';

export const PROVIDERS = [ApiService, CardsService, CategoriesService];
