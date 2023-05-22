// export const myGetters =  (state) => {
    //return state.algo

// }
//retorna una funcion
export const getEntryByTerm =  (state) => (term = '') => { 

    if (term.length === 0) return state.entries

    //si el buscador no esta vacio regresa las entradas que el term que se escribe tenga una palabra que coincida
    
    return state.entries.filter( entry => entry.text.toLowerCase().includes(term.toLocaleLowerCase()))
   

}

export const getEntryById =  (state) => (id = '') => {
    
    const entry = state.entries.find(entry => entry.id===id)

    if(!entry) return

    return {...entry}
}
