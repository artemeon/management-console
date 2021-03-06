const de = {
  permissions_default_header: [
    'Anzeigen',
    'Bearbeiten',
    'L\u00f6schen',
    'Rechte',
    '',
    '',
    '',
    '',
    '',
    'Changelog'
  ],
  permissions_header: [
    'Anzeigen',
    'Bearbeiten',
    'L\u00f6schen',
    'Rechte',
    'Einstellungen',
    'Systemtasks',
    'Systemlog',
    '',
    'Aspekte'
  ],
  permissions_root_header: [
    'Anzeigen',
    'Bearbeiten',
    'L\u00f6schen',
    'Rechte',
    'Universal 1',
    'Universal 2',
    'Universal 3',
    'Universal 4',
    'Universal 5',
    'Changelog'
  ],
  _admin_nr_of_rows_: 'Anzahl Datens\u00e4tze pro Seite',
  _admin_nr_of_rows_hint:
    'Anzahl an Datens\u00e4tzen in den Admin-Listen, sofern das Modul dies unterst\u00fctzt. Kann von einem Modul \u00fcberschrieben werden!',
  _admin_only_https_: 'Admin nur per HTTPS',
  _admin_only_https_hint:
    'Bevorzugt die Verwendung von HTTPS im Adminbereich. Der Webserver muss hierf\u00fcr HTTPS unterst\u00fctzen.',
  _cookies_only_https_hint:
    'Wenn aktiviert werden Cookies nur f\u00fcr https zugelassen. Nur sinnvoll wenn alle Daten per https abgerufen werden.',
  _cookies_only_https_: 'Secure Cookies',
  _remoteloader_max_cachetime_: 'Cachedauer externer Quellen',
  _remoteloader_max_cachetime_hint:
    'Cachedauer in Sekunden f\u00fcr extern nachgeladene Inhalte (z.B. RSS-Feeds).',
  _system_admin_email_: 'Admin E-Mail',
  _system_admin_email_hint:
    'Falls ausgef\u00fcllt, wird im Fall eines schweren Fehlers eine E-Mail an diese Adresse gesendet.',
  _system_browser_cachebuster_: 'Browser-Cachebuster',
  _system_browser_cachebuster_hint:
    "Dieser Wert wird als GET-Parameter allen Verweisen auf JS/CSS-Dateien angeh\u00e4ngt. Durch hochz\u00e4hlen des Wertes kann der Browser dazu gezwungen werden die entsprechenden Dateien erneut vom Server herunter zu laden, unabh\u00e4ngig von den Caching-Einstellungen des Browsers und den vom Server gesendeten HTTP-Headern. Der Wert wird \u00fcber den Systemtask 'Cache leeren' automatisch hochgez\u00e4hlt.",
  _system_changehistory_enabled_: '\u00c4nderungshistorie aktiv',
  _system_dbdump_amount_: 'Anzahl DB-Dumps',
  _system_dbdump_amount_hint:
    'Definiert, wie viele Datenbank-Sicherungen vorgehalten werden sollen.',
  _system_graph_type_: 'Verwendete Chart-Bibliothek: ',
  _system_graph_type_hint:
    'G\u00fcltige Werte: pchart, ezc, jqplot. pChart muss gesondern heruntergeladen und installiert werden, ezc ben\u00f6tigt im Optimalfall das PHP-Modul \'cairo\'.<br />Siehe hierzu auch <a href="http://www.kajona.de/nicecharts.html" target="_blank">http://www.kajona.de/nicecharts.html</a>',
  _system_lock_maxtime_: 'Maximale Sperrdauer',
  _system_lock_maxtime_hint:
    'Nach der angegebenen Dauer in Sekunden werden gesperrte Datens\u00e4tze automatisch wieder freigegeben.',
  _system_mod_rewrite_: 'URL-Rewriting',
  _system_mod_rewrite_hint:
    'Schaltet URL-Rewriting f\u00fcr Nice-URLs ein oder aus. Das Apache-Modul "mod_rewrite" muss dazu installiert sein und in der .htaccess-Datei aktiviert werden!',
  _system_mod_rewrite_admin_only_: 'Backend Rewrite ohne /admin',
  _system_mod_rewrite_admin_only_hint:
    'Wenn aktiviert werden Backend Links ohne /admin generiert. Nur bei Seiten ohne Portal zu aktivieren.',
  _system_portal_disable_: 'Portal deaktiviert',
  _system_portal_disable_hint:
    'Diese Einstellung aktiviert/deaktiviert das gesamte Portal.',
  _system_portal_disablepage_: 'Zwischenseite',
  _system_portal_disablepage_hint:
    'Diese Seite wird angezeigt, wenn das Portal deaktiviert wurde.',
  _system_release_time_: 'Dauer einer Session',
  _system_release_time_hint:
    'Nach dieser Dauer in Sekunden wird eine Session automatisch ung\u00fcltig.',
  _system_timezone_: 'System Zeitzone',
  _system_timezone_hint:
    "Die Zeitzone wird zur Berechnung der korrekten Zeit- und Datumswerte verwendet. Eine Liste m\u00f6glicher Werte ist unter <a href='http://www.php.net/manual/en/timezones.php' target='_blank'>http://www.php.net/manual/en/timezones.php</a> zu finden.",
  _system_email_forcesender_: 'Default Absender erzwingen',
  _system_email_forcesender_hint:
    'Manche E-Mail Gateways stellen nur E-Mails einer bestimmten Abender-Adresse zu. Der Versand aller Mails von der Default-Absender-Adresse kann hiermit erzwungen werden.',
  _system_email_defaultsender_: 'Standard E-Mail Absender',
  _system_email_defaultsender_hint:
    'Sofern eine Mail keine Von-Adresse eingetragen hat wird die hier genannte Adresse verwendet.',
  _system_session_ipfixation_: 'Session an IP binden',
  _system_session_ipfixation_hint:
    'Normalerweise wird die Session an die IP des Clients gebunden. Bspw. beim Einsatz von Proxy Servern kann dies aber zu Problem (Logouts) f\u00fchren.',
  _system_lists_clickable_: 'Standard-Listen klickbar',
  _system_lists_clickable_hint:
    'Wenn aktiv wird bei Klick auf eine Listenzeile die erste Aktion automatisch ausgef\u00fchrt',
  _system_permission_assignment_threshold_: 'Schwellenwert Zuweisungen',
  _system_permission_assignment_threshold_hint:
    'Anzahl an User zu Gruppe Zuweisungen, bei der anstatt der OR-Abfrage der Berechtigungen ein Subselect verwendet wird.',
  about_part1:
    '<h2>Kajona V6 - Open Source Content Management System</h2>Kajona V 6.2<br /><br /><a href="http://www.kajona.de" target="_blank">www.kajona.de</a><br /><a href="mailto:info@kajona.de" target="_blank">info@kajona.de</a><br /><br />F\u00fcr weitere Infomationen, Support oder bei Anregungen besuchen Sie einfach unsere Webseite.<br />Support erhalten Sie auch in unserem <a href="http://board.kajona.de/" target="_blank">Forum</a>.',
  about_part2_header: '<h2>Entwicklungsleitung</h2>',
  about_part2a_header: '<h2>Contributors / Entwickler</h2>',
  about_part2b_header: '<h2>\u00dcbersetzungen</h2>',
  about_part4:
    '<h2>Spenden</h2><p>Wenn Ihnen Kajona gef\u00e4llt und Sie das Projekt unterst\u00fctzen m\u00f6chten k\u00f6nnen Sie hier an das Projekt spenden: </p> <form method="post" action="https://www.paypal.com/cgi-bin/webscr" target="_blank"><input type="hidden" value="_donations" name="cmd" /> <input type="hidden" value="donate@kajona.de" name="business" /> <input type="hidden" value="Kajona Development" name="item_name" /> <input type="hidden" value="0" name="no_shipping" /> <input type="hidden" value="1" name="no_note" /> <input type="hidden" value="EUR" name="currency_code" /> <input type="hidden" value="0" name="tax" /> <input type="hidden" value="PP-DonationsBF" name="bn" /> <input type="submit" name="submit" value="Spenden via PayPal" class="inputSubmit" /></form>',
  action_about: '\u00dcber Kajona',
  action_list_aspect: 'Aspekte',
  action_changelog: '\u00c4nderungshistorie',
  action_list: 'Installierte Module',
  action_locked_records: 'Gesperrte Datens\u00e4tze',
  action_final_delete_record: 'Datensatz endg\u00fcltig l\u00f6schen',
  final_delete_question:
    'M\u00f6chten Sie den Datensatz &quot;{0}&quot; wirklich aus der Datenbank l\u00f6schen? Ein Wiederherstellen des Datensatzes ist dann nicht mehr m\u00f6glich. Alle untergeordneten Datens\u00e4tze werden ebenfalls gel\u00f6scht.',
  final_delete_submit: 'L\u00f6schen',
  action_deleted_records: 'Gel\u00f6schte Datens\u00e4tze',
  action_restore_record_blocked:
    'Der Datensatz kann nicht wiederhergestellt werden, \u00fcbergeordnete Datens\u00e4tze sind noch nicht wiederhergestellt.',
  action_restore_record: 'Datensatz wiederherstellen',
  action_system_info: 'Systeminformationen',
  action_system_sessions: 'Sessions',
  action_system_settings: 'Systemeinstellungen',
  action_system_tasks: 'System-Tasks',
  action_systemlog: 'System-Log',
  action_unlock_record: 'Datensatz entsperren',
  delete_aspect_question:
    'M\u00f6chten Sie den Aspekt &quot;<b>%%element_name%%</b>&quot; wirklich l\u00f6schen?',
  aspect_isDefault: 'Standard Aspekt',
  aspect_list_empty: 'Keine Aspekete angelegt',
  cache_entry_size: 'Gr\u00f6\u00dfe',
  cache_hash1: 'Hash 1',
  cache_hash2: 'Hash 2',
  cache_leasetime: 'G\u00fcltig bis',
  cache_source: 'Quelle',
  change_action: 'Aktion',
  change_module: 'Modul',
  change_newvalue: 'Neuer Wert',
  change_oldvalue: 'Alter Wert',
  change_property: 'Eigenschaft',
  change_record: 'Objekt',
  change_type_setting: 'Einstellung',
  change_user: 'Benutzer',
  change_report_title: '\u00c4nderungshistorie',
  change_export_excel: 'Daten nach Excel exportieren',
  change_diff: 'Vergleich',
  dateStyleLong: 'd.m.Y H:i:s',
  dateStyleShort: 'd.m.Y',
  desc: 'Rechte \u00e4ndern an',
  dialog_cancelButton: 'Abbrechen',
  dialog_copyButton: 'Ja, kopieren',
  dialog_copyHeader: 'Kopieren best\u00e4tigen',
  dialog_deleteButton: 'Ja, l\u00f6schen',
  dialog_deleteHeader: 'L\u00f6schen best\u00e4tigen',
  dialog_loadingHeader: 'Bitte warten',
  dialog_removeAssignmentButton: 'Ja, Zuordnung l\u00f6schen',
  dialog_removeAssignmentHeader: 'Zuordnung l\u00f6schen best\u00e4tigen',
  errorintro: 'Bitte \u00fcberarbeiten Sie die folgenden Felder',
  fehler_setzen: 'Fehler beim Speichern der Rechte',
  filebrowser: 'Datei ausw\u00e4hlen',
  form_aspect_default: 'Standard-Aspekt',
  form_aspect_name: 'Name',
  form_aspect_name_hint:
    'Der Name wird als interner Titel verwendet. Um einen Aspekt zu lokalisieren, kann dieser \u00fcber einen Lang-Eintrag (aspect_NAME) gelabelt werden.',
  form_deletedrecordsfilter_systemid: 'Systemid',
  form_deletedrecordsfilter_class: 'Klasse',
  form_deletedrecordsfilter_comment: 'Record Comment',
  form_default_group_name: 'Basisdaten',
  locked_record_info: 'Gesperrt seit: {0} &middot; Gesperrt durch: {1}',
  log_empty: 'Keine Eintr\u00e4ge im System-Logfile vorhanden',
  login_xml_error: 'Login fehlgeschlagen',
  login_xml_succeess: 'Login erfolgreich',
  logout_xml: 'Logout erfolgreich',
  mail_body: 'Inhalt',
  mail_cc: 'Empf\u00e4nger in Kopie',
  mail_recipient: 'Empf\u00e4nger',
  mail_send_error:
    'Fehler beim Versenden der E-Mail. Bitte versuchen Sie die letzte Aktion erneut.',
  mail_send_success: 'E-Mail erfolgreich verschickt.',
  mail_subject: 'Betreff',
  messageprovider_exceptions_name: 'System-Fehlermeldungen',
  messageprovider_personalmessage_name: 'Pers\u00f6nliche Nachrichten',
  modul_titel_aspect: 'Aspekte bearbeiten',
  modul_rechte_root: 'Root-Rechte',
  modul_sortdown: 'Nach unten verschieben',
  modul_sortup: 'Nach oben verschieben',
  modul_status_disabled: 'Modul aktiv schalten (ist inaktiv)',
  modul_status_enabled: 'Modul inaktiv schalten (ist aktiv)',
  modul_status_system:
    'Hmmm. Den System-Kernel deaktivieren? Zuvor bitte format c: ausf\u00fchren!',
  modul_titel: 'System',
  moduleRightsTitle: 'Rechte',
  numberStyleDecimal: ',',
  numberStyleThousands: '.',
  pageview_forward: 'Weiter',
  pageview_total: 'Gesamt: ',
  quickhelp_change:
    'Mit Hilfe dieses Formulares k\u00f6nnen die Rechte eines Datensatzes angepasst werden.',
  quickhelp_list:
    'Die Liste der Module gibt eine schnelle \u00dcbersicht \u00fcber die aktuell im System installierten Module.<br />Zus\u00e4tzlich werden die aktuell installierten Versionen der installierten Module genannt, ebenso das urspr\u00fcngliche Installationsdatum des Moduls.<br />\u00dcber die Rechte des Moduls kann der Modul-Rechte-Knoten bearbeitet werden, von welchem die Inhalte bei aktivierter Rechtevererbung ihre Einstellungen erben.<br />Durch Verschieben der Module in der Liste l\u00e4sst sich die Reihenfolge in der Modulnavigation anpassen.',
  quickhelp_module_list:
    'Die Liste der Module gibt eine schnelle \u00dcbersicht \u00fcber die aktuell im System installierten Module.<br />Zus\u00e4tzlich werden die aktuell installierten Versionen der installierten Module genannt, ebenso das urspr\u00fcngliche Installationsdatum des Moduls.<br />\u00dcber den Rechte-Button der Module k\u00f6nnen die jeweiligen Modul-Root-Rechte bearbeitet werden, welche an einzelne Datens\u00e4tze des Moduls vererbt werden (solange die Rechteerbung des Datensatzes aktiviert ist).<br />Durch Verschieben der Module in der Liste l\u00e4sst sich die Reihenfolge in der Modulnavigation anpassen.',
  quickhelp_system_info:
    'Kajona versucht an dieser Stelle, ein paar Informationen \u00fcber das System heraus zu finden, auf welchem sich die Installation befindet.',
  quickhelp_system_settings:
    'Hier k\u00f6nnen grundlegende Einstellungen des Systems vorgenommen werden. Hierf\u00fcr kann jedes Modul beliebige Einstellungsm\u00f6glichkeiten anbieten. Die hier vorgenommenen Einstellungen sollten mit Vorsicht ver\u00e4ndert werden, falsche Einstellungen k\u00f6nnen das System im schlimmsten Fall unbrauchbar machen.<br /><br />Hinweis: Werden Werte an einem Modul ge\u00e4ndert, so muss f\u00fcr JEDES Modul der Speichern-Button gedr\u00fcckt werden. Ein Ab\u00e4ndern der Einstellungen verschiedener Module wird beim Speichern nicht \u00fcbernommen. Es werden nur die Werte der zum Speichern-Button zugeh\u00f6rigen Felder \u00fcbernommen.',
  quickhelp_system_tasks:
    'Systemtasks sind kleine Programme, die allt\u00e4gliche Aufaben wie Wartungsarbeiten im System \u00fcbernehmen.<br />Hierzu geh\u00f6rt das Sichern der Datenbank und ggf. das R\u00fcckspielen einer Sicherung in das System.',
  quickhelp_systemlog:
    'Das Systemlogbuch gibt die Eintr\u00e4ge des Logfiles aus, in welche die Module Nachrichten schreiben k\u00f6nnen.<br />Die Feinheit des Loggings kann in der config-Datei (/project/system/config/config.php) eingestellt werden.',
  quickhelp_title: 'Schnellhilfe',
  quickhelp_updateCheck:
    'Mit der Aktion Updatecheck werden die Versionsnummern der im System installierten Module mit den Versionsnummern der aktuell verf\u00fcgbaren Module verglichen. Sollte ein Modul nicht mehr in der neusten Verion installiert sein, so gibt Kajona in der Zeile dieses Moduls einen Hinweis hierzu aus.',
  send: 'Versenden',
  session_activity: 'Aktivit\u00e4t',
  session_admin: 'Administration, Modul: ',
  session_loggedin: 'angemeldet',
  session_loggedout: 'Gast',
  session_logout: 'Session beenden',
  session_status: 'Status',
  session_username: 'Benutzer',
  session_valid: 'G\u00fcltig bis',
  setAbsolutePosOk: 'Speichern der Position erfolgreich',
  setPrevIdOk: 'Speichern des neuen Eltern-Knotens erfolgreich',
  setStatusError: 'Fehler beim \u00c4ndern des Status',
  setStatusOk: '\u00c4ndern des Status erfolgreich',
  settings_updated: 'Einstellungen wurden ge\u00e4ndert.',
  setzen_erfolg: 'Rechte erfolgreich gespeichert',
  save_rights_success: 'Rechte erfolgreich gespeichert',
  save_rights_error: 'Fehler beim Speichern der Berechtigungen',
  status_active: 'Status \u00e4ndern (ist aktiv)',
  status_inactive: 'Status \u00e4ndern (ist inaktiv)',
  systemtask_cacheSource_source: 'Cache-Arten',
  systemtask_cacheSource_namespace: 'Cache-Namespace',
  systemtask_cancel_execution: 'Ausf\u00fchrung beenden',
  systemtask_close_dialog: 'OK',
  systemtask_compresspicuploads_done:
    'Die Bildverkleinerung und -komprimierung wurde abgeschlossen.',
  systemtask_compresspicuploads_found: 'Gefundene Bilder',
  systemtask_compresspicuploads_height: 'Maximale H\u00f6he (Pixel)',
  systemtask_compresspicuploads_hint:
    'Um Speicherplatz zu sparen k\u00f6nnen Sie alle hochgeladenen Bilder im Ordner "/files/images" auf die angegebene Maximalgr\u00f6\u00dfe verkleinern und neu komprimieren lassen.<br />Beachten Sie, dass dieser Vorgang nicht r\u00fcckg\u00e4ngig gemacht werden kann und es ggf. zu Qualit\u00e4tseinbu\u00dfen kommen kann.<br />Der Vorgang kann einige Minuten in Anspruch nehmen.',
  systemtask_compresspicuploads_name: 'Hochgeladene Bilder komprimieren',
  systemtask_compresspicuploads_processed: 'Bearbeitete Bilder',
  systemtask_compresspicuploads_width: 'Maximale Breite (Pixel)',
  systemtask_dbconsistency_curprev_error:
    'Folgende Eltern-Kind Beziehungen sind fehlerhaft (fehlender Elternteil)',
  systemtask_dbconsistency_curprev_ok:
    'Alle Eltern-Kind Beziehungen sind korrekt',
  systemtask_dbconsistency_date_error:
    'Folgende Datum-Records sind fehlerhaft (fehlender System-Record)',
  systemtask_dbconsistency_date_ok:
    'Alle Datum-Records haben einen zugeh\u00f6rigen System-Record',
  systemtask_dbconsistency_firstlevel_error:
    'Nicht alle Knoten auf erster Ebene geh\u00f6ren zu einem Modul',
  systemtask_dbconsistency_firstlevel_ok:
    'Alle Knoten auf erster Ebene geh\u00f6ren zu einem Modul',
  systemtask_dbconsistency_name: 'Datenbankkonsistenz \u00fcberpr\u00fcfen',
  systemtask_dbexport_stream: 'Dump nach Erstellung an Browser senden',
  systemtask_dbexport_error:
    'Fehler beim Sichern der Datenbank. Weitere Informationen finden Sie im Logfile.',
  systemtask_dbexport_excludetitle: 'Tabellen ausschlie\u00dfen',
  systemtask_dbexport_name: 'Datenbank sichern',
  systemtask_dbexport_success: 'Sicherung erfolgreich angelegt',
  systemtask_dbimport_datefileinfo: 'Zeitstempel gem\u00e4\u00df Dateiinfo',
  systemtask_dbimport_datefilename: 'Zeitstempel gem\u00e4\u00df Dateiname',
  systemtask_dbimport_error: 'Fehler beim Einspielen der Sicherung',
  systemtask_dbimport_file: 'Vorhandene Sicherungen',
  systemtask_dbimport_name: 'Datenbank importieren',
  systemtask_dbimport_success: 'Sicherung erfolgreich eingespielt',
  systemtask_dialog_title: 'Systemtask wird ausgef\u00fchrt',
  systemtask_dialog_title_done: 'Systemtask abgeschlossen',
  systemtask_filedump_error:
    'W\u00e4hrend der Sicherung ist ien Fehler aufgetreten.',
  systemtask_filedump_name: 'Sicherung des Dateisystems erstellen',
  systemtask_filedump_success:
    'Die Sicherung wurde erfolgreich angelegt. <br/>Aus Sicherheitsgr\u00fcnden sollte die Sicherung schnellstm\u00f6glich vom Server entfernt werden. <br />Name der Sicherungsdatei:&nbsp;',
  systemtask_flushcache_all: 'Alle Eintr\u00e4ge',
  systemtask_flushcache_error: 'Ein Fehler ist aufgetreten.',
  systemtask_flushcache_name: 'Globalen Cache leeren',
  systemtask_flushcache_success: 'Der Cache wurde geleert.',
  systemtask_flushpiccache_deleted: '<br />Anzahl gel\u00f6schter Bilder: ',
  systemtask_flushpiccache_done: 'Leeren abgeschlossen.',
  systemtask_flushpiccache_name: 'Bildercache leeren',
  systemtask_flushpiccache_skipped: '<br />Anzahl \u00fcbersprungener Bilder: ',
  systemtask_group_cache: 'Cache',
  systemtask_group_database: 'Datenbank',
  systemtask_group_default: 'Verschiedenes',
  systemtask_group_ldap: 'Ldap',
  systemtask_group_pages: 'Seiten',
  systemtask_group_search: 'Suche',
  systemtask_group_stats: 'Statistiken',
  systemtask_progress: 'Fortschritt',
  systemtask_run: 'Ausf\u00fchren',
  systemtask_runningtask: 'Task',
  systemtask_status_error: 'Fehler beim Setzen des Status.',
  systemtask_status_success: 'Der Status wurde erfolgreich gesetzt.',
  systemtask_systemstatus_active: 'Aktiv',
  systemtask_systemstatus_inactive: 'Inaktiv',
  systemtask_systemstatus_name: 'Status eines Datensatzes setzen',
  systemtask_systemstatus_status: 'Status',
  systemtask_systemstatus_systemid: 'Systemid',
  systemtask_rightsinheritcheck_name: 'Rechtevererbung optimieren',
  systemtask_rightsinheritcheck_intro:
    'F\u00fcr nachfolgende Knoten wurde die Rechte-Vererbung wieder aktiviert. Die Knoten brachen die Vererbung auf, obwohl sie die selben Rechte wie ihr Eltern-Knoten verwendet hatten.',
  systemtask_rightsinheritcheck_empty: 'Alle Knoten sind optimiert',
  titel_erben: 'Rechte erben',
  permissions_toggle_visible: 'Nicht-konfigurierte Zeilen einblenden',
  permissions_toggle_hidden: 'Nicht-konfigurierte Zeilen ausblenden',
  permissions_success: 'Die Berechtigungen wurden erfolgreich gespeichert.',
  permissons_filter: 'Filter-Text',
  permissons_add_group: 'Gruppe hinzuf\u00fcgen',
  titel_leer: '<em>Kein Titel hinterlegt</em>',
  titel_root: 'Rechte-Root-Satz',
  titleTime: 'Uhr',
  toolsetCalendarMonth:
    '"Januar", "Februar", "M\u00e4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"',
  toolsetCalendarWeekday: '"So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"',
  toolsetCalendarMonthShort: [
    'Jan',
    'Feb',
    'M\u00e4r',
    'Apr',
    'Mai',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dez'
  ],
  toolsetCalendarWeekdayShort: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
  treeviewtoggle: 'Baum anzeigen / ausblenden',
  update_available: 'Bitte updaten!',
  update_invalidXML:
    'Die Antwort vom Server war leider nicht korrekt. Bitte versuchen Sie die letzte Aktion erneut.',
  update_module_localversion: 'Diese Installation',
  update_module_name: 'Modul',
  update_module_remoteversion: 'Verf\u00fcgbar',
  update_nodom:
    'Diese PHP-Installation unterst\u00fctzt kein XML-DOM. Dies ist f\u00fcr den Update-Check erforderlich.',
  update_nofilefound:
    "Die Liste der Updates konnte nicht geladen werden.<br />Gr\u00fcnde hierf\u00fcr k\u00f6nnen sein, dass auf diesem System der PHP-Config-Wert 'allow_url_fopen' auf 'off' gesetzt wurde, oder das System keine Unterst\u00fctzung f\u00fcr Sockets bietet.",
  update_nourlfopen:
    'F\u00fcr diese Funktion muss der Wert &apos;allow_url_fopen&apos; in der PHP-Konfiguration auf &apos;on&apos; gesetzt sein!',
  uploadfile: 'Ausgew\u00e4hlte Datei',
  warnung_settings:
    'ACHTUNG!!!<br />Bei folgenden Einstellungen k\u00f6nnen falsche Werte das System unbrauchbar machen!',
  systemtask_permissions_hint:
    'Dieser Task \u00e4ndert die Berechtigungen einer Gruppe rekursiv. Die Berechtigungen werden dabei unabh\u00e4ngig des Vererbungsstatus gesetzt, d.h. die Rechte werden entweder durch Vererbung oder durch direkte Manipulation angepasst. Die Berechtigungen anderer Gruppen bleiben unver\u00e4ndert.',
  systemtask_permissions_systemid: 'Start Systemid',
  systemtask_permissions_groupid: 'Relevante Gruppe',
  systemtask_permissions_finished: 'Ausf\u00fchrung abgeschlossen',
  systemtask_permissions_name: 'Rechte rekursiv setzen',
  generic_changelog_no_systemid:
    'Diese Aktion kann nur mit einer g\u00fcltigen Systemid aufgerufen werden. Bitte eine entsprechende Systemid angeben.',
  generic_changelog_not_versionable:
    'Der Datensatz steht nicht unter Versionierung',
  generic_record_locked:
    "Dieser Datensatz wurde von dem Benutzer '{0}' gesperrt und kann daher nicht bearbeitet werden.",
  changelog_tooltipUnit: '\u00c4nderung',
  changelog_tooltipUnitPlural: '\u00c4nderungen',
  changelog_tooltipHtml:
    '<span><strong>%count% %unit%</strong> am %date%</span>',
  changelog_tooltipColumn:
    '\u00dcber die Kalender-Heatmap k\u00f6nnen Sie per Klick den Datensatz f\u00fcr ein bestimmtes Datum nachladen.',
  workflow_oracle_stats_title: 'Oracle Statistiken neu berechnen',
  workflow_oracle_stats_val1: 'Uhrzeit der Berechnung',
  workflow_messagequeue_title: 'Message-Queue Abarbeitung',
  workflow_queue_sender_val1: 'Stunden',
  workflow_queue_sender_val2: 'Minuten',
  update_in_progress:
    'Das System wird gerade aktualisiert. Bitte warten Sie...',
  form_objectlist_add_search: '{0} hinzuf\u00fcgen ...',
  object_browser_reset: 'Objekt entfernen',
  copy_to_clipboard: 'In die Zwischenablage kopieren',
  copy_page_url: 'Seiten-URL',
  link_was_copied: 'Link wurde kopiert',
  error_model_not_found:
    'Fehler beim Verarbeiten der Anfrage, der zu ladende Datensatz ist nicht bekannt. Bitte starten Sie die letzte Aktion erneut.',
  systemtask_samplecontent_installer: 'Samplecontent',
  systemtask_samplecontent_installer_name: 'Samplecontent Installer',
  systemtask_samplecontent_installer_error:
    'Samplecontent konnte nicht installiert werden',
  systemtask_form_name: 'Form-Demo'
}

export default de
