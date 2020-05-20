import * as React from "react";
import MenuPage from "../views/MenuPage";
import { Container, Grid } from "semantic-ui-react";
import CardPage from "../views/CardPage";
import { fetchData } from "../../actions";
import { Course } from "../../store/types";
import LoaderPage from "../views/LoaderPage";
import ErrorBoundary from "../views/ErrorBoundary";

const ressource = fetchData({
  limit: 20,
  offset: 0,
});

const HomePage: React.FC = () => {
  return (
    <div>
      <MenuPage />
      <Container style={{ padding: "3% 0 0 0" }}>
        <Grid>
          <ErrorBoundary fallback={<h2>Erreur</h2>}>
            <React.Suspense fallback={<LoaderPage />}>
              <CoursesList />
            </React.Suspense>
          </ErrorBoundary>
        </Grid>
      </Container>
    </div>
  );
};

const CoursesList = () => {
  console.log("inded");
  const courses = ressource.courses.read();
  console.log(courses);
  if (courses)
    return courses.map((course: Course) => (
      <Grid.Column key={course.id} mobile={16} tablet={8} computer={4}>
        <CardPage key={course.id} course={course} />
      </Grid.Column>
    ));
  return <div></div>;
};

export default HomePage;
