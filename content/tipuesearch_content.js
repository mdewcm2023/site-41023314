var tipuesearch = {"pages": [{'title': 'About', 'text': '倉儲: https://github.com/mdewcm2023/site-41023314.git \n 網站: https://mdewcm2023.github.io/site-41023314 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Bing', 'text': '建議採取的程式內容為: \n from browser import html, document\nbrython_div = document["brython_div"]\n# Example data for five tests\nurl1 = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw5.txt"\nurl2 = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw6.txt"\nurl3 = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw6-2.txt"\nurl4 = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/075c06b2baf1bb07665f1a98e9f88f7e81ebe1a4/1aw8.txt"\nurl5 = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw9.txt"\n \n\'\'\'\ntest1 = ["12345:80", "67890:70"]\ntest2 = ["12345:85", "67890:75"]\ntest3 = ["12345:90", "67890:80"]\ntest4 = ["12345:95", "67890:85"]\ntest5 = ["12345:100", "67890:90"]\n\'\'\'\ntest1 = open(url1).read().split("\\n")[1:]\ntest2 = open(url2).read().split("\\n")[1:]\ntest3 = open(url3).read().split("\\n")[1:]\ntest4 = open(url4).read().split("\\n")[1:]\ntest5 = open(url5).read().split("\\n")[1:]\n \n \n# Create a dictionary to store the student numbers and their test scores\nstudent_scores = {}\n  \n# Iterate over the data for each test\nfor test_data in [test1, test2, test3, test4, test5]:\n    # Iterate over the data for this test\n    for item in test_data:\n        # Split the item into its components\n        student_number, score = item.split(":")\n          \n        # Convert the score to an integer\n        try:\n            score = int(score)\n        except:\n            score = 0\n          \n        # Add the score to the list of scores for this student\n        if student_number not in student_scores:\n            student_scores[student_number] = []\n        student_scores[student_number].append(score)\n  \n# Calculate the average score for each student\nfor student_number, scores in student_scores.items():\n    average_score = int(sum(scores) / len(scores))\n    #print(f"Student {student_number} has an average score of {average_score}")\n    brython_div <= student_number\n    brython_div <= ":"\n    brython_div <= average_score\n    brython_div <= html.BR()\n \nbrython_div <= data \n 40723224:57 40823116:81 40823128:0 40823139:17 40823152:74 40823153:92 40823218:45 40823246:42 40828213:44 40828236:0 40828237:0 40828242:0 40828244:0 40840167:0 40871106:0 41023301:67 41023302:38 41023305:43 41023306:66 41023307:85 41023308:50 41023309:69 41023310:32 41023311:80 41023312:72 41023314:52 41023315:83 41023316:76 41023317:76 41023318:0 41123101:82 41123102:75 41123103:0 41123107:62 41123112:0 41123116:58 41123118:48 41123120:0 41123121:55 41123122:89 41123124:67 41123125:0 41123129:78 41123131:72 41123132:66 41123133:54 41123134:38 41123135:88 41123136:32 41123137:76 41123139:88 41123140:68 41123141:50 41123142:68 41123143:59 41123144:75 41123145:42 41123146:0 41123148:66 41123149:88 41123150:69 41123152:0 \n', 'tags': '', 'url': 'Bing.html'}, {'title': '資料結構', 'text': '從 https://mdewcm2023.github.io/site-s40723224/content/w9.html 可以知道， 若已知資料所在網路連結: \n \n 1aw5.txt \n 1aw6.txt \n 1aw6-2.txt \n 1aw8.txt \n 1aw9.txt , \n \n 分別讀取各次考試的成績, 其中利用了 list (數列), 但每次讀取後, 若無法將各學員的成績累加後求取平均, 則無法列出各學員的期中成績. \n 假如利用 dict (字典), 將學號與成績總分作對應, 就有機會列出{"學號": "成績總分", "學號": "成績總分",......} \n', 'tags': '', 'url': '資料結構.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'w9', 'text': '利用brython讀取url中的資料: \n url = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw5.txt"\ndata = open(url).read().split("\\n")\ndata = data[1:]\nfor i in data:\n    #print(i)\n    stud = i.split(":")[0]\n    score = i.split(":")[1]\n    print(stud, score) \n', 'tags': '', 'url': 'w9.html'}, {'title': '權限', 'text': '近端倉儲的設定檔案:倉儲目錄下的config中的config,代表倉儲的configiguration file(設定檔案) \n', 'tags': '', 'url': '權限.html'}, {'title': '提交', 'text': 'commit \n git commit-m \n message \n 指令執行時，隨後要提交字串，說明本次的改版說明 \n', 'tags': '', 'url': '提交.html'}]};