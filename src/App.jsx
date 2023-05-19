import './App.css'
import ContentWrapper from './components/ContentWrapper'
import SideBar from './components/SideBar'

function App() {

  return (
    <div id="wrapper">

		{/* <!-- Sidebar --> */}
			<SideBar/>
		{/* <!-- End of Sidebar --> */}

		{/* <!-- Content Wrapper --> */}
			<ContentWrapper/>
		{/* <!-- End of Content Wrapper --> */}

	</div>
  )
}

export default App
