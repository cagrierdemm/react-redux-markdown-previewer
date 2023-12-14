import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { enterText, toggleHelp } from '../../redux/markdownSlice';
import Markdown from 'react-markdown'

function MarkdownPreview() {
  const textCurrent = useSelector((state) => state.textCurrent);
  const textUser = useSelector((state) => state.textUser);
  const isShowingHelp = useSelector((state) => state.isShowingHelp);

  const dispatch = useDispatch();

  const handleChange = (val) => {
    dispatch(enterText(val));
  };

  const handleClick = () => {
    dispatch(toggleHelp());
  }
  useEffect(() => {
    console.log('textCurrent:', textCurrent);
    console.log('textUser:', textUser);
  }, [textCurrent, textUser]);

  const markdownResult = <Markdown>{textUser}</Markdown>;

  console.log(markdownResult);
  
  return (
    <div className='vh-100'>
      <div className='container d-flex flex-column '>
        <div className='row mt-4 text-center'>
          <div className='col-12'>
            <h1 className='text-white'>
              Markdown Previewer
            </h1>
          </div>
          <div className='col-12'>
          <button type="button" className="btn btn-light rounded-circle fw-bold" onClick={handleClick}>?</button>
          </div>
        </div>

        <div className='row mt-4'>
          <div className='col-md-6 mb-md-0 mb-4'>
            <div className="form-floating">
              <textarea className="form-control box" placeholder="Leave a comment here" id="inputTextarea" value={textCurrent} readOnly={isShowingHelp} onChange={(e) => handleChange(e.target.value)}></textarea>
              <label htmlFor="inputTextarea">Input</label>
            </div>
          </div>
          <div className='col-md-6 mb-md-0 mb-4'>
            <div className="form-floating">
              <div className='form-control box ' id="outputTextarea"><Markdown>{textUser}</Markdown></div>
              <label htmlFor="outputTextarea">Output</label>
            </div>
          </div>
        </div>
      </div>

      <footer className="d-flex mt-5 container display-absolute bottom-0 flex-wrap justify-content-between align-items-center py-3 my-4">
        <p className="col-md-6 mb-0 text-white">2023, Created by <a className='text-white text-decoration-none' href='https://github.com/cagrierdemm'>Çağrı Erdem</a></p>

        <ul className="nav col-md-6 justify-content-end">
          <li className="nav-item"><a href="https://github.com/cagrierdemm" className="nav-link px-2 text-white"><img className='me-2' src='./github.png' alt='github logo' width={24} /></a></li>
          <li className="nav-item"><a href="https://www.linkedin.com/in/cagrierdemm/" className="nav-link px-2 text-white"><img className='me-2' src='./linkedin.png' alt='linkedin logo' width={24} /></a></li>
        </ul>
      </footer>
    </div>
  )
}

export default MarkdownPreview