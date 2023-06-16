import React from 'react'
import ActivityPanel from './ActivityPanel'
import Content from './Content'
import ProfileDetail from './ProfileDetail'

const Container = () => {
    return (
        <div className='max-w-6xl mx-auto min-h-screen flex '>
            <ProfileDetail />
            <Content />
            <ActivityPanel />
        </div>
    )
}

export default Container
