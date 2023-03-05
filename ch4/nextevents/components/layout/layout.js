import NotificationContext from '@/store/notification-context'
import { Fragment, useContext } from 'react'
import Notification from '../notification/notification'
import MainHeader from './main-header'

function Layout(props) {
    const notificationCtx = useContext(NotificationContext);

    const activeNotification = notificationCtx.notification;

    return (
        <Fragment>
            <MainHeader />
            <main>
                { props.children}
            </main>
            { activeNotification && (
                <Notification title={activeNotification.title} message={activeNotification.message} status={activeNotification.status} />
            )}
        </Fragment>
    )
}

export default Layout
