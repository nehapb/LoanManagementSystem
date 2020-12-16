
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CreateLoanProgram from './CreateLoanProgram';
import ViewManager from './ViewManager';
import AdminClients from './AdminClients';
import AddManager from './AddManager';
import Header from '../Components/Header';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
   <Header/>
    <div className={classes.root}>
      <AppBar position="sticky" style={{ background: '#0b8793' }}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          backgroundColor="#D97D54"
        >
          <LinkTab label="Add LoanProgram" {...a11yProps(0)} />
         
          <LinkTab label="View Staffs" {...a11yProps(1)} />
          <LinkTab label="Loan Applicants" {...a11yProps(2)}/>
          <LinkTab label="Add Staffs" {...a11yProps(3)}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
<CreateLoanProgram/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ViewManager/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AdminClients/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AddManager/>
      </TabPanel>
    </div></div>
  );
}
