import React from 'react';
import star from '../../assets/tagsIcons/Star.svg';
import smiley from '../../assets/tagsIcons/Smiley.svg';
import thumbsUp from '../../assets/tagsIcons/ThumbsUp.svg';
import heart from '../../assets/tagsIcons/Heart.svg';
import { ContainersUserTag } from './style';


const UserTags: React.FC = () => {
  return (
    <ContainersUserTag>
    <div className="user-tags">
      <ul className='user-tags-items'>
        <li>
          <span>Fãs</span>
          <div className="tag-content">
            <img src={star} alt="Fãs" /><span>85</span>
          </div>
        </li>
        <li>
          <span>Confiável</span>
          <div className="tag-content">
            <img src={smiley} alt="Confiável" />
            <img src={smiley} alt="Confiável" />
          </div>
        </li>
        <li>
          <span>Legal</span>
          <div className="tag-content">
            <img src={thumbsUp} alt="Legal" />
            <img src={thumbsUp} alt="Legal" />
            <img src={thumbsUp} alt="Legal" />
          </div>
        </li>
        <li>
          <span>Sexy</span>
          <div className="tag-content">
            <img src={heart} alt="Sexy" />
            <img src={heart} alt="Sexy" />
          </div>
        </li>
      </ul>
    </div>
    </ContainersUserTag>
  );
};

export default UserTags;