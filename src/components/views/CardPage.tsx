import * as React from "react";
import { Card, Image, Icon, Grid, Header } from "semantic-ui-react";
import { Course } from "../../store/types";

interface Props {
  course: Course;
}
const CardPage: React.FC<Props> = React.memo(({ course }) => {
  return (
    <Card>
      <Image src="https://t3.ftcdn.net/jpg/01/15/20/62/240_F_115206263_S0od3rldoeGZLlziVfmTb2tGVl09KIEc.jpg" />
      <Card.Content>
        <Card.Header as="a">{course.title}</Card.Header>
        <Card.Meta>{course.title}</Card.Meta>
        <Card.Description>
          {course.description ?? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
        </Card.Description>
        <br />

        <Grid>
          <Grid.Row>
            <Grid.Column floated="left" width="12">
              <Header size="tiny" color="blue">
                save of up 50 % off
              </Header>
            </Grid.Column>
            <Grid.Column floated="right" width="4">
              <Header size="medium">${course.prix}</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
      <Card.Content extra>
        <a href="/">
          <Icon name="eye" />
          view
        </a>
      </Card.Content>
    </Card>
  );
});
export default CardPage;
