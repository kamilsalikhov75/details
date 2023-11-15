export const selectArr = [{
    id: 0, 
    title: "Популярности"
}, {
    id: 1,
    title: "Оценке"
}, {
    id: 2,
    title: "Дате выхода"
}]

export function arrOfNum(from, to, arr) {
    for (let i = from; i <= to; i++) {
        arr.push({ id: i, title: i })
    }
}

export const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzU5ZTBiOTAzNWQyMWUyYTkxZWM3MTZhM2ZiY2JiMCIsInN1YiI6IjY1MjkxNTQ3NjI5YjJjMDExYzkwM2U0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uEnWmaoN9WiecvlJsoL6kIa9rFt5EpL8CCsS4VwoD4o'

export const genresArr = [
    {
        "id": 28,
        "name": "боевик"
    },
    {
        "id": 12,
        "name": "приключения"
    },
    {
        "id": 16,
        "name": "мультфильм"
    },
    {
        "id": 35,
        "name": "комедия"
    },
    {
        "id": 80,
        "name": "криминал"
    },
    {
        "id": 99,
        "name": "документальный"
    },
    {
        "id": 18,
        "name": "драма"
    },
    {
        "id": 10751,
        "name": "семейный"
    },
    {
        "id": 14,
        "name": "фэнтези"
    },
    {
        "id": 36,
        "name": "история"
    },
    {
        "id": 27,
        "name": "ужасы"
    },
    {
        "id": 10402,
        "name": "музыка"
    },
    {
        "id": 9648,
        "name": "детектив"
    },
    {
        "id": 10749,
        "name": "мелодрама"
    },
    {
        "id": 878,
        "name": "фантастика"
    },
    {
        "id": 10770,
        "name": "телевизионный фильм"
    },
    {
        "id": 53,
        "name": "триллер"
    },
    {
        "id": 10752,
        "name": "военный"
    },
    {
        "id": 37,
        "name": "вестерн"
    }
]