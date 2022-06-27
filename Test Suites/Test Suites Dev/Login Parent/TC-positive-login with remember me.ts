<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>TC-positive-login with remember me</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <testSuiteGuid>b9e4d71a-8219-4d3c-8d4e-3738b92a19b1</testSuiteGuid>
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
         <id>2952db6d-1535-4916-8888-43c4331b5880</id>
         <iterationEntity>
            <iterationType>SPECIFIC</iterationType>
            <value>1</value>
         </iterationEntity>
         <testDataId>Data Files/Activation Code/Dev/activation-code-dev</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>2952db6d-1535-4916-8888-43c4331b5880</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>activationCode</value>
         <variableId>87fbee8f-48ee-4200-bc4d-146370a4e3a6</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>076ba531-73fc-410b-a7c6-5c636aff0760</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login Parent/positive cases/login with remember me</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>28f250d9-994e-4843-8861-3aa129c26937</id>
         <iterationEntity>
            <iterationType>SPECIFIC</iterationType>
            <value>1</value>
         </iterationEntity>
         <testDataId>Data Files/Login/Dev/user-login-parent-dev</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>28f250d9-994e-4843-8861-3aa129c26937</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>username</value>
         <variableId>7d47a025-5804-44eb-bff6-9be129ac7da9</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>28f250d9-994e-4843-8861-3aa129c26937</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>4a2983b4-34ad-4e85-aba3-1a727915860e</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>dfc58c43-90fc-4bc8-b0c9-b80e9956d7ef</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login Parent/positive cases/logout with remember me</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>5fee2cc2-12cc-46b7-9016-df635d9ed5a9</id>
         <iterationEntity>
            <iterationType>SPECIFIC</iterationType>
            <value>1</value>
         </iterationEntity>
         <testDataId>Data Files/Login/Dev/user-login-parent-dev</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>5fee2cc2-12cc-46b7-9016-df635d9ed5a9</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>username</value>
         <variableId>2cbc4190-fe76-449d-84ac-ae5faec546f8</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>5fee2cc2-12cc-46b7-9016-df635d9ed5a9</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>6501480f-aa9e-4f53-921a-170d3015ca59</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>888a701e-2f04-487a-846a-a3126d5997c2</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Common/Close Application</testCaseId>
   </testCaseLink>
</TestSuiteEntity>
