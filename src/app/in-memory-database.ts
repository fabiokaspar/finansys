import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';

export class InMemoryDatabase implements InMemoryDbService {
    createDb() 
    {
        const categories: Category[] = [
            {id: 1, name: "Lazer", description: "Cinema, Parque, Shopping, etc"},
            {id: 2, name: "Moradia", description: "Pagamento de contas da casa"},
            {id: 3, name: "Saúde", description: "Remédios e plano de saúde"},
            {id: 4, name: "Salario", description: "Recebimento de salário"},
            {id: 5, name: "Freelas", description: "Trabalho como freelancer"}
        ]

        return { categories };
    }
    
}
