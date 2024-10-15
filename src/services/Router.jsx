import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import EmployeeList from '../pages/EmployeeList'

function Root() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee" element={<EmployeeList />} />
            {/* <Route path="*" element={<Page404 />} /> */}
          </Routes>
        </Router>
      );
}

export default Root;