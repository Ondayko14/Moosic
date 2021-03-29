const db = require('./connection');
const {User, Post, Comment, Category} = require('../models')

db.once('open', async () => {
    await Category.deleteMany();
  
    const categories = await Category.insertMany([
      { name: 'Rock' },
      { name: 'Rap' },
      { name: 'R&B' },
      { name: 'Pop' },
      { name: 'Country' }
    ]);
  
    console.log('categories seeded');
  
    await Post.deleteMany();
    const posts= await Post.insertMany([
    {
        title:'test1',
        body:'test1',
        image:'test1',
        song:'test1',
        postid:1,
        userid: 1,
        category: categories[1]._id,
    },
    {
        title:'test2',
        body:'test2',
        image:'test2',
        song:'test2',
        postid:2,
        userid: 2,
        category: categories[2]._id,

    },
    {
        title:'test3',
        body:'test3',
        image:'test3',
        song:'test3',
        postid:3,
        userid: 1,
        category: categories[3]._id,
    },
    {
        title:'test4',
        body:'test4',
        image:'test4',
        song:'test4',
        postid:4,
        userid: 2,
        category: categories[4]._id,
    }
    ])


console.log('posts seeded');

const comments= await Comment.insertMany([
{
    postid:1,
    userid: 1,
    message: 'test1'
},
{
    postid:2,
    userid: 2,
    message: 'test2'
},
{
    postid:3,
    userid: 1,
    message: 'test3'
},
{
    postid:4,
    userid: 2,
    message: 'test4'
},
])

console.log('comments seeded');

await User.deleteMany();

  await User.create({
    firstName: 'Ron',
    lastName: 'Burgundy',
    email: 'Ron@hotmail.com',
    password: '12345',
    userid: 1,
    posts:"100"

  });

  await User.create({
    firstName: 'Tom',
    lastName: 'Segura',
    email: 'Tom@ymh.com',
    password: '12345',
    userid: 2,
    posts: '25'

  });

  console.log('users seeded');

  process.exit();
})
