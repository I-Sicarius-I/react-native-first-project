import { createContext, useEffect, useState} from 'react'
import { db } from '../lib/appwrite';
import { ID, Permission, Query, Role } from 'react-native-appwrite';
import { useUser } from '../hooks/useUser';

const DATABASE_ID = "6aec81fc003b59dedbf9"
const TABLE_ID = "6aec820e00245ae5c7c3"


export const BookContext = createContext();

export function BooksProvider({children}){
    const [books, setBooks] = useState([]);
    const { user } = useUser();

    async function fetchBooks(){
        try{
            const response = await db.listRows({
                databaseId: DATABASE_ID,
                tableId: TABLE_ID,
                queries: [
                    Query.equal('userId', user.$id)
                ]
            })
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
            const newBook = await db.createRow({
                databaseId: DATABASE_ID,
                tableId: TABLE_ID,
                rowId: ID.unique(),
                data: {...data, userId: user.$id},
                permissions: [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id))
                ]
            });
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

    useEffect(() => {

        if(user){
            fetchBooks();
        } else {
            setBooks([]);
        }

    }, [user])

    return (<BookContext.Provider value={{books, fetchBooks, fetchBookById, createBook, deleteBook}}>
        {children}
    </BookContext.Provider>)
}