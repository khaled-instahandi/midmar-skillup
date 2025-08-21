import React, { useState } from 'react'
import './StyleTile.css'
import Button from '../../elements/Buttons/Button'
import PersonIcon from '../../images/person.svg'
import arrow from '../../images/arrow-left.svg'
import Pagination from '../../elements/Pagination/Pagination'
import PaginationTwo from '../../elements/Pagination/PaginationTwo'
import Card from '../../elements/Card/Card'
import CardTwo from '../../elements/Card/CardTwo'
import AchievementCard from '../../elements/Card/AchievementCard'
import InputField from '../../elements/DynamicInput/InputField'
import Checkbox from '../../elements/Checkbox/Checkbox'
import NotificationLink from '../../elements/NotificationLink/NotificationLink'
import Milestone from '../../elements/Milestone/Milestone'
import Dropdown from '../../elements/Dropdown/Dropdown'
import DatePicker from '../../elements/DatePicker/DatePicker'
import TagContainer from '../../elements/Tag/Tag'
import Tags from '../../elements/Tag/Tag'
import Tag from '../../elements/Tag/Tag'
import CustomCheckbox from '../../elements/Checkbox/CustomCheckbox'
import AddComponent from '../../elements/AddComponent/AddComponent'

import ProgressBarCard from '../../charts/ProgressBarCard/ProgressBarCard'
import ProgressBar from '../../elements/ProgressBar/ProgressBar'
import FinancialOverviewCard from '../../elements/FinancialOverviewCard/FinancialOverviewCard'
import moneys from '../../images/moneys.svg'
import moneySend from '../../images/wallet.svg'
import wallet from '../../images/moneys.svg'
import cardReceive from '../../images/card-receive.svg'
import ProjectFlowChart from '../../charts/ProjectFlowChart/ProjectFlowChart'
import Login from '../Login/Login'
function StyleTile() {
  const allItems = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

  const itemsPerPage = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  // Initial items for the current page
  const [currentItems, setCurrentItems] = useState(allItems.slice(0, itemsPerPage));

  const fetchDataForNewPage = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentItems(allItems.slice(startIndex, endIndex));
    setCurrentPage(page);
  };
  const projectData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'First dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#FFC800',
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: '#FFC800',

      },
      {
        label: 'Second dataset',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: '#007AFF',
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: '#007AFF',
      },
      {
        label: 'Third dataset',
        data: [28, 48, 12, 19, 43, 27, 12],
        fill: false,
        borderColor: '#7BBC67',
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: '#7BBC67',
      },
    ],
  };




  return (
    <div className='style-tile'>

      {/* <ProjectFlowChart projectData={projectData}  /> */}

      <Button
        label="تسليم الإجابات"
        onClick={() => console.log('Clicked button')}
        className="button-filled"
        fontSize={'24px'}
      />
      <Button
        label="إنشاء حساب"
        onClick={() => console.log('Clicked button')}
        className="button-filled"
        Icon={PersonIcon}
        width={'175px'}
        height={'64.026px'}
        fontSize={'1.375rem'}
      />
      <Button
        label="انضم للتدريب"
        onClick={() => console.log('Clicked button')}
        className="button-filled"
        Icon={arrow}
        iconPosition={'left'}
        width={'165px'}
        height={'52px'}
        fontSize={'1.125rem'}
      />

      <div>
        <div className="items-list">
          {currentItems.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <PaginationTwo
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={fetchDataForNewPage}
        />

        <Pagination totalPages={totalPages} onPageChange={fetchDataForNewPage} />
      </div>
      <Card
        title="UI UX design app"
        participants="20"
        duration="30"
        lecturer="khaled alahmad"
        onFavorite={(isFav) => console.log('Favorite status:', isFav)}
      />
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
      <AchievementCard
        description="نُقدم لك الورشات التدريبية التفاعلية التي تمكنك من بناء هويتك الرقمية بنفسك"
      />
      <InputField label="Email" type="email" id="email" placeholder="Enter your email address" />
      <Checkbox label="Remember me" />
      <NotificationLink text="Check all notifications" />
      <Button
        label="Login"
        onClick={() => console.log('Clicked button')}
        className="button-login"
        fontSize={'1.5rem'}
        width={'400px'}
        height={'auto'}
      />
      <Button
        label="Login"
        onClick={() => console.log('Clicked button')}
        className="button-login-out"
        fontSize={'1.5rem'}
        width={'400px'}
        height={'auto'}
      />
      <DatePicker />
      <Dropdown
        label="Gender"
        options={['Male', 'Female']}
        placeHolder={'Select'}
      />
      <Tag infoAdditional={'Stability of the inflation rate in the region'}
        infoContent={' Enhancing the capabilities and skills of young d skills of young'}

      />
      <Tag infoAdditional={'Qualification of trainers'}
        infoContent={' Practical exercises'}
        widthContent={'9.99613rem'}
        heightContent={'6.8125rem'}
        backgroundColorContent={'rgba(175, 82, 222, 0.1)'}

      />
      <Milestone
        title="milestone 2"
        description="Simple description Simple description Simple description"
      />
      <CustomCheckbox />
      <Dropdown
        label="Indicator"
        state={'ss'}
        options={['Indicator1', 'Indicator2']}
        placeHolder={'Select the indicator to which this target follows'}
      />
      <InputField label="Output statement" type="description" id="email" placeholder="Enter the Output description" />
      <InputField
        label="Output statement"
        id="output-statement"
        placeholder="Enter the Output description"
        isTextarea={true}
      />
      <AddComponent lableText={'Add Output'} buttonText={'Add another output'} isOutCome={true} />
      <AddComponent lableText={'Add Outcome'} buttonText={'Add another outcome'} isOutCome={false} />
      <InputField
        label="Output statement"
        id="output-statement"
        inLineLable='Enter text'

        placeholder="Enter the Output description"
        isTextarea={true}
        required={true}
      />
      <InputField
        type="text"
        id="my-input"
        placeholder="Enter text"
        inLineLable='Enter text'
        onChange={(value) => console.log(value)}
      />

      <ProgressBarCard />
      <ProgressBar label="milestone 2" percentage={90} />
      <FinancialOverviewCard title={'Budget value'} value="474,988.70" icon={moneys} colorValue={'#7BBC67'} backgroundColor={'rgba(var(--Green-rgb, 123, 188, 103), 0.08)'} />
      <FinancialOverviewCard title={'Expenses'} value="300,988.70" icon={moneySend} colorValue={'#FFC800'} backgroundColor={'rgba(var(--Yellow-rgb, 255, 200, 0), 0.08)'} />
      <FinancialOverviewCard title={'Total payments from donor'} value="400,988.70" icon={cardReceive} colorValue={'#007AFF'} backgroundColor={' rgba(var(--Blue-rgb, 0, 122, 255), 0.08)'} />
      <FinancialOverviewCard title={'Available amount'} value="400,988.70" icon={moneys} colorValue={'#158B7F'} backgroundColor={'rgba(var(--Primary-100-rgb, 21, 139, 127), 0.08)'} />

    </div>

  )
}

export default StyleTile