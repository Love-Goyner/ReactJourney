import express from 'express'

const app = express();

app.get('/' , (req, res) => {
    res.send("server is ready");
});

app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {
            id: 1,
            title: "First Joke",
            content: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id: 2,
            title: "Second Joke",
            content: "Why did the math book look sad? Because it had too many problems."
        },
        {
            id: 3,
            title: "Third Joke",
            content: "Why don't skeletons fight each other? They don't have the guts."
        },
        {
            id: 4,
            title: "Fourth Joke",
            content: "Why couldn't the bicycle stand up by itself? It was two-tired."
        },
        {
            id: 5,
            title: "Fifth Joke",
            content: "What do you call fake spaghetti? An impasta."
        },
        {
            id: 6,
            title: "Sixth Joke",
            content: "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            id: 7,
            title: "Seventh Joke",
            content: "How does a penguin build its house? Igloos it together."
        },
        {
            id: 8,
            title: "Eighth Joke",
            content: "Why don't eggs tell jokes? They'd crack each other up."
        },
        {
            id: 9,
            title: "Ninth Joke",
            content: "Why did the golfer bring two pairs of pants? In case he got a hole in one."
        },
        {
            id: 10,
            title: "Tenth Joke",
            content: "What do you call cheese that isn't yours? Nacho cheese."
        }
    ];    
    res.send(jokes)
})

const port = process.env.port || 3000;

app.listen(port, ()=>{
    console.log(`server at http://localhost:${port}`);
})
