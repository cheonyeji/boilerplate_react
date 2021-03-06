import React, { useEffect } from 'react'
import axios from 'axios';

function LandingPage(props) {

    useEffect(() => {
        axios.get('/api/hello')
        .then(response=> { console.log(response) } )
    })

    const onClickHandler = () => {
        // 간단해서 redux 안쓰고 바로 여기에서 axios 진행
        axios.get('/api/users/logout')
        .then(response => {
            if(response.data.success) {
                props.history.push('/login')
            } else {
                alert('로그아웃에 실패했습니다.')
            }
        })
    }

    return (
        <div style={{
            display:'flex', justifyContent:'center', alignItems:'center',
            width:'100%', height:'100vh'
        }}>
            <h2>시작 페이지</h2>
            
            <button onClick={onClickHandler}>
                로그아웃
            </button>
        </div>
    )
}

export default LandingPage
