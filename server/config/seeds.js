const db = require('./connection');
const {User, Post, Comment} = require('../models')


    const Posts= await Post.insertMany([
    {
        title:'test1',
        body:'test1',
        image:'test1',
        song:'test1',
        postid:1,
        userid: 1
    },
    {
        title:'test2',
        body:'test2',
        image:'test2',
        song:'test2',
        postid:2,
        userid: 2

    },
    {
        title:'test3',
        body:'test3',
        image:'test3',
        song:'test3',
        postid:3,
        userid: 1
    },
    {
        title:'test4',
        body:'test4',
        image:'test4',
        song:'test4',
        postid:4,
        userid: 2
    }
    ])


console.log('posts seeded');

const Comments= await Comment.insertMany([
{
    postid:1,
    userid: 1,
    body: 'test1'
},
{
    postid:2,
    userid: 2,
    body: 'test2'
},
{
    postid:3,
    userid: 1,
    body: 'test3'
},
{
    postid:4,
    userid: 2,
    body: 'test4'
},
])

console.log('comments seeded');

await User.deleteMany();

  await User.create({
    firstName: 'Ron',
    lastName: 'Burgundy',
    email: 'Ron@hotmail.com',
    password: '12345',
    userid: 1

  });

  await User.create({
    firstName: 'Tom',
    lastName: 'Segura',
    email: 'Tom@ymh.com',
    password: '12345',
    userid: 2
  });

  console.log('users seeded');

  process.exit();
;