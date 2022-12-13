export const getAll = async () => {
    const response = await fetch(
        'http://localhost:4444/pokemon/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokemons = await response.json()
    return pokemons
}
export const getAllp = async () => {
    const response = await fetch(
        'http://localhost:4444/pokedex/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokedex = await response.json()
    return pokedex
}
export const addToPokedex = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokedex/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(pokemon)
        }
    )
    const pokedex = await response.json()
    return pokedex
}
export const deletePokemon = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/insert', {
            method: 'DELETE', 
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(pokemon)
        }
    )
    const pokemons = await response.json()
    return pokemons
}
export const updatePokemon = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(pokemon)
        }
    )
    .then (response => response.json())
}
