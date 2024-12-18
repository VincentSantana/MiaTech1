import Card from "./components/Card";

const cards = [
    {
        title: "My Title 1",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis excepturi repudiandae impedit? At dolor, fugiat, asperiores eius repellendus velit recusandae ipsam quia, commodi doloribus optio pariatur possimus facere praesentium nesciunt?"
    },
    {
        title: "My Title 2",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis excepturi repudiandae impedit? At dolor, fugiat, asperiores eius repellendus velit recusandae ipsam quia, commodi doloribus optio pariatur possimus facere praesentium nesciunt?"
    },
    {
        title: "My Title 3",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis excepturi repudiandae impedit? At dolor, fugiat, asperiores eius repellendus velit recusandae ipsam quia, commodi doloribus optio pariatur possimus facere praesentium nesciunt?"
    },
    {
        title: "My Title 4",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis excepturi repudiandae impedit? At dolor, fugiat, asperiores eius repellendus velit recusandae ipsam quia, commodi doloribus optio pariatur possimus facere praesentium nesciunt?"
    },
];

const App = () => {
    return (
        <>
            <Card content={cards[0]} />
            <Card content={cards[1]} />
            <Card content={cards[2]} />
            <Card content={cards[3]} />
        </>
    )
}

export default App;