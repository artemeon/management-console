const en = {
  installer_config_dbdriver: 'Database driver',
  installer_config_dbhostname: 'Database server',
  installer_config_dbname: 'Database name',
  installer_config_dbpassword: 'Database password',
  installer_config_dbport: 'Database port',
  installer_config_dbportinfo: 'To use a standard-port, leave empty.',
  installer_config_dbprefix: 'Table prefix',
  installer_config_dbusername: 'Database user',
  installer_config_intro: '<b>Set up database-access</b><br />',
  installer_config_write: 'Save to config.php',
  installer_dbcx_error:
    'Connection to the database could not be established. Please verify the connection credentials.',
  installer_dbdriver_na:
    'We are sorry, but the selected database-driver is not available on the system. Please install the following PHP-extension in order to use the driver',
  installer_dbdriver_oci8:
    'Attention: The Oracle-driver is still under development.',
  installer_dbdriver_sqlite3:
    'The SQLite-driver creates a database stored at /project/dbdumps. Therefore the database name is used as the filename, all other values are not taken into account.',
  installer_elements_found:
    '<b>Installation of the page elements</b><br /><br />Select which of the found page elements you want to install:<br /><br />',
  installer_finish_hints:
    "<div class:'alert alert-danger'><b>Heads up!</b> You should reset the write permission on /project/module_system/system/config/config.php to read-only permission.<br />Additionally, you should remove the file /installer.php completely out of security reasons.</div><br /><br />",
  installer_finish_intro:
    "<b>Installation finshed</b><br /><br /><div class:'alert alert-success'><b>Congratulations!</b> The installation finished successfully, Kajona is now ready for use!</div><br />The application is available at:<br />&nbsp,&nbsp,&nbsp,&nbsp,<a href:\"",
  installer_given: 'given',
  installer_install: 'Install',
  installer_installpe: 'Install page elements',
  installer_loaded: 'loaded',
  installer_login_email: 'Email',
  installer_login_installed:
    'The system is already installed and an admin-account already exists.',
  installer_login_intro:
    '<b>Set up admin-user</b><br /><br />Please provide a username and a password.<br />Those will be used later to log in to the administration.<br />Because of security reasons, usernames like "admin or "administrator should be avoided.<br /><br />',
  installer_login_password: 'Password',
  installer_login_save: 'Create account',
  installer_login_username: 'User name',
  installer_missing: 'missing',
  installer_mode_auto: 'Automatic installation',
  installer_mode_auto_hint:
    'All modules available and their samplecontents are installed.',
  installer_mode_manual: 'Manual installation',
  installer_mode_manual_hint:
    'Manual selection of the modules to install. The installation of the samplecontent may be skipped.',
  installer_module_notinstalled: 'Module not installed',
  installer_modules_found:
    '<b>Install/update the modules</b><br /><br />Select which of the found modules you want to install:<br /><br />',
  installer_modules_needed: 'Modules needed to install: ',
  installer_next: 'Next step >',
  installer_nloaded: 'missing',
  installer_phpcheck_folder: 'Write-permissions on ',
  installer_phpcheck_intro: '<b>Welcome</b><br /><br />',
  installer_phpcheck_intro2:
    '<br />The installation of the system is spilt up into serveral steps: <br />Check of permissions, DB-configuration, credentials to access the administration and module-installation<br />Dependant on the modules choosen, the number of steps can vary.<br /><br />The permissions on some files and the availability <br />of needed php-modules are being checked:<br />',
  installer_phpcheck_lang:
    'To load the installer using a different language, use one of the following links:<br /><br />',
  installer_phpcheck_module: 'PHP-extension ',
  installer_phpcheck_version: 'PHP-version ',
  installer_prev: '< Previous step',
  installer_samplecontent:
    "<b>Installation of the samplecontent</b><br /><br />The module 'samplecontent' creates a few standard pages and navigation entries.<br />According to the modules installed, additional contents will be created.<br /><br /><br />",
  installer_step_adminsettings: 'Admin access',
  installer_step_dbsettings: 'Database settings',
  installer_step_finish: 'Finalize',
  installer_step_autoinstall: 'Installation',
  installer_step_modules: 'Modules',
  installer_step_phpsettings: 'PHP configuration',
  installer_step_samplecontent: 'Demo content',
  installer_systemlog: 'System log',
  installer_systemversion_needed: 'Minimal version required: ',
  installer_update: 'Update to ',
  installer_versioninstalled: 'Version installed: ',

  installer_package_title: 'Package',
  installer_package_version: 'Version',
  installer_package_installation: 'Installation',
  installer_package_samplecontent: 'Samplecontent',
  installer_package_hint: 'Hints',
  installer_package_hint_noinstaller:
    "The package doesn't require an explicit installation",
  installer_start_statusinfo_intro: 'Currently installing: ',
  installer_start_installation: 'Start installation',
  installer_start_installation_hint:
    'All required data is given, the installation is ready to go!'
}
export default en
