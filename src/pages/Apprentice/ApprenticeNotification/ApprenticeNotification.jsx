import React, { useState } from 'react';
import avatar from '../../../images/Ellipse180.png';
import { formatDistanceToNow, parseISO, isToday, isYesterday } from 'date-fns';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import './ApprenticeNotification.css'
function ApprenticeNotification() {
    const [activeTab, setActiveTab] = useState('all');
    const notifications = [
        { id: 1, user: 'عقيل بكور', message: 'انه يحتاج الى ابتسامة كبيرة. موريس يتملق النخبة، يحتاج إلى نبته بولفينار، يحتاج إلى ابتسامة كبيرة. موريس يتملق النخبة، يحتاج إلى ابتسامة كبيرة. موريس يتملق النخبة.', category: 'apprentice', date: 'Today', time: '2024-06-06T09:30:00Z' },
        { id: 2, user: 'عقيل بكور', message: 'انه يحتاج الى ابتسامة كبيرة. موريس يتملق النخبة، يحتاج إلى نبته بولفينار، يحتاج إلى ابتسامة كبيرة. موريس يتملق النخبة، يحتاج إلى ابتسامة كبيرة. موريس يتملق النخبة.', category: 'coordinator', date: 'Today', time: '2024-06-06T09:30:00Z' },
        { id: 3, user: 'عقيل بكور', message: 'انه يحتاج الى ابتسامة كبيرة. موريس يتملق النخبة، يحتاج إلى نبته بولفينار، يحتاج إلى ابتسامة كبيرة. موريس يتملق النخبة، يحتاج إلى ابتسامة كبيرة. موريس يتملق النخبة.', category: 'coordinator', date: 'Today', time: '2024-06-06T09:30:00Z' },
        { id: 4, user: 'عقيل بكور', message: 'انه يحتاج الى ابتسامة كبيرة. موريس يتملق النخبة، يحتاج إلى نبته بولفينار، يحتاج إلى ابتسامة كبيرة. موريس يتملق النخبة، يحتاج إلى ابتسامة كبيرة. موريس يتملق النخبة.', category: 'apprentice', date: 'Today', time: '2024-06-07T09:30:00Z' },
        { id: 5, user: 'عقيل بكور', message: 'انه يحتاج الى ابتسامة كبيرة. موريس يتملق النخبة، يحتاج إلى نبته بولفينار، يحتاج إلى ابتسامة كبيرة. موريس يتملق النخبة، يحتاج إلى ابتسامة كبيرة. موريس يتملق النخبة.', category: 'apprentice', date: 'Today', time: '2024-06-07T09:30:00Z' },


    ];

    const getTimeAgo = (time) => {
        return formatDistanceToNow(parseISO(time), { locale: ar, addSuffix: true });
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
        console.log("Clicked category:", category);
        setActiveTab(category.toLowerCase());
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
                    <div className="no-notification-message">لا يوجد اشعارات لـ {title.toLowerCase()}</div>
                </div>
            );
        }
        console.log(activeTab);
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
                                <span className={`notification-category ${notification.category.toLowerCase()}`}>{notification.category === 'apprentice' && 'المدرب'} {notification.category === 'coordinator' && 'منسق التدريب'}</span>
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
                <h2>الإشعارات</h2>
                <div className="notification-tabs">
                    <span className={activeTab === 'all' ? 'tab active' : 'tab'} onClick={() => filterNotifications('all')}>
                        الجميع
                        <span className="notification-count">{groupedNotifications.yesterday.length + groupedNotifications.today.length}</span>
                    </span>
                    <span className={activeTab === 'apprentice' ? 'tab active' : 'tab'} onClick={() => filterNotifications('apprentice')}>
                        المدرب
                        <span className="notification-count">{getNotificationCount('apprentice')}</span>
                    </span>
                    <span className={activeTab === 'coordinator' ? 'tab active' : 'tab'} onClick={() => filterNotifications('coordinator')}>
                        منسق التدريب
                        <span className="notification-count">{getNotificationCount('coordinator')}</span>
                    </span>

                </div>
                <div className="notification-list-z">
                    {renderGroupedNotifications(groupedNotifications.today, 'اليوم')}
                    {renderGroupedNotifications(groupedNotifications.yesterday, 'يوم أمس')}
                </div>
            </div>
        </div>
    );
}

export default ApprenticeNotification