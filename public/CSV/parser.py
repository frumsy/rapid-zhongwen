import csv
import json   

s=set(range(0,5002))
words = dict.fromkeys(s)
with open('vocab.csv') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
    for i,row in enumerate(spamreader):
        print(i, ', '.join(row))
        words[i] = row
        #print(i,row)

with open("vocab.json", "w") as outfile:
    json.dump(words, outfile)

