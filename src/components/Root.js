import React, { Component } from 'react';

// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
// 第二个工具是connect，稍后会作介绍
import { Provider } from 'react-redux'
// 引入创建好的store实例
import store from '@/store/index.js'

// 引入组件
import App from './App'


class Root extends React.Component {
	render() {
    {/* 将store作为prop传入，即可使应用中的所有组件使用store */}
		return (
			<Provider store={store}>
				<App />
			</Provider>
		);
	}
}

export default Root;
