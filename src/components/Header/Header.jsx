import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//ßimport { push } from 'connected-react-router';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuBar: {
    backgroundColor: "#fff",
    color: "#444",
  },
  toolBar: {
    margin: "0 auto",
    maxWidth: 1024,
    width: "100%",
  },
  iconButtons: {
    margin: "0 0 0 auto",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.menuBar}>
        <Toolbar className={classes.toolBar}>
          <h1>Local Remo</h1>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
