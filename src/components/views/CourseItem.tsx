import * as React from "react";
import { Button, Header, Icon, Image, Modal } from "semantic-ui-react";
import { Course } from "../../store/types";

interface Props {
  course: Course;
  open: boolean;
  onClose: () => void;
  onAdd: () => void;
}
const CourseItem: React.FC<Props> = React.memo(
  ({ course, open, onClose, onAdd }) => {
    return (
      <Modal size="tiny" dimmer="blurring" open={open} onClose={onClose}>
        <Modal.Header>{course.title}</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src="https://www.thoughtco.com/thmb/BuCp8KxLApKlqqHw17Oo8BBme3E=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-521811839-58d894003df78c5162269755.jpg"
          />
          <Modal.Description>
            <Header>{course.title}</Header>
            <p>
              {course.description ??
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
            </p>

            <Header>Date added:</Header>
            {course.dates}
            <br />
            <Header>price</Header>
            <Header>${course.prix}</Header>
            <br />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={onAdd}>
            Add <Icon name="chevron right" />
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
);
export default CourseItem;
