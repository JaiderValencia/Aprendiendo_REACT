import './App.css'
import { Routes, Route } from 'react-router-dom'
import ContentWrapper from './components/ContentWrapper'
import SideBar from './components/SideBar'
import GenresInDB from './components/GenresInDB'
import ContentLastMovie from './components/ContentLastMovie'
import Table from './components/table'
import SearchMovies from './components/SearchMovies'

function App() {

	return (
		<div id="wrapper">

			{/* <!-- Sidebar --> */}
			<SideBar />
			{/* <!-- End of Sidebar --> */}

			{/* <!-- Content Wrapper --> */}
			<Routes>
				<Route path='/' element={<ContentWrapper />} />
				<Route path='/genres' element={<GenresInDB />} />
				<Route path='/movies' element={<Table />} />
				<Route path='/lastmovie' element={<ContentLastMovie title='Star Wars - Mandalorian' img='mandalorian.jpg' />} />
				<Route path='/search' element={<SearchMovies />} />
				<Route path='*' element={<h1>No encontré la ruta</h1>} />
			</Routes>
			{/* <!-- End of Content Wrapper --> */}

		</div>
	)
}

export default App
