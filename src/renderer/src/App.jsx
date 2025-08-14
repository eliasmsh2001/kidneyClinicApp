import { HashRouter, Routes, Route, BrowserRouter, Navigate } from 'react-router'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RootLayout from './pages/RootLayout'
import PatientDetailsPage from './pages/PaitentsListChildren/PatientDetailsPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from './util/AuthContext'
import SignupPage from './pages/SignupPage'
import UseAuthContext from './hooks/UseAuthContext'
import { Provider } from 'react-redux'
import reduxStore from './util/reduxStore'
import PatientsListPage from './pages/PatientsListPage'
import AddNewPatient from './pages/PaitentsListChildren/AddNewPatient'
import PatientsOverView from './pages/PaitentsListChildren/PatientsOverView'
import { queryClient } from './util/apis/httpUrl'
import EditPatientPage from './pages/PaitentsListChildren/EditPatientPage'
import PatientFile from './pages/PaitentsListChildren/PatientFile'
import PatientAppointmentsPage from './pages/PatientsDetailsChildren/PatientAppointmentsPage'
import PatientsTestsPage from './pages/PatientsDetailsChildren/PatientsTestsPage'
import PatientReportPage from './pages/PatientsDetailsChildren/PatientReportPage'
import NotFoundPage from './pages/NotFoundPage'
// import './assets/main.css'

function App() {
  const { user } = UseAuthContext()
  // const user = true

  return (
    <>
      <Provider store={reduxStore}>
        <QueryClientProvider client={queryClient}>
          <HashRouter>
            <Routes>
              <Route path="login" element={<LoginPage />} />
              <Route path="/" element={user ? <RootLayout /> : <Navigate to="/login" />}>
                <Route path="signup" element={<SignupPage />} />
                <Route path="home" element={user ? <HomePage /> : <Navigate to="/login" />} />
                <Route
                  path="patientsList"
                  element={user ? <PatientsListPage /> : <Navigate to="/login" />}
                >
                  <Route index element={user ? <PatientsOverView /> : <Navigate to="/login" />} />
                  <Route
                    path="newPatient"
                    element={user ? <AddNewPatient /> : <Navigate to="/login" />}
                  />
                  <Route
                    path="patientDetails/:id"
                    element={user ? <PatientDetailsPage /> : <Navigate to="/login" />}
                  >
                    <Route index element={<PatientAppointmentsPage />} />
                    <Route path="patientTests" element={<PatientsTestsPage />} />
                    <Route path="patientReport" element={<PatientReportPage />} />
                  </Route>
                  <Route
                    path="editPatient/:id"
                    element={user ? <EditPatientPage /> : <Navigate to="/login" />}
                  />
                  <Route
                    path="patientFiles/:id"
                    element={user ? <PatientFile /> : <Navigate to="/login" />}
                  />
                </Route>
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </HashRouter>{' '}
        </QueryClientProvider>
      </Provider>
    </>
  )
}

export default App
