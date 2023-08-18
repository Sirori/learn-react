import GoToButton from "./GoToButton";
import { getNode } from '@/utils/getNode';

function Controller() {
  return (
    <div role="group" className="buttonGroup">
      
      <GoToButton 
        direction="down" 
        label="스크롤 다운" 
        onClick={() => {
          // side effect
          const practiceElement = getNode('.Practice');
          practiceElement.scroll({top: 900, behavior: 'smooth'});
        }}
      />

      <GoToButton 
        direction="up" 
        label="스크롤 업" 
        onClick={() => {
          const practiceElement = getNode('.Practice');
          practiceElement.scroll({top: 0, behavior: 'smooth'});
        }} 
      />
    </div>
  );
}

export default Controller;