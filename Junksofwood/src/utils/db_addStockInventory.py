import json
import random

#Load the original JSON data
with open('Junksofwood/db.json', 'r') as file:
    data = json.load(file)
    

newStock = []


count = 0
for i in range(51):

    stockID = count
    stockQTY = random.randint(0, 99)  # Random number of reviews between 0 and 99
    new_stock = {
        "stockID": str(stockID),
        "productID" : str(stockID),
        "stockQTY" : stockQTY
    }
    newStock.append(new_stock)
    count += 1




# Update the data dictionary with the new products array
data['stock'] = newStock

# Save the modified JSON back to the file
with open('Junksofwood/data.json', 'w') as file:
    json.dump(data, file, indent=4)

print("JSON file has been updated!")
