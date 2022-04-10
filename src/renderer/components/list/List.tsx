import { useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Grid } from '@mui/material';
import Brand from '../brand/Brand';
import './List.scss';

export default function List() {
  const brands: any[] = useSelector((state: any[]) => state);
  return (
    <>
      <div className="list-header">
        <h2>Brands ({brands.length})</h2>
        <div className="header-buttons">
          <Button startIcon={<AddIcon />} variant="contained">
            Add brand
          </Button>
          <Button startIcon={<EditIcon />} variant="contained">
            Edit schema
          </Button>
        </div>
      </div>
      <div className="list">
        {brands && brands.length > 0 && (
          <Grid container spacing={2}>
            {brands.map((brand: any) => {
              return <Brand key={brand.default.suffix} brand={brand} />;
            })}
          </Grid>
        )}
      </div>
    </>
  );
}
