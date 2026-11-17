# TX-SERVICE API endpoint summary

App version **1.26.214-30**. Total operations in this spec: **301** (read tested live: 13; read not tested: 133; writes documented but not executed: 154; login executed: 1).

Write operations were discovered from the frontend only and were **not** sent, except `POST /api/login` which was required to open the page.
Personal data is redacted. Nothing was published to the api-anything shared catalog.

| Tested | Kind | Method | Path | Tag |
|---|---|---|---|---|
| yes | read | GET | `/api/statuscheck` | Identity & site |
| yes | read | GET | `/config.json` | Identity & site |
| yes | read | GET | `/languages/{resourceFile}` | Identity & site |
| yes | read | GET | `/service/environment.js` | Identity & site |
| yes | read | GET | `/service/login/{token}` | Identity & site |
| yes | read | GET | `/SKYCC/api/v1/customers` | Customers |
| yes | read | GET | `/SKYCC/api/v1/customers/genericsettings` | Customers |
| yes | read | GET | `/SKYCC/api/v1/customers/profilesettings` | Customers |
| yes | read | GET | `/SKYCC/api/v1/devices` | Devices |
| yes | read | GET | `/SKYCC/api/v1/devices/sensors/GetAll` | Devices |
| yes | read | GET | `/SKYCC/api/v1/devices/settings` | Devices |
| yes | read | GET | `/SKYCC/api/v1/diagnostic/info` | Diagnostics |
| yes | read | GET | `/SKYCC/api/v1/remoteupdate` | Packages & remote update |
| login only | write | POST | `/api/login` | Identity & site |
| no | read | GET | `/api/mytransics/impersonate` | Identity & site |
| no | read | GET | `/api/mytransics/logout` | Identity & site |
| no | read | GET | `/api/mytransics/profiledata` | Identity & site |
| no | read | GET | `/api/mytransics/userdata` | Identity & site |
| no | read | GET | `/api/notifications` | Identity & site |
| no | read | GET | `/api/passwordRulesdetails` | Identity & site |
| no | read | GET | `/api/subscriptioninfo` | Identity & site |
| no | read | GET | `/api/token/revoke` | Identity & site |
| no | read | GET | `/api/twostepqr` | Identity & site |
| no | read | GET | `/api/updatetotp` | Identity & site |
| no | read | GET | `/api/v1/blacksubstances` | Data warehouse |
| no | read | GET | `/api/v1/businessrelations` | Data warehouse |
| no | read | GET | `/api/v1/devices/inventory` | Data warehouse |
| no | read | GET | `/api/v1/productdownloads/docsandtoolsgrouped` | Data warehouse |
| no | read | GET | `/api/v2/companies` | myTransics v2 |
| no | read | GET | `/awssync/v1/admin/packages` | AWS sync |
| no | read | GET | `/awssync/v1/devices/settings` | AWS sync |
| no | read | GET | `/awssync/v1/devices/settings/history` | AWS sync |
| no | read | GET | `/SKYCC/api/v1/activities/customeractiongroups` | Activities |
| no | read | GET | `/SKYCC/api/v1/activities/deviceactiongrouphistory` | Activities |
| no | read | GET | `/SKYCC/api/v1/activities/deviceactiongroupsettings` | Activities |
| no | read | GET | `/SKYCC/api/v1/adminclientws/adminclientwsinfo` | Admin |
| no | read | GET | `/SKYCC/api/v1/adminclientws/adminsettings` | Admin |
| no | read | GET | `/SKYCC/api/v1/adminclientws/getCommunicationHistory` | Admin |
| no | read | GET | `/SKYCC/api/v1/calibrations/trailer` | TX-SERVICE other |
| no | read | GET | `/SKYCC/api/v1/calibrations/trailers` | TX-SERVICE other |
| no | read | GET | `/SKYCC/api/v1/calibrations/vehicle` | TX-SERVICE other |
| no | read | GET | `/SKYCC/api/v1/calibrations/vehicles` | TX-SERVICE other |
| no | read | GET | `/SKYCC/api/v1/countries` | TX-SERVICE other |
| no | read | GET | `/SKYCC/api/v1/customers/adminuser` | Customers |
| no | read | GET | `/SKYCC/api/v1/customers/connectionstrings` | Customers |
| no | read | GET | `/SKYCC/api/v1/customers/customerinfo` | Customers |
| no | read | GET | `/SKYCC/api/v1/customers/customersettings` | Customers |
| no | read | GET | `/SKYCC/api/v1/customers/generictypes` | Customers |
| no | read | GET | `/SKYCC/api/v1/customers/getactivedeactivegenericsettings` | Customers |
| no | read | GET | `/SKYCC/api/v1/customers/getallexportdefinitions` | Customers |
| no | read | GET | `/SKYCC/api/v1/customers/getallimportdefinitions` | Customers |
| no | read | GET | `/SKYCC/api/v1/customers/getcustomeraccessoriesgenericsettings` | Customers |
| no | read | GET | `/SKYCC/api/v1/customers/getcustomerexportdefinitions` | Customers |
| no | read | GET | `/SKYCC/api/v1/customers/getcustomerfeaturesettings` | Customers |
| no | read | GET | `/SKYCC/api/v1/customers/getcustomergenericsettings` | Customers |
| no | read | GET | `/SKYCC/api/v1/customers/getcustomerimportdefinitions` | Customers |
| no | read | GET | `/SKYCC/api/v1/customers/getcustomernextstopFeaturesettings` | Customers |
| no | read | GET | `/SKYCC/api/v1/customers/getcustomernextstopgenericsettings` | Customers |
| no | read | GET | `/SKYCC/api/v1/customers/getcustomertxfeaturesettings` | Customers |
| no | read | GET | `/SKYCC/api/v1/customers/getgenericsettinglogs` | Customers |
| no | read | GET | `/SKYCC/api/v1/customers/getgenericsettingsconfig` | Customers |
| no | read | GET | `/SKYCC/api/v1/customers/getProfileHistory` | Customers |
| no | read | GET | `/SKYCC/api/v1/customers/newgenerictypes` | Customers |
| no | read | GET | `/SKYCC/api/v1/customers/txconnectinfo` | Customers |
| no | read | GET | `/SKYCC/api/v1/DeviceLogs/countlogs` | Device logs |
| no | read | GET | `/SKYCC/api/v1/DeviceLogs/GetLogGroupFeatures` | Device logs |
| no | read | GET | `/SKYCC/api/v1/DeviceLogs/GetLogGroups` | Device logs |
| no | read | GET | `/SKYCC/api/v1/DeviceLogs/logs` | Device logs |
| no | read | GET | `/SKYCC/api/v1/DeviceLogs/ulsloglevels` | Device logs |
| no | read | GET | `/SKYCC/api/v1/DeviceLogs/ulslogprofilesettings` | Device logs |
| no | read | GET | `/SKYCC/api/v1/devices/configurations` | Devices |
| no | read | GET | `/SKYCC/api/v1/devices/devicerelation` | Devices |
| no | read | GET | `/SKYCC/api/v1/devices/devicesearch` | Devices |
| no | read | GET | `/SKYCC/api/v1/devices/diagnostichistory` | Devices |
| no | read | GET | `/SKYCC/api/v1/devices/diagnosticinfobyId` | Devices |
| no | read | GET | `/SKYCC/api/v1/devices/diagnostics` | Devices |
| no | read | GET | `/SKYCC/api/v1/devices/externalcardreadersettings` | Devices |
| no | read | GET | `/SKYCC/api/v1/devices/GetDeviceGsmDetails` | Devices |
| no | read | GET | `/SKYCC/api/v1/devices/getresetskydevicelogs` | Devices |
| no | read | GET | `/SKYCC/api/v1/devices/logfeatures` | Devices |
| no | read | GET | `/SKYCC/api/v1/devices/logs/flexSoloLogFileCount` | Devices |
| no | read | GET | `/SKYCC/api/v1/devices/logs/settings` | Devices |
| no | read | GET | `/SKYCC/api/v1/devices/resetgodevice` | Devices |
| no | read | GET | `/SKYCC/api/v1/devices/retriveSOTADestination` | Devices |
| no | read | GET | `/SKYCC/api/v1/devices/sensoractualsettings` | Devices |
| no | read | GET | `/SKYCC/api/v1/devices/sensors/history` | Devices |
| no | read | GET | `/SKYCC/api/v1/devices/sensorsettings` | Devices |
| no | read | GET | `/SKYCC/api/v1/devices/settings/speedsource` | Devices |
| no | read | GET | `/SKYCC/api/v1/devices/settings/speedsource/history` | Devices |
| no | read | GET | `/SKYCC/api/v1/diagnostic/multipledeviceconnectionstate` | Diagnostics |
| no | read | GET | `/SKYCC/api/v1/DocscanHealth/getdocscanhealthdownload` | Docscan |
| no | read | GET | `/SKYCC/api/v1/DocscanHealth/getdocscanhealthinfo` | Docscan |
| no | read | GET | `/SKYCC/api/v1/drivers/getforgottendriver` | Drivers |
| no | read | GET | `/SKYCC/api/v1/drivers/keyboards` | Drivers |
| no | read | GET | `/SKYCC/api/v1/drivers/mapthemes` | Drivers |
| no | read | GET | `/SKYCC/api/v1/drivers/mapviews` | Drivers |
| no | read | GET | `/SKYCC/api/v1/drivers/settings` | Drivers |
| no | read | GET | `/SKYCC/api/v1/drivers/speedwarnings` | Drivers |
| no | read | GET | `/SKYCC/api/v1/drivers/themes` | Drivers |
| no | read | GET | `/SKYCC/api/v1/environment/sensors` | Sensors & environment |
| no | read | GET | `/SKYCC/api/v1/environment/sensors/available` | Sensors & environment |
| no | read | GET | `/SKYCC/api/v1/FileRequest/getobcfile` | File requests |
| no | read | GET | `/SKYCC/api/v1/FileRequest/history` | File requests |
| no | read | GET | `/SKYCC/api/v1/instructionset` | TX-SERVICE other |
| no | read | GET | `/SKYCC/api/v1/instructionset/history` | TX-SERVICE other |
| no | read | GET | `/SKYCC/api/v1/instructionset/versions` | TX-SERVICE other |
| no | read | GET | `/SKYCC/api/v1/languages` | TX-SERVICE other |
| no | read | GET | `/SKYCC/api/v1/map/mapsets` | TX-SERVICE other |
| no | read | GET | `/SKYCC/api/v1/MessageViewer/getmessages` | Messages |
| no | read | GET | `/SKYCC/api/v1/MessageViewer/otadevicedatatypes` | Messages |
| no | read | GET | `/SKYCC/api/v1/Packages` | Packages & remote update |
| no | read | GET | `/SKYCC/api/v1/Packages/DeviceTypePackagehistory` | Packages & remote update |
| no | read | GET | `/SKYCC/api/v1/Rdd/GetCardReaderInformation` | RDD / tachograph |
| no | read | GET | `/SKYCC/api/v1/Rdd/GetCardReaderSessions` | RDD / tachograph |
| no | read | GET | `/SKYCC/api/v1/Rdd/GetCardReaderStatus` | RDD / tachograph |
| no | read | GET | `/SKYCC/api/v1/Rdd/Getmessages` | RDD / tachograph |
| no | read | GET | `/SKYCC/api/v1/Rdd/GetRddAdditionalInformation` | RDD / tachograph |
| no | read | GET | `/SKYCC/api/v1/Rdd/getrdddownload` | RDD / tachograph |
| no | read | GET | `/SKYCC/api/v1/Rdd/GetRddInfomation` | RDD / tachograph |
| no | read | GET | `/SKYCC/api/v1/Rdd/GetRddReadOutInformation` | RDD / tachograph |
| no | read | GET | `/SKYCC/api/v1/Rdd/GetRddSchedulerInformation` | RDD / tachograph |
| no | read | GET | `/SKYCC/api/v1/Rdd/GetTachoCardsOfCustomer` | RDD / tachograph |
| no | read | GET | `/SKYCC/api/v1/remotediagnostics/remotediagnostichistory` | Packages & remote update |
| no | read | GET | `/SKYCC/api/v1/RemoteMapVersion/remoteUpdateMapDataVersioninformation` | Packages & remote update |
| no | read | GET | `/SKYCC/api/v1/remoteupdate/getdeviceewtrpackages` | Packages & remote update |
| no | read | GET | `/SKYCC/api/v1/remoteupdate/getdevicesewtrpackages` | Packages & remote update |
| no | read | GET | `/SKYCC/api/v1/remoteupdate/getewtrpackages` | Packages & remote update |
| no | read | GET | `/SKYCC/api/v1/remoteupdate/history` | Packages & remote update |
| no | read | GET | `/SKYCC/api/v1/RemoteUpdateMapData` | Packages & remote update |
| no | read | GET | `/SKYCC/api/v1/RemoteUpdateMapData/getRemoteUpdateMapDataVersionInformation` | Packages & remote update |
| no | read | GET | `/SKYCC/api/v1/RemoteUpdateMapData/remoteUpdatemapDatahistory` | Packages & remote update |
| no | read | GET | `/SKYCC/api/v1/sensors/GetSensorKeys` | Sensors & environment |
| no | read | GET | `/SKYCC/api/v1/sensors/GetSensorsHistory` | Sensors & environment |
| no | read | GET | `/SKYCC/api/v1/squarrel` | TX-SERVICE other |
| no | read | GET | `/SKYCC/api/v1/squarrel/history` | TX-SERVICE other |
| no | read | GET | `/SKYCC/api/v1/squarrel/versions` | TX-SERVICE other |
| no | read | GET | `/SKYCC/api/v1/tcis` | TCI |
| no | read | GET | `/SKYCC/api/v1/TxTangoIntegrator/GetAllIntegrators` | TX-Tango |
| no | read | GET | `/SKYCC/api/v1/TxTangoIntegrator/GetCustomersByIntegrators` | TX-Tango |
| no | read | GET | `/SKYCC/api/v1/TxTangoIntegrator/GetIWSSensorsList` | TX-Tango |
| no | read | GET | `/SKYCC/api/v1/TxTangoIntegrator/integratorfunc` | TX-Tango |
| no | read | GET | `/SKYCC/api/v1/users/getcurrentuserdetails` | TX-SERVICE other |
| no | read | GET | `/SKYCC/api/v1/vehicles/getalltypevehicles` | TX-SERVICE other |
| no | read | GET | `/SKYCC/api/v1/vehicles/truckrelation` | TX-SERVICE other |
| no | read | GET | `/SKYCC/api/v1/wifi/GetWiFiPassword` | Wi-Fi |
| no | read | GET | `/SKYCC/api/v1/WiFi/history` | Wi-Fi |
| no | read | GET | `/SKYCC/api/v1/wifi/wifinetworks` | Wi-Fi |
| no | write | POST | `/api/dismissnotifications` | Identity & site |
| no | write | POST | `/api/linkcode` | Identity & site |
| no | write | POST | `/api/passwordupdate` | Identity & site |
| no | write | POST | `/api/reqpasswordreset` | Identity & site |
| no | write | POST | `/api/reqtwostepreset` | Identity & site |
| no | write | POST | `/api/setsettings` | Identity & site |
| no | write | POST | `/api/settrackinginfo` | Identity & site |
| no | write | POST | `/api/singleuse` | Identity & site |
| no | write | POST | `/api/singleusecode` | Identity & site |
| no | write | POST | `/api/startsociallink` | Identity & site |
| no | write | POST | `/api/twostep` | Identity & site |
| no | write | POST | `/api/twostepreset` | Identity & site |
| no | write | POST | `/api/twostepsetup` | Identity & site |
| no | write | POST | `/api/userhook/link` | Identity & site |
| no | write | POST | `/api/userlayout` | Identity & site |
| no | write | POST | `/api/usertile` | Identity & site |
| no | write | POST | `/api/v2/users/password/update` | Identity & site |
| no | write | POST | `/api/v2/users/update` | Identity & site |
| no | write | POST | `/api/v3/users/password/update` | Identity & site |
| no | write | POST | `/awssync/v1/admin/package/update` | AWS sync |
| no | write | POST | `/awssync/v1/devices/activate` | AWS sync |
| no | write | POST | `/awssync/v1/devices/packages/update` | AWS sync |
| no | write | POST | `/awssync/v1/devices/settings/update` | AWS sync |
| no | write | POST | `/SKYCC/api/v1/activities/settings/update` | Activities |
| no | write | POST | `/SKYCC/api/v1/adminclientws/createadminsupportedmobiledevicesetting` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/createappversion` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/createpushkey` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/createtxconnecturl` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/createtxconnectversion` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/createtxdashboardirwsurl` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/createtxdashboardiwsurl` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/createtxdashboardswsurl` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/createtxreporturl` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/createtxservicecommunicationurl` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/createtxsocialmode` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/createtxsocialurl` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/deleteadminsupportedmobiledevicesetting` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/deleteappversion` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/deletepushkey` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/deletetxconnecturl` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/deletetxconnectversion` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/deletetxdashboardirwsurl` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/deletetxdashboardiwsurl` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/deletetxdashboardswsurl` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/deletetxreporturl` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/deletetxservicecommunicationurl` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/deletetxsocialmode` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/deletetxsocialurl` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/resetpushconfigurationsettings` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/resettxconnectsettings` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/resettxdashboardsettings` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/resettxreportssettings` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/resettxsocialsettings` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/updateadminsupportedmobiledevicesetting` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/updateappversion` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/updatepushkey` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/updatetxconnecturl` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/updatetxconnectversion` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/updatetxdashboardirwsurl` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/updatetxdashboardiwsurl` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/updatetxdashboardsettings` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/updatetxdashboardswsurl` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/updatetxreporturl` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/updatetxservicecommunicationurl` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/updatetxsocialmode` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/updatetxsocialsettings` | Admin |
| no | write | POST | `/SKYCC/api/v1/adminclientws/updatetxsocialurl` | Admin |
| no | write | POST | `/SKYCC/api/v1/calibrations/trailer/create` | TX-SERVICE other |
| no | write | POST | `/SKYCC/api/v1/calibrations/trailer/update` | TX-SERVICE other |
| no | write | POST | `/SKYCC/api/v1/calibrations/vehicle/create` | TX-SERVICE other |
| no | write | POST | `/SKYCC/api/v1/calibrations/vehicle/update` | TX-SERVICE other |
| no | write | POST | `/SKYCC/api/v1/customers/accessoriesgenericsettings/update` | Customers |
| no | write | POST | `/SKYCC/api/v1/customers/addcustomerexportdefinition` | Customers |
| no | write | POST | `/SKYCC/api/v1/customers/addcustomerimportdefinition` | Customers |
| no | write | POST | `/SKYCC/api/v1/customers/adminuser/update` | Customers |
| no | write | POST | `/SKYCC/api/v1/customers/connectionstrings/update` | Customers |
| no | write | POST | `/SKYCC/api/v1/customers/create` | Customers |
| no | write | POST | `/SKYCC/api/v1/customers/customertypesettings/update` | Customers |
| no | write | POST | `/SKYCC/api/v1/customers/genericcustomerssettings/update` | Customers |
| no | write | POST | `/SKYCC/api/v1/customers/genericfeaturesettings/update` | Customers |
| no | write | POST | `/SKYCC/api/v1/customers/genericsettings/create` | Customers |
| no | write | POST | `/SKYCC/api/v1/customers/genericsettings/update` | Customers |
| no | write | POST | `/SKYCC/api/v1/customers/genericsettingsconfig/update` | Customers |
| no | write | POST | `/SKYCC/api/v1/customers/linkdefectdevicebyimei` | Customers |
| no | write | POST | `/SKYCC/api/v1/customers/linkdevicebyimei` | Customers |
| no | write | POST | `/SKYCC/api/v1/customers/nextstopcustomerssettings/update` | Customers |
| no | write | POST | `/SKYCC/api/v1/customers/nextstopgenericsettings/update` | Customers |
| no | write | POST | `/SKYCC/api/v1/customers/profilesettings/update` | Customers |
| no | write | POST | `/SKYCC/api/v1/customers/txconnectinfo/update` | Customers |
| no | write | POST | `/SKYCC/api/v1/customers/txinfocustomerssettings/update` | Customers |
| no | write | POST | `/SKYCC/api/v1/customers/update` | Customers |
| no | write | POST | `/SKYCC/api/v1/customers/updatecustomersettings` | Customers |
| no | write | POST | `/SKYCC/api/v1/DeviceLogs/AddUlsGroup` | Device logs |
| no | write | POST | `/SKYCC/api/v1/DeviceLogs/AddUlsLogFeature` | Device logs |
| no | write | POST | `/SKYCC/api/v1/DeviceLogs/AssignUlslogfeature` | Device logs |
| no | write | POST | `/SKYCC/api/v1/DeviceLogs/DeleteUlsGroup` | Device logs |
| no | write | POST | `/SKYCC/api/v1/DeviceLogs/DeleteUlslogfeature` | Device logs |
| no | write | POST | `/SKYCC/api/v1/DeviceLogs/UnAssignUlsLogGroupFeature` | Device logs |
| no | write | POST | `/SKYCC/api/v1/devices/logs/requestlogs` | Devices |
| no | write | POST | `/SKYCC/api/v1/devices/logs/settings/update` | Devices |
| no | write | POST | `/SKYCC/api/v1/devices/PostEnableDiagnostics` | Devices |
| no | write | POST | `/SKYCC/api/v1/devices/PostEnableDiagnosticsMultiple` | Devices |
| no | write | POST | `/SKYCC/api/v1/devices/resendsettings` | Devices |
| no | write | POST | `/SKYCC/api/v1/devices/resendwifisettings` | Devices |
| no | write | POST | `/SKYCC/api/v1/devices/resetskydevice` | Devices |
| no | write | POST | `/SKYCC/api/v1/devices/sendsms` | Devices |
| no | write | POST | `/SKYCC/api/v1/devices/sensorsettings/update` | Devices |
| no | write | POST | `/SKYCC/api/v1/devices/setSOTADestinations` | Devices |
| no | write | POST | `/SKYCC/api/v1/devices/settings/speedsource/update` | Devices |
| no | write | POST | `/SKYCC/api/v1/devices/settings/update` | Devices |
| no | write | POST | `/SKYCC/api/v1/devices/swap` | Devices |
| no | write | POST | `/SKYCC/api/v1/devices/ULSlogs/settings/update` | Devices |
| no | write | POST | `/SKYCC/api/v1/diagnostic/sendlinenumeration` | Diagnostics |
| no | write | POST | `/SKYCC/api/v1/drivers/ForgetDriver` | Drivers |
| no | write | POST | `/SKYCC/api/v1/drivers/settings/update` | Drivers |
| no | write | POST | `/SKYCC/api/v1/environment/sensors/delete` | Sensors & environment |
| no | write | POST | `/SKYCC/api/v1/environment/sensors/importprofiles` | Sensors & environment |
| no | write | POST | `/SKYCC/api/v1/environment/sensors/update` | Sensors & environment |
| no | write | POST | `/SKYCC/api/v1/FileRequest/sendrequest` | File requests |
| no | write | POST | `/SKYCC/api/v1/instructionset/update` | TX-SERVICE other |
| no | write | POST | `/SKYCC/api/v1/PackageAdmin/update` | Packages & remote update |
| no | write | POST | `/SKYCC/api/v1/Packages/updatePackagefiles` | Packages & remote update |
| no | write | POST | `/SKYCC/api/v1/packages/uploadupdatefiles` | Packages & remote update |
| no | write | POST | `/SKYCC/api/v1/Rdd/CancelCardReaderStatus` | RDD / tachograph |
| no | write | POST | `/SKYCC/api/v1/Rdd/DeleteTachoCardReader` | RDD / tachograph |
| no | write | POST | `/SKYCC/api/v1/Rdd/rddcancelsession` | RDD / tachograph |
| no | write | POST | `/SKYCC/api/v1/RemoteMapVersion/deletetRemoteUpdateMapDataVersion` | Packages & remote update |
| no | write | POST | `/SKYCC/api/v1/RemoteMapVersion/postRemoteUpdateMapDataVersion` | Packages & remote update |
| no | write | POST | `/SKYCC/api/v1/RemoteMapVersion/remoteupdateMapData` | Packages & remote update |
| no | write | POST | `/SKYCC/api/v1/remoteupdate/abort` | Packages & remote update |
| no | write | POST | `/SKYCC/api/v1/remoteupdate/abortewtrupdate` | Packages & remote update |
| no | write | POST | `/SKYCC/api/v1/remoteupdate/sendewtrupdate` | Packages & remote update |
| no | write | POST | `/SKYCC/api/v1/remoteupdate/settings/update` | Packages & remote update |
| no | write | POST | `/SKYCC/api/v1/remoteupdate/update` | Packages & remote update |
| no | write | POST | `/SKYCC/api/v1/RemoteUpdateMapData/postRemoteUpdateMapData` | Packages & remote update |
| no | write | POST | `/SKYCC/api/v1/RemoteUpdateMapData/postRemoteUpdateMapDataAbort` | Packages & remote update |
| no | write | POST | `/SKYCC/api/v1/squarrel/reset` | TX-SERVICE other |
| no | write | POST | `/SKYCC/api/v1/squarrel/update` | TX-SERVICE other |
| no | write | POST | `/SKYCC/api/v1/tcis/create` | TCI |
| no | write | POST | `/SKYCC/api/v1/tcis/generatecode` | TCI |
| no | write | POST | `/SKYCC/api/v1/tcis/update` | TCI |
| no | write | POST | `/SKYCC/api/v1/TxTangoIntegrator/assignuseritemstodispatcher` | TX-Tango |
| no | write | POST | `/SKYCC/api/v1/txtangointegrator/create` | TX-Tango |
| no | write | POST | `/SKYCC/api/v1/TxTangoIntegrator/edittxtangolink` | TX-Tango |
| no | write | POST | `/SKYCC/api/v1/TxTangoIntegrator/newtxtangolink` | TX-Tango |
| no | write | POST | `/SKYCC/api/v1/TxTangoIntegrator/resetintegratorfuncsettings` | TX-Tango |
| no | write | POST | `/SKYCC/api/v1/TxTangoIntegrator/setintegratorprofile` | TX-Tango |
| no | write | POST | `/SKYCC/api/v1/TxTangoIntegrator/setiwsrequestlimitations` | TX-Tango |
| no | write | POST | `/SKYCC/api/v1/txtangointegrator/update` | TX-Tango |
| no | write | POST | `/SKYCC/api/v1/TxTangoIntegrator/updateintegratorfunc` | TX-Tango |
| no | write | POST | `/SKYCC/api/v1/TxTangoIntegrator/updatepassword` | TX-Tango |
| no | write | POST | `/SKYCC/api/v1/wifi/create` | Wi-Fi |
| no | write | POST | `/SKYCC/api/v1/wifi/delete` | Wi-Fi |
| no | write | POST | `/SKYCC/api/v1/wifi/update` | Wi-Fi |
