import vpdetect from 'viewportdetect.jsx'
import mobApp from 'mobApp.jsx'
import dtApp from 'dtApp.jsx'

isMob = vpdetect();
function App() {
  if (isMob == true) {
    <mobApp />
  } else {
    <dtApp />
  }
}

export default App


