import React from "react";
import {HashRouter, Route} from "react-router-dom"; 
// 여러 router dom에서 hash와 route를 쓰는것이다.
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";


function App(){
  return (
  <HashRouter>
    <Navigation/>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/movie/:id" component={Detail}/>
  </HashRouter>
  );
}

export default App;

// router는 기본적으로 엄청 간단한 리액트 컴포넌트이다.
// about이라는 경로로 접속하면 About이라는 컴포넌트를 보여줘!
// exact는 이 url아니면 이 화면 안보여 준다링!