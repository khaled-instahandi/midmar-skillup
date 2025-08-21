import React from 'react';
import './Breadcrumbs.css';

// Icons import - you would replace these with your actual icons
import SubActivitiesIcon from '../../images/sub_activities.svg';
import UpdatesIcon from '../../images/updates.svg';
import DetailsIcon from '../../images/details.svg';
import { ReactComponent as FlashIcon } from '../../images/flash.svg';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    const isButtonActive = (buttonPath) => {
        return location.pathname.includes(buttonPath);
    };

    return (
        <div className="breadcrumbs-container">
            <div className="breadcrumbs">
                {pathSegments.map((segment, index) => (
                    <React.Fragment key={index}>
                        {index === 0 && <FlashIcon />}
                        <Link to={`/${pathSegments.slice(0, index + 1).join('/')}`} className="breadcrumb">
                            {segment}
                        </Link>
                        {index < pathSegments.length - 1 && <span> / </span>}
                    </React.Fragment>
                ))}

            </div>
            <div className="breadcrumb-actions">
                <Link to={'/dashboard/activity/sub-activities-table'} className={`breadcrumb-btn ${isButtonActive('sub-activities-table') ? 'active' : ''}`}>
                    <img src={SubActivitiesIcon} alt="Sub Activities" />
                    <span>Sub Activities</span>
                </Link>
                <Link to={'/dashboard/activity/updates-table'} className={`breadcrumb-btn ${isButtonActive('updates') ? 'active' : ''}`}>
                    <img src={UpdatesIcon} alt="Updates" />
                    <span>Updates</span>
                </Link>
                <Link to={'/dashboard/activity/details-activity'} className={`breadcrumb-btn ${isButtonActive('details') ? 'active' : ''}`}>
                    <img src={DetailsIcon} alt="Details" />
                    <span>Details</span>
                </Link>
            </div>
        </div>
    );
};

export default Breadcrumbs;
