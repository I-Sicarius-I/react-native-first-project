import { createContext, useState} from 'react'

const DATABASE_ID = "6aec81fc003b59dedbf9"
const TABLE_ID = "6aec820e00245ae5c7c3"


export const BookContext = createContext();

export function BooksProvider({children}){
    const [books, setBooks] = useState([]);

    async function fetchBooks(){
        try{

        } catch(error) {
            console.error(error.message);
        }
    }

    async function fetchBookById(id) {
        try{

        } catch(error) {
            console.error(error.message);
        }
    }

    async function createBook(data){
        try{

        } catch(error) {
            console.error(error.message);
        }
    }

    async function deleteBook(id){
        try{

        } catch(error) {
            console.error(error.message);
        }
    }

    return (<BookContext.Provider value={{books, fetchBooks, fetchBookById, createBook, deleteBook}}>
        {children}
    </BookContext.Provider>)
}