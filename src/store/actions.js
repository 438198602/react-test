// action也是函数
export function setPageTitle(data) {
  return (dispatch, getState) => {
    dispatch({ type: 'SET_PAGE_TITLE', data: data })
  }
}

export function setInfoList(data) {
  return (dispatch, getState) => {
    // 使用fetch实现异步请求
    window.fetch('https://api.github.com/repos/facebook/react', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      params: {}
    }).then(res => {
      return res.json()
    }).then(data => {
      dispatch({ type: 'SET_INFO_LIST', data: data })
    })
  }
}
