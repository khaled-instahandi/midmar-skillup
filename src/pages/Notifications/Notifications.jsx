import React, { useState } from 'react';
import './Notifications.css';
import avatar from '../../images/Ellipse180.png';
import { formatDistanceToNow, parseISO, isToday, isYesterday } from 'date-fns';
import { format } from 'date-fns';


const Notifications = () => {
    const [activeTab, setActiveTab] = useState('all');
    const notifications = [
        { id: 1, user: 'Akeel Bakkour', message: 'He needs a big smile.', category: 'Project', date: 'Today', time: '2024-01-28T09:30:00Z' },
        { id: 2, user: 'Akeel Bakkour', message: 'He needs a big smile.', category: 'signatures', date: 'Today', time: '2024-01-28T09:30:00Z' },
        { id: 3, user: 'Akeel Bakkour', message: 'He needs a big smile.', category: 'signatures', date: 'Today', time: '2024-01-27T09:30:00Z' },
        { id: 4, user: 'Akeel Bakkour', message: 'He needs a big smile.', category: 'user', date: 'Today', time: '2024-01-27T09:30:00Z' },
        { id: 5, user: 'Akeel Bakkour', message: 'He needs a big smile.', category: 'user', date: 'Today', time: '2024-01-29T09:30:00Z' },


    ];

    const getTimeAgo = (time) => {
        return formatDistanceToNow(parseISO(time), { addSuffix: true });
    };

    const getTime = (time) => {
        try {
            const date = parseISO(time);
            if (isNaN(date.getTime())) {
                throw new Error('Invalid date');
            }
            return format(date, 'h:mm aa');
        } catch (error) {
            console.error('Error formatting time: ', error);
            return 'Invalid time';
        }
    };

    const getNotificationCount = (category) => {
        const todayCount = notifications.filter(notification => isToday(parseISO(notification.time)) && notification.category.toLowerCase() === category.toLowerCase()).length;
        const yesterdayCount = notifications.filter(notification => isYesterday(parseISO(notification.time)) && notification.category.toLowerCase() === category.toLowerCase()).length;
        return todayCount + yesterdayCount;
    };

    const filterNotifications = (category) => {
        setActiveTab(category);
    };

    const groupedNotifications = {
        today: notifications.filter(notification => isToday(parseISO(notification.time))),
        yesterday: notifications.filter(notification => isYesterday(parseISO(notification.time))),
    };

    const renderGroupedNotifications = (group, title) => {
        if (group.length === 0) {
            return (
                <div>
                    <div className="notification-date-title">{title}</div>
                    <div className="no-notification-message">No notifications for {title.toLowerCase()}</div>
                </div>
            );
        }
        return (
            <div>
                <div className="notification-date-title">{title}</div>
                {group.map((notification, index) => (
                    <div key={notification.id} className={`notification-item-z ${index === group.length - 1 ? 'last-item' : ''} ${activeTab === 'all' || notification.category.toLowerCase() === activeTab ? '' : 'hidden'}`}>
                        <img src={avatar} alt="Avatar" className="avatar" />
                        <div className="notification-content-z">
                            <div className="notification-user">{notification.user}</div>
                            <div className="notification-message">{notification.message}</div>
                            <div className="notification-meta">
                                <span className='dot-befor'> </span>
                                <span className="notification-time">{getTimeAgo(notification.time)}</span>
                                <span className={`notification-category ${notification.category.toLowerCase()}`}>{notification.category}</span>
                            </div>
                        </div>
                        <span className="notification-time">{getTime(notification.time)}</span>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className='activity-page'>
            <div className="notification-container">
                <h2>Notification</h2>
                <div className="notification-tabs">
                    <span className={activeTab === 'all' ? 'tab active' : 'tab'} onClick={() => filterNotifications('all')}>
                        All
                        <span className="notification-count">{groupedNotifications.yesterday.length + groupedNotifications.today.length}</span>
                    </span>
                    <span className={activeTab === 'project' ? 'tab active' : 'tab'} onClick={() => filterNotifications('project')}>
                        Project
                        <span className="notification-count">{getNotificationCount('Project')}</span>
                    </span>
                    <span className={activeTab === 'signatures' ? 'tab active' : 'tab'} onClick={() => filterNotifications('signatures')}>
                        Signatures
                        <span className="notification-count">{getNotificationCount('Signatures')}</span>
                    </span>
                    <span className={activeTab === 'user' ? 'tab active' : 'tab'} onClick={() => filterNotifications('user')}>
                        User
                        <span className="notification-count">{getNotificationCount('User')}</span>
                    </span>
                </div>
                <div className="notification-list-z">
                    {renderGroupedNotifications(groupedNotifications.today, 'Today')}
                    {renderGroupedNotifications(groupedNotifications.yesterday, 'Yesterday')}
                </div>
            </div>
        </div>
    );
};

export default Notifications;
