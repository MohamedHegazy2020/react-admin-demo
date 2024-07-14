import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PosterList } from "./Components/PostersList";
import { PosterCreate } from "./Components/PosterCreate";
import { PosterEdit } from "./Components/PosterEdit";
import { CategoryList } from "./Components/CategoryList";
import { CategoryEdit } from "./Components/CategoryEdit";
import { CategoryCreate } from "./Components/CategoryCreate";
const dataProvider = jsonServerProvider("http://localhost:3000");
const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="posters"
        list={PosterList}
        create={PosterCreate}
        edit={PosterEdit}
      />
      <Resource
        name="categories"
        list={CategoryList}
        edit={CategoryEdit}
        create={CategoryCreate}
      />
    </Admin>
  );
};

export default App;
