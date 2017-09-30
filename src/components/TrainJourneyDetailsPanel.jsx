import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
import JourneyBar from './TrainJourneyBar';
import JourneyDetails from './TrainJourneyDetails';

const TrainJourneyDetailsPanel =
  ({ journey, routeRestriction }) => [
    <Collapsible
      trigger={

        <JourneyBar
          journey={journey}
        />
      }
    >
      <JourneyDetails
        journey={journey}
        routeRestriction={routeRestriction}
      />
    </Collapsible>,
  ];

TrainJourneyDetailsPanel.propTypes = {
  journey: PropTypes.shape({}).isRequired,
  routeRestriction: PropTypes.string.isRequired,
};

export default TrainJourneyDetailsPanel;
