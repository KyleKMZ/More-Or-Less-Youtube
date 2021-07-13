import React from "react";
import {
  Button,
  Container,
  Segment,
  Header,
  Statistic,
} from "semantic-ui-react";
import IFrame from "./IFrame";

const VideoCard = ({ videoTitle, videoID, videoViews, isQuestion }) => {
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  let conditionalRender;

  if (!isQuestion) {
    conditionalRender = (
      <Statistic id="vidcard-viewcount">
        <Statistic.Value id="vidcard-value">
          {numberWithCommas(videoViews)}
        </Statistic.Value>
        <Statistic.Label id="vidcard-text">VIEWS</Statistic.Label>
      </Statistic>
    );
  } else {
    conditionalRender = (
      <div id="vidcard-buttons">
        <Button.Group fluid size="huge">
          <Button id="vidcard-button-positive" basic positive>
            More
          </Button>
          <Button.Or />
          <Button id="vidcard-button-negative" basic negative>
            Less
          </Button>
        </Button.Group>
        <h4 id="vidcard-text">VIEWS</h4>
      </div>
    );
  }

  return (
    <Container textAlign="center">
      <Header as="h2" id="vidcard-title">
        {videoTitle}
      </Header>

      <IFrame videoID={videoID} videoTitle={videoTitle} />

      <Segment raised>
        <h3 id="vidcard-text">This video has</h3>
        {conditionalRender}
      </Segment>
    </Container>
  );
};

export default VideoCard;
