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

'Tap on activation code textbox'
Mobile.tap(findTestObject('Page Activation Code/android.widget.EditText0 - Kode Aktivasi'), 30)

'Set invalid activation code'
Mobile.setText(findTestObject('Page Activation Code/android.widget.EditText0 - Kode Aktivasi'), activationCode, 3)

'Click OK button'
Mobile.tap(findTestObject('Page Activation Code/android.view.ViewGroup0 - Button OK'), 30)

'Successfully directed to login parent page, verify elements in login parent page exist'
Mobile.verifyElementExist(findTestObject('Page Login Parent/android.widget.ImageView0 - Logo Sekolah'), 30)

Mobile.verifyElementExist(findTestObject('Page Login Parent/android.widget.TextView0 - Nama Sekolah'), 30)

Mobile.verifyElementExist(findTestObject('Page Login Parent/android.widget.EditText0 - Username'), 30)

Mobile.verifyElementExist(findTestObject('Page Login Parent/android.widget.EditText0 - Password'), 30)

Mobile.verifyElementExist(findTestObject('Page Login Parent/android.view.ViewGroup0 - View Password'), 30)

Mobile.verifyElementNotChecked(findTestObject('Page Login Parent/android.view.ViewGroup0 - rme'), 30)

Mobile.verifyElementExist(findTestObject('Page Login Parent/android.widget.TextView0 - Lupa Password'), 30)

Mobile.verifyElementExist(findTestObject('Page Login Parent/android.view.ViewGroup0 - Button Masuk'), 30)

Mobile.verifyElementExist(findTestObject('Page Login Parent/android.view.ViewGroup0 - Back to Activation Code'), 30)

'Delay before application closes'
Mobile.delay(2)

