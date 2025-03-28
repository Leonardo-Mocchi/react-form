import { useState } from 'react'
import articles from './components/articles_list';

function App() {

  const currentDate = new Date();



  return (
    <>
      <header className='d-flex justify-content-between m-4 align-items-center'>
        <p className='fs-4'>For Boo Page</p>

        <h1 className='fw-bolder fs-1'>The Boo York Times</h1>

        <p className='fw-light fs-4'>{currentDate.toLocaleDateString()}</p>
      </header>
      <hr className='mx-4 fs-1' />
      <main className='m-4'>
        <p className='fs-3'>Today's Articles hand-picked just for you Boo ♥</p>

        <div className="m-5">


          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {articles.map((article) => (
              <div className="col" key={article.id}>
                <div className="card h-100 bg-primary border-0 rounded">
                  <div className="card-body d-flex flex-column">
                    <h5
                      className="card-title text-light text-center text-truncate fs-5"
                      title={article.title}
                    >
                      {article.title}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-dark text-light py-3 mt-5">
        <div className="container text-center">
          <p className="m-0">© {currentDate.getFullYear()} The Boo York Times. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
