import csv
import json   

def rowToObj(l):
    #lvl word pinyin def
    nl = [{'id':i, 'word':row[1], 'pinyin':row[2], 'def':row[3]} for i,row in enumerate(l)]
    #print(nl)
    return nl
s=set(range(0,5002))
words = dict.fromkeys(s)
with open('vocab.csv') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
    words = [row for row in spamreader]
    hsk1 = list(filter(lambda row: row[0] == '1', words))
    hsk2 = list(filter(lambda row: row[0] == '2', words))
    hsk3 = list(filter(lambda row: row[0] == '3', words))
    hsk4 = list(filter(lambda row: row[0] == '4', words))
    hsk5 = list(filter(lambda row: row[0] == '5', words))
    hsk6 = list(filter(lambda row: row[0] == '6', words))
    wordLists = [hsk1, hsk2, hsk3, hsk4, hsk5, hsk6]
    wordLists = map(rowToObj, wordLists)
    for x in wordLists[0]:
        print(x)
    # print(len(hsk1), len(hsk2), len(hsk3), len(hsk4), len(hsk5), len(hsk6), sum([len(l) for l in wordLists]) )


for i,l in enumerate(wordLists):
    name = "hsk" + str(i+1) + ".json"
    print(name)
    with open(name, "w") as outfile:
         json.dump(l, outfile)

