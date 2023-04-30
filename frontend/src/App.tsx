import {
    Routes,
    Route,
} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainScreen from "./Components/MainScreen/MainScreen";
import {Box, Container} from "@mui/material";
import ConstructorMaterialUI from "./Components/TestsConstructor/ConstructorMaterialUI/ConstructorMaterialUI";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Users from "./Pages/Users/Users";
import Dashboard from "./Pages/Dashboar/Dashboard";


function App() {
    const server_host = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:9000' : 'https://api.microai.ru'
    return (
        <Box className={'bg-slate-50'}>
            <Header/>
            <Container maxWidth="xl" sx={{minHeight: '100vh'}}>
                <Routes>
                    <Route path='/' element={<MainScreen />}/>
                    <Route path='/tests-constructor' element={<ConstructorMaterialUI />}/>
                    <Route path='/signup' element={<Signup server_host={server_host}/>}/>
                    <Route path='/login' element={<Login server_host={server_host}/>}/>
                    <Route path='/users' element={<Users />}/>
                    <Route path='/dashboard' element={<Dashboard server_host={server_host}/>}/>
                </Routes>
            </Container>
            <Footer/>
        </Box>

    );
}

export default App;
