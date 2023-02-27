'use strict'

import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'

_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
}

function query(filterBy = {}) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (filterBy.txt) {
                // const regex = new RegExp(filterBy.txt, 'i')
                // books = books.filter(book => regex.test(book.title))
            }
            // if(filterBy..)
            // books = book.filter(car => car.maxSpeed >= filterBy.minSpeed)
            return books
        }

        )
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook(title = '', description = '', thumbnail = '') {
    return {
        id: '',
        title,
        description,
        thumbnail,
        listPrice: {
            amount: '',
            currencyCode: '',
            isOnSale: false
        }
    }
}

function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = [
            {
                "id": "OXeMG8wNskc",
                "title": "The Power Of now",
                "subtitle": "mi est eros dapibus himenaeos",
                "authors": ["Barbara Cartland"],
                "publishedDate": 2021,
                "description": "placerat nisi sodales suscipit tellus",
                "pageCount": 420,
                "categories": ["Computers", "Hack"],
                "thumbnail": "https://www.coding-academy.org/books-photos/20.jpg",
                "language": "en",
                "listPrice": {
                    "amount": 168,
                    "currencyCode": "EUR",
                    "isOnSale": true
                }
            },
            {
                "id": "OXeMG8jNskc",
                "title": "Harry poter",
                "subtitle": "skflgdskf;gm l;dgk l;dkg;ldsfgkdsfgl",
                "authors": ["Barbara Cartland"],
                "publishedDate": 1999,
                "description": "placerat nisi sodales suscipit tellus",
                "pageCount": 713,
                "categories": ["Computers", "Hack"],
                "thumbnail": "https://www.coding-academy.org/books-photos/19.jpg",
                "language": "en",
                "listPrice": {
                    "amount": 109,
                    "currencyCode": "EUR",
                    "isOnSale": false
                }
            },
            {
                "id": "OXeMG8ANskc",
                "title": "metaus hendrerit",
                "subtitle": "mi est eros dapibus himenaeos",
                "authors": ["Barbara Cartland"],
                "publishedDate": 1999,
                "description": "placerat nisi sodales suscipit tellus",
                "pageCount": 713,
                "categories": ["Computers", "Hack"],
                "thumbnail": "https://www.coding-academy.org/books-photos/17.jpg",
                "language": "en",
                "listPrice": {
                    "amount": 109,
                    "currencyCode": "EUR",
                    "isOnSale": false
                }
            },
        ]


        utilService.saveToStorage(BOOK_KEY, books)
    }
}

function _createBook(title, description = 'cute book') {
    const book = getEmptyBook(title, description)
    book.id = utilService.makeId()
    return book
}