import PropTypes from 'prop-types';
import { rendColor } from '../../utils/randomStyleColor';
import {
  DataSection,
  StatTitle,
  DataList,
  DataItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <DataSection>
      <StatTitle>Upload stats</StatTitle>
      <DataList>
        {stats.map(({ id, label, percentage }) => (
          <DataItem color={rendColor()} key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </DataItem>
        ))}
      </DataList>
    </DataSection>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
