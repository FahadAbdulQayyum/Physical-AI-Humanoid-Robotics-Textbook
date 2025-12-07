import React from 'react';
import Link from '@docusaurus/Link';
import {useLanguage} from '@site/src/context/LanguageContext';

interface ModuleCardProps {
  id: string;
  title: string;
  titleUrdu?: string;
  weekRange: string;
  description: string;
  descriptionUrdu?: string;
  learningOutcomes: string[];
  learningOutcomesUrdu?: string[];
}

export default function ModuleCard({
  id,
  title,
  titleUrdu,
  weekRange,
  description,
  descriptionUrdu,
  learningOutcomes,
  learningOutcomesUrdu,
}: ModuleCardProps): JSX.Element {
  const {isUrdu} = useLanguage();

  const displayTitle = isUrdu && titleUrdu ? titleUrdu : title;
  const displayDescription = isUrdu && descriptionUrdu ? descriptionUrdu : description;
  const displayOutcomes = isUrdu && learningOutcomesUrdu ? learningOutcomesUrdu : learningOutcomes;

  return (
    <div className="module-card-wrapper">
      {/* Module-level toggle removed; global toggle provided via Root */}
      <Link to={`/docs/${id}/`} className="module-card" style={{textDecoration: 'none'}}>
        <div className="week-range">{weekRange}</div>
        <h3>{displayTitle}</h3>
        <p className="description">{displayDescription}</p>
        <div className="learning-outcomes">
          <strong>{isUrdu ? 'سیکھنے کے مقاصد:' : 'Learning Outcomes:'}</strong>
          <ul>
            {displayOutcomes.slice(0, 3).map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
}
