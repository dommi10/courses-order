import * as React from "react";
import {
  Table,
  Grid,
  Container,
  Header,
  Button,
  Icon,
} from "semantic-ui-react";
import MenuPage from "../views/MenuPage";
import { useSelector } from "react-redux";
import { StateType } from "../../store/types";
import PaymentPage from "../payment/ModalPayment";

interface Props {}

const CartPage: React.FC<Props> = React.memo(() => {
  const { data } = useSelector((state: StateType) => state.card);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => setOpen(!open);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <MenuPage />
      <Container style={{ padding: "3%  2% " }}>
        <Grid>
          <Grid.Row>
            <Header as="h1">Checkout</Header>
          </Grid.Row>
          <Grid.Row>
            {data?.length === 0 ? (
              <Container>
                <Grid>
                  <Grid.Column width="6" />
                  <Grid.Column width="10">
                    <Header as="h3" color="orange">
                      {" "}
                      <Icon name="warning circle" />
                      Nothing to Show
                    </Header>
                  </Grid.Column>
                </Grid>
              </Container>
            ) : (
              <Table size="small" unstackable>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Product</Table.HeaderCell>
                    <Table.HeaderCell>Quantity</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {data?.map((course) => (
                    <Table.Row key={course.id}>
                      <Table.Cell>{course.title}</Table.Cell>
                      <Table.Cell>1</Table.Cell>
                      <Table.Cell>{course.prix}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>

                <Table.Footer fullWidth>
                  <Table.Row>
                    <Table.HeaderCell>
                      <Header as="h4" color="red">
                        {data?.length} Products
                      </Header>
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      <Header as="h4" color="green">
                        Total {data?.length}
                      </Header>
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      <Header as="h4" color="green">
                        USD{" "}
                        {data
                          ?.reduce((prev, course) => prev + course.prix, 0)
                          .toPrecision(3)}
                      </Header>
                    </Table.HeaderCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell>
                      <Button primary onClick={handleClick}>
                        <Icon name="credit card" />
                        Pay
                      </Button>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>
            )}
          </Grid.Row>
        </Grid>
      </Container>
      <PaymentPage onClose={handleClose} open={open} />
    </div>
  );
});

export default CartPage;
