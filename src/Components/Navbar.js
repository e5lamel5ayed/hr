import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TimerIcon from '@mui/icons-material/Timer';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Link } from 'react-router-dom';



const pages = ['لوحه الاداء', 'التقارير', 'مواعيد الدوام', 'طلبات التسجيل', 'المغادرات', 'الهيكل الاداري', 'اعدادات الحساب'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [anchorElReports, setAnchorElReports] = React.useState(null);
    const openReports = Boolean(anchorElReports);
    const handleOpenReportsMenu = (event) => {
        setAnchorElReports(event.currentTarget);
    };
    const handleCloseReportsMenu = () => {
        setAnchorElReports(null);
    };

    const [anchorElSchedule, setAnchorElSchedule] = React.useState(null);
    const openSchedule = Boolean(anchorElSchedule);
    const handleOpenScheduleMenu = (event) => {
        setAnchorElSchedule(event.currentTarget);
    };
    const handleCloseScheduleMenu = () => {
        setAnchorElSchedule(null);
    };

    const [anchorElStructure, setAnchorElStructure] = React.useState(null);
    const openStructure = Boolean(anchorElStructure);
    const handleOpenStructureMenu = (event) => {
        setAnchorElStructure(event.currentTarget);
    };
    const handleCloseStructureMenu = () => {
        setAnchorElStructure(null);
    };

    const [anchorElSettings, setAnchorElSettings] = React.useState(null);
    const openSettings = Boolean(anchorElSettings);
    const handleOpenSettingsMenu = (event) => {
        setAnchorElSettings(event.currentTarget);
    };
    const handleCloseSettingsMenu = () => {
        setAnchorElSettings(null);
    };

    return (
        <AppBar position="fixed" sx={{ top: 0, zIndex: 1100, backgroundColor: "#f3f7fd", color: "#7E8C93" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>



                        <Link to="/" className='text-decoration'>

                            <Button
                                key=""
                                onClick={handleCloseNavMenu}
                                sx={{ fontSize: '20px', fontWeight: '700', my: 0, mx: 1, color: '#7E8C93', display: 'flex' }}
                            >
                                لوحه الاداء
                            </Button>
                        </Link>


                        <div>
                            <Button
                                id="reports-button"
                                aria-controls={openReports ? 'reports-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={openReports ? 'true' : undefined}
                                sx={{ fontSize: '20px', fontWeight: '700', my: 0, mx: 1, color: '#7E8C93', display: 'flex' }}
                                onClick={handleOpenReportsMenu}
                            >
                                <AssessmentIcon sx={{ color: "#64899e" }} />
                                التقارير
                                <KeyboardArrowDownIcon />
                            </Button>
                            <Menu
                                id="reports-menu"
                                anchorEl={anchorElReports}
                                open={openReports}
                                onClose={handleCloseReportsMenu}
                                MenuListProps={{
                                    'aria-labelledby': 'reports-button',
                                }}
                            >
                                <MenuItem onClick={handleCloseReportsMenu}>التقارير</MenuItem>
                                <MenuItem onClick={handleCloseReportsMenu}>التقارير المصدره </MenuItem>
                            </Menu>
                        </div>

                        <div>
                            
                                <Button
                                    id="schedule-button"
                                    aria-controls={openSchedule ? 'schedule-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openSchedule ? 'true' : undefined}
                                    sx={{ fontSize: '20px', fontWeight: '700', my: 0, mx: 1, color: '#7E8C93', display: 'flex' }}
                                    onClick={handleOpenScheduleMenu}
                                >
                                    <TimerIcon sx={{ color: "#64899e" }} />
                                    مواعيد الدوام
                                    <KeyboardArrowDownIcon />
                                </Button>
                            
                            <Menu
                                id="schedule-menu"
                                anchorEl={anchorElSchedule}
                                open={openSchedule}
                                onClose={handleCloseScheduleMenu}
                                MenuListProps={{
                                    'aria-labelledby': 'schedule-button',
                                }}
                            >
                                <Link to="/Home2" className='text-decoration'>
                                <MenuItem onClick={handleCloseScheduleMenu}>مواعيد الدوام</MenuItem>
                                </Link>
                                
                                <MenuItem onClick={handleCloseScheduleMenu}>تعديل موعد الحضور</MenuItem>
                                <MenuItem onClick={handleCloseScheduleMenu}>الحركه المعلقه</MenuItem>
                            </Menu>
                        </div>

                        <Button
                            key=""
                            onClick={handleCloseNavMenu}
                            sx={{ fontSize: '20px', fontWeight: '700', my: 0, mx: 1, color: '#7E8C93', display: 'flex' }}
                        >
                            <PlaylistAddCheckIcon sx={{ color: "#64899e" }} />
                            طلبات التسجيل
                        </Button>

                        <Button
                            key=""
                            onClick={handleCloseNavMenu}
                            sx={{ fontSize: '20px', fontWeight: '700', my: 0, mx: 1, color: '#7E8C93', display: 'flex' }}
                        >
                            <PlayCircleOutlineIcon sx={{ color: "#64899e" }} />
                            المغادرات
                        </Button>

                        <div>
                            <Button
                                id="structure-button"
                                aria-controls={openStructure ? 'structure-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={openStructure ? 'true' : undefined}
                                sx={{ fontSize: '20px', fontWeight: '700', my: 0, mx: 1, color: '#7E8C93', display: 'flex' }}
                                onClick={handleOpenStructureMenu}
                            >
                                <PeopleIcon sx={{ color: "#64899e" }} />
                                الهيكل الاداري
                                <KeyboardArrowDownIcon />
                            </Button>
                            <Menu
                                id="structure-menu"
                                anchorEl={anchorElStructure}
                                open={openStructure}
                                onClose={handleCloseStructureMenu}
                                MenuListProps={{
                                    'aria-labelledby': 'structure-button',
                                }}
                            >
                                <MenuItem onClick={handleCloseStructureMenu}>الجهات</MenuItem>
                                <MenuItem onClick={handleCloseStructureMenu}>الموظفين</MenuItem>
                            </Menu>
                        </div>

                        <div>
                            <Button
                                id="settings-button"
                                aria-controls={openSettings ? 'settings-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={openSettings ? 'true' : undefined}
                                sx={{ fontSize: '20px', fontWeight: '700', my: 0, mx: 1, color: '#7E8C93', display: 'flex' }}
                                onClick={handleOpenSettingsMenu}
                            >
                                <SettingsIcon sx={{ color: "#64899e" }} />
                                اعدادات الحساب
                                <KeyboardArrowDownIcon />
                            </Button>
                            <Menu
                                id="settings-menu"
                                anchorEl={anchorElSettings}
                                open={openSettings}
                                onClose={handleCloseSettingsMenu}
                                MenuListProps={{
                                    'aria-labelledby': 'settings-button',
                                }}
                            >
                                <MenuItem onClick={handleCloseSettingsMenu}>المواقع</MenuItem>
                                <MenuItem onClick={handleCloseSettingsMenu}>الأسئله</MenuItem>
                                <MenuItem onClick={handleCloseSettingsMenu}>الجمل الصوتيه</MenuItem>
                                <MenuItem onClick={handleCloseSettingsMenu}>الصلاحيات</MenuItem>
                                <MenuItem onClick={handleCloseSettingsMenu}>مراجعه الحركات المرفوضه</MenuItem>
                                <MenuItem onClick={handleCloseSettingsMenu}>اداره التنبيهات</MenuItem>
                                <MenuItem onClick={handleCloseSettingsMenu}>تغيير معلومات الحساب</MenuItem>
                                <MenuItem onClick={handleCloseSettingsMenu}>تغير كلمة المرور</MenuItem>
                                <MenuItem onClick={handleCloseSettingsMenu}>تغيير لغه التنبيهات</MenuItem>
                                <MenuItem onClick={handleCloseSettingsMenu}>معلومات الاجهزه</MenuItem>
                            </Menu>
                        </div>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
