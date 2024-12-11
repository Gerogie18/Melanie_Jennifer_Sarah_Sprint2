import json

# Load the original JSON data
with open('Junksofwood/db.json', 'r') as file:
    data = json.load(file)

# Transform the products from an object to an array
new_products = []
for key, value in data['products'].items():
    product = value
    product['id'] = int(key)  # Ensure the ID is an integer
    new_products.append(product)

# Update the data dictionary with the new products array
data['products'] = new_products

# Save the modified JSON back to the file
with open('Junksofwood/data.json', 'w') as file:
    json.dump(data, file, indent=4)

print("JSON file has been updated!")
