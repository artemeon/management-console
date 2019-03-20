const de = {
  installer_config_dbdriver: 'Datenbanktreiber',
  installer_config_dbhostname: 'Datenbankserver',
  installer_config_dbname: 'Datenbankname',
  installer_config_dbpassword: 'Datenbankpasswort',
  installer_config_dbport: 'Datenbankport',
  installer_config_dbportinfo: 'Für den Standardport bitte leer lassen',
  installer_config_dbprefix: 'Tabellenpräfix',
  installer_start_statusinfo_intro: 'Aktuelle Installation: ',
  installer_config_dbusername: 'Datenbankbenutzer',
  installer_config_intro: '<b>Datenbankeinstellungen erfassen</b><br />',
  installer_config_write: 'In config.php speichern',
  installer_dbcx_error:
    'Verbindung zur Datenbank konnte nicht aufgebaut werden. Bitte prüfen Sie die angegebenen Zugangsdaten.',
  installer_dbdriver_na:
    'Es tut uns leid, aber der gewählte Datenbanktreiber ist auf dem System nicht verfügbar. Bitte installieren Sie die nachstehende PHP-Erweiterung um den Treiber zu verwenden',
  installer_dbdriver_oci8:
    'Achtung: Der Oracle-Treiber befindet sich noch im Teststadium.',
  installer_dbdriver_sqlite3:
    'Der SQLite-Treiber legt die Datenbank im Verzeichnis /project/dbdumps ab. Hierbei gilt der Datenbankname als Dateiname, alle anderen Werte sind nicht weiter von Belang.',
  installer_elements_found:
    '<b>Installation der Seitenelemente</b><br /><br />Bitte wählen Sie die Seitenelemente aus, die Sie installieren möchten:<br /><br />',
  installer_finish_hints:
    "<div class:'alert alert-danger'><b>Achtung!</b> Sie sollten nun die Schreibrechte auf die Datei /project/module_system/system/config/config.php auf Leserechte zurücksetzen.<br />Zusätzlich sollte aus Sicherheitsgründen die Datei /installer.php unbedingt komplett gelöscht werden.</div><br /><br />",
  installer_finish_intro:
    "<b>Installation abgeschlossen</b><br /><br /><div class:'alert alert-success'><b>Herzlichen Glückwunsch!</b>Die Installation wurde erfolgreich abgeschlossen, das System steht Ihnen nun zur Verfügung!</div><br />Die Anwendung erreichen Sie unter:<br />&nbsp&nbsp&nbsp&nbsp<a href:\"",
  installer_given: 'vorhanden',
  installer_install: 'Installieren',
  installer_installpe: 'Seitenelemente installieren',
  installer_loaded: 'geladen',
  installer_login_email: 'E-Mail',
  installer_login_installed:
    'Das System wurde bereits mit einem Admin-Benutzer installiert.',
  installer_login_intro:
    '<b>Admin-Benutzer einrichten</b><br /><br />Bitte geben Sie hier einen Benutzernamen und ein Passwort an.<br />Diese Daten werden später als Zugang zur Administration verwendet.<br />Aus Sicherheitsgründen sollten Sie Benutzernamen wie "admin" oder "administrator" vermeiden.<br /><br />',
  installer_login_password: 'Passwort',
  installer_login_save: 'Benutzer anlegen',
  installer_login_username: 'Benutzername',
  installer_missing: 'fehlen',
  installer_mode_auto: 'Automatische Installation',
  installer_mode_auto_hint:
    'Alle verfügbaren Module und Beispielinhalte werden installiert.',
  installer_mode_manual: 'Manuelle Installation',
  installer_mode_manual_hint:
    'Die zu installierende Module können manuell ausgewählt werden, die Installation der Beispielinhalte kann übersprungen werden.',
  installer_module_notinstalled: 'Modul ist nicht installiert',
  installer_modules_found:
    '<b>Installation/Update der Module</b><br /><br />Bitte wählen Sie die Module aus, die Sie installieren möchten:<br /><br />',
  installer_modules_needed: 'Zur Installation benötigte Module: ',
  installer_next: 'Nächster Schritt >',
  installer_nloaded: 'fehlt',
  installer_phpcheck_folder: 'Schreibrechte auf ',
  installer_phpcheck_intro: '<b>Herzlich Willkommen</b><br /><br />',
  installer_phpcheck_intro2:
    '<br />Die Installation des Systems erfolgt in mehreren Schritten: <br />Rechtepüfung, DB-Konfiguration, Zugangsdaten zur Administration sowie Modulinstallation.<br />Je nach Modulauswahl kann die Anzahl dieser Schritte abweichen.<br /><br />Es werden die Schreibrechte einzelner Dateien und Verzeichnisse sowie<br />die Verfügbarkeit benötigter PHP-Module überprüft:<br />',
  installer_phpcheck_lang:
    'Um den Installer in einer anderen Sprache zu laden, bitte einen der folgenden Links verwenden:<br /><br />',
  installer_phpcheck_module: 'PHP-Extension ',
  installer_phpcheck_version: 'PHP-Version ',
  installer_prev: '< Vorheriger Schritt',
  installer_samplecontent:
    '<b>Installation der Beispielinhalte</b><br /><br />Das Modul Samplecontent erstellt einige Standard-Seiten und Navigationen.<br />Je nach installierten Modulen werden verschiedene Beispielinhalte installiert.<br /><br /><br />',
  installer_step_adminsettings: 'Administrationszugang',
  installer_step_dbsettings: 'Datenbankeinstellungen',
  installer_step_finish: 'Abschluss',
  installer_step_autoinstall: 'Installation',
  installer_step_modules: 'Module',
  installer_step_phpsettings: 'PHP-Konfiguration',
  installer_step_samplecontent: 'Beispielinhalte',
  installer_systemlog: 'System Log',
  installer_systemversion_needed: 'Minimal benötigte Version: ',
  installer_update: 'Update auf ',
  installer_versioninstalled: 'Installierte Version: ',
  installer_package_title: 'Paket',
  installer_package_version: 'Version',
  installer_package_installation: 'Installation',
  installer_package_samplecontent: 'Beispielinhalte',
  installer_package_hint: 'Hinweise',
  installer_package_hint_noinstaller:
    'Das Paket benötigt keine zusätzliche Installation',
  installer_start_installation: 'Installation starten',
  installer_start_installation_hint:
    'Alle Daten sind vorhanden, die Installation kann beginnen'
}
export default de
