<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>TC-negative-verify alert shown when input an invalid password</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <testSuiteGuid>cdc72fca-47d7-4d33-a10b-ba8db47d156a</testSuiteGuid>
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
         <id>6e3429cb-b40d-4c8e-927d-2ce971c0b933</id>
         <iterationEntity>
            <iterationType>SPECIFIC</iterationType>
            <value>1</value>
         </iterationEntity>
         <testDataId>Data Files/Activation Code/Dev/activation-code-dev</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>6e3429cb-b40d-4c8e-927d-2ce971c0b933</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>activationCode</value>
         <variableId>87fbee8f-48ee-4200-bc4d-146370a4e3a6</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>e68236fb-e5be-4cfe-a7fe-86aac7d5016d</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login Parent/negative cases/verify alert shown when input an invalid password</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>5de29ba9-5006-461b-8167-ed0eb194c38b</id>
         <iterationEntity>
            <iterationType>SPECIFIC</iterationType>
            <value>3</value>
         </iterationEntity>
         <testDataId>Data Files/Login/Dev/user-login-parent-dev</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>5de29ba9-5006-461b-8167-ed0eb194c38b</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>username</value>
         <variableId>b36beac9-881b-4b55-8ec2-a686dac8f3ab</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>5de29ba9-5006-461b-8167-ed0eb194c38b</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>f18e2314-524c-4cb7-bd1b-0c5b51b926ad</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>885423f4-6dba-4a14-af5d-eef2fb350038</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Common/Close Application</testCaseId>
   </testCaseLink>
</TestSuiteEntity>
