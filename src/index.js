import React from 'react';//подключаем библиотеку React
import ReactDom from 'react-dom';//отображает на браузере
import App from './components/app/app'

ReactDom.render(<App/>, document.getElementById('root'));//выводит на страницу, render-отображать (элемент, место)-(App, 'root')