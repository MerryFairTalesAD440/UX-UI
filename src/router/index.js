import Vue from 'vue'
import Router from 'vue-router'
import BookPage from '@/components/BookPage'
import AddPage from '@/components/AddPage'
import AddLanguage from '@/components/AddLanguage'
import AddImage from '@/components/AddImage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'book_page',
            component: BookPage
        },
        {
            path: '/addpage',
            name: 'add_page',
            component: AddPage
        },
        {
            path: '/addlanguage',
            name: 'language_page',
            component: AddLanguage
        },
        {
            path: '/addimage',
            name: 'image_page',
            component: AddImage
        }
    ]
})