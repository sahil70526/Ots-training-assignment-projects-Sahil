import bookInfo from "../mongo.js";

// -------------- getting all books ----------------------------------

const getAllBooks = async (req, res) => {
    const data = await bookInfo.find();
    res.send(data);
    console.log(data);
};

// -----------------  get a specific book -----------------------------------

const specificBook = async (req, res) => {
    const { id } = req.params;
    const data = await bookInfo.find({ author: id });
    res.send(data);
    console.log(data);
}

// ---------- insert a book -------------------------------------------------

const insertBook = async (req, res) => {
    const newBook = new bookInfo({
        title: "The Diary of a Young Girl",
        author: "Anne Frank",
        discription: "What is it about? The Diary of a Young Girl (first published 1952; this edition 1977) tells the story of Anne Frank, a Jewish girl who went into hiding with her family during the Second World War.",
        img: 'https://m.media-amazon.com/images/I/51Vps1OxJPL._SX303_BO1,204,203,200_.jpg'
    });
    const data = await newBook.save();
    res.send(data);
    console.log(data);
}

// ---------------- update a specific book ------------------------------

const updateBook = async (req, res) => {
    const { id } = req.params;
    const data = await bookInfo.updateOne(
        { _id: id },
        {
            $set: {
                discription: "In late 2000, a young boy in Ahmedabad dreams of owning a business. To accommodate his friends' passion, he opens a cricket shop. However, nothing comes easy in a turbulent city. To realise their goals, they will have to face it all-religious politics, calamities, unacceptable love and, above all, their own mistakes"
            }
        }
    );
    res.send(data);
    console.log(data);
};

const deleteBook = async (req, res) => {
    const { id } = req.params;
    const data = await bookInfo.deleteOne({ author: id });
    res.send(data);
    console.log(data);

}





export { getAllBooks, insertBook, specificBook, updateBook, deleteBook } 