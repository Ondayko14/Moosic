const express = require('express');
const { ApolloServer } = require('apollo-server-express');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '')));
}

