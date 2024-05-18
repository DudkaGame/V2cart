function Footer() {
    return (
       <footer className="page-footer #6200ea deep-purple accent-4">
          <div className="footer-copyright">
             <div className="container">
                by D © {new Date().getFullYear()}
                <a className="grey-text text-lighten-4 right" href="#!">
                   Repository
                </a>
             </div>
          </div>
       </footer>
    );
 }
 export {Footer};