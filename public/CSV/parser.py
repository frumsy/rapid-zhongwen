import csv
import json   

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
    wordLists = [hsk1,hsk2,hsk3,hsk4,hsk5,hsk6]
    # print(len(hsk1), len(hsk2), len(hsk3), len(hsk4), len(hsk5), len(hsk6), sum([len(l) for l in wordLists]) )
    
    # print(words)
    # for i,row in enumerate(spamreader):
    #     print(i, ', '.join(row))
    #     words[i] = row
    #     #print(i,row)
for i,l in enumerate(wordLists):
    name = "hsk" + str(i+1) + ".json"
    print(name)
    with open(name, "w") as outfile:
         json.dump(l, outfile)

