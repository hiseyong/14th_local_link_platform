import '../style/teamSelectionPage.css';
import { PageTitle } from '../components/PageTitle';
import { RotatingCylinder } from '../hooks/RotatingCylinder';

export function TeamSelectionPage() {
  const items = [
    {
      text: '학술팀',
      link: '/academic/'
    },
    {
      text: '미디어팀',
      link: '/media/'
    },
    {
      text: '디자인팀',
      link: '/design/'
    },
  ]

  return (
    <>
      <PageTitle>팀 선택</PageTitle>
      <RotatingCylinder items={items}/>
    </>
    
  );
}