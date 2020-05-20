import * as React from "react";
import { Item, Button, Icon } from "semantic-ui-react";
import { Course } from "../../store/types";

interface Props {
  course: Course;
}
const CardPage: React.FC<Props> = React.memo(({ course }) => {
  return (
    <Item>
      <Item.Image
        size="tiny"
        src="https://t3.ftcdn.net/jpg/01/15/20/62/240_F_115206263_S0od3rldoeGZLlziVfmTb2tGVl09KIEc.jpg"
      />
      <Item.Content>
        <Item.Header as="a">{course.title}</Item.Header>
        <Item.Meta>{course.title}</Item.Meta>
        <Item.Description>
          {course.description ?? "description ici"}
        </Item.Description>
        <Item.Extra>
          <Button primary floated="right">
            View
            <Icon name="eye" />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
});
export default CardPage;
