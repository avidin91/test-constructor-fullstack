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
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";


function App() {
    return (
        <Box className={'bg-slate-50'}>
            <Header/>
            <Container maxWidth="xl" sx={{minHeight: '100vh'}}>
                <Routes>
                    <Route path='/' element={<MainScreen />}/>
                    <Route path='/tests-constructor' element={<ConstructorMaterialUI />}/>
                    <Route path='/signup' element={<Signup />}/>
                    <Route path='/login' element={<Login />}/>
                </Routes>
            </Container>
            <Footer/>
        </Box>

    );
}

export default App;
