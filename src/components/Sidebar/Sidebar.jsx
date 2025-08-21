import React from "react";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../images/home-2.svg";
import { ReactComponent as FlashIcon } from "../../images/flash-icon.svg";
import { ReactComponent as UserIcon } from "../../images/user-octagon.svg";
import { ReactComponent as ClipIcon } from "../../images/clipboard-text.svg";
import { ReactComponent as EditIcon } from "../../images/edit-icon.svg";
import { ReactComponent as EmojiIcon } from "../../images/emoji-sad.svg";
import { ReactComponent as MenuIcon } from "../../images/menu-board.svg";
import { ReactComponent as SettingIcon } from "../../images/setting-2.svg";
import { ReactComponent as NoIcon } from "../../images/notification-icon.svg";
import { ReactComponent as ActivitiesIcon } from "../../images/data-2.svg";
import { ReactComponent as CelanderIcon } from "../../images/celander.svg";
import { ReactComponent as CoachIcon } from "../../images/Vectorcoach-icon.svg";
import { ReactComponent as ExamIcon } from "../../images/Vectorexam-icon.svg";
import { ReactComponent as BriefcaseIcon } from "../../images/briefcase.svg";
import { ReactComponent as BoxIcon } from "../../images/box-icon.svg";
import { ReactComponent as SettingsIcon } from "../../images/setting-2.svg";
import { ReactComponent as UsersIcon } from "../../images/user-octagon.svg";
import { BookIcon } from "lucide-react";

const Sidebar = ({ isOpen, role }) => {
  const location = useLocation();
  const checkActive = (path) => {
    const isDashboard =
      path === "/dashboard-coordinator" || path === "/dashboard";
    const isExactPath = location.pathname === path;
    const isParentPath =
      location.pathname.startsWith(path) && location.pathname !== path;

    return isDashboard
      ? isExactPath || isParentPath
      : isExactPath || isParentPath;
  };

  return (
    <nav className={`sidebar  ${isOpen ? "hidden" : "open"}`}>
      <div className="menu">
        <ul className="menu-items">
          <li className="menu-item-top ">
            {role === "apprentice" || role === "coach" ? (
              <span>الصفحة الرئيسية</span>
            ) : (
              <span>Main pages</span>
            )}
          </li>
          {role === "admin" && (
            <>
              <li
                className={`menu-item ${
                  checkActive("/dashboard") ? "selected" : ""
                }`}
              >
                <Link to="/dashboard" className="menu-link">
                  <HomeIcon className="icon" />
                  <span>Home</span>
                </Link>
              </li>

              <li
                className={`menu-item ${
                  checkActive("/project") ? "selected" : ""
                }`}
              >
                <Link to="/project" className="menu-link">
                  <FlashIcon className="icon" />
                  <span>Project</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/profile") ? "selected" : ""
                }`}
              >
                <Link to="/profile" className="menu-link">
                  <UserIcon className="icon" />
                  <span>Profile</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/policies") ? "selected" : ""
                }`}
              >
                <Link to="/policies" className="menu-link">
                  <ClipIcon className="icon icon-long" />

                  <span>Policies and procedures</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/signatures") ? "selected" : ""
                }`}
              >
                <Link to="/signatures" className="menu-link">
                  <EditIcon className="icon" />

                  <span>Signatures</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/complaints") ? "selected" : ""
                }`}
              >
                <Link to="/complaints" className="menu-link">
                  <EmojiIcon className="icon" />

                  <span>Complaints</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/leave") ? "selected" : ""
                }`}
              >
                <Link to="/leave" className="menu-link">
                  <MenuIcon className="icon" />
                  <span>Leave</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/panel") ? "selected" : ""
                }`}
              >
                <Link to="/panel" className="menu-link">
                  <SettingIcon className="icon" />

                  <span>My panel</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/notification") ? "selected" : ""
                }`}
              >
                <Link to="/notification" className="menu-link">
                  <NoIcon className="icon" />

                  <span>Notification</span>
                </Link>
              </li>
            </>
          )}

          {role === "coordinator" && (
            <>
              <li
                className={`menu-item ${
                  checkActive("/dashboard-coordinator") ? "selected" : ""
                }`}
              >
                <Link to="/dashboard-coordinator" className="menu-link">
                  <HomeIcon className="icon" />
                  <span>Home</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/activities-coordinator") ? "selected" : ""
                }`}
              >
                <Link to="/activities-coordinator " className="menu-link">
                  <ActivitiesIcon className="icon" />

                  <span>Activities</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/complaints-coordinator") ? "selected" : ""
                }`}
              >
                <Link to="/complaints-coordinator" className="menu-link">
                  <EmojiIcon className="icon" />

                  <span>Complaints</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/leave-coordinator") ? "selected" : ""
                }`}
              >
                <Link to="/leave-coordinator" className="menu-link">
                  <MenuIcon className="icon" />
                  <span>Leave</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/panel-coordinator") ? "selected" : ""
                }`}
              >
                <Link to="/panel-coordinator" className="menu-link">
                  <SettingIcon className="icon" />

                  <span>My panel</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/notification-coordinator") ? "selected" : ""
                }`}
              >
                <Link to="/notification-coordinator" className="menu-link">
                  <NoIcon className="icon" />

                  <span>Notification</span>
                </Link>
              </li>
            </>
          )}

          {role === "apprentice" && (
            <>
              <li
                className={`menu-item ${
                  checkActive("/dashboard-apprentice") ? "selected" : ""
                }`}
              >
                <Link to="/dashboard-apprentice" className="menu-link">
                  <HomeIcon className="icon" />
                  <span>الرئيسية</span>
                </Link>
              </li>

              <li
                className={`menu-item ${
                  checkActive("/activities-apprentice") ? "selected" : ""
                }`}
              >
                <Link to="/activities-apprentice" className="menu-link">
                  <ActivitiesIcon className="icon" />
                  <span>التدريبات</span>
                </Link>
              </li>

              <li
                className={`menu-item ${
                  checkActive("/complaints-apprentice") ? "selected" : ""
                }`}
              >
                <Link to="/complaints-apprentice" className="menu-link">
                  <EmojiIcon className="icon" />

                  <span>الشكاوي</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/calendar-apprentice") ? "selected" : ""
                }`}
              >
                <Link to="/calendar-apprentice" className="menu-link">
                  <CelanderIcon className="icon" />
                  <span>التقويم</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/panel-apprentice") ? "selected" : ""
                }`}
              >
                <Link to="/panel-apprentice" className="menu-link">
                  <SettingIcon className="icon" />

                  <span>لوحتي</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/notification-apprentice") ? "selected" : ""
                }`}
              >
                <Link to="/notification-apprentice" className="menu-link">
                  <NoIcon className="icon" />

                  <span>الاشعارات</span>
                </Link>
              </li>
            </>
          )}

          {role === "coach" && (
            <>
              <li
                className={`menu-item ${
                  checkActive("/coach/interactive-panel") ? "selected" : ""
                }`}
              >
                <Link to="/coach/interactive-panel" className="menu-link">
                  <HomeIcon className="icon" />
                  <span>اللوحة التفاعلية</span>
                </Link>
              </li>

              <li
                className={`menu-item ${
                  checkActive("/coach-dashboard/activities") ? "selected" : ""
                }`}
              >
                <Link to="/coach-dashboard/activities" className="menu-link">
                  <ActivitiesIcon className="icon" />
                  <span>التدريبات</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/coach-page/attendance-schedule")
                    ? "selected"
                    : ""
                }`}
              >
                <Link
                  to="/coach-page/attendance-schedule"
                  className="menu-link"
                >
                  <CoachIcon className="icon" />
                  <span>المدرب</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/coach/test") ? "selected" : ""
                }`}
              >
                <Link to="/coach/test" className="menu-link">
                  <ExamIcon className="icon " />

                  <span>الاختبارات</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/coach-training-vacancies") ? "selected" : ""
                }`}
              >
                <Link to="/coach-training-vacancies" className="menu-link">
                  <BriefcaseIcon className="icon" />

                  <span>الشواغر</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/coach-requests") ? "selected" : ""
                }`}
              >
                <Link to="/coach-requests" className="menu-link">
                  <BoxIcon className="icon" />

                  <span>متابعة الطلبات</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/coach-complaint") ? "selected" : ""
                }`}
              >
                <Link to="/coach-complaint" className="menu-link">
                  <EmojiIcon className="icon" />
                  <span>الشكاوي</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/coach-panel") ? "selected" : ""
                }`}
              >
                <Link to="/coach-panel" className="menu-link">
                  <SettingIcon className="icon" />

                  <span>لوحتي</span>
                </Link>
              </li>
              <li className={`menu-item ${checkActive("#") ? "selected" : ""}`}>
                <Link to="#" className="menu-link">
                  <NoIcon className="icon" />

                  <span>الإشعارات</span>
                </Link>
              </li>
            </>
          )}

          {role === "system-admin" && (
            <>
              <li
                className={`menu-item ${
                  checkActive("/dashboard-system-admin") ? "selected" : ""
                }`}
              >
                <Link to="/dashboard-system-admin" className="menu-link">
                  <HomeIcon className="icon" />
                  <span>Home</span>
                </Link>
              </li>

              <li
                className={`menu-item ${
                  checkActive("/project") ? "selected" : ""
                }`}
              >
                <Link to="/project" className="menu-link">
                  <FlashIcon className="icon" />
                  <span>Project</span>
                </Link>
              </li>

              {/* donors */}
              <li
                className={`menu-item ${
                  checkActive("/dashboard-system-admin/donors")
                    ? "selected"
                    : ""
                }`}
              >
                <Link to="/dashboard-system-admin/donors" className="menu-link">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="20"
                      viewBox="0 0 24 20"
                      fill="none"
                    >
                      <path
                        d="M6.61035 7.27588C11.9132 7.60224 15.716 11.3728 15.8799 11.5376C16.4099 11.9724 16.7552 12.6161 16.8525 13.3159L19.6338 12.5972L19.6895 12.5825L19.6934 12.5864C20.8714 12.3457 21.7326 12.7408 22.2939 13.3384C22.8585 13.9394 23.1191 14.744 23.0996 15.3003C23.0573 16.4899 22.343 17.5504 21.21 17.9341C20.9707 18.0594 17.7113 19.6558 12.6367 19.6558C10.3552 19.6557 7.70808 19.3329 4.80176 18.4106H4.7998C2.46428 17.6269 0.9005 15.4495 0.900391 12.9897C0.900391 9.83985 3.45834 7.27614 6.60352 7.27588H6.61035ZM6.56641 8.47314C4.11577 8.47722 2.09766 10.5013 2.09766 12.9888C2.09778 14.9308 3.33241 16.651 5.16992 17.2681H5.1709C9.66878 18.6965 13.5472 18.5947 16.3076 18.1323C17.6877 17.9011 18.7887 17.5803 19.5479 17.3149C19.9272 17.1823 20.2211 17.0634 20.4219 16.9771C20.5223 16.9339 20.5996 16.8982 20.6523 16.8735C20.6785 16.8613 20.6988 16.8521 20.7129 16.8452C20.7198 16.8419 20.7256 16.8393 20.7295 16.8374C20.7314 16.8364 20.7333 16.835 20.7344 16.8345L20.7354 16.8335L20.7422 16.8306L20.75 16.8276C21.4485 16.5881 21.84 16.0023 21.8945 15.3325L21.8975 15.2876C21.9157 14.9848 21.7712 14.5216 21.4443 14.1743C21.1229 13.833 20.6251 13.6038 19.9268 13.7583L19.9258 13.7573L16.7441 14.5815C16.5278 15.2612 16.0661 15.8435 15.4336 16.2026C14.4054 16.7872 13.1033 16.67 12.1953 15.9136L9.94141 14.0356C9.0481 13.2912 7.97377 12.7733 6.83594 12.5376C6.51155 12.4703 6.30425 12.1521 6.37012 11.8286C6.43631 11.5037 6.75487 11.297 7.0791 11.3628L7.32812 11.4185C8.56563 11.715 9.72977 12.2978 10.709 13.1138L12.9629 14.9917C13.4908 15.431 14.2459 15.4972 14.8418 15.1597C15.3251 14.885 15.6295 14.4101 15.6768 13.854C15.724 13.2977 15.5036 12.7773 15.0723 12.4243L15.0664 12.4185C14.984 12.3392 11.3671 8.76954 6.56641 8.47314Z"
                        fill="#5A5A5A"
                        stroke="#5A5A5A"
                        stroke-width="0.2"
                      />
                      <path
                        d="M16.1836 0.901367C16.8579 0.929579 17.4797 1.21943 17.9346 1.7168L18.0527 1.8457L18.1709 1.7168C18.6258 1.21926 19.2492 0.92846 19.9229 0.901367H19.9248C20.6636 0.884814 21.4132 1.15953 21.9834 1.69043C22.5099 2.17987 23.1149 3.16653 23.0996 4.35059C23.0841 5.54927 22.4707 6.68157 21.2988 7.71582C20.9156 8.05328 19.6245 9.17676 18.0527 9.17676C16.6315 9.17666 15.4621 8.24895 15.1602 8.00977C13.7926 6.92401 13.0584 5.72453 13.0078 4.44238C12.9605 3.21898 13.577 2.1973 14.123 1.69043L14.3447 1.50293C14.8809 1.09348 15.5398 0.877737 16.1826 0.901367H16.1836ZM16.3193 2.12207C15.9709 2.05771 15.507 2.12495 14.9492 2.56152L14.9326 2.57617C14.6332 2.814 14.1428 3.52559 14.2061 4.39453C14.2759 5.35118 14.8699 6.13624 15.4834 6.70117C16.0916 7.26126 16.7044 7.59223 16.8027 7.64941C17.5811 8.08716 18.519 8.08738 19.3057 7.64551L19.5537 7.5C19.862 7.31067 20.3306 6.99266 20.7686 6.56445C21.3536 5.9924 21.8724 5.2353 21.8994 4.33496C21.9243 3.49055 21.4479 2.8164 21.167 2.57227C20.6553 2.12782 20.1879 2.05663 19.8223 2.12207C19.4506 2.18866 19.1731 2.39862 19.0557 2.52734L18.4951 3.1416C18.2664 3.39297 17.838 3.39216 17.6094 3.14062L17.0479 2.52637C16.928 2.39492 16.6757 2.18797 16.3193 2.12207Z"
                        fill="#5A5A5A"
                        stroke="#5A5A5A"
                        stroke-width="0.2"
                      />
                    </svg>
                  </div>
                  <span>Donors</span>
                </Link>
              </li>
              {/* courses */}

              <li
                className={`menu-item ${
                  checkActive("/dashboard-system-admin/courses")
                    ? "selected"
                    : ""
                }`}
              >
                <Link
                  to="/dashboard-system-admin/courses"
                  className="menu-link"
                >
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2982_9621)">
                        <path
                          d="M14.925 2.31809C14.8328 1.92183 14.6609 1.54847 14.4199 1.22071C14.1789 0.89295 13.8737 0.617641 13.5229 0.411527C13.1721 0.205412 12.7831 0.0727997 12.3795 0.0217537C11.9758 -0.0292923 11.566 0.00229504 11.175 0.114595L9.882 0.484345C9.55446 0.578485 9.25277 0.746259 9 0.974845C8.74723 0.746259 8.44554 0.578485 8.118 0.484345L6.825 0.114595C6.4342 0.00288034 6.02478 -0.0282567 5.62158 0.0230736C5.21838 0.0744039 4.82982 0.207131 4.47947 0.413198C4.12913 0.619266 3.82432 0.894376 3.58353 1.22183C3.34274 1.54928 3.17101 1.92225 3.07875 2.31809C2.2161 2.47504 1.43572 2.92931 0.873249 3.60194C0.310783 4.27457 0.00179699 5.12303 0 5.99985L0 11.2498C0.00119089 12.244 0.396661 13.1972 1.09966 13.9002C1.80267 14.6032 2.7558 14.9987 3.75 14.9998H8.25V16.4998H6C5.80109 16.4998 5.61032 16.5789 5.46967 16.7195C5.32902 16.8602 5.25 17.0509 5.25 17.2498C5.25 17.4488 5.32902 17.6395 5.46967 17.7802C5.61032 17.9208 5.80109 17.9998 6 17.9998H12C12.1989 17.9998 12.3897 17.9208 12.5303 17.7802C12.671 17.6395 12.75 17.4488 12.75 17.2498C12.75 17.0509 12.671 16.8602 12.5303 16.7195C12.3897 16.5789 12.1989 16.4998 12 16.4998H9.75V14.9998H14.25C15.2442 14.9987 16.1973 14.6032 16.9003 13.9002C17.6033 13.1972 17.9988 12.244 18 11.2498V5.99985C17.9984 5.12357 17.6899 4.27554 17.1282 3.60298C16.5665 2.93043 15.787 2.47582 14.925 2.31809ZM9.75 2.64809C9.75007 2.48521 9.80317 2.32677 9.90127 2.19673C9.99937 2.0667 10.1371 1.97214 10.2938 1.92734L11.5875 1.55759C11.8108 1.49374 12.0458 1.48258 12.2741 1.52502C12.5024 1.56745 12.7177 1.66232 12.9032 1.80213C13.0886 1.94195 13.239 2.1229 13.3425 2.33074C13.4461 2.53858 13.5 2.76763 13.5 2.99984V5.95334C13.499 6.27881 13.3924 6.59516 13.1963 6.85493C13.0002 7.11471 12.7252 7.30389 12.4125 7.3941L9.75 8.1546V2.64809ZM5.1 1.79984C5.28505 1.66054 5.49994 1.56614 5.72771 1.52409C5.95549 1.48205 6.18992 1.49352 6.4125 1.55759L7.70625 1.92734C7.86286 1.97214 8.00063 2.0667 8.09873 2.19673C8.19683 2.32677 8.24993 2.48521 8.25 2.64809V8.1546L5.5875 7.3941C5.27478 7.30389 4.99975 7.11471 4.80367 6.85493C4.60759 6.59516 4.50104 6.27881 4.5 5.95334V2.99984C4.49924 2.76684 4.55312 2.53691 4.65732 2.32851C4.76152 2.1201 4.91314 1.93904 5.1 1.79984ZM16.5 11.2498C16.5 11.8466 16.2629 12.4189 15.841 12.8408C15.419 13.2628 14.8467 13.4998 14.25 13.4998H3.75C3.15326 13.4998 2.58097 13.2628 2.15901 12.8408C1.73705 12.4189 1.5 11.8466 1.5 11.2498V5.99985C1.50192 5.53615 1.64706 5.08437 1.91557 4.70632C2.18407 4.32827 2.56282 4.04241 3 3.88784V5.95334C3.00184 6.6046 3.21481 7.2377 3.60697 7.75765C3.99913 8.2776 4.54933 8.65635 5.175 8.8371L7.76325 9.57734C8.57214 9.80792 9.42936 9.80792 10.2382 9.57734L12.8265 8.8371C13.4519 8.65608 14.0018 8.27721 14.3936 7.75728C14.7855 7.23736 14.9983 6.60441 15 5.95334V3.88784C15.4372 4.04241 15.8159 4.32827 16.0844 4.70632C16.3529 5.08437 16.4981 5.53615 16.5 5.99985V11.2498Z"
                          fill="#5A5A5A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2982_9621">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span>Courses</span>
                </Link>
              </li>
              {/* dashboard-system-admin/purchase-requests */}
              <li
                className={`menu-item ${
                  checkActive("/dashboard-system-admin/purchase-requests")
                    ? "selected"
                    : ""
                }`}
              >
                <Link
                  to="/dashboard-system-admin/purchase-requests"
                  className="menu-link"
                >
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.5 8.63007C16.3015 8.62876 16.1115 8.54932 15.9711 8.40895C15.8307 8.26858 15.7513 8.07858 15.75 7.88007V6.50007C15.7486 5.97679 15.6385 5.45951 15.4268 4.98097C15.2151 4.50244 14.9063 4.07308 14.52 3.72007C14.1327 3.36653 13.675 3.09907 13.1768 2.93533C12.6787 2.77158 12.1515 2.71525 11.63 2.77007C10.6954 2.92533 9.84506 3.40385 9.22731 4.12212C8.60956 4.84039 8.26367 5.75279 8.25 6.70007V7.67007C8.24869 7.86858 8.16925 8.05858 8.02888 8.19895C7.88851 8.33932 7.69851 8.41876 7.5 8.42007C7.30149 8.41876 7.11149 8.33932 6.97112 8.19895C6.83075 8.05858 6.75131 7.86858 6.75 7.67007V6.69007C6.76558 5.3703 7.2515 4.09939 8.12037 3.10586C8.98925 2.11234 10.1841 1.46139 11.49 1.27007C12.2199 1.19511 12.9573 1.27579 13.6537 1.50677C14.3501 1.73775 14.9896 2.11379 15.53 2.61007C16.0712 3.10338 16.5037 3.70408 16.7999 4.37384C17.096 5.04361 17.2493 5.76775 17.25 6.50007V7.88007C17.2487 8.07858 17.1693 8.26858 17.0289 8.40895C16.8885 8.54932 16.6985 8.62876 16.5 8.63007Z"
                        fill="#5A5A5A"
                      />
                      <path
                        d="M14.996 22.75H8.99601C4.37601 22.75 3.51601 20.6 3.29601 18.51L2.55001 12.52C2.42337 11.8606 2.43811 11.1817 2.59325 10.5284C2.7484 9.87508 3.04041 9.26211 3.45001 8.73C4.35001 7.73 5.84001 7.25 7.99601 7.25H15.996C18.166 7.25 19.656 7.74 20.546 8.73C20.9523 9.25999 21.2424 9.86961 21.3975 10.5192C21.5525 11.1687 21.5691 11.8436 21.446 12.5L20.696 18.51C20.48 20.6 19.62 22.75 14.996 22.75ZM7.99601 8.75C6.30601 8.75 5.14601 9.08 4.55601 9.74C4.28925 10.1133 4.10494 10.5391 4.01528 10.9891C3.92563 11.4391 3.9327 11.903 4.03601 12.35L4.78601 18.34C4.95601 19.94 5.39601 21.26 8.99601 21.26H14.996C18.596 21.26 19.036 19.95 19.206 18.36L19.956 12.35C20.0575 11.9045 20.0636 11.4425 19.974 10.9944C19.8843 10.5463 19.701 10.1223 19.436 9.75C18.846 9.08 17.686 8.75 15.996 8.75H7.99601Z"
                        fill="#5A5A5A"
                      />
                      <path
                        d="M15.4202 13.1499C15.222 13.1518 15.0276 13.0949 14.8619 12.9862C14.6961 12.8775 14.5664 12.7221 14.4892 12.5395C14.412 12.357 14.3907 12.1556 14.4282 11.961C14.4656 11.7663 14.5601 11.5872 14.6995 11.4464C14.839 11.3055 15.0171 11.2093 15.2114 11.1699C15.4056 11.1305 15.6072 11.1497 15.7905 11.2251C15.9738 11.3004 16.1306 11.4286 16.2409 11.5933C16.3512 11.7579 16.4101 11.9516 16.4102 12.1499C16.4109 12.2806 16.386 12.4101 16.3366 12.5312C16.2873 12.6522 16.2145 12.7623 16.1226 12.8552C16.0306 12.9481 15.9212 13.0219 15.8007 13.0725C15.6802 13.123 15.5509 13.1493 15.4202 13.1499Z"
                        fill="#5A5A5A"
                      />
                      <path
                        d="M8.42016 13.1499C8.22196 13.1518 8.02765 13.0949 7.86189 12.9862C7.69613 12.8775 7.5664 12.7221 7.48918 12.5395C7.41195 12.357 7.39072 12.1556 7.42817 11.961C7.46562 11.7663 7.56006 11.5872 7.69951 11.4464C7.83895 11.3055 8.01711 11.2093 8.21136 11.1699C8.40561 11.1305 8.60719 11.1497 8.79049 11.2251C8.9738 11.3004 9.13058 11.4286 9.24091 11.5933C9.35124 11.7579 9.41015 11.9516 9.41016 12.1499C9.41095 12.2806 9.38595 12.4101 9.3366 12.5312C9.28725 12.6522 9.21452 12.7623 9.12256 12.8552C9.03061 12.9481 8.92123 13.0219 8.80071 13.0725C8.68018 13.123 8.55086 13.1493 8.42016 13.1499Z"
                        fill="#5A5A5A"
                      />
                    </svg>
                  </div>
                  <span>Purchase Requests</span>
                </Link>
              </li>
              {/* user profiles */}
              <li
                className={`menu-item ${
                  checkActive("/dashboard-system-admin/user-profiles")
                    ? "selected"
                    : ""
                }`}
              >
                <Link
                  to="/dashboard-system-admin/user-profiles"
                  className="menu-link"
                >
                  <UsersIcon className="icon" />
                  <span>User Profiles</span>
                </Link>
              </li>
              {/* users */}
              <li
                className={`menu-item ${
                  checkActive("/dashboard-system-admin/users") ? "selected" : ""
                }`}
              >
                <Link to="/dashboard-system-admin/users" className="menu-link">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9.16039 11.62H9.08039C9.02081 11.61 8.95997 11.61 8.90039 11.62C7.54895 11.5819 6.26681 11.0134 5.33124 10.0374C4.39566 9.06139 3.88185 7.75637 3.9009 6.40452C3.91996 5.05268 4.47035 3.76266 5.43305 2.81342C6.39576 1.86419 7.69341 1.33203 9.04539 1.33203C10.3974 1.33203 11.695 1.86419 12.6577 2.81342C13.6204 3.76266 14.1708 5.05268 14.1899 6.40452C14.2089 7.75637 13.6951 9.06139 12.7595 10.0374C11.824 11.0134 10.5418 11.5819 9.19039 11.62H9.16039ZM9.00039 2.74999C8.03143 2.74465 7.09933 3.12108 6.40582 3.7978C5.71231 4.47453 5.31316 5.39712 5.29476 6.36593C5.27635 7.33473 5.64017 8.27181 6.30749 8.97439C6.9748 9.67697 7.89192 10.0885 8.86039 10.12C8.96681 10.1097 9.07397 10.1097 9.18039 10.12C10.1431 10.0752 11.05 9.65518 11.7068 8.94998C12.3637 8.24477 12.7183 7.31041 12.6948 6.34696C12.6713 5.38351 12.2714 4.46757 11.5809 3.79527C10.8904 3.12297 9.96413 2.74776 9.00039 2.74999Z"
                        fill="#5A5A5A"
                      />
                      <path
                        d="M16.5403 11.75C16.51 11.7516 16.4796 11.7482 16.4503 11.74C16.2477 11.7637 16.0437 11.7084 15.8809 11.5854C15.718 11.4625 15.6089 11.2814 15.5763 11.08C15.5621 10.9844 15.567 10.887 15.5907 10.7933C15.6145 10.6997 15.6566 10.6117 15.7147 10.5344C15.7727 10.4572 15.8456 10.3923 15.9289 10.3435C16.0123 10.2946 16.1046 10.2629 16.2003 10.25C16.3203 10.24 16.4503 10.24 16.5603 10.24C17.2765 10.2013 17.9492 9.88467 18.4353 9.35738C18.9215 8.8301 19.1825 8.13388 19.163 7.41697C19.1434 6.70006 18.8448 6.01911 18.3307 5.51911C17.8165 5.0191 17.1275 4.73956 16.4103 4.74C16.3123 4.74119 16.2151 4.72294 16.1242 4.68629C16.0333 4.64965 15.9506 4.59535 15.8809 4.52653C15.8111 4.4577 15.7557 4.37573 15.7179 4.28535C15.68 4.19498 15.6605 4.09799 15.6603 4C15.6616 3.80149 15.7411 3.61149 15.8814 3.47112C16.0218 3.33075 16.2118 3.25131 16.4103 3.25C17.5368 3.25238 18.6164 3.70091 19.4129 4.49742C20.2094 5.29394 20.6579 6.37356 20.6603 7.5C20.6634 8.60066 20.2384 9.65938 19.4752 10.4525C18.7119 11.2455 17.6703 11.7108 16.5703 11.75H16.5403Z"
                        fill="#5A5A5A"
                      />
                      <path
                        d="M9.16961 22.5499C7.25577 22.5856 5.37278 22.0645 3.74961 21.0499C3.12024 20.6883 2.59288 20.173 2.21687 19.5522C1.84085 18.9313 1.62848 18.2252 1.59961 17.4999C1.6293 16.7722 1.84183 16.0636 2.21759 15.4397C2.59336 14.8158 3.12024 14.2965 3.74961 13.9299C5.38879 12.9532 7.26147 12.4375 9.16961 12.4375C11.0778 12.4375 12.9504 12.9532 14.5896 13.9299C15.2176 14.2932 15.7438 14.8089 16.1196 15.4294C16.4954 16.0499 16.7086 16.7552 16.7396 17.4799C16.7099 18.2077 16.4974 18.9162 16.1216 19.5402C15.7459 20.1641 15.219 20.6833 14.5896 21.0499C12.9659 22.0634 11.0833 22.5844 9.16961 22.5499ZM4.57961 15.1899C4.15868 15.4221 3.80266 15.7561 3.54412 16.1614C3.28558 16.5667 3.13275 17.0303 3.09961 17.5099C3.13536 17.9862 3.28945 18.446 3.5479 18.8476C3.80634 19.2493 4.16097 19.58 4.57961 19.8099C5.97027 20.6299 7.5552 21.0624 9.16961 21.0624C10.784 21.0624 12.3689 20.6299 13.7596 19.8099C14.1805 19.5777 14.5366 19.2437 14.7951 18.8384C15.0536 18.4331 15.2065 17.9695 15.2396 17.4899C15.2039 17.0137 15.0498 16.5539 14.7913 16.1522C14.5329 15.7506 14.1782 15.4198 13.7596 15.1899C12.3673 14.3747 10.783 13.945 9.16961 13.945C7.5562 13.945 5.9719 14.3747 4.57961 15.1899Z"
                        fill="#5A5A5A"
                      />
                      <path
                        d="M18.3403 20.75C18.1677 20.7512 18.0001 20.6918 17.8667 20.5821C17.7333 20.4725 17.6426 20.3196 17.6103 20.15C17.5716 19.9553 17.6106 19.7532 17.719 19.5868C17.8274 19.4205 17.9965 19.3032 18.1903 19.26C18.7917 19.1453 19.3593 18.8957 19.8503 18.53C20.1079 18.3608 20.322 18.1331 20.4749 17.8655C20.6278 17.5978 20.7153 17.2979 20.7303 16.99C20.7162 16.6844 20.63 16.3866 20.4788 16.1207C20.3276 15.8548 20.1157 15.6284 19.8603 15.46C19.3728 15.101 18.8133 14.8519 18.2203 14.73C18.1238 14.7083 18.0325 14.6679 17.9516 14.6109C17.8707 14.5539 17.8018 14.4816 17.7489 14.398C17.642 14.2293 17.6065 14.0249 17.6503 13.83C17.6941 13.6351 17.8135 13.4655 17.9822 13.3586C18.151 13.2517 18.3554 13.2162 18.5503 13.26C19.3549 13.4259 20.1129 13.7673 20.7703 14.26C21.2101 14.5692 21.5713 14.9773 21.8249 15.4514C22.0784 15.9255 22.2173 16.4525 22.2303 16.99C22.2143 17.5294 22.0731 18.0576 21.818 18.5331C21.5629 19.0086 21.2008 19.4184 20.7603 19.73C20.0941 20.233 19.3206 20.5753 18.5003 20.73C18.4485 20.7459 18.3944 20.7526 18.3403 20.75Z"
                        fill="#5A5A5A"
                      />
                    </svg>
                  </div>
                  <span>Users</span>
                </Link>
              </li>
              {/* trainers   */}
              <li
                className={`menu-item ${
                  checkActive("/dashboard-system-admin/trainers")
                    ? "selected"
                    : ""
                }`}
              >
                <Link
                  to="/dashboard-system-admin/trainers"
                  className="menu-link"
                >
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M17.6191 9.62H12.3691C12.1706 9.61868 11.9806 9.53925 11.8403 9.39888C11.6999 9.25851 11.6205 9.0685 11.6191 8.87C11.6205 8.67149 11.6999 8.48148 11.8403 8.34111C11.9806 8.20074 12.1706 8.12131 12.3691 8.12H17.6191C17.8181 8.12 18.0088 8.19901 18.1495 8.33967C18.2901 8.48032 18.3691 8.67108 18.3691 8.87C18.3691 9.06891 18.2901 9.25967 18.1495 9.40033C18.0088 9.54098 17.8181 9.62 17.6191 9.62Z"
                        fill="#5A5A5A"
                      />
                      <path
                        d="M7.12192 10.3809C7.02339 10.3813 6.92578 10.362 6.83479 10.3243C6.74379 10.2865 6.66123 10.231 6.59192 10.161L5.84192 9.41095C5.70944 9.26878 5.63731 9.08073 5.64074 8.88643C5.64417 8.69213 5.72288 8.50674 5.8603 8.36933C5.99771 8.23192 6.18309 8.1532 6.37739 8.14978C6.5717 8.14635 6.75974 8.21847 6.90192 8.35095L7.12192 8.57095L8.83892 6.85095C8.98109 6.71847 9.16914 6.64635 9.36344 6.64978C9.55774 6.6532 9.74313 6.73192 9.88054 6.86933C10.018 7.00674 10.0967 7.19213 10.1001 7.38643C10.1035 7.58073 10.0314 7.76878 9.89892 7.91095L7.64892 10.161C7.5092 10.301 7.31974 10.3801 7.12192 10.3809Z"
                        fill="#5A5A5A"
                      />
                      <path
                        d="M17.6191 16.62H12.3691C12.1706 16.6187 11.9806 16.5392 11.8403 16.3989C11.6999 16.2585 11.6205 16.0685 11.6191 15.87C11.6205 15.6715 11.6999 15.4815 11.8403 15.3411C11.9806 15.2007 12.1706 15.1213 12.3691 15.12H17.6191C17.8181 15.12 18.0088 15.199 18.1495 15.3397C18.2901 15.4803 18.3691 15.6711 18.3691 15.87C18.3691 16.0689 18.2901 16.2597 18.1495 16.4003C18.0088 16.541 17.8181 16.62 17.6191 16.62Z"
                        fill="#5A5A5A"
                      />
                      <path
                        d="M7.12192 17.38C7.02339 17.3803 6.92578 17.361 6.83479 17.3233C6.74379 17.2855 6.66123 17.23 6.59192 17.16L5.84192 16.41C5.70944 16.2678 5.63731 16.0797 5.64074 15.8854C5.64417 15.6911 5.72288 15.5057 5.8603 15.3683C5.99771 15.2309 6.18309 15.1522 6.37739 15.1488C6.5717 15.1453 6.75974 15.2175 6.90192 15.35L7.12192 15.57L8.83892 13.851C8.98109 13.7185 9.16914 13.6463 9.36344 13.6498C9.55774 13.6532 9.74313 13.7319 9.88054 13.8693C10.018 14.0067 10.0967 14.1921 10.1001 14.3864C10.1035 14.5807 10.0314 14.7688 9.89892 14.911L7.64892 17.161C7.50903 17.3006 7.3196 17.3794 7.12192 17.38Z"
                        fill="#5A5A5A"
                      />
                      <path
                        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                        fill="#5A5A5A"
                      />
                    </svg>
                  </div>
                  <span>Dashboard trainers</span>
                </Link>
              </li>
              {/* evaluation forms */}
              <li
                className={`menu-item ${
                  checkActive("/dashboard-system-admin/evaluation-forms")
                    ? "selected"
                    : ""
                }`}
              >
                <Link
                  to="/dashboard-system-admin/evaluation-forms"
                  className="menu-link"
                >
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V7C2.25 3.35 4.35 1.25 8 1.25H16C19.65 1.25 21.75 3.35 21.75 7V17C21.75 20.65 19.65 22.75 16 22.75ZM8 2.75C5.14 2.75 3.75 4.14 3.75 7V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V7C20.25 4.14 18.86 2.75 16 2.75H8Z"
                        fill="#5A5A5A"
                      />
                      <path
                        d="M18.5 9.25H16.5C16.1388 9.25026 15.7811 9.17931 15.4473 9.0412C15.1135 8.9031 14.8103 8.70054 14.5549 8.44513C14.2995 8.18972 14.0969 7.88645 13.9588 7.55269C13.8207 7.21893 13.7497 6.86121 13.75 6.5V4.5C13.7513 4.30149 13.8307 4.11149 13.9711 3.97112C14.1115 3.83075 14.3015 3.75131 14.5 3.75C14.6985 3.75131 14.8885 3.83075 15.0289 3.97112C15.1693 4.11149 15.2487 4.30149 15.25 4.5V6.5C15.25 6.83152 15.3817 7.14946 15.6161 7.38388C15.8505 7.6183 16.1685 7.75 16.5 7.75H18.5C18.6989 7.75 18.8897 7.82902 19.0303 7.96967C19.171 8.11032 19.25 8.30109 19.25 8.5C19.25 8.69891 19.171 8.88968 19.0303 9.03033C18.8897 9.17098 18.6989 9.25 18.5 9.25Z"
                        fill="#5A5A5A"
                      />
                      <path
                        d="M12 13.75H8C7.80149 13.7487 7.61149 13.6693 7.47112 13.5289C7.33075 13.3885 7.25131 13.1985 7.25 13C7.25131 12.8015 7.33075 12.6115 7.47112 12.4711C7.61149 12.3307 7.80149 12.2513 8 12.25H12C12.1985 12.2513 12.3885 12.3307 12.5289 12.4711C12.6693 12.6115 12.7487 12.8015 12.75 13C12.7487 13.1985 12.6693 13.3885 12.5289 13.5289C12.3885 13.6693 12.1985 13.7487 12 13.75Z"
                        fill="#5A5A5A"
                      />
                      <path
                        d="M16 17.75H8C7.80149 17.7487 7.61149 17.6693 7.47112 17.5289C7.33075 17.3885 7.25131 17.1985 7.25 17C7.25131 16.8015 7.33075 16.6115 7.47112 16.4711C7.61149 16.3307 7.80149 16.2513 8 16.25H16C16.1985 16.2513 16.3885 16.3307 16.5289 16.4711C16.6693 16.6115 16.7487 16.8015 16.75 17C16.7487 17.1985 16.6693 17.3885 16.5289 17.5289C16.3885 17.6693 16.1985 17.7487 16 17.75Z"
                        fill="#5A5A5A"
                      />
                    </svg>
                  </div>
                  <span>Evaluation Forms</span>
                </Link>
              </li>
              {/* Signatures */}
              <li
                className={`menu-item ${
                  checkActive("/dashboard-system-admin/signatures")
                    ? "selected"
                    : ""
                }`}
              >
                <Link
                  to="/dashboard-system-admin/signatures"
                  className="menu-link"
                >
                  <EditIcon className="icon" />
                  <span>Signatures</span>
                </Link>
              </li>
              {/* /dashboard-system-admin/files-center */}
              <li
                className={`menu-item ${
                  checkActive("/dashboard-system-admin/files-center")
                    ? "selected"
                    : ""
                }`}
              >
                <Link
                  to="/dashboard-system-admin/files-center"
                  className="menu-link"
                >
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9 22.75H7C2.59 22.75 1.25 21.41 1.25 17V7.00001C1.25 2.59001 2.59 1.25001 7 1.25001H8.5C9.09136 1.18492 9.68894 1.29182 10.2211 1.55788C10.7532 1.82394 11.1973 2.23787 11.5 2.75001L13 4.75001C13.33 5.19001 13.38 5.25001 14 5.25001H17C21.41 5.25001 22.75 6.59001 22.75 11V13C22.75 13.1989 22.671 13.3897 22.5303 13.5303C22.3897 13.671 22.1989 13.75 22 13.75C21.8011 13.75 21.6103 13.671 21.4697 13.5303C21.329 13.3897 21.25 13.1989 21.25 13V11C21.25 7.43001 20.58 6.75001 17 6.75001H14C13.5668 6.7937 13.1301 6.71353 12.7406 6.5188C12.3512 6.32408 12.025 6.0228 11.8 5.65001L10.3 3.65001C10.1371 3.32599 9.87383 3.0633 9.54945 2.90111C9.22507 2.73892 8.85696 2.68592 8.5 2.75001H7C3.42 2.75001 2.75 3.43001 2.75 7.00001V17C2.75 20.57 3.42 21.25 7 21.25H9C9.19891 21.25 9.38968 21.329 9.53033 21.4697C9.67098 21.6103 9.75 21.8011 9.75 22C9.75 22.1989 9.67098 22.3897 9.53033 22.5303C9.38968 22.671 9.19891 22.75 9 22.75Z"
                        fill="#5A5A5A"
                      />
                      <path
                        d="M19.3407 22.8099H13.7507C13.1544 22.783 12.585 22.554 12.1362 22.1605C11.6873 21.767 11.3857 21.2325 11.281 20.6449C11.1763 20.0572 11.2747 19.4515 11.5599 18.9271C11.8452 18.4028 12.3004 17.9912 12.8507 17.7599C12.7302 17.1787 12.7518 16.577 12.9137 16.006C13.0756 15.4349 13.373 14.9114 13.7807 14.4799C14.3007 13.9497 14.9546 13.5702 15.673 13.3818C16.3914 13.1934 17.1474 13.2031 17.8607 13.4099C18.4776 13.6074 19.0325 13.962 19.4709 14.4389C19.9092 14.9158 20.2159 15.4986 20.3607 16.1299C20.891 16.2956 21.3717 16.5909 21.7593 16.9889C22.1469 17.387 22.4292 17.8754 22.5807 18.4099C22.7824 19.0247 22.7989 19.6852 22.6282 20.3092C22.4575 20.9333 22.1072 21.4934 21.6207 21.9199C21.0024 22.4971 20.1865 22.8156 19.3407 22.8099ZM13.7907 19.0699C13.5043 19.0806 13.2338 19.2046 13.0388 19.4146C12.8438 19.6246 12.7401 19.9035 12.7507 20.1899C12.7452 20.3335 12.7684 20.4766 12.819 20.6111C12.8696 20.7455 12.9465 20.8685 13.0452 20.9728C13.144 21.0771 13.2625 21.1606 13.394 21.2185C13.5254 21.2764 13.6671 21.3075 13.8107 21.3099H19.3207C19.5629 21.3185 19.8044 21.2787 20.031 21.1929C20.2577 21.107 20.4649 20.9768 20.6407 20.8099C20.9081 20.5678 21.0996 20.2533 21.1919 19.9045C21.2842 19.5557 21.2734 19.1877 21.1607 18.8449C21.0661 18.4992 20.8729 18.1884 20.6048 17.9505C20.3367 17.7126 20.0052 17.5578 19.6507 17.5049C19.4901 17.4851 19.3402 17.4141 19.2231 17.3025C19.106 17.1908 19.028 17.0444 19.0007 16.8849C18.9698 16.4278 18.8042 15.9902 18.5247 15.6271C18.2453 15.264 17.8646 14.9919 17.4307 14.8449C16.9846 14.7177 16.5126 14.7128 16.0639 14.8307C15.6153 14.9486 15.2066 15.1849 14.8807 15.5149C14.5699 15.8534 14.3675 16.2772 14.2998 16.7317C14.2321 17.1862 14.302 17.6506 14.5007 18.0649C14.5343 18.1575 14.5493 18.2558 14.5448 18.3542C14.5404 18.4526 14.5166 18.5491 14.4748 18.6383C14.433 18.7274 14.374 18.8075 14.3012 18.8738C14.2285 18.9402 14.1433 18.9915 14.0507 19.0249C13.967 19.0538 13.8792 19.069 13.7907 19.0699Z"
                        fill="#5A5A5A"
                      />
                    </svg>
                  </div>
                  <span>Files Center</span>
                </Link>
              </li>
              <li
                className={`menu-item ${
                  checkActive("/complaints") ? "selected" : ""
                }`}
              >
                <Link to="/complaints" className="menu-link">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                        fill="#5A5A5A"
                      />
                      <path
                        d="M10.6408 9.49996C10.5423 9.50032 10.4447 9.48105 10.3537 9.44327C10.2627 9.4055 10.1801 9.34998 10.1108 9.27996C9.76809 8.93897 9.30429 8.74755 8.82082 8.74755C8.33736 8.74755 7.87356 8.93897 7.53082 9.27996C7.38865 9.41244 7.2006 9.48457 7.0063 9.48114C6.812 9.47771 6.62661 9.399 6.4892 9.26159C6.35179 9.12417 6.27308 8.93879 6.26965 8.74449C6.26622 8.55018 6.33834 8.36214 6.47082 8.21996C7.09596 7.60026 7.94058 7.25256 8.82082 7.25256C9.70107 7.25256 10.5457 7.60026 11.1708 8.21996C11.3103 8.3611 11.3885 8.55153 11.3885 8.74996C11.3885 8.94839 11.3103 9.13883 11.1708 9.27996C11.1015 9.34998 11.0189 9.4055 10.928 9.44327C10.837 9.48105 10.7393 9.50032 10.6408 9.49996Z"
                        fill="#5A5A5A"
                      />
                      <path
                        d="M13.359 9.49996C13.2605 9.50032 13.1629 9.48105 13.0719 9.44327C12.9809 9.4055 12.8983 9.34998 12.829 9.27996C12.6895 9.13883 12.6113 8.94839 12.6113 8.74996C12.6113 8.55153 12.6895 8.3611 12.829 8.21996C13.4542 7.60026 14.2988 7.25256 15.179 7.25256C16.0593 7.25256 16.9039 7.60026 17.529 8.21996C17.6615 8.36214 17.7336 8.55018 17.7302 8.74449C17.7268 8.93879 17.6481 9.12417 17.5107 9.26159C17.3732 9.399 17.1879 9.47771 16.9936 9.48114C16.7993 9.48457 16.6112 9.41244 16.469 9.27996C16.1263 8.93897 15.6625 8.74755 15.179 8.74755C14.6956 8.74755 14.2318 8.93897 13.889 9.27996C13.8209 9.3515 13.7385 9.40801 13.6472 9.44589C13.556 9.48378 13.4578 9.50219 13.359 9.49996Z"
                        fill="#5A5A5A"
                      />
                      <path
                        d="M15.6 18.45H8.4C7.96256 18.4495 7.54318 18.2755 7.23386 17.9662C6.92454 17.6569 6.75053 17.2375 6.75 16.8C6.75 15.4077 7.30312 14.0723 8.28769 13.0877C9.27226 12.1032 10.6076 11.55 12 11.55C13.3924 11.55 14.7277 12.1032 15.7123 13.0877C16.6969 14.0723 17.25 15.4077 17.25 16.8C17.2495 17.2375 17.0755 17.6569 16.7661 17.9662C16.4568 18.2755 16.0374 18.4495 15.6 18.45ZM12 13.05C11.0055 13.0503 10.0518 13.4455 9.34864 14.1487C8.64544 14.8519 8.25027 15.8056 8.25 16.8C8.25101 16.8395 8.26714 16.8771 8.29505 16.905C8.32297 16.9329 8.36054 16.949 8.4 16.95H15.6C15.6395 16.949 15.677 16.9329 15.7049 16.905C15.7329 16.8771 15.749 16.8395 15.75 16.8C15.7497 15.8056 15.3546 14.8519 14.6514 14.1487C13.9482 13.4455 12.9945 13.0503 12 13.05Z"
                        fill="#5A5A5A"
                      />
                    </svg>
                  </div>

                  <span>Complaints</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
