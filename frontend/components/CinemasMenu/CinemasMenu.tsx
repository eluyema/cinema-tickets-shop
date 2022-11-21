import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const CinemaMocks = [
  {id: 1, name: "Київ, вулиця Хрещатик, 42"},
  {id: 2, name: "Київ, вулиця Костянтинівська, 26"},
  {id: 3, name: "Київ, вулиця Лугова, 19"},
  {id: 4, name: "Дніпро, вулиця Січових Стрільців, 95"},
  {id: 5, name: "Дніпро, вулиця Філософська, 20"},
  {id: 6, name: "Харків, вулиця Сухумська, 10"},
  {id: 7, name: "Херсон, вулиця Перекопська, 15"}
]

const CinemasMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedCinemaId, setSelectedCinemaId] = React.useState(CinemaMocks[0].id);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{textTransform: "none"}}
        onClick={handleClick}
      >
        <Typography variant="subtitle1" component="h4" sx={{ color: 'secondary.main', textTransform: null }}>
          {CinemaMocks.find(({id})=>id === selectedCinemaId)?.name}
        </Typography>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={
        {
          "& .MuiMenu-paper": {
            backgroundColor: "primary.light"
          }
        }
        }
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {CinemaMocks.map(({id, name})=>{
          const onSelectCinema = () => {
            console.log({id, name})
            setSelectedCinemaId(id);
            handleClose()
          }

          return (<MenuItem sx={{"&:hover":{ backgroundColor: "info.main",}}} onClick={onSelectCinema} key={id}>
            <Typography variant="subtitle1" component="div" sx={{ color: 'secondary.light'}}>
              {name}
            </Typography>
          </MenuItem>)
        })}
      </Menu>
    </div>
  );
}

export default CinemasMenu;