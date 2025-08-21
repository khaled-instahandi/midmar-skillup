import React from "react";
import { ReactComponent as TimerIcon } from "../../../../images/timer-iconn.svg";
import { ReactComponent as AwardIcon } from "../../../../images/award-icon.svg";
import { ReactComponent as BookIcon } from "../../../../images/book-mark-icon.svg";
import { ReactComponent as BookOpenIcon } from "../../../../images/book-open.svg";
import { ReactComponent as NoteIcon } from "../../../../images/note-icon.svg";

const policies = [
  {
    id: 1,
    icon: <TimerIcon />,
    title: "الالتزام بالوقت",
    content: `نحن نؤمن بأهمية استغلال الوقت بشكل فعّال خلال عملية التدريب. يُرجى الالتزام بالجدول الزمني المحدد لكل فعالية تدريبية. في حالة وجود أي تأخير مُرتقب، يُرجى التواصل مع فريق التدريب مسبقًا لتنسيق الجدول الجديد.`,
  },

  {
    id: 2,
    icon: <AwardIcon />,

    title: "قيود تصميم المادة التدريبية",
    content: ` يُرجى مراعاة القوانين والتشريعات المعمول بها أثناء تصميم وتطوير المواد التدريبية. يجب أن تتماشى جميع المواد مع معايير الجودة المعتمدة وأن تُقدم بطريقة تسهم في تحقيق أهداف التدريب بشكل فعّال.`,
  },
  {
    id: 3,
    icon: <BookIcon />,

    title: "تعليمات تقديم التدريب",
    content:
      "قبل بدء جلسة التدريب، يُرجى التأكد من أن جميع المشاركين قد استعدوا وتلقوا المواد اللازمة. يجب أن يكون البيئة التدريبية مهيأة بشكل جيد ومناسبة لعملية التعلم. كما ينبغي على المدرب أن يوجه المشاركين بوضوح حول أهداف وجدول اليوم التدريبي.",
  },
  {
    id: 4,
    icon: <BookOpenIcon />,

    title: "إعداد الاختبارات",
    content:
      "قبل تنفيذ الاختبارات، يجب على المدرب أن يتأكد من أن جميع المواد اللازمة متوفرة للمشاركين. ينبغي أن تكون الاختبارات مصممة بشكل يعكس مضمون التدريب وأهدافه. كما يجب أن تكون الأسئلة واضحة وعادلة ومتنوعة بما يتناسب مع مستوى المشاركين.",
  },
  {
    id: 5,
    icon: <NoteIcon />,

    title: "إعداد التقرير النهائي",
    content:
      "بعد انتهاء عملية التدريب، يجب على المدرب إعداد تقرير نهائي يلخص جميع النقاط المهمة التي تمت مناقشتها خلال الفترة التدريبية. يجب أن يتضمن التقرير تقييمًا شاملاً لأداء المشاركين وفعالية البرنامج التدريبي، بالإضافة إلى أي توصيات للتحسين في المستقبل.",
  },

];

function CoachTrainingInstructions() {
  return (
    <div className="activity-page" style={{ marginTop: "-2rem" }}>
      <div className="activity-table-container">
        <h1 className="mb-3">تعليمات التدريب</h1>
        <div className="policies-container-v">
          {policies.map((policy) => (
            <div key={policy.id} className="policy-section">
              <h2>
                {policy.icon} {policy.title}:
              </h2>
              <p>{policy.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoachTrainingInstructions;
