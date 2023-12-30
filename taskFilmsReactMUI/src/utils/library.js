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


export const fetchURLs = {
    'Популярности': 'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=1',
    'Оценке': 'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1'
}


export const order = {
    'Рейтингу': 'RATING',
    'Оценке': 'NUM_VOTE',
    'Году': 'YEAR'
}

export const type = {
    'Все': "ALL",
    'Фильм': "FILM",
    'Шоу': "TV_SHOW",
    'Сериал': "TV_SERIES",
    'Мини-сериал': "MINI_SERIES",
}


export const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzU5ZTBiOTAzNWQyMWUyYTkxZWM3MTZhM2ZiY2JiMCIsInN1YiI6IjY1MjkxNTQ3NjI5YjJjMDExYzkwM2U0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uEnWmaoN9WiecvlJsoL6kIa9rFt5EpL8CCsS4VwoD4o'

export const kinopoistUnoffToken = 'e43bd03c-839c-4000-9f8b-274957f6431d';

export const genresArr = [
    {
        "id": 1,
        "genre": "триллер"
      },
      {
        "id": 2,
        "genre": "драма"
      },
      {
        "id": 3,
        "genre": "криминал"
      },
      {
        "id": 4,
        "genre": "мелодрама"
      },
      {
        "id": 5,
        "genre": "детектив"
      },
      {
        "id": 6,
        "genre": "фантастика"
      },
      {
        "id": 7,
        "genre": "приключения"
      },
      {
        "id": 8,
        "genre": "биография"
      },
      {
        "id": 9,
        "genre": "фильм-нуар"
      },
      {
        "id": 10,
        "genre": "вестерн"
      },
      {
        "id": 11,
        "genre": "боевик"
      },
      {
        "id": 12,
        "genre": "фэнтези"
      },
      {
        "id": 13,
        "genre": "комедия"
      },
      {
        "id": 14,
        "genre": "военный"
      },
      {
        "id": 15,
        "genre": "история"
      },
      {
        "id": 16,
        "genre": "музыка"
      },
      {
        "id": 17,
        "genre": "ужасы"
      },
      {
        "id": 18,
        "genre": "мультфильм"
      },
      {
        "id": 19,
        "genre": "семейный"
      },
      {
        "id": 20,
        "genre": "мюзикл"
      },
      {
        "id": 21,
        "genre": "спорт"
      },
      {
        "id": 22,
        "genre": "документальный"
      },
      {
        "id": 23,
        "genre": "короткометражка"
      },
      {
        "id": 24,
        "genre": "аниме"
      },
      {
        "id": 25,
        "genre": ""
      },
      {
        "id": 26,
        "genre": "новости"
      },
      {
        "id": 27,
        "genre": "концерт"
      },
      {
        "id": 28,
        "genre": "для взрослых"
      },
      {
        "id": 29,
        "genre": "церемония"
      },
      {
        "id": 30,
        "genre": "реальное ТВ"
      },
      {
        "id": 31,
        "genre": "игра"
      },
      {
        "id": 32,
        "genre": "ток-шоу"
      },
      {
        "id": 33,
        "genre": "детский"
      }
]