import { useState } from 'react'
import articlesData from './components/articles_list';

function App() {

  const currentDate = new Date();
  const [articles, setArticles] = useState(articlesData);
  const [newTitle, setNewTitle] = useState('');

  const handleAddArticle = (e) => {
    e.preventDefault();

    if (newTitle.trim() === '') return; // Avoid adding empty titles

    const newArticle = {
      id: articles.length + 1,
      title: newTitle,
      description: '',
    };

    setArticles([...articles, newArticle]);
    setNewTitle(''); //this clears the input field
  };

  const handleDeleteArticle = (id) => {
    setArticles(articles.filter((article) => (article.id !== id)))
  }


  return (
    <>
      {/* header */}
      <header className='d-flex justify-content-between m-4 align-items-center'>
        <p className='fs-4 m-0'>Your Dash<span className='text-primary fw-bold'>boo</span>ard</p>

        <h1 className='fw-bolder fs-1 flex-grow-1 text-center'>The <span className='text-primary'>Boo</span> York Times</h1>

        <p className='fw-light fs-4 m-0'>{currentDate.toLocaleDateString()}</p>
      </header>

      <hr className='mx-5 bg-light' style={{ height: '5px' }} />

      {/* main */}
      <main className='m-4'>
        <p className='fs-3'>Manage Your Articles Here <span className='text-primary fw-bold'>Boo</span>:</p>

        {/* input new article */}
        <form
          className="mb-4 d-flex justify-content-center align-items-center gap-3"
          onSubmit={handleAddArticle}
        >
          <input
            type="text"
            className="form-control w-50"
            placeholder="Enter a new article title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Add Article
          </button>
        </form>

        {/* articles */}
        <div className="m-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

            {articles
              .slice() // Create a copy of the articles array
              .reverse() // Reverse the order of the articles
              .map((article) => (
                <div className="col" key={article.id}>
                  <div className="card h-100 bg-primary border-0 rounded">
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <h5
                        className="card-title text-light text-truncate fs-5"
                        title={article.title}
                      >
                        {article.title}
                      </h5>

                      <button className="btn btn-danger d-flex align-items-center justify-content-center p-2" onClick={() => handleDeleteArticle(article.id)}>
                        <i className="fas fa-trash text-light"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

          </div>
        </div>
      </main>

      {/* footer */}
      <footer className="bg-dark text-light py-3 mt-5">
        <div className="container text-center">
          <p className="m-0">© {currentDate.getFullYear()} The Boo York Times. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
