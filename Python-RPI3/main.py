import pymongo
myclient = pymongo.MongoClient("mongodb://43.204.238.31:27017/")

mydb = myclient["mydatabase"]

collist = mydb.list_collection_names()
if "customers" in collist:
    print("The collection exists.")
