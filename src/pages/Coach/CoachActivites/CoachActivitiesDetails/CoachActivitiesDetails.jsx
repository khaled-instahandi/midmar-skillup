import React, { useEffect, useState } from "react";
// import "./ActivitiesDetails.css";
import { ReactComponent as CoachIcon } from "../../../../images/luctuer.svg";
import { ReactComponent as ClipboardIcon } from "../../../../images/clipboard-icon.svg";
import loationIcon from "../../../../images/location-icon.svg";
import HeaderCoachDetails from "./HeaderCoachDetails";
import Button from "src/elements/Buttons/Button";
import linkIcon from "../../../../images/link-2.svg";
function CoachActivitiesDetails() {
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "الأهداف", path: "#objectives" },
    { name: "المخرجات", path: "#outputs" },
    { name: "المدرب", path: "#coach" },
    { name: "الأجندة", path: "#agenda" },
    { name: "أوقات الجلسات", path: "#session-times" },
    { name: "مدة التدريب", path: "#long-times" },

    { name: "منهجية التدريب", path: "#training-methodology" },
    // { name: 'المادة التدريبية والمراجع', path: '#references' }
  ];
  const scrollToSection = (path) => {
    const section = document.querySelector(path);
    if (section) {
      // const yOffset = -80; // Adjust the offset as per your design
      const y = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(path);
    }
  };

  const checkActive = (path) => {
    return activeSection === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(
        ".data-activity-details > section"
      );
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="activity-page">
      <HeaderCoachDetails />
      <div
        className="activity-details-container"
        style={{
          borderRadius: "0.5rem",
          border: "1px solid var(--Dark-20, #D6D6D6)",
          background: "#FFF",
          padding: "1rem 2rem",
        }}
      >
        <div className="card-activity-details"></div>

        <div className="data-activity-details">
          <div className="nav-data-activity-details ">
            <ul className="project-nav__list">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className={`project-nav__item ${
                    checkActive(item.path) ? "active" : ""
                  }`}
                >
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.path);
                    }}
                  >
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <section id="objectives" className="activity-details-objectives">
            <h3 className="header-text-activity-details">اهداف التدريب</h3>
            <ul>
              <li>
                فهم أساسيات تصميم الويب: تعلم كيفية تحليل متطلبات الموقع، وتصميم
                واجهات مستخدم فعّالة وجذابة.{" "}
              </li>
              <li>
                إتقان لغات البرمجة: تعلم استخدام لغات البرمجة الشائعة مثل HTML،
                CSS، و JavaScript لتنفيذ التصاميم بشكل ديناميكي{" "}
              </li>
              <li>
                تطوير المهارات الفنية: تعزيز مهارات التصميم الإبداعي والفني، بما
                في ذلك استخدام برامج التصميم المختلفة
              </li>
              <li>
                فهم مبادئ تجربة المستخدم (UX): تعلم كيفية تصميم وتطوير مواقع
                توفر تجربة مستخدم سلسة ومريحة.
              </li>
            </ul>
          </section>
          <section id="outputs" className="activity-details-outputs">
            <h3 className="header-text-activity-details">مخرجات التدريب</h3>
            <ul>
              <li>القدرة على تصميم وتنفيذ مواقع الويب بشكل احترافي وفعّال.</li>
              <li>
                إتقان استخدام لغات البرمجة الأساسية مثل HTML، CSS، و JavaScript.
              </li>
              <li>
                فهم مبادئ تجربة المستخدم وتطبيقها في تصميم وتطوير المواقع.
              </li>
              <li>
                المهارات اللازمة لاستخدام أدوات تطوير الويب وبرمجيات التصميم.
              </li>
              <li>القدرة على التواصل والعمل الجماعي في فرق تطوير المواقع.</li>
              <li>
                القدرة على تحليل وفهم احتياجات العملاء وترجمتها إلى مواقع ويب
                واجهات مستخدم مبتكرة ومناسبة.
              </li>
              <li>
                القدرة على إدارة وصيانة المواقع بشكل مستقل بعد الإنتهاء من
                التدريب.
              </li>
            </ul>
          </section>
          <section id="coach" className="activity-details-coach">
            <h3 className="header-text-activity-details">معلومات المدرب</h3>
            <div className="card-title-coach">
              <CoachIcon />
              <div className="coach-info">
                <h5>المدرب:</h5>
                <h6>عقيل بكور</h6>
              </div>
            </div>
            <p>
              مرحباً بكم جميعاً ، اسمي نور الدين الأحمد ، مطوّر ومصمم مواقع
              ويب أعمل في شركة الحياة الذكية ، لديّ خبرة عمل تتجاوز العشر سنوات
              ، أحب عملي كثيراً ، وأسعى دائماً لتطوير مهاراتي أنا قادر على
              التعامل مع مهام متعددة بشكل يومي. أستخدم المنهج الابتكاري لحل
              المشاكل. أنا شخص يعتمد عليه في إدارة الوقت. أنا نشيط دائما و متحمس
              لتعلم مهارات جديدة. أمتلكُ الخبرة في العمل سواء الفردي أو العمل
              عضوًا في فريق. أنا مرن في وقتي كوني قادر على العمل في المساء و في
              إجازة الأسبوع. أعمل بجد و عادة أكون آخر من يخرج من المكتب مساء.
            </p>
          </section>
          <section id="agenda" className="activity-details-agenda">
            <h3 className="header-text-activity-details">الأجندة</h3>
            <details>
              <summary>
                <ClipboardIcon />
                الأسبوع: الأول والثاني{" "}
              </summary>

              <article>
                <article>
                  <ul class="decimal-list">
                    <li>مقدمة في تصميم الويب وأساسيات HTML و CSS.</li>
                    <li>تعمق في HTML و CSS وتطبيقات عملية.</li>
                    <li>مقدمة في JavaScript وتعلم الأساسيات.</li>
                  </ul>
                </article>
              </article>
            </details>
            <details>
              <summary>
                <ClipboardIcon />
                الأسبوع: الأول والثاني{" "}
              </summary>

              <article>
                <article>
                  <ul class="decimal-list">
                    <li>مقدمة في تصميم الويب وأساسيات HTML و CSS.</li>
                    <li>تعمق في HTML و CSS وتطبيقات عملية.</li>
                    <li>مقدمة في JavaScript وتعلم الأساسيات.</li>
                  </ul>
                </article>
              </article>
            </details>
            <details>
              <summary>
                <ClipboardIcon />
                الأسبوع: الأول والثاني{" "}
              </summary>

              <article>
                <article>
                  <ul class="decimal-list">
                    <li>مقدمة في تصميم الويب وأساسيات HTML و CSS.</li>
                    <li>تعمق في HTML و CSS وتطبيقات عملية.</li>
                    <li>مقدمة في JavaScript وتعلم الأساسيات.</li>
                  </ul>
                </article>
              </article>
            </details>
          </section>
          <section
            id="session-times"
            className="activity-details-session-times"
          >
            <h3 className="header-text-activity-details">أوقات الجلسات</h3>
            <ul style={{ listStyle: "inside" }}>
              <li>جلسة تدريبية يوميًا.</li>
              <li>مدة الجلسة: 2-3 ساعات.</li>
              <li>الفترة: صباحية أو مسائية حسب الجدول المحدد.</li>
              <li>
                يمكن أن تتضمن جلسات إضافية للعمل العملي والمشاريع التطبيقية.
              </li>
            </ul>
          </section>
          <section
            id="long-times"
            className="activity-details-training-methodology"
          >
            <h3 className="header-text-activity-details">مدة التدريب</h3>
            <ul style={{ listStyle: "inside" }}>
              <li>ثلاثة أشهر (تبدأ من شهر آذار حتى شهر حزيران)</li>
            </ul>
          </section>
          <section
            id="training-methodology"
            className="activity-details-training-methodology"
          >
            <h3 className="header-text-activity-details">منهجية التدريب</h3>
            <div className="row" style={{ padding: "0rem 3rem" }}>
              <div className="col-6-time">
                <p>التدريب عن بعد (أونلاين)</p>
                <Button
                  label={"رابط الانضمام للجلسات"}
                  className={"invite-btn"}
                  onClick={() => console.log("Clicked button")}
                  Icon={linkIcon}
                  iconPosition={"left"}
                />
              </div>
              <div className="col-6-time">
                <p>التدريب وجهًا لوجه (فيزيائي)</p>
                <p>
                  <img
                    style={{ display: "inline", marginLeft: "0.5rem" }}
                    src={loationIcon}
                    alt=""
                  />
                  المكان: أعزاز - مول أعزاز - الطابق الثالث - مركز نور
                </p>
              </div>
            </div>
            {/* <ul>
              <li>
                تقديم المفاهيم الأساسية: يبدأ التدريب بتقديم المفاهيم الأساسية
                في تصميم الويب وبرمجته، بما في ذلك HTML، CSS،{" "}
              </li>
              <li>
                التعلم النظري: يتم توفير محاضرات ومواد تعليمية تشرح النظريات
                والمفاهيم المرتبطة بكل جانب من جوانب التصميم والبرمجة.
              </li>
              <li>
                التطبيق العملي: يتم إعطاء الطلاب فرصًا لتطبيق المفاهيم والمهارات
                التي تم تعلمها من خلال مشاريع عملية وتحديات تطبيقية.
              </li>
              <li>
                المشاريع التطبيقية: يشمل التدريب عادة مشاريع تطبيقية يعمل الطلاب
                عليها بشكل فردي أو جماعي،
              </li>
            </ul> */}
          </section>
          <section className="activity-details-references"></section>
        </div>
      </div>
    </div>
  );
}

export default CoachActivitiesDetails;
