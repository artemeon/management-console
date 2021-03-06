const en = {
  permissions_default_header: [
    'View',
    'Edit',
    'Delete',
    'Permissions',
    '',
    '',
    '',
    '',
    '',
    'Changelog'
  ],
  permissions_header: [
    'View',
    'Edit',
    'Delete',
    'Permissions',
    'Settings',
    'Systemtasks',
    'Systemlog',
    '',
    'Aspects'
  ],
  permissions_root_header: [
    'View',
    'Edit',
    'Delete',
    'Permissions',
    'Universal 1',
    'Universal 2',
    'Universal 3',
    'Universal 4',
    'Universal 5',
    'Changelog'
  ],
  _admin_nr_of_rows_: 'Number of records per page',
  _admin_nr_of_rows_hint:
    'Number of records in the admin-lists, if supported by the module. Can be redefined by a module!',
  _admin_only_https_: 'Admin only via HTTPS',
  _admin_only_https_hint:
    'Forces the use of HTTPS when loading the administration. The webserver has to support HTTPS to use this option.',
  _cookies_only_https_hint:
    'If enabled cookies are limited to https connections. Only to be used in case every resource is available by https.',
  _cookies_only_https_: 'Secure Cookies',
  _remoteloader_max_cachetime_: 'Cache time of external sources',
  _remoteloader_max_cachetime_hint:
    'Time in seconds to cache externally loaded contents (e.g. RSS-Feeds).',
  _system_admin_email_: 'Admin Email',
  _system_admin_email_hint:
    'If an address is given, an email is sent to in case of critical errors.',
  _system_browser_cachebuster_: 'Browser-Cachebuster',
  _system_browser_cachebuster_hint:
    "This value is appended as GET parameter to all references to JS/CSS files. By incrementing this value the browser will be forced to reload the files from the server, regardless of the browsers caching settings and the sent HTTP headers. The value will be incremented automatically by the system task 'Flush cache'.",
  _system_changehistory_enabled_: 'Changetrack enabled',
  _system_dbdump_amount_: 'Number of DB-dumps',
  _system_dbdump_amount_hint: 'Defines how many DB-dumps should be kept.',
  _system_graph_type_: 'Chart-library used',
  _system_graph_type_hint:
    'Valid values: pchart, ezc, jqplot. pChat has to be downloaded manually, for optimal images ezc makes use of the php-module \'cairo\'.<br />See also <a href="http://www.kajona.de/nicecharts.html" target="_blank">http://www.kajona.de/nicecharts.html</a>',
  _system_lock_maxtime_: 'Maximum locktime',
  _system_lock_maxtime_hint:
    'After the given duration in seconds, locked records will be unlocked automatically.',
  _system_mod_rewrite_: 'URL-rewriting',
  _system_mod_rewrite_hint:
    'Activates/deactivates URL-rewriting for nice-URLs. The apache-module "mod_rewrite" has to be installed and activated in the .htaccess file to use this option!',
  _system_mod_rewrite_admin_only_: 'Backend rewrite without /admin',
  _system_mod_rewrite_admin_only_hint:
    'If enabled, backend links are generated without /admin. Only to be used if portal is not available.',
  _system_portal_disable_: 'Deactivate portal',
  _system_portal_disable_hint: 'Activates/deactivates the whole portal.',
  _system_portal_disablepage_: 'Temporary page',
  _system_portal_disablepage_hint:
    'This page is shown, if the portal is deactivated.',
  _system_release_time_: 'Duration of a session',
  _system_release_time_hint:
    'After this amount of seconds a session gets invalid.',
  _system_timezone_: 'System timezone',
  _system_timezone_hint:
    "Set the systems timezone in order to get correct dates. See <a href='http://www.php.net/manual/en/timezones.php' target='_blank'>http://www.php.net/manual/en/timezones.php</a> for a list of valid entries.",
  _system_email_forcesender_: 'Enforce default sender',
  _system_email_forcesender_hint:
    "Some mail gateways require a special domain for a mails' from-address. Force all mails to make use of the default-sender by enabling the force-switch.",
  _system_email_defaultsender_: 'Default email from-address',
  _system_email_defaultsender_hint:
    'If the mail misses a from-address, the address is used as a fallback.',
  _system_session_ipfixation_: 'Bind session to ip',
  _system_session_ipfixation_hint:
    'Normally, sessions are bound to the clients source ip. When using procy servers, this could lead to problems (logouts).',
  _system_lists_clickable_: 'Clickable default lists',
  _system_lists_clickable_hint:
    'If enabled, a click on a list row triggers the first action (icon) automatically',
  _system_permission_assignment_threshold_: 'Permissions threshold',
  _system_permission_assignment_threshold_hint:
    'Nr of user to group assignments required to switch from or based permission queries to table based one',
  about_part1:
    '<h2>Kajona V6 - Open Source Content Management System</h2>Kajona V 6.2<br /><br /><a href="http://www.kajona.de" target="_blank">www.kajona.de</a><br /><a href="mailto:info@kajona.de" target="_blank">info@kajona.de</a><br /><br />For further information, support or proposals, please visit our website.<br />Additional support is provided using our <a href="http://board.kajona.de/" target="_blank">board</a>.',
  about_part2:
    '<ul><li><a href="https://www.xing.com/profile/Stefan_Idler" target="_blank">Stefan Idler</a>, <a href="mailto:sidler@kajona.de">sidler@kajona.de</a> (project management, technical administration, development)</li></ul>',
  about_part2_header: '<h2>Head developers</h2>',
  about_part2a:
    '<ul><li>Stefan Bongartz</li><li>Christoph Dreymann</li><li><a href="https://www.xing.com/profile/Florian_Feigenbutz" target="_blank">Florian Feigenbutz</a></li><li>Thomas Hertwig</li><li><a href="mailto:tim.kiefer@kojikui.de" target="_blank">Tim Kiefer</a></li><li>Christoph Kappestein</li><li>Mario Lange</li><li>Stefan Meyer</li><li><a href="https://www.xing.com/profile/Jakob_Schroeter" target="_blank">Jakob Schr\u00f6ter</a>, <a href="mailto:jschroeter@kajona.de">jschroeter@kajona.de</a></li><li><a href="mailto:ph.wolfer@googlemail.com" target="_blank">Philipp Wolfer</a></li><li>And various others (see <a href="https://github.com/kajona/kajonacms">https://github.com/kajona/kajonacms</a>)</li></ul>',
  about_part2a_header: '<h2>Contributors / Developers</h2>',
  about_part2b:
    '<ul><li>Bulgarian: <a href="mailto:contact@rudee.info">Rumen Emilov</a></li><li>Portuguese: <a href="http://www.nunocruz.com" target="_blank">Nuno Cruz</a></li><li>Russian: <a href="https://www.xing.com/profile/Ksenia_KramVinogradova" target="_blank">Ksenia Kram</a>, <a href="https://www.xing.com/profile/Michael_Kram" target="_blank">Michael Kram</a></li><li>Swedish: <a href="mailto:villa.carlberg@telia.com">Per Gunnarsson</a></li></ul>',
  about_part2b_header: '<h2>Translations</h2>',
  about_part3:
    '<ul><li>browscap-php, <a href="https://github.com/browscap/browscap-php" target="_blank">https://github.com/browscap/browscap-php</a></li><li>CKEditor: Frederico Caldeira Knabben, <a href="http://www.ckeditor.com/" target="_blank">http://www.ckeditor.com/</a></li><li>DejaVu Fonts, <a href="http://dejavu.sourceforge.net" target="_blank">http://dejavu.sourceforge.net</a></li><li>Bootstrap, <a href="http://twitter.github.com/bootstrap/" target="_blank">http://twitter.github.com/bootstrap/</a></li><li>jQuery File Upload, <a href="http://blueimp.github.io/jQuery-File-Upload//" target="_blank">http://blueimp.github.io/jQuery-File-Upload/</a></li><li>JQuery, <a href="http://jquery.com/" target="_blank">http://jquery.com/</a></li><li>JQPlot, <a href="http://www.jqplot.com" target="_blank">http://www.jqplot.com</a></li><li>Font Awesome, <a href="http://fortawesome.github.io/Font-Awesome/" target="_blank">http://fortawesome.github.io/Font-Awesome</a></li><li>Open Sans, <a href="http://opensans.com/" target="_blank">http://opensans.com/</a></li><li>PHPStorm, <a href="http://www.jetbrains.com/phpstorm/" target="_blank">http://www.jetbrains.com/phpstorm/</a></li><li>MantisBT, <a href="http://www.mantisbt.org/" target="_blank">http://www.mantisbt.org/</a></li></ul>',
  about_part3_header: '<h2>Credits</h2>',
  about_part4:
    '<h2>Donate</h2><p>If you like to work with Kajona and want to support the project, feel free to donate: </p> <form method="post" action="https://www.paypal.com/cgi-bin/webscr" target="_blank"><input type="hidden" value="_donations" name="cmd" /> <input type="hidden" value="donate@kajona.de" name="business" /> <input type="hidden" value="Kajona Development" name="item_name" /> <input type="hidden" value="0" name="no_shipping" /> <input type="hidden" value="1" name="no_note" /> <input type="hidden" value="EUR" name="currency_code" /> <input type="hidden" value="0" name="tax" /> <input type="hidden" value="PP-DonationsBF" name="bn" /> <input type="submit" name="submit" value="Donate via PayPal" class="inputSubmit" /></form>',
  about_part5_header: '<h2>Sourcecode</h2>',
  about_part5:
    '<p><a href="https://github.com/kajona/kajonacms">https://github.com/kajona/kajonacms</a></p>',
  action_about: 'About Kajona',
  action_list_aspect: 'Aspects',
  action_changelog: 'Change history',
  action_list: 'Installed modules',
  action_locked_records: 'Locked records',
  action_final_delete_record: 'Delete record finally',
  final_delete_submit: 'Delete',
  final_delete_question:
    'Do you really want to delete the record &quot;{0}&quot; from the database? Restoring the record will no longer be possible. All sub-ordinated records will be deleted, too.',
  action_deleted_records: 'Deleted records',
  action_restore_record_blocked:
    "The record can't be restored, superior records are not yet restored.",
  action_restore_record: 'Restore record',
  action_system_info: 'System information',
  action_system_sessions: 'Sessions',
  action_system_settings: 'System settings',
  action_system_tasks: 'System tasks',
  action_systemlog: 'System logfile',
  action_unlock_record: 'Unlock record',
  delete_aspect_question:
    'Do you really want to delete the aspect &quot;<b>%%element_name%%</b>&quot;?',
  aspect_isDefault: 'default aspect',
  aspect_list_empty: 'No aspects created',
  cache_entry_size: 'Size',
  cache_hash1: 'Hash 1',
  cache_hash2: 'Hash 2',
  cache_leasetime: 'Valid until',
  cache_source: 'Source',
  change_action: 'Action',
  change_module: 'Module',
  change_newvalue: 'New value',
  change_oldvalue: 'Old value',
  change_property: 'Property',
  change_record: 'Object',
  change_type_setting: 'Setting',
  change_user: 'User',
  change_report_title: 'Change history',
  change_export_excel: 'Excel export',
  change_diff: 'Compare',
  dateStyleLong: 'm/d/Y H:i:s',
  dateStyleShort: 'm/d/Y',
  desc: 'Edit permissions of',
  dialog_cancelButton: 'Cancel',
  dialog_copyButton: 'Yes, copy',
  dialog_copyHeader: 'Confirm copy',
  dialog_deleteButton: 'Yes, delete',
  dialog_deleteHeader: 'Confirm deletion',
  dialog_loadingHeader: 'Please wait',
  dialog_removeAssignmentButton: 'Yes, remove assignment',
  dialog_removeAssignmentHeader: 'Confirm assignment removal',
  errorintro: 'Please complete the following fields',
  fehler_setzen: 'Error saving permissions',
  filebrowser: 'Select a file',
  form_aspect_default: 'Default aspect',
  form_aspect_name: 'Name',
  form_aspect_name_hint:
    "The name is used as an internal identifier. To localize an aspects' title, create a lang-entry named lang_NAME.",
  form_deletedrecordsfilter_systemid: 'Systemid',
  form_deletedrecordsfilter_class: 'Class',
  form_deletedrecordsfilter_comment: 'Record comment',
  form_default_group_name: 'Basic data',
  locked_record_info: 'Locked since: {0} &middot; Locked by: {1}',
  log_empty: 'No entries in the system-logfile',
  login_xml_error: 'Login failed',
  login_xml_succeess: 'Login succeeded',
  logout_xml: 'Logout succeeded',
  mail_body: 'Content',
  mail_cc: 'Recipient in CC',
  mail_recipient: 'Recipient',
  mail_send_error: 'Error sending the email. Please retry the last action.',
  mail_send_success: 'Email sent successfully.',
  mail_subject: 'Subject',
  messageprovider_exceptions_name: 'System-Exceptions',
  messageprovider_personalmessage_name: 'Personal messages',
  modul_titel_aspect: 'Edit aspects',
  modul_rechte_root: 'Rights root-record',
  modul_sortdown: 'Shift down',
  modul_sortup: 'Shift up',
  modul_status_disabled: 'Set module active (is inactive)',
  modul_status_enabled: 'Set module inactive (is active)',
  modul_status_system:
    'Woops, you want to set the system-kernel inactive? To process, please execute format c: instead! ;-)',
  modul_titel: 'System',
  permissions_toggle_visible: 'Show non-configured rows',
  permissions_toggle_hidden: 'Hide non-configured rows',
  permissions_success: 'Permissions saved successfully.',
  permissons_filter: 'Text-filter',
  permissons_add_group: 'Add group',
  moduleRightsTitle: 'Permissions',
  numberStyleDecimal: '.',
  numberStyleThousands: ',',
  pageview_forward: 'Forward',
  pageview_total: 'Total: ',
  quickhelp_change:
    'The permissions of a record are adjustable within this page',
  quickhelp_list:
    "The list of modules provides an overview of the modules currently installed.<br />Additionally, the modules versions and the installation dates are displayed.<br />You are able to modify the permissons of the module-rights-record, the base for all contents to inherit their permissions from (if activated).<br />It's also possible to reorder the modules in the module navigation by changing the position of a module in this list.",
  quickhelp_module_list:
    "The list of modules provides an overview of the modules currently installed.<br />Additionally, the modules versions and the installation dates are displayed.<br />You are able to modify the permissons of the module-rights-record, the base for all contents to inherit their permissions from (if activated).<br />It's also possible to reorder the modules in the module navigation by changing the position of a module in this list.",
  quickhelp_system_info:
    'Kajona tries to find out a few information about the environment in which Kajona is running.',
  quickhelp_system_settings:
    'You can define basic settings of the system. Therefore, every module is allowed to provide any number of settings. The changes made should be made with care, wrong values can make the system become unusuable.<br /><br />Note: If there are changes made to a given module, you have to save the new values for every module! Changes on other modules will be ignored! When clicking a save-button, just the corresponding values are saved.',
  quickhelp_system_tasks:
    'Systemtasks are small programms handling everyday work.<br />This includes tasks to backup the database or to restore backups created before.',
  quickhelp_systemlog:
    'The system-log shows the entries of the global logfile.<br />The granularity of the logging-engine could be set in the config-file (/project/system/config/config.php).',
  quickhelp_title: 'Quickhelp',
  quickhelp_updateCheck:
    "By using the update-check, the version of the modules installed locally and the versions of the modules available online are compared. If there's a new version available, Kajona displays a hint at the concerning module.",
  send: 'Send',
  session_activity: 'Activity',
  session_admin: 'Administration, module: ',
  session_loggedin: 'logged in',
  session_loggedout: 'Guest',
  session_logout: 'Invalidate session',
  session_status: 'State',
  session_username: 'User name',
  session_valid: 'Valid until',
  setAbsolutePosOk: 'Saving position succeeded',
  setPrevIdOk: 'Saving new parent succeeded',
  setStatusError: 'Error changing the status',
  setStatusOk: 'Changing the status succeeded',
  settings_updated: 'Settings changed successfully',
  setzen_erfolg: 'Permissions saved successfully',
  save_rights_success: 'Permissions saved successfully',
  save_rights_error: 'Error on changing permissions',
  status_active: 'Change status (is active)',
  status_inactive: 'Change status (is inactive)',
  systemtask_cacheSource_source: 'Cache-Types',
  systemtask_cacheSource_namespace: 'Cache-Namespace',
  systemtask_cancel_execution: 'Cancel execution',
  systemtask_close_dialog: 'OK',
  systemtask_compresspicuploads_done: 'The resizing and compressing is done.',
  systemtask_compresspicuploads_found: 'Found images',
  systemtask_compresspicuploads_height: 'Max. height (pixel)',
  systemtask_compresspicuploads_hint:
    'To save disk space, you can resize and recompress all uploaded pictures in the folder "/files/images" to the given maximal dimensions.<br />Be aware, that this action can\'t be reverted and that it may causes loss of picture quality.<br />The process may take a while.',
  systemtask_compresspicuploads_name: 'Compress uploaded pictures',
  systemtask_compresspicuploads_processed: 'Processed images',
  systemtask_compresspicuploads_width: 'Max. width (pixel)',
  systemtask_dbconsistency_curprev_error:
    'The following parent-child relations are erroneous (missing parent-link)',
  systemtask_dbconsistency_curprev_ok: 'All parent-child relations are correct',
  systemtask_dbconsistency_date_error:
    'The following date-records are erroneous (missing system-record)',
  systemtask_dbconsistency_date_ok:
    'All date-records have a corresponding system-record',
  systemtask_dbconsistency_firstlevel_error:
    'Not all first-level-nodes belong to a module',
  systemtask_dbconsistency_firstlevel_ok:
    'All first-level-nodes belong to a module',
  systemtask_dbconsistency_name: 'Check database consistency',
  systemtask_dbexport_stream: 'Send dump to browser on creation',
  systemtask_dbexport_error:
    'Error dumping the database. Please see the logfile for more information.',
  systemtask_dbexport_excludetitle: 'Exclude tables',
  systemtask_dbexport_name: 'Backup database',
  systemtask_dbexport_success: 'Backup created successfully',
  systemtask_dbimport_datefileinfo: 'Timestamp according to file info',
  systemtask_dbimport_datefilename: 'Timestamp according to file name',
  systemtask_dbimport_error: 'Error restoring the backup',
  systemtask_dbimport_file: 'Available Backups',
  systemtask_dbimport_name: 'Import database backup',
  systemtask_dbimport_success: 'Backup restored successfully',
  systemtask_dialog_title: 'Systemtask running',
  systemtask_dialog_title_done: 'Systemtask completed',
  systemtask_filedump_error: 'An error occurred during the backup process.',
  systemtask_filedump_name: 'Create backup of filesystem',
  systemtask_filedump_success:
    'The backup was created successfully. <br/>Out of security reasons, the backup should be removed from the server as soon as possible.<br />Name of the backup-file:&nbsp;',
  systemtask_flushcache_all: 'All entries',
  systemtask_flushcache_error: 'An error occurred.',
  systemtask_flushcache_name: 'Flush global cache',
  systemtask_flushcache_success: 'The cache was flushed.',
  systemtask_flushpiccache_deleted: '<br />Number of files deleted: ',
  systemtask_flushpiccache_done: 'Flushing completed.',
  systemtask_flushpiccache_name: 'Flush images cache',
  systemtask_flushpiccache_skipped: '<br />Number of files skipped: ',
  systemtask_group_cache: 'Cache',
  systemtask_group_database: 'Database',
  systemtask_group_default: 'Miscellaneous',
  systemtask_group_ldap: 'Ldap',
  systemtask_group_pages: 'Pages',
  systemtask_group_search: 'Search',
  systemtask_group_stats: 'Stats',
  systemtask_progress: 'Progress',
  systemtask_run: 'Execute',
  systemtask_runningtask: 'Task',
  systemtask_status_error: 'Error while setting the status.',
  systemtask_status_success: 'The status was updated successfully.',
  systemtask_systemstatus_active: 'active',
  systemtask_systemstatus_inactive: 'inactive',
  systemtask_systemstatus_name: 'Update the state of a system-record',
  systemtask_systemstatus_status: 'Status',
  systemtask_systemstatus_systemid: 'Systemid',
  systemtask_rightsinheritcheck_name: 'Optimize permission inheritance',
  systemtask_rightsinheritcheck_intro:
    'For the following nodes, inheritance of permissions was re-enabled. The nodes breaked the permission-inheritance even while using the same permission configuration as their parent node.',
  systemtask_rightsinheritcheck_empty: 'All nodes are optimized',
  titel_erben: 'Inherit rights',
  titel_leer: '<em>No title defined</em>',
  titel_root: 'Rights root-record',
  titleTime: 'Time of day',
  treeviewtoggle: 'Show / hide tree',
  toolsetCalendarMonth:
    '"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"',
  toolsetCalendarWeekday: '"Su", "Mu", "Tu", "We", "Th", "Fr", "Sa"',
  toolsetCalendarMonthShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ],
  toolsetCalendarWeekdayShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  update_available: 'Please update!',
  update_invalidXML: 'The servers response was erroneous. Please try again.',
  update_module_localversion: 'This installation',
  update_module_name: 'Module',
  update_module_remoteversion: 'Available',
  update_nodom:
    'This PHP-installation does not support XML-DOM. This is required for the update-check to work.',
  update_nofilefound:
    "The list of updates failed to load.<br />Possible reasons can be having the php-config value 'allow_url_fopen' set to 'off' or using a system without support for sockets.",
  update_nourlfopen:
    'To make this function work, the value &apos;allow_url_fopen&apos; must be set to &apos;on&apos; in the php-config file!',
  uploadfile: 'Selected file',
  warnung_settings:
    'ATTENTION!!!<br />Using wrong values for the following settings could make the system become unusable!',
  systemtask_permissions_hint:
    "This systemtask allows to change permissions for a single group recursively. The permission is changed regardless of a possible inheritance. This means, the value is written to each subdnode, either by inheritance or by a direct manipulation of the permissions. The permissions of other groups won't be changed.",
  systemtask_permissions_systemid: 'Starting systemid',
  systemtask_permissions_groupid: 'Relevant group',
  systemtask_permissions_finished: 'Finished execution',
  systemtask_permissions_name: 'Set permissions recursively',
  generic_changelog_no_systemid:
    'Calling this action is only possible with a valid systemid. Please enter the systemid to be investigated.',
  generic_changelog_not_versionable:
    'The record to be investigated is not versionable',
  generic_record_locked:
    "This record cannot be edited because it was locked by the user '{0}'.",
  changelog_tooltipUnit: 'change',
  changelog_tooltipUnitPlural: 'changes',
  changelog_tooltipHtml:
    '<span><strong>%count% %unit%</strong> on %date%</span>',
  changelog_tooltipColumn:
    'Click on the calendar heatmap to load a record for a specific date.',
  workflow_oracle_stats_title: 'Gather oracle statistics',
  workflow_oracle_stats_val1: 'Hour to start gathering',
  workflow_messagequeue_title: 'Message-Queue sender',
  workflow_queue_sender_val1: 'Hours',
  workflow_queue_sender_val2: 'Minutes',
  update_in_progress: 'System update in progress, please wait...',
  form_objectlist_add_search: '{0} add ...',
  object_browser_reset: 'Remove object',
  copy_to_clipboard: 'Copy to clipboard',
  copy_page_url: 'Page URL',
  link_was_copied: 'Link was copied',
  error_model_not_found:
    'Error handling request, the object to be loaded is unknown. Please restart your action.',
  systemtask_samplecontent_installer: 'Samplecontent',
  systemtask_samplecontent_installer_name: 'Samplecontent Installer',
  systemtask_samplecontent_installer_error: 'Could not install samplecontent',
  systemtask_form_name: 'Form-Demo'
}
export default en
