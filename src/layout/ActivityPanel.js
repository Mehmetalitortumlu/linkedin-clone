import React from 'react'
import ActivitiyHeader from '../components/ActivityPanel/ActivitiyPanelHeader';
import ActivityPanelFooter from '../components/ActivityPanel/ActivityPanelFooter';

const ActivityPanel = () => {
    return (
        <aside className='w-76 hidden lg:block'>
            <ActivitiyHeader />
            <ActivityPanelFooter />
        </aside>
    )
}

export default ActivityPanel;
