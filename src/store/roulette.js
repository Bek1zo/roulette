import { defineStore } from 'pinia'

export const useRouletteStore = defineStore('roulette', {
    state: () => {
        return {
            // Список категорий предметов

            categories: [
                {
                    name: 'Ваз 2101',
                    category: {
                        name: 'Обычное',
                        color: '#fff'
                    },
                    price: '200 USD',
                    chance: 10,
                    image: '/src/assets/images/items/vaz-2101.jpg',
                },
                {
                    name: 'Ваз 2105',
                    category: {
                        name: 'Обычное',
                        color: '#22679d'
                    },
                    price: '250 USD',
                    chance: 10,
                    image: '/src/assets/images/items/vaz-2105.jpg',
                },
                {
                    name: 'Volkswagen Golf',
                    category: {
                        name: 'Редкое',
                        color: '#a91a1a'
                    },
                    price: '500 USD',
                    chance: 20,
                    image: '/src/assets/images/items/golf.jpg',
                },
                {
                    name: 'Lamborghini Uris',
                    category: {
                        name: 'Легендарное',
                        color: '#e88e04'
                    },
                    price: '1000 USD',
                    chance: 5,
                    image: '/src/assets/images/items/urus.jpg',
                },
            ],
            users: [
                {
                    name: 'John',
                    avatar: '/src/assets/images/avatar/beach.jpg'
                },
                {
                    name: 'Eduard',
                    avatar: '/src/assets/images/avatar/beach.jpg'
                },
                {
                    name: 'Pavel',
                    avatar: '/src/assets/images/avatar/strawberry.jpg'
                },
                {
                    name: 'Dog',
                    avatar: '/src/assets/images/avatar/dog.jpg'
                },
                {
                    name: 'Dog',
                    avatar: '/src/assets/images/avatar/dog.jpg'
                },
                {
                    name: 'Dog',
                    avatar: '/src/assets/images/avatar/dog.jpg'
                },
                {
                    name: 'Dog',
                    avatar: '/src/assets/images/avatar/dog.jpg'
                },
            ]
        }
    },
})