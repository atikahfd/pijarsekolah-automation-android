import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable

'Click on logout button'
Mobile.tap(findTestObject('Page Beranda/android.view.ViewGroup0 - Button Logout'), 3)

'Click on School Name Button to be directed to Login Page'
Mobile.tap(findTestObject('Page List Schools/android.view.ViewGroup0 - Existing School'), 2)

'Verify username in username textbox null (only placeholder)'
Mobile.verifyElementText(findTestObject('Page Login Parent/android.widget.EditText0 - Username'), 'Username')

'Verify password in password textbox null (only placeholder)'

Mobile.verifyElementText(findTestObject('Page Login Parent/android.widget.EditText0 - Password'), 'Password')

Mobile.delay(2)





