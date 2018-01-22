/**
 * 我的页面
 */
import React, { Component } from 'react';

// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux';
// 引入action
import { setPageTitle, setInfoList } from '../../store/actions';

import './my.styl';


class My extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // 触发setInfoList action
    this.props.setInfoList();
  }

  changeTitle() {
    // 触发setPageTitle action
    this.props.setPageTitle('新的标题');
  }

  render() {
    // 从props中解构store
    let { pageTitle, infoList } = this.props;
    console.log(this.props);
    console.log(infoList);

    // 使用store
    return (
      <div className="app-my">
        <h1>{pageTitle}</h1>
        <div onClick={() => this.changeTitle()}>换个标题</div>
        {
          infoList ?
          <div>
            <p>请求的ID</p>
            <p>{infoList.id}</p>
          </div> :
          <p>请求失败</p>
        }
      </div>
    )
  }
}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
  return {
    pageTitle: state.pageTitle,
    infoList: state.infoList
  }
}

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setPageTitle(data) {
      // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
      dispatch(setPageTitle(data))
      // 执行setPageTitle会返回一个函数
      // 这正是redux-thunk的所用之处:异步action
      // 上行代码相当于
      /*dispatch((dispatch, getState) => {
          dispatch({ type: 'SET_PAGE_TITLE', data: data })
      )*/
    },
    setInfoList(data) {
      dispatch(setInfoList(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(My);
