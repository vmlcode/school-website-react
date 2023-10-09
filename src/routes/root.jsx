import { Outlet } from "react-router-dom";
import "./root.css";
import { Link } from "react-router-dom";
export const Root = () => {
  return (
    <>
      <nav className="navbar">
      <ul className="navbar-nav">
      <li className="logo">
        <a href="#" className="nav-link">
          <span className="link-text logo-text">CRP v1</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
        </a>
      </li>

      <li className="nav-item">
        <Link to="/" className="nav-link">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="alien-monster"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M160,320h64V224H160Zm192-96v96h64V224Z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
          <span className="link-text">Home</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to='calendar' className="nav-link">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="alien-monster"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0z"
                className="fa-secondary"
              ></path>
            </g>
          </svg>
          <span className="link-text">Calendario</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to='/exams'>
        <a href="#" className="nav-link">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="cat"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="svg-inline--fa fa-cat fa-w-16 fa-9x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M121 32c-29.4 0-55 20-62.1 48.5l-57 227.9C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-92.1c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32H121zm0 64h270l48 192h-51.2c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73l48-192z"
                className="fa-secondary"
              ></path>
            </g>
          </svg>
          <span className="link-text">Examenes</span>
        </a>
        </Link>
      </li>

      

      <li className="nav-item">
        <Link to='/homeworks'>
        <a href="#" className="nav-link">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="space-station-moon-alt"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M96 80c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v304H96V80zm313 47c-9.4-9.4-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L409 161c9.4-9.4 9.4-24.6 0-33.9zM0 336c0-26.5 21.5-48 48-48h16v128h448V288h16c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-96z"
                className="fa-secondary"
              ></path>
            </g>
          </svg>
          <span className="link-text">Tareas</span>
        </a>
        </Link>
      </li>

     
      <li className="nav-item">
        <a href="#" className="nav-link">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="space-shuttle"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M32 416c0 35.35 21.49 64 48 64h16V352H32zm154.54-232h280.13L376 168C243 140.59 222.45 51.22 128 34.65V160h18.34a45.62 45.62 0 0 1 40.2 24zM32 96v64h64V32H80c-26.51 0-48 28.65-48 64zm114.34 256H128v125.35C222.45 460.78 243 371.41 376 344l90.67-16H186.54a45.62 45.62 0 0 1-40.2 24z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M592.6 208.24C559.73 192.84 515.78 184 472 184H186.54a45.62 45.62 0 0 0-40.2-24H32c-23.2 0-32 10-32 24v144c0 14 8.82 24 32 24h114.34a45.62 45.62 0 0 0 40.2-24H472c43.78 0 87.73-8.84 120.6-24.24C622.28 289.84 640 272 640 256s-17.72-33.84-47.4-47.76zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.91 0 31.94 80 0 80z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
          <span className="link-text">About</span>
        </a>
      </li>
    </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};
