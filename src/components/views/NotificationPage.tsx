import * as React from "react";
import {
  TransitionablePortal,
  Label,
  Segment,
  Header,
} from "semantic-ui-react";

interface Props {
  title: string;
  message: string;
}

const NotificationPage: React.FC<Props> = React.memo(({ title, message }) => {
  return (
    <TransitionablePortal
      open={true}
      transition={{ animation: "fly left", duration: 500 }}
    >
      <Segment
        style={{
          right: 0,
          position: "absolute",
          top: 0,
          zIndex: 1000,
        }}
      >
        <Header>
          <Label basic color="red">
            {title}
          </Label>
        </Header>
        <p>{message}</p>
      </Segment>
    </TransitionablePortal>
  );
});

export default NotificationPage;
