from bs4 import BeautifulSoup
import requests 
import time

html_text = requests.get('https://www.timesjobs.com/candidate/job-search.html?searchType=personalizedSearch&from=submit&txtKeywords=python&txtLocation=').text
html_text = requests.get('https://www.99acres.com/').text
html_text = requests.get('https://www.makaan.com/').text
html_text = requests.get('https://www.indiaproperty.com/').text
html_text = requests.get('https://www.magicbricks.com/').text
html_text = requests.get('https://www.realestateindia.com/').text
print('hi')