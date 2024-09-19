import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderConmponent from './components/HeaderConmponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HelloWorld from './HelloWorld'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'
import ListDepartmentComponent from './components/ListDepartmentComponent'
import { DepartmentComponents } from './components/DepartmentComponents'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <HeaderConmponent />
        <Routes>
          {/* //http://localhost:3000 */}
          <Route path='/' element={ <ListEmployeeComponent /> }></Route>
          {/* //http://localhost:3000/employees */}
          <Route path='/employees' element ={ <ListEmployeeComponent /> }></ Route>
          {/* //http://localhost:3000/add-employee */}
          <Route path='/add-employee' element = {<EmployeeComponent/>}></Route>
          {/* //http://localhost:3000/edit-employee/{id}*/}
          <Route path='/edit-employee/:id' element = {<EmployeeComponent/ >}></Route>

          
          {/* //http://localhost:3000/departments */}
          <Route path='/departments' element = {<ListDepartmentComponent />}></Route>
          {/* //http://localhost:3000/add-departments */}
          <Route path='/add-department' element = {<DepartmentComponents />}></Route>
          {/* //http://localhost:3000/edit-departments/:id */}
          <Route path='/edit-department/:id' element = {<DepartmentComponents />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
