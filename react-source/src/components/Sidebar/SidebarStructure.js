import React from 'react'
import {
    Home as HomeIcon,
} from '@material-ui/icons'

// components


const structure = [
    { id: 0, label: 'Dashboard', link: '/app/dashboard', icon: <HomeIcon /> },
    { id: 3, type: 'divider' }, 
    { id: 4, label: 'Forms', link: '/app/forms', icon: <HomeIcon /> },
    { id: 5, label: 'Two Page Two', link: '/app/testtwo', icon: <HomeIcon /> },
    { id: 6, label: 'Two Page Three', link: '/app/testthree', icon: <HomeIcon /> },
    { id: 7, label: 'Two Page Four', link: '/app/testfour', icon: <HomeIcon /> },
    
]

export default structure
