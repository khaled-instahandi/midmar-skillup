import React, { useEffect, useRef, useState } from 'react'
import './ActivitiesDetails.css'
import CardTwo from '../../../elements/Card/CardTwo'
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as CoachIcon } from '../../../images/luctuer.svg'
import { ReactComponent as ClipboardIcon } from '../../../images/clipboard-icon.svg'
import Button from '../../../elements/Buttons/Button';
import Pretestinstructions from './Pretestinstructions';
import AlertMessage from '../../../elements/AlertMessage/AlertMessage';
import infoCircle from '../../../images/info-circle2.svg';
import Test from './Test';
import checkedInfo from '../../../images/checked 1.svg'
function ActivitiesDetails() {
    const location = useLocation();
    const activityDetailsRef = useRef(null);
    const [activeSection, setActiveSection] = useState('');
    const [isDetailsModalOpen, SetIsDetailsModalOpen] = useState(false);
    const [isTestModalOpen, SetIsTestModalOpen] = useState(false);

    const [selectedProjectData, setSelectedProjectData] = useState(null);
    const [showAlertConfirm, setShowAlertConfirm] = useState(false);
    const [showCongratulationsAlert, setShowCongratulationsAlert] = useState(false);


    const handleSaveDetailsedProject = (editedData) => {
        console.log('Edited project data:', editedData);
        // handleModalClose();
    };
    const handleSaveTestProject = (editedData) => {
        console.log('Edited project data:', editedData);
        // handleModalClose();
    };
    const navItems = [
        { name: 'الأهداف', path: '#objectives' },
        { name: 'المخرجات', path: '#outputs' },
        { name: 'المدرب', path: '#coach' },
        { name: 'الأجندة', path: '#agenda' },
        { name: 'أوقات الجلسات', path: '#session-times' },
        { name: 'منهجية التدريب', path: '#training-methodology' },
        // { name: 'المادة التدريبية والمراجع', path: '#references' }
    ];
    const scrollToSection = (path) => {
        const section = document.querySelector(path);
        if (section) {
            // const yOffset = -80; // Adjust the offset as per your design
            const y = section.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setActiveSection(path);
        }
    };

    const checkActive = (path) => {
        return activeSection === path;
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.data-activity-details > section');
            const scrollPosition = window.scrollY;

            sections.forEach((section) => {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;

                if (scrollPosition >= top && scrollPosition < bottom) {
                    setActiveSection(`#${section.id}`);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleModalClose = () => {
        SetIsDetailsModalOpen(false);
        setShowAlertConfirm(false)
        SetIsTestModalOpen(false);
        setShowCongratulationsAlert(false)

    };

    const handleAlertConfirmation = () => {
        SetIsDetailsModalOpen(false); // Close the Pretestinstructions modal
        setShowAlertConfirm(true); // Show the AlertMessage
    };
    const handleTest = () => {
        setShowAlertConfirm(false); // Show the AlertMessage
        SetIsTestModalOpen(true); // Close the Pretestinstructions modal
    };
    const hundelshowCongratulationsAlert = () => {
        SetIsTestModalOpen(false); // Close the Pretestinstructions modal
        setShowCongratulationsAlert(true); // Show the AlertMessage
    };
    return (
        <div className='activity-page'>
            <div className="activity-details-container">
                <div className="card-activity-details" >
                    <CardTwo
                        data={{
                            title: "تصميم وبرمجة مواقع الويب",
                            trainer: "عقيل بكور",
                            hours: "60",
                            sessionDate: "03/01/2024",
                            trainingMethod: "أونلاين",
                            trainingStatus: "مكتملة"
                        }}
                    />
                    <Button
                        label="رابط الانضمام للجلسات"
                        onClick={() => console.log('Clicked button')}
                        className="button-login mt-5"
                        fontSize={'1.5rem'}
                        width={'100%'}
                        height={'auto'}
                    />
                    <Button
                        label="الاختبار القبلي"
                        onClick={() => SetIsDetailsModalOpen(true)}
                        className="button-login-out  mt-5"
                        fontSize={'1.5rem'}
                        width={'100%'}
                        height={'auto'}
                    />
                    <Button
                        label="تقييم النشاط"
                        onClick={() => console.log('Clicked button')}
                        className="button-login-out  mt-5"
                        fontSize={'1.5rem'}
                        width={'100%'}
                        height={'auto'}
                    />
                </div>

                <div className="data-activity-details">
                    <div className="nav-data-activity-details ">
                        <ul className="project-nav__list">
                            {navItems.map((item) => (
                                <li key={item.name} className={`project-nav__item ${checkActive(item.path) ? 'active' : ''}`}>
                                    <a href={item.path} onClick={(e) => { e.preventDefault(); scrollToSection(item.path); }}>
                                        <span>{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <section id="objectives" className="activity-details-objectives">
                        <h3 className='header-text-activity-details'>اهداف التدريب</h3>
                        <ul>
                            <li>فهم أساسيات تصميم الويب: تعلم كيفية تحليل متطلبات الموقع، وتصميم واجهات مستخدم فعّالة وجذابة. </li>
                            <li>إتقان لغات البرمجة: تعلم استخدام لغات البرمجة الشائعة مثل HTML، CSS، و JavaScript لتنفيذ التصاميم بشكل ديناميكي </li>
                            <li>تطوير المهارات الفنية: تعزيز مهارات التصميم الإبداعي والفني، بما في ذلك استخدام برامج التصميم المختلفة</li>
                            <li>فهم مبادئ تجربة المستخدم (UX): تعلم كيفية تصميم وتطوير مواقع توفر تجربة مستخدم سلسة ومريحة.</li>

                        </ul>
                    </section>
                    <section id="outputs" className="activity-details-outputs">
                        <h3 className='header-text-activity-details'>مخرجات التدريب</h3>
                        <ul>
                            <li>القدرة على تصميم وتنفيذ مواقع الويب بشكل احترافي وفعّال.</li>
                            <li>إتقان استخدام لغات البرمجة الأساسية مثل HTML، CSS، و JavaScript.</li>
                            <li>فهم مبادئ تجربة المستخدم وتطبيقها في تصميم وتطوير المواقع.</li>
                            <li>المهارات اللازمة لاستخدام أدوات تطوير الويب وبرمجيات التصميم.</li>
                            <li>القدرة على التواصل والعمل الجماعي في فرق تطوير المواقع.</li>
                            <li>القدرة على تحليل وفهم احتياجات العملاء وترجمتها إلى مواقع ويب واجهات مستخدم مبتكرة ومناسبة.</li>
                            <li>القدرة على إدارة وصيانة المواقع بشكل مستقل بعد الإنتهاء من التدريب.</li>
                        </ul>
                    </section>
                    <section id="coach" className="activity-details-coach">
                        <h3 className='header-text-activity-details'>معلومات المدرب</h3>
                        <div className="card-title-coach">
                            <CoachIcon />
                            <div className="coach-info">
                                <h5>المدرب:</h5>
                                <h6>عقيل بكور</h6>

                            </div>

                        </div>
                        <p>مرحباً بكم جميعاً ، اسمي نور الدين الأحمد ، مطوّر ومصمم مواقع ويب أعمل في شركة الحياة
                            الذكية ، لديّ خبرة عمل تتجاوز العشر سنوات ، أحب عملي كثيراً ، وأسعى دائماً لتطوير مهاراتي أنا قادر على التعامل مع مهام متعددة بشكل يومي. أستخدم المنهج الابتكاري لحل المشاكل. أنا شخص يعتمد عليه في إدارة الوقت. أنا نشيط دائما و متحمس لتعلم مهارات جديدة. أمتلكُ الخبرة في العمل سواء الفردي أو العمل عضوًا في فريق. أنا مرن في وقتي كوني قادر
                            على العمل في المساء و في إجازة الأسبوع. أعمل بجد و عادة أكون آخر من يخرج من المكتب مساء.</p>
                    </section>
                    <section id="agenda" className="activity-details-agenda">
                        <h3 className='header-text-activity-details'>الأجندة</h3>
                        <details>
                            <summary>
                                <ClipboardIcon />

                                الأسبوع: الأول والثاني </summary>

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

                                الأسبوع: الأول والثاني </summary>

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

                                الأسبوع: الأول والثاني </summary>

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
                    <section id="session-times" className="activity-details-session-times">
                        <h3 className='header-text-activity-details'>أوقات الجلسات</h3>
                        <ul style={{ listStyle: 'inside' }}>
                            <li>جلسة تدريبية يوميًا.</li>
                            <li>مدة الجلسة: 2-3 ساعات.</li>
                            <li>الفترة: صباحية أو مسائية حسب الجدول المحدد.</li>
                            <li>يمكن أن تتضمن جلسات إضافية للعمل العملي والمشاريع التطبيقية.</li>

                        </ul>
                    </section>
                    <section id="training-methodology" className="activity-details-training-methodology">
                        <h3 className='header-text-activity-details' >منهجية التدريب</h3>
                        <ul>
                            <li>تقديم المفاهيم الأساسية: يبدأ التدريب بتقديم المفاهيم الأساسية في تصميم الويب وبرمجته، بما في ذلك HTML، CSS، </li>
                            <li>التعلم النظري: يتم توفير محاضرات ومواد تعليمية تشرح النظريات والمفاهيم المرتبطة بكل جانب من جوانب التصميم والبرمجة.</li>
                            <li>التطبيق العملي: يتم إعطاء الطلاب فرصًا لتطبيق المفاهيم والمهارات التي تم تعلمها من خلال مشاريع عملية وتحديات تطبيقية.</li>
                            <li>المشاريع التطبيقية: يشمل التدريب عادة مشاريع تطبيقية يعمل الطلاب عليها بشكل فردي أو جماعي،</li>

                        </ul>
                    </section>
                    <section className="activity-details-references">

                    </section>
                </div>
            </div>
            <Test
                width={'auto'}
                handleBtn={handleAlertConfirmation}
                height={'100%'}
                isOpen={isTestModalOpen}
                onClose={handleModalClose}
                projectData={selectedProjectData}
                onSave={handleSaveTestProject}

                hundelBtn={hundelshowCongratulationsAlert}
            />

            <Pretestinstructions
                headerText={'تعليمات الاختبار القبلي'}
                instructions={[
                    'يجب على الطالب إكمال الاختبار القبلي قبل بداية أول جلسة تدريب.',
                    'تأكد من قراءة وفهم جميع الأسئلة بعناية قبل الإجابة.',
                    'الاختبار يتكون من عدد محدود من الأسئلة ويجب الإجابة عليها في الوقت المحدد.',
                    'بمجرد بدء الاختبار، لا يمكن إيقافه أو إعادته، لذا تأكد من تخصيص وقت كافٍ لإكماله.',
                    'يُطلب منك الإجابة بمصداقية ودقة لضمان الحصول على نتائج دقيقة.',
                    'بعد الانتهاء، انتقل إلى صفحة الاختبار وابدأ في الإجابة على الأسئلة.',
                    'في حالة وجود أي استفسارات أو مشاكل، لا تتردد في الاتصال بالمدرب المختص.'
                ]}
                width={'auto'}
                handleBtn={handleAlertConfirmation}
                height={'100%'}
                isOpen={isDetailsModalOpen}
                onClose={handleModalClose}
                projectData={selectedProjectData}
                onSave={handleSaveDetailsedProject} />
            {showAlertConfirm &&
                <AlertMessage
                    OnClickBtnTow={
                        handleTest
                    }
                    closeButton={true} lableButtonOne={'Cancel'}
                    lableButtonTow={'الاختبار القبلي'}
                    btnOneActive={false}
                    buttomTowActive={true}
                    headerText={'تنبيه !!'}
                    logo={infoCircle}
                    ButtonClassTow={'button-exam'}
                    buttonClassFirst={'button-cancel'}
                    buttomText={'يتطلب حضور التدريب أداء اختبار قبلي قبل بدء الجلسات التدريبية. يرجى القيام بهذا الاختبار قبل الموعد المحدد لضمان استمرارك في الدورة.'}
                    buttomTextMiddle={true}
                    onClose={handleModalClose}

                />}
            {showCongratulationsAlert &&
                <AlertMessage
                    OnClickBtnTow={
                        handleModalClose
                    }
                    // headerTextClass="test-alert-header"
                    isMark
                    mark={'95 / 100'}
                    closeButton={true}
                    lableButtonOne={'Cancel'}
                    lableButtonTow={'العودة للتدريب '}
                    btnOneActive={false}
                    buttomTowActive={true}
                    headerText={'تم استلام اختبارك بنجاح!'}
                    logo={checkedInfo}
                    ButtonClassTow={'button-exam'}
                    buttonClassFirst={'button-cancel'}
                    buttomText={'شكرًا لإكمالك للاختبار القبلي. سنقوم بمراجعة إجاباتك وتقديم التقييم في أقرب وقت ممكن. يرجى مراجعة البريد الإلكتروني الذي قدمته أثناء التسجيل للحصول على نتائج الاختبار ومزيد من التعليمات.'}
                    buttomTextMiddle={true}
                    onClose={handleModalClose}

                />}
        </div>
    )
}

export default ActivitiesDetails