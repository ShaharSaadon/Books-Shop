'use strict'

import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'
import booksDb from "../assets/books.json" assert {type:"json"}

const BOOK_KEY = 'bookDB'

_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    addReview,
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

function addReview(bookId,review){
    
    get(bookId)
        .then(book => {
            if(!book.reviews) book.reviews = []
            book.reviews.push(review)
            save(book)
        })
            
}

function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = booksDb
        utilService.saveToStorage(BOOK_KEY, books)
    }
}

function _createBook(title, description = 'cute book') {
    const book = getEmptyBook(title, description)
    book.id = utilService.makeId()
    return book
}