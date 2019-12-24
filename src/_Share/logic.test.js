import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {getFromApi} from './logic'

test('should get api call be successful', () => {
     getFromApi('http://localhost:3000/login', { "username": "test", "password": "test" }).then((res) => {
        // login is successfull
        expect(linkElement).toBe(200);
    })
});