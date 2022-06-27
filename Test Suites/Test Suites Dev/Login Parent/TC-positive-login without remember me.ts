<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>TC-positive-login without remember me</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <testSuiteGuid>9158c70c-ef55-4376-b14d-a0887def56d8</testSuiteGuid>
   <testCaseLink>
      <guid>75d9885b-ceec-462e-bb17-65ad60550a6b</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Common/Open Application</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>2bb6c24c-fe73-4e67-bd8f-13e735d51410</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Input Kode Aktivasi/positive cases/successfully input a valid activation code</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>38ed9693-3681-4fe2-9b01-595672d62831</id>
         <iterationEntity>
            <iterationType>SPECIFIC</iterationType>
            <value>1</value>
         </iterationEntity>
         <testDataId>Data Files/Activation Code/Dev/activation-code-dev</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>38ed9693-3681-4fe2-9b01-595672d62831</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>activationCode</value>
         <variableId>87fbee8f-48ee-4200-bc4d-146370a4e3a6</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>076ba531-73fc-410b-a7c6-5c636aff0760</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login Parent/positive cases/login without remember me</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>1d58f9df-b886-4593-a6a7-c10ba5139afd</id>
         <iterationEntity>
            <iterationType>SPECIFIC</iterationType>
            <value>1</value>
         </iterationEntity>
         <testDataId>Data Files/Login/Dev/user-login-parent-dev</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>1d58f9df-b886-4593-a6a7-c10ba5139afd</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>username</value>
         <variableId>9a0acc30-ed3b-4f27-8c74-8e7aec3e61d7</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>1d58f9df-b886-4593-a6a7-c10ba5139afd</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>2df00101-033a-4e13-93ff-f748ace6317f</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>dfc58c43-90fc-4bc8-b0c9-b80e9956d7ef</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login Parent/positive cases/logout without remember me</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>888a701e-2f04-487a-846a-a3126d5997c2</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Common/Close Application</testCaseId>
   </testCaseLink>
</TestSuiteEntity>
