import { defineStore } from 'pinia'

export const useRouletteStore = defineStore('roulette', {
    state: () => {
        return {
            // Список категорий предметов

            categories: [
                {
                    name: 'Обычные',
                    chance: 40,
                    color: '#1349a6',
                    items: [
                        {
                            name: 'Ваз 2101',
                            price: '200 USD',
                            chance: 10,
                            image: null,
                        },
                        {
                            name: 'Ваз 2105',
                            price: '250 USD',
                            chance: 10,
                            image: null,
                        },
                    ]
                },
                {
                    name: 'Редкие',
                    chance: 40,
                    color: '#bd0202',
                    items: [
                        {
                            name: 'Volkswagen Golf',
                            price: '500 USD',
                            chance: 20,
                            image: null,
                        },
                    ]
                },
                {
                    name: 'Легендарное',
                    chance: 20,
                    color: '#e37811',
                    items: [
                        {
                            name: 'Lamborghini Uris',
                            price: '1000 USD',
                            chance: 5,
                            image: null,
                        },
                    ]
                }
            ],
            users: [
                {
                    name: 'John',
                    avatar: '@/src/assets/images/avatar/dog.jpg'
                },
                {
                    name: 'Eduard',
                    avatar: '../assets/images/avatar/beach.jpg'
                },
                {
                    name: 'Pavel',
                    avatar: '../assets/images/avatar/strawberry.jpg'
                },
                {
                    name: 'Dog',
                    avatar: '../assets/images/avatar/dog.jpg'
                },
                {
                    name: 'Dog',
                    avatar: '../assets/images/avatar/dog.jpg'
                },
                {
                    name: 'Dog',
                    avatar: '../assets/images/avatar/dog.jpg'
                },
                {
                    name: 'Dog',
                    avatar: '../assets/images/avatar/dog.jpg'
                },
            ]
        }
    },
})