import MainWrapper from '../components/MainWrapper';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import SubHeader from '../components/SubHeader';


export default function Home() {
  return (
    <>
      <SubHeader />
      <MainWrapper>
        <Sidebar />
        <MainContent />
      </MainWrapper>

    </>
  )
}
