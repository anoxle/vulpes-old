function createRedirectBox() {
    const redirectBoxStyles = `
          #redirect-box {
              position: fixed;
              top: 10px;
              right: 10px;
              background-color: #131314;
              color: white;
              padding: 15px 25px;
              border-radius: 10px;
              text-align: center;
              cursor: pointer;
              transition: transform 0.2s ease, box-shadow 0.2s ease;
              opacity: 0;
              transform: translateX(20px);
              z-index: 1000;
              animation: fadeIn 0.5s ease-out forwards;
              backdrop-filter: blur(10px);
          }
  
          #redirect-box:hover {
              transform: scale(1.05);
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          }
  
          @keyframes fadeIn {
              from {
                  opacity: 0;
                  transform: translateX(20px);
              }
              to {
                  opacity: 1;
                  transform: translateX(0);
              }
          }
      `;
  
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(redirectBoxStyles));
    document.head.appendChild(styleElement);
  
    const redirectBoxHTML = `
          <div id="redirect-box">
              You're currently viewing an outdated page (View New Page)
          </div>
      `;
  
    document.body.insertAdjacentHTML('afterbegin', redirectBoxHTML);
  
    window.redirectToNewSite = function() {
      window.open('https://vulpesy.vercel.app/', '_blank');
    };
  
    const redirectBox = document.getElementById('redirect-box');
    redirectBox.addEventListener('click', redirectToNewSite);
  }
  
  createRedirectBox();