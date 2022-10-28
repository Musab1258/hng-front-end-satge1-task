import './Links.css';

function Links() {
    return (
        <div>
            <a href='https://training.zuri.team/' id='btn__zuri' ><h4>Zuri Team</h4></a>
            <a href='http://books.zuri.team' id='books'>
                <h4>Zuri Books</h4>
                <h6>If you are looking for books on coding and design, click here.</h6>
            </a>
            <a href='https://books.zuri.team/python-for-beginners?ref_id=MusabHabeeb' id='book__python'>
                <h4>Python Book</h4>
                <h6>If you want to learn how to code with python, then, this is the book you need.</h6>
            </a>
            <a href='https://background.zuri.team/' id='pitch'>
                <h4>Background Check for Coders.</h4>
                <h6>If you want to know more about the software developers you are hiring, click here.</h6>
            </a>
            <a href='https://books.zuri.team/design-rules' id='book__design'>
                <h4>Design Book</h4>
                <h6>If you want to be conversant with the rules of professional design, check out this book</h6>
            </a>
        </div>
    );
}

export default Links;
