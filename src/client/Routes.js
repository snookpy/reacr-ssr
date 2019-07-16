import React from 'react'
import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'
import NotFoundPage from './pages/NotFoundPage'
import App from './App'
import AdminListPage from './pages/AdminListPage'
export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...UsersListPage,
                path: '/users'
            },
            {
                ...AdminListPage,
                path: '/admins'
            },
            {
                ...NotFoundPage
            },
        ]
    }
]
