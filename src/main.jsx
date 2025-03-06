
import React from 'react';
import { createRoot } from 'react-dom/client'
import Inicio from './inicio';
import 'bootstrap/dist/css/bootstrap.min.css';



createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Inicio />
    </React.StrictMode>
)