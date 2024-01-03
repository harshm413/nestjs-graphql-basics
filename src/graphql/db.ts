const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Doe', email: 'jane@example.com' },
    { id: '3', name: 'Bob Smith', email: 'bob@example.com' },
    { id: '4', name: 'Alice Johnson', email: 'alice@example.com' },
    { id: '5', name: 'Charlie Brown', email: 'charlie@example.com' },
    { id: '6', name: 'Eva Williams', email: 'eva@example.com' },
    { id: '7', name: 'David Jones', email: 'david@example.com' },
    { id: '8', name: 'Grace Taylor', email: 'grace@example.com' },
    { id: '9', name: 'Sam Miller', email: 'sam@example.com' },
    { id: '10', name: 'Lily Davis', email: 'lily@example.com' },
];

const posts = [
    { id: '1', title: 'Post 1', content: 'Content 1', authorId: '1' },
    { id: '2', title: 'Post 2', content: 'Content 2', authorId: '2' },
    { id: '3', title: 'Post 3', content: 'Content 3', authorId: '3' },
    { id: '4', title: 'Post 4', content: 'Content 4', authorId: '4' },
    { id: '5', title: 'Post 5', content: 'Content 5', authorId: '5' },
    { id: '6', title: 'Post 6', content: 'Content 6', authorId: '6' },
    { id: '7', title: 'Post 7', content: 'Content 7', authorId: '7' },
    { id: '8', title: 'Post 8', content: 'Content 8', authorId: '8' },
    { id: '9', title: 'Post 9', content: 'Content 9', authorId: '9' },
    { id: '10', title: 'Post 10', content: 'Content 10', authorId: '10' },
];

const comments = [
    { id: '1', text: 'Comment 1', authorId: '1', postId: '1' },
    { id: '2', text: 'Comment 2', authorId: '1', postId: '1' },
    { id: '3', text: 'Comment 3', authorId: '2', postId: '2' },
    { id: '4', text: 'Comment 4', authorId: '3', postId: '3' },
    { id: '5', text: 'Comment 5', authorId: '4', postId: '4' },
    { id: '6', text: 'Comment 6', authorId: '5', postId: '5' },
    { id: '7', text: 'Comment 7', authorId: '6', postId: '6' },
    { id: '8', text: 'Comment 8', authorId: '7', postId: '7' },
    { id: '9', text: 'Comment 9', authorId: '8', postId: '8' },
    { id: '10', text: 'Comment 10', authorId: '9', postId: '9' },
];

export { users, posts, comments };
