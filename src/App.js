import React from 'react'
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import 'fontsource-roboto'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { orange, green } from '@material-ui/core/colors'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px'
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 0
    }
  },
  palette: {
    primary: {
      main: orange[400],
    },
    secondary: {
      main: green[400],
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {

  const [checked, setChecked] = React.useState(true)

  return (
    <FormControlLabel
      control={<Checkbox
        checked={checked}
        icon={<DeleteIcon />}
        checkedIcon={<SaveIcon />}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{
          'aria-label': 'secondary checkbox'
        }}
      />}
      label='testing checkbox'
    />

  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar>
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  MUI Theming
                </Typography>
                <Button>
                  Log in
                </Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome to MUI
          </Typography>
            <Typography variant="subtitle1">
              Working on MUI
          </Typography>
            <Typography variant="body1">
              There are lots of variants
          </Typography>
            <ButtonStyled />
            <TextField
              variant="filled"
              color="secondary"
              type="email"
              label="the time"
              placeholder="test@test.com"
            />

            <Grid container spacing={2} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: `100%` }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: `100%` }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: `100%` }} />
              </Grid>
            </Grid>

            <CheckboxExample />
            <ButtonGroup size="large" variant="contained" color="primary">
              <Button startIcon={<SaveIcon />}>
                Save
        </Button>
              <Button startIcon={<DeleteIcon />}>
                Discard
        </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
