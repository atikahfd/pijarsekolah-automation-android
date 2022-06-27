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

'Click Button Kembali ke halaman kode aktivasi'
Mobile.tap(findTestObject('Page Login Parent/android.view.ViewGroup0 - Back to Activation Code'), 30)

'Successfully directed to List schools page, verify elements exist'
Mobile.verifyElementExist(findTestObject('Page List Schools/android.widget.TextView0 - Sekolah yang anda akses sebelumnya'), 
    30)

Mobile.verifyElementExist(findTestObject('Page List Schools/android.view.ViewGroup0 - Existing School'), 30)

Mobile.verifyElementExist(findTestObject('Page List Schools/android.view.ViewGroup0 - Add new School'), 30)

'Click Button Tambah Kode Aktivasi'
Mobile.tap(findTestObject('Page List Schools/android.view.ViewGroup0 - Add new School'), 30)

'Tap on activation code textbox'
Mobile.tap(findTestObject('Page List Schools/android.widget.EditText0 - Kode Aktivasi'), 30)

'Clear text on activation code textbox'
Mobile.clearText(findTestObject('Page List Schools/android.widget.EditText0 - Kode Aktivasi'), 30)

'Set another valid activation code'
Mobile.setText(findTestObject('Page List Schools/android.widget.EditText0 - Kode Aktivasi'), activationCode, 30)

'Click OK button'
Mobile.tap(findTestObject('Page List Schools/android.view.ViewGroup0 - Button OK'), 30)

'Delay before application closes'
Mobile.delay(2)

