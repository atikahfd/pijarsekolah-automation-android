<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>TC-negative-verify alert shown when input an invalid username</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <testSuiteGuid>befb1dce-c4b5-495c-99bf-c27b22651c66</testSuiteGuid>
   <testCaseLink>
      <guid>1baf7dd5-e93c-4a3e-b5c7-479f71e5a33f</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Common/Open Application</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>b0a14e51-4a80-4157-baa5-0a517d2da108</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Input Kode Aktivasi/positive cases/successfully input a valid activation code</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>aac8c045-63a2-4fd7-9979-1ebd3e03b99f</id>
         <iterationEntity>
            <iterationType>SPECIFIC</iterationType>
            <value>1</value>
         </iterationEntity>
         <testDataId>Data Files/Activation Code/Dev/activation-code-dev</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>aac8c045-63a2-4fd7-9979-1ebd3e03b99f</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>activationCode</value>
         <variableId>87fbee8f-48ee-4200-bc4d-146370a4e3a6</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>e68236fb-e5be-4cfe-a7fe-86aac7d5016d</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login Parent/negative cases/verify alert shown when input an invalid username</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>ef5c0f95-c9dd-45a2-8e6c-007911a9fd1e</id>
         <iterationEntity>
            <iterationType>SPECIFIC</iterationType>
            <value>2</value>
         </iterationEntity>
         <testDataId>Data Files/Login/Dev/user-login-parent-dev</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>ef5c0f95-c9dd-45a2-8e6c-007911a9fd1e</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>username</value>
         <variableId>266b8c4c-b3a0-44ba-8b37-21af5bcc4b89</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>ef5c0f95-c9dd-45a2-8e6c-007911a9fd1e</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>bcf4eeab-720b-4b07-bb34-c2a8cf504777</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>885423f4-6dba-4a14-af5d-eef2fb350038</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Common/Close Application</testCaseId>
   </testCaseLink>
</TestSuiteEntity>
