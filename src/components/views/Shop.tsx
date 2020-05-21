import * as React from "react";
import {
  TransitionablePortal,
  Icon,
  Card,
  Feed,
  Grid,
  Menu,
} from "semantic-ui-react";
import { useSelector } from "react-redux";
import { StateType } from "../../store/types";

interface Props {
  open: boolean;
  onClose: () => void;
}
const Shop: React.FC<Props> = ({ open, onClose }) => {
  const { data } = useSelector((state: StateType) => state.card);

  return (
    <TransitionablePortal onClose={onClose} open={open}>
      <Card
        style={{ right: "2%", position: "fixed", top: "10%", zIndex: 1000 }}
      >
        <Card.Content>
          <Grid>
            <Grid.Column width="1">
              <Icon color="red" name="shopping cart" />
            </Grid.Column>
            <Grid.Column width="10">Panier</Grid.Column>
            <Grid.Column floated="right" width="2">
              <Menu.Item as="a" onClick={onClose}>
                <Icon name="close" color="red" />
              </Menu.Item>
            </Grid.Column>
          </Grid>
        </Card.Content>
        <Card.Content>
          <Feed>
            {data?.slice(0, 3).map((course) => {
              return (
                <Feed.Event key={course.id}>
                  <Feed.Label></Feed.Label>
                  <Feed.Content>
                    <Feed.Date content={course.dates} />
                    <Feed.Summary>{course.title}</Feed.Summary>
                    <Feed.Extra>${course.prix}</Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
              );
            })}
          </Feed>
        </Card.Content>
        <Card.Content>
          {data && data?.length > 0 ? (
            <Grid>
              <Grid.Column floated="left" width="8">
                <h5>Total</h5>
              </Grid.Column>
              <Grid.Column floated="right" width="8">
                <h5>
                  $ {data?.reduce((prev, course) => prev + course.prix, 0)}
                </h5>
              </Grid.Column>
            </Grid>
          ) : (
            <h4>Your card is emplty</h4>
          )}
        </Card.Content>
      </Card>
    </TransitionablePortal>
  );
};
export default Shop;
