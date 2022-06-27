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

'Tap on username textbox'
Mobile.tap(findTestObject('Page Login Parent/android.widget.EditText0 - Username'), 30)

'Set username'
Mobile.setText(findTestObject('Page Login Parent/android.widget.EditText0 - Username'), username, 3)

'Tap on username textbox'
Mobile.tap(findTestObject('Page Login Parent/android.widget.EditText0 - Password'), 30)

'Set password'
Mobile.setText(findTestObject('Page Login Parent/android.widget.EditText0 - Password'), password, 3)

'Tap on view password icon to show password'
Mobile.tap(findTestObject('Page Login Parent/android.view.ViewGroup0 - View Password'), 30)

'Delay to show password'
Mobile.delay(2)

'Tap on view password icon to hide password'
Mobile.tap(findTestObject('Page Login Parent/android.view.ViewGroup0 - View Password'), 30)

'Tap on remember me checkbox'
if (Mobile.verifyElementNotChecked(findTestObject('Page Login Parent/android.view.ViewGroup0 - rme'), 4)) {
    Mobile.checkElement(findTestObject('Page Login Parent/android.view.ViewGroup0 - rme'), 5)
}

Mobile.delay(2)

'Tap on Button Masuk'
Mobile.tap(findTestObject('Page Login Parent/android.view.ViewGroup0 - Button Masuk'), 30)

'Verify elements exist in Page Beranda'
Mobile.verifyElementExist(findTestObject('Page Beranda/android.widget.ImageView0 - Avatar'), 30)

Mobile.verifyElementExist(findTestObject('Page Beranda/android.widget.TextView0 - Hallo BapakIbu'), 30)

Mobile.verifyElementExist(findTestObject('Page Beranda/android.widget.TextView0 - Budi'), 30)

Mobile.verifyElementExist(findTestObject('Page Beranda/android.view.ViewGroup0 - Button Logout'), 30)

Mobile.verifyElementExist(findTestObject('Page Beranda/android.view.ViewGroup0 - Summary'), 30)

'Delay before logout'
Mobile.delay(2)

