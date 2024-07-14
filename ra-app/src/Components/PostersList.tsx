import { Datagrid, List, NumberField, ReferenceField, TextField } from 'react-admin';

export const PosterList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="category_id" reference="categories" />
            <TextField source="title" sx={{textDecoration:'capitalize'}}/>
            <NumberField source="width" />
            <NumberField source="height" />
            <NumberField source="price" />
            <TextField source="thumbnail" />
            <TextField source="image" />
            <TextField source="description" />
            <NumberField source="stock" />
            <NumberField source="sales" emptyText='N/A' sx={{fontWeight:'bold'}}/>
        </Datagrid>
    </List>
);