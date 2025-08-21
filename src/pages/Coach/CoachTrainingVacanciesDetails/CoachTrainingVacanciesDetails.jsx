import React, { useState } from "react";
import Button from "src/elements/Buttons/Button";
import calenderIcon from "src/images/calender-card-icon.svg";
import CourseImage from "src/images/Rectangle 593.png";
import verify from "../../../images/verify2.svg";
import AlertMessage from "src/elements/AlertMessage/AlertMessage";

function CardTemplate({ title, image, date, onClick }) {
  return (
    <div className="card-template-details">
      <div className="header-text-template">
        <p style={{ fontSize: "2rem", fontWeight: "400" }}>{title}</p>
      </div>
      <div className="bottom-text-template mb-5">
        <img src={calenderIcon} alt="" />
        <p className="">
          تاريخ انتهاء التقديم:<span>{date}</span>
        </p>
      </div>
      <img src={image} alt="" />
      <Button
        label="التقدم للشاغر"
        onClick={onClick}
        className="button-login mt-8"
        fontSize={"1.5rem"}
        width={"100%"}
        height={"auto"}
      />
    </div>
  );
}

function CoachTrainingVacanciesDetails() {
  const [showAlertDelete, setShowAlertDelete] = useState(false);

  const Data = [
    {
      id: 1,
      Title: "مدرب برمجة تطبيقات أندرويد",
      Image: CourseImage,
      date: "0/19/2024",
    },
  ];
  const handleModalClose = () => {
    setShowAlertDelete(false);
  };
  return (
    <div className="activity-page">
      <div className="activity-details-container">
        <div className="card-activity-details" style={{ minWidth: "35%" }}>
          <CardTemplate
            onClick={() => setShowAlertDelete(true)}
            title={Data[0].Title}
            image={Data[0].Image}
            date={Data[0].date}
          />
        </div>
        <div className="data-activity-details">
          <section id="coach" className="activity-details-coach">
            <h3 className="header-text-activity-details">تفاصيل الشاغر:</h3>

            <p>
              نبحث عن مدرب متخصص في تصميم وبرمجة مواقع الويب للانضمام إلى فريق
              التدريب لدينا. يجب أن يكون المرشح لهذا الشاغر ملمًا بأحدث التقنيات
              والأدوات المستخدمة في تطوير مواقع الويب ويمتلك مهارات تواصل ممتازة
              لنقل المعرفة والمهارات بشكل فعّال.
            </p>
          </section>
          <section id="objectives" className="activity-details-objectives">
            <h3 className="header-text-activity-details">المسؤوليات:</h3>
            <ul>
              <li>
                تطوير وتصميم مواقع الويب باستخدام تقنيات مثل HTML5، CSS3،
                JavaScript، وغيرها.
              </li>
              <li>
                إعداد وتقديم دورات تدريبية في تصميم وبرمجة مواقع الويب للمبتدئين
                والمحترفين.
              </li>
              <li>
                تقديم الدعم والإرشاد للمتدربين أثناء تعلمهم عمليات تصميم وبرمجة
                المواقع.
              </li>
              <li>
                تقديم استشارات فنية وتوجيه حول أفضل الممارسات في مجال تصميم
                وبرمجة مواقع الويب.
              </li>
            </ul>
          </section>
          <section id="objectives" className="activity-details-objectives">
            <h3 className="header-text-activity-details">المؤهلات:</h3>
            <ul>
              <li>خبرة عملية في تطوير وبرمجة مواقع الويب لا تقل عن 3 سنوات.</li>
              <li>
                معرفة قوية بلغات البرمجة مثل HTML، CSS، JavaScript، وغيرها.
              </li>
              <li>
                قدرة على التواصل بشكل فعّال ونقل المعرفة بطريقة مبسطة وفعالة.
              </li>
              <li>شهادة جامعية في تصميم الويب أو مجال ذي صلة.</li>
            </ul>
          </section>
        </div>
      </div>
      {showAlertDelete && (
        <AlertMessage
          btnOneActive
          buttomTowActive
          closeButton
          lableButtonOne={"تحديث السيرة الذاتية"}
          lableButtonTow={"تخطي، متابعة التقديم"}
          ButtonClassTow={"button-login-out w-4-5"}
          headerText={"تم تقديم الطلب"}
          logo={verify}
          buttonClassFirst={"button-delete-t"}
          buttomText={
            "يُرجى تحديث السيرة الذاتية الخاصة بك قبل استكمال عملية التقديم. قد يؤدي تقديم سيرة ذاتية غير محدثة إلى عدم مراعاة البيانات الأخيرة الخاصة بك أثناء عملية الاختيار."
          }
          buttomTextMiddle={true}
          OnClickBtnTow={() => setShowAlertDelete(false)}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}

export default CoachTrainingVacanciesDetails;
