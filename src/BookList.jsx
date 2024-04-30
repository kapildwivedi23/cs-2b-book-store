import Book from "./Book";
const bookData = [{
    title: "Let Us C",
    author: "YAshwant KAnitkar",
    imgLink: "https://m.media-amazon.com/images/I/71Q0U-8lxJS._AC_UY327_FMwebp_QL65_.jpg",
    price: 452.5,
},
{
    title: "Let Us C",
    author: "YAshwant KAnitkar",
    imgLink: "https://m.media-amazon.com/images/I/71Q0U-8lxJS._AC_UY327_FMwebp_QL65_.jpg",
    price: 452.5,
},
{
    title: "Let Us C",
    author: "YAshwant KAnitkar",
    imgLink: "https://m.media-amazon.com/images/I/71Q0U-8lxJS._AC_UY327_FMwebp_QL65_.jpg",
    price: 452.5,
},
{
    title: "Let Us C",
    author: "YAshwant KAnitkar",
    imgLink: "https://m.media-amazon.com/images/I/71Q0U-8lxJS._AC_UY327_FMwebp_QL65_.jpg",
    price: 452.5,
},
{
    title: "Let Us C",
    author: "YAshwant KAnitkar",
    imgLink: "https://m.media-amazon.com/images/I/71Q0U-8lxJS._AC_UY327_FMwebp_QL65_.jpg",
    price: 452.5,
},
{
    title: "Let Us C",
    author: "YAshwant KAnitkar",
    imgLink: "https://m.media-amazon.com/images/I/71Q0U-8lxJS._AC_UY327_FMwebp_QL65_.jpg",
    price: 452.5,
},
];

function BookList() {
    return (
        <div className="booklist">
            
               <Book {...bookData[0]} />
               <Book {...bookData[1]} />
               <Book {...bookData[2]} />
               <Book {...bookData[3]} />
               <Book {...bookData[4]} />
            
        </div>
    );
}
export default BookList;